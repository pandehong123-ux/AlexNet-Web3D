import test from 'node:test';
import assert from 'node:assert/strict';
import {Group} from 'three';
import {buildLayer, makeFlow} from '../assets/rendering.mjs';
import {LAYERS, layout} from '../assets/network.mjs';

// Canvas drawing is outside these tests; retain real Three.js objects and buffers.
const context = new Proxy({}, {get(target, key) {
  if (key === 'getImageData') return (x, y, w, h) => ({data: new Uint8ClampedArray(w * h * 4)});
  if (key === 'createImageData') return (w, h) => ({data: new Uint8ClampedArray(w * h * 4)});
  if (key === 'createRadialGradient') return () => ({addColorStop() {}});
  return target[key] ?? (() => {});
}});
globalThis.document = {createElement: () => ({getContext: () => context})};
const build = index => buildLayer(index, LAYERS[index].type);
function snapshot(root) {
  const rows = [];
  root.traverse(object => {
    rows.push([object.visible, object.position.toArray(), object.quaternion.toArray(), object.scale.toArray(),
      object.instanceMatrix ? Array.from(object.instanceMatrix.array) : null,
      object.instanceColor ? Array.from(object.instanceColor.array) : null,
      ...[].concat(object.material || []).map(material => [material.opacity, material.emissiveIntensity, material.color?.getHex()])]);
    if (object.isPoints || object.name === 'network-motion-links') rows.push(Array.from(object.geometry.attributes.position.array));
  });
  return JSON.stringify(rows);
}

test('all thirteen layers retain deterministic placement and sampleable motion diagnostics', () => {
  for (let index = 0; index < LAYERS.length; index++) {
    const root = build(index);
    root.position.set(layout(false)[index], 0, 0);
    root.userData.tick(2.4, .9, .4, false, {});
    assert.deepEqual(root.position.toArray(), [layout(false)[index], 0, 0]);
    const motion = root.userData.motion;
    assert.equal(motion.type, LAYERS[index].type);
    assert.equal(motion.time, 2.4);
    assert.ok(Number.isFinite(motion.phase) && motion.phase >= 0 && motion.phase < 1);
    assert.ok(motion.strength > 0 && motion.strength <= 1);
    assert.ok(motion.samples.every(Number.isFinite));
  }
});

test('every layer visibly advances with controlled time and freezes despite energy settling', () => {
  for (let index = 0; index < LAYERS.length; index++) {
    const root = build(index);
    root.userData.tick(.4, .9, .25, false);
    const before = snapshot(root);
    root.userData.tick(1.2, .9, .25, false);
    const moving = snapshot(root), diagnostics = JSON.stringify(root.userData.motion);
    assert.notEqual(moving, before, LAYERS[index].id);
    for (let frame = 0; frame < 4; frame++) root.userData.tick(1.2, .9 + frame * .02, .25, false);
    assert.equal(snapshot(root), moving, `${LAYERS[index].id} paused`);
    assert.equal(JSON.stringify(root.userData.motion), diagnostics);
  }
});

test('reduced motion resets to a stable pose after animation, regardless of supplied clock', () => {
  for (let index = 0; index < LAYERS.length; index++) {
    const root = build(index);
    root.userData.tick(1.4, 1, .5, false);
    root.userData.tick(2, .3, .8, true);
    const still = snapshot(root), motion = JSON.stringify(root.userData.motion);
    root.userData.tick(20, 1, .1, true);
    assert.equal(snapshot(root), still, LAYERS[index].id);
    assert.equal(JSON.stringify(root.userData.motion), motion);
    assert.equal(root.userData.motion.reduced, true);
  }
});

test('idle motion is restrained and active layers show a stronger mechanism', () => {
  for (const index of [0, 1, 2, 5, 9, 12]) {
    const idle = build(index), active = build(index);
    idle.userData.tick(1, .34, .2, false);
    active.userData.tick(1, 1, .2, false);
    assert.ok(active.userData.motion.strength > idle.userData.motion.strength);
    assert.notEqual(snapshot(idle), snapshot(active));
  }
});

test('pooling chooses the maximum of its current source window and lights its reduced output', () => {
  for (const index of [2, 4, 8]) {
    const root = build(index);
    for (const time of [.2, 1.1, 2.7, 4.1]) {
      root.userData.tick(time, 1, .5, false);
      const motion = root.userData.motion;
      assert.equal(motion.winnerValue, Math.max(...motion.windowValues));
      assert.ok(motion.windowIndices.includes(motion.winner));
      assert.equal(motion.samples[motion.outputIndex], motion.winnerValue);
    }
  }
});

