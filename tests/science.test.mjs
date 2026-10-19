import test from 'node:test';
import assert from 'node:assert/strict';
import {softmax,convolve,pool,flatten,playback,advance,stageSample} from '../assets/science.mjs';
test('softmax is stable and normalized even for large logits',()=>{const p=softmax([1001,1000,999]);assert.ok(p.every(Number.isFinite));assert.ok(Math.abs(p.reduce((a,b)=>a+b)-1)<1e-12);assert.ok(p[0]>p[1]);});
test('convolution computes a real local dot product',()=>{assert.equal(convolve([1,2,3,4],[1,0,0,-1]),-3);assert.throws(()=>convolve([1],[1,2]));});
test('pool preserves the maximum and flatten preserves all values',()=>{assert.equal(pool([1,7,-2,3]),7);assert.deepEqual(flatten([[1,2],[3,4]]),[1,2,3,4]);});
test('pause freezes progress and step advances exactly one stage',()=>{let s=playback();s=advance(s,'run');s=advance(s,'tick',1);s=advance(s,'pause');const p=s.time;s=advance(s,'tick',4);assert.equal(s.time,p);s=advance(s,'step');assert.equal(s.paused,true);assert.equal(stageSample(s.time).index,1);});
test('completion and reset cannot leave stale active packets',()=>{let s=advance(playback(),'run');s=advance(s,'tick',100);assert.equal(s.complete,true);assert.equal(s.running,false);assert.deepEqual(advance(s,'reset'),playback());});
