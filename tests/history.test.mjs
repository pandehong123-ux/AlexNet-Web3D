import test from 'node:test';import assert from 'node:assert/strict';
import {CHAPTERS,OBJECTS,chapterAt} from '../assets/history-data.mjs';
test('six substantive history chapters expose evidence and causal structure',()=>{assert.equal(CHAPTERS.length,6);for(const c of CHAPTERS){for(const k of ['question','method','limit','bridge'])assert.ok(c[k].length>=50,k);assert.ok(c.events.length>=3);assert.ok(c.sources.every(s=>s.url.startsWith('https://')));assert.ok(c.sources.length>=2);}});
test('history includes 1943, AI winters, MCTS, Fan Hui, and Lee Sedol',()=>{const t=JSON.stringify(CHAPTERS);for(const term of ['1943','低谷','蒙特卡洛','樊麾','李世石','2016'])assert.ok(t.includes(term),term);});
test('four distinct explanatory objects and chapter selection clamps',()=>{assert.equal(Object.keys(OBJECTS).length,4);assert.deepEqual(Object.values(OBJECTS).map(o=>o.mode),['neuron','rules','search','learning']);assert.equal(chapterAt(-1),0);assert.equal(chapterAt(99),5);});