test('fully connected aggregation packets traverse every adjacent sampled plane pair', () => {
  for (const index of [9, 10]) {
    const root = build(index), planes = index === 9 ? 3 : 4;
    root.userData.tick(1.1, 1, .5, false);
    let packets;
    root.traverse(object => { if (object.isInstancedMesh && object.count === 18) packets = object; });
    assert.ok(packets);
    const positions = Array.from({length: packets.count}, (_, j) => packets.instanceMatrix.array[j * 16 + 12]);
    for (let plane = 1; plane < planes; plane++) {
      const end = (plane - (planes - 1) / 2) * .43, start = end - .43;
      assert.ok(positions.some(x => x > start && x < end), `${LAYERS[index].id} connection ${plane}`);
    }
  }
});

test('channel and flatten experiments can be operated with a frozen clock and reduced motion', () => {
  const input = build(0);
  input.userData.tick(1, 1, .4, true, {channel: 'red'});
  const red = input.userData.input.material.map;
  let disposed = false;
  red.addEventListener('dispose', () => { disposed = true; });
  input.userData.tick(1, 1, .4, true, {channel: 'blue'});
  assert.equal(input.userData.lastChannel, 'blue');
  assert.notEqual(input.userData.input.material.map, red);
  assert.equal(input.userData.input.material.map, input.userData.input.material.emissiveMap);
  assert.equal(disposed, true);
  const pool = build(8);
  pool.userData.tick(1, 1, .4, true, {flatten: false});
  const tensor = snapshot(pool);
  pool.userData.tick(1, 1, .4, true, {flatten: true});
  assert.notEqual(snapshot(pool), tensor);
  assert.equal(pool.userData.motion.flatten, 1);
  pool.userData.tick(1, 1, .4, true, {flatten: false});
  assert.equal(snapshot(pool), tensor);
});

test('geometry stays within a bounded sampling budget and all resources belong to traversable objects', () => {
  const roots = LAYERS.map((_, index) => build(index));
  const geometries = new Set(), materials = new Set(), textures = new Set();
  let objects = 0, triangles = 0;
  for (const root of roots) root.traverse(object => {
    objects++;
    if (object.geometry) {
      geometries.add(object.geometry);
      if (object.isMesh) triangles += (object.geometry.index?.count ?? object.geometry.attributes.position.count) / 3 * (object.isInstancedMesh ? object.count : 1);
    }
    for (const material of [].concat(object.material || [])) {
      materials.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
    }
  });
  assert.ok(objects < 900, `objects=${objects}`);
  assert.ok(triangles < 110000, `triangles=${triangles}`);
  assert.ok(textures.size > 5);
  let freed = 0;
  for (const resource of [...geometries, ...materials, ...textures]) {
    resource.addEventListener('dispose', () => freed++);
    resource.dispose();
  }
  assert.equal(freed, geometries.size + materials.size + textures.size);
});

test('flow pauses all packet, beam and material motion and reduced mode remains static', () => {
  const world = new Group(), groups = LAYERS.map((_, index) => { const group = new Group(); group.position.x = layout(false)[index]; return group; });
  const flow = makeFlow(world, groups);
  flow.update(1, {index: 2, local: .3}, true, false, false);
  const running = snapshot(world);
  flow.update(10, {index: 5, local: .8}, true, true, false);
  assert.equal(snapshot(world), running);
  flow.update(2, {index: 2, local: .6}, true, false, false);
  assert.notEqual(snapshot(world), running);
  flow.update(3, {index: 3, local: .2}, true, false, true);
  const reduced = snapshot(world);
  flow.update(30, {index: 8, local: .9}, true, false, true);
  assert.equal(snapshot(world), reduced);
});

test('paused flow can be hidden for local inspection and restored without advancing packets',()=>{
 const world=new Group(),groups=LAYERS.map((_,i)=>{const g=new Group();g.position.x=layout(false)[i];return g;});
 const flow=makeFlow(world,groups);flow.update(1,{index:2,local:.3},true,false,false);
 const cloud=world.getObjectByName('network-motion-packets'),positions=Array.from(cloud.geometry.attributes.position.array);
 flow.update(10,{index:5,local:.8},true,true,false,false);assert.equal(cloud.visible,false);
 assert.deepEqual(Array.from(cloud.geometry.attributes.position.array),positions);
 flow.update(10,{index:5,local:.8},true,true,false,true);assert.equal(cloud.visible,true);
 assert.deepEqual(Array.from(cloud.geometry.attributes.position.array),positions);
});
