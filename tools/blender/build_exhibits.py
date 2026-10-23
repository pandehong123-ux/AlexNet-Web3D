import bpy
import math
import json
import hashlib
import struct
import sys
from datetime import datetime, timezone
from pathlib import Path
from mathutils import Vector

PROJECT = Path('D:/新建文件夹 (2)/AlexNet')
MODEL_DIR = PROJECT / 'assets/models'
OUTPUT_DIR = PROJECT / 'output/blender'
MODEL_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
PHASE = globals().get('PHASE', sys.argv[sys.argv.index('--')+1] if '--' in sys.argv else 'qa')
SCENE_NAME = 'COL-AI-Museum-Engineering'

def coordinate(position):
    return (position[0], -position[2], position[1])

def material(name, color, metallic=0.0, roughness=0.4, emission=0.0):
    name = 'MAT-Museum-' + name
    existing = bpy.data.materials.get(name)
    if existing:
        return existing
    created = bpy.data.materials.new(name)
    created.use_nodes = True
    shader = next(node for node in created.node_tree.nodes if node.type == 'BSDF_PRINCIPLED')
    shader.inputs['Base Color'].default_value = (*color, 1)
    shader.inputs['Metallic'].default_value = metallic
    shader.inputs['Roughness'].default_value = roughness
    shader.inputs['Emission Color'].default_value = (*color, 1)
    shader.inputs['Emission Strength'].default_value = emission
    created.diffuse_color = (*color, 1)
    return created

PALETTE = {
    'graphite': material('Graphite', (.045, .058, .063), .65, .32),
    'titanium': material('Titanium', (.39, .44, .46), .82, .26),
    'silver': material('Machined-Aluminium', (.62, .69, .7), .86, .24),
    'pcb': material('Circuit-Substrate', (.026, .13, .1), .18, .52),
    'copper': material('Gold-Contacts', (.57, .36, .14), .84, .3),
    'chip': material('Ceramic-Packages', (.026, .033, .036), .25, .36),
    'die': material('Silicon', (.17, .32, .34), .72, .18),
    'violet': material('Memory-Accents', (.32, .28, .38), .5, .35),
    'mint': material('Signal-Lights', (.28, .69, .53), .25, .28, .35),
    'rubber': material('Rubber-Feet', (.012, .017, .018), .0, .88),
    'wood': material('Board-Wood', (.53, .35, .16), .0, .48),
    'wood-light': material('Board-Grain', (.58, .39, .19), .0, .5),
    'ink': material('Board-Grid', (.075, .054, .033), .0, .7),
    'white': material('White-Stones', (.79, .8, .74), .04, .21),
    'black': material('Black-Stones', (.012, .018, .022), .15, .22),
} if PHASE in {'blockout', 'detail'} else {}

def mesh_object(name, mesh_data, parent, material_key):
    created = bpy.data.objects.new('GEO-' + name, mesh_data)
    bpy.context.scene.collection.objects.link(created)
    created.parent = parent
    created.data.materials.append(PALETTE[material_key])
    return created

def box(name, size, position, parent, material_key='graphite', bevel=.025):
    width, height, depth = size
    vertices = [coordinate((sx * width / 2, sy * height / 2, sz * depth / 2))
                for sx, sy, sz in [(-1,-1,-1),(-1,-1,1),(-1,1,-1),(-1,1,1),(1,-1,-1),(1,-1,1),(1,1,-1),(1,1,1)]]
    faces = [(0,4,6,2),(1,3,7,5),(0,1,5,4),(2,6,7,3),(0,2,3,1),(4,5,7,6)]
    mesh_data = bpy.data.meshes.new('GEO-' + name)
    mesh_data.from_pydata(vertices, [], faces)
    mesh_data.update()
    created = mesh_object(name, mesh_data, parent, material_key)
    created.location = coordinate(position)
    if bevel > 0:
        modifier = created.modifiers.new('Edge radii', 'BEVEL')
        modifier.width = min(bevel, min(size) * .18)
        modifier.segments = 2
        created.modifiers.new('Surface normals', 'WEIGHTED_NORMAL')
    return created

def cylinder(name, radius, height, position, parent, material_key='titanium', segments=20):
    vertices = []
    for level in [-height / 2, height / 2]:
        for index in range(segments):
            angle = index * math.tau / segments
            vertices.append((math.cos(angle)*radius, math.sin(angle)*radius, level))
    faces = [tuple(range(segments-1,-1,-1)), tuple(range(segments,segments*2))]
    faces.extend((index,(index+1)%segments,(index+1)%segments+segments,index+segments) for index in range(segments))
    mesh_data = bpy.data.meshes.new('GEO-' + name)
    mesh_data.from_pydata(vertices, [], faces)
    mesh_data.update()
    created = mesh_object(name, mesh_data, parent, material_key)
    created.location = coordinate(position)
    for polygon in mesh_data.polygons:
        polygon.use_smooth = len(polygon.vertices) == 4
    return created

