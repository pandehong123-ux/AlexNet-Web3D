const {chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const root=path.resolve(__dirname,'..'),out=path.join(root,'output/lifecycle-fixture');fs.mkdirSync(out,{recursive:true});
 const {build}=await import('esbuild');
 await build({absWorkingDir:root,stdin:{contents:"import {createMuseumScene} from './assets/museum-scene.mjs';import {mountMuseumWalk} from './assets/museum-walk.mjs';window.fixture={createMuseumScene,mountMuseumWalk};",resolveDir:root},bundle:true,outfile:path.join(out,'fixture.js'),format:'iife',loader:{'.glb':'binary'},logLevel:'silent'});
 fs.writeFileSync(path.join(out,'index.html'),'<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="../../walk.css"><style>.host{width:576px;height:800px}canvas{width:100%;height:100%}</style><nav class="main-nav"></nav><div class="host" id="gpu"></div><div class="host" id="match"></div><script src="fixture.js"></script>');
 const browser=await chromium.launch({headless:true,channel:'msedge',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1200,height:1000}}),report={checks:[],errors:[]};
 page.on('pageerror',e=>report.errors.push(e.message));
 const check=(name,ok)=>{report.checks.push({name,passed:!!ok});if(!ok)throw Error(name);};
 try{
  await page.goto(pathToFileURL(path.join(out,'index.html')).href);
  const race=await page.evaluate(async()=>{
   window.picks=[];window.exhibit=fixture.createMuseumScene((key,mode)=>picks.push({key,mode}));
   const gpu=document.querySelector('#gpu'),match=document.querySelector('#match');
   await exhibit.show(gpu,'gpu');
   const pending=exhibit.show(match,'match');const returning=exhibit.show(gpu,'gpu');
   await Promise.all([pending,returning]);exhibit.select('compute');
   return {snapshot:gpu.querySelector('canvas').getExhibitSnapshot(),pick:picks.at(-1),count:gpu.querySelectorAll('[data-model-part]').length};
  });
  check('快速回到缓存模型不串模式',race.snapshot.mode==='gpu'&&race.pick.mode==='gpu'&&race.count===5);
  await page.evaluate(()=>exhibit.show(document.querySelector('#match'),'match'));
  await page.waitForFunction(()=>document.querySelector('#match canvas').getExhibitSnapshot().bounds.length===6);
  const initial=await page.locator('#match canvas').evaluate(c=>c.getExhibitSnapshot());check('窄画幅初始缩放',initial.zoom===.7);
  await page.evaluate(()=>exhibit.explode());await page.waitForFunction(()=>document.querySelector('#match').dataset.spread==='expanded');
  await page.evaluate(()=>exhibit.explode());await page.waitForFunction(()=>document.querySelector('#match').dataset.spread==='assembled');await page.waitForTimeout(1400);
  const restored=await page.locator('#match canvas').evaluate(c=>c.getExhibitSnapshot());check('固定尺寸窄画幅收拢恢复缩放',restored.zoom===.7&&restored.bounds.every(b=>b.left>=0&&b.right<=576&&b.top>=0&&b.bottom<=800));
  const lifecycle=await page.evaluate(async()=>{
   window.notifications=[];document.addEventListener('museum-walk-state',e=>notifications.push(e.detail.open));
   const walk=fixture.mountMuseumWalk({navigate(){}});await walk.open();walk.destroy();exhibit.dispose();
   await new Promise(resolve=>setTimeout(resolve,100));return {flag:document.body.dataset.walkOpen,events:notifications,dialogs:document.querySelectorAll('#museum-walk').length};
  });
  check('销毁已打开大厅清理全站暂停标记',lifecycle.flag===undefined&&lifecycle.dialogs===0&&JSON.stringify(lifecycle.events)==='[true,false]');
 }catch(error){report.failure=error.stack;}
 finally{fs.writeFileSync(path.join(root,'output/lifecycle-qa.json'),JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify(report));if(report.failure||report.errors.length)process.exitCode=1;}
})();
