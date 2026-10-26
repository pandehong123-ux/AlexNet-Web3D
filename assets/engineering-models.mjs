import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import computeSystem from './models/compute-system-live.glb';
import accelerator from './models/accelerator-live.glb';
import historyNeuron from './models/history-neuron-v001.glb';
import historyRules from './models/history-rules-v001.glb';
import historySearch from './models/history-search-v001.glb';
import historyLearning from './models/history-learning-v001.glb';

const buffers = {
  match: computeSystem,
  gpu: accelerator,
  neuron: historyNeuron,
  rules: historyRules,
  search: historySearch,
  learning: historyLearning,
};

const HISTORY_KEYS = {
  neuron: ['shell', 'cpu', 'memory', 'gpu', 'network'],
  rules: ['shell', 'input', 'rule', 'matcher', 'controller', 'output'],
  search: ['shell', 'state', 'branch-a', 'branch-b', 'branch-c', 'evaluation'],
  learning: ['shell', 'sample', 'forward', 'loss', 'gradient', 'update'],
};

export function hasEngineeringModel(mode) {
  return Object.hasOwn(buffers, mode);
}

export async function loadEngineeringModel(mode) {
  const bytes = buffers[mode];
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const result = await new GLTFLoader().parseAsync(buffer, '');
  let root = result.scene;
  // The history exports keep one named exhibit root so they remain easy to
  // edit in Blender. The web scene expects the independent part groups at
  // the returned root, so unwrap that container here.
  if (HISTORY_KEYS[mode] && root.children.length === 1 && root.children[0].name.includes('Exhibit')) {
    root = root.children[0];
  }
  if (HISTORY_KEYS[mode]) {
    for (const key of HISTORY_KEYS[mode]) {
      const group = root.children.find(child => child.userData?.key === key || child.name.toLowerCase().endsWith(`-${key.toLowerCase()}`));
      if (group) group.userData.key = key;
    }
  }
  root.animations = result.animations;
  return root;
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
