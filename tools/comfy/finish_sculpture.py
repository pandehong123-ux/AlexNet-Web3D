"""Finish ONLY the real Hunyuan output in an isolated background Blender.

No replacement geometry, pedestal, floor, animation, internet, or live-scene edits.
Run: blender --background --factory-startup --python-exit-code 1 --python this.py
     -- OUTPUT_COMFY_DIR FINAL_GLB
"""
import bpy
import bmesh
import json
import math
import sys
from pathlib import Path
from mathutils import Vector

sys.path.insert(0, str(Path(__file__).parent))
from create_reference import material, studio, aim


def topology(obj):
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    bm.verts.ensure_lookup_table()
    remaining = set(bm.verts)
    sizes = []
    while remaining:
        todo = [remaining.pop()]
        count = 0
        while todo:
            v = todo.pop()
            count += 1
            for e in v.link_edges:
                other = e.other_vert(v)
                if other in remaining:
                    remaining.remove(other)
                    todo.append(other)
        sizes.append(count)
    result = {'vertices': len(bm.verts), 'edges': len(bm.edges),
              'triangles': sum(len(f.verts) - 2 for f in bm.faces),
              'boundary_edges': sum(e.is_boundary for e in bm.edges),
              'non_manifold_edges': sum(not e.is_manifold for e in bm.edges),
              'component_vertex_counts': sorted(sizes, reverse=True)}
    bm.free()
    return result


def cleanup(obj):
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=0.00001)
    bmesh.ops.dissolve_degenerate(bm, dist=0.000001, edges=list(bm.edges))
    remaining = set(bm.verts)
    islands = []
    while remaining:
        comp = [remaining.pop()]
        todo = list(comp)
        while todo:
            v = todo.pop()
            for e in v.link_edges:
                other = e.other_vert(v)
                if other in remaining:
                    remaining.remove(other)
                    todo.append(other)
                    comp.append(other)
        islands.append(comp)
    limit = max(len(c) for c in islands) * 0.003
    debris = [v for c in islands if len(c) < limit for v in c]
    if debris:
        bmesh.ops.delete(bm, geom=debris, context='VERTS')
    # Close only tiny pre-existing boundary loops; do not remesh or replace shape.
    boundary = [e for e in bm.edges if e.is_boundary]
    if boundary:
        bmesh.ops.holes_fill(bm, edges=boundary, sides=8)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(obj.data)
    bm.free()
    return len(debris)


def render_view(out, name, cam_pos, target, scale):
    scene = bpy.context.scene
    scene.camera.location = cam_pos
    aim(scene.camera, target)
    scene.camera.data.ortho_scale = scale
    scene.render.filepath = str(out / name)
    bpy.ops.render.render(write_still=True)


