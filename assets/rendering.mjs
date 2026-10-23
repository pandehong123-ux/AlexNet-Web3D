import * as T from 'three';
export const COLORS={input:0xd5ba97,conv:0x84b8ef,pool:0x78dbcb,fc:0xb8a1ed,output:0xe7bb89};
const unitBox=new T.BoxGeometry(1,1,1),edgeBox=new T.EdgesGeometry(unitBox),ball=new T.SphereGeometry(.055,7,5);
function tex(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t;}
export function imageTexture(channel='all'){return tex(384,384,c=>{c.fillStyle='#153047';c.fillRect(0,0,384,384);for(let y=0;y<12;y++)for(let x=0;x<12;x++){const v=Math.sin(x*.5)*Math.cos(y*.4);c.fillStyle=`rgb(${35+v*15},${66+v*20},${86+v*20})`;c.fillRect(x*32,y*32,31,31)}c.fillStyle='#d4b58a';c.beginPath();c.ellipse(195,310,110,130,0,0,7);c.fill();c.fillStyle='#96754d';c.beginPath();c.ellipse(115,184,39,88,.1,0,7);c.ellipse(275,184,39,88,-.1,0,7);c.fill();c.fillStyle='#e1c296';c.beginPath();c.ellipse(195,194,91,107,0,0,7);c.fill();c.fillStyle='#edd5ad';c.beginPath();c.ellipse(195,243,59,45,0,0,7);c.fill();c.fillStyle='#222c32';for(const x of [159,231]){c.beginPath();c.arc(x,191,7,0,7);c.fill()}c.beginPath();c.ellipse(195,232,14,10,0,0,7);c.fill();c.strokeStyle='#5d5244';c.lineWidth=2;c.beginPath();c.moveTo(195,242);c.lineTo(195,257);c.quadraticCurveTo(178,267,168,255);c.moveTo(195,257);c.quadraticCurveTo(210,267,222,255);c.stroke();if(channel!=='all'){const d=c.getImageData(0,0,384,384),idx=['red','green','blue'].indexOf(channel);for(let i=0;i<d.data.length;i+=4)for(let j=0;j<3;j++)if(j!==idx)d.data[i+j]*=.12;c.putImageData(d,0,0)}c.strokeStyle='#87bbcb';c.globalAlpha=.18;for(let j=0;j<=384;j+=24){c.beginPath();c.moveTo(j,0);c.lineTo(j,384);c.moveTo(0,j);c.lineTo(384,j);c.stroke()}});}
function feature(seed){return tex(128,128,c=>{c.fillStyle='#10263d';c.fillRect(0,0,128,128);for(let y=0;y<16;y++)for(let x=0;x<16;x++){const v=(Math.sin(x*.6+seed)*Math.cos(y*.55+seed)+1)/2;c.fillStyle=`rgba(141,204,239,${v*.8})`;c.fillRect(x*8,y*8,7,7)}c.strokeStyle='#bce6f1';c.globalAlpha=.5;c.lineWidth=1.5;for(let j=0;j<4;j++){c.beginPath();for(let x=0;x<128;x+=4){const y=25+j*23+Math.sin(x*.08+seed+j)*12;x?c.lineTo(x,y):c.moveTo(x,y)}c.stroke()}});}
function responseTexture(){return tex(128,128,c=>{const img=c.createImageData(128,128);for(let y=0;y<128;y++)for(let x=0;x<128;x++){const p=(y*128+x)*4;const v=Math.abs(Math.sin(x*.11)*Math.cos(y*.08));img.data[p]=105;img.data[p+1]=201;img.data[p+2]=222;img.data[p+3]=Math.round(v*160)}c.putImageData(img,0,0)});}
// All moving poses are derived from the caller's clock, never wall time or frame count.
const clamp = value => T.MathUtils.clamp(Number.isFinite(value) ? value : 0, 0, 1);
const phaseAt = value => ((value % 1) + 1) % 1;
const bell = value => Math.exp(-value * value * 18);

