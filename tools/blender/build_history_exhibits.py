"""Build the four 00-history exhibits as editable Blender assets.

This script intentionally creates explanatory museum objects rather than
claiming to reconstruct historical hardware.  Each exhibit is built from
named parent empties so that the web viewer can explode and isolate parts.

Run from the project root:
  D:/blender/blender.exe --background --factory-startup --python tools/blender/build_history_exhibits.py
"""

from __future__ import annotations

import math
import os
import sys
from pathlib import Path

import bpy
from mathutils import Vector


PROJECT = Path(__file__).resolve().parents[2]
MODELS = PROJECT / "assets" / "models"
OUTPUT = PROJECT / "output" / "history-blender"
MASTER = MODELS / "ai-museum-history-v001.blend"


COLORS = {
    "ink": (0.018, 0.055, 0.10, 1),
    "navy": (0.025, 0.12, 0.22, 1),
    "cyan": (0.06, 0.46, 0.55, 1),
    "mint": (0.20, 0.78, 0.68, 1),
    "violet": (0.34, 0.20, 0.54, 1),
    "purple": (0.56, 0.30, 0.80, 1),
    "gold": (0.82, 0.52, 0.14, 1),
    "copper": (0.55, 0.22, 0.08, 1),
    "silver": (0.32, 0.42, 0.46, 1),
    "white": (0.76, 0.86, 0.84, 1),
    "glass": (0.12, 0.62, 0.70, 1),
    "red": (0.72, 0.13, 0.16, 1),
}


def clean_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for collection in list(bpy.data.collections):
        if collection.name != "Collection":
            bpy.data.collections.remove(collection)
    if bpy.data.collections.get("Collection"):
        bpy.data.collections["Collection"].name = "COL-00-History-Exhibits"


def material(name: str, color, metallic=0.35, roughness=0.28, emission=0.0, alpha=1.0):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = next(node for node in mat.node_tree.nodes if node.type == "BSDF_PRINCIPLED")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if "Emission Color" in bsdf.inputs:
        bsdf.inputs["Emission Color"].default_value = color
        bsdf.inputs["Emission Strength"].default_value = emission
    else:
        bsdf.inputs["Emission"].default_value = color
        bsdf.inputs["Emission Strength"].default_value = emission
    if alpha < 1:
        mat.surface_render_method = "BLENDED"
        bsdf.inputs["Alpha"].default_value = alpha
        mat.diffuse_color = (*color[:3], alpha)
    return mat


MATS = {}


def setup_materials():
    MATS["ink"] = material("MAT-00-Deep-Graphite", COLORS["ink"], 0.65, 0.22)
    MATS["navy"] = material("MAT-00-Navy-Ceramic", COLORS["navy"], 0.48, 0.22)
    MATS["cyan"] = material("MAT-00-Cyan-Metal", COLORS["cyan"], 0.62, 0.2, 0.12)
    MATS["mint"] = material("MAT-00-Mint-Signal", COLORS["mint"], 0.28, 0.18, 2.5)
    MATS["violet"] = material("MAT-00-Violet-Logic", COLORS["violet"], 0.42, 0.22, 0.18)
    MATS["purple"] = material("MAT-00-Purple-Branch", COLORS["purple"], 0.4, 0.24, 0.14)
    MATS["gold"] = material("MAT-00-Gold-Contact", COLORS["gold"], 0.78, 0.18, 0.08)
    MATS["copper"] = material("MAT-00-Copper-Trace", COLORS["copper"], 0.72, 0.21, 0.03)
    MATS["silver"] = material("MAT-00-Brushed-Steel", COLORS["silver"], 0.82, 0.25)
    MATS["white"] = material("MAT-00-Display-White", COLORS["white"], 0.2, 0.2, 0.3)
    MATS["glass"] = material("MAT-00-Observation-Glass", COLORS["glass"], 0.1, 0.12, 0.25, 0.22)
    MATS["red"] = material("MAT-00-Alert-Red", COLORS["red"], 0.4, 0.24, 0.25)


def link_object(obj, collection):
    for coll in list(obj.users_collection):
        coll.objects.unlink(obj)
    collection.objects.link(obj)
    return obj


def empty(name, collection, parent=None, key=None):
    obj = bpy.data.objects.new(name, None)
    link_object(obj, collection)
    if parent:
        obj.parent = parent
    if key:
        obj["key"] = key
        obj["part_role"] = "independent-exhibit-part"
    return obj


