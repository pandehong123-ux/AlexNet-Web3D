import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createMotionClock,createExhibitMotion} from '../assets/exhibit-motion.mjs';

test('operating time freezes while paused, hidden or reduced and clamps delayed frames',()=>{
  const c=createMotionClock();c.advance(.1);c.toggle();c.advance(.1);assert.equal(c.time,.1);
  c.toggle();c.advance(.1,false);assert.equal(c.time,.1);c.advance(10);assert.equal(c.time,.22);
  const reduced=createMotionClock(true);reduced.advance(1);assert.equal(reduced.time,0);
});

test('rotor clip rotates at its local pivot, while static frame and parent remain fixed',()=>{
  const scene=new T.Scene(),group=new T.Group(),rotor=new T.Group(),frame=new T.Mesh(new T.BoxGeometry(2,.1,2),new T.MeshStandardMaterial());
  group.userData.key='fan';rotor.name='test-rotor';rotor.userData.motion='rotor';rotor.position.set(.5,1,0);group.add(frame,rotor);scene.add(group);
  const clip=new T.AnimationClip('fan',1,[new T.NumberKeyframeTrack('test-rotor.rotation[y]',[0,.25,.5,.75,1],[0,Math.PI/2,Math.PI,Math.PI*1.5,Math.PI*2])]);
  const gs=new Set(),ms=new Set(),m=createExhibitMotion({scene,parts:[group],mode:'gpu',reduced:false,gs,ms,clips:[clip]});
  const before=frame.matrix.toArray();m.update(.1);assert.ok(rotor.rotation.y>.1);assert.deepEqual(frame.matrix.toArray(),before);assert.deepEqual(rotor.position.toArray(),[.5,1,0]);
  const angle=rotor.rotation.y;m.clock.toggle();m.update(.1);assert.equal(rotor.rotation.y,angle);
  group.position.set(4,2,-3);m.update(.1,1,'fan');assert.deepEqual(rotor.position.toArray(),[.5,1,0]);assert.equal(scene.getObjectByName('operation-links').visible,false);
  m.dispose();assert.equal(scene.getObjectByName('operation-links'),undefined);gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());frame.geometry.dispose();frame.material.dispose();
});
