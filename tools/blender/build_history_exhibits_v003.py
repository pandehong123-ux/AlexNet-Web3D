"""Build the four 00-history exhibits as editable, part-level Blender assets.

The models are original explanatory designs. They use real construction logic
and recognizable component details, but do not claim to reproduce a specific
historical machine. The biological neuron follows a scientific visualization
language; the other three are instrument and computing-system concepts.
"""
from __future__ import annotations

import math
import random
from pathlib import Path

import bpy
from mathutils import Vector


PROJECT = Path(__file__).resolve().parents[2]
MODELS = PROJECT / "assets" / "models"
PREVIEWS = PROJECT / "output" / "history-v003"
random.seed(12)


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for collection in list(bpy.data.collections):
        if collection.name != "Collection":
            bpy.data.collections.remove(collection)
    collection = bpy.data.collections.get("Collection")
    if collection:
        collection.name = "COL-00-History-v003"
    else:
        collection = bpy.data.collections.new("COL-00-History-v003")
        bpy.context.scene.collection.children.link(collection)
    return collection


COLORS = {
    "graphite": (0.018, 0.027, 0.034, 1),
    "steel": (0.22, 0.28, 0.31, 1),
    "aluminum": (0.52, 0.60, 0.62, 1),
    "rubber": (0.008, 0.012, 0.015, 1),
    "pcb": (0.014, 0.12, 0.085, 1),
    "pcb_blue": (0.016, 0.075, 0.15, 1),
    "copper": (0.62, 0.26, 0.08, 1),
    "gold": (0.84, 0.56, 0.12, 1),
    "solder": (0.44, 0.50, 0.50, 1),
    "ceramic": (0.33, 0.20, 0.10, 1),
    "cyan": (0.06, 0.58, 0.70, 1),
    "mint": (0.12, 0.75, 0.50, 1),
    "amber": (0.90, 0.32, 0.035, 1),
    "violet": (0.42, 0.24, 0.68, 1),
    "glass": (0.08, 0.23, 0.30, 1),
    "neuron": (0.72, 0.34, 0.29, 1),
    "membrane": (0.34, 0.68, 0.64, 1),
    "nucleus": (0.22, 0.16, 0.38, 1),
    "synapse": (0.82, 0.48, 0.20, 1),
    "white": (0.75, 0.82, 0.79, 1),
}
MATS = {}


def create_material(name, color, metallic=0.0, roughness=0.35, emission=0.0, alpha=1.0, sss=0.0):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if "Emission Color" in bsdf.inputs:
        bsdf.inputs["Emission Color"].default_value = color
        bsdf.inputs["Emission Strength"].default_value = emission
    if "Coat Weight" in bsdf.inputs:
        bsdf.inputs["Coat Weight"].default_value = 0.18 if metallic else 0.05
    if "Subsurface Weight" in bsdf.inputs:
        bsdf.inputs["Subsurface Weight"].default_value = sss
    if alpha < 1:
        bsdf.inputs["Alpha"].default_value = alpha
        material.surface_render_method = "DITHERED"
        material.diffuse_color = (*color[:3], alpha)
    return material


def setup_materials():
    recipes = {
        "graphite": (0.0, 0.48, 0.0), "steel": (1.0, 0.30, 0.0),
        "aluminum": (1.0, 0.22, 0.0), "rubber": (0.0, 0.78, 0.0),
        "pcb": (0.0, 0.40, 0.0), "pcb_blue": (0.0, 0.36, 0.0),
        "copper": (1.0, 0.24, 0.0), "gold": (1.0, 0.18, 0.0),
        "solder": (1.0, 0.18, 0.0), "ceramic": (0.0, 0.48, 0.0),
        "cyan": (0.15, 0.24, 1.0), "mint": (0.0, 0.22, 1.8),
        "amber": (0.0, 0.24, 2.0), "violet": (0.05, 0.28, 0.2),
        "glass": (0.0, 0.16, 0.0), "neuron": (0.0, 0.32, 0.25),
        "membrane": (0.0, 0.22, 0.2), "nucleus": (0.0, 0.34, 0.3),
        "synapse": (0.0, 0.24, 0.7), "white": (0.0, 0.48, 0.0),
    }
    for key, values in recipes.items():
        metal, rough, emission = values
        alpha = 0.24 if key == "glass" else 0.32 if key == "membrane" else 1.0
        sss = 0.28 if key in {"neuron", "membrane"} else 0.0
        MATS[key] = create_material(f"MAT-00-v003-{key}", COLORS[key], metal, rough, emission, alpha, sss)
    MATS["cytoplasm"] = create_material("MAT-00-v003-cytoplasm", COLORS["neuron"], 0.0, 0.32, 0.0, 0.24, 0.36)


def link(obj, parent=None):
    for collection in list(obj.users_collection):
        collection.objects.unlink(obj)
    bpy.data.collections["COL-00-History-v003"].objects.link(obj)
    if parent:
        obj.parent = parent
    return obj


def group(name, root, key):
    obj = bpy.data.objects.new(name, None)
    bpy.data.collections["COL-00-History-v003"].objects.link(obj)
    obj.parent = root
    obj["key"] = key
    obj["part_role"] = "independent-exhibit-part"
    return obj


