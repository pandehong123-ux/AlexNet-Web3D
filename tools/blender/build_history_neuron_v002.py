"""Original part-by-part explanatory hardware exhibit for chapter 00.
Not a reconstruction of historical hardware. Blender 5.x, glTF web export.
"""
from pathlib import Path
import bpy, math, random, json
from mathutils import Vector

ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'assets'/'models'
random.seed(1943)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
COL=bpy.data.collections.new('COL-00-Neuron-Hardware-v002')
bpy.context.scene.collection.children.link(COL)
M={}
def mat(key,color,metal=0,rough=.35,emit=0,alpha=1):
    m=bpy.data.materials.new('MAT-00-'+key); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value=(*color,1)
    p.inputs['Metallic'].default_value=metal; p.inputs['Roughness'].default_value=rough
    if emit:
        p.inputs['Emission Color'].default_value=(*color,1); p.inputs['Emission Strength'].default_value=emit
    if alpha<1:
        p.inputs['Alpha'].default_value=alpha; m.surface_render_method='BLENDED';m.diffuse_color=(*color,alpha)
    M[key]=m
mat('aluminum',(.38,.46,.51),1,.27)
mat('steel',(.12,.16,.19),1,.32)
mat('black',(.012,.018,.024),0,.5)
mat('rubber',(.009,.014,.019),0,.82)
mat('pcb',(.018,.105,.081),0,.4)
mat('pcb-blue',(.018,.065,.12),0,.36)
mat('mask',(.009,.031,.028),0,.4)
mat('copper',(.58,.26,.095),1,.25)
mat('gold',(.77,.49,.13),1,.22)
mat('solder',(.45,.5,.5),1,.19)
mat('ceramic',(.30,.20,.09),0,.5)
mat('white',(.67,.76,.75),0,.5)
mat('cyan',(.08,.52,.65),.15,.28,1.1)
mat('green',(.1,.75,.36),0,.2,2.4)
mat('amber',(.95,.36,.045),0,.2,1.8)
mat('glass',(.06,.18,.23),0,.17,0,.12)
mat('label',(.73,.85,.84),0,.6)

def link(o,p=None):
    for c in list(o.users_collection): c.objects.unlink(o)
    COL.objects.link(o)
    if p: o.parent=p
    return o

def empty(name,p=None,key=None):
    o=bpy.data.objects.new(name,None);COL.objects.link(o)
    if p:o.parent=p
    if key:o['key']=key;o['part_role']='independent-exhibit-part'
    return o

def tag(o,p,kind):
    o.parent=p;o['part_key']=p.get('key','');o['detail_class']=kind
    return o

def box(n,p,loc,dim,m='black',b=.015):
    bpy.ops.mesh.primitive_cube_add(location=loc);o=bpy.context.object;o.name=n
    o.scale=tuple(v/2 for v in dim);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    link(o);tag(o,p,'manufactured-solid');o.data.materials.append(M[m])
    if b:
        mod=o.modifiers.new('machined-edge-radius','BEVEL');mod.width=b;mod.segments=2
        mod=o.modifiers.new('weighted-surface-normals','WEIGHTED_NORMAL')
    return o

def cyl(n,p,loc,r,h,m='steel',verts=24,rot=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts,radius=r,depth=h,location=loc,rotation=rot or (0,0,0))
    o=bpy.context.object;o.name=n;link(o);tag(o,p,'turned-part');o.data.materials.append(M[m])
    mod=o.modifiers.new('edge-radius','BEVEL');mod.width=min(r*.12,h*.15);mod.segments=2
    mod=o.modifiers.new('weighted-normals','WEIGHTED_NORMAL')
    return o

def path(n,p,points,r=.009,m='copper'):
    d=bpy.data.curves.new(n,'CURVE');d.dimensions='3D';d.resolution_u=1;d.bevel_depth=r;d.bevel_resolution=1
    s=d.splines.new('POLY');s.points.add(len(points)-1)
    for v,co in zip(s.points,points):v.co=(*co,1)
    o=bpy.data.objects.new(n,d);link(o);tag(o,p,'routed-conductor');o.data.materials.append(M[m]);return o

