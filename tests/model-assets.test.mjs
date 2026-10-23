import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const hash = buffer => createHash('sha256').update(buffer).digest('hex');
const normalize = recorded => recorded.replaceAll('\\', '/');
const evidenceIndex = JSON.parse(readFileSync(path.join(root, 'assets/provenance/evidence-index.json')));
assert.equal(evidenceIndex.schema_version, 1);
const archivedFiles = new Map(evidenceIndex.files.map(file => [file.path, file]));

function read(recorded) {
  assert.equal(typeof recorded, 'string');
  const key = normalize(recorded);
  // Original paths are evidence labels only. Always prefer the archive, even
  // when this workstation still has the original output or absolute path.
  const relative = evidenceIndex.paths[key] ?? key;
  assert.ok(!path.win32.isAbsolute(relative) && !path.posix.isAbsolute(relative),
    `Unmapped absolute evidence path: ${recorded}`);
  const segments = relative.split('/');
  assert.ok(segments[0] === 'assets' && !segments.some(part => part === '..' || part === '.'),
    `Evidence must resolve inside repository assets; output fallback is forbidden: ${recorded}`);
  if (evidenceIndex.paths[key]) assert.ok(archivedFiles.has(relative), 'Missing archive metadata');
  const data = readFileSync(path.join(root, ...segments));
  const archived = archivedFiles.get(relative);
  if (archived) {
    assert.equal(data.length, archived.bytes, `Archived length mismatch: ${relative}`);
    assert.equal(hash(data), archived.sha256, `Archived hash mismatch: ${relative}`);
  }
  const recordedHash = evidenceIndex.record_hashes[relative];
  if (recordedHash) assert.equal(hash(data), recordedHash, `Historical record changed: ${relative}`);
  return data;
}

const json = relative => JSON.parse(read(relative));
const manifest = json('assets/models/engineering-manifest.json');
const cubeName = name => /^cube(?:[.\s_-]|$)/i.test(name ?? '');
const budgets = {
  'compute-system.glb': {max_bytes: 3 * 1024 ** 2, max_triangles: 75000, max_nodes: 24},
  'accelerator.glb': {max_bytes: 2 * 1024 ** 2, max_triangles: 40000, max_nodes: 24},
  'learning-sculpture.glb': {max_bytes: 1024 ** 2, max_triangles: 35000, max_nodes: 4},
};