export function buildLayer(index, type) {
 const root = new T.Group(), body = new T.Group();
 root.add(body);
 const color = COLORS[type], materials = [], animate = [];
 const tint = new T.Color(color), cold = new T.Color(0x243d49), hot = new T.Color(0xc3efdf);
 const matrix = new T.Matrix4(), instanceColor = new T.Color();
 const mat = (col = color, options = {}) => {
  const material = new T.MeshStandardMaterial({color: col, metalness: .3, roughness: .43,
   emissive: col, emissiveIntensity: .12, ...options});
  materials.push(material); return material;
 };
 const basic = (col = color, opacity = .4) => new T.MeshBasicMaterial({color: col, transparent: true, opacity, depthWrite: false});
 const mesh = (geometry, material, point = [0, 0, 0], parent = body) => {
  const object = new T.Mesh(geometry, material);
  object.position.set(...point); object.castShadow = true; object.receiveShadow = true;
  parent.add(object); return object;
 };
 const box = (size, point, material = mat(), parent = body) => {
  const object = mesh(unitBox, material, point, parent); object.scale.set(...size);
  object.add(new T.LineSegments(edgeBox, new T.LineBasicMaterial({color, transparent: true, opacity: .22})));
  return object;
 };
 const line = (points, opacity = .25, col = color) => {
  const object = new T.Line(new T.BufferGeometry().setFromPoints(points.map(point => new T.Vector3(...point))),
   new T.LineBasicMaterial({color: col, transparent: true, opacity, depthWrite: false}));
  body.add(object); return object;
 };
 const dots = (points, radius = .05) => {
  const object = new T.InstancedMesh(ball, mat(color), points.length);
  object.instanceMatrix.setUsage(T.DynamicDrawUsage);
  object.frustumCulled = false; body.add(object);
  const update = (values, strength) => {
   for (let j = 0; j < points.length; j++) {
    const value = values[j], scale = radius / .055 * (.78 + value * .32);
    matrix.makeScale(scale, scale, scale); matrix.setPosition(...points[j]); object.setMatrixAt(j, matrix);
    instanceColor.copy(cold).lerp(tint, .3 + value * .35).lerp(hot, value * strength * .55);
    object.setColorAt(j, instanceColor);
   }
   object.instanceMatrix.needsUpdate = true; object.instanceColor.needsUpdate = true;
  };
  return {object, update};
 };
 const motion = {type, time: 0, phase: 0, strength: 0, reduced: false, samples: []};
 root.userData.motion = motion;
 box([1.8, .1, 3.3], [0, -2.35, 0], mat(0x142436, {emissiveIntensity: .01}));
 box([1.78, .023, .025], [0, -2.28, 1.66], basic(color, .65));
 // A single restrained response plane; no orbiting rings or whole-layer rotation.
 const response = mesh(new T.PlaneGeometry(2.6, 2.6),
  new T.MeshBasicMaterial({map: responseTexture(), color, transparent: true, opacity: .08,
   side: T.DoubleSide, blending: T.AdditiveBlending, depthWrite: false}), [.78, 0, 0]);
 response.rotation.y = Math.PI / 2;

 if (type === 'input') {
  const maps = ['red', 'green', 'blue'].map(imageTexture);
  for (let j = 0; j < 3; j++) {
   const plane = mesh(new T.PlaneGeometry(2.4, 2.8), mat(0xffffff, {map: maps[j],
    emissiveMap: maps[j], emissive: 0xffffff, transparent: true, opacity: .58,
    side: T.DoubleSide, depthWrite: false}), [(j - 1) * .25, 0, (j - 1) * .24]);
   plane.rotation.y = Math.PI / 2;
  }
  const map = imageTexture();
  root.userData.input = mesh(new T.PlaneGeometry(2.4, 2.8),
   mat(0xffffff, {map, emissiveMap: map, emissive: 0xffffff, side: T.DoubleSide}), [-.55, 0, .6]);
  root.userData.lastChannel = 'all';
  const scanner = mesh(new T.PlaneGeometry(2.36, .075), basic(0xc6ede1, .35), [-.55, 0, .615]);
  const channelDots = dots([[-.65, -1.65, -.7], [-.65, -1.65, 0], [-.65, -1.65, .7]], .065);
  for (let j = 0; j < 3; j++) line([[-.65, -1.65, (j - 1) * .7], [.7, -1.5, (j - 1) * .7]], .25);
  animate.push((phase, strength) => {
   scanner.position.y = 1.32 - phase * 2.64;
   scanner.material.opacity = .12 + strength * .35;
   motion.scanRow = Math.min(11, Math.floor(phase * 12));
   motion.samples = [0, 1, 2].map(j => .2 + bell(phase - (j + 1) / 4) * .8);
   channelDots.update(motion.samples, strength);
  });
 } else if (type === 'conv') {
  const size = index === 1 ? 3.7 : index === 3 ? 3.15 : 2.6;
  const panels = [];
  if (index === 1 || index === 3) {
   const panelMat = mat(color, {transparent: true, opacity: .10, depthWrite: false});
   for (let j = 0; j < 7; j++) {
    const x = (j - 3) * .14;
    box([.035, size, size], [x, 0, 0], panelMat);
    if (j % 2 === 0) {
     const plane = mesh(new T.PlaneGeometry(size * .94, size * .94),
      new T.MeshBasicMaterial({map: feature(index * 13 + j), transparent: true, opacity: .4,
       side: T.DoubleSide, depthWrite: false}), [x + .024, 0, 0]);
     plane.rotation.y = Math.PI / 2; panels.push(plane);
    }
   }
  }
  const scan = new T.Group(); body.add(scan);
  for (const y of [-.42, .42]) box([.06, .02, .86], [-.53, y, 0], basic(0xb6e4d8, .65), scan);
  for (const z of [-.42, .42]) box([.06, .86, .02], [-.53, 0, z], basic(0xb6e4d8, .65), scan);
  const kernel = box([.18, .45, .45], [-.86, 0, 0], mat(0x9dcfc4, {transparent: true, opacity: .32}));
  const count = index <= 3 ? 16 : 100;
  const points = Array.from({length: count}, (_, j) => count === 16
   ? [.84, (Math.floor(j / 4) - 1.5) * .48, (j % 4 - 1.5) * .48]
   : [.66 + (j % 5 - 2) * .16, (Math.floor(j / 5) % 5 - 2) * .37, (Math.floor(j / 25) - 1.5) * .4]);
  const cells = new T.InstancedMesh(unitBox, mat(color), count);
  cells.instanceMatrix.setUsage(T.DynamicDrawUsage); cells.frustumCulled = false; body.add(cells);
  animate.push((phase, strength) => {
   const slot = Math.floor(phase * 9), row = Math.floor(slot / 3), column = slot % 3;
   scan.position.set(0, (row - 1) * size * .24, (column - 1) * size * .24);
   kernel.position.set(-.86, scan.position.y, scan.position.z);
   motion.scanRow = row; motion.scanColumn = column; motion.samples = [];
   for (let j = 0; j < count; j++) {
    const front = count === 16 ? (Math.floor(j / 4) + j % 4) / 6 : (Math.floor(j / 5) % 5 + Math.floor(j / 25)) / 7;
    const value = .1 + .9 * bell(phase - front);
    const scale = (count === 16 ? .12 : .095) * (.7 + strength * value * .65);
    matrix.makeScale(scale, scale, scale); matrix.setPosition(...points[j]); cells.setMatrixAt(j, matrix);
    instanceColor.copy(cold).lerp(tint, .3 + value * .4).lerp(hot, value * strength * .5);
    cells.setColorAt(j, instanceColor); motion.samples.push(value);
   }
   cells.instanceMatrix.needsUpdate = true; cells.instanceColor.needsUpdate = true;
   panels.forEach((plane, j) => { plane.material.opacity = .22 + strength * (.12 + bell(phase - j / 4) * .14); });
  });
 } else if (type === 'pool') {
  const n = index === 8 ? 5 : 4, values = [], sources = [], outputs = [];
  for (let y = 0; y < n; y++) for (let z = 0; z < n; z++) {
   const value = (Math.sin(y * 1.2 + z * .6) + 1) / 2;
   values.push(value);
   sources.push(box([.23, .20 + value * .4, .23], [-.4, (y - (n - 1) / 2) * .45, (z - (n - 1) / 2) * .45],
    mat(color, {transparent: true, opacity: .55})));
  }
  for (let y = 0; y < 2; y++) for (let z = 0; z < 2; z++) {
   const point = [.65, (y - .5) * .8, (z - .5) * .8];
   outputs.push(box([.24, .24, .24], point, mat(0xc3ddd0)));
   line([[-.5, point[1] * 1.2, point[2] * 1.2], point], .22);
  }
  const scan = box([.035, 1.35, 1.35], [-.62, 0, 0],
   mat(0xa2ddd0, {transparent: true, opacity: .1, depthWrite: false}));
  let flatDots;
  const flatPoints = Array.from({length: 32}, (_, j) => [.95, (j % 8 - 3.5) * .22, (Math.floor(j / 8) - 1.5) * .25]);
  if (index === 8) flatDots = dots(flatPoints, .04);
  animate.push((phase, strength, local, reduced, experiment) => {
   const outputIndex = Math.min(3, Math.floor(phase * 4)), startY = Math.floor(outputIndex / 2) * (n - 3), startZ = outputIndex % 2 * (n - 3);
   const windowIndices = [];
   for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) windowIndices.push((startY + y) * n + startZ + z);
   const windowValues = windowIndices.map(j => values[j]), winnerValue = Math.max(...windowValues);
   const winner = windowIndices[windowValues.indexOf(winnerValue)];
   scan.position.y = (startY + 1 - (n - 1) / 2) * .45;
   scan.position.z = (startZ + 1 - (n - 1) / 2) * .45;
   sources.forEach((source, j) => {
    source.material.color.setHex(j === winner ? 0xc7e8cc : color);
    source.material.emissiveIntensity = j === winner ? .16 + strength * .55 : windowIndices.includes(j) ? .12 + strength * .12 : .06;
    source.material.opacity = windowIndices.includes(j) ? .75 : .35;
   });
   motion.samples = outputs.map((output, j) => {
    const sy = Math.floor(j / 2) * (n - 3), sz = j % 2 * (n - 3), sample = [];
    for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) sample.push(values[(sy + y) * n + sz + z]);
    const value = Math.max(...sample), boost = j === outputIndex ? strength : .05;
    output.material.emissiveIntensity = .12 + boost * .48;
    output.scale.set(.24, .24 + boost * .045, .24);
    return value;
   });
   Object.assign(motion, {outputIndex, winner, winnerValue, windowValues, windowIndices});
   if (flatDots) {
    const amount = experiment.flatten ? 1 : reduced ? 0 : strength > .65 ? Math.max(0, (local - .25) / .75) : 0;
    motion.flatten = clamp(amount);
    const object = flatDots.object;
    for (let j = 0; j < 32; j++) {
     const point = flatPoints[j];
     matrix.makeScale(.72, .72, .72);
     matrix.setPosition(.95, T.MathUtils.lerp(point[1], (j - 15.5) * .08, motion.flatten), T.MathUtils.lerp(point[2], 0, motion.flatten));
     object.setMatrixAt(j, matrix); object.setColorAt(j, tint);
    }
    object.instanceMatrix.needsUpdate = true; object.instanceColor.needsUpdate = true;
   }
  });
 } else if (type === 'fc' && index !== 11) {
  const planes = index === 9 ? 3 : 4, rows = 6, points = [], links = [], packetPaths = [];
  for (let p = 0; p < planes; p++) for (let y = 0; y < rows; y++) for (let z = 0; z < rows; z++) {
   const point = [(p - (planes - 1) / 2) * .43, (y - 2.5) * .42, (z - 2.5) * .42];
   points.push(point);
   if (p > 0) {
    const previous = [point[0] - .43, ((y * 3 + z) % 6 - 2.5) * .42, ((z * 2 + y) % 6 - 2.5) * .42];
    links.push(...previous, ...point);
    // Spread a sparse set of packets across every adjacent plane pair.
    if (y < rows / (planes - 1) && (y + z) % 2 === 0) packetPaths.push([previous, point]);
   }
  }
  const neurons = dots(points, .045);
  const linkGeo = new T.BufferGeometry(); linkGeo.setAttribute('position', new T.Float32BufferAttribute(links, 3));
  const connections = new T.LineSegments(linkGeo, new T.LineBasicMaterial({color, transparent: true, opacity: .15, depthWrite: false}));
  body.add(connections);
  const packets = dots(packetPaths.map(path => path[0]), .035);
  animate.push((phase, strength) => {
   const values = points.map((point, j) => .1 + .9 * bell(phase - Math.floor(j / 36) / (planes - 1)));
   neurons.update(values, strength); motion.samples = values;
   connections.material.opacity = .10 + strength * (.06 + .09 * Math.sin(phase * Math.PI));
   motion.aggregate = values.reduce((sum, value) => sum + value, 0) / values.length;
   for (let j = 0; j < packetPaths.length; j++) {
    const u = phaseAt(phase * 1.4 + j / packetPaths.length), [from, to] = packetPaths[j];
    matrix.makeScale(.55 + strength * .2, .55 + strength * .2, .55 + strength * .2);
    matrix.setPosition(T.MathUtils.lerp(from[0], to[0], u), T.MathUtils.lerp(from[1], to[1], u), T.MathUtils.lerp(from[2], to[2], u));
    packets.object.setMatrixAt(j, matrix); packets.object.setColorAt(j, hot);
   }
   packets.object.instanceMatrix.needsUpdate = true; packets.object.instanceColor.needsUpdate = true;
  });
 } else {
  const isOutput = type === 'output';
  const probabilities = [.63, .19, .11, .07], bars = [];
  const count = isOutput ? 4 : 12;
  for (let j = 0; j < count; j++) {
   const height = isOutput ? probabilities[j] * 3.7 : .25 + ((j * 7) % 13) / 7;
   const x = isOutput ? (j - 1.5) * .43 : (j % 3 - 1) * .32;
   const z = isOutput ? 0 : (Math.floor(j / 3) - 1.5) * .48;
   bars.push({height, object: box([isOutput ? .32 : .1, height, isOutput ? .5 : .14], [x, height / 2 - 1.3, z],
    mat(j === (isOutput ? 0 : 5) ? 0xe4c38e : color))});
  }
  const head = line([[-.9, -1.43, .38], [.9, -1.43, .38]], .3, 0xc6ba96);
  if (isOutput) root.userData.outputBars = true;
  animate.push((phase, strength, local, reduced) => {
   motion.samples = bars.map(({height, object}, j) => {
    const settle = reduced ? 1 : .88 + .12 * Math.sin(phase * Math.PI);
    // Preserve the relative output distribution; scale all four bars together.
    const factor = isOutput ? settle : .8 + .2 * bell(phase - j / count);
    object.scale.y = height * factor;
    object.position.y = height * factor / 2 - 1.3;
    object.material.emissiveIntensity = .09 + strength * (j === (isOutput ? 0 : 5) ? .48 : .16);
    return isOutput ? probabilities[j] : factor;
   });
   motion.settled = reduced ? 1 : .88 + .12 * Math.sin(phase * Math.PI);
   head.material.opacity = .18 + strength * .22;
  });
 }

 let previousTime, previousReduced, heldEnergy = .34, heldLocal = 0;
 root.userData.tick = (time, energy, local, reduced, experiment = {}) => {
  const clock = reduced ? 0 : Number.isFinite(time) ? time : 0;
  // app may still ease selection energy while playback is paused. Hold the visual
  // energy and progress whenever the supplied clock is unchanged.
  if (clock !== previousTime || Boolean(reduced) !== previousReduced) {
   heldEnergy = reduced ? .34 : clamp(energy);
   heldLocal = reduced ? 0 : clamp(local);
   previousTime = clock; previousReduced = Boolean(reduced);
  }
  const phase = reduced ? .36 : phaseAt(clock * .36 + index * .071);
  const strength = .14 + heldEnergy * .72;
  Object.assign(motion, {time: clock, phase, strength, reduced: Boolean(reduced)});
  for (const material of materials) {
   material.emissiveIntensity = .06 + strength * .23;
   material.envMapIntensity = .45;
  }
  response.material.opacity = reduced ? .035 : .025 + strength * bell(phase - .5) * .1;
  if (root.userData.input) {
   const channel = ['red', 'green', 'blue'].includes(experiment.channel) ? experiment.channel : 'all';
   if (root.userData.lastChannel !== channel) {
    const material = root.userData.input.material, map = imageTexture(channel);
    material.map.dispose(); material.map = map; material.emissiveMap = map;
    root.userData.lastChannel = channel;
   }
  }
  for (const update of animate) update(phase, strength, heldLocal, Boolean(reduced), experiment);
 };
 root.userData.tick(0, .34, 0, false);
 return root;
}