def torus(n,p,loc,major,minor,m='steel',rot=None):
    bpy.ops.mesh.primitive_torus_add(major_segments=40,minor_segments=8,location=loc,major_radius=major,minor_radius=minor,rotation=rot or (0,0,0))
    o=bpy.context.object;o.name=n;link(o);tag(o,p,'formed-ring');o.data.materials.append(M[m]);return o

def text(n,p,loc,body,size=.1,m='label'):
    d=bpy.data.curves.new(n,'FONT');d.body=body;d.size=size;d.align_x='CENTER';d.extrude=.0008
    o=bpy.data.objects.new(n,d);link(o,);tag(o,p,'silkscreen');o.location=loc;o.data.materials.append(M[m]);return o

def screw(p,x,y,z,r=.065):
    cyl('GEO-fastener-washer',p,(x,y,z),r*1.4,.018,'steel',20)
    cyl('GEO-fastener-socket-head',p,(x,y+.018,z),r,.045,'aluminum',20)
    box('GEO-fastener-hex-socket',p,(x,y+.043,z),(r*.75,.004,r*.75),'black',.008)

def pcb(p,origin,w,d,label,blue=False):
    x,y,z=origin
    box('GEO-'+label+'-fr4-substrate',p,(x,y,z),(w,.085,d),'mask',.055)
    box('GEO-'+label+'-solder-mask',p,(x,y+.045,z),(w-.045,.008,d-.045),'pcb-blue' if blue else 'pcb',.045)
    for sx in (-1,1):
        for sz in (-1,1):
            xx=x+sx*(w/2-.13);zz=z+sz*(d/2-.13)
            torus('GEO-plated-mounting-ring',p,(xx,y+.058,zz),.059,.012,'gold')
            cyl('GEO-mounting-bore-shadow',p,(xx,y+.063,zz),.039,.007,'black',16)
    for i in range(34):
        xx=x+random.uniform(-w*.44,w*.44);zz=z+random.uniform(-d*.43,d*.43)
        cyl('GEO-plated-through-via',p,(xx,y+.061,zz),.022,.008,'gold',12)
        cyl('GEO-via-drill',p,(xx,y+.066,zz),.009,.006,'black',8)
    for i in range(24):
        x0=x-w*.43+i*w*.86/23;z0=z-d*.43+random.random()*.17
        x1=x+random.uniform(-w*.24,w*.24);z1=z+d*.35
        mid=z0+(z1-z0)*random.uniform(.3,.75)
        path('GEO-routed-signal-trace',p,[(x0,y+.058,z0),(x0,y+.058,mid),(x1,y+.058,mid),(x1,y+.058,z1)],.006 if i%4 else .012,'copper' if i%5==0 else 'gold')
    for i in range(18):
        xx=x+random.uniform(-w*.4,w*.4);zz=z+random.uniform(-d*.4,d*.4)
        box('GEO-silkscreen-component-outline',p,(xx,y+.064,zz),(.15,.004,.026),'label',.002)
    text('GEO-board-silkscreen',p,(x,y+.065,z-d*.44),label,.095)

def chip(p,x,y,z,w=.58,d=.5,pins=9,name='IC'):
    box('GEO-'+name+'-molded-package',p,(x,y+.1,z),(w,.14,d),'black',.03)
    box('GEO-'+name+'-lid',p,(x,y+.18,z),(w*.78,.035,d*.78),'steel',.018)
    for sign in (-1,1):
        for i in range(pins):
            zz=z-d*.39+i*d*.78/max(pins-1,1)
            box('GEO-gullwing-lead',p,(x+sign*(w/2+.07),y+.07,zz),(.16,.025,.027),'solder',.005)
            box('GEO-lead-solder-fillet',p,(x+sign*(w/2+.12),y+.052,zz),(.08,.013,.048),'solder',.004)
        for i in range(pins):
            xx=x-w*.39+i*w*.78/max(pins-1,1)
            box('GEO-gullwing-lead',p,(xx,y+.07,z+sign*(d/2+.07)),(.027,.025,.16),'solder',.005)
    cyl('GEO-pin-one-marker',p,(x-w*.31,y+.2,z-d*.3),.025,.005,'label',12)
    text('GEO-package-marking',p,(x,y+.203,z),name,.072)