function parseGlb(relative) {
  const data = read(relative);
  assert.equal(data.toString('ascii', 0, 4), 'glTF');
  assert.equal(data.readUInt32LE(4), 2);
  assert.equal(data.readUInt32LE(8), data.length);
  const chunks = [];
  for (let offset = 12; offset < data.length;) {
    assert.ok(offset + 8 <= data.length, 'truncated chunk header');
    const length = data.readUInt32LE(offset);
    assert.equal(length % 4, 0);
    assert.ok(offset + 8 + length <= data.length, 'chunk outside GLB');
    chunks.push({type: data.readUInt32LE(offset + 4), data: data.subarray(offset + 8, offset + 8 + length)});
    offset += 8 + length;
  }
  assert.equal(chunks.length, 2);
  assert.equal(chunks[0].type, 0x4e4f534a);
  assert.equal(chunks[1].type, 0x004e4942);
  const doc = JSON.parse(chunks[0].data.toString('utf8').trim());
  const binary = chunks[1].data;
  assert.equal(doc.asset.version, '2.0');
  assert.equal(doc.buffers.length, 1);
  assert.ok(!doc.buffers[0].uri && doc.buffers[0].byteLength <= binary.length);
  assert.ok(!doc.images?.some(image => image.uri), 'external texture dependency');
  assert.ok(!doc.extensionsRequired?.length, 'unplanned decoder dependency');
  for (const view of doc.bufferViews) {
    assert.equal(view.buffer ?? 0, 0);
    assert.ok((view.byteOffset ?? 0) + view.byteLength <= doc.buffers[0].byteLength);
  }
  const types = {
    5120: [1, 'getInt8'], 5121: [1, 'getUint8'], 5122: [2, 'getInt16'],
    5123: [2, 'getUint16'], 5125: [4, 'getUint32'], 5126: [4, 'getFloat32'],
  };
  const widths = {SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16};
  const view = new DataView(binary.buffer, binary.byteOffset, binary.byteLength);
  const cache = new Map();
  function accessor(index) {
    if (cache.has(index)) return cache.get(index);
    const a = doc.accessors[index];
    assert.ok(a && !a.sparse && a.count > 0);
    const buffer = doc.bufferViews[a.bufferView];
    const [size, method] = types[a.componentType];
    const width = widths[a.type];
    assert.ok(width);
    const stride = buffer.byteStride ?? size * width;
    const start = (buffer.byteOffset ?? 0) + (a.byteOffset ?? 0);
    assert.ok(start + (a.count - 1) * stride + size * width <= (buffer.byteOffset ?? 0) + buffer.byteLength);
    const values = Array.from({length: a.count}, (_, i) => Array.from({length: width}, (_, j) => {
      const value = view[method](start + i * stride + j * size, true);
      assert.ok(Number.isFinite(value));
      return value;
    }));
    cache.set(index, values);
    return values;
  }
  let vertices = 0, triangles = 0, primitives = 0;
  for (const mesh of doc.meshes) {
    assert.ok(!cubeName(mesh.name));
    for (const p of mesh.primitives) {
      primitives++;
      assert.equal(p.mode ?? 4, 4);
      assert.ok(doc.materials[p.material]);
      const positions = accessor(p.attributes.POSITION);
      assert.equal(doc.accessors[p.attributes.POSITION].type, 'VEC3');
      const indices = accessor(p.indices).flat();
      assert.equal(indices.length % 3, 0);
      for (const i of indices) assert.ok(Number.isInteger(i) && i >= 0 && i < positions.length);
      const normal = accessor(p.attributes.NORMAL);
      assert.equal(normal.length, positions.length);
      for (const n of normal) assert.ok(Math.abs(Math.hypot(...n) - 1) < 0.01, 'invalid normal');
      vertices += positions.length;
      triangles += indices.length / 3;
    }
  }
  const parentCounts = Array(doc.nodes.length).fill(0);
  for (const node of doc.nodes) {
    assert.ok(!cubeName(node.name), 'unexpected startup Cube node');
    if (node.mesh !== undefined) assert.ok(doc.meshes[node.mesh]);
    for (const field of ['matrix', 'translation', 'rotation', 'scale']) {
      if (node[field]) assert.ok(node[field].every(Number.isFinite));
    }
    for (const child of node.children ?? []) {
      assert.ok(Number.isInteger(child) && child >= 0 && child < doc.nodes.length);
      assert.equal(++parentCounts[child], 1, 'multiple parents');
    }
  }
  const visited = new Set();
  function visit(index, ancestors = new Set()) {
    assert.ok(doc.nodes[index] && !ancestors.has(index), 'invalid/cyclic hierarchy');
    visited.add(index);
    for (const child of doc.nodes[index].children ?? []) visit(child, new Set([...ancestors, index]));
  }
  assert.ok(doc.scenes[doc.scene ?? 0].nodes.length);
  for (const index of doc.scenes[doc.scene ?? 0].nodes) visit(index);
  assert.equal(visited.size, doc.nodes.length, 'orphaned nodes');
  return {doc, data, binary, accessor, vertices, triangles, primitives};
}

for (const [name, budget] of Object.entries(budgets)) {
  test(`${name}: GLB buffers, indices, normals, hierarchy and recorded budgets`, () => {
    const actual = parseGlb(`assets/models/${name}`);
    const record = manifest.assets.find(asset => asset.file === name);
    assert.ok(record, 'missing manifest record');
    assert.equal(record.bytes, actual.data.length);
    assert.equal(record.sha256, hash(actual.data));
    assert.equal(record.nodes, actual.doc.nodes.length);
    assert.equal(record.meshes, actual.doc.meshes.length);
    assert.equal(record.materials, actual.doc.materials.length);
    assert.equal(record.vertices, actual.vertices);
    assert.equal(record.triangles, actual.triangles);
    assert.equal(record.primitives, actual.primitives);
    assert.deepEqual(record.budget, budget);
    assert.ok(actual.data.length <= budget.max_bytes);
    assert.ok(actual.triangles > 1000 && actual.triangles <= budget.max_triangles);
    assert.ok(actual.doc.nodes.length <= budget.max_nodes);
    assert.deepEqual(record.cube_nodes, []);
  });
}

