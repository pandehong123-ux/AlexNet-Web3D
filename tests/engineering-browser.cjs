const {chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:1080},deviceScaleFactor:1});
 const report={checks:[],errors:[],renderer:'Edge SwiftShader; geometry and interaction validation, not hardware performance'};
 page.on('pageerror',e=>report.errors.push(e.message));
 const check=(name,ok)=>{report.checks.push({name,passed:!!ok});if(!ok)throw Error(name);};
 const go=async id=>{await page.locator('#nav-'+id).click();await page.locator('#'+id+'-view').waitFor({state:'visible'});};
 const ready=host=>page.waitForFunction(id=>document.querySelector('#'+id)?.dataset.modelReady==='true',host);
 const snapshot=host=>page.locator('#'+host+' canvas').evaluate(c=>c.getExhibitSnapshot());
 async function verifyBounds(host,count,label){
  await page.waitForFunction(id=>document.querySelector('#'+id)?.dataset.spread==='expanded',host);
  await page.waitForTimeout(1600);
  const s=await snapshot(host),rect=await page.locator('#'+host).boundingBox();
  check(label+'部件数量',s.bounds.length===count);
  check(label+'所有部件完整入画',s.bounds.every(b=>b.left>=0&&b.top>=0&&b.right<=rect.width&&b.bottom<=rect.height));
  for(let i=0;i<s.bounds.length;i++)for(let j=i+1;j<s.bounds.length;j++){
   const a=s.bounds[i],b=s.bounds[j];
   check(label+'投影不重叠 '+a.key+'/'+b.key,a.right<=b.left||b.right<=a.left||a.bottom<=b.top||b.bottom<=a.top);
  }
  return s;
 }
 try{
  await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href+'#match');
  await ready('match-scene');
  check('01真实Blender资产加载',await page.locator('#match-scene').getAttribute('data-model-source')==='blender');
  await page.locator('#match-view .museum-exhibit').screenshot({path:path.resolve(__dirname,'../output/engineering-assembled.png')});
  const {PART_CATALOG}=await import('../assets/exhibit-details.mjs');
  for(const mode of ['match','gpu','training','selfplay']){
   if(mode!=='match'){await go('growth');await page.locator(`[data-growth="${mode}"]`).click();}
   const host=mode==='match'?'match-scene':'growth-scene',prefix=mode==='match'?'hardware':'growth',toggle=mode==='match'?'machine-explode':'growth-explode';
   await ready(host);await page.locator('#'+toggle).click();
   await verifyBounds(host,PART_CATALOG[mode].length,mode);
   for(const row of PART_CATALOG[mode]){
    await page.locator(`#${host} [data-model-part="${row.key}"]`).click();
    check(mode+'空间标记点击 '+row.key,await page.locator('#'+prefix+'-info').getAttribute('data-part')===row.key);
   }
   // Use projected geometry, rather than hard-coded screen coordinates, to test actual ray picking.
   const geometryBounds=(await snapshot(host)).bounds[1];
   await page.locator('#'+host+' .part-hotspots').evaluate(el=>el.style.visibility='hidden');
   await page.locator('#'+host+' canvas').scrollIntoViewIfNeeded();
   const canvasRect=await page.locator('#'+host+' canvas').boundingBox();let picked=false;
   for(const u of [.5,.3,.7]){for(const v of [.5,.3,.7]){
    await page.mouse.click(canvasRect.x+geometryBounds.left+(geometryBounds.right-geometryBounds.left)*u,canvasRect.y+geometryBounds.top+(geometryBounds.bottom-geometryBounds.top)*v);
    if(await page.locator('#'+prefix+'-info').getAttribute('data-part')===geometryBounds.key){picked=true;break;}
   }if(picked)break;}
   check(mode+'真实网格点击联动说明',picked);
   await page.locator('#'+host+' .part-hotspots').evaluate(el=>el.style.visibility='');
   const canvas=page.locator('#'+host+' canvas');await canvas.scrollIntoViewIfNeeded();
   let r=await canvas.boundingBox();await page.mouse.move(r.x+r.width*.5,r.y+r.height*.5);await page.mouse.down();await page.mouse.move(r.x+r.width*.7,r.y+r.height*.65,{steps:12});await page.mouse.up();
   await verifyBounds(host,PART_CATALOG[mode].length,mode+'旋转后');
   await page.locator('#'+prefix+'-isolate').click();await page.waitForTimeout(1500);
   check(mode+'单件显示', (await snapshot(host)).bounds.length===1);
   const first=PART_CATALOG[mode][0].key;
   await page.locator(`#${prefix}-parts [data-part="${first}"]`).click();await page.waitForTimeout(500);
   check(mode+'单件切换同步',(await snapshot(host)).isolated===first&&(await snapshot(host)).bounds[0].key===first);
   await page.locator('#'+prefix+'-view-reset').click();await verifyBounds(host,PART_CATALOG[mode].length,mode+'整理后');
   await page.locator('#'+(mode==='match'?'match':'growth')+'-view .museum-exhibit').screenshot({path:path.resolve(__dirname,'../output/engineering-'+mode+'.png')});
   await page.locator('#'+toggle).click();await page.waitForTimeout(1700);
   await page.waitForFunction(id=>document.querySelector('#'+id)?.dataset.spread==='assembled',host);
   check(mode+'恢复完整模型',(await snapshot(host)).spread<.01&&(await snapshot(host)).bounds.length===PART_CATALOG[mode].length);
  }
  await page.setViewportSize({width:390,height:844});
  for(const id of ['match','growth']){
   await go(id);if(id==='growth')await page.locator('[data-growth="gpu"]').click();
   await ready(id+'-scene');await page.locator(id==='match'?'#machine-explode':'#growth-explode').click();
   await verifyBounds(id+'-scene',id==='match'?6:5,'手机'+id);
   check('手机无横向溢出 '+id,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await page.locator('#'+id+'-scene').screenshot({path:path.resolve(__dirname,'../output/engineering-mobile-'+id+'.png')});
  }
 }catch(error){report.failure=error.stack;await page.screenshot({path:path.resolve(__dirname,'../output/engineering-failure.png')}).catch(()=>{});}
 finally{fs.writeFileSync(path.resolve(__dirname,'../output/engineering-qa.json'),JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify(report));if(report.failure||report.errors.length)process.exitCode=1;}
})();