def smd(p,x,y,z,kind=0):
    if kind%3==0:
        box('GEO-ceramic-capacitor',p,(x,y+.074,z),(.12,.055,.07),'ceramic',.009)
        for s in (-1,1):box('GEO-capacitor-termination',p,(x+s*.057,y+.075,z),(.018,.058,.073),'solder',.003)
    elif kind%3==1:
        box('GEO-precision-resistor',p,(x,y+.071,z),(.13,.045,.055),'black',.005)
        for s in (-1,1):box('GEO-resistor-termination',p,(x+s*.058,y+.071,z),(.022,.047,.057),'solder',.003)
    else:
        box('GEO-small-signal-diode',p,(x,y+.075,z),(.16,.07,.07),'black',.008)
        box('GEO-diode-polarity-band',p,(x+.035,y+.112,z),(.018,.005,.074),'label',.001)

def capacitor(p,x,y,z,r=.11,h=.28):
    cyl('GEO-electrolytic-can',p,(x,y+h/2+.07,z),r,h,'steel',24)
    cyl('GEO-pressure-relief-top',p,(x,y+h+.075,z),r*.91,.012,'aluminum',24)
    box('GEO-capacitor-vent-score',p,(x,y+h+.084,z),(r*1.1,.005,.012),'steel',.002)
    box('GEO-capacitor-vent-score',p,(x,y+h+.084,z),(.012,.005,r*1.1),'steel',.002)
    cyl('GEO-capacitor-sleeve',p,(x,y+.09,z),r*1.025,.07,'black',24)

def fan(p,x,y,z,r=.47):
    # All rotor geometry is parented to one local-Y pivot, independent of explosion.
    cyl('GEO-fan-mount-flange',p,(x,y,z),r*1.08,.09,'black',40)
    torus('GEO-fan-vent-ring',p,(x,y+.058,z),r*.88,.025,'steel')
    pivot=empty('GEO-fan-rotor',p);pivot.location=(x,y+.09,z);pivot['motion']='rotor'
    for i in range(9):
        a=i*math.tau/9
        blade=box('GEO-swept-impeller-blade',pivot,(math.cos(a)*r*.46,0,math.sin(a)*r*.46),(r*.66,.028,r*.19),'steel',.025)
        blade.rotation_euler.y=-a+.32
    cyl('GEO-bearing-hub',pivot,(0,.025,0),r*.22,.09,'aluminum',32)
    cyl('GEO-bearing-center',pivot,(0,.076,0),r*.085,.012,'black',24)
    for a in (0,math.pi/2,math.pi,math.pi*1.5):
        screw(p,x+math.cos(a)*r*.91,y+.055,z+math.sin(a)*r*.91,.027)

def heatsink(p,x,y,z,w,d,fins=14):
    box('GEO-copper-vapor-chamber',p,(x,y,z),(w,.09,d),'copper',.025)
    for i in range(fins):
        xx=x-w*.46+i*w*.92/(fins-1)
        box('GEO-folded-aluminum-fin',p,(xx,y+.26,z),(.025,.46,d*.96),'aluminum',.005)
    for zz in (-d*.28,d*.28):
        path('GEO-sintered-copper-heatpipe',p,[(x-w*.42,y+.06,z+zz),(x-w*.25,y+.12,z+zz),(x+w*.28,y+.12,z+zz),(x+w*.43,y+.05,z+zz)],.037,'copper')

def connector(p,x,y,z,n=12):
    box('GEO-connector-housing',p,(x,y+.14,z),(n*.072+.13,.24,.26),'black',.02)
    for i in range(n):
        xx=x+(i-(n-1)/2)*.072
        box('GEO-contact-spring',p,(xx,y+.28,z-.04),(.026,.035,.13),'gold',.004)
    for sx in (-1,1):box('GEO-connector-latch',p,(x+sx*(n*.036+.075),y+.14,z),(.045,.18,.18),'white',.008)

