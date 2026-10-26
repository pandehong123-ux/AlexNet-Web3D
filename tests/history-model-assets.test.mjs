import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {Box3,Vector3} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const expected={
  'history-neuron-v001.glb':['shell','cpu','memory','gpu','network'],
  'history-rules-v001.glb':['shell','input','rule','matcher','controller','output'],
  'history-search-v001.glb':['shell','state','branch-a','branch-b','branch-c','evaluation'],
  'history-learning-v001.glb':['shell','sample','forward','loss','gradient','update']
};

test('00历史 Blender GLB 保留独立部件、细节几何和尺寸',async()=>{
  assert.ok(fs.existsSync('assets/models/ai-museum-history-v001.blend'));
  for(const [file,keys] of Object.entries(expected)){
    const bytes=fs.readFileSync('assets/models/'+file);
    assert.ok(bytes.length>300000,file);
    const gltf=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
    const root=gltf.scene.children[0];
    const groups=root.children.filter(o=>keys.includes(o.userData?.key));
    assert.deepEqual(new Set(groups.map(o=>o.userData.key)),new Set(keys),file);
    let meshCount=0; root.traverse(object=>{if(object.isMesh||object.isLine) meshCount++;});
    assert.ok(meshCount>keys.length*4,file+' detailed child geometry');
    for(const group of groups){
      const size=new Box3().setFromObject(group).getSize(new Vector3());
      assert.ok(size.x>0&&size.y>0&&size.z>0,file+'/'+group.userData.key);
    }
  }
});