def detail(obj, parent, kind):
    obj.parent = parent
    obj["part_key"] = parent.get("key", "")
    obj["detail_class"] = kind
    return obj


def box(name, parent, location, dimensions, material="graphite", bevel=0.02):
    bpy.ops.mesh.primitive_cube_add(location=location)
    obj = bpy.context.object
    obj.name = name
    obj.scale = tuple(value / 2 for value in dimensions)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    link(obj)
    detail(obj, parent, "manufactured-solid")
    obj.data.materials.append(MATS[material])
    if bevel:
        modifier = obj.modifiers.new("edge-radius", "BEVEL")
        modifier.width = bevel
        modifier.segments = 2
        obj.modifiers.new("weighted-normals", "WEIGHTED_NORMAL")
    return obj


def sphere(name, parent, location, radius, material="neuron", scale=None, segments=24):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments, ring_count=16, radius=radius, location=location)
    obj = bpy.context.object
    obj.name = name
    if scale:
        obj.scale = scale
        bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    for polygon in obj.data.polygons:
        polygon.use_smooth = True
    link(obj)
    detail(obj, parent, "organic-surface" if material in {"neuron", "membrane"} else "formed-part")
    obj.data.materials.append(MATS[material])
    return obj


def cylinder(name, parent, location, radius, depth, material="steel", vertices=24, rotation=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=location, rotation=rotation or (0, 0, 0))
    obj = bpy.context.object
    obj.name = name
    link(obj)
    detail(obj, parent, "turned-part")
    obj.data.materials.append(MATS[material])
    modifier = obj.modifiers.new("edge-radius", "BEVEL")
    modifier.width = min(radius * 0.12, depth * 0.14)
    modifier.segments = 2
    return obj