def path(name, points, parent, material_key='copper', radius=.009):
    curve = bpy.data.curves.new('GEO-' + name, 'CURVE')
    curve.dimensions = '3D'
    curve.bevel_depth = radius
    curve.bevel_resolution = 0
    spline = curve.splines.new('POLY')
    spline.points.add(len(points)-1)
    for index, point in enumerate(points):
        spline.points[index].co = (*coordinate(point), 1)
    created = bpy.data.objects.new('GEO-' + name, curve)
    bpy.context.scene.collection.objects.link(created)
    created.parent = parent
    curve.materials.append(PALETTE[material_key])
    return created

def group(key, position, parent=None):
    created = bpy.data.objects.new('GEO-' + key, None)
    bpy.context.scene.collection.objects.link(created)
    created.parent = parent
    created.location = coordinate(position)
    created['key'] = key
    created['is_exhibit_part'] = True
    return created

def fixings(parent, width, depth, height):
    for x_position in [-width/2+.15,width/2-.15]:
        for z_position in [-depth/2+.15,depth/2-.15]:
            cylinder('Captive-fastener',.055,.035,(x_position,height,z_position),parent,'silver',12)
            box('Screw-slot',(.065,.008,.012),(x_position,height+.019,z_position),parent,'chip',0)

def circuit_details(parent, width, depth, height):
    fixings(parent,width,depth,height)
    for index in range(20):
        x_position = (index-9.5)*width/25
        bend = .13+(index%4)*.09
        path('Board-trace',[(x_position,height,-depth*.39),(x_position,height,-bend),(x_position+.12,height,-bend+.12),(x_position+.12,height,depth*.32)],parent,'copper' if index%5==0 else 'titanium',.004)
    for index in range(18):
        x_position = (index%9-4)*width/12
        z_position = (-1 if index<9 else 1)*depth*.35
        box('Surface-resistor',(.075,.04,.1),(x_position,height+.025,z_position),parent,'chip',0)
        box('Resistor-terminal',(.09,.018,.025),(x_position,height+.028,z_position+.035),parent,'silver',0)

def cooling_fan(parent, x_position, height, z_position, radius=.65):
    for index in range(32):
        angle = math.tau*index/32
        next_angle = math.tau*(index+1)/32
        path('Fan-shroud',[(x_position+radius*math.cos(angle),height,z_position+radius*math.sin(angle)),(x_position+radius*math.cos(next_angle),height,z_position+radius*math.sin(next_angle))],parent,'titanium',.025)
    cylinder('Fan-hub',radius*.24,.1,(x_position,height,z_position),parent,'graphite')
    for index in range(9):
        angle = index*math.tau/9
        blade = box('Swept-fan-blade',(radius*.65,.036,radius*.20),(x_position+math.cos(angle)*radius*.49,height,z_position+math.sin(angle)*radius*.49),parent,'graphite',.012)
        blade.rotation_euler.z = -angle+.45
    cylinder('Fan-bearing',radius*.10,.108,(x_position,height+.005,z_position),parent,'silver')

def scene_setup():
    created = bpy.data.scenes.new(SCENE_NAME)
    bpy.context.window.scene = created
    created.unit_settings.system = 'METRIC'
    created.unit_settings.scale_length = .1
    created['purpose'] = 'Original educational schematic; not historical hardware reconstruction'
    created.world = bpy.data.worlds.new('MAT-Museum-Studio-World')
    created.world.use_nodes = True
    next(node for node in created.world.node_tree.nodes if node.type == 'BACKGROUND').inputs['Color'].default_value = (.10,.13,.15,1)
    created.render.engine = 'CYCLES'
    created.cycles.samples = 24
    created.cycles.use_denoising = True
    created.render.resolution_x = 1400
    created.render.resolution_y = 1000
    created.render.resolution_percentage = 70
    for name,location,energy,size in [('Key',(1,-7,11),1700,7),('Fill',(-8,-1,5),1000,6),('Rim',(4,7,9),1900,5)]:
        light_data = bpy.data.lights.new('LGT-Museum-'+name,'AREA')
        light_data.energy = energy
        light_data.shape = 'DISK'
        light_data.size = size
        light = bpy.data.objects.new('LGT-Museum-'+name,light_data)
        created.collection.objects.link(light)
        light.location = location
        light.rotation_euler = (Vector((0,0,0))-light.location).to_track_quat('-Z','Y').to_euler()
    camera_data = bpy.data.cameras.new('CAM-Museum-Engineering')
    camera = bpy.data.objects.new('CAM-Museum-Engineering',camera_data)
    created.collection.objects.link(camera)
    camera.location = (12,-18,12)
    camera.rotation_euler = (Vector((0,0,0))-camera.location).to_track_quat('-Z','Y').to_euler()
    camera_data.type = 'ORTHO'
    camera_data.ortho_scale = 16
    created.camera = camera
    return created