test('engineering exports retain the six rack/board parts and five accelerator parts', () => {
  for (const [file, expected] of [
    ['compute-system.glb', ['board', 'cpu', 'gpu', 'memory', 'network', 'shell']],
    ['accelerator.glb', ['compute', 'fan', 'heatsink', 'pcb', 'vram']],
  ]) {
    const {doc} = parseGlb(`assets/models/${file}`);
    const groups = doc.nodes.filter(node => node.extras?.key);
    assert.deepEqual(groups.map(node => node.extras.key).sort(), expected);
    assert.equal(doc.meshes.length, expected.length);
    for (const group of groups) {
      assert.equal(group.children.length, 1);
      assert.ok(doc.nodes[group.children[0]].mesh !== undefined);
    }
  }
});

function parseBlend(relative) {
  const data = read(relative);
  // Blender 5.2 uses the extended 17-byte file header and 64-bit BHead lengths.
  assert.match(data.toString('ascii', 0, 17), /^BLENDER17-01v\d{4}$/);
  const blocks = [];
  let offset = 17;
  while (offset < data.length) {
    assert.ok(offset + 32 <= data.length, 'truncated BHead');
    const code = data.toString('ascii', offset, offset + 4).replace(/\0/g, '');
    const sdna = data.readUInt32LE(offset + 4);
    const length = Number(data.readBigUInt64LE(offset + 16));
    const count = Number(data.readBigUInt64LE(offset + 24));
    assert.ok(Number.isSafeInteger(length) && length >= 0 && offset + 32 + length <= data.length);
    blocks.push({code, sdna, count, data: data.subarray(offset + 32, offset + 32 + length)});
    offset += 32 + length;
    if (code === 'ENDB') break;
  }
  assert.equal(offset, data.length);
  assert.equal(blocks.at(-1).code, 'ENDB');
  assert.equal(blocks.filter(b => b.code === 'DNA1').length, 1);
  const dna = blocks.find(b => b.code === 'DNA1').data;
  let p = 0;
  function tag(value) { assert.equal(dna.toString('ascii', p, p + 4), value); p += 4; }
  function u32() { const n = dna.readUInt32LE(p); p += 4; return n; }
  function u16() { const n = dna.readUInt16LE(p); p += 2; return n; }
  function strings(n) {
    return Array.from({length: n}, () => {
      const end = dna.indexOf(0, p);
      assert.ok(end >= p);
      const value = dna.toString('utf8', p, end); p = end + 1; return value;
    });
  }
  const align = () => { p = (p + 3) & ~3; };
  tag('SDNA'); tag('NAME'); const names = strings(u32()); align();
  tag('TYPE'); const types = strings(u32()); align();
  tag('TLEN'); const lengths = Array.from({length: types.length}, u16); align();
  tag('STRC'); const structCount = u32();
  const structs = Array.from({length: structCount}, () => {
    const type = u16(), fields = u16();
    return {type: types[type], length: lengths[type], fields: Array.from({length: fields}, () => {
      const t = u16(), n = u16();
      return {type: types[t], length: lengths[t], name: names[n]};
    })};
  });
  for (const block of blocks) assert.ok(block.sdna < structs.length);
  const id = structs.find(s => s.type === 'ID');
  assert.ok(id);
  let nameOffset = 0, nameLength;
  for (const field of id.fields) {
    const arrayLength = [...field.name.matchAll(/\[(\d+)\]/g)].reduce((n, m) => n * Number(m[1]), 1);
    if (/^name\[/.test(field.name)) { nameLength = arrayLength; break; }
    nameOffset += (field.name.includes('*') ? 8 : field.length) * arrayLength;
  }
  assert.ok(nameLength > 0);
  function ids(code) {
    return blocks.filter(b => b.code === code).map(b => {
      assert.equal(b.count, 1);
      const structure = structs[b.sdna];
      assert.equal(structure.fields[0].type, 'ID');
      assert.ok(b.data.length >= structure.length);
      const end = b.data.indexOf(0, nameOffset);
      assert.ok(end > nameOffset && end < nameOffset + nameLength);
      const value = b.data.toString('utf8', nameOffset, end);
      assert.equal(value.slice(0, 2), code);
      return value.slice(2);
    });
  }
  return {data, blocks, ids};
}

test('task-only BLEND has valid BHeads/SDNA, actual scene/object IDs, and no startup Cube', () => {
  const source = manifest.source_blend;
  assert.ok(source, 'missing final task-only source');
  assert.ok(evidenceIndex.paths[normalize(source.file)], 'Task-only source must be archived');
  const parsed = parseBlend(source.file);
  assert.equal(source.bytes, parsed.data.length);
  assert.equal(source.sha256, hash(parsed.data));
  assert.ok(parsed.data.length <= 32 * 1024 ** 2);
  assert.deepEqual(parsed.ids('SC'), ['COL-AI-Museum-Engineering']);
  const objects = parsed.ids('OB');
  assert.equal(objects.length, source.objects);
  assert.ok(objects.length <= 1500);
  assert.equal(new Set(objects).size, objects.length);
  assert.ok(!objects.some(cubeName));
  assert.deepEqual(objects.sort(), [...source.object_names].sort());
  for (const [code, field] of [['ME', 'meshes'], ['CU', 'curves'], ['CA', 'cameras'], ['LA', 'lights']]) {
    assert.equal(parsed.blocks.filter(b => b.code === code).length, source[field]);
  }
  for (const rootName of ['GEO-match-assembly', 'GEO-accelerator-assembly']) assert.ok(objects.includes(rootName));
  assert.equal(source.evaluated_triangles, manifest.assets.filter(a => a.file !== 'learning-sculpture.glb').reduce((n, a) => n + a.triangles, 0));
  assert.ok(source.evaluated_triangles <= 250000);
});

test('initial Cube scene and original engineering/sculpture assets remain protected', () => {
  const preserved = manifest.preservation;
  assert.ok(preserved?.protected_files_unchanged);
  assert.equal(preserved.detail_phase_executed, false);
  assert.equal(preserved.geometry_recreated, false);
  assert.equal(preserved.active_scene_restored, true);
  assert.equal(preserved.other_scenes_unchanged.Scene, true);
  assert.equal(hash(read(preserved.original_source_file)), preserved.original_source_sha256);
});

test('sculpture remains one colored PBR object with Y-up bottom origin and closed topology', () => {
  const {doc, accessor, triangles} = parseGlb('assets/models/learning-sculpture.glb');
  assert.equal(doc.nodes.length, 1); assert.equal(doc.meshes.length, 1); assert.equal(doc.materials.length, 1);
  const primitive = doc.meshes[0].primitives[0];
  const points = accessor(primitive.attributes.POSITION);
  const colors = accessor(primitive.attributes.COLOR_0);
  assert.equal(colors.length, points.length);
  assert.ok(new Set(colors.map(c => c.slice(0, 3).join(','))).size > 100, 'missing continuous palette');
  assert.ok(Math.abs(doc.materials[0].pbrMetallicRoughness.metallicFactor - 0.28) < 1e-6);
  assert.ok(Math.abs(doc.materials[0].pbrMetallicRoughness.roughnessFactor - 0.28) < 1e-6);
  assert.equal(doc.images?.length ?? 0, 0);
  const positions = doc.accessors[primitive.attributes.POSITION];
  assert.ok(Math.abs(positions.min[1]) < 1e-6);
  assert.ok(Math.abs(positions.max[1] - 2.2) < 1e-5);
  assert.ok(Math.abs(positions.max[0] + positions.min[0]) < 1e-5);
  const indices = accessor(primitive.indices).flat();
  const edges = new Map();
  const adjacent = Array.from({length: points.length}, () => []);
  for (let i = 0; i < indices.length; i += 3) {
    const [a, b, c] = indices.slice(i, i + 3);
    assert.ok(a !== b && b !== c && c !== a);
    for (const [u, v] of [[a, b], [b, c], [c, a]]) {
      const key = u < v ? `${u},${v}` : `${v},${u}`;
      edges.set(key, (edges.get(key) ?? 0) + 1);
      adjacent[u].push(v); adjacent[v].push(u);
    }
  }
  assert.ok([...edges.values()].every(n => n === 2), 'open/non-manifold sculpture edges');
  const visited = new Set([0]), queue = [0];
  for (let i = 0; i < queue.length; i++) for (const n of adjacent[queue[i]]) if (!visited.has(n)) { visited.add(n); queue.push(n); }
  assert.equal(visited.size, points.length, 'sculpture is disconnected');
  assert.equal(triangles, 27998);
});

test('Comfy provenance verifies real local inference, input/workflow hashes and raw GLB metadata', () => {
  const p = json('assets/models/comfy-provenance.json');
  const record = manifest.sculpture_provenance;
  assert.equal(record.sha256, hash(read('assets/models/comfy-provenance.json')));
  assert.equal(record.bytes, read('assets/models/comfy-provenance.json').length);
  assert.equal(p.generator.model, 'hunyuan3d-dit-v2_fp16.safetensors');
  assert.equal(p.generator.endpoint, 'http://127.0.0.1:8188');
  assert.equal(p.generator.remote_services, false); assert.equal(p.generator.paid_services, false);
  assert.equal(p.reference.user_files_used, false);
  assert.equal(p.inference.seed, 2026102307);
  assert.equal(p.inference.status.status_str, 'success'); assert.equal(p.inference.status.completed, true);
  assert.ok(p.inference.status.messages.some(([event, d]) => event === 'execution_success' && d.prompt_id === p.inference.prompt_id));
  assert.equal(hash(read(p.reference.path)), p.reference.sha256);
  assert.equal(hash(read(p.inference.workflow)), p.inference.workflow_sha256);
  const rawData = read(p.inference.raw_glb);
  assert.equal(hash(rawData), p.inference.raw_sha256);
  const length = rawData.readUInt32LE(12);
  const rawDoc = JSON.parse(rawData.toString('utf8', 20, 20 + length));
  const executed = JSON.parse(rawDoc.asset.extras.prompt);
  assert.equal(executed['3'].is_changed[0], p.reference.sha256);
  assert.equal(executed['2'].inputs.ckpt_name, p.generator.model);
  assert.equal(executed['8'].inputs.seed, p.inference.seed);
  const graph = Object.fromEntries(Object.entries(executed).map(([id, n]) => [id, {class_type:n.class_type, inputs:n.inputs}]));
  assert.deepEqual(graph, json(p.inference.workflow));
  assert.equal(p.result.sha256, hash(read('assets/models/learning-sculpture.glb')));
  assert.equal(p.result.triangles, 27998);
  assert.ok(p.validation.visual_review && p.validation.visual_review !== 'pending');
  assert.equal(p.postprocess.geometry_replaced_with_procedural_design, false);
  assert.ok(p.limitations.some(s => /not.*scientific/i.test(s)));
});

test('persistent rack/accelerator PNG renders have recorded hashes and completed visual review', () => {
  assert.equal(manifest.renders.status, 'visually_reviewed');
  assert.ok(manifest.renders.visual_review);
  assert.equal(manifest.renders.renders.length, 2);
  for (const render of manifest.renders.renders) {
    assert.ok(evidenceIndex.paths[normalize(render.file)], 'Render must be archived');
    const png = read(render.file);
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(png.toString('ascii', 12, 16), 'IHDR');
    assert.equal(png.readUInt32BE(16), 1200); assert.equal(png.readUInt32BE(20), 900);
    assert.ok(png.length > 50000);
    assert.equal(render.bytes, png.length); assert.equal(render.sha256, hash(png));
  }
});
