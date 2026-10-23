import {Box3, Vector3} from 'three';

export function planExhibitCells(entries, aspect) {
  if (!entries.length) return {cells: [], width: 0, height: 0};
  const columns = aspect < 1.05 ? 2 : 3;
  const gap = .95;
  const rows = [];
  for (let offset = 0; offset < entries.length; offset += columns) {
    const items = entries.slice(offset, offset + columns);
    rows.push({items, width: items.reduce((sum, entry) => sum + entry.width, 0) + gap * (items.length - 1), height: Math.max(...items.map(entry => entry.height))});
  }
  const width = Math.max(...rows.map(row => row.width));
  const height = rows.reduce((sum, row) => sum + row.height, 0) + gap * (rows.length - 1);
  const cells = [];
  let top = height / 2;
  for (const row of rows) {
    let left = -row.width / 2;
    for (const item of row.items) {
      cells.push({key: item.key, x: left + item.width / 2, y: top - row.height / 2, width: item.width, height: item.height});
      left += item.width + gap;
    }
    top -= row.height + gap;
  }
  return {cells, width, height};
}

export function createExhibitLayout() {
  const bounds = new Box3();
  const right = new Vector3();
  const up = new Vector3();
  const view = new Vector3();
  const center = new Vector3();
  const extent = new Vector3();
  let measured = [];
  let layout = {cells: [], width: 0, height: 0};

  function measure(groups) {
    measured = groups.map(group => {
      group.updateWorldMatrix(true, true);
      bounds.setFromObject(group);
      const localCenter = bounds.getCenter(new Vector3()).sub(group.position);
      const size = bounds.getSize(new Vector3());
      return {group, key: group.userData.key, center: localCenter, size, base: group.position.clone()};
    });
  }

  function update(camera, target, amount, isolated) {
    camera.updateMatrixWorld();
    right.setFromMatrixColumn(camera.matrixWorld, 0).normalize();
    up.setFromMatrixColumn(camera.matrixWorld, 1).normalize();
    view.setFromMatrixColumn(camera.matrixWorld, 2).normalize();
    const entries = measured.map(entry => {
      extent.copy(entry.size).multiplyScalar(.5);
      const width = 2 * (Math.abs(right.x) * extent.x + Math.abs(right.y) * extent.y + Math.abs(right.z) * extent.z);
      const height = 2 * (Math.abs(up.x) * extent.x + Math.abs(up.y) * extent.y + Math.abs(up.z) * extent.z);
      return {...entry, width: width * 1.35 + .45, height: height * 1.35 + .45};
    });
    layout = planExhibitCells(entries, camera.aspect);
    layout.cells.forEach((cell, index) => {
      const entry = measured[index];
      center.copy(target).addScaledVector(right, cell.x).addScaledVector(up, cell.y).sub(entry.center);
      entry.group.position.lerpVectors(entry.base, center, amount);
      entry.group.visible = !isolated || entry.key === isolated;
    });
    if (isolated) {
      const entry = measured.find(item => item.key === isolated);
      if (entry) entry.group.position.copy(target).sub(entry.center);
    }
    return layout;
  }

  function distance(camera, isolated) {
    const entry = measured.find(item => item.key === isolated);
    const width = entry ? entry.size.length() * 1.25 : layout.width;
    const height = entry ? entry.size.length() * 1.25 : layout.height;
    const halfFov = camera.fov * Math.PI / 360;
    return Math.max(width / Math.max(camera.aspect, .1), height) / (2 * Math.tan(halfFov)) + 6;
  }

  function projection(camera, width, height) {
    camera.updateMatrixWorld();
    return measured.filter(entry => entry.group.visible).map(entry => {
      entry.group.updateWorldMatrix(true, true);
      bounds.setFromObject(entry.group);
      const screenBounds = {left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity};
      for (const xPosition of [bounds.min.x, bounds.max.x]) for (const yPosition of [bounds.min.y, bounds.max.y]) for (const zPosition of [bounds.min.z, bounds.max.z]) {
        center.set(xPosition, yPosition, zPosition).project(camera);
        const xScreen = (center.x + 1) * width / 2;
        const yScreen = (1 - center.y) * height / 2;
        screenBounds.left = Math.min(screenBounds.left, xScreen);
        screenBounds.right = Math.max(screenBounds.right, xScreen);
        screenBounds.top = Math.min(screenBounds.top, yScreen);
        screenBounds.bottom = Math.max(screenBounds.bottom, yScreen);
      }
      return {key: entry.key, ...screenBounds};
    });
  }

  return {measure, update, distance, projection};
}
