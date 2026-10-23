"""Blender background script: original 2D reference only; NOT the delivered mesh.

Run with blender --background --factory-startup --python this.py -- OUTPUT_DIR.
All geometry here is discarded after rendering. Final geometry must come from
the local Hunyuan3D checkpoint through run_local.py.
"""
import bpy
import math
import sys
from pathlib import Path
from mathutils import Vector


def material(name, color, metallic=0.0, roughness=0.3):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    p = mat.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color, 1)
    p.inputs['Metallic'].default_value = metallic
    p.inputs['Roughness'].default_value = roughness
    return mat


def aim(obj, target):
    obj.rotation_euler = (Vector(target) - obj.location).to_track_quat('-Z', 'Y').to_euler()


def studio(scene, target=(0, 0, 0), size=768):
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = 24
    scene.cycles.use_denoising = True
    scene.cycles.max_bounces = 4
    scene.render.resolution_x = scene.render.resolution_y = size
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = 'PNG'
    scene.render.film_transparent = False
    scene.world.use_nodes = True
    scene.world.node_tree.nodes['Background'].inputs[0].default_value = (1, 1, 1, 1)
    scene.world.node_tree.nodes['Background'].inputs[1].default_value = 0.65
    scene.view_settings.view_transform = 'AgX'
    for name, pos, power, scale in [
        ('LGT-key', (-3, -4, 6), 650, 4),
        ('LGT-rim', (4, 1, 3), 800, 3),
        ('LGT-fill', (1, -4, -1), 180, 3),
    ]:
        data = bpy.data.lights.new(name, 'AREA')
        data.energy, data.shape, data.size = power, 'DISK', scale
        ob = bpy.data.objects.new(name, data)
        scene.collection.objects.link(ob)
        ob.location = pos
        aim(ob, target)
    data = bpy.data.cameras.new('CAM-reference')
    cam = bpy.data.objects.new('CAM-reference', data)
    scene.collection.objects.link(cam)
    cam.location = (1.7, -7, 1.35)
    aim(cam, target)
    cam.data.type, cam.data.ortho_scale = 'ORTHO', 2.95
    scene.camera = cam
    # run_local.py composites this transparent render onto exact white with Pillow.
    scene.render.film_transparent = True


def main():
    out = Path(sys.argv[sys.argv.index('--') + 1]).resolve()
    out.mkdir(parents=True, exist_ok=True)
    # This script is only used in a separate factory-startup background process.
    assert set(bpy.data.objects.keys()).issubset({'Cube', 'Camera', 'Light'})
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    porcelain = material('MAT-reference-porcelain', (0.76, 0.88, 0.91), 0.12, 0.25)
    teal = material('MAT-reference-inner-teal', (0.025, 0.29, 0.36), 0.3, 0.24)
    gold = material('MAT-reference-core', (0.68, 0.38, 0.12), 0.6, 0.27)
    for leaf in range(3):
        angle = math.pi / 2 + leaf * math.tau / 3
        radial = Vector((math.cos(angle), 0, math.sin(angle)))
        tangent = Vector((-math.sin(angle), 0, math.cos(angle)))
        depth = Vector((0, 1, 0))
        verts, faces = [], []
        nu, nv = 144, 24
        for i in range(nu):
            t = i * math.tau / nu
            r = 0.53 + 0.51 * math.cos(t)
            s = 0.32 * math.sin(t) * (0.9 + 0.1 * math.cos(t))
            center = radial * r + tangent * s + depth * (0.15 * math.sin(t + 0.6) + 0.055 * math.cos(2*t))
            normal = (radial * (0.32 * math.cos(t)) + tangent * (0.51 * math.sin(t))).normalized()
            width = 0.105 + 0.038 * (1 + math.cos(t)) / 2
            for j in range(nv):
                u = j * math.tau / nv
                p = center + normal * (width * math.cos(u)) + depth * (0.095 * math.sin(u))
                verts.append(tuple(p))
        for i in range(nu):
            for j in range(nv):
                faces.append((i*nv+j, ((i+1)%nu)*nv+j, ((i+1)%nu)*nv+(j+1)%nv, i*nv+(j+1)%nv))
        mesh = bpy.data.meshes.new('GEO-reference-leaf')
        mesh.from_pydata(verts, [], faces)
        mesh.materials.append(porcelain)
        mesh.materials.append(teal)
        ob = bpy.data.objects.new(f'GEO-reference-leaf-{leaf+1}', mesh)
        bpy.context.scene.collection.objects.link(ob)
        for poly in mesh.polygons:
            poly.use_smooth = True
            # The inside lip is teal; these colors are reference art, not AI textures.
            poly.material_index = int(math.cos((poly.index % nv + 0.5) * math.tau / nv) < -0.35)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48, ring_count=24, radius=0.245, location=(0, -0.06, 0))
    core = bpy.context.object
    core.name = 'GEO-reference-learning-core'
    core.data.materials.append(gold)
    for poly in core.data.polygons:
        poly.use_smooth = True
    studio(bpy.context.scene)
    bpy.context.scene.render.filepath = str(out / 'learning-core-rgba.png')
    bpy.ops.render.render(write_still=True)
    print('ORIGINAL_REFERENCE_RENDERED', flush=True)


if __name__ == '__main__':
    main()
