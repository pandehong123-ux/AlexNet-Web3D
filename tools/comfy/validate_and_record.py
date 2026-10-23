"""Inspect actual GLB buffers, assemble previews and record reproducible provenance."""
import argparse
import json
import struct
from pathlib import Path
from datetime import datetime, timezone

import numpy as np
from PIL import Image, ImageDraw
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
from scipy.spatial import cKDTree

from run_local import check_glb, sha256, write_json, MODEL


def read_glb(path):
    data = path.read_bytes()
    assert struct.unpack_from('<4sII', data) == (b'glTF', 2, len(data))
    offset, doc, blob = 12, None, None
    while offset < len(data):
        length, kind = struct.unpack_from('<II', data, offset)
        assert length % 4 == 0 and offset+8+length <= len(data)
        chunk = data[offset+8:offset+8+length]
        if kind == 0x4E4F534A:
            doc = json.loads(chunk)
        elif kind == 0x004E4942:
            blob = chunk
        offset += 8+length
    assert offset == len(data) and doc and blob
    assert len(blob) >= doc['buffers'][0]['byteLength']
    assert not any('uri' in b for b in doc['buffers'])
    types = {5120:'i1', 5121:'u1', 5122:'<i2', 5123:'<u2', 5125:'<u4', 5126:'<f4'}
    widths = {'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4,'MAT4':16}

    def accessor(index):
        a = doc['accessors'][index]
        v = doc['bufferViews'][a['bufferView']]
        dtype, n = np.dtype(types[a['componentType']]), widths[a['type']]
        start = v.get('byteOffset', 0) + a.get('byteOffset', 0)
        stride = v.get('byteStride', dtype.itemsize*n)
        assert start + (a['count']-1)*stride + dtype.itemsize*n <= len(blob)
        arr = np.ndarray((a['count'],n), dtype=dtype, buffer=blob,
                         offset=start, strides=(stride,dtype.itemsize)).copy()
        if a.get('normalized') and dtype.kind == 'u':
            arr = arr.astype(float) / np.iinfo(dtype).max
        assert np.isfinite(arr).all()
        return arr

    vertices, faces, normals, colors = [], [], [], []
    count = 0
    for mesh in doc['meshes']:
        for p in mesh['primitives']:
            assert p.get('mode', 4) == 4
            v = accessor(p['attributes']['POSITION'])
            f = accessor(p['indices']).reshape(-1,3).astype(np.int64)
            assert f.min() >= 0 and f.max() < len(v)
            vertices.append(v)
            faces.append(f+count)
            if 'NORMAL' in p['attributes']:
                normals.append(accessor(p['attributes']['NORMAL']))
            if 'COLOR_0' in p['attributes']:
                colors.append(accessor(p['attributes']['COLOR_0']))
            count += len(v)
    return doc, np.concatenate(vertices), np.concatenate(faces), normals, colors


def validate(path):
    info = check_glb(path)
    doc, v, f, ns, colors = read_glb(path)
    areas2 = np.linalg.norm(np.cross(v[f[:,1]]-v[f[:,0]], v[f[:,2]]-v[f[:,0]]), axis=1)
    assert np.all(areas2 > 1e-12), 'Degenerate triangles'
    assert ns and all(np.all(np.abs(np.linalg.norm(n,axis=1)-1) < 0.001) for n in ns)
    assert len(doc['meshes']) == 1 and len(doc['nodes']) == 1
    assert len(doc['materials']) == 1 and not doc.get('images') and not doc.get('animations')
    assert colors and all(np.all((c>=0) & (c<=1)) for c in colors)
    # Evaluate topology with material/normal export seams welded at 1e-6 m.
    unique, remap = np.unique(np.round(v,6), axis=0, return_inverse=True)
    welded = remap[f]
    edges = np.sort(np.concatenate([welded[:,[0,1]],welded[:,[1,2]],welded[:,[2,0]]]),axis=1)
    edges, counts = np.unique(edges, axis=0, return_counts=True)
    adjacency = coo_matrix((np.ones(len(edges)*2),
        (np.concatenate([edges[:,0],edges[:,1]]), np.concatenate([edges[:,1],edges[:,0]]))),
        shape=(len(unique),len(unique))).tocsr()
    ncomp, labels = connected_components(adjacency, directed=False)
    info.update({'bounds_xyz_m': [v.min(0).tolist(),v.max(0).tolist()],
                 'dimensions_xyz_m': np.ptp(v,axis=0).tolist(), 'axis_up': '+Y',
                 'origin': 'bounding-box bottom center', 'mesh_objects': len(doc['nodes']),
                 'primitives': sum(len(m['primitives']) for m in doc['meshes']),
                 'materials':len(doc['materials']), 'textures':0, 'normal_attribute':True,
                 'vertex_color_attribute':True, 'external_dependencies':[],
                 'degenerate_triangles':int((areas2<=1e-12).sum()),
                 'welded_topology':{'unique_vertices':len(unique), 'components':ncomp,
                    'component_vertices':sorted(np.bincount(labels).tolist(),reverse=True),
                    'boundary_edges':int((counts==1).sum()),
                    'edges_with_more_than_two_faces':int((counts>2).sum())},
                 'checks_passed':['GLB magic/version/length/chunk bounds','finite vertex data',
                    'triangle indices in range','nondegenerate triangles','unit normals',
                    'single mesh/node/material','COLOR_0 palette','no external assets']})
    assert abs(float(v[:,1].min())) < 1e-5 and abs(float(np.ptp(v[:,1]))-2.2) < 1e-4
    assert len(f) <= 28000 and ncomp == 1
    assert not np.any(counts != 2), 'Finished sculpture must have closed two-face edge incidence'
    return info


def previews(out):
    names = [('final-front-rgba.png','FRONT'), ('final-three-quarter-rgba.png','THREE QUARTER'),
             ('final-back-rgba.png','BACK')]
    sheet = Image.new('RGB',(1536,550),(246,248,249))
    draw = ImageDraw.Draw(sheet)
    for i,(filename,label) in enumerate(names):
        image = Image.open(out/filename).convert('RGBA')
        white = Image.new('RGBA',image.size,'white')
        white.alpha_composite(image)
        white = white.convert('RGB')
        white.save(out/filename.replace('-rgba',''))
        sheet.paste(white.resize((512,512),Image.Resampling.LANCZOS),(i*512,0))
        draw.text((i*512+20,526),label,fill=(35,56,65))
    sheet.save(out/'contact-sheet.jpg',quality=94)


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--out',type=Path,required=True)
    p.add_argument('--final',type=Path,required=True)
    p.add_argument('--visual-review',default='',help='Actual human/agent inspection statement; leave empty before viewing')
    args = p.parse_args()
    out, final = args.out.resolve(), args.final.resolve()
    report = validate(final)
    evidence = json.loads((out/'inference-evidence.json').read_text('utf-8'))
    finish = json.loads((out/'finish-report.json').read_text('utf-8'))
    attempt = evidence['successful_attempt']
    history = json.loads((out/f'attempt-{attempt}-history.json').read_text('utf-8'))
    graph = json.loads((out/f'attempt-{attempt}.api.json').read_text('utf-8'))
    raw_doc, raw_v, _, _, _ = read_glb(out/'hunyuan-raw.glb')
    embedded = raw_doc['asset'].get('extras',{}).get('prompt')
    assert embedded, 'Raw GLB must embed the executed graph'
    embedded = json.loads(embedded)
    # ComfyUI adds LoadImage.is_changed = [SHA256] during execution. Compare
    # actual node classes/inputs, then independently verify that runtime hash.
    executed_graph = {k:{'class_type':v['class_type'],'inputs':v['inputs']} for k,v in embedded.items()}
    assert executed_graph == graph, 'Executed node classes/inputs must match submitted graph'
    assert embedded['3']['is_changed'][0] == evidence['input_sha256']
    _, final_v, _, _, _ = read_glb(final)
    norm = finish['normalization']
    raw_v = raw_v.copy()
    raw_v[:,0] -= norm['raw_center_x']
    raw_v[:,1] -= norm['raw_bottom_blender_z']
    raw_v[:,2] += norm['raw_center_blender_y']
    raw_v *= norm['uniform_scale_from_raw']
    distances = cKDTree(raw_v).query(final_v)[0]
    report['distance_to_normalized_raw_vertices_m'] = {
        'mean':float(distances.mean()), 'p95':float(np.quantile(distances,0.95)), 'max':float(distances.max()),
        'method':'nearest raw vertex, not exact point-to-surface distance or scientific fidelity validation'}
    report['raw_embedded_prompt_matches_submitted_graph'] = True
    report['raw_embedded_prompt_comparison'] = 'Identical node classes and inputs; runtime LoadImage.is_changed verified separately'
    report['raw_embedded_image_fingerprint_matches_input_sha256'] = True
    write_json(out/'glb-validation.json',report)
    previews(out)
    checkpoint = Path('D:/Blender-Web3D/.local/ComfyUI-0.42.1/models/checkpoints')/MODEL
    with checkpoint.open('rb') as stream:
        n = struct.unpack('<Q',stream.read(8))[0]
        header = json.loads(stream.read(n))
    limitations = [
        'Original abstract decorative artwork, not hardware, anatomy, or a precise scientific model.',
        'Single-image generation infers depth and unseen surfaces; no exact three-leaf symmetry guarantee.',
        'Only geometry comes from Hunyuan3D. The white/teal/champagne vertex palette and PBR material are local artistic postprocessing, not learned textures.',
        'Raw surface-net output had 5 boundary edges and 721 non-manifold edges. One voxel cleanup and decimation were applied; raw GLB is preserved unchanged.',
        'Finished topology passes connectedness, two-face edge incidence, normals and GLB roundtrip checks; self-intersections, collisions, structural strength and printability are not certified.',
        'CPU Cycles previews use studio lighting. Appearance in the museum depends on its renderer and environment.',
        'No webpage integration or roaming/collision behavior was changed or tested.',
    ]
    provenance = {
        'schema_version':1, 'title':'学习之核 / Learning Core', 'status':'generated_and_validated',
        'recorded_utc':datetime.now(timezone.utc).isoformat(),
        'purpose':'Single original abstract decorative exhibit for an AI museum free-roam hall',
        'generator':{'service':'ComfyUI','endpoint':evidence['endpoint'],'version':'0.42.1',
            'server_reused':True, 'startup_flags_observed':['--listen','127.0.0.1','--port','8188','--lowvram'],
            'model':MODEL,'model_path':str(checkpoint),'model_bytes':checkpoint.stat().st_size,
            'model_metadata':header.get('__metadata__',{}),
            'hardware':'NVIDIA GeForce RTX 4060 Laptop GPU, 8 GB VRAM',
            'remote_services':False,'paid_services':False,'packages_installed':False},
        'reference':{'path':str(out/'learning-core-input.png'), 'sha256':evidence['input_sha256'],
            'creation_script':'tools/comfy/create_reference.py',
            'method':'Original local Blender sculpture reference render, Pillow-composited onto pure white; reference geometry is discarded and is not the delivered mesh.',
            'user_files_used':False},
        'inference':{'seed':evidence['seed'],'successful_attempt':attempt,
            'prompt_id':evidence['attempts'][attempt-1]['prompt_id'],
            'parameters':evidence['attempts'][attempt-1]['parameters'],
            'workflow':str(out/f'attempt-{attempt}.api.json'),
            'ui_workflow':str(out/'learning-core.workflow.json') if (out/'learning-core.workflow.json').exists() else None,
            'workflow_sha256':sha256(out/f'attempt-{attempt}.api.json'),
            'history':str(out/f'attempt-{attempt}-history.json'), 'status':history['status'],
            'cached_nodes':[data['nodes'] for event,data in history['status']['messages'] if event=='execution_cached'],
            'raw_glb':str(out/'hunyuan-raw.glb'), 'raw_sha256':sha256(out/'hunyuan-raw.glb'),
            'raw_embedded_prompt_matches_submitted_graph':True,
            'attempts':evidence['attempts']},
        'postprocess':{'script':'tools/comfy/finish_sculpture.py',
            'operations':['weld within 1e-5 raw units','remove degenerate edges and tiny debris if present',
                'one 0.012 raw-unit voxel cleanup','gentle surface smoothing, factor 0.3, 3 iterations',
                'decimate to at most 28000 triangles','continuous artistic vertex-color palette and one PBR material',
                'uniformly scale to height 2.2 m; bottom-center origin; Y-up GLB export'],
            'report':str(out/'finish-report.json'), 'geometry_replaced_with_procedural_design':False},
        'result':{'path':str(final),'sha256':sha256(final), **report},
        'materials':finish['materials'], 'axes':finish['axes'],
        'validation':{'buffer_and_topology_report':str(out/'glb-validation.json'),
            'blender_glb_reimport':finish['roundtrip'], 'visual_review':args.visual_review or 'pending',
            'previews':[str(out/n) for n in ['final-front.png','final-three-quarter.png','final-back.png','contact-sheet.jpg']]},
        'limitations':limitations,
        'scope':{'allowed_outputs':['tools/comfy/','assets/models/learning-sculpture.glb',
                    'assets/models/comfy-provenance.json','output/comfy-*/'],
            'installation_settings_or_model_files_modified':False,
            'runtime_service_files':'Unique reference upload in ComfyUI input; SaveGLB output under ComfyUI output/comfy-learning-core-20261023. Downloaded through /view into project evidence directory.',
            'git_committed':False, 'webpage_sources_modified':False}}
    provenance['reproducibility'] = {
        'readme':str(Path(__file__).parent/'README.md'),
        'scripts_sha256':{x.name:sha256(x) for x in sorted(Path(__file__).parent.glob('*.py'))},
        'ui_workflow_sha256':sha256(out/'learning-core.workflow.json') if (out/'learning-core.workflow.json').exists() else None}
    write_json(final.with_name('comfy-provenance.json'),provenance)
    print(json.dumps({'validated':report, 'provenance':str(final.with_name('comfy-provenance.json'))},ensure_ascii=True))


if __name__ == '__main__':
    main()