def make_root():
    r=empty('GEO-00-Neuron-Exhibit');r['exhibit_id']='neuron';r['asset_version']='v002'
    r['provenance']='Original explanatory geometry; no third-party mesh assets.'
    return r

root=make_root()
# 01 / chassis: individually modeled frame, fasteners, glass and vibration mounts.
p=empty('GEO-00-Neuron-shell',root,'shell')
box('GEO-chassis-lower-pan',p,(0,-1.3,0),(10.1,.18,5.8),'steel',.09)
box('GEO-chassis-inner-deck',p,(0,-1.17,0),(9.82,.065,5.48),'black',.06)
for z in (-2.68,2.68):
    box('GEO-extruded-side-rail',p,(0,-.98,z),(9.95,.30,.15),'aluminum',.025)
    for x in [-4.65,-3.1,-1.55,0,1.55,3.1,4.65]:box('GEO-rail-mounting-slot',p,(x,-.815,z),(.45,.014,.052),'black',.015)
for x in (-4.85,4.85):
    box('GEO-end-crossmember',p,(x,-.98,0),(.17,.30,5.4),'aluminum',.025)
    for z in (-2.5,2.5):
        cyl('GEO-vibration-isolation-foot',p,(x,-1.53,z),.22,.22,'rubber',28)
        cyl('GEO-foot-retainer',p,(x,-1.40,z),.14,.08,'steel',24)
        box('GEO-corner-upright',p,(x,-.08,z),(.13,1.8,.13),'aluminum',.018)
        for y in (-.75,.65):screw(p,x,y,z,.05)
for x in (-4.85,4.85):
    box('GEO-observation-glass-side',p,(x,.28,0),(.025,1.32,4.85),'glass',.003)
for z in (-2.5,2.5):
    box('GEO-observation-glass-end',p,(0,.28,z),(9.55,1.32,.025),'glass',.003)
for x in [-4.2,-2.7,0,2.7,4.2]:
    for z in (-2.45,2.45):screw(p,x,-1.105,z,.065)
text('GEO-chassis-identification',p,(0,-1.105,2.4),'NEURAL COMPUTING / EXPLANATORY INSTRUMENT 00',.16)

# 02 / processor module: routed PCB, socket, BGA, VRM and heat management.
p=empty('GEO-00-Neuron-cpu',root,'cpu')
x0,y0,z0=-3.12,0,.60
pcb(p,(x0,y0,z0),2.75,2.65,'COMPUTE / C01')
box('GEO-cpu-socket-frame',p,(x0,y0+.13,z0),(1.30,.16,1.20),'steel',.055)
box('GEO-cpu-socket-cavity',p,(x0,y0+.225,z0),(1.12,.045,1.02),'black',.025)
chip(p,x0,y0+.23,z0,.92,.84,12,'NEURON-CORE')
for i in range(8):
    for s in (-1,1):
        smd(p,x0+s*.70,y0+.07,z0-.50+i*.14,i)
for i in range(7):
    xx=x0-.95+i*.30
    box('GEO-vrm-inductor',p,(xx,y0+.19,z0-1.01),(.20,.25,.23),'steel',.025)
    box('GEO-inductor-top',p,(xx,y0+.325,z0-1.01),(.15,.016,.17),'black',.008)
    chip(p,xx,y0+.06,z0+.99,.18,.18,3,'MOSFET')
for i in range(5):capacitor(p,x0-1.08+i*.20,y0,z0+.64,.068,.24)
heatsink(p,x0,y0+.56,z0,1.35,1.24,17)
fan(p,x0,y0+1.10,z0,.47)
for xx in (x0-.79,x0+.79):
    for zz in (z0-.75,z0+.75):screw(p,xx,y0+.22,zz,.055)
connector(p,x0+1.10,y0,z0-.55,8)
path('GEO-processor-power-loom',p,[(x0-1.18,y0+.12,z0-.80),(x0-1.22,y0+.30,z0-.45),(x0-1.22,y0+.30,z0+.7),(x0-.95,y0+.10,z0+1.05)],.043,'rubber')