export function makeFlow(world, groups) {
 const beams = [], points = 144, position = new Float32Array(points * 3),
  color = new Float32Array(points * 3), trails = new Float32Array(points * 6);
 const packets = new T.BufferGeometry();
 packets.setAttribute('position', new T.BufferAttribute(position, 3));
 packets.setAttribute('color', new T.BufferAttribute(color, 3));
 const glow = tex(32, 32, context => {
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(232,255,250,1)');
  gradient.addColorStop(.2, 'rgba(150,233,224,.8)');
  gradient.addColorStop(1, 'rgba(80,180,210,0)');
  context.fillStyle = gradient; context.fillRect(0, 0, 32, 32);
 });
 const cloud = new T.Points(packets, new T.PointsMaterial({map: glow, size: .13, vertexColors: true,
  transparent: true, blending: T.AdditiveBlending, depthWrite: false, sizeAttenuation: true}));
 cloud.name = 'network-motion-packets'; cloud.frustumCulled = false; world.add(cloud);
 const trailGeo = new T.BufferGeometry();
 trailGeo.setAttribute('position', new T.BufferAttribute(trails, 3));
 const streaks = new T.LineSegments(trailGeo, new T.LineBasicMaterial({color: 0x91ccc0,
  transparent: true, opacity: .2, blending: T.AdditiveBlending, depthWrite: false}));
 streaks.name = 'network-motion-links'; streaks.frustumCulled = false; world.add(streaks);
 for (let i = 0; i < 12; i++) {
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(new Float32Array(12 * 16 * 6), 3));
  const line = new T.LineSegments(geometry, new T.LineBasicMaterial({color: i < 8 ? 0x5988aa : 0x9c88be,
   transparent: true, opacity: .1, depthWrite: false}));
  line.frustumCulled = false; world.add(line); beams.push(line);
 }
 function path(index, lane, u) {
  const a = groups[index].position.x + .65, b = groups[index + 1].position.x - .65;
  const angle = lane / 12 * Math.PI * 2, radius = T.MathUtils.lerp(.48 + index % 3 * .16, index >= 8 ? .34 : .54, u) + Math.sin(u * Math.PI) * .12;
  return [T.MathUtils.lerp(a, b, u), Math.cos(angle) * radius, Math.sin(angle) * radius];
 }
 const motion = {time: 0, index: 0, local: 0, running: false, reduced: false, packetCount: points};
 cloud.userData.motion = motion;
 return {motion, update(time, sample, running, paused, reduced, visible = true) {
  // Inspection visibility may change during pause; simulation buffers remain frozen.
  cloud.visible = streaks.visible = Boolean(running) && !reduced && visible;
  beams.forEach(beam => { beam.visible = visible; });
  if (paused) return;
  const index = reduced ? 0 : Math.max(0, Math.min(12, sample.index)), local = reduced ? .36 : clamp(sample.local);
  Object.assign(motion, {time: reduced ? 0 : time, index, local, running: Boolean(running), reduced: Boolean(reduced)});
  for (let i = 0; i < 12; i++) {
   const attribute = beams[i].geometry.attributes.position; let k = 0;
   for (let lane = 0; lane < 12; lane++) for (let j = 0; j < 16; j++) {
    attribute.setXYZ(k++, ...path(i, lane, j / 16));
    attribute.setXYZ(k++, ...path(i, lane, (j + 1) / 16));
   }
   attribute.needsUpdate = true;
   beams[i].material.opacity = !reduced && running && index === i ? .28 : .10;
  }
  if (!cloud.visible) return;
  const segment = Math.min(11, index), lead = index === 12 ? 1 : Math.max(0, (local - .08) / .84);
  for (let j = 0; j < points; j++) {
   const lane = j % 12, offset = Math.floor(j / 12) * .025, u = lead - offset;
   const visible = u >= 0 && u <= 1 && index < 12;
   const point = path(segment, lane, clamp(u)), previous = path(segment, lane, clamp(u - .02));
   position.set(point, j * 3);
   const fade = visible ? 1 - offset : 0; color.set([fade * .62, fade, fade * .85], j * 3);
   trails.set(point, j * 6); trails.set(visible ? previous : point, j * 6 + 3);
  }
  packets.attributes.position.needsUpdate = true; packets.attributes.color.needsUpdate = true;
  trailGeo.attributes.position.needsUpdate = true;
 }};
}