def assign(obj, mat):
    obj.data.materials.append(mat)
    return obj


def cube(name, collection, parent, loc, scale, mat, bevel=0.04):
    bpy.ops.mesh.primitive_cube_add(location=loc)
    obj = bpy.context.object
    obj.name = name
    obj.scale = (scale[0] / 2, scale[1] / 2, scale[2] / 2)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    link_object(obj, collection)
    if parent:
        obj.parent = parent
    assign(obj, MATS[mat] if isinstance(mat, str) else mat)
    if bevel:
        mod = obj.modifiers.new("MOD-soft-machined-edges", "BEVEL")
        mod.width = bevel
        mod.segments = 2
    obj["detail_class"] = "machined-solid"
    return obj


def cylinder(name, collection, parent, loc, radius, depth, mat, vertices=24, rotation=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=loc, rotation=rotation or (0, 0, 0))
    obj = bpy.context.object
    obj.name = name
    link_object(obj, collection)
    if parent:
        obj.parent = parent
    assign(obj, MATS[mat] if isinstance(mat, str) else mat)
    mod = obj.modifiers.new("MOD-edge-bevel", "BEVEL")
    mod.width = min(radius * 0.16, depth * 0.12)
    mod.segments = 2
    return obj


def sphere(name, collection, parent, loc, radius, mat, segments=16):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments, ring_count=8, radius=radius, location=loc)
    obj = bpy.context.object
    obj.name = name
    link_object(obj, collection)
    if parent:
        obj.parent = parent
    assign(obj, MATS[mat] if isinstance(mat, str) else mat)
    return obj