def blockout():
    if bpy.data.scenes.get(SCENE_NAME):
        raise RuntimeError('Task scene exists; inspect before rebuilding')
    scene_setup()
    match = group('match-assembly',(0,0,0))
    shell = group('shell',(-3.6,0,0),match)
    box('Rack-bottom',(3.6,.22,3.9),(0,-2.35,0),shell)
    box('Rack-top',(3.6,.18,3.9),(0,2.75,0),shell)
    for x_position in [-1.62,1.62]:
        for z_position in [-1.77,1.77]:
            box('Open-rack-upright',(.16,5.0,.17),(x_position,.2,z_position),shell,'titanium')
    for index,key in enumerate(['cpu','gpu','memory','network']):
        current = group(key,(-3.6,-1.45+index*1.04,0),match)
        box('Carrier-tray',(3.1,.11,3.3),(0,0,0),current,'titanium')
        box('Circuit-board',(2.85,.075,2.95),(0,.10,0),current,'pcb',.012)
    board = group('board',(4,-.8,0),match)
    box('Go-board',(5.8,.38,5.8),(0,0,0),board,'wood',.07)
    accelerator = group('accelerator-assembly',(14,0,0))
    for key in ['pcb','compute','vram','heatsink','fan']:
        group('accelerator-'+key,(0,0,0),accelerator)['key']=key
    box('Accelerator-substrate',(6.4,.16,3.8),(0,-1.25,0),bpy.data.objects['GEO-accelerator-pcb'],'pcb')
    box('Compute-package',(1.8,.24,1.8),(0,-.72,0),bpy.data.objects['GEO-accelerator-compute'],'chip')
    box('Heatsink-base',(5.6,.15,3.4),(0,-.19,0),bpy.data.objects['GEO-accelerator-heatsink'],'silver')
    print(json.dumps({'phase':'blockout','scene':SCENE_NAME,'objects':len(bpy.context.scene.objects),'parts':6,'accelerator_parts':5}))

