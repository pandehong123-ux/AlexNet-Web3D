import test from 'node:test';
import assert from 'node:assert/strict';
import {PART_CATALOG,partDetail,GAME_STORIES,GROWTH_GUIDES,growthSupplement,matchSupplement} from '../assets/exhibit-details.mjs';
test('each exhibit has unique, meaningful component explanations',()=>{
  assert.equal(PART_CATALOG.match.length,6);
  for(const [mode,parts] of Object.entries(PART_CATALOG)){
    assert.ok(parts.length>=5);
    assert.equal(new Set(parts.map(p=>p.key)).size,parts.length);
    for(const p of parts){
      for(const field of ['name','role','mechanism','input','output','observe','relation'])assert.ok(p[field].length>=4,`${mode}/${p.key}/${field}`);
      const html=partDetail(mode,p.key);
      for(const text of [p.name,p.mechanism,p.input,p.output])assert.ok(html.includes(text));
    }
  }
  assert.equal(partDetail('gpu','missing'),'');
  assert.equal(partDetail('neuron','cpu'),'');
});
test('each growth mode has its own full learning path',()=>{
  for(const [mode,g] of Object.entries(GROWTH_GUIDES)){
    assert.equal(g.steps.length,4);assert.equal(g.cards.length,3);
    const html=growthSupplement(mode);assert.ok(html.includes(g.title));
    assert.ok(html.includes('训练、搜索与评估'));assert.ok(html.length>1100);
  }
  assert.equal(GAME_STORIES.length,5);
  assert.ok(GAME_STORIES[3].join('').includes('第78手'));
  assert.ok(matchSupplement().includes('2017'));
});