def tube(name, collection, parent, points, radius, mat, bevel=3):
    curve = bpy.data.curves.new(name + "-curve", "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 2
    curve.bevel_depth = radius
    curve.bevel_resolution = bevel
    spline = curve.splines.new("BEZIER")
    spline.bezier_points.add(len(points) - 1)
    for bp, point in zip(spline.bezier_points, points):
        bp.co = point
        bp.handle_left_type = "AUTO"
        bp.handle_right_type = "AUTO"
    obj = bpy.data.objects.new(name, curve)
    link_object(obj, collection)
    if parent:
        obj.parent = parent
    assign(obj, MATS[mat] if isinstance(mat, str) else mat)
    obj["detail_class"] = "signal-path"
    return obj


def trace(parent, collection, name, a, b, mat="copper", radius=0.018):
    mid = ((a[0] + b[0]) * 0.5, a[1], a[2])
    return tube(name, collection, parent, [a, mid, b], radius, mat, 2)


def board_details(parent, collection, origin, width, depth, rows=12, cols=16, color="copper"):
    ox, oy, oz = origin
    for i in range(cols):
        x = ox - width * 0.43 + i * width * 0.86 / max(cols - 1, 1)
        z = oz - depth * 0.38
        trace(parent, collection, f"GEO-trace-x-{i:02d}", (x, oy + 0.07, z), (x * 0.62 + ox * 0.38, oy + 0.07, oz + depth * 0.36), color, 0.014 if i % 3 else 0.022)
        cylinder(f"GEO-via-{i:02d}", collection, parent, (x, oy + 0.09, z), 0.028, 0.025, "gold", 12)
    for j in range(rows):
        z = oz - depth * 0.38 + j * depth * 0.76 / max(rows - 1, 1)
        x = ox - width * 0.4
        trace(parent, collection, f"GEO-trace-z-{j:02d}", (x, oy + 0.075, z), (ox + width * 0.42, oy + 0.075, z * 0.72 + oz * 0.28), "gold" if j % 4 == 0 else color, 0.012)
        cylinder(f"GEO-via-z-{j:02d}", collection, parent, (x, oy + 0.09, z), 0.025, 0.025, "gold", 12)
    for i in range(5):
        x = ox - width * 0.33 + i * width * 0.165
        for j in range(3):
            cube(f"GEO-chiplet-{i}-{j}", collection, parent, (x, oy + 0.10, oz + (j - 1) * 0.4), (0.22, 0.08, 0.26), "ink", 0.025)
            for k in (-1, 1):
                cylinder(f"GEO-contact-{i}-{j}-{k}", collection, parent, (x + k * 0.14, oy + 0.13, oz + (j - 1) * 0.4), 0.018, 0.035, "gold", 10)


def heatsink(parent, collection, origin, width=1.4, depth=1.4, fins=9, mat="silver"):
    ox, oy, oz = origin
    for i in range(fins):
        x = ox - width * 0.45 + i * width * 0.9 / max(fins - 1, 1)
        cube(f"GEO-fin-{i:02d}", collection, parent, (x, oy, oz), (0.08, 0.75, depth), mat, 0.015)
    cube("GEO-heatsink-base", collection, parent, (ox, oy - 0.42, oz), (width, 0.1, depth), mat, 0.025)


def connector_bank(parent, collection, origin, count=8, horizontal=True):
    ox, oy, oz = origin
    for i in range(count):
        if horizontal:
            pos = (ox - count * 0.08 + i * 0.16, oy, oz)
            scale = (0.10, 0.18, 0.34)
        else:
            pos = (ox, oy, oz - count * 0.08 + i * 0.16)
            scale = (0.34, 0.18, 0.10)
        cube(f"GEO-connector-{i:02d}", collection, parent, pos, scale, "gold", 0.015)
        cylinder(f"GEO-pin-{i:02d}", collection, parent, (pos[0], pos[1] + 0.12, pos[2]), 0.018, 0.16, "silver", 10)


def shell_part(collection, root, accent="cyan"):
    part = empty("GEO-00-shell", collection, root, "shell")
    # Keep the frame readable after explosion. A solid top panel would hide
    # the explanatory internals, so the observation cover is only an edge
    # frame with four transparent corner bars.
    cube("GEO-shell-base", collection, part, (0, -1.75, 0), (8.8, 0.30, 5.8), "ink", 0.10)
    cube("GEO-shell-deck", collection, part, (0, -1.52, 0), (8.2, 0.08, 5.2), "navy", 0.035)
    for x in (-4.0, 4.0):
        for z in (-2.4, 2.4):
            cylinder("GEO-shell-foot", collection, part, (x, -1.28, z), 0.18, 0.42, "gold", 16)
    for x in (-4.0, 4.0):
        cube("GEO-shell-rail", collection, part, (x, 0.05, 0), (0.16, 2.45, 5.2), accent, 0.025)
    for z in (-2.4, 2.4):
        cube("GEO-shell-crossbar", collection, part, (0, 0.05, z), (8.1, 2.45, 0.12), accent, 0.025)
    for x in (-3.8, 3.8):
        for z in (-2.2, 2.2):
            sphere("GEO-shell-fastener", collection, part, (x, 1.28, z), 0.09, "gold", 12)
    for a, b in [((-3.9, 1.28, -2.3), (3.9, 1.28, -2.3)), ((-3.9, 1.28, 2.3), (3.9, 1.28, 2.3)), ((-3.9, 1.28, -2.3), (-3.9, 1.28, 2.3)), ((3.9, 1.28, -2.3), (3.9, 1.28, 2.3))]:
        tube("GEO-shell-glass-edge", collection, part, [a, b], 0.035, "glass", 2)
    return part


def build_neuron():
    collection = bpy.data.collections.new("COL-00-Neuron-Computing")
    bpy.context.scene.collection.children.link(collection)
    root = empty("GEO-00-Neuron-Exhibit", collection)
    root["exhibit_id"] = "neuron"
    root["description"] = "Original explanatory model for weighted computation and signal propagation"
    shell_part(collection, root, "cyan")

    cpu = empty("GEO-00-Neuron-cpu", collection, root, "cpu")
    cube("GEO-cpu-package", collection, cpu, (-3.2, -0.65, 0), (1.85, 0.32, 1.85), "violet", 0.10)
    heatsink(cpu, collection, (-3.2, -0.18, 0), 1.45, 1.45, 9)
    for i in range(8):
        x = -3.2 - 0.7 + i * 0.2
        for z in (-1.02, 1.02): cylinder("GEO-cpu-pin", collection, cpu, (x, -0.48, z), 0.025, 0.18, "gold", 10, (math.pi / 2, 0, 0))
    for i in range(6):
        trace(cpu, collection, "GEO-cpu-signal", (-2.28, -0.46, (i - 2.5) * 0.22), (-1.1, -0.46, (i - 2.5) * 0.32), "mint", 0.018)

    memory = empty("GEO-00-Neuron-memory", collection, root, "memory")
    for row in range(2):
        for col in range(5):
            x = -0.5 + col * 0.66
            z = -1.55 + row * 1.05
            cube("GEO-memory-module", collection, memory, (x, -0.62, z), (0.52, 0.32, 0.82), "navy", 0.05)
            board_details(memory, collection, (x, -0.43, z), 0.42, 0.62, 4, 5, "gold")
            connector_bank(memory, collection, (x, -0.38, z + 0.47), 4, True)

    gpu = empty("GEO-00-Neuron-gpu", collection, root, "gpu")
    cube("GEO-gpu-frame", collection, gpu, (2.7, -0.65, 0), (2.8, 0.38, 3.2), "cyan", 0.10)
    cube("GEO-gpu-core", collection, gpu, (2.7, -0.35, 0), (1.25, 0.26, 1.25), "violet", 0.08)
    board_details(gpu, collection, (2.7, -0.10, 0), 2.35, 2.75, 14, 18, "copper")
    heatsink(gpu, collection, (2.7, 0.23, 0), 1.6, 1.6, 11, "silver")
    for i in range(9):
        a = math.tau * i / 9
        sphere("GEO-gpu-array-node", collection, gpu, (2.7 + math.cos(a) * 1.0, 0.72, math.sin(a) * 1.0), 0.08, "mint", 12)

    network = empty("GEO-00-Neuron-network", collection, root, "network")
    connector_bank(network, collection, (4.4, -0.55, -1.8), 10, False)
    connector_bank(network, collection, (4.4, -0.55, 1.8), 10, False)
    for i in range(7):
        z = -1.5 + i * 0.5
        tube("GEO-network-fiber", collection, network, [(3.75, -0.4, z), (4.2, 0.2, z * 0.5), (4.85, -0.35, z * 0.76)], 0.025, "mint")
    for i in range(4):
        cylinder("GEO-network-hub", collection, network, (4.65, 0.45, (i - 1.5) * 0.56), 0.16, 0.32, "gold", 16)
    # Source geometry is authored in the web exhibit convention (Y up).
    # Blender is Z up; this rotation makes export_yup preserve that convention.
    root.rotation_euler.x = math.pi / 2
    return collection


def logic_module(collection, parent, key, x, z, accent, title):
    part = empty(f"GEO-00-Rules-{key}", collection, parent, key)
    cube(f"GEO-{title}-housing", collection, part, (x, -0.72, z), (1.45, 0.34, 1.45), "navy", 0.08)
    cube(f"GEO-{title}-face", collection, part, (x, -0.48, z), (1.12, 0.10, 1.12), accent, 0.05)
    board_details(part, collection, (x, -0.37, z), 0.92, 0.92, 5, 6, "gold")
    for i in range(4):
        cylinder(f"GEO-{title}-pin", collection, part, (x + (i - 1.5) * 0.24, -0.20, z - 0.64), 0.025, 0.22, "silver", 10, (math.pi / 2, 0, 0))
    tube(f"GEO-{title}-signal", collection, part, [(x, -0.15, z), (x, 0.45, z), (x + 0.44, 0.8, z)], 0.027, "mint")
    return part


def build_rules():
    collection = bpy.data.collections.new("COL-00-Rules-Logic")
    bpy.context.scene.collection.children.link(collection)
    root = empty("GEO-00-Rules-Exhibit", collection)
    root["exhibit_id"] = "rules"
    shell_part(collection, root, "violet")
    coords = [(-3.5, 0), (-1.6, -1.65), (-1.6, 1.65), (0.8, -1.65), (0.8, 1.65)]
    accents = ["cyan", "violet", "violet", "purple", "gold"]
    keys = ["input", "rule", "matcher", "controller", "output"]
    parts = [logic_module(collection, root, k, x, z, a, k) for k, (x, z), a in zip(keys, coords, accents)]
    for a, b in [(coords[0], coords[1]), (coords[0], coords[2]), (coords[1], coords[3]), (coords[2], coords[4]), (coords[3], coords[4])]:
        tube("GEO-rules-logic-bus", collection, root, [(a[0] + 0.6, -0.1, a[1]), ((a[0] + b[0]) * 0.5, 0.72, a[1]), (b[0] - 0.6, -0.1, b[1])], 0.032, "gold")
    root.rotation_euler.x = math.pi / 2
    return collection


def branch_node(collection, parent, key, x, z, color):
    part = empty(f"GEO-00-Search-{key}", collection, parent, key)
    cylinder(f"GEO-{key}-pedestal", collection, part, (x, -1.05, z), 0.38, 0.18, "gold", 24)
    sphere(f"GEO-{key}-node", collection, part, (x, 0.15, z), 0.33, color, 20)
    cylinder(f"GEO-{key}-ring", collection, part, (x, 0.15, z), 0.48, 0.07, "mint", 32, (math.pi / 2, 0, 0))
    for i in range(6):
        a = math.tau * i / 6
        sphere(f"GEO-{key}-satellite", collection, part, (x + math.cos(a) * 0.68, 0.15, z + math.sin(a) * 0.68), 0.055, "white", 12)
    return part


def build_search():
    collection = bpy.data.collections.new("COL-00-Search-Tree")
    bpy.context.scene.collection.children.link(collection)
    root = empty("GEO-00-Search-Exhibit", collection)
    root["exhibit_id"] = "search"
    shell_part(collection, root, "mint")
    coords = [(-3.9, 0), (-1.25, -1.8), (-1.25, 0), (-1.25, 1.8), (2.6, 0)]
    keys = ["state", "branch-a", "branch-b", "branch-c", "evaluation"]
    colors = ["gold", "cyan", "violet", "purple", "mint"]
    for k, (x, z), c in zip(keys, coords, colors):
        branch_node(collection, root, k, x, z, c)
    for i, (a, b) in enumerate([(coords[0], coords[1]), (coords[0], coords[2]), (coords[0], coords[3]), (coords[1], coords[4]), (coords[2], coords[4]), (coords[3], coords[4])]):
        tube(f"GEO-search-branch-{i:02d}", collection, root, [(a[0] + 0.35, 0.15, a[1]), ((a[0] + b[0]) * 0.5, 0.95, (a[1] + b[1]) * 0.5), (b[0] - 0.35, 0.15, b[1])], 0.028, "gold" if i % 2 else "mint")
    for i in range(5):
        cube("GEO-search-stat-panel", collection, root, (1.0 + i * 0.25, -0.82, 2.4), (0.15, 0.42 + i * 0.12, 0.18), "violet", 0.02)
    root.rotation_euler.x = math.pi / 2
    return collection


def learning_block(collection, parent, key, x, color):
    part = empty(f"GEO-00-Learning-{key}", collection, parent, key)
    cube(f"GEO-{key}-frame", collection, part, (x, -0.7, 0), (1.25, 0.35, 2.3), "navy", 0.08)
    cube(f"GEO-{key}-plate", collection, part, (x, -0.42, 0), (0.9, 0.10, 1.8), color, 0.045)
    for j in range(6):
        y = -0.05 + j * 0.22
        sphere(f"GEO-{key}-activation", collection, part, (x - 0.31, y, 0.0), 0.05, "mint", 12)
        sphere(f"GEO-{key}-activation", collection, part, (x + 0.31, y, 0.0), 0.05, "gold", 12)
        trace(part, collection, "GEO-learning-connection", (x - 0.26, y, 0), (x + 0.26, y, 0), "mint", 0.012)
    return part


def build_learning():
    collection = bpy.data.collections.new("COL-00-Learning-Loop")
    bpy.context.scene.collection.children.link(collection)
    root = empty("GEO-00-Learning-Exhibit", collection)
    root["exhibit_id"] = "learning"
    shell_part(collection, root, "purple")
    coords = [-3.8, -1.9, 0, 1.9, 3.8]
    keys = ["sample", "forward", "loss", "gradient", "update"]
    colors = ["cyan", "mint", "gold", "purple", "violet"]
    for k, x, c in zip(keys, coords, colors):
        learning_block(collection, root, k, x, c)
    for i in range(4):
        tube("GEO-learning-forward-path", collection, root, [(coords[i] + 0.6, 0.0, 0), ((coords[i] + coords[i + 1]) * 0.5, 0.85, 0), (coords[i + 1] - 0.6, 0.0, 0)], 0.028, "mint")
        tube("GEO-learning-feedback-path", collection, root, [(coords[i + 1] - 0.5, -0.02, 0.55), ((coords[i] + coords[i + 1]) * 0.5, 1.05, 0.55), (coords[i] + 0.5, -0.02, 0.55)], 0.021, "violet")
    for i in range(8):
        cylinder("GEO-learning-parameter-dial", collection, root, (1.4 + (i % 4) * 0.34, 0.48, -1.2 + (i // 4) * 0.32), 0.08, 0.08, "gold", 16, (math.pi / 2, 0, 0))
    root.rotation_euler.x = math.pi / 2
    return collection


def configure_world():
    world = bpy.context.scene.world or bpy.data.worlds.new("WORLD-00-Museum")
    bpy.context.scene.world = world
    world.use_nodes = True
    bg = next(node for node in world.node_tree.nodes if node.type == "BACKGROUND")
    bg.inputs["Color"].default_value = (0.006, 0.012, 0.024, 1)
    bg.inputs["Strength"].default_value = 0.18
    # Blender 5.2 reports the engine as BLENDER_EEVEE; older releases use
    # the same identifier even though the implementation is the newer Eevee.
    bpy.context.scene.render.engine = "BLENDER_EEVEE"
    bpy.context.scene.render.resolution_x = 1200
    bpy.context.scene.render.resolution_y = 820
    bpy.context.scene.render.resolution_percentage = 60
    bpy.context.scene.render.image_settings.file_format = "PNG"
    bpy.context.scene.render.film_transparent = False


def make_camera_and_lights():
    bpy.ops.object.camera_add(location=(13, 9, 16))
    camera = bpy.context.object
    camera.name = "CAM-00-History-Overview"
    bpy.context.scene.camera = camera
    direction = Vector((0, 0, 0)) - camera.location
    camera.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    camera.data.lens = 48
    for name, loc, energy, color in [
        ("LGT-00-Key", (5, 12, 8), 1300, (0.58, 0.84, 1.0)),
        ("LGT-00-Rim", (-9, 6, -8), 1050, (0.35, 0.55, 1.0)),
        ("LGT-00-Warm", (0, 3, 10), 700, (1.0, 0.55, 0.22)),
    ]:
        bpy.ops.object.light_add(type="AREA", location=loc)
        light = bpy.context.object
        light.name = name
        light.data.energy = energy
        light.data.shape = "DISK"
        light.data.size = 7.0
        light.data.color = color
        direction = Vector((0, 0, 0)) - light.location
        light.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def remove_non_asset_objects():
    for obj in list(bpy.context.scene.objects):
        if obj.name.startswith(("CAM-", "LGT-")):
            continue
        if obj.type in {"MESH", "CURVE", "EMPTY"}:
            continue


def descendants(root):
    result = []
    def visit(obj):
        result.append(obj)
        for child in obj.children:
            visit(child)
    visit(root)
    return result


def export_collection(root, filename):
    path = MODELS / filename
    bpy.ops.object.select_all(action="DESELECT")
    objects = [obj for obj in descendants(root) if obj.type in {"MESH", "CURVE", "EMPTY"}]
    for obj in objects:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = root
    bpy.ops.export_scene.gltf(
        filepath=str(path),
        export_format="GLB",
        use_selection=True,
        export_apply=False,
        export_animations=False,
        export_yup=True,
        export_materials="EXPORT",
        export_extras=True,
    )
    bpy.ops.object.select_all(action="DESELECT")
    print(f"EXPORTED {path} objects={len(objects)} bytes={path.stat().st_size}")


def save_master():
    bpy.ops.wm.save_as_mainfile(filepath=str(MASTER))
    print(f"SAVED {MASTER} bytes={MASTER.stat().st_size}")


def main():
    MODELS.mkdir(parents=True, exist_ok=True)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    clean_scene()
    setup_materials()
    configure_world()
    make_camera_and_lights()
    build_neuron()
    build_rules()
    build_search()
    build_learning()
    save_master()
    roots = {
        "neuron": "history-neuron-v001.glb",
        "rules": "history-rules-v001.glb",
        "search": "history-search-v001.glb",
        "learning": "history-learning-v001.glb",
    }
    for collection in bpy.data.collections:
        for obj in collection.objects:
            if obj.name.startswith("GEO-00-") and obj.parent is None and obj.type == "EMPTY":
                exhibit_id = obj.get("exhibit_id")
                if exhibit_id in roots:
                    export_collection(obj, roots[exhibit_id])
    bpy.context.scene.render.filepath = str(OUTPUT / "history-overview.png")
    bpy.ops.render.render(write_still=True)
    print("HISTORY_BUILD_OK")


if __name__ == "__main__":
    main()