def detail_match():
    shell = bpy.data.objects['GEO-shell']
    for side in [-1,1]:
        for height in [-1.6,-.56,.48,1.52]:
            box('Tray-slide',(.10,.09,3.65),(side*1.49,height,0),shell,'silver')
        for row in range(18):
            box('Rack-unit-mark',(.10,.018,.012),(side*1.63,-1.92+row*.25,1.864),shell,'copper',0)
        for column in range(7):
            box('Rear-vent-rib',(.05,4.55,.065),(side*(.12+column*.2),.12,-1.83),shell,'graphite',.008)
        for z_position in [-1.4,1.4]:
            cylinder('Isolation-foot',.20,.17,(side*1.35,-2.52,z_position),shell,'rubber')
    for x_position in [-.78,.78]:
        cooling_fan(shell,x_position,2.87,0,.62)
    for index,key in enumerate(['cpu','gpu','memory','network']):
        current = bpy.data.objects['GEO-'+key]
        circuit_details(current,2.8,2.9,.147)
        for side in [-1,1]:
            box('Tray-handle',(.10,.14,.25),(side*1.39,.04,1.75),current,'graphite')
        for column in range(8):
            box('Status-window',(.075,.055,.04),(-.85+column*.22,.15,1.67),current,'mint' if column<3 else 'chip',.008)
        if key=='cpu':
            box('Processor-socket',(1.24,.10,1.24),(0,.23,-.1),current,'chip')
            box('Heat-spreader',(1.0,.08,1.0),(0,.32,-.1),current,'silver')
            for fin in range(17):
                box('Processor-cooling-fin',(.035,.40,1.25),((fin-8)*.07,.57,-.1),current,'silver',.005)
            for side in [-1,1]:
                for slot in range(3):
                    box('Memory-socket',(.11,.10,1.8),(side*(.91+slot*.17),.23,-.15),current,'chip',.008)
                for capacitor in range(4):
                    cylinder('Voltage-capacitor',.06,.16,(side*.7,.27,-.78+capacitor*.38),current,'titanium',12)
        if key=='gpu':
            for side in [-1,1]:
                box('Parallel-compute-package',(.98,.12,1.65),(side*.67,.28,0),current,'chip')
                box('Parallel-core-die',(.60,.05,.70),(side*.67,.38,0),current,'die')
                for fin in range(9):
                    box('Accelerator-fin',(.045,.32,1.52),(side*.67+(fin-4)*.09,.57,0),current,'titanium',.005)
        if key=='memory':
            for slot in range(5):
                x_position=(slot-2)*.49
                box('Memory-module',(.08,.56,2.05),(x_position,.48,0),current,'pcb',.01)
                for chip in range(6):
                    box('Memory-package',(.10,.20,.23),(x_position+.01,.52,(chip-2.5)*.29),current,'violet',.008)
                for contact in range(13):
                    box('Memory-gold-contact',(.085,.08,.055),(x_position,.22,(contact-6)*.14),current,'copper',0)
        if key=='network':
            box('Network-controller',(.9,.13,.85),(0,.29,-.4),current,'chip')
            for fin in range(9):
                box('Controller-fin',(.05,.24,.8),((fin-4)*.09,.46,-.4),current,'titanium',.004)
            for port in range(6):
                x_position=(port-2.5)*.43
                box('Interface-housing',(.36,.32,.50),(x_position,.32,1.14),current,'silver',.01)
                box('Interface-opening',(.27,.21,.025),(x_position,.33,1.405),current,'chip',.004)
                for contact in range(4):
                    box('Interface-contact',(.025,.045,.03),(x_position+(contact-1.5)*.048,.28,1.423),current,'copper',0)
    board=bpy.data.objects['GEO-board']
    for stripe in range(38):
        box('Fine-wood-grain',(.024,.002,5.62),(-2.76+stripe*.149,.192,0),board,'wood-light',0)
    for index in range(19):
        offset=(index-9)*.287
        box('Board-grid',(.012,.003,5.17),(offset,.196,0),board,'ink',0)
        box('Board-grid',(5.17,.003,.012),(0,.196,offset),board,'ink',0)
    for x_position in [-6,0,6]:
        for z_position in [-6,0,6]:
            cylinder('Star-point',.027,.004,(x_position*.287,.201,z_position*.287),board,'ink',12)
    stones=[(3,3,0),(15,15,1),(3,15,0),(15,3,1),(9,3,0),(9,15,1),(4,9,0),(14,9,1),(6,5,0),(6,6,1),(7,5,0),(8,6,1),(11,12,0),(12,12,1),(11,13,0),(13,13,1),(10,9,0),(9,9,1),(10,10,0),(8,10,1),(5,14,0),(14,5,1)]
    for column,row,white in stones:
        bpy.ops.mesh.primitive_uv_sphere_add(segments=20, ring_count=10)
        stone=bpy.context.object
        stone.name='GEO-Polished-Go-stone'
        stone.parent=board
        stone.location=coordinate(((column-9)*.287,.26,(row-9)*.287))
        stone.scale=(.13,.13,.065)
        stone.data.materials.append(PALETTE['white' if white else 'black'])
        for polygon in stone.data.polygons:
            polygon.use_smooth=True

