import test from 'node:test';
import assert from 'node:assert/strict';
import {BoxGeometry, Group, Mesh, MeshBasicMaterial, PerspectiveCamera, Vector3} from 'three';
import {createExhibitLayout, planExhibitCells} from '../assets/exhibit-layout.mjs';

test('exhibit cells separate actual projected bounds across desktop and mobile rotations', () => {
  const groups = [[3.7,5.8,4],[3.1,.9,3.4],[3.1,1.1,3.4],[3.1,.85,3.4],[3.1,.7,3.4],[5.8,.65,5.8]].map((size,index) => {
    const group = new Group();
    group.userData.key = 'part-' + index;
    group.position.set(-3,index,0);
    group.add(new Mesh(new BoxGeometry(...size), new MeshBasicMaterial()));
    return group;
  });
  const controller = createExhibitLayout();
  controller.measure(groups);
  for (const aspect of [.72,1,1.6,2.0]) for (const azimuth of [0,.5,1.4,2.8,4.8]) for (const elevation of [.3,.75,1.25]) {
    const camera = new PerspectiveCamera(36,aspect,.1,300);
    const target = new Vector3();
    const direction = new Vector3(Math.sin(azimuth)*Math.cos(elevation),Math.sin(elevation),Math.cos(azimuth)*Math.cos(elevation));
    camera.position.copy(direction).multiplyScalar(40);
    camera.lookAt(target);
    controller.update(camera,target,1,null);
    camera.position.copy(direction).multiplyScalar(controller.distance(camera,null));
    camera.lookAt(target);
    controller.update(camera,target,1,null);
    const rectangles = controller.projection(camera,800*aspect,800);
    for (const rectangle of rectangles) {
      assert.ok(rectangle.left>=0 && rectangle.top>=0 && rectangle.right<=800*aspect && rectangle.bottom<=800, JSON.stringify({aspect,azimuth,elevation,rectangle}));
      for (const other of rectangles) {
        if (other.key===rectangle.key) continue;
        const overlap=Math.min(rectangle.right,other.right)-Math.max(rectangle.left,other.left)>0 && Math.min(rectangle.bottom,other.bottom)-Math.max(rectangle.top,other.top)>0;
        assert.equal(overlap,false,JSON.stringify({aspect,azimuth,elevation,rectangle,other}));
      }
    }
  }
  groups.forEach(group=>{group.children[0].geometry.dispose();group.children[0].material.dispose();});
});

test('empty plans and single-part inspection remain valid', () => {
  assert.deepEqual(planExhibitCells([],1),{cells:[],width:0,height:0});
  const visible = new Group();visible.userData.key='selected';visible.add(new Mesh(new BoxGeometry(4,2,3)));
  const hidden = new Group();hidden.userData.key='other';hidden.add(new Mesh(new BoxGeometry(2,2,2)));
  const controller=createExhibitLayout();controller.measure([visible,hidden]);
  const camera=new PerspectiveCamera(36,1,.1,200);camera.position.set(10,10,20);camera.lookAt(0,0,0);
  controller.update(camera,new Vector3(),1,'selected');assert.equal(visible.visible,true);assert.equal(hidden.visible,false);
  controller.update(camera,new Vector3(),1,null);assert.equal(hidden.visible,true);
});
