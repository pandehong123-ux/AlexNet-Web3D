"""Separate four existing hardware fan rotors; never regenerate source geometry.

Run in the connected Blender with PHASE='build', or in a background Blender:
  blender --background --python-exit-code 1 --python this.py -- build
  blender --background assets/models/ai-museum-live-v003.blend \
    --python-exit-code 1 --python this.py -- render
  blender --background --python-exit-code 1 --python this.py -- validate
  blender --background assets/models/ai-museum-live-v003.blend \
    --python-exit-code 1 --python this.py -- sourceqa

The build phase writes a task-only library first. The background sourceqa phase
verifies playback and saves it as a normal BLEND with the live scene active.

Only writes this task's new live assets/manifest and output/live-blender/.
The source is retained, including its unchanged original geometry, in the new
BLEND alongside two independent playable scenes. Startup/user scenes are excluded.
"""
import bpy
import hashlib
import json
import math
import struct
import sys
from datetime import datetime, timezone
from pathlib import Path

from mathutils import Matrix, Quaternion, Vector
import numpy as np

PROJECT = Path(__file__).resolve().parents[2]
MODELS = PROJECT / 'assets/models'
OUT = PROJECT / 'output/live-blender'
SOURCE_NAME = 'COL-AI-Museum-Engineering'
SOURCE_FILE = PROJECT / 'assets/provenance/engineering-task-only.blend'
LIVE_FILE = MODELS / 'ai-museum-live-v003.blend'
MANIFEST = MODELS / 'live-manifest.json'
FPS, PERIOD_FRAMES = 24, 32
DURATION = PERIOD_FRAMES / FPS
SPEED = math.tau / DURATION
BASIS = Matrix.Rotation(math.pi / 2, 4, 'X')
SPECS = [
    {'id': 'compute', 'source_root': 'GEO-match-assembly', 'scene': 'ANIM-01-Compute-System',
     'file': 'compute-system-live.glb', 'keys': ['board','cpu','gpu','memory','network','shell'],
     'fan_part': 'shell', 'budget': {'bytes': 3*1024**2, 'nodes': 18, 'triangles': 40000}},
    {'id': 'accelerator', 'source_root': 'GEO-accelerator-assembly', 'scene': 'ANIM-02-Accelerator',
     'file': 'accelerator-live.glb', 'keys': ['compute','fan','heatsink','pcb','vram'],
     'fan_part': 'fan', 'budget': {'bytes': 2*1024**2, 'nodes': 16, 'triangles': 18000}},
]


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def dump(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


def protected_files():
    new = {'compute-system-live.glb','accelerator-live.glb','ai-museum-live-v003.blend','live-manifest.json'}
    files = [p for p in MODELS.iterdir() if p.is_file() and p.name not in new]
    files.extend(p for p in (PROJECT/'assets/provenance').iterdir() if p.is_file())
    return {str(p.relative_to(PROJECT)).replace('\\','/'):sha(p) for p in files}


def scene_fingerprint(scene):
    h = hashlib.sha256()
    h.update(json.dumps({'name':scene.name, 'frame':scene.frame_current,
        'camera':scene.camera.name if scene.camera else None,
        'units':scene.unit_settings.scale_length,'range':[scene.frame_start,scene.frame_end],
        'world':scene.world.name if scene.world else None}).encode())
    for obj in sorted(scene.objects,key=lambda o:o.name):
        h.update(json.dumps({'name':obj.name,'type':obj.type,'matrix':[list(r) for r in obj.matrix_world],
            'parent':obj.parent.name if obj.parent else None,'hidden':[obj.hide_render,obj.hide_viewport],
            'data':obj.data.name if obj.data else None,'props':str(sorted(obj.items()))}).encode())
        if obj.type=='MESH':
            vertices=np.empty(len(obj.data.vertices)*3, dtype=np.float32)
            obj.data.vertices.foreach_get('co', vertices)
            h.update(vertices.tobytes())
            indices=np.empty(len(obj.data.loops),dtype=np.int32)
            obj.data.loops.foreach_get('vertex_index',indices)
            h.update(indices.tobytes())
        if obj.type=='CURVE':
            for spline in obj.data.splines:
                h.update(str([list(p.co) for p in spline.points]).encode())
    return h.hexdigest()


def fcurves(action):
    if hasattr(action,'fcurves'):
        return list(action.fcurves)
    return [curve for layer in action.layers for strip in layer.strips
            for bag in getattr(strip,'channelbags',[]) for curve in bag.fcurves]


def ensure_source():
    scene = bpy.data.scenes.get(SOURCE_NAME)
    if scene is None:
        with bpy.data.libraries.load(str(SOURCE_FILE),link=False) as (available, requested):
            assert SOURCE_NAME in available.scenes
            requested.scenes=[SOURCE_NAME]
        scene=bpy.data.scenes[SOURCE_NAME]
    assert len(scene.objects)==1204
    assert not any(o.name.lower().startswith('cube') for o in scene.objects)
    return scene


def choose_fans(part):
    hubs = sorted([o for o in part.children_recursive if o.name.startswith('GEO-Fan-hub')],
                  key=lambda o:o.matrix_world.translation.x)
    blades = [o for o in part.children_recursive if o.name.startswith('GEO-Swept-fan-blade')]
    assert len(hubs)==2 and len(blades)==18
    groups = {hub:[hub] for hub in hubs}
    for blade in blades:
        hub = min(hubs,key=lambda h:(blade.matrix_world.translation-h.matrix_world.translation).length)
        groups[hub].append(blade)
    assert all(len(pieces)==10 for pieces in groups.values())
    assert all(not any(s in o.name for s in ['shroud','bearing','mount']) for pieces in groups.values() for o in pieces)
    return groups


def create_scene(spec, source):
    assert bpy.data.scenes.get(spec['scene']) is None, 'Inspect existing live result before rebuilding'
    scene=bpy.data.scenes.new(spec['scene'])
    scene.unit_settings.system='METRIC'
    # Keep numeric geometry coordinates compatible with the old GLBs. The
    # historical scale_length=.1 is UI metadata, not baked into old GLB units.
    scene.unit_settings.scale_length=1
    scene.render.fps=FPS
    scene.frame_start, scene.frame_end=1, PERIOD_FRAMES+1
    scene['source_scene']=SOURCE_NAME
    scene['purpose']='Existing educational schematic, independent animated fan rotors'
    scene['loop_duration_seconds']=DURATION
    scene['playback_loop_frames']='1..32; closing 360-degree key at frame 33'
    scene.world=source.world.copy()
    scene.world.name='WORLD-Live-'+spec['id']
    for original in source.objects:
        if original.type not in {'LIGHT','CAMERA'}:
            continue
        copied=original.copy()
        copied.data=original.data.copy()
        copied.name=('CAM-' if original.type=='CAMERA' else 'LGT-')+'Live-'+spec['id']+'-'+original.name
        scene.collection.objects.link(copied)
        if original.type=='CAMERA': scene.camera=copied
    return scene


def join_evaluated(scene, pieces, snapshots, batch_world, name):
    """Merge baked copies; source meshes, modifiers and materials are not edited."""
    created=[]
    inverse=batch_world.inverted()
    for original in pieces:
        mesh, normalized_world=snapshots[original.name]
        copied=mesh.copy()
        copied.name='GEO-Live-baked-'+original.name
        copied.transform(inverse @ normalized_world)
        obj=bpy.data.objects.new('GEO-Live-temp',copied)
        scene.collection.objects.link(obj)
        obj.matrix_world=batch_world
        created.append(obj)
    assert created
    bpy.ops.object.select_all(action='DESELECT')
    for obj in created: obj.select_set(True)
    bpy.context.view_layer.objects.active=created[0]
    bpy.ops.object.join()
    joined=bpy.context.object
    joined.name=name
    joined.data.name=name+'-mesh'
    return joined


def parent_in_place(obj, parent):
    world=obj.matrix_world.copy()
    obj.parent=parent
    obj.matrix_world=world
    bpy.context.view_layer.update()


def animate_rotor(rotor, rotor_id):
    # Parent local Y is the true shaft direction, in Blender AND exported GLB.
    rotor.rotation_mode='XYZ'
    rotor.rotation_euler=(0,0,0)
    for quarter in range(5):
        frame=1+quarter*PERIOD_FRAMES/4
        rotor.rotation_euler.y=quarter*math.pi/2
        rotor.keyframe_insert('rotation_euler', index=1, frame=frame, group='Fan shaft Y')
    rotor.animation_data.action.name='ACT-Live-'+rotor_id
    for curve in fcurves(rotor.animation_data.action):
        for point in curve.keyframe_points: point.interpolation='LINEAR'
        curve.modifiers.new('CYCLES')
    rotor['motion']='rotor'
    rotor['axis']='y'
    rotor['speed']=SPEED
    rotor['id']=rotor_id
    rotor['rotor_id']=rotor_id
    rotor['period_seconds']=DURATION
    rotor['animated_geometry']='nine original blades plus original hub only'
    rotor['stationary_geometry']='shroud, bearing, supports, chassis remain in static mesh'


def build_asset(spec, source):
    bpy.context.window.scene=source
    source_root=source.objects[spec['source_root']]
    parts=sorted(source_root.children,key=lambda o:o['key'])
    assert [p['key'] for p in parts]==spec['keys']
    source_inverse=source_root.matrix_world.inverted()
    fan_part=next(p for p in parts if p['key']==spec['fan_part'])
    fans=choose_fans(fan_part)
    fan_objects={o for pieces in fans.values() for o in pieces}
    depsgraph=bpy.context.evaluated_depsgraph_get()
    snapshots={}
    for part in parts:
        for obj in part.children_recursive:
            if obj.type not in {'MESH','CURVE'}: continue
            evaluated=obj.evaluated_get(depsgraph)
            mesh=bpy.data.meshes.new_from_object(evaluated,preserve_all_data_layers=True,depsgraph=depsgraph)
            mesh.name='GEO-Live-Snapshot-'+obj.name
            snapshots[obj.name]=(mesh,source_inverse @ obj.matrix_world)
    scene=create_scene(spec,source)
    bpy.context.window.scene=scene
    report={'file':spec['file'],'scene':scene.name,'part_keys':spec['keys'], 'rotors':[],
            'source_geometry_objects':len(snapshots),'source_root':source_root.name,'budget':spec['budget']}
    for part in parts:
        key=part['key']
        top=bpy.data.objects.new('GEO-Live-'+spec['id']+'-'+key,None)
        scene.collection.objects.link(top)
        top['key']=key
        top['source_part']=part.name
        # Source rotor local Y follows the shaft. Export normalization below
        # bakes glTF's conjugated parent basis into the child coordinates.
        top.matrix_world=source_inverse @ part.matrix_world @ BASIS
        bpy.context.view_layer.update()
        all_pieces=[o for o in part.children_recursive if o.name in snapshots]
        static=[o for o in all_pieces if o not in fan_objects]
        joined=join_evaluated(scene,static,snapshots,top.matrix_world.copy(),
            'GEO-Live-'+spec['id']+'-'+key+'-static')
        joined['motion']='static'
        joined['source_object_count']=len(static)
        joined['source_static_members']=json.dumps([o.name for o in static])
        parent_in_place(joined,top)
        if part != fan_part: continue
        for i,(hub,pieces) in enumerate(fans.items()):
            rotor_id=f"{spec['id']}-{key}-fan-{'left' if i==0 else 'right'}"
            center=source_inverse @ hub.matrix_world.translation
            rotor_world=Matrix.Translation(center) @ BASIS
            rotor=join_evaluated(scene,pieces,snapshots,rotor_world,'GEO-Rotor-'+rotor_id)
            parent_in_place(rotor,top)
            # Discard only roundoff from matrix decomposition, never shift pivot.
            rotor.rotation_euler=(0,0,0)
            rotor.scale=(1,1,1)
            animate_rotor(rotor,rotor_id)
            rotor['source_members']=json.dumps([o.name for o in pieces])
            report['rotors'].append({'id':rotor_id,'node_name':rotor.name,'part_key':key,
                'source_hub':hub.name,'source_members':[o.name for o in pieces],
                'pivot_part_local_xyz':list(rotor.location),
                'pivot_asset_gltf_xyz':[center.x,center.z,-center.y],
                'local_axis':'y','speed_rad_s':SPEED,
                'frames':[1,9,17,25,33],'angles_degrees':[0,90,180,270,360]})
    for mesh,_ in snapshots.values():
        if mesh.users==0: bpy.data.meshes.remove(mesh)
    export_live(scene,spec)
    return scene,report


def export_live(scene,spec):
    bpy.context.window.scene=scene
    scene.frame_end=PERIOD_FRAMES+1
    scene.frame_set(1)
    bpy.ops.object.select_all(action='DESELECT')
    for obj in scene.objects:
        if obj.type in {'MESH','EMPTY'}: obj.select_set(True)
    bpy.context.view_layer.objects.active=next(o for o in scene.objects if o.type=='EMPTY')
    bpy.ops.export_scene.gltf(filepath=str(MODELS/spec['file']),export_format='GLB',
        use_selection=True,use_active_scene=True,export_yup=True,export_extras=True,
        export_cameras=False,export_lights=False,export_animations=True,
        export_animation_mode='SCENE', export_anim_scene_split_object=False,
        export_force_sampling=True, export_frame_range=True, export_frame_step=1,
        export_optimize_animation_size=False, export_bake_animation=False)
    normalize_export(MODELS/spec['file'])
    # Playback excludes the duplicate closing frame, with Cycles extrapolation.
    scene.frame_end=PERIOD_FRAMES
    scene.frame_set(1)


def build():
    OUT.mkdir(parents=True,exist_ok=True)
    preserved=protected_files()
    active=bpy.context.window.scene
    active_file=bpy.data.filepath
    source=ensure_source()
    original={s.name:scene_fingerprint(s) for s in bpy.data.scenes}
    live_scenes=[]
    reports=[]
    try:
        for spec in SPECS:
            scene,report=build_asset(spec,source)
            live_scenes.append(scene)
            reports.append(report)
        bpy.data.libraries.write(str(LIVE_FILE),{source,*live_scenes},fake_user=True,compress=False)
    finally:
        bpy.context.window.scene=active
    after={name:scene_fingerprint(bpy.data.scenes[name]) for name in original}
    assert after==original, 'A source or user scene was modified'
    assert protected_files()==preserved, 'An old asset or evidence file changed'
    assert bpy.data.filepath==active_file
    report={'schema_version':1,'created_utc':datetime.now(timezone.utc).isoformat(),
        'blender':bpy.app.version_string,'source_scene':SOURCE_NAME,
        'geometry_policy':'Evaluated copies of existing source only; static merged by part, each rotor independently merged.',
        'original_geometry_retained_in_new_blend':True,'assets':reports,
        'animation':{'fps':FPS,'duration_seconds':DURATION,'speed_rad_s':SPEED,
            'source_keyframes':[1,9,17,25,33],'source_angles_degrees':[0,90,180,270,360],
            'source_playback_frames':[1,32],'interpolation':'linear','glb_loop':'Three AnimationMixer LoopRepeat',
            'rotation_axis':'local Y; explicit parent basis matches exported +Y'},
        'source_blend':{'file':'assets/models/'+LIVE_FILE.name,'bytes':LIVE_FILE.stat().st_size,
            'sha256':sha(LIVE_FILE),'scenes':[s.name for s in live_scenes]+[SOURCE_NAME]},
        'preservation':{'protected_files_sha256':preserved,'protected_files_unchanged':True,
            'original_scene_fingerprints':original,'source_and_user_scenes_unchanged':True,
            'active_scene_restored':bpy.context.scene.name,'user_filepath_unchanged':True},
        'validation':{'status':'pending'},'visual_qa':{'status':'pending'},
        'runtime':{'top_level_part_keys_unchanged':True,
            'rotor_node_contract':{'motion':'rotor','axis':'y','speed':'radians per second','id':'unique stable rotor ID'},
            'animation_clips':'One clip per GLB, drives both rotors; use mixer.clipAction(clip).play() with LoopRepeat.',
            'avoid_double_rotation':'Use embedded mixer tracks OR manual extras speed, not both on the same rotor.',
            'axes':'+Y up, +Z front; numeric scale matches existing engineering GLBs'},
        'limitations':['Existing educational schematic hardware; not a manufacturer-exact or mechanically certified model.',
            'Fan speed is deliberately slowed for visual readability, not a claimed physical operating RPM.',
            'No app/runtime files changed. Existing original static assets and manifests remain unchanged.']}
    dump(MANIFEST,report)
    dump(OUT/'build-report.json',report)
    print('LIVE_ASSETS_BUILT',json.dumps({'source':str(LIVE_FILE),'assets':reports},ensure_ascii=True),flush=True)


def load_glb(path):
    raw=path.read_bytes()
    assert struct.unpack_from('<4sII',raw)==(b'glTF',2,len(raw))
    offset,doc,blob=12,None,None
    while offset<len(raw):
        length,kind=struct.unpack_from('<II',raw,offset)
        assert length%4==0 and offset+8+length<=len(raw)
        data=raw[offset+8:offset+8+length]
        if kind==0x4e4f534a: doc=json.loads(data)
        if kind==0x004e4942: blob=data
        offset+=8+length
    assert offset==len(raw) and doc and blob
    assert len(doc['buffers'])==1 and 'uri' not in doc['buffers'][0]
    assert doc['buffers'][0]['byteLength']<=len(blob)
    assert not doc.get('images') and not doc.get('extensionsRequired')
    dtypes={5126:'<f4',5125:'<u4',5123:'<u2',5121:'u1'}
    widths={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}
    def accessor(index):
        a=doc['accessors'][index]
        view=doc['bufferViews'][a['bufferView']]
        dtype=np.dtype(dtypes[a['componentType']]); width=widths[a['type']]
        stride=view.get('byteStride',dtype.itemsize*width)
        start=view.get('byteOffset',0)+a.get('byteOffset',0)
        assert start+(a['count']-1)*stride+dtype.itemsize*width<=view.get('byteOffset',0)+view['byteLength']<=len(blob)
        values=np.ndarray((a['count'],width),dtype=dtype,buffer=blob,offset=start,strides=(stride,dtype.itemsize)).copy()
        assert np.isfinite(values).all()
        return values
    return doc,accessor


def normalize_export(path):
    """Bake only the new export's parent basis; preserve every source surface.

    Blender conjugates local transforms during Y-up export. Rebase children
    and their mesh coordinates together so exported rotor local Y remains the
    shaft direction, while world positions and normals remain identical.
    Also remove the frame-1 time offset and restore the first sampled pose.
    """
    raw=path.read_bytes()
    json_length=struct.unpack_from('<I',raw,12)[0]
    doc=json.loads(raw[20:20+json_length])
    if doc.get('asset',{}).get('extras',{}).get('live_basis_normalized'):
        return
    blob=bytearray(raw[28+json_length:])
    def values(index):
        a=doc['accessors'][index];v=doc['bufferViews'][a['bufferView']]
        assert a['componentType']==5126
        width={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']]
        return np.ndarray((a['count'],width),dtype='<f4',buffer=blob,
            offset=v.get('byteOffset',0)+a.get('byteOffset',0),
            strides=(v.get('byteStride',4*width),4))
    def quaternion(q):
        return Quaternion((q[3],q[0],q[1],q[2]))
    def gltf(q):
        return [q.x,q.y,q.z,q.w]
    changed=set(); child_basis={}
    roots=doc['scenes'][doc.get('scene',0)]['nodes']
    for index in roots:
        root=doc['nodes'][index]
        q=quaternion(root.get('rotation',[0,0,0,1]))
        assert np.allclose(q.to_matrix(),BASIS.to_3x3(),atol=1e-5)
        c=np.array(q.to_matrix(),dtype=np.float64)
        root.pop('rotation',None)
        for child_index in root.get('children',[]):
            child=doc['nodes'][child_index]
            assert not child.get('children'), 'Only merged static and rotor children expected'
            child_basis[child_index]=q
            child['translation']=(c@np.array(child.get('translation',[0,0,0]))).tolist()
            cq=quaternion(child.get('rotation',[0,0,0,1]))
            child['rotation']=gltf(q@cq@q.conjugated())
            for primitive in doc['meshes'][child['mesh']]['primitives']:
                for semantic in ['POSITION','NORMAL','TANGENT']:
                    accessor_index=primitive['attributes'].get(semantic)
                    if accessor_index is None or accessor_index in changed: continue
                    a=values(accessor_index)
                    a[:,:3]=a[:,:3]@c.T
                    if semantic=='POSITION':
                        doc['accessors'][accessor_index]['min']=a.min(axis=0).tolist()
                        doc['accessors'][accessor_index]['max']=a.max(axis=0).tolist()
                    changed.add(accessor_index)
    shifted=set(); rotated=set()
    for animation in doc['animations']:
        for channel in animation['channels']:
            assert channel['target']['path']=='rotation'
            index=channel['target']['node'];q=child_basis[index]
            sampler=animation['samplers'][channel['sampler']]
            times=values(sampler['input'])
            if sampler['input'] not in shifted:
                times-=float(times[0,0])
                doc['accessors'][sampler['input']]['min']=[float(times[0,0])]
                doc['accessors'][sampler['input']]['max']=[float(times[-1,0])]
                shifted.add(sampler['input'])
            output=values(sampler['output'])
            if sampler['output'] not in rotated:
                for k in range(len(output)):
                    output[k]=gltf(q@quaternion(output[k])@q.conjugated())
                    if k and np.dot(output[k-1],output[k])<0: output[k]*=-1
                rotated.add(sampler['output'])
            doc['nodes'][index]['rotation']=output[0].tolist()
    doc['asset'].setdefault('extras',{})['live_basis_normalized']=True
    encoded=json.dumps(doc,separators=(',',':'),ensure_ascii=True).encode()
    encoded+=b' '*((-len(encoded))%4)
    total=12+8+len(encoded)+8+len(blob)
    path.write_bytes(struct.pack('<4sII',b'glTF',2,total)+
        struct.pack('<II',len(encoded),0x4e4f534a)+encoded+
        struct.pack('<II',len(blob),0x004e4942)+blob)


def validate():
    report=json.loads(MANIFEST.read_text('utf-8'))
    for spec,record in zip(SPECS,report['assets']):
        path=MODELS/spec['file']
        doc,accessor=load_glb(path)
        roots=doc['scenes'][doc.get('scene',0)]['nodes']
        assert sorted(doc['nodes'][i]['extras']['key'] for i in roots)==spec['keys']
        nodes=doc['nodes']
        assert all(not n.get('name','').lower().startswith('cube') for n in nodes)
        rotors={i:n for i,n in enumerate(nodes) if n.get('extras',{}).get('motion')=='rotor'}
        assert len(rotors)==2
        expected={r['id']:r for r in record['rotors']}
        for i,node in rotors.items():
            extras=node['extras']; item=expected[extras['id']]
            assert extras['axis']=='y' and abs(extras['speed']-SPEED)<1e-6
            assert np.allclose(node.get('scale',[1,1,1]),[1,1,1],atol=1e-5)
            assert np.allclose(node.get('rotation',[0,0,0,1]),[0,0,0,1],atol=1e-5)
            assert np.allclose(node['translation'],item['pivot_part_local_xyz'],atol=1e-5)
            parents=[j for j,n in enumerate(nodes) if i in n.get('children',[])]
            assert len(parents)==1 and nodes[parents[0]]['extras']['key']==item['part_key']
            parent=nodes[parents[0]]
            assert np.allclose(parent.get('rotation',[0,0,0,1]),[0,0,0,1],atol=1e-5)
            pivot=np.array(parent.get('translation',[0,0,0]))+np.array(node['translation'])
            assert np.allclose(pivot,item['pivot_asset_gltf_xyz'],atol=1e-5)
            assert len(json.loads(extras['source_members']))==10
            assert all('blade' in name or 'hub' in name for name in json.loads(extras['source_members']))
        triangles=vertices=primitives=0
        for mesh in doc['meshes']:
            for primitive in mesh['primitives']:
                assert primitive.get('mode',4)==4
                positions=accessor(primitive['attributes']['POSITION'])
                indices=accessor(primitive['indices']).reshape(-1,3)
                assert indices.min()>=0 and indices.max()<len(positions)
                normals=accessor(primitive['attributes']['NORMAL'])
                assert np.allclose(np.linalg.norm(normals,axis=1),1,atol=0.002)
                assert np.all(np.linalg.norm(np.cross(positions[indices[:,1]]-positions[indices[:,0]],
                    positions[indices[:,2]]-positions[indices[:,0]]),axis=1)>1e-12)
                vertices+=len(positions); triangles+=len(indices); primitives+=1
        old_name='compute-system.glb' if spec['id']=='compute' else 'accelerator.glb'
        old,_=load_glb(MODELS/old_name)
        old_triangles=sum(old['accessors'][p['indices']]['count']//3 for m in old['meshes'] for p in m['primitives'])
        assert triangles==old_triangles, 'No original surfaces may be lost or duplicated'
        assert len(doc['animations'])==1
        animation=doc['animations'][0]
        # Pure rotation only: no housing, translation, scale or part tracks.
        assert len(animation['channels'])==2
        channels={channel['target']['node']:channel for channel in animation['channels']}
        assert set(channels)==set(rotors)
        tracks=[]
        for node_index,channel in channels.items():
            assert channel['target']['path']=='rotation'
            sampler=animation['samplers'][channel['sampler']]
            assert sampler.get('interpolation','LINEAR')=='LINEAR'
            times=accessor(sampler['input']).flatten()
            quats=accessor(sampler['output'])
            assert len(times)>=5 and len(quats)==len(times)
            assert np.all(np.diff(times)>0) and abs(times[0])<1e-6 and abs(times[-1]-DURATION)<1e-5
            assert np.allclose(np.linalg.norm(quats,axis=1),1,atol=0.001)
            assert np.allclose(quats[:,[0,2]],0,atol=1e-5)
            # Unwrap around local Y; q and -q are equivalent rotations. Preserve
            # all quarter turns, monotonic direction and exact 2*pi revolution.
            angles=np.unwrap(2*np.arctan2(quats[:,1],quats[:,3]))
            assert np.all(np.diff(angles)>0) and abs((angles[-1]-angles[0])-math.tau)<1e-4
            assert np.allclose(angles-angles[0],times*SPEED,atol=1e-4)
            assert abs(np.dot(quats[0],quats[-1]))>0.99999
            assert np.max(np.abs(np.diff(angles)))<=math.pi/2+1e-4
            tracks.append({'id':nodes[node_index]['extras']['id'],'samples':len(times),
                'duration_seconds':float(times[-1]),'rotation_degrees':float((angles[-1]-angles[0])*180/math.pi),
                'axis':'local y','speed_rad_s':SPEED,'continuous_loop':True})
        assert path.stat().st_size<=spec['budget']['bytes'] and len(nodes)<=spec['budget']['nodes']
        assert triangles<=spec['budget']['triangles']
        record.update({'bytes':path.stat().st_size,'sha256':sha(path),'nodes':len(nodes),'meshes':len(doc['meshes']),
            'materials':len(doc.get('materials',[])),'vertices':vertices,'triangles':triangles,'primitives':primitives,
            'static_meshes':sum(n.get('extras',{}).get('motion')=='static' for n in nodes),
            'rotor_count':len(rotors),'animation_clips':len(doc['animations']),
            'clip_name':animation.get('name'),'animation_tracks':tracks,
            'checks':['GLB header/chunks/buffers','finite positions and valid triangle indices',
                'unit normals and nonzero triangle areas','unchanged triangle count from original',
                'same six/five top-level part keys','exact two isolated rotors per asset',
                'hub-center pivots in correct parent','static shrouds/bearings/supports excluded',
                'local-Y rotation only, full monotonic 360-degree loop','size/node/triangle budgets']})
    all_ids=[rotor['id'] for a in report['assets'] for rotor in a['rotors']]
    assert len(all_ids)==len(set(all_ids))==4
    assert protected_files()==report['preservation']['protected_files_sha256']
    report['validation']={'status':'passed','unique_rotors':4,'old_asset_hashes_unchanged':True,
                          'script_sha256':sha(Path(__file__))}
    dump(MANIFEST,report)
    dump(OUT/'glb-validation.json',report['assets'])
    print('LIVE_GLB_VALIDATION_PASSED',json.dumps([{k:a[k] for k in ['file','bytes','nodes','triangles','rotor_count','animation_clips']} for a in report['assets']]),flush=True)


def aim(obj,target):
    obj.rotation_euler=(Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()


def finalize_source():
    """In a background process, turn the task library into an ordinary BLEND.

    The connected user's file is never saved or replaced. The original source
    scene stays intact; only the two task scenes receive useful preview cameras.
    """
    assert bpy.app.background, 'Finalize the new source only in background Blender'
    report=json.loads(MANIFEST.read_text('utf-8'))
    source=bpy.data.scenes[SOURCE_NAME]
    bpy.context.window.scene=source
    bpy.context.view_layer.update()
    assert scene_fingerprint(source)==report['preservation']['original_scene_fingerprints'][SOURCE_NAME]
    assert len(source.objects)==1204
    expected={SOURCE_NAME,*(s['scene'] for s in SPECS)}
    for scene in list(bpy.data.scenes):
        if scene.name not in expected:
            assert not scene.objects, 'Refuse to remove a user scene'
            bpy.data.scenes.remove(scene)
    assert not any(o.name.lower().startswith('cube') for o in bpy.data.objects)
    results=[]
    for spec in SPECS:
        scene=bpy.data.scenes[spec['scene']]
        bpy.context.window.scene=scene
        static=[o for o in scene.objects if o.get('motion')=='static']
        rotors=[o for o in scene.objects if o.get('motion')=='rotor']
        assert len(rotors)==2 and len(static)==len(spec['keys'])
        scene.frame_set(1)
        matrices={o.name:np.array(o.matrix_world) for o in static}
        centers={o.name:np.array(o.matrix_world.translation) for o in rotors}
        for rotor in rotors:
            curves=fcurves(rotor.animation_data.action)
            assert len(curves)==1 and curves[0].data_path=='rotation_euler' and curves[0].array_index==1
            assert [p.co.x for p in curves[0].keyframe_points]==[1,9,17,25,33]
            assert all(p.interpolation=='LINEAR' for p in curves[0].keyframe_points)
            assert any(m.type=='CYCLES' for m in curves[0].modifiers)
        for frame in [1,9,17,25,33,41]:
            scene.frame_set(frame)
            for rotor in rotors:
                angle=(frame-1)*math.tau/PERIOD_FRAMES
                if frame>33: angle%=math.tau
                assert abs(rotor.rotation_euler.y-angle)<1e-5
                assert abs(rotor.rotation_euler.x)+abs(rotor.rotation_euler.z)<1e-6
                assert np.allclose(rotor.matrix_world.translation,centers[rotor.name],atol=1e-6)
            assert all(np.allclose(o.matrix_world,matrices[o.name],atol=1e-6) for o in static)
        scene.frame_set(1)
        scene.frame_start,scene.frame_end=1,32
        focus=Vector((0.75,0,0.2)) if spec['id']=='compute' else Vector((0,0,0))
        camera=scene.camera
        camera.location=focus+Vector((11,-16,15)) if spec['id']=='compute' else focus+Vector((8,-10,10))
        aim(camera,focus)
        camera.data.type='ORTHO';camera.data.ortho_scale=16 if spec['id']=='compute' else 8.5
        results.append({'scene':scene.name,'rotors':len(rotors),'static_parts':len(static),
            'keyframes':[1,9,17,25,33],'local_y_rotation_verified':True,
            'cycle_extrapolation_verified_through_frame':41,
            'support_matrices_and_pivots_fixed':True,'playback_range':[1,32]})
    bpy.context.window.scene=bpy.data.scenes[SPECS[0]['scene']]
    # Save to a task output first so no .blend1 is written outside the allowlist.
    temporary=OUT/'reviewable-live-source.blend'
    if temporary.exists(): temporary.unlink()
    bpy.ops.wm.save_as_mainfile(filepath=str(temporary),check_existing=False,copy=True)
    temporary.replace(LIVE_FILE)
    assert scene_fingerprint(source)==report['preservation']['original_scene_fingerprints'][SOURCE_NAME]
    assert protected_files()==report['preservation']['protected_files_sha256']
    qa={'status':'passed','ordinary_blend_file':True,'default_scene':SPECS[0]['scene'],
        'scenes':sorted(expected),'no_cube':True,'original_source_scene_unchanged':True,'playback':results}
    report['source_blend'].update({'bytes':LIVE_FILE.stat().st_size,'sha256':sha(LIVE_FILE),
        'scenes':sorted(expected),'default_scene':SPECS[0]['scene'],'qa':qa})
    report['animation']['rotation_axis']='local Y in source and GLB; exported child coordinates rebased without changing world surfaces'
    report['animation']['export_normalization']={'parent_rotation_baked_into_child_coordinates':True,
        'animation_quaternions_conjugated_to_same_basis':True,'time_zero_shifted_to_first_sample':True,
        'initial_node_pose_matches_first_sample':True}
    dump(MANIFEST,report)
    dump(OUT/'source-blend-qa.json',qa)
    print('SOURCE_BLEND_PLAYBACK_QA_PASSED',json.dumps(qa),flush=True)


def render():
    """Reimport delivered GLBs to prove the export can reproduce the motion."""
    OUT.mkdir(parents=True,exist_ok=True)
    report=json.loads(MANIFEST.read_text('utf-8'))
    result=[]
    for spec in SPECS:
        scene=bpy.data.scenes.new('QA-Delivered-'+spec['id'])
        bpy.context.window.scene=scene
        scene.render.fps=FPS
        bpy.ops.import_scene.gltf(filepath=str(MODELS/spec['file']))
        scene.frame_set(1)
        scene.render.engine='CYCLES'; scene.cycles.device='CPU'
        scene.cycles.samples=20;scene.cycles.use_denoising=True
        scene.render.resolution_x=1100;scene.render.resolution_y=820
        scene.render.resolution_percentage=100
        scene.render.image_settings.file_format='PNG'
        scene.render.film_transparent=True
        scene.world=bpy.data.worlds.new('WORLD-LiveQA-'+spec['id'])
        scene.world.use_nodes=True
        bg=scene.world.node_tree.nodes.get('Background')
        bg.inputs['Color'].default_value=(0.10,0.13,0.16,1)
        bg.inputs['Strength'].default_value=0.5
        if spec['id']=='compute':
            focus=Vector((-3.6,0,2.87)); scale=4.0
        else:
            focus=Vector((0,0,1.05)); scale=6.4
        cam_data=bpy.data.cameras.new('CAM-LiveQA-'+spec['id'])
        cam=bpy.data.objects.new(cam_data.name,cam_data);scene.collection.objects.link(cam)
        cam_data.type='ORTHO';cam_data.ortho_scale=scale
        cam.location=focus+Vector((0.8,-3.0,8.5))
        aim(cam,focus);scene.camera=cam
        for label,offset,power,size in [('key',(-4,-5,7),1700,5),('fill',(5,-1,5),1100,4),('rim',(1,6,7),2000,4)]:
            data=bpy.data.lights.new('LGT-LiveQA-'+label,'AREA')
            data.energy=power;data.shape='DISK';data.size=size
            light=bpy.data.objects.new(data.name,data);scene.collection.objects.link(light)
            light.location=focus+Vector(offset);aim(light,focus)
        rotors=[o for o in scene.objects if o.get('motion')=='rotor']
        assert len(rotors)==2
        static=[o for o in scene.objects if o.get('motion')=='static']
        matrices={o.name:[list(r) for r in o.matrix_world] for o in static}
        pivots={o.name:tuple(o.matrix_world.translation) for o in rotors}
        frames=[]
        for frame in [1,9,17,25]:
            scene.frame_set(frame)
            assert all(np.allclose([list(r) for r in o.matrix_world],matrices[o.name],atol=1e-6) for o in static)
            assert all(np.allclose(o.matrix_world.translation,pivots[o.name],atol=1e-6) for o in rotors)
            path=OUT/f"{spec['id']}-frame-{frame:03}.png"
            scene.render.filepath=str(path)
            bpy.ops.render.render(write_still=True)
            frames.append({'frame':frame,'angle_degrees':(frame-1)*360/PERIOD_FRAMES,
                'file':str(path.relative_to(PROJECT)).replace('\\','/'),'bytes':path.stat().st_size,
                'sha256':sha(path)})
        result.append({'asset':spec['file'],'rendered_from':'reimported delivered animated GLB',
            'resolution':[1100,820],'frames':frames,'fixed_support_matrices_unchanged':True,
            'rotor_pivots_stationary':True})
    dump(OUT/'animation-render-report.json',result)
    print('DELIVERED_GLB_ANIMATION_FRAMES_RENDERED',flush=True)


def reopen_source_qa():
    assert bpy.app.background
    assert Path(bpy.data.filepath).resolve()==LIVE_FILE.resolve()
    assert bpy.context.scene.name==SPECS[0]['scene']
    assert set(s.name for s in bpy.data.scenes)=={SOURCE_NAME,*(s['scene'] for s in SPECS)}
    assert not any(o.name.lower().startswith('cube') for o in bpy.data.objects)
    report=json.loads(MANIFEST.read_text('utf-8'))
    assert sha(LIVE_FILE)==report['source_blend']['sha256']
    active=bpy.context.scene
    bpy.context.window.scene=bpy.data.scenes[SOURCE_NAME]
    bpy.context.view_layer.update()
    assert scene_fingerprint(bpy.context.scene)==report['preservation']['original_scene_fingerprints'][SOURCE_NAME]
    bpy.context.window.scene=active
    dump(OUT/'source-reopen-qa.json',{'status':'passed','sha256':sha(LIVE_FILE),
        'default_scene':active.name,'scene_count':len(bpy.data.scenes),'no_cube':True,
        'original_source_scene_fingerprint_unchanged':True,'normal_blend_opened_without_empty_library_scene':True})
    print('SOURCE_BLEND_REOPEN_QA_PASSED',flush=True)


def accept(review):
    assert isinstance(review,str) and len(review)>60
    report=json.loads(MANIFEST.read_text('utf-8'))
    assert report['validation']['status']=='passed'
    mixer=json.loads((OUT/'three-mixer-qa.json').read_text('utf-8'))
    assert mixer['status']=='passed'
    assert report['source_blend']['qa']['status']=='passed'
    assert sha(LIVE_FILE)==report['source_blend']['sha256']
    reopened=json.loads((OUT/'source-reopen-qa.json').read_text('utf-8'))
    assert reopened['status']=='passed' and reopened['sha256']==sha(LIVE_FILE)
    report['source_blend']['reopen_qa']=reopened
    assert protected_files()==report['preservation']['protected_files_sha256']
    report['runtime']['tested_in_three']=mixer
    report['validation']['script_sha256']=sha(Path(__file__))
    frames=json.loads((OUT/'animation-render-report.json').read_text('utf-8'))
    for asset in frames:
        for frame in asset['frames']:
            assert sha(PROJECT/frame['file'])==frame['sha256']
    report['visual_qa']={'status':'accepted','review':review,
        'gate':'animation-quality-gate','renders_from_delivered_glb':True,'frames':frames,
        'contact_sheet':'output/live-blender/rotors-contact-sheet.png',
        'reviewed_utc':datetime.now(timezone.utc).isoformat()}
    assert (OUT/'rotors-contact-sheet.png').exists()
    report['visual_qa']['contact_sheet_sha256']=sha(OUT/'rotors-contact-sheet.png')
    report['visual_qa']['per_asset_contact_sheets']=[
        {'file':'output/live-blender/'+s['id']+'-contact-sheet.png',
         'sha256':sha(OUT/(s['id']+'-contact-sheet.png')),
         'frame_difference_report':json.loads((OUT/(s['id']+'-contact-report.json')).read_text('utf-8'))} for s in SPECS]
    assert all(not item['frame_difference_report']['warnings'] for item in report['visual_qa']['per_asset_contact_sheets'])
    report['visual_qa']['combined_sheet_warning_review']='The combined-sheet helper compares the last compute image to the first accelerator image and flags their different subjects. This is a row/asset boundary, not a temporal jump. Both individual four-frame reports have zero warnings.'
    dump(MANIFEST,report)
    dump(OUT/'final-live-report.json',report)
    print('LIVE_ANIMATION_QA_ACCEPTED',flush=True)


if __name__=='__main__':
    phase=globals().get('PHASE',sys.argv[sys.argv.index('--')+1] if '--' in sys.argv else 'validate')
    if phase=='build': build()
    elif phase=='validate': validate()
    elif phase=='render': render()
    elif phase=='sourceqa': finalize_source()
    elif phase=='reopenqa': reopen_source_qa()
    elif phase=='normalize':
        for spec in SPECS: normalize_export(MODELS/spec['file'])
    elif phase=='reexport':
        for spec in SPECS: export_live(bpy.data.scenes[spec['scene']],spec)
    elif phase=='accept': accept(globals().get('VISUAL_REVIEW'))
    else: raise ValueError('Expected build, validate, sourceqa, reopenqa, reexport, normalize, render, or accept')