def main():
    args = sys.argv[sys.argv.index('--') + 1:]
    out, final = [Path(x).resolve() for x in args[:2]]
    assert final.name == 'learning-sculpture.glb'
    raw = out / 'hunyuan-raw.glb'
    assert raw.exists(), 'No real Hunyuan output; refuse procedural substitution.'
    evidence = json.loads((out / 'inference-evidence.json').read_text('utf-8'))
    assert evidence['success'], 'Inference must succeed before finishing.'
    assert set(bpy.data.objects.keys()).issubset({'Cube', 'Camera', 'Light'})
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    bpy.ops.import_scene.gltf(filepath=str(raw))
    meshes = [o for o in bpy.context.selected_objects if o.type == 'MESH']
    assert len(meshes) == 1, 'Expected one generated sculpture mesh'
    obj = meshes[0]
    obj.name = 'GEO-Learning-Core'
    obj.data.name = 'GEO-Hunyuan-Learning-Core'
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    report = {'raw_topology_blender': topology(obj), 'source': str(raw),
              'geometry_origin': 'ComfyUI local Hunyuan3D inference; no procedural replacement geometry'}
    # Document the actual unedited neural output, not the original reference.
    studio(bpy.context.scene, size=768)
    render_view(out, 'raw-front-rgba.png', (0, -7, 0.2), (0, 0, 0), 2.7)
    report['removed_debris_vertices'] = cleanup(obj)
    # Surface-net extraction can leave overlapping/non-manifold cells. One
    # local voxel remesh of the REAL inferred surface removes their visible
    # pinholes; original inference bytes remain untouched beside the result.
    if report['raw_topology_blender']['non_manifold_edges']:
        obj.data.remesh_voxel_size = 0.012
        obj.data.remesh_voxel_adaptivity = 0.0
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.voxel_remesh()
        report['voxel_cleanup'] = {'voxel_size_raw_units': 0.012, 'passes': 1,
                                    'topology_after': topology(obj)}
    smooth = obj.modifiers.new('GEO-Gentle-Neural-Surface-Polish', 'SMOOTH')
    smooth.factor, smooth.iterations = 0.3, 3
    bpy.ops.object.modifier_apply(modifier=smooth.name)
    before = sum(len(p.vertices)-2 for p in obj.data.polygons)
    if before > 28000:
        dec = obj.modifiers.new('GEO-Web-Triangle-Budget', 'DECIMATE')
        dec.ratio = 28000 / before
        dec.use_collapse_triangulate = True
        bpy.ops.object.modifier_apply(modifier=dec.name)
    report['processed_topology_blender'] = topology(obj)
    # Single PBR material and continuous vertex colors: no face-mask stair steps,
    # no procedural-only shader or external textures in the delivered GLB.
    obj.data.materials.clear()
    porcelain = Vector((0.73, 0.84, 0.87))
    teal = Vector((0.025, 0.28, 0.34))
    gold = Vector((0.66, 0.40, 0.16))
    mat = material('MAT-Satin-Ceramic-Learning-Palette', (1, 1, 1), 0.28, 0.28)
    colors = obj.data.color_attributes.new(name='LearningPalette', type='FLOAT_COLOR', domain='POINT')
    obj.data.color_attributes.active_color = colors
    node = mat.node_tree.nodes.new('ShaderNodeVertexColor')
    node.layer_name = colors.name
    mat.node_tree.links.new(node.outputs['Color'], mat.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])
    obj.data.materials.append(mat)
    def smoothstep(a, b, x):
        t = max(0.0, min(1.0, (x-a)/(b-a)))
        return t*t*(3-2*t)
    # Artistic palette in original generated coordinates; explicitly not learned
    # textures. Interpolation across triangles creates a soft glazed transition.
    for vertex in obj.data.vertices:
        p = vertex.co
        x, z = p.x, p.z
        r = math.hypot(x, z)
        color = porcelain.copy()
        if r > 0.14:
            angle = math.atan2(z, x)
            leaf = min(range(3), key=lambda k: abs(math.atan2(
                math.sin(angle-(math.pi/2+k*math.tau/3)),
                math.cos(angle-(math.pi/2+k*math.tau/3)))))
            phi = math.pi/2 + leaf*math.tau/3
            along = x*math.cos(phi) + z*math.sin(phi)
            across = -x*math.sin(phi) + z*math.cos(phi)
            ellipse = math.sqrt(((along-0.51)/0.51)**2 + (across/0.32)**2)
            color = porcelain.lerp(teal, 1-smoothstep(0.76, 1.12, ellipse))
        color = color.lerp(gold, 1-smoothstep(0.20, 0.34, r))
        colors.data[vertex.index].color = (*color, 1)
    for poly in obj.data.polygons:
        poly.material_index = 0
        poly.use_smooth = True
    # Origin at floor projection; units are meters. Blender Z becomes glTF Y.
    coords = [v.co.copy() for v in obj.data.vertices]
    lo = Vector(tuple(min(v[i] for v in coords) for i in range(3)))
    hi = Vector(tuple(max(v[i] for v in coords) for i in range(3)))
    scale = 2.2 / (hi.z - lo.z)
    cx, cy = (lo.x+hi.x)/2, (lo.y+hi.y)/2
    for v in obj.data.vertices:
        v.co = Vector(((v.co.x-cx)*scale, (v.co.y-cy)*scale, (v.co.z-lo.z)*scale))
    obj.data.update()
    obj.location = (0, 0, 0)
    obj['source'] = 'Local ComfyUI Hunyuan3D v2 fp16'
    obj['prompt_id'] = evidence['attempts'][evidence['successful_attempt']-1]['prompt_id']
    obj['seed'] = evidence['seed']
    obj['purpose'] = 'Original abstract decorative sculpture; not scientific or hardware reconstruction'
    report['normalization'] = {'uniform_scale_from_raw': scale,
                               'raw_center_x': cx, 'raw_center_blender_y': cy, 'raw_bottom_blender_z': lo.z}
    report['units'] = 'meters'
    report['axes'] = {'glTF': '+Y up, +X right, +Z front', 'Blender': '+Z up, -Y front',
                      'origin': 'base/bounding-box bottom center at (0,0,0)'}
    bpy.context.scene.unit_settings.system = 'METRIC'
    bpy.context.scene.unit_settings.scale_length = 1.0
    bpy.context.view_layer.update()
    report['dimensions_blender_xyz_m'] = list(obj.dimensions)
    report['materials'] = [{'name': mat.name, 'metallic': 0.28, 'roughness': 0.28,
                           'base_color': 'glTF COLOR_0 vertex palette', 'textures': 0,
                           'palette_linear_rgb': {'porcelain':list(porcelain),'teal':list(teal),'champagne':list(gold)}}]
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    final.parent.mkdir(parents=True, exist_ok=True)
    bpy.ops.export_scene.gltf(filepath=str(final), export_format='GLB', use_selection=True,
        export_yup=True, export_apply=True, export_normals=True, export_materials='EXPORT',
        export_animations=False, export_cameras=False, export_lights=False, export_extras=True)
    bpy.ops.wm.save_as_mainfile(filepath=str(out / 'learning-sculpture-v001.blend'))
    # Render a fresh reimport of the actual final GLB to verify the delivered file.
    bpy.data.objects.remove(obj, do_unlink=True)
    bpy.ops.import_scene.gltf(filepath=str(final))
    imported = [o for o in bpy.context.selected_objects if o.type == 'MESH']
    assert len(imported) == 1
    checked = imported[0]
    report['roundtrip'] = {'mesh_objects': len(imported), 'materials': len(checked.data.materials),
                           'dimensions_blender_xyz_m': list(checked.dimensions),
                           'topology': topology(checked)}
    target = (0, 0, 1.1)
    render_view(out, 'final-front-rgba.png', (0, -7, 1.1), target, 3.25)
    render_view(out, 'final-three-quarter-rgba.png', (3.2, -6, 2.6), target, 3.25)
    render_view(out, 'final-back-rgba.png', (2, 7, 2.0), target, 3.25)
    (out / 'finish-report.json').write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding='utf-8')
    print('FINISHED_NEURAL_SCULPTURE', json.dumps(report, ensure_ascii=True), flush=True)


if __name__ == '__main__':
    main()
