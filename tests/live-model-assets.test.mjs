import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {createExhibitMotion} from '../assets/exhibit-motion.mjs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const manifest=JSON.parse(read('assets/models/live-manifest.json'));

for(const asset of manifest.assets)test(asset.file+': real exported clips survive part reparenting, pause and explosion',async()=>{
  const bytes=read('assets/models/'+asset.file);assert.equal(bytes.length,asset.bytes);assert.equal(hash(bytes),asset.sha256);
  assert.ok(bytes.length<=asset.budget.bytes);assert.ok(asset.triangles<=asset.budget.triangles);
  const gltf=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
  assert.equal(gltf.animations.length,1);assert.equal(gltf.animations[0].tracks.length,2);
  const scene=new T.Scene(),parts=[...gltf.scene.children];assert.deepEqual(parts.map(p=>p.userData.key).sort(),asset.part_keys.toSorted());
  parts.forEach(p=>scene.add(p));
  const gs=new Set(),ms=new Set(),motion=createExhibitMotion({scene,parts,mode:asset.file.startsWith('compute')?'match':'gpu',reduced:false,gs,ms,clips:gltf.animations});
  motion.update(0);const start=motion.snapshot();motion.update(.1);const running=motion.snapshot();
  assert.equal(running.rotors.length,2);assert.ok(running.frames.length>=5);
  assert.notDeepEqual(running.rotors.map(r=>r.rotation),start.rotors.map(r=>r.rotation));assert.deepEqual(running.frames,start.frames);
  assert.deepEqual(running.rotors.map(r=>r.position),start.rotors.map(r=>r.position));
  if(asset.file.startsWith('accelerator')){
    const links=scene.getObjectByName('operation-links').children.find(o=>o.isLineSegments).geometry.attributes.position;
    assert.ok(Math.abs(links.getX(0)-links.getX(31))>.5,'VRAM input and core interfaces must be spatially distinct');
    assert.ok(Math.abs(links.getX(32)-links.getX(63))>.5,'core and VRAM output interfaces must be spatially distinct');
  }
  motion.clock.toggle();motion.update(.1);assert.deepEqual(motion.snapshot(),{...running,paused:true});
  motion.clock.toggle();parts.forEach((p,i)=>p.position.set(i*12,3,0));motion.update(.1,1);
  const expanded=motion.snapshot();assert.deepEqual(expanded.rotors.map(r=>r.position),start.rotors.map(r=>r.position));assert.deepEqual(expanded.frames,start.frames);
  assert.equal(scene.getObjectByName('operation-links').visible,false);
  motion.dispose();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of [].concat(o.material||[]))ms.add(m);});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());
});

test('live animation contact sheets and QA evidence remain portable and match the reviewed exports',()=>{
  const index=JSON.parse(read('assets/provenance/live/evidence-index.json'));
  for(const file of index.files){assert.ok(file.path.startsWith('assets/provenance/live/'));const bytes=read(file.path);assert.equal(hash(bytes),file.sha256);assert.equal(bytes.length,file.bytes);}
  assert.equal(manifest.visual_qa.status,'accepted');
  assert.equal(hash(read('assets/provenance/live/rotors-contact-sheet.png')),manifest.visual_qa.contact_sheet_sha256);
  assert.equal(JSON.parse(read('assets/provenance/live/three-mixer-qa.json')).status,'passed');
  for(const [file,sha] of Object.entries(manifest.preservation.protected_files_sha256))assert.equal(hash(read(file)),sha,file);
});

test('editable animation source matches the reopened and reviewed Blender file',()=>{
  const source=manifest.source_blend;assert.equal(hash(read(source.file)),source.sha256);assert.equal(source.reopen_qa.status,'passed');
  assert.equal(source.reopen_qa.normal_blend_opened_without_empty_library_scene,true);assert.equal(source.scenes.length,3);
});