# 03 / memory bank: separate DIMMs, contacts, memory packages and latches.
p=empty('GEO-00-Neuron-memory',root,'memory')
x0,y0,z0=-.10,0,.82
pcb(p,(x0,y0,z0),2.55,2.25,'MEMORY / M02',True)
for row in range(3):
    x=x0-.78+row*.78
    box('GEO-dimm-edge-connector',p,(x,y0+.15,z0),(.17,.18,1.96),'black',.018)
    for i in range(26):
        z=z0-.88+i*.0704
        box('GEO-dimm-contact-pad',p,(x+.092,y0+.14,z),(.018,.09,.038),'gold',.003)
    box('GEO-memory-module-substrate',p,(x,y0+.56,z0),(.055,.72,1.94),'pcb',.015)
    for side in (-1,1):
        for j in range(8):
            z=z0-.76+j*.217
            box('GEO-memory-ic-package',p,(x+side*.048,y0+.58,z),(.043,.30,.16),'black',.012)
            for dy in (-.10,0,.10):box('GEO-memory-solder-joint',p,(x+side*.074,y0+.58+dy,z),(.008,.027,.12),'solder',.002)
    for z in (z0-1.02,z0+1.02):
        box('GEO-dimm-retention-latch',p,(x,y0+.24,z),(.23,.38,.09),'white',.018)
    for j in range(10):box('GEO-memory-gold-finger',p,(x,y0+.204,z0-.84+j*.186),(.062,.022,.09),'gold',.003)
for i in range(9):smd(p,x0-1.05+i*.26,y0,z0-1.00,i)
text('GEO-memory-bank-label',p,(x0,y0+.067,z0+1.0),'PARAMETER / STATE',.11)

# 04 / parallel processor: real board, BGA, heatpipe heatsink, dual fan shroud, VRM, PCIe contacts.
p=empty('GEO-00-Neuron-gpu',root,'gpu')
x0,y0,z0=3.02,0,.62
pcb(p,(x0,y0,z0),2.85,2.65,'PARALLEL / G03',True)
chip(p,x0,y0+.06,z0,1.02,.94,14,'TENSOR-ARRAY')
for s in (-1,1):
    for i in range(4):
        chip(p,x0+s*.86,y0+.06,z0-.54+i*.35,.33,.25,4,'VRAM')
for i in range(6):
    xx=x0-1.10+i*.24
    box('GEO-power-stage-inductor',p,(xx,y0+.17,z0-1.06),(.18,.22,.20),'steel',.025)
    smd(p,xx,y0,z0+1.09,i)
for i in range(4):capacitor(p,x0+.68+i*.17,y0,z0+1.03,.058,.24)
heatsink(p,x0,y0+.47,z0,1.75,1.60,22)
for x in (x0-.54,x0+.54):fan(p,x,y0+1.00,z0,.49)
# shroud is a perimeter, not a solid cover hiding the working components
for x in (x0-1.25,x0+1.25):box('GEO-gpu-shroud-side',p,(x,y0+.87,z0),(.075,.55,2.22),'steel',.035)
for z in (z0-1.10,z0+1.10):box('GEO-gpu-shroud-end',p,(x0,y0+.87,z),(2.55,.55,.075),'steel',.03)
for i in range(27):box('GEO-pcie-edge-finger',p,(x0-1.14+i*.081,y0-.05,z0-1.36),(.056,.025,.20),'gold',.004)
box('GEO-pcie-steel-bracket',p,(x0+1.47,y0+.08,z0),(.075,.66,2.62),'aluminum',.02)
for z in (z0-.73,z0,z0+.73):
    cyl('GEO-display-port-shell',p,(x0+1.51,y0+.15,z),.13,.12,'steel',24,(0,0,math.pi/2))
for z in (z0-1.1,z0+1.1):screw(p,x0+1.48,y0+.45,z,.05)

