import * as T from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {BOARD_POINTS} from './museum-data.mjs';
import {PART_CATALOG} from './exhibit-details.mjs';
import {createExhibitLayout} from './exhibit-layout.mjs';
import {hasEngineeringModel,loadEngineeringModel,disposeEngineeringModel} from './engineering-models.mjs';

// All hardware is an original schematic; not a reconstruction of the 2016 server racks.
export function createMuseumScene(onPick){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let environment,selectedKey=null,hotspots=null,markers=[],isolatedKey=null,loadingGeneration=0,fitView=false,stageObject=null,preparedMode=null,zooming=false,auxiliary=[];
 const layoutController=createExhibitLayout(),homePosition=new T.Vector3(),homeTarget=new T.Vector3(),cameraDirection=new T.Vector3();
 const projected=new T.Vector3();
 let renderer,scene,camera,controls,container,mode='match',parts=[],rings=[],pulse=[],boardGroup,frame=0,last=0,active=false,spread=0,targetSpread=0;const ray=new T.Raycaster(),pointer=new T.Vector2();
 const colors={shell:0x596066,cpu:0xc1c6c2,gpu:0x8faaa1,memory:0xaba4b6,network:0xc4ae87};const gs=new Set(),ms=new Set();
 const mat=(c,extra={})=>{const m=new T.MeshStandardMaterial({color:c,roughness:.36,metalness:.62,envMapIntensity:.42,...extra});ms.add(m);return m;};
 function box(parent,size,pos,color,key=null){const geo=new RoundedBoxGeometry(...size,2,Math.min(.07,Math.min(...size)*.16));gs.add(geo);const m=new T.Mesh(geo,mat(color));m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);if(key)m.userData.key=key;return m;}
 function wire(parent,size,pos,col){const geo=new T.EdgesGeometry(new T.BoxGeometry(...size));gs.add(geo);const m=new T.LineBasicMaterial({color:col,transparent:true,opacity:.5});ms.add(m);const o=new T.LineSegments(geo,m);o.position.set(...pos);parent.add(o);return o;}
 function line(parent,a,b,col){const geo=new T.BufferGeometry().setFromPoints([new T.Vector3(...a),new T.Vector3(...b)]);gs.add(geo);const m=new T.LineBasicMaterial({color:col,transparent:true,opacity:.45});ms.add(m);const o=new T.Line(geo,m);parent.add(o);return o;}
 function sphere(parent,r,pos,col,key){const g=new T.SphereGeometry(r,14,10);gs.add(g);const o=new T.Mesh(g,mat(col,{emissive:col,emissiveIntensity:.25}));o.position.set(...pos);parent.add(o);o.userData.key=key;return o;}
 function component(key,index,builder){const g=new T.Group();g.userData={key,index,base:new T.Vector3(),offset:new T.Vector3()};scene.add(g);builder(g);g.traverse(o=>{if(o.isMesh)o.userData.key=key});parts.push(g);return g;}
 function board(parent,x=4,z=0,small=false){const g=new T.Group();g.userData.key='board';g.position.set(x,-.65,z);parent.add(g);box(g,[5.7,.3,5.7],[0,0,0],0xa78b62,'board');for(let i=0;i<19;i++){const k=(i-9)*.282;line(g,[-2.54,.16,k],[2.54,.16,k],0x493e31);line(g,[k,.16,-2.54],[k,.16,2.54],0x493e31)}for(const [ix,iy,white] of BOARD_POINTS){const s=sphere(g,.118,[(ix-9)*.282,.24,(iy-9)*.282],white?0xe2e1d5:0x17222d,'board');s.scale.y=.48;}wire(g,[.45,.02,.45],[.282,.18,-.282],0x8ae4cd);boardGroup=g;return g;}
 function buildMatch(){const rack=new T.Group();rack.position.x=-3.4;scene.add(rack);box(rack,[3.2,.25,3.6],[0,-2.25,0],0x1e3448);const shell=component('shell',0,g=>{for(const x of [-1.52,1.52])box(g,[.12,5.2,3.4],[x,.35,0],colors.shell);wire(g,[3.2,5.3,3.6],[0,.35,0],0x567a91);for(let j=0;j<8;j++)line(g,[-1.4,-1.6+j*.6,1.75],[1.4,-1.6+j*.6,1.75],0x344f61);});shell.position.x=-3.4;
 for(let i=0;i<4;i++){const key=['cpu','gpu','memory','network'][i];const g=component(key,i+1,g=>{box(g,[2.75,.19,2.7],[0,0,0],0x28483f);if(key==='cpu'){box(g,[.9,.18,.9],[0,.15,0],colors.cpu);for(let j=0;j<12;j++)box(g,[.055,.32,1.2],[(j-5.5)*.1,.42,0],0x607d92);}if(key==='gpu'){for(let k=0;k<2;k++){box(g,[1.06,.18,1.8],[(k-.5)*1.28,.18,0],colors.gpu);for(let j=0;j<9;j++)box(g,[.07,.42,1.15],[(k-.5)*1.28+(j-4)*.09,.5,0],0x527a7c);}}if(key==='memory'){for(let j=0;j<5;j++){box(g,[.25,.45,1.8],[(j-2)*.48,.3,0],colors.memory);for(let k=0;k<3;k++)box(g,[.27,.19,.32],[(j-2)*.48,.38,(k-1)*.49],0x263346);}}if(key==='network'){box(g,[2.4,.5,.8],[0,.35,.2],0x40596f);for(let j=0;j<8;j++)box(g,[.19,.16,.2],[(j-3.5)*.27,.35,.7],colors.network);}for(let j=0;j<7;j++)sphere(g,.035,[1.22,.16,(j-3)*.35],0x9dddd0);});g.position.set(-3.4,-1.25+i*1.03,0);}
 board(scene);for(let j=0;j<5;j++)line(scene,[-1.8,-1.4+j*.12,1.4],[1.3,-.5,1.4+j*.12],0x68b3b6);for(let i=0;i<35;i++){const p=sphere(scene,.035,[0,0,0],0x95e5d6);pulse.push(p);}camera.position.set(12,9,16);controls.target.set(.1,-.1,0);}
 function buildGpu(){component('pcb',0,g=>{box(g,[6,.18,3.8],[0,-1.25,0],0x254b43);for(let i=0;i<8;i++)box(g,[.36,.1,.32],[(i-3.5)*.6,-1.09,1.9],0xc4aa76);});component('compute',1,g=>{box(g,[1.8,.22,1.8],[0,-.6,0],0x334d65);box(g,[1.35,.1,1.35],[0,-.43,0],0x9cbebc);for(let y=0;y<5;y++)for(let x=0;x<5;x++)box(g,[.19,.045,.19],[(x-2)*.24,-.35,(y-2)*.24],0x80c6bb);});component('vram',2,g=>{for(const x of [-2.2,2.2])for(const z of [-1.2,0,1.2])box(g,[.65,.17,.65],[x,-.65,z],0x9d8db6);});component('heatsink',3,g=>{for(let i=0;i<22;i++)box(g,[.09,.85,3.25],[(i-10.5)*.23,.35,0],0x5d788a);});component('fan',4,g=>{for(const x of [-1.5,1.5]){const gg=new T.TorusGeometry(.79,.055,6,40);gs.add(gg);const o=new T.Mesh(gg,mat(0x859da8));o.rotation.x=Math.PI/2;o.position.set(x,1.14,0);g.add(o);rings.push(o);for(let j=0;j<7;j++){const b=box(g,[.49,.05,.2],[x+Math.cos(j/7*6.28)*.4,1.14,Math.sin(j/7*6.28)*.4],0x3e5b70);b.rotation.y=-j/7*6.28}}});camera.position.set(8,7,10);controls.target.set(0,0,0);}
 function buildTraining(){
 const keys=['sample','forward','loss','gradient','update'];
 keys.forEach((key,i)=>{const g=component(key,i,g=>{
   box(g,[1.55,.13,2.6],[0,-1.35,0],0x2e3d3b);detailBoard(g,1.4,2.4,-1.25);
   if(i===0){for(let j=0;j<12;j++)box(g,[.28,.18,.28],[((j%3)-1)*.38,-.65,((j/3|0)-1.5)*.42],j%3?0x839e98:0xc8b68c);wire(g,[1.3,.3,2],[0,-.58,0],0xa5b8ae);}
   else if(i===1){for(let j=0;j<12;j++){const x=(j%3-1)*.38,y=(j/3|0)*.5-.8;sphere(g,.105,[x,y,Math.sin(j)*.25],0x9dbdb8);if(j>2)line(g,[x,y-.5,0],[x,y,0],0x8baba8);}}
   else if(i===2){for(const sign of [-1,1]){const geo=new T.TorusGeometry(.57,.055,8,40);gs.add(geo);const o=new T.Mesh(geo,mat(sign<0?0xc9b38d:0x91bcb1));o.position.set(sign*.18,.0,sign*.22);g.add(o);}for(let j=0;j<12;j++)sphere(g,.035,[Math.cos(j/12*6.28)*.86,Math.sin(j/12*6.28)*.86,0],0xbcae95);}
   else if(i===3){for(let j=0;j<5;j++){const y=(j-2)*.38;line(g,[.6,y,0],[-.6,y,0],0xbda4d2);line(g,[-.6,y,0],[-.32,y+.15,0],0xbda4d2);sphere(g,.07,[.5,y,0],0xbda4d2);}}
   else {for(let j=0;j<4;j++){cylinder(g,.64-j*.09,.14,[0,-.7+j*.45,0],j%2?0xb9aa8f:0x7da69d);sphere(g,.065,[.55-j*.08,-.6+j*.45,0],0xc8d6c3);}}
 });g.position.x=(i-2)*2.35;});
 for(let i=0;i<4;i++)for(let j=0;j<3;j++)line(scene,[(i-2)*2.35+.75,-.55,j*.22-.22],[(i-1)*2.35-.75,-.55,j*.22-.22],0x8faaa4);
 for(let i=0;i<30;i++)pulse.push(sphere(scene,.04,[0,0,0],0xb0d2be));camera.position.set(10,7,16);controls.target.set(0,-.15,0);
 }
 function buildSelf(){board(scene,0,0);
 for(const sign of [-1,1]){const g=component(sign<0?'policyA':'policyB',sign<0?0:1,g=>{box(g,[1.7,2.5,1.7],[0,.3,0],0x294448);detailBoard(g,1.7,1.7,1.58);for(let i=0;i<5;i++){wire(g,[1.85,.2,1.85],[0,-.6+i*.45,0],sign<0?0x87bfb4:0xb9a8c8);for(let j=0;j<3;j++)sphere(g,.06,[(j-1)*.45,-.5+i*.45,.87],sign<0?0xa8cfc1:0xcab2d6);}});g.position.x=sign*4.8;for(let j=0;j<3;j++)line(scene,[sign*3.9,-.3,j*.3],[sign*2.7,-.3,j*.3],0x75b8b1);}
 const experience=component('experience',2,g=>{for(let i=0;i<4;i++){box(g,[3,.15,1.15],[0,i*.28,0],0x677d79);for(let j=0;j<7;j++)sphere(g,.035,[(j-3)*.35,.1+i*.28,.52],0xb8c7aa);}});experience.position.set(0,-.7,-4.4);
 const evaluation=component('evaluation',3,g=>{box(g,[3,.22,1.25],[0,0,0],0x4b5354);for(let j=0;j<8;j++)box(g,[.18,.09,.6],[(j-3.5)*.3,.19,0],j<5?0x8bb4a5:0x9c8d78);});evaluation.position.set(0,-.7,3.9);
 for(const z of [-3.7,3.3])for(const x of [-2,2])line(scene,[x,-.6,z],[x*1.9,-.3,0],0x9da68b);
 for(let i=0;i<25;i++)pulse.push(sphere(scene,.04,[0,0,0],0xb6c8bc));camera.position.set(12,11,17);controls.target.set(0,-.3,0);
 }

 function cylinder(parent,r,h,pos,col,key){const geo=new T.CylinderGeometry(r,r,h,24);gs.add(geo);const o=new T.Mesh(geo,mat(col));o.position.set(...pos);o.castShadow=true;o.userData.key=key;parent.add(o);return o;}
 function screw(parent,pos){const o=cylinder(parent,.047,.035,pos,0xb2b5af,'shell');line(parent,[pos[0]-.025,pos[1]+.019,pos[2]],[pos[0]+.025,pos[1]+.019,pos[2]],0x303638);return o;}
 function trace(parent,a,b,col=0x788f8b){line(parent,a,[b[0],a[1],a[2]],col);line(parent,[b[0],a[1],a[2]],b,col);}
 function detailBoard(parent,w,d,y){for(const x of [-w/2+.18,w/2-.18])for(const z of [-d/2+.18,d/2-.18])screw(parent,[x,y+.05,z]);for(let i=0;i<16;i++){const x=(i-7.5)*w/20;trace(parent,[x,y+.02,-d*.38],[x*.8,y+.02,d*.35],i%3?0x617b70:0xb8a783);}for(let i=0;i<12;i++){const x=(i%6-2.5)*w/7,z=i<6?-d*.32:d*.32;box(parent,[.12,.07,.17],[x,y+.04,z],0x353b3d);}}
 function fan(parent,x,y,z,r=.75){cylinder(parent,.19,.12,[x,y,z],0x4d5558,'shell');for(let j=0;j<9;j++){const a=j/9*Math.PI*2;const b=box(parent,[r*.51,.05,r*.22],[x+Math.cos(a)*r*.48,y,z+Math.sin(a)*r*.48],0x414b50);b.rotation.y=-a+.38;}const geo=new T.TorusGeometry(r,.045,7,48);gs.add(geo);const rim=new T.Mesh(geo,mat(0xaaaead));rim.rotation.x=Math.PI/2;rim.position.set(x,y+.04,z);parent.add(rim);}
 function buildNeuron(){
 const base=component('shell',0,g=>{box(g,[7.7,.22,5.4],[0,-1.8,0],0x33383a);detailBoard(g,7.3,5,-1.65);});
 const input=component('cpu',1,g=>{for(let j=0;j<5;j++){const z=(j-2)*.83;cylinder(g,.28,.15,[-2.8,-.6,z],0xbfb8a7,'cpu');sphere(g,.11,[-2.8,-.42,z],0xaabeb6,'cpu');line(g,[-2.55,-.5,z],[-.6,.1,z*.18],0x91aba5);}});
 const weights=component('memory',2,g=>{for(let j=0;j<5;j++){const z=(j-2)*.83;box(g,[.4,.28,.43],[-1.55,-.25,z*.68],0x9c8c72);for(let k=0;k<3;k++)line(g,[-1.7+k*.13,-.09,z*.68-.13],[-1.7+k*.13,-.09,z*.68+.13],0xd6c8ac);}});
 const sum=component('gpu',3,g=>{cylinder(g,.96,.36,[0,.12,0],0x758b8d,'gpu');for(let j=0;j<20;j++){const a=j/20*6.28;sphere(g,.035,[Math.cos(a)*.87,.33,Math.sin(a)*.87],0xbcbca9);}const tor=new T.TorusGeometry(.56,.04,8,48);gs.add(tor);const ring=new T.Mesh(tor,mat(0xc9b787));ring.rotation.x=Math.PI/2;ring.position.y=.36;g.add(ring);line(g,[.8,.12,0],[2.05,.12,0],0xb6c7c1);});
 component('network',4,g=>{box(g,[.7,1.1,1.45],[2.7,.12,0],0x6a7479);wire(g,[.76,1.18,1.53],[2.7,.12,0],0xc8b998);for(let j=0;j<5;j++)box(g,[.03,.08,.12],[3.07,-.15+j*.17,0],0xa8c9bd);});
 for(let j=0;j<28;j++)pulse.push(sphere(scene,.035,[0,0,0],0xc9d8ce));camera.position.set(9,7,11);controls.target.set(0,-.2,0);
 }
 function buildRules(){component('shell',0,g=>{box(g,[8,.2,5.6],[0,-1.8,0],0x303639);detailBoard(g,7.7,5.2,-1.67);});
 const points=[[-3,.0,0],[-1.15,.15,-1.3],[-1.15,.15,1.3],[1.15,.25,-1.75],[1.15,.25,0],[1.15,.25,1.75],[3.1,.3,0]];
 points.forEach((p,i)=>{component(i<3?'cpu':'memory',i+1,g=>{box(g,[.9,.28,.8],p,i<3?0x869b9a:0xb9aa8b);wire(g,[1,.4,.9],[p[0],p[1]+.08,p[2]],0x969f9e);for(let k=0;k<3;k++)box(g,[.15,.04,.05],[p[0]-.23+k*.23,p[1]+.16,p[2]],0xdbc89d);});});
 for(const [a,b] of [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[5,6]]){trace(scene,[points[a][0],points[a][1]-.2,points[a][2]],[points[b][0],points[b][1]-.2,points[b][2]],0x8f9e99)}
 camera.position.set(10,9,10);controls.target.set(0,-.4,0);
 }
 function buildSearch(){component('shell',0,g=>{box(g,[9,.18,6],[0,-1.8,0],0x303638);detailBoard(g,8.6,5.6,-1.68);});
 const root=sphere(scene,.27,[-3,.1,0],0xc2b18c,'network');for(let i=0;i<3;i++){const z=(i-1)*1.9;const g=component('network',i+1,g=>{sphere(g,.2,[-.6,.25,z],i===1?0xa4c3ba:0x8c969c);line(g,[-3,.1,0],[-.6,.25,z],0xa0b8b2);for(let j=0;j<3;j++){const zz=z+(j-1)*.52;sphere(g,.13,[1.7,.5,zz],0xaaa695);line(g,[-.6,.25,z],[1.7,.5,zz],0x657f80);cylinder(g,.13,.12,[3.25,.02,zz],0x718887,'network');line(g,[1.7,.5,zz],[3.25,.02,zz],0x667d80);}});}
 for(let j=0;j<20;j++)pulse.push(sphere(scene,.035,[0,0,0],0xc1d5c8));camera.position.set(8,10,12);controls.target.set(0,-.2,0);
 }
 function buildLearning(){component('shell',0,g=>{box(g,[8.3,.2,5.8],[0,-1.9,0],0x2d3336);detailBoard(g,7.9,5.4,-1.78);});
 component('memory',1,g=>{for(let i=0;i<6;i++){box(g,[1.55,.08,1.9],[-2.65,-1.1+i*.2,0],i%2?0x9da7a3:0x6f8285);for(let j=0;j<6;j++)line(g,[-3.25,-1.04+i*.2,-.65+j*.23],[-2.2,-1.04+i*.2,-.65+j*.23],0xc6b997);}});
 component('cpu',2,g=>{for(let p=0;p<4;p++)for(let y=0;y<4;y++){const a=[-.6+p*.4,-.9+y*.5,Math.sin(y)*.45];sphere(g,.07,a,0xa6c3b7);if(p>0)for(let k=0;k<4;k++)line(g,[a[0]-.4,-.9+k*.5,Math.sin(k)*.45],a,0x526c70);}wire(g,[2,2.5,1.7],[0,-.05,0],0x809896);});
 component('gpu',3,g=>{box(g,[1.8,.2,2.4],[2.65,-.9,0],0x67787b);for(let y=0;y<6;y++)for(let x=0;x<4;x++)box(g,[.22,.08,.22],[2.65+(x-1.5)*.33,-.73,(y-2.5)*.33],0xc1b593);for(let j=0;j<12;j++)box(g,[.055,.65,1.75],[2.65+(j-5.5)*.12,-.35,0],0x7e898d);});
 trace(scene,[-1.8,-1.2,0],[1.7,-1.2,0],0x9fbfb6);line(scene,[2.5,-1.4,1.8],[-2.5,-1.4,1.8],0xc4b38f);for(let j=0;j<30;j++)pulse.push(sphere(scene,.035,[0,0,0],0xc2d7ce));camera.position.set(9,8,12);controls.target.set(0,-.3,0);
 }
 function init(){renderer=new T.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.setClearColor(0x111314);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;scene=new T.Scene();scene.background=new T.Color(0x111314);const pm=new T.PMREMGenerator(renderer),room=new RoomEnvironment();environment=pm.fromScene(room,.06);scene.environment=environment.texture;pm.dispose();room.dispose();camera=new T.PerspectiveCamera(36,1,.1,150);controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=6;controls.maxDistance=35;controls.maxPolarAngle=Math.PI*.48;
 renderer.domElement.setAttribute('aria-label','三维原理展品，拖动旋转、滚轮缩放；可用下方部件按钮选择');
 const hitAt=e=>{if(container?.dataset.modelReady!=='true')return null;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);for(const hit of ray.intersectObjects(scene.children,true)){if(!hit.object.isMesh)continue;let o=hit.object,owner=null,visible=true;while(o&&o!==scene){if(!o.visible)visible=false;if(parts.includes(o)||o===boardGroup)owner=o;o=o.parent;}if(!visible)continue;if(owner)return owner.userData.key;if(hit.object.userData.key)return hit.object.userData.key;}return null;};
 renderer.domElement.addEventListener('pointerdown',e=>down=e.isPrimary&&e.button===0?[e.clientX,e.clientY]:null);
 renderer.domElement.addEventListener('pointermove',e=>{renderer.domElement.style.cursor=hitAt(e)?'pointer':'grab';});
 renderer.domElement.addEventListener('pointercancel',()=>down=null);
 renderer.domElement.addEventListener('pointerup',e=>{const start=down;down=null;if(!start||Math.hypot(e.clientX-start[0],e.clientY-start[1])>5)return;const key=hitAt(e);if(key)selectPart(key);});
 frame=requestAnimationFrame(loop);}
 let down=null;
 function groupFor(key){return key==='board'?boardGroup:parts.find(p=>p.userData.key===key);}
 function selectPart(key){if(!active||container?.dataset.modelReady!=='true'||!groupFor(key))return false;selectedKey=key;if(isolatedKey){isolatedKey=key;fitView=true;}parts.concat(boardGroup?[boardGroup]:[]).forEach(g=>g.traverse(o=>{if(!o.isMesh)return;for(const material of [].concat(o.material||[])){if(!material.emissive)continue;if(!material.userData.originalEmissive){material.userData.originalEmissive=material.emissive.clone();material.userData.originalIntensity=material.emissiveIntensity;}if(g.userData.key===key){material.emissive.set(0xa2c9bc);material.emissiveIntensity=.24;}else{material.emissive.copy(material.userData.originalEmissive);material.emissiveIntensity=material.userData.originalIntensity;}}}));markers.forEach(({button,key:k})=>{button.classList.toggle('active',k===key);button.setAttribute('aria-pressed',String(k===key));});onPick(key,mode);return true;}
 function mountHotspots(){hotspots?.remove();hotspots=null;markers=[];if(!PART_CATALOG[mode])return;hotspots=document.createElement('div');hotspots.className='part-hotspots';hotspots.setAttribute('role','group');hotspots.setAttribute('aria-label','展开部件标记');container.appendChild(hotspots);PART_CATALOG[mode].forEach((p,i)=>{const button=document.createElement('button');button.type='button';button.textContent=String(i+1).padStart(2,'0');button.dataset.modelPart=p.key;button.title=p.name;button.setAttribute('aria-label','选择'+p.name);button.setAttribute('aria-pressed',String(selectedKey===p.key));button.classList.toggle('active',selectedKey===p.key);button.onclick=()=>selectPart(p.key);const leader=document.createElement('i');leader.className='part-leader';hotspots.appendChild(leader);hotspots.appendChild(button);const g=groupFor(p.key);const anchor=g?new T.Box3().setFromObject(g).getCenter(new T.Vector3()).sub(g.position):new T.Vector3();markers.push({button,leader,key:p.key,anchor});});}
 function updateHotspots(){if(!hotspots)return;hotspots.hidden=targetSpread===0;if(hotspots.hidden)return;
 const w=container.clientWidth,h=container.clientHeight;
 const points=markers.map(m=>{const g=groupFor(m.key);if(!g)return null;projected.copy(m.anchor).add(g.position).project(camera);const ax=(projected.x*.5+.5)*w,ay=(-projected.y*.5+.5)*h;const hidden=!g.visible||projected.z>1||projected.z< -1||ax<0||ay<0||ax>w||ay>h;m.button.hidden=hidden;m.leader.hidden=hidden;return hidden?null:{...m,ax,ay,x:T.MathUtils.clamp(ax,23,w-23),y:T.MathUtils.clamp(ay,23,h-23)};}).filter(Boolean);
 for(let n=0;n<16;n++)for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){const a=points[i],b=points[j];let dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy);if(d<43){if(d<.01){dx=1;dy=.3;d=Math.hypot(dx,dy);}const move=(43-d)/2;a.x=T.MathUtils.clamp(a.x-dx/d*move,23,w-23);a.y=T.MathUtils.clamp(a.y-dy/d*move,23,h-23);b.x=T.MathUtils.clamp(b.x+dx/d*move,23,w-23);b.y=T.MathUtils.clamp(b.y+dy/d*move,23,h-23);}}
 points.forEach(p=>{const x=Math.round(p.x),y=Math.round(p.y),dx=x-p.ax,dy=y-p.ay;p.button.style.transform=`translate(${x-16}px,${y-16}px)`;p.leader.style.width=Math.hypot(dx,dy)+'px';p.leader.style.transform=`translate(${p.ax}px,${p.ay}px) rotate(${Math.atan2(dy,dx)}rad)`;});
 }

 function clear(){if(!scene)return;scene.traverse(o=>{if(o.isLight)o.shadow?.map?.dispose();});while(scene.children.length)scene.remove(scene.children[0]);gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());gs.clear();ms.clear();parts=[];pulse=[];rings=[];boardGroup=null;selectedKey=null;isolatedKey=null;hotspots?.remove();hotspots=null;markers=[];stageObject=null;}
 function prepare(imported){
  clear();
  scene.add(new T.HemisphereLight(0xebe7dc,0x222326,2.0));
  const keyLight=new T.DirectionalLight(0xf2ebdf,3.0);keyLight.position.set(4,13,7);keyLight.castShadow=true;keyLight.shadow.mapSize.set(1024,1024);Object.assign(keyLight.shadow.camera,{left:-12,right:12,top:9,bottom:-9,far:70});scene.add(keyLight);
  const rim=new T.DirectionalLight(0x9cb8bb,1.25);rim.position.set(-8,4,-4);scene.add(rim);
  stageObject=box(scene,[24,.12,13],[0,-2.75,0],0x202323);ms.delete(stageObject.material);stageObject.material.dispose();stageObject.material=new T.MeshBasicMaterial({color:0x181c1d});ms.add(stageObject.material);
  if(imported){
   const originals=new Set();
   for(const row of PART_CATALOG[mode]){
    const group=imported.children.find(child=>child.userData.key===row.key);if(!group)throw new Error('Missing engineering part: '+row.key);
    scene.add(group);group.traverse(object=>{if(!object.isMesh)return;object.userData.key=row.key;object.castShadow=true;object.receiveShadow=true;gs.add(object.geometry);const materials=[].concat(object.material).map(material=>{originals.add(material);const clone=material.clone();clone.envMapIntensity=.65;ms.add(clone);return clone;});object.material=Array.isArray(object.material)?materials:materials[0];});
    if(row.key==='board')boardGroup=group;else parts.push(group);
   }
   originals.forEach(material=>material.dispose());
   camera.position.set(...(mode==='match'?[12,10,18]:[9,8,12]));controls.target.set(0,0,0);
  }else if(mode==='training')buildTraining();else if(mode==='neuron')buildNeuron();else if(mode==='rules')buildRules();else if(mode==='search')buildSearch();else if(mode==='learning')buildLearning();else buildSelf();
  parts.forEach((part,index)=>{part.userData.base=part.position.clone();part.userData.offset=new T.Vector3(0,(index-1)*.45,0);});
  auxiliary=scene.children.filter(object=>!object.isLight&&object!==stageObject&&!parts.includes(object)&&object!==boardGroup);
  const layoutGroups=PART_CATALOG[mode]?.map(part=>groupFor(part.key)).filter(Boolean)||[];
  layoutController.measure(layoutGroups);homePosition.copy(camera.position);homeTarget.copy(controls.target);camera.zoom=1;camera.updateProjectionMatrix();controls.maxDistance=120;controls.update();spread=targetSpread=0;fitView=false;
 }
 function size(){if(!container||!active)return;const width=container.clientWidth,height=container.clientHeight;if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.zoom=width<600&&!targetSpread&&!isolatedKey ? .7 : 1;camera.updateProjectionMatrix();if(targetSpread||isolatedKey)fitView=true;}
 const resizeObserver=new ResizeObserver(size);
 function loop(now){
  frame=requestAnimationFrame(loop);const delta=Math.min(.12,(now-last)/1000||0);last=now;if(!active||document.hidden||document.body.dataset.walkOpen||!parts.length)return;
  controls.update();
  spread=reduced||Math.abs(spread-targetSpread)<.001?targetSpread:T.MathUtils.damp(spread,targetSpread,4,delta);
  if(PART_CATALOG[mode]){
   layoutController.update(camera,controls.target,spread,isolatedKey);
   if(fitView){
    const desired=targetSpread||isolatedKey?layoutController.distance(camera,isolatedKey):homePosition.distanceTo(homeTarget);
    const current=camera.position.distanceTo(controls.target);
    cameraDirection.copy(camera.position).sub(controls.target).normalize();
    const distance=reduced?desired:T.MathUtils.damp(current,desired,5,delta);
    camera.position.copy(controls.target).addScaledVector(cameraDirection,distance);camera.updateMatrixWorld();
    if(Math.abs(distance-desired)<.02)fitView=false;
   }
   layoutController.update(camera,controls.target,spread,isolatedKey);
  }else parts.forEach(part=>part.position.copy(part.userData.base).addScaledVector(part.userData.offset,spread));
  if(stageObject)stageObject.visible=spread<.02&&!isolatedKey;
  if(PART_CATALOG[mode])auxiliary.forEach(object=>object.visible=spread<.02&&!isolatedKey);
  const time=reduced?0:now/1000;
  pulse.forEach((particle,index)=>{particle.visible=spread<.02&&!isolatedKey;const progress=(time*.23+index/pulse.length)%1;if(mode==='neuron')particle.position.set(-2.9+5.8*progress,.15,Math.sin(index*1.7)*(1-progress)*1.6);else if(mode==='search')particle.position.set(-3+6.3*progress,.2,Math.sin(index*2)*(progress<.5?progress*3:1.5));else if(mode==='learning')particle.position.set(-2.8+5.6*progress,-.1,Math.sin(progress*6.28)*.45);else if(mode==='training')particle.position.set(-4.6+9.2*progress,Math.sin(index*1.2)*.5,Math.cos(index)*.3);else particle.position.set(-4.3+8.6*progress,-.15,Math.sin(progress*Math.PI*2)*2);});
  container.dataset.spread=spread>.999?'expanded':spread<.001?'assembled':'moving';container.dataset.isolated=isolatedKey||'';
  updateHotspots();renderer.render(scene,camera);
 }
 function syncZoom(){camera.zoom=(container.clientWidth<600&&!targetSpread&&!isolatedKey) ? .7 : 1;camera.updateProjectionMatrix();}
 function resetView(){if(!camera||!parts.length)return;isolatedKey=null;controls.target.copy(homeTarget);cameraDirection.copy(homePosition).sub(homeTarget).normalize();camera.position.copy(controls.target).addScaledVector(cameraDirection,camera.position.distanceTo(controls.target));syncZoom();fitView=true;controls.update();}
 return {
  async show(host,newMode='match'){
   const generation=++loadingGeneration;
   try{
    if(!renderer){init();renderer.domElement.addEventListener('wheel',()=>{zooming=true;},{capture:true,passive:true});controls.addEventListener('start',()=>{fitView=false;});controls.addEventListener('end',()=>{if(!zooming&&(targetSpread||isolatedKey))fitView=true;zooming=false;});renderer.domElement.getExhibitSnapshot=()=>({mode,selected:selectedKey,isolated:isolatedKey,spread,zoom:camera.zoom,bounds:layoutController.projection(camera,container.clientWidth,container.clientHeight),triangles:renderer.info.render.triangles});}
    active=true;targetSpread=0;isolatedKey=null;container=host;host.dataset.expanded='false';host.dataset.modelReady='false';host.appendChild(renderer.domElement);resizeObserver.disconnect();resizeObserver.observe(host);size();
    mode=newMode;
    if(preparedMode!==newMode||parts.length===0){
     active=false;const imported=hasEngineeringModel(mode)?await loadEngineeringModel(mode):null;
     if(generation!==loadingGeneration){if(imported)disposeEngineeringModel(imported);return;}
     prepare(imported);preparedMode=newMode;active=true;
    }else{spread=0;camera.position.copy(homePosition);controls.target.copy(homeTarget);controls.update();parts.concat(boardGroup?[boardGroup]:[]).forEach(group=>group.visible=true);if(selectedKey)selectPart(selectedKey);}
    host.dataset.modelSource=hasEngineeringModel(mode)?'blender':'procedural';mountHotspots();size();host.dataset.modelReady='true';host.dispatchEvent(new CustomEvent('exhibit-ready'));
   }catch(error){if(generation!==loadingGeneration)return;host.dataset.modelReady='error';host.insertAdjacentHTML('beforeend','<p class="scene-fallback">三维模型未能载入，仍可阅读部件档案。</p>');console.error(error);}
  },
  hide(){loadingGeneration++;active=false;resizeObserver.disconnect();},
  select:selectPart,
  explode(){if(!active||container?.dataset.modelReady!=='true')return false;isolatedKey=null;targetSpread=targetSpread?0:1;container.dataset.expanded=String(!!targetSpread);syncZoom();fitView=true;return targetSpread===1;},
  isolate(){if(!selectedKey){const key=PART_CATALOG[mode]?.[0]?.key;if(key)selectPart(key);}if(!selectedKey||!active||container?.dataset.modelReady!=='true')return false;isolatedKey=isolatedKey?null:selectedKey;syncZoom();fitView=true;return !!isolatedKey;},
  resetView,
  dispose(){loadingGeneration++;cancelAnimationFrame(frame);resizeObserver.disconnect();clear();controls?.dispose();environment?.dispose();renderer?.dispose();}
 };
}
