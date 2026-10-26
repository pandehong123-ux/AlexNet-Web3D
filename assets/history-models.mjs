import * as T from 'three';

// Original explanatory instruments: no claim to reproduce historical hardware.
export function buildHistoricalModel(mode, ctx) {
  const {scene,component,box,sphere,cylinder,line,wire,detailBoard,mat,gs,camera,controls}=ctx;
  const ink=0x10273b, steel=0x2c8f97, mint=0x4fd8c5, brass=0xe0a848, lilac=0x9d76df;
  const paths=[],rotors=[],scanners=[];
  const tube=(parent,points,col=steel,r=.035)=>{
    const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
    const geo=new T.TubeGeometry(curve,28,r,6,false);gs.add(geo);
    const mesh=new T.Mesh(geo,mat(col));parent.add(mesh);return curve;
  };
  const route=(parent,points,col=mint)=>{const curve=tube(parent,points,col,.022);paths.push({parent,curve,color:col});return curve;};
  const ring=(parent,r,pos,col=brass,vertical=false)=>{
    const geo=new T.TorusGeometry(r,.028,6,48);gs.add(geo);const mesh=new T.Mesh(geo,mat(col));
    mesh.position.set(...pos);if(!vertical)mesh.rotation.x=Math.PI/2;parent.add(mesh);return mesh;
  };
  const glass=(parent,size,pos)=>{const mesh=box(parent,size,pos,0x3aa9b0);mesh.material.transparent=true;mesh.material.opacity=.19;mesh.material.depthWrite=false;mesh.material.metalness=.08;mesh.material.roughness=.18;mesh.material.emissive.set(0x1a7f8d);mesh.material.emissiveIntensity=.2;return mesh;};
  const stand=(parent,x,z,h=.7)=>{cylinder(parent,.16,.1,[x,-1.55,z],brass);cylinder(parent,.055,h,[x,-1.5+h/2,z],steel);};
  component('shell',0,g=>{
    box(g,[9.1,.24,6],[0,-1.8,0],ink);box(g,[8.8,.065,5.7],[0,-1.64,0],0x45534f);detailBoard(g,8.7,5.5,-1.58);
    for(const x of [-4,4])for(const z of [-2.5,2.5])cylinder(g,.18,.24,[x,-2,z],0x5f6966);
    for(let i=0;i<12;i++)box(g,[.18,.025,.045],[-1.7+i*.3,-1.59,2.7],i%3?steel:brass);
  });
  if(mode==='neuron'){
    component('cpu',1,g=>{for(let j=0;j<5;j++){
      const z=(j-2)*.93;stand(g,-3.5,z,.75);cylinder(g,.24,.13,[-3.5,-.68,z],brass);
      sphere(g,.14,[-3.5,-.49,z],mint);ring(g,.3,[-3.5,-.67,z]);
      route(g,[[-3.5,-.47,z],[-2.95,-.12,z],[-2.3,.04,z*.8]],mint);
    }});
    component('memory',2,g=>{for(let j=0;j<5;j++){
      const z=(j-2)*.74;box(g,[.86,.2,.4],[-1.92,.05,z],ink);
      for(let k=0;k<8;k++)ring(g,.14,[-2.18+k*.072,.18,z],j%2?brass:steel,true).rotation.y=Math.PI/2;
      cylinder(g,.075,.31,[-1.92,.35,z],brass);sphere(g,.08,[-1.92,.55,z],lilac);
      route(g,[[-1.46,.18,z],[-1,.36,z*.5],[-.65,.44,z*.23]],brass);
    }});
    component('gpu',3,g=>{
      cylinder(g,1.05,.2,[0,-.7,0],steel);cylinder(g,.83,.14,[0,.99,0],steel);
      glass(g,[1.65,1.55,1.65],[0,.16,0]);
      for(let j=0;j<8;j++){const a=j/8*Math.PI*2;stand(g,Math.cos(a)*.91,Math.sin(a)*.91,2.25);}
      for(let j=0;j<4;j++)ring(g,.73-j*.09,[0,-.38+j*.36,0],j%2?mint:brass);
      const core=sphere(g,.38,[0,.2,0],mint);core.material.emissiveIntensity=.42;
      const scanner=ring(g,.67,[0,-.35,0],mint);scanners.push({object:scanner,axis:'y',origin:-.35,amplitude:1.05});
      route(g,[[.65,.32,0],[1.15,.45,0],[1.7,.45,0]],mint);
    });
    component('network',4,g=>{
      for(const z of [-.65,.65]){box(g,[.25,1.75,.22],[2.05,.03,z],steel);box(g,[.25,1.75,.22],[2.8,.03,z],steel);}
      glass(g,[.6,1.4,1.5],[2.43,.05,0]);
      for(let j=0;j<7;j++)box(g,[.46,.035,.09],[2.45,-.48+j*.17,.8],j<4?brass:mint);
      cylinder(g,.45,.16,[3.6,-.66,0],steel);sphere(g,.25,[3.6,-.31,0],mint);
      route(g,[[2.8,.44,0],[3.3,.44,0],[3.6,-.25,0]],mint);
    });
  }else if(mode==='rules'){
    const points=[[-3.4,-.25,0],[-1.6,.05,-1.45],[-1.6,.05,1.45],[.9,.3,-1.85],[.9,.3,0],[.9,.3,1.85],[3.3,.1,0]];
    points.forEach((p,i)=>component(i<3?'cpu':'memory',i+1,g=>{
      const [x,y,z]=p;stand(g,x,z,y+1.1);box(g,[1.12,.18,1.02],[x,y-.27,z],ink);
      box(g,[.87,.15,.76],[x,y-.09,z],i<3?steel:brass);glass(g,[.99,.62,.88],[x,y+.22,z]);
      for(const side of [-1,1])for(let j=0;j<4;j++)box(g,[.13,.045,.085],[x+side*.59,y-.2,z+(j-1.5)*.2],brass);
      for(let j=0;j<3;j++)cylinder(g,.085,.08,[x+(j-1)*.23,y+.06,z],j===i%3?mint:ink);
      const scan=box(g,[.72,.025,.045],[x,y+.48,z-.32],mint);scanners.push({object:scan,axis:'z',origin:z-.32,amplitude:.64,phase:i*.3});
    }));
    for(const [a,b] of [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[5,6]]){
      const A=points[a],B=points[b];route(scene,[[A[0]+.55,A[1]-.25,A[2]],[(A[0]+B[0])/2,-.85,A[2]],[(A[0]+B[0])/2,-.85,B[2]],[B[0]-.55,B[1]-.25,B[2]]],a%2?brass:mint);
    }
  }else if(mode==='search'){
    const nodes=[[[-3.5,.25,0]],[[-1.1,.75,-1.95],[-1.1,.75,0],[-1.1,.75,1.95]]];
    component('cpu',1,g=>{const p=nodes[0][0];stand(g,p[0],p[2],1.75);sphere(g,.31,p,brass);ring(g,.49,p,mint,true);box(g,[.8,.1,.8],[-3.5,-1.17,0],steel);});
    nodes[1].forEach((p,i)=>component('network',i+2,g=>{
      stand(g,p[0],p[2],2.1);sphere(g,.23,p,i===1?mint:steel);ring(g,.36,p,brass,true);
      route(g,[nodes[0][0],[-2.3,1.2,p[2]*.5],p],i===1?mint:steel);
      for(let j=0;j<3;j++){
        const q=[1.3,1.05,p[2]+(j-1)*.52];stand(g,q[0],q[2],2.35);sphere(g,.13,q,mint);
        route(g,[p,[.1,1.35,(p[2]+q[2])/2],q],j===i?brass:steel);
        const z=q[2];box(g,[.9,.12,.36],[3.3,-1.2,z],ink);
        for(let k=0;k<5;k++)box(g,[.09,.12+((i+j+k)%4)*.11,.23],[3.02+k*.14,-1.02,z],k<=j?mint:steel);
        route(g,[q,[2.3,.8,z],[3.3,-.8,z]],brass);
      }
    }));
    component('memory',5,g=>{route(g,[[3.4,-1.23,2.55],[3,-1.36,2.75],[-2.9,-1.36,2.75],[-3.5,.2,.12]],lilac);});
  }else{
    component('memory',1,g=>{
      for(let i=0;i<7;i++){
        const y=-1.26+i*.27;box(g,[1.6,.09,2.2],[-3,y,0],i%2?steel:ink);
        for(let j=0;j<6;j++)box(g,[.18,.025,.26],[-3.52+(j%3)*.5,y+.06,(j<3?-.42:.42)],j%3?mint:brass);
      }
      for(const x of [-3.92,-2.08])box(g,[.08,2.25,2.4],[x,-.27,0],steel);
      route(g,[[-2.1,-.3,0],[-1.6,.35,0],[-1.1,.4,0]],mint);
    });
    component('cpu',2,g=>{
      wire(g,[2.1,2.4,2.4],[0,.05,0],brass);
      for(let layer=0;layer<4;layer++)for(let row=0;row<4;row++)for(let z=0;z<3;z++){
        const p=[-.84+layer*.56,-.85+row*.55,(z-1)*.72];sphere(g,.07,p,layer%2?lilac:mint);
        if(layer>0)for(let k=0;k<4;k++)line(g,[p[0]-.56,-.85+k*.55,p[2]],p,steel);
      }
      const scan=glass(g,[.03,2.25,2.2],[-.9,.05,0]);scan.material.opacity=.22;scanners.push({object:scan,axis:'x',origin:-.9,amplitude:1.8});
    });
    component('gpu',3,g=>{
      box(g,[2.1,.18,3],[2.9,-1.23,0],ink);detailBoard(g,1.9,2.8,-1.1);
      for(let j=0;j<15;j++)box(g,[.065,.75,2.2],[2.9+(j-7)*.12,-.6,0],steel);
      const rotor=new T.Group();rotor.position.set(2.9,-.04,0);g.add(rotor);
      cylinder(rotor,.17,.1,[0,0,0],brass);
      for(let j=0;j<9;j++){const a=j/9*Math.PI*2;const blade=box(rotor,[.42,.04,.19],[Math.cos(a)*.36,0,Math.sin(a)*.36],0x334c4d);blade.rotation.y=-a+.4;}
      ring(g,.76,[2.9,.02,0],brass);rotors.push(rotor);glass(g,[2.05,1.6,2.9],[2.9,-.34,0]);
      route(g,[[1.05,.4,0],[1.6,.7,0],[2.9,.5,0]],mint);
    });
    component('network',4,g=>{route(g,[[2.9,-1.35,1.9],[2.1,-1.38,2.45],[-2.5,-1.38,2.45],[-3,-.1,1.25]],brass);});
  }
  camera.position.set(...(mode==='search'?[8,8.8,12]:[9,8,12]));controls.target.set(0,-.7,0);
  return {paths,rotors,scanners};
}