def tube(name, parent, points, radius, material="copper", resolution=2):
    curve = bpy.data.curves.new(name, "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = resolution
    curve.bevel_depth = radius
    curve.bevel_resolution = 3
    spline = curve.splines.new("BEZIER")
    spline.bezier_points.add(len(points) - 1)
    for point, value in zip(spline.bezier_points, points):
        point.co = value
        point.handle_left_type = "AUTO"
        point.handle_right_type = "AUTO"
    obj = bpy.data.objects.new(name, curve)
    link(obj)
    detail(obj, parent, "routed-conductor" if material not in {"neuron", "membrane"} else "biological-process")
    obj.data.materials.append(MATS[material])
    return obj


def tapered_process(name, parent, points, start_radius, end_radius, material="neuron"):
    path = [Vector(point) for point in points]
    sampled = []
    segments = 20
    for index in range(segments + 1):
        t = index / segments
        segment = min(int(t * (len(path) - 1)), len(path) - 2)
        local_t = t * (len(path) - 1) - segment
        p0 = path[max(0, segment - 1)]
        p1 = path[segment]
        p2 = path[segment + 1]
        p3 = path[min(len(path) - 1, segment + 2)]
        point = 0.5 * ((2 * p1) + (-p0 + p2) * local_t + (2*p0 - 5*p1 + 4*p2 - p3) * local_t**2 + (-p0 + 3*p1 - 3*p2 + p3) * local_t**3)
        tangent = (p2 - p1).normalized()
        reference = Vector((0, 1, 0))
        if abs(tangent.dot(reference)) > 0.92:
            reference = Vector((1, 0, 0))
        normal = tangent.cross(reference).normalized()
        binormal = tangent.cross(normal).normalized()
        radius = end_radius + (start_radius - end_radius) * ((1 - t) ** 1.35)
        sampled.append((point, normal, binormal, radius))
    sides = 10
    vertices = []
    faces = []
    for point, normal, binormal, radius in sampled:
        for side in range(sides):
            angle = math.tau * side / sides
            vertex = point + radius * (math.cos(angle) * normal + math.sin(angle) * binormal)
            vertices.append(tuple(vertex))
    for ring_index in range(segments):
        for side in range(sides):
            a = ring_index * sides + side
            b = ring_index * sides + (side + 1) % sides
            faces.append((a, b, b + sides, a + sides))
    faces.append(tuple(reversed(range(sides))))
    faces.append(tuple(segments * sides + side for side in range(sides)))
    mesh = bpy.data.meshes.new(name + "-mesh")
    mesh.from_pydata(vertices, [], faces)
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    link(obj)
    detail(obj, parent, "tapered-biological-process")
    mesh.materials.append(MATS[material])
    for polygon in mesh.polygons:
        polygon.use_smooth = True
    return obj


def torus(name, parent, location, major, minor, material="steel", rotation=None):
    bpy.ops.mesh.primitive_torus_add(major_segments=36, minor_segments=10, major_radius=major, minor_radius=minor, location=location, rotation=rotation or (0, 0, 0))
    obj = bpy.context.object
    obj.name = name
    link(obj)
    detail(obj, parent, "formed-ring")
    for polygon in obj.data.polygons:
        polygon.use_smooth = True
    obj.data.materials.append(MATS[material])
    return obj


def text_label(name, parent, location, value, size=0.11, material="white"):
    data = bpy.data.curves.new(name, "FONT")
    data.body = value
    data.align_x = "CENTER"
    data.size = size
    data.extrude = 0.001
    obj = bpy.data.objects.new(name, data)
    link(obj)
    detail(obj, parent, "identification")
    obj.location = location
    obj.data.materials.append(MATS[material])
    return obj


def screw(parent, location, radius=0.05):
    x, y, z = location
    cylinder("GEO-fastener-washer", parent, (x, y, z), radius * 1.32, 0.018, "steel", 20)
    cylinder("GEO-fastener-head", parent, (x, y + 0.022, z), radius, 0.05, "aluminum", 20)
    box("GEO-fastener-slot", parent, (x, y + 0.05, z), (radius * 1.2, 0.005, radius * 0.18), "graphite", 0.003)


def pcb(parent, origin, width, depth, label, blue=False):
    x, y, z = origin
    base = "pcb_blue" if blue else "pcb"
    box(f"GEO-{label}-substrate", parent, (x, y, z), (width, 0.09, depth), "graphite", 0.045)
    box(f"GEO-{label}-solder-mask", parent, (x, y + 0.052, z), (width - 0.05, 0.012, depth - 0.05), base, 0.035)
    for side_x in (-1, 1):
        for side_z in (-1, 1):
            xx = x + side_x * (width / 2 - 0.14)
            zz = z + side_z * (depth / 2 - 0.14)
            torus("GEO-plated-mounting-ring", parent, (xx, y + 0.068, zz), 0.056, 0.011, "gold")
            cylinder("GEO-mounting-hole", parent, (xx, y + 0.075, zz), 0.034, 0.008, "graphite", 16)
    for index in range(34):
        xx = x + random.uniform(-width * 0.43, width * 0.43)
        zz = z + random.uniform(-depth * 0.43, depth * 0.43)
        cylinder("GEO-plated-via", parent, (xx, y + 0.071, zz), 0.018, 0.008, "gold", 12)
        cylinder("GEO-via-drill", parent, (xx, y + 0.077, zz), 0.007, 0.006, "graphite", 8)
    for index in range(22):
        x0 = x - width * 0.44 + index * width * 0.88 / 21
        z0 = z - depth * 0.38 + random.random() * 0.15
        x1 = x + random.uniform(-width * 0.25, width * 0.25)
        z1 = z + depth * 0.34
        midpoint = z0 + (z1 - z0) * 0.55
        tube("GEO-routed-copper-trace", parent, [(x0, y + 0.078, z0), (x0, y + 0.078, midpoint), (x1, y + 0.078, midpoint), (x1, y + 0.078, z1)], 0.006 if index % 4 else 0.012, "copper" if index % 5 == 0 else "gold", 1)
    text_label("GEO-board-silkscreen", parent, (x, y + 0.08, z - depth * 0.44), label, 0.085)


def chip(parent, location, width=0.54, depth=0.46, pins=8, label="IC"):
    x, y, z = location
    box(f"GEO-{label}-package", parent, (x, y + 0.10, z), (width, 0.15, depth), "graphite", 0.03)
    box(f"GEO-{label}-lid", parent, (x, y + 0.185, z), (width * 0.76, 0.035, depth * 0.76), "steel", 0.015)
    for sign in (-1, 1):
        for index in range(pins):
            zz = z - depth * 0.38 + index * depth * 0.76 / max(1, pins - 1)
            box("GEO-ic-lead", parent, (x + sign * (width / 2 + 0.07), y + 0.073, zz), (0.15, 0.024, 0.026), "solder", 0.004)
    cylinder("GEO-pin-one", parent, (x - width * 0.30, y + 0.205, z - depth * 0.28), 0.022, 0.006, "white", 12)
    text_label("GEO-ic-marking", parent, (x, y + 0.208, z), label, 0.06)


def smd(parent, location, index=0):
    x, y, z = location
    kind = index % 3
    if kind == 0:
        box("GEO-ceramic-capacitor", parent, (x, y + 0.075, z), (0.13, 0.055, 0.075), "ceramic", 0.008)
    elif kind == 1:
        box("GEO-precision-resistor", parent, (x, y + 0.075, z), (0.15, 0.05, 0.06), "graphite", 0.006)
    else:
        box("GEO-signal-diode", parent, (x, y + 0.075, z), (0.16, 0.06, 0.07), "graphite", 0.008)
    for side in (-1, 1):
        box("GEO-smd-termination", parent, (x + side * 0.06, y + 0.076, z), (0.018, 0.055, 0.078), "solder", 0.003)


def fan(parent, location, radius=0.42, blades=9):
    x, y, z = location
    cylinder("GEO-fan-housing", parent, (x, y, z), radius * 1.08, 0.10, "graphite", 40)
    torus("GEO-fan-guard", parent, (x, y + 0.058, z), radius * 0.88, 0.022, "steel")
    rotor = bpy.data.objects.new("GEO-fan-rotor", None)
    bpy.data.collections["COL-00-History-v003"].objects.link(rotor)
    rotor.parent = parent
    rotor.location = (x, y + 0.09, z)
    rotor["motion"] = "rotor"
    for index in range(blades):
        angle = index * math.tau / blades
        blade = box("GEO-curved-impeller-blade", rotor, (math.cos(angle) * radius * 0.44, 0, math.sin(angle) * radius * 0.44), (radius * 0.62, 0.028, radius * 0.18), "aluminum", 0.018)
        blade.rotation_euler.y = -angle + 0.34
    cylinder("GEO-fan-bearing", rotor, (0, 0.03, 0), radius * 0.20, 0.09, "aluminum", 28)
    cylinder("GEO-fan-cap", rotor, (0, 0.08, 0), radius * 0.08, 0.014, "graphite", 24)


def radiator(parent, location, width, depth, fins=16):
    x, y, z = location
    box("GEO-copper-baseplate", parent, (x, y, z), (width, 0.09, depth), "copper", 0.02)
    for index in range(fins):
        xx = x - width * 0.46 + index * width * 0.92 / max(1, fins - 1)
        box("GEO-aluminum-fin", parent, (xx, y + 0.24, z), (0.024, 0.43, depth * 0.95), "aluminum", 0.004)
    for zz in (-depth * 0.28, depth * 0.28):
        tube("GEO-copper-heatpipe", parent, [(x - width * 0.42, y + 0.06, z + zz), (x - width * 0.22, y + 0.12, z + zz), (x + width * 0.25, y + 0.12, z + zz), (x + width * 0.42, y + 0.06, z + zz)], 0.032, "copper")


def connector(parent, location, count=8):
    x, y, z = location
    width = count * 0.072 + 0.13
    box("GEO-connector-body", parent, (x, y + 0.13, z), (width, 0.24, 0.27), "graphite", 0.02)
    for index in range(count):
        xx = x + (index - (count - 1) / 2) * 0.072
        box("GEO-connector-contact", parent, (xx, y + 0.27, z - 0.04), (0.026, 0.04, 0.13), "gold", 0.003)


def frame(parent, width=8.2, height=4.7):
    box("GEO-instrument-base", parent, (0, -1.15, 0), (width, 0.24, 5.1), "graphite", 0.08)
    for x in (-width / 2 + 0.14, width / 2 - 0.14):
        box("GEO-frame-upright", parent, (x, -0.05, 0), (0.14, 2.1, 4.7), "aluminum", 0.025)
    for z in (-2.25, 2.25):
        box("GEO-frame-crossrail", parent, (0, -0.05, z), (width, 0.16, 0.14), "aluminum", 0.022)
        for x in (-width * 0.35, 0, width * 0.35):
            screw(parent, (x, -0.16, z), 0.045)
    box("GEO-observation-side-panel", parent, (width / 2 - 0.04, 0.52, 0), (0.025, 1.25, 4.3), "glass", 0.004)


def rack_module(parent, location, width, height, accent="cyan", label="MODULE"):
    x, y, z = location
    box("GEO-module-carrier", parent, (x, y, z), (width, 0.22, height), "steel", 0.045)
    box("GEO-module-faceplate", parent, (x, y + 0.13, z), (width - 0.12, 0.035, height - 0.10), "graphite", 0.025)
    for xx in (x - width * 0.35, x + width * 0.35):
        box("GEO-faceplate-vent", parent, (xx, y + 0.155, z), (width * 0.18, 0.009, height * 0.55), accent, 0.006)
    for zz in (z - height * 0.38, z + height * 0.38):
        screw(parent, (x - width * 0.42, y + 0.17, zz), 0.035)
        screw(parent, (x + width * 0.42, y + 0.17, zz), 0.035)
    text_label("GEO-module-label", parent, (x, y + 0.16, z + height * 0.18), label, 0.075, "white")


def build_neuron(root):
    shell = group("GEO-00-Neuron-shell", root, "shell")
    # A specimen stand and containment ring give the biological subject a real
    # scale reference without turning it into a mechanical object.
    cylinder("GEO-specimen-base", shell, (0, -1.45, 0), 2.35, 0.25, "graphite", 64)
    torus("GEO-specimen-observation-ring", shell, (0, -1.28, 0), 2.12, 0.035, "cyan", (0, 0, 0))
    torus("GEO-specimen-calibration-ring", shell, (0, -1.22, 0), 1.72, 0.018, "gold", (0, 0, 0))
    for angle in range(0, 360, 30):
        a = math.radians(angle)
        cylinder("GEO-calibration-marker", shell, (math.cos(a) * 2.04, -1.22, math.sin(a) * 2.04), 0.025, 0.12, "white", 12, (math.pi / 2, 0, 0))
    text_label("GEO-neuron-plate", shell, (0, -1.30, -1.92), "BIOLOGICAL NEURON / EXPLANATORY SPECIMEN", 0.13, "white")

    soma = group("GEO-00-Neuron-cpu", root, "cpu")
    sphere("GEO-soma-cell-body", soma, (0, 0, 0), 1.16, "cytoplasm", (1.18, 0.86, 1.0), 40)
    sphere("GEO-soma-membrane", soma, (0, 0.05, 0), 1.22, "membrane", (1.18, 0.86, 1.0), 40)
    sphere("GEO-nucleus", soma, (0.10, 0.28, 0.08), 0.48, "nucleus", (1.0, 0.55, 0.84), 32)
    sphere("GEO-nucleolus", soma, (-0.03, 0.55, 0.12), 0.15, "synapse", (1.0, 0.7, 0.8), 24)
    for index in range(16):
        angle = index * math.tau / 16
        px = math.cos(angle) * 0.62
        pz = math.sin(angle) * 0.46
        sphere("GEO-mitochondrion", soma, (px, 0.38 + 0.16 * math.sin(index), pz), 0.10, "synapse", (1.7, 0.55, 0.7), 16)
        torus("GEO-mitochondria-cristae", soma, (px, 0.49 + 0.16 * math.sin(index), pz), 0.07, 0.012, "gold", (math.pi / 2, 0, 0))
    for index in range(12):
        angle = index * math.tau / 12
        tube("GEO-membrane-protein", soma, [(math.cos(angle) * .88, .15, math.sin(angle) * .72), (math.cos(angle) * 1.15, .15, math.sin(angle) * .94)], .025, "gold")

    dendrites = group("GEO-00-Neuron-memory", root, "memory")
    branches = [
        [(-.72, .05, .30), (-1.55, .35, .65), (-2.35, .58, .36), (-3.0, .92, .82)],
        [(-.82, .18, -.15), (-1.62, .52, -.32), (-2.46, .65, -.92), (-2.86, 1.03, -1.25)],
        [(.58, .16, .52), (1.30, .54, 1.14), (1.95, .85, 1.44), (2.58, 1.14, 1.12)],
        [(.62, .05, -.32), (1.42, .40, -.68), (2.22, .70, -.58), (2.84, 1.08, -.92)],
        [(-.28, .32, .66), (-.48, .96, 1.40), (-.36, 1.50, 2.02)],
    ]
    for branch_index, points in enumerate(branches):
        tapered_process("GEO-dendritic-primary", dendrites, points, .105, .026, "neuron")
        for segment in range(len(points) - 1):
            a, b = Vector(points[segment]), Vector(points[segment + 1])
            direction = (b - a).normalized()
            side = Vector((-direction.z, 0, direction.x))
            for side_sign in (-1, 1):
                start = a.lerp(b, .42) + side * side_sign * .08
                end = start + side * side_sign * .25 + Vector((0, .16, .12 * side_sign))
                tapered_process("GEO-dendritic-secondary", dendrites, [start, end], .040, .009, "neuron")
                sphere("GEO-dendritic-spine", dendrites, end, .055, "synapse", (1.0, .75, 1.0), 12)
    text_label("GEO-dendrite-label", dendrites, (-2.4, 1.26, 0.0), "DENDRITIC ARBOR", .10, "white")

    axon = group("GEO-00-Neuron-gpu", root, "gpu")
    tube("GEO-axon-initial-segment", axon, [(0.45, -.08, -.12), (1.45, -.30, -.22), (2.40, -.38, -.08), (3.25, -.18, -.20)], .15, "neuron")
    tube("GEO-axon-core", axon, [(3.1, -.18, -.20), (4.0, -.08, -.30), (5.1, .18, -.05)], .075, "membrane")
    for index in range(6):
        x = 2.25 + index * .47
        sphere("GEO-myelin-sheath", axon, (x, -.32 + index * .035, -.18 + index * .025), .18, "membrane", (1.22, .62, .82), 24)
        torus("GEO-node-of-ranvier", axon, (x + .19, -.30 + index * .035, -.17 + index * .025), .08, .025, "gold", (0, math.pi / 2, 0))
    text_label("GEO-axon-label", axon, (3.3, .12, -.65), "MYELINATED AXON", .10, "white")

    synapse = group("GEO-00-Neuron-network", root, "network")
    tube("GEO-terminal-branch-a", synapse, [(5.0, .20, -.05), (5.65, .58, .48), (6.15, .72, .68)], .06, "neuron")
    tube("GEO-terminal-branch-b", synapse, [(5.0, .20, -.05), (5.72, .22, -.10), (6.25, .10, -.24)], .06, "neuron")
    tube("GEO-terminal-branch-c", synapse, [(5.0, .20, -.05), (5.45, -.24, -.62), (6.05, -.32, -.86)], .06, "neuron")
    terminals = [(6.15, .72, .68), (6.25, .10, -.24), (6.05, -.32, -.86)]
    for index, (x, y, z) in enumerate(terminals):
        sphere("GEO-presynaptic-bouton", synapse, (x, y, z), .24, "synapse", (1.0, .75, 1.0), 28)
        sphere("GEO-postsynaptic-spine", synapse, (x + .46, y + .08, z + .04), .17, "membrane", (1.0, .72, 1.0), 24)
        cylinder("GEO-synaptic-cleft", synapse, (x + .23, y + .05, z), .11, .07, "gold", 20, (0, math.pi / 2, 0))
        for vesicle in range(5):
            angle = vesicle * math.tau / 5
            sphere("GEO-synaptic-vesicle", synapse, (x + math.cos(angle) * .12, y + .06 + math.sin(angle) * .12, z + .07), .035, "amber", segments=12)
    text_label("GEO-synapse-label", synapse, (6.05, 1.05, .02), "SYNAPTIC TERMINALS", .10, "white")


def build_rules(root):
    shell = group("GEO-00-Rules-shell", root, "shell")
    frame(shell, 8.0, 4.4)
    box("GEO-rules-cabinet-back", shell, (0, -.30, 0), (7.5, .12, 4.0), "graphite", .04)
    box("GEO-rules-top-rail", shell, (0, .86, 2.10), (7.5, .10, .10), "aluminum", .015)
    text_label("GEO-rules-title", shell, (0, .91, 1.82), "SYMBOLIC INFERENCE INSTRUMENT", .13)

    input_part = group("GEO-00-Rules-input", root, "input")
    rack_module(input_part, (-2.55, .36, .50), 1.8, 2.9, "cyan", "STATE INPUT")
    pcb(input_part, (-2.55, .48, .50), 1.32, 2.1, "I/O-01", True)
    chip(input_part, (-2.55, .64, .55), .42, .36, 7, "ADC")
    connector(input_part, (-2.55, .42, -.52), 12)
    for index in range(7): smd(input_part, (-3.04 + index * .16, .58, 1.22), index)

    rule_part = group("GEO-00-Rules-rule", root, "rule")
    rack_module(rule_part, (-.65, .36, .50), 1.8, 2.9, "violet", "RULE STORE")
    pcb(rule_part, (-.65, .48, .50), 1.34, 2.1, "RULE-02")
    for index in range(4): chip(rule_part, (-.95 + (index % 2) * .60, .63, -.18 + (index // 2) * .72), .35, .27, 5, "RULE")
    for index in range(12): smd(rule_part, (-1.18 + (index % 6) * .20, .61, 1.22 - (index // 6) * .20), index)
    connector(rule_part, (-.65, .42, -1.10), 8)

    match_part = group("GEO-00-Rules-matcher", root, "matcher")
    rack_module(match_part, (1.25, .36, .50), 1.8, 2.9, "mint", "MATCH ARRAY")
    pcb(match_part, (1.25, .48, .50), 1.34, 2.1, "CMP-03", True)
    for index in range(10):
        chip(match_part, (0.78 + (index % 5) * .23, .63, -.30 + (index // 5) * .72), .18, .16, 4, "CMP")
    for index in range(8): cylinder("GEO-matcher-status-led", match_part, (0.70 + index * .16, .76, 1.28), .035, .018, "mint", 12, (math.pi / 2, 0, 0))

    control = group("GEO-00-Rules-controller", root, "controller")
    rack_module(control, (3.15, .36, .50), 1.8, 2.9, "amber", "CONTROL")
    pcb(control, (3.15, .48, .50), 1.34, 2.1, "CTL-04")
    chip(control, (3.15, .65, .55), .54, .44, 8, "FSM")
    for index in range(5):
        cylinder("GEO-control-selector", control, (2.66 + index * .24, .76, -.62), .08, .06, "aluminum", 20, (math.pi / 2, 0, 0))
    for index in range(7): smd(control, (2.68 + index * .16, .61, 1.22), index)

    output = group("GEO-00-Rules-output", root, "output")
    rack_module(output, (0, .35, -1.75), 4.6, .95, "cyan", "INFERENCE OUTPUT")
    for index in range(12): connector(output, (-1.8 + index * .33, .45, -1.75), 4)
    for a, b in [((-2.55, .48, .5), (-.65, .48, .5)), ((-.65, .48, .5), (1.25, .48, .5)), ((1.25, .48, .5), (3.15, .48, .5))]:
        tube("GEO-rules-backplane-bus", shell, [a, ((a[0] + b[0]) / 2, .82, .5), b], .025, "gold")


def build_search(root):
    shell = group("GEO-00-Search-shell", root, "shell")
    frame(shell, 8.4, 4.8)
    for z in (-1.45, 0, 1.45):
        box("GEO-search-guide-rail", shell, (0, .78, z), (7.7, .16, .08), "aluminum", .016)
    text_label("GEO-search-title", shell, (0, .92, 2.1), "SEARCH / EVALUATION INSTRUMENT", .13)

    state = group("GEO-00-Search-state", root, "state")
    rack_module(state, (-2.85, .30, 1.05), 2.0, 1.45, "cyan", "CURRENT STATE")
    pcb(state, (-2.85, .44, 1.05), 1.46, .94, "STATE-01", True)
    for index in range(16):
        x = -3.40 + (index % 8) * .16
        z = .76 + (index // 8) * .36
        box("GEO-state-cell", state, (x, .56, z), (.11, .08, .25), "gold", .014)
    connector(state, (-2.85, .44, .38), 10)

    branches = [("branch-a", -1.05, .65, "mint", "CANDIDATE A"), ("branch-b", 1.05, .65, "violet", "CANDIDATE B"), ("branch-c", 3.10, .65, "amber", "CANDIDATE C")]
    for key, x, z, accent, label in branches:
        part = group(f"GEO-00-Search-{key}", root, key)
        rack_module(part, (x, .30, z), 1.75, 1.45, accent, label)
        pcb(part, (x, .44, z), 1.25, .93, f"PATH-{key[-1].upper()}")
        for index in range(3):
            chip(part, (x - .38 + index * .38, .62, z), .20, .16, 4, "NODE")
        for index in range(5): smd(part, (x - .44 + index * .22, .58, z + .42), index)
        connector(part, (x, .45, z - .55), 8)

    evaluation = group("GEO-00-Search-evaluation", root, "evaluation")
    rack_module(evaluation, (0, .32, -1.30), 4.7, 1.05, "gold", "EVALUATION / SCORE")
    pcb(evaluation, (0, .47, -1.30), 3.75, .62, "EVAL-05", True)
    for index in range(8):
        cylinder("GEO-score-gauge", evaluation, (-1.55 + index * .44, .72, -1.30), .12, .06, "aluminum", 24, (math.pi / 2, 0, 0))
        cylinder("GEO-score-needle", evaluation, (-1.55 + index * .44, .76, -1.30), .015, .20, "amber", 12, (0, math.pi / 2, 0))
    connector(evaluation, (2.0, .46, -1.32), 10)
    for start, end in [((-2.85, .45, .48), (-1.05, .45, .68)), ((-2.85, .45, .48), (1.05, .45, .68)), ((-2.85, .45, .48), (3.10, .45, .68)), ((-1.05, .45, .62), (-.8, .45, -1.0)), ((1.05, .45, .62), (.2, .45, -1.0)), ((3.10, .45, .62), (1.2, .45, -1.0))]:
        tube("GEO-search-cable-harness", shell, [start, ((start[0] + end[0]) / 2, .86, (start[2] + end[2]) / 2), end], .026, "cyan")


def build_learning(root):
    shell = group("GEO-00-Learning-shell", root, "shell")
    frame(shell, 9.1, 5.0)
    box("GEO-compute-cabinet-back", shell, (0, -.30, 0), (8.5, .12, 4.5), "graphite", .05)
    box("GEO-transparent-service-door", shell, (4.25, .75, 0), (.03, 1.35, 4.3), "glass", .004)
    text_label("GEO-learning-title", shell, (0, .94, 2.15), "DEEP LEARNING COMPUTE CABIN", .14)

    sample = group("GEO-00-Learning-sample", root, "sample")
    rack_module(sample, (-3.35, .36, 1.20), 1.55, 1.40, "cyan", "DATA")
    for index in range(4):
        box("GEO-hot-swap-drive", sample, (-3.35, .53, .80 + index * .25), (1.12, .24, .16), "steel", .02)
        box("GEO-drive-label", sample, (-3.35, .67, .80 + index * .25), (.35, .01, .04), "white", .002)
        for led in range(3): cylinder("GEO-drive-led", sample, (-3.82 + led * .12, .70, .80 + index * .25), .018, .012, "mint", 12, (math.pi / 2, 0, 0))
    connector(sample, (-3.35, .50, .28), 8)

    forward = group("GEO-00-Learning-forward", root, "forward")
    rack_module(forward, (-1.25, .35, .85), 1.85, 3.0, "violet", "FORWARD")
    pcb(forward, (-1.25, .50, .85), 1.38, 2.35, "ACCEL-01", True)
    chip(forward, (-1.25, .67, .95), .78, .66, 12, "MATRIX")
    radiator(forward, (-1.25, .86, .95), 1.20, 1.08, 14)
    fan(forward, (-1.25, 1.30, .95), .38, 9)
    for index in range(7): smd(forward, (-1.68 + index * .14, .62, -.10), index)

    loss = group("GEO-00-Learning-loss", root, "loss")
    rack_module(loss, (1.00, .35, .85), 1.85, 3.0, "amber", "LOSS")
    pcb(loss, (1.00, .50, .85), 1.38, 2.35, "METRIC-02")
    chip(loss, (1.00, .67, 1.0), .52, .42, 8, "LOSS")
    for index in range(9):
        cylinder("GEO-loss-bar", loss, (.52 + index * .12, .70, -.10 + (index % 4) * .23), .045, .16 + (index % 3) * .08, "amber", 12)
    connector(loss, (1.00, .48, -.38), 8)

    gradient = group("GEO-00-Learning-gradient", root, "gradient")
    rack_module(gradient, (3.15, .35, .85), 1.85, 3.0, "mint", "GRADIENT")
    pcb(gradient, (3.15, .50, .85), 1.38, 2.35, "BACKPROP-03", True)
    chip(gradient, (3.15, .67, .98), .56, .44, 8, "ADAM")
    for index in range(5):
        tube("GEO-gradient-loop", gradient, [(2.65, .68, -.18 + index * .22), (3.15, .86, -.08 + index * .22), (3.65, .68, -.18 + index * .22)], .018, "mint")
    for index in range(7): smd(gradient, (2.72 + index * .14, .61, 1.78), index)

    update = group("GEO-00-Learning-update", root, "update")
    rack_module(update, (0, .36, -1.70), 6.8, .95, "cyan", "PARAMETER UPDATE / INTERCONNECT")
    pcb(update, (0, .50, -1.70), 5.8, .55, "UPDATE-04")
    for index in range(18):
        xx = -2.55 + index * .30
        box("GEO-backplane-contact", update, (xx, .66, -1.70), (.11, .04, .22), "gold", .003)
    for index in range(6):
        tube("GEO-update-cable", update, [(-2.7 + index * 1.08, .72, -1.32), (-2.3 + index * .86, 1.0, -1.56), (-1.8 + index * .7, .72, -1.95)], .026, "rubber")
    connector(update, (2.55, .53, -1.70), 12)


def make_root(exhibit_id, title):
    root = bpy.data.objects.new(f"GEO-00-{exhibit_id}-Exhibit", None)
    bpy.data.collections["COL-00-History-v003"].objects.link(root)
    root["exhibit_id"] = exhibit_id
    root["asset_version"] = "v003"
    root["title"] = title
    root["provenance"] = "Original explanatory geometry; no third-party mesh assets used."
    return root


def descendants(root):
    result = []
    def visit(obj):
        result.append(obj)
        for child in obj.children:
            visit(child)
    visit(root)
    return result


def export_root(root, filename):
    bpy.ops.object.select_all(action="DESELECT")
    for obj in descendants(root):
        obj.select_set(True)
    bpy.context.view_layer.objects.active = root
    path = MODELS / filename
    bpy.ops.export_scene.gltf(filepath=str(path), export_format="GLB", use_selection=True, export_apply=True, export_animations=False, export_yup=True, export_materials="EXPORT", export_extras=True)
    bpy.ops.object.select_all(action="DESELECT")
    return path


def configure_scene():
    world = bpy.context.scene.world or bpy.data.worlds.new("WORLD-00-v003")
    bpy.context.scene.world = world
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.008, 0.016, 0.025, 1)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.36
    for name, location, energy, size in [("Key", (4, 9, 8), 1450, 7), ("Fill", (-8, 5, 1), 900, 6), ("Rim", (6, 4, -8), 1600, 6)]:
        data = bpy.data.lights.new(f"LGT-00-v003-{name}", "AREA")
        data.energy = energy
        data.shape = "DISK"
        data.size = size
        light = bpy.data.objects.new(data.name, data)
        bpy.context.scene.collection.objects.link(light)
        light.location = location
        light.rotation_euler = (Vector((0, 0, 0)) - light.location).to_track_quat("-Z", "Y").to_euler()
    camera_data = bpy.data.cameras.new("CAM-00-v003")
    camera = bpy.data.objects.new("CAM-00-v003", camera_data)
    bpy.context.scene.collection.objects.link(camera)
    camera.location = (11, 11, 14)
    camera.rotation_euler = (Vector((0, 0, 0)) - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera_data.lens = 48
    bpy.context.scene.camera = camera
    bpy.context.scene.render.engine = "BLENDER_EEVEE"
    bpy.context.scene.render.resolution_x = 1300
    bpy.context.scene.render.resolution_y = 900
    bpy.context.scene.render.resolution_percentage = 100
    bpy.context.scene.render.image_settings.file_format = "PNG"


def render_preview(root, filename):
    roots = [obj for obj in bpy.data.objects if obj.name.startswith("GEO-00-") and obj.parent is None]
    for other in roots:
        for obj in descendants(other):
            obj.hide_render = other != root
    bpy.context.scene.render.filepath = str(PREVIEWS / filename)
    bpy.ops.render.render(write_still=True)
    for other in roots:
        for obj in descendants(other):
            obj.hide_render = False


def save_and_build():
    MODELS.mkdir(parents=True, exist_ok=True)
    PREVIEWS.mkdir(parents=True, exist_ok=True)
    clear_scene()
    setup_materials()
    configure_scene()
    roots = [
        (make_root("neuron", "Biological neuron"), build_neuron),
        (make_root("rules", "Rule inference instrument"), build_rules),
        (make_root("search", "Search and evaluation instrument"), build_search),
        (make_root("learning", "Deep learning compute cabin"), build_learning),
    ]
    outputs = []
    for root, builder in roots:
        builder(root)
        key = root["exhibit_id"]
        path = export_root(root, f"history-{key}-v003.glb")
        render_preview(root, f"history-{key}-v003.png")
        meshes = [obj for obj in descendants(root) if obj.type == "MESH"]
        parts = [obj.get("key") for obj in root.children if obj.get("key")]
        outputs.append({"id": key, "file": str(path), "bytes": path.stat().st_size, "parts": parts, "meshes": len(meshes), "objects": len(descendants(root))})
    for obj in bpy.data.objects:
        obj.hide_render = False
    bpy.ops.wm.save_as_mainfile(filepath=str(MODELS / "ai-museum-history-v003.blend"))
    print({"status": "HISTORY_V003_OK", "outputs": outputs, "blend": str(MODELS / "ai-museum-history-v003.blend")})


if __name__ == "__main__":
    save_and_build()
