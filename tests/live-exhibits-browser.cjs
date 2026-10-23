const {chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:1050},deviceScaleFactor:1});
 const report={checks:[],errors:[],renderer:'Edge SwiftShader; functional validation only'},dir=path.resolve(__dirname,'../output/live-browser');fs.mkdirSync(dir,{recursive:true});
 const check=(name,ok)=>{report.checks.push({name,passed:!!ok});if(!ok)throw Error(name);};
 page.on('pageerror',e=>report.errors.push(e.message));page.on('console',m=>{if(m.type()==='error'||m.text().includes('No target node found'))report.errors.push(m.text());});
 const ready=host=>page.waitForFunction(id=>{const host=document.querySelector('#'+id);return host?.dataset.modelReady==='true'&&host.checkVisibility()&&host.querySelector('canvas');},host);
 const snap=host=>page.locator('#'+host+' canvas').evaluate(c=>c.getExhibitSnapshot());
 async function moving(host,name,rotors){
  await ready(host);await page.locator('#'+host).scrollIntoViewIfNeeded();await page.waitForTimeout(250);
  const a=await snap(host);await page.waitForTimeout(400);const b=await snap(host);
  check(name+'运转时钟前进',b.motion.time>a.motion.time);check(name+'局部信号移动',JSON.stringify(a.motion.samples)!==JSON.stringify(b.motion.samples));
  if(rotors){check(name+'独立转子数量',b.motion.rotors.length===rotors);check(name+'风扇旋转',b.motion.rotors.every((r,i)=>JSON.stringify(r.rotation)!==JSON.stringify(a.motion.rotors[i].rotation)));check(name+'转子轴心固定',b.motion.rotors.every((r,i)=>JSON.stringify(r.position)===JSON.stringify(a.motion.rotors[i].position)));if(name.startsWith('01')||name.includes('gpu'))check(name+'存在独立静态外框',b.motion.frames.length>0);check(name+'静态外框不转',JSON.stringify(a.motion.frames)===JSON.stringify(b.motion.frames));}
  await page.locator('#'+host+'-motion-toggle').click();const paused=await snap(host);await page.waitForTimeout(350);const still=await snap(host);
  check(name+'暂停冻结全部运行',JSON.stringify(paused.motion)===JSON.stringify(still.motion));
  await page.locator('#'+host+'-motion-toggle').click();await page.waitForTimeout(200);check(name+'可恢复运转',(await snap(host)).motion.time>still.motion.time);
 }
 try{
  await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href+'#origins');
  for(const mode of ['neuron','rules','search','learning']){
   await page.locator(`[data-object="${mode}"]`).click();await moving('history-scene','00 '+mode,mode==='learning'?1:0);
   await page.locator('#historical-object').screenshot({path:path.join(dir,'00-'+mode+'.png')});
   check(mode+'精细模型',(await snap('history-scene')).triangles>15000);
  }
  await page.locator('#nav-match').click();await moving('match-scene','01 计算系统',2);
  for(let i=0;i<4;i++){await page.locator('#match-scene').screenshot({path:path.join(dir,'01-motion-'+i+'.png')});await page.waitForTimeout(90);}
  await page.locator('#machine-explode').click();await page.waitForFunction(()=>document.querySelector('#match-scene').dataset.spread==='expanded');await page.waitForTimeout(1600);
  const s=await snap('match-scene');check('01拆开后风扇仍独立',s.motion.rotors.length===2);
  check('01拆解运转无遮挡',s.bounds.every((a,i)=>s.bounds.slice(i+1).every(b=>a.right<=b.left||b.right<=a.left||a.bottom<=b.top||b.bottom<=a.top)));
  await page.locator('#match-scene').screenshot({path:path.join(dir,'01-expanded.png')});
  await page.locator('#nav-growth').click();
  for(const mode of ['gpu','training','selfplay']){
   await page.locator(`[data-growth="${mode}"]`).click();await moving('growth-scene','04 '+mode,mode==='gpu'?2:0);
   await page.locator('#growth-view .museum-exhibit').screenshot({path:path.join(dir,'04-'+mode+'.png')});
  }
  await page.locator('#nav-dimensions').click();await page.waitForFunction(()=>document.body.dataset.ready==='true');
  const network=()=>page.locator('#scene').evaluate(c=>c.getNetworkMotionSnapshot());
  const idle=await network();await page.waitForFunction(t=>document.querySelector('#scene').getNetworkMotionSnapshot().idleTime>t,idle.idleTime,{timeout:30000});check('03待机机制运转',(await network()).idleTime>idle.idleTime);
  await page.locator('#run').click();await page.waitForTimeout(800);await page.locator('#pause').click();
  const n1=await network();await page.waitForTimeout(400);const n2=await network();
  check('03暂停所有层的运转',JSON.stringify(n1.layers)===JSON.stringify(n2.layers));check('03数据流同步暂停',JSON.stringify(n1.flow)===JSON.stringify(n2.flow));
  await page.locator('#focus').click();await page.waitForFunction(()=>!document.querySelector('#scene').getNetworkMotionSnapshot().flowVisible);
  check('03暂停后聚焦隐藏全局粒子',!(await network()).flowVisible);
  await page.locator('#home').click();await page.waitForFunction(()=>document.querySelector('#scene').getNetworkMotionSnapshot().flowVisible);
  check('03暂停时回到全景恢复原有粒子',(await network()).flowVisible);
  await page.locator('#pause').click();await page.waitForTimeout(400);check('03恢复前向传播',(await network()).time>n2.time);
  await page.locator('#viewport').screenshot({path:path.join(dir,'03-network.png')});
  await page.setViewportSize({width:390,height:844});await page.locator('#nav-match').click();await ready('match-scene');
  const hidden=await network();await page.waitForTimeout(200);check('离开03后停止后台传播',(await network()).time===hidden.time);
  check('移动端运转控件可见',await page.locator('#match-scene-motion-toggle').isVisible());check('移动端无横向溢出',await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('#match-view .museum-exhibit').screenshot({path:path.join(dir,'01-mobile.png')});
  const reduced=await browser.newPage({viewport:{width:1280,height:900},reducedMotion:'reduce'});
  reduced.on('pageerror',e=>report.errors.push(e.message));await reduced.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href+'#match');
  await reduced.waitForFunction(()=>document.querySelector('#match-scene').dataset.modelReady==='true');
  const r1=await reduced.locator('#match-scene canvas').evaluate(c=>c.getExhibitSnapshot());await reduced.waitForTimeout(300);const r2=await reduced.locator('#match-scene canvas').evaluate(c=>c.getExhibitSnapshot());
  check('减少动态效果时风扇静止',JSON.stringify(r1.motion)===JSON.stringify(r2.motion)&&r2.motion.reduced);await reduced.close();
 }catch(e){report.failure=e.stack;}finally{fs.writeFileSync(path.join(dir,'qa.json'),JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify(report));if(report.failure||report.errors.length)process.exitCode=1;}
})();