# 05 / interconnect: independent high-speed I/O board with ports, magnetics and routed fibre.
p=empty('GEO-00-Neuron-network',root,'network')
x0,y0,z0=.0,-.02,-1.78
pcb(p,(x0,y0,z0),3.65,1.26,'INTERCONNECT / N04')
chip(p,x0-.6,y0+.05,z0,.52,.48,8,'SWITCH')
heatsink(p,x0-.6,y0+.31,z0,.67,.61,9)
for i in range(4):
    x=x0+.20+i*.66
    box('GEO-port-magnetics',p,(x,y0+.15,z0+.22),(.42,.22,.32),'steel',.025)
    box('GEO-cage-shield',p,(x,y0+.19,z0-.27),(.54,.30,.43),'aluminum',.025)
    box('GEO-port-recess',p,(x,y0+.19,z0-.497),(.41,.18,.015),'black',.01)
    for j in range(8):box('GEO-port-contact',p,(x-.15+j*.043,y0+.14,z0-.51),(.018,.06,.012),'gold',.002)
    for dx in (-.17,.17):cyl('GEO-link-status-led',p,(x+dx,y0+.28,z0-.51),.025,.018,'green' if i%2 else 'amber',12,(math.pi/2,0,0))
for i in range(9):smd(p,x0-1.55+i*.19,y0,z0+.43,i)
for i in range(4):
    path('GEO-high-speed-fibre',p,[(-2.2+i*.13,-.35,-1.45),(-1.95+i*.15,-.12,-1.95),(-1.35+i*.22,.08,-2.14),(-.85+i*.20,.13,-1.97)],.024,'cyan' if i%2 else 'rubber')
connector(p,-1.50,y0,z0-.04,9)

# Lighting/cameras are saved in the editable source, not exported into the web model.
world=bpy.context.scene.world or bpy.data.worlds.new('WORLD-00-Museum')
bpy.context.scene.world=world;world.use_nodes=True
world.node_tree.nodes['Background'].inputs['Color'].default_value=(.035,.055,.075,1)
world.node_tree.nodes['Background'].inputs['Strength'].default_value=.45
for name,loc,power,size in [('Key',(1,10,5),1700,8),('Fill',(-8,5,-2),1200,7),('Rim',(5,6,-7),1800,6)]:
    d=bpy.data.lights.new('LGT-00-'+name,'AREA');d.energy=power;d.shape='DISK';d.size=size
    o=bpy.data.objects.new('LGT-00-'+name,d);bpy.context.scene.collection.objects.link(o);o.location=loc;o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
camd=bpy.data.cameras.new('CAM-00-Inspection');cam=bpy.data.objects.new('CAM-00-Inspection',camd);bpy.context.scene.collection.objects.link(cam)
cam.location=(10,12,14);cam.rotation_euler=(Vector((0,0,0))-cam.location).to_track_quat('-Z','Y').to_euler();camd.lens=47;bpy.context.scene.camera=cam
bpy.context.scene.render.engine='BLENDER_EEVEE'
bpy.context.scene.render.resolution_x=1400;bpy.context.scene.render.resolution_y=950;bpy.context.scene.render.resolution_percentage=100
bpy.context.scene.render.image_settings.file_format='PNG'
bpy.ops.object.select_all(action='DESELECT')
for o in root.children_recursive:o.select_set(True)
root.select_set(True);bpy.context.view_layer.objects.active=root
OUT.mkdir(parents=True,exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'history-neuron-v002.blend'))
bpy.ops.export_scene.gltf(filepath=str(OUT/'history-neuron-v002.glb'),export_format='GLB',use_selection=True,export_apply=True,export_animations=False,export_yup=True,export_materials='EXPORT',export_extras=True)
preview=OUT.parent.parent/'output'/'history-neuron-v002-preview.png';preview.parent.mkdir(parents=True,exist_ok=True)
bpy.context.scene.render.filepath=str(preview)
bpy.ops.render.render(write_still=True)
meshes=[o for o in root.children_recursive if o.type=='MESH']
print(json.dumps({'status':'HARDWARE_V002_OK','parts':[c.name for c in root.children],'mesh_count':len(meshes),'objects':len(root.children_recursive),'triangles':sum(len(o.data.polygons) for o in meshes),'glb_bytes':(OUT/'history-neuron-v002.glb').stat().st_size,'blend':str(OUT/'history-neuron-v002.blend'),'preview':str(preview)},ensure_ascii=False))