def detail_accelerator():
    pcb=bpy.data.objects['GEO-accelerator-pcb']
    circuit_details(pcb,6.2,3.6,-1.16)
    for index in range(25):
        box('Host-edge-contact',(.14,.035,.24),((index-12)*.20,-1.15,1.82),pcb,'copper',.004)
    for index in range(12):
        cylinder('Power-capacitor',.07,.17,(-2.8+(index%4)*.18,-1.05,(index//4-1)*.6),pcb,'titanium',12)
    compute=bpy.data.objects['GEO-accelerator-compute']
    box('Silicon-die',(1.26,.07,1.26),(0,-.55,0),compute,'die',.018)
    for row in range(8):
        for column in range(8):
            box('Execution-tile',(.105,.008,.105),((column-3.5)*.15,-.506,(row-3.5)*.15),compute,'mint' if (row+column)%5==0 else 'titanium',0)
    for x_position in [-2.1,2.1]:
        for z_position in [-1.15,0,1.15]:
            parent=bpy.data.objects['GEO-accelerator-vram']
            box('VRAM-package',(.69,.17,.69),(x_position,-.84,z_position),parent,'chip',.022)
            box('VRAM-ceramic-label',(.4,.005,.3),(x_position,-.752,z_position),parent,'violet',.008)
            for contact in range(8):
                for sign in [-1,1]:
                    box('VRAM-contact',(.04,.025,.08),(x_position+(contact-3.5)*.075,-.86,z_position+sign*.37),parent,'copper',0)
    heatsink=bpy.data.objects['GEO-accelerator-heatsink']
    for index in range(36):
        box('Heatsink-fin',(.045,.77,3.27),((index-17.5)*.15,.24,0),heatsink,'silver',.006)
    for z_position in [-.82,0,.82]:
        path('Heat-pipe',[(-2.6,-.11,z_position),(-1.9,-.36,z_position),(1.9,-.36,z_position),(2.6,-.11,z_position)],heatsink,'copper',.05)
    fan=bpy.data.objects['GEO-accelerator-fan']
    for x_position in [-1.43,1.43]:
        cooling_fan(fan,x_position,1.05,0,1.12)
    for z_position in [-1.45,1.45]:
        box('Fan-mount',(5.9,.10,.16),(0,1.02,z_position),fan,'graphite')
        fixings(fan,5.9,3.0,1.06)

def export_model(root_name, filename):
    source=bpy.data.objects[root_name]
    scene=bpy.context.scene
    depsgraph=bpy.context.evaluated_depsgraph_get()
    duplicate_roots=[]
    export_objects=[]
    for part in source.children:
        export_root=bpy.data.objects.new('GEO-Export-'+part['key'],None)
        scene.collection.objects.link(export_root)
        export_root['key']=part['key']
        export_root.location=part.location.copy()
        duplicate_roots.append(export_root)
        pieces=[]
        for child in part.children_recursive:
            if child.type not in {'MESH','CURVE'}:
                continue
            evaluated=child.evaluated_get(depsgraph)
            mesh=bpy.data.meshes.new_from_object(evaluated,depsgraph=depsgraph)
            copy=bpy.data.objects.new('GEO-Export-mesh',mesh)
            scene.collection.objects.link(copy)
            copy.matrix_world=source.matrix_world.inverted() @ child.matrix_world
            pieces.append(copy)
        bpy.ops.object.select_all(action='DESELECT')
        for copy in pieces:
            copy.select_set(True)
        bpy.context.view_layer.objects.active=pieces[0]
        bpy.ops.object.join()
        joined=bpy.context.object
        joined.name='GEO-'+part['key']+'-surface'
        world_matrix=joined.matrix_world.copy()
        joined.parent=export_root
        joined.matrix_world=world_matrix
        export_objects.extend([export_root,joined])
    bpy.ops.object.select_all(action='DESELECT')
    for created in export_objects:
        created.select_set(True)
    filepath=MODEL_DIR/filename
    bpy.ops.export_scene.gltf(filepath=str(filepath),export_format='GLB',use_selection=True,use_active_scene=True,export_yup=True,export_extras=True,export_cameras=False,export_lights=False,export_animations=False)
    for created in reversed(export_objects):
        bpy.data.objects.remove(created,do_unlink=True)
    return {'file':filename,'bytes':filepath.stat().st_size,'part_keys':[part['key'] for part in source.children]}

def file_sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write_report(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


def glb_statistics(filename, budget):
    """Read the existing file, never re-export or rebuild its geometry."""
    path = MODEL_DIR / filename
    data = path.read_bytes()
    assert struct.unpack_from('<4sII', data) == (b'glTF', 2, len(data))
    length, kind = struct.unpack_from('<II', data, 12)
    assert kind == 0x4e4f534a
    doc = json.loads(data[20:20+length])
    primitives = [p for m in doc['meshes'] for p in m['primitives']]
    triangles = sum(doc['accessors'][p['indices']]['count']//3 for p in primitives)
    vertices = sum(doc['accessors'][p['attributes']['POSITION']]['count'] for p in primitives)
    nodes = doc['nodes']
    cube_names = [n.get('name', '') for n in nodes if n.get('name', '').lower().startswith('cube')]
    assert not cube_names
    assert len(data) <= budget['max_bytes'] and triangles <= budget['max_triangles']
    assert len(nodes) <= budget['max_nodes']
    # All exported engineering parts have transforms and bounds in glTF meters.
    parents = {child:i for i,n in enumerate(nodes) for child in n.get('children', [])}
    from mathutils import Matrix, Quaternion
    def world(index):
        n = nodes[index]
        if 'matrix' in n:
            values = n['matrix']
            local = Matrix([[values[col*4+row] for col in range(4)] for row in range(4)])
        else:
            q = n.get('rotation', [0,0,0,1])
            local = Matrix.LocRotScale(Vector(n.get('translation',[0,0,0])),
                Quaternion((q[3],q[0],q[1],q[2])), Vector(n.get('scale',[1,1,1])))
        return world(parents[index]) @ local if index in parents else local
    corners = []
    for i,n in enumerate(nodes):
        if 'mesh' not in n:
            continue
        matrix = world(i)
        for prim in doc['meshes'][n['mesh']]['primitives']:
            a = doc['accessors'][prim['attributes']['POSITION']]
            for x in [a['min'][0],a['max'][0]]:
                for y in [a['min'][1],a['max'][1]]:
                    for z in [a['min'][2],a['max'][2]]:
                        corners.append(matrix @ Vector((x,y,z)))
    lo = [min(v[i] for v in corners) for i in range(3)]
    hi = [max(v[i] for v in corners) for i in range(3)]
    return {'file': filename, 'bytes':len(data), 'sha256':file_sha256(path),
            'nodes':len(nodes), 'meshes':len(doc['meshes']), 'primitives':len(primitives),
            'materials':len(doc.get('materials', [])), 'vertices':vertices, 'triangles':triangles,
            'part_keys':[n['extras']['key'] for n in nodes if 'key' in n.get('extras',{})],
            'node_names':[n.get('name','') for n in nodes], 'cube_nodes':cube_names,
            'bounds_xyz_m':[lo,hi], 'dimensions_xyz_m':[hi[i]-lo[i] for i in range(3)],
            'up_axis':'+Y', 'budget':budget}


def scene_fingerprint(scene):
    """Protect the untouched startup scene, including actual Cube mesh data."""
    value = {'name':scene.name, 'world':scene.world.name if scene.world else None,
             'engine':scene.render.engine, 'objects':[]}
    for obj in sorted(scene.objects,key=lambda o:o.name):
        row = {'name':obj.name,'type':obj.type, 'matrix':[list(r) for r in obj.matrix_world],
               'data':obj.data.name if obj.data else None,'parent':obj.parent.name if obj.parent else None}
        if obj.type=='MESH':
            row['vertices'] = [list(v.co) for v in obj.data.vertices]
            row['polygons'] = [list(p.vertices) for p in obj.data.polygons]
        value['objects'].append(row)
    return hashlib.sha256(json.dumps(value,sort_keys=True).encode()).hexdigest()


def source_scene_statistics(scene):
    depsgraph = bpy.context.evaluated_depsgraph_get()
    triangles = 0
    for obj in scene.objects:
        if obj.type not in {'MESH','CURVE'}:
            continue
        evaluated = obj.evaluated_get(depsgraph)
        mesh = evaluated.to_mesh()
        try:
            mesh.calc_loop_triangles()
            triangles += len(mesh.loop_triangles)
        finally:
            evaluated.to_mesh_clear()
    cubes = [o.name for o in scene.objects if o.name.lower().startswith('cube')]
    assert not cubes, 'Unexpected startup Cube in task scene'
    return {'scene':scene.name,'objects':len(scene.objects),
            'meshes':sum(o.type=='MESH' for o in scene.objects),
            'curves':sum(o.type=='CURVE' for o in scene.objects),
            'cameras':sum(o.type=='CAMERA' for o in scene.objects),
            'lights':sum(o.type=='LIGHT' for o in scene.objects),
            'evaluated_triangles':triangles, 'cube_objects':cubes,
            'roots':[o.name for o in scene.objects if o.parent is None],
            'object_names':[o.name for o in scene.objects]}


def qa_existing():
    """Only inspect existing geometry and save a task-only copy; never run detail."""
    other_scenes = {s.name:scene_fingerprint(s) for s in bpy.data.scenes if s.name!=SCENE_NAME}
    before_active = bpy.context.window.scene
    original = MODEL_DIR/'ai-museum-engineering-v002.blend'
    protected_files = [original, MODEL_DIR/'compute-system.glb', MODEL_DIR/'accelerator.glb',
                       MODEL_DIR/'learning-sculpture.glb', MODEL_DIR/'comfy-provenance.json']
    hashes_before = {str(p.relative_to(PROJECT)):file_sha256(p) for p in protected_files}
    scene = bpy.data.scenes.get(SCENE_NAME)
    appended = False
    if scene is None:
        with bpy.data.libraries.load(str(original),link=False) as (available, requested):
            assert SCENE_NAME in available.scenes
            requested.scenes = [SCENE_NAME]
        scene = bpy.data.scenes[SCENE_NAME]
        appended = True
    try:
        bpy.context.window.scene = scene
        stats = source_scene_statistics(scene)
        source_copy = OUTPUT_DIR/'ai-museum-engineering-final-qa.blend'
        # Scene-only library saves all existing dependencies but excludes the
        # startup Scene/Cube. No save_as_mainfile and no changes to initial Scene.
        bpy.data.libraries.write(str(source_copy), {scene}, fake_user=True, compress=False)
    finally:
        bpy.context.window.scene = before_active
    unchanged = {name:scene_fingerprint(bpy.data.scenes[name])==digest for name,digest in other_scenes.items()}
    assert all(unchanged.values()), 'Non-task scene was altered'
    assert hashes_before == {str(p.relative_to(PROJECT)):file_sha256(p) for p in protected_files}
    assets = [
        glb_statistics('compute-system.glb', {'max_bytes':3*1024**2,'max_triangles':75000,'max_nodes':24}),
        glb_statistics('accelerator.glb', {'max_bytes':2*1024**2,'max_triangles':40000,'max_nodes':24}),
        glb_statistics('learning-sculpture.glb', {'max_bytes':1024**2,'max_triangles':35000,'max_nodes':4}),
    ]
    provenance = json.loads((MODEL_DIR/'comfy-provenance.json').read_text('utf-8'))
    assert provenance['result']['sha256'] == assets[2]['sha256']
    assert provenance['inference']['status']['status_str']=='success'
    report = {'schema_version':2, 'blender':bpy.app.version_string,
        'recorded_utc':datetime.now(timezone.utc).isoformat(),
        'source':'Existing educational engineering scene; geometry preserved during final QA',
        'assets':assets,
        'source_blend':{'file':str(source_copy.relative_to(PROJECT)).replace('\\','/'),
            'bytes':source_copy.stat().st_size,'sha256':file_sha256(source_copy),
            'compression':'none','scene_names':[SCENE_NAME], **stats,
            'budget':{'max_bytes':32*1024**2,'max_objects':1500,'max_evaluated_triangles':250000}},
        'preservation':{'original_source_file':str(original.relative_to(PROJECT)).replace('\\','/'),
            'original_source_sha256':hashes_before[str(original.relative_to(PROJECT))],
            'protected_files_unchanged':True,'other_scenes_unchanged':unchanged,
            'active_scene_restored':bpy.context.scene.name==before_active.name,
            'loaded_from_existing_source_in_this_run':appended,
            'geometry_recreated':False,'detail_phase_executed':False},
        'sculpture_provenance':{'file':'comfy-provenance.json', 'bytes':(MODEL_DIR/'comfy-provenance.json').stat().st_size,
            'sha256':file_sha256(MODEL_DIR/'comfy-provenance.json'),'model':provenance['generator']['model'],
            'seed':provenance['inference']['seed'],'inference_success':True},
        'renders':{'status':'pending','files':['output/blender/rack-final-qa.png','output/blender/accelerator-final-qa.png']},
        'limitations':['Educational schematic models, not exact manufactured hardware or certified engineering assets.',
                        'QA inspects exported assets and source; museum integration is handled separately.']}
    assert stats['objects'] <= report['source_blend']['budget']['max_objects']
    assert stats['evaluated_triangles'] <= report['source_blend']['budget']['max_evaluated_triangles']
    write_report(MODEL_DIR/'engineering-manifest.json',report)
    write_report(OUTPUT_DIR/'scene-qa.json',report)
    print(json.dumps({'phase':'qa','source':report['source_blend']['file'],
                      'scene_objects':stats['objects'],'scene_triangles':stats['evaluated_triangles'],
                      'assets':[{k:a[k] for k in ['file','bytes','nodes','triangles']} for a in assets],
                      'initial_scenes_unchanged':unchanged},ensure_ascii=True))


def render_existing_qa():
    """Run in background with the task-only saved blend; use only existing objects."""
    scene = bpy.data.scenes.get(SCENE_NAME)
    assert scene is not None
    assert not any(o.name.lower().startswith('cube') for o in scene.objects)
    bpy.context.window.scene = scene
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = 24
    scene.cycles.use_denoising = True
    scene.render.resolution_x, scene.render.resolution_y = 1200, 900
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = 'PNG'
    camera = scene.camera
    assert camera is not None
    camera.data.type = 'ORTHO'
    original_hidden = {o:o.hide_render for o in scene.objects}
    report = {'source_blend':'output/blender/ai-museum-engineering-final-qa.blend',
              'renderer':'Cycles CPU', 'samples':24, 'resolution':[1200,900], 'renders':[]}
    views = [('rack-final-qa.png', ['GEO-shell','GEO-cpu','GEO-gpu','GEO-memory','GEO-network']),
             ('accelerator-final-qa.png', ['GEO-accelerator-assembly'])]
    depsgraph = bpy.context.evaluated_depsgraph_get()
    for filename, names in views:
        roots = [scene.objects[n] for n in names]
        visible = {o for root in roots for o in [root,*root.children_recursive]}
        for obj in scene.objects:
            if obj.type in {'MESH','CURVE'}:
                obj.hide_render = obj not in visible
        points = [o.matrix_world @ Vector(corner) for o in visible if o.type in {'MESH','CURVE'}
                  for corner in o.evaluated_get(depsgraph).bound_box]
        lo = Vector(tuple(min(p[i] for p in points) for i in range(3)))
        hi = Vector(tuple(max(p[i] for p in points) for i in range(3)))
        center, span = (lo+hi)/2, hi-lo
        # Camera from above/front to reveal trays, chips, and layered heatsink.
        camera.location = center + Vector((9,-14,10)).normalized()*18
        camera.rotation_euler = (center-camera.location).to_track_quat('-Z','Y').to_euler()
        camera.data.ortho_scale = max(span.x,span.y,span.z)*1.62
        for name, offset, energy in [('Key',(-4,-6,9),1900),('Fill',(6,-2,4),1250),('Rim',(2,7,7),2200)]:
            light = scene.objects['LGT-Museum-'+name]
            light.location = center + Vector(offset)
            light.rotation_euler = (center-light.location).to_track_quat('-Z','Y').to_euler()
            light.data.energy = energy
        path = OUTPUT_DIR/filename
        scene.render.filepath = str(path)
        bpy.ops.render.render(write_still=True, scene=scene.name)
        report['renders'].append({'file':str(path.relative_to(PROJECT)).replace('\\','/'),
            'bytes':path.stat().st_size,'sha256':file_sha256(path),'object_roots':names,
            'visible_geometry_objects':sum(o.type in {'MESH','CURVE'} for o in visible),
            'bounds_blender_xyz':[list(lo),list(hi)]})
    for obj,hidden in original_hidden.items():
        obj.hide_render = hidden
    write_report(OUTPUT_DIR/'render-qa.json',report)
    manifest_path = MODEL_DIR/'engineering-manifest.json'
    manifest = json.loads(manifest_path.read_text('utf-8'))
    manifest['renders'] = {'status':'rendered_pending_visual_review', **report}
    write_report(manifest_path,manifest)
    print('PERSISTENT_QA_RENDERS_WRITTEN',json.dumps(report,ensure_ascii=True))


def record_visual_qa(review):
    """Record an actual external visual inspection, never infer it from render success."""
    assert isinstance(review, str) and len(review) > 40, 'Pass the actual inspection as VISUAL_REVIEW'
    path = MODEL_DIR/'engineering-manifest.json'
    report = json.loads(path.read_text('utf-8'))
    for render in report['renders']['renders']:
        image = PROJECT/render['file']
        assert file_sha256(image)==render['sha256'] and image.stat().st_size==render['bytes']
    report['renders']['status'] = 'visually_reviewed'
    report['renders']['visual_review'] = review
    report['renders']['reviewed_utc'] = datetime.now(timezone.utc).isoformat()
    report['qa_script_sha256'] = file_sha256(PROJECT/'tools/blender/build_exhibits.py')
    write_report(path,report)
    write_report(OUTPUT_DIR/'scene-qa.json',report)
    print('VISUAL_QA_RECORDED')


if PHASE=='qa':
    qa_existing()
elif PHASE=='render-qa':
    render_existing_qa()
elif PHASE=='record-qa':
    record_visual_qa(globals().get('VISUAL_REVIEW'))
elif PHASE=='blockout':
    blockout()
elif PHASE=='detail':
    bpy.context.window.scene=bpy.data.scenes[SCENE_NAME]
    detail_match()
    detail_accelerator()
    report={'blender':bpy.app.version_string,'source':'Original educational mechanical models','assets':[export_model('GEO-match-assembly','compute-system.glb'),export_model('GEO-accelerator-assembly','accelerator.glb')]}
    bpy.ops.wm.save_as_mainfile(filepath=str(MODEL_DIR/'ai-museum-engineering-v002.blend'))
    (MODEL_DIR/'engineering-manifest.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(report))
else:
    raise ValueError('Expected explicit phase: qa, render-qa, record-qa, blockout, or detail')
