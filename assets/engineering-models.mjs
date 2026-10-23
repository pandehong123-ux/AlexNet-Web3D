import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import computeSystem from './models/compute-system.glb';
import accelerator from './models/accelerator.glb';

const buffers = {match: computeSystem, gpu: accelerator};

export function hasEngineeringModel(mode) {
  return Object.hasOwn(buffers, mode);
}

export async function loadEngineeringModel(mode) {
  const bytes = buffers[mode];
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const result = await new GLTFLoader().parseAsync(buffer, '');
  return result.scene;
}

export function disposeEngineeringModel(root) {
  const materials = new Set();
  const geometries = new Set();
  root.traverse(object => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.material) for (const material of [].concat(object.material)) materials.add(material);
  });
  geometries.forEach(geometry => geometry.dispose());
  materials.forEach(material => {
    for (const value of Object.values(material)) if (value?.isTexture) value.dispose();
    material.dispose();
  });
}
