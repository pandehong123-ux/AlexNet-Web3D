import test from 'node:test';
import assert from 'node:assert/strict';
import {LAYERS,layout,stageAt,initialState,transition} from '../assets/network.mjs';
test('13 stages in the educational forward order',()=>assert.deepEqual(LAYERS.map(x=>x.id),['input','conv1','pool1','conv2','pool2','conv3','conv4','conv5','pool5','fc6','fc7','fc8','output']));
test('dimensions use the declared 227 engineering convention',()=>{assert.deepEqual(LAYERS[1].shape,[55,55,96]);assert.deepEqual(LAYERS[8].shape,[6,6,256]);assert.equal(LAYERS[11].units,1000)});
test('expanded geometry stays centered and separates every adjacent layer',()=>{const a=layout(false),b=layout(true);assert.ok(Math.abs(b[0]+b.at(-1))<1e-10);for(let i=1;i<b.length;i++)assert.ok(b[i]-b[i-1]>a[i]-a[i-1]);});
test('run timeline is bounded and ends at output',()=>{assert.equal(stageAt(-1),0);assert.equal(stageAt(0),0);assert.equal(stageAt(1),12);assert.equal(stageAt(2),12)});
test('reset cancels the run and restores the assembly',()=>{let s=transition(initialState(),'expand');s=transition(s,'run');s=transition(s,'select',5);assert.equal(s.selected,5);assert.equal(s.running,true);assert.deepEqual(transition(s,'reset'),initialState());});
test('select rejects unknown stages and run clears stale result',()=>{assert.equal(transition(initialState(),'select',90).selected,-1);let s=transition(initialState(),'finish');assert.equal(s.complete,true);s=transition(s,'run');assert.equal(s.complete,false);assert.equal(s.running,true)});
