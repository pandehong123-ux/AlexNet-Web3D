import * as T from 'three';

export function createMotionClock(reduced=false){
  let time=0,paused=false;
  return {advance(delta,visible=true){if(visible&&!paused&&!reduced)time+=Math.max(0,Math.min(.12,delta));return time;},toggle(){paused=!paused;return paused;},get time(){return time;},get paused(){return paused;},get reduced(){return reduced;}};
}

const phases={
  neuron:['输入信号抵达','连接加权','信号整合','阈值输出'],
  rules:['读取条件','规则匹配','分支推理','汇聚结论'],
  search:['展开候选','评估叶节点','沿分支回传','更新搜索统计'],
  learning:['读取样本','特征变换','并行乘加','反馈调整'],
  match:['编码棋盘状态','组织搜索任务','网络并行评估','结果汇聚'],
  gpu:['显存供给数据','核心并行计算','结果写回','气流持续散热'],
  training:['采样与前向计算','比较预测与目标','梯度反向传播','更新参数再迭代'],
  selfplay:['策略提出动作','环境产生轨迹','归档对局经验','评估与反馈']
};

export function createExhibitMotion({scene,parts,mode,reduced,gs,ms,history,clips=[]}){
  const clock=createMotionClock(reduced),particles=[],localSignals=[],scanners=history?.scanners||[],rotors=history?.rotors||[];
  const effectRoots=[],anchors=new Map(),scratch=new T.Vector3(),a=new T.Vector3(),b=new T.Vector3();
  let mixer=null;
  if(clips.length){mixer=new T.AnimationMixer(scene);clips.forEach(clip=>mixer.clipAction(clip).play());}
  const geometry=new T.SphereGeometry(.04,8,6);gs.add(geometry);
  const material=new T.MeshBasicMaterial({color:0xb4e2cd,transparent:true,opacity:.85});ms.add(material);
  function dot(parent){const p=new T.Mesh(geometry,material);parent.add(p);return p;}
  for(const descriptor of history?.paths||[]){
    for(let i=0;i<3;i++)particles.push({object:dot(descriptor.parent),...descriptor,offset:i/3,global:descriptor.parent===scene});
  }
  // These live inside their owning component, so explosion never detaches the effect.
  for(const group of parts){
    const bounds=new T.Box3().setFromObject(group),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());group.worldToLocal(center);
    anchors.set(group,{center:center.clone(),width:size.x});
    const root=new T.Group();root.name='operating-'+group.userData.key;group.add(root);effectRoots.push(root);
    for(let i=0;i<6;i++){
      const object=dot(root);localSignals.push({object,center:center.clone(),size:size.clone(),offset:i/6,key:group.userData.key});
    }
  }
  const routes={match:['board','cpu','gpu','memory','network','board'],gpu:['vram','compute','vram'],training:['sample','forward','loss','gradient','update','forward'],selfplay:['policyA','board','policyB','board','experience','evaluation','policyA']};
  const groups=new Map(parts.map(g=>[g.userData.key,g]));
  const route=routes[mode]||[],globalRoot=new T.Group();globalRoot.name='operation-links';scene.add(globalRoot);effectRoots.push(globalRoot);
  const routeParticles=route.slice(1).map((key,i)=>({object:dot(globalRoot),from:groups.get(route[i]),to:groups.get(key),offset:i*.13})).filter(p=>p.from&&p.to);
  const linkPositions=new Float32Array(routeParticles.length*16*6),linkGeometry=new T.BufferGeometry();
  linkGeometry.setAttribute('position',new T.BufferAttribute(linkPositions,3));gs.add(linkGeometry);
  const linkMaterial=new T.LineBasicMaterial({color:0x86b9a6,transparent:true,opacity:.2,depthWrite:false});ms.add(linkMaterial);
  const links=new T.LineSegments(linkGeometry,linkMaterial);links.frustumCulled=false;globalRoot.add(links);
  const comparisonRings=mode==='training'?(groups.get('loss')?.children.filter(o=>o.geometry?.type==='TorusGeometry')||[]):[];
  const evaluationBars=mode==='selfplay'?(groups.get('evaluation')?.children.filter(o=>o.isMesh).slice(1)||[]):[];
  function endpoint(group,receiving,target){
    const anchor=anchors.get(group);target.copy(anchor.center);
    // Symmetric VRAM modules share the core's origin: use left input/right output interfaces.
    if(mode==='gpu'&&group.userData.key==='vram')target.x+=(receiving?1:-1)*anchor.width*.38;
    group.localToWorld(target);return target;
  }
  function update(delta,spread=0,isolated=null){
    const time=clock.advance(delta),staticMotion=clock.reduced;
    if(mixer)mixer.setTime(time);
    rotors.forEach((r,i)=>r.rotation.y=time*(4.3+i*.2));
    comparisonRings.forEach((ring,i)=>{ring.rotation.y=Math.sin(time*.65+i*Math.PI)*.42;ring.rotation.x=Math.cos(time*.55+i*Math.PI)*.18;});
    evaluationBars.forEach((bar,i)=>{bar.scale.y=.7+(.5+.5*Math.sin(time*.8+i*.7))*.6;});
    scanners.forEach(s=>s.object.position[s.axis]=s.origin+s.amplitude*(.5-.5*Math.cos(time*1.6+(s.phase||0))));
    particles.forEach(p=>{p.object.visible=!staticMotion&&(!p.global||spread<.02&&!isolated);p.curve.getPointAt((time*.25+p.offset)%1,p.object.position);});
    localSignals.forEach(p=>{
      const f=(time*.36+p.offset)%1;
      p.object.visible=!staticMotion;
      // Column scans for compute; returning leftward signals for gradient stage.
      const reverse=p.key==='gradient';
      p.object.position.set(p.center.x+((reverse?1-f:f)-.5)*p.size.x*.85,p.center.y+p.size.y*.47,p.center.z+Math.sin(p.offset*Math.PI*2)*p.size.z*.36);
    });
    globalRoot.visible=!staticMotion&&spread<.02&&!isolated;
    routeParticles.forEach((p,i)=>{endpoint(p.from,false,a);endpoint(p.to,true,b);const f=(time*.38+p.offset)%1;scratch.lerpVectors(a,b,f);scratch.y+=Math.sin(f*Math.PI)*.35;scene.worldToLocal(scratch);p.object.position.copy(scratch);
      for(let j=0;j<16;j++)for(let end=0;end<2;end++){const t=(j+end)/16;scratch.lerpVectors(a,b,t);scratch.y+=Math.sin(t*Math.PI)*.35;scene.worldToLocal(scratch);scratch.toArray(linkPositions,(i*32+j*2+end)*3);}
    });linkGeometry.attributes.position.needsUpdate=true;
    return phases[mode]?.[Math.floor(time/2)%4]||'运行示意';
  }
  function snapshot(){const live=[],frames=[];scene.traverse(o=>{if(o.userData.motion==='rotor'||rotors.includes(o))live.push({name:o.name,rotation:o.quaternion.toArray(),position:o.position.toArray()});else if(o.userData.motion==='static')frames.push({name:o.name,rotation:o.quaternion.toArray(),position:o.position.toArray()});});return {time:clock.time,paused:clock.paused,reduced:clock.reduced,rotors:live,frames,signals:particles.length+localSignals.length+routeParticles.length,samples:localSignals.slice(0,8).map(p=>p.object.position.toArray()),phase:phases[mode]?.[Math.floor(clock.time/2)%4]};}
  return {clock,update,snapshot,dispose(){mixer?.stopAllAction();if(mixer)mixer.uncacheRoot(scene);effectRoots.forEach(r=>r.removeFromParent());}};
}
