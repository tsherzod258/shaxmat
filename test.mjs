import assert from 'node:assert/strict';
import {initial,legal,apply,check,outcome} from './engine.mjs';
function perft(s,d){return d?legal(s).reduce((n,m)=>n+perft(apply(s,m),d-1),0):1;}
assert.equal(perft(initial(),1),20);assert.equal(perft(initial(),2),400);assert.equal(perft(initial(),3),8902);
let s=initial();for(let [from,to] of [[53,45],[12,28],[54,38],[3,39]]){let m=legal(s).find(m=>m.from===from&&m.to===to);assert.ok(m);s=apply(s,m);}assert.equal(outcome(s).winner,'s');
let castle={...initial(),b:[...'r...k..r................................................R...K..R']};assert.equal(castle.b.length,64);assert.ok(legal(castle).some(m=>m.from===60&&m.to===62));let castled=apply(castle,{from:60,to:62});assert.equal(castled.b[61],'R');assert.equal(castled.b[63],'.');
let ep=initial();for(let [from,to]of [[52,36],[8,16],[36,28],[11,27]])ep=apply(ep,legal(ep).find(m=>m.from===from&&m.to===to));assert.ok(legal(ep).some(m=>m.from===28&&m.to===19));ep=apply(ep,{from:28,to:19});assert.equal(ep.b[27],'.');
let promotion={...initial(),b:Array(64).fill('.')};promotion.b[60]='K';promotion.b[4]='k';promotion.b[8]='P';assert.equal(legal(promotion).filter(m=>m.from===8&&m.to===0).length,4);
console.log('PASS: perft 20/400/8902, mot, rokirovka, en passant, promotion');

const {fees,settle}=await import('./economy.mjs');for(let fee of fees)for(let winner of ['g','s',null]){let u=[{id:'a',balance:1000000-fee}],g={mode:'bot',gold:'a',fee,result:{winner}};assert.equal(settle(g,u),true);assert.equal(u[0].balance,1000000-fee+(winner==='g'?fee*2:winner===null?fee:0));let balance=u[0].balance;assert.equal(settle(g,u),false);assert.equal(u[0].balance,balance);}for(let winner of ['g','s',null]){let u=[{id:'a',balance:990000},{id:'b',balance:990000}],g={mode:'multi',gold:'a',silver:'b',result:{winner}};settle(g,u);assert.equal(u[0].balance,winner==='g'?1010000:winner===null?1000000:990000);assert.equal(u[1].balance,winner==='s'?1010000:winner===null?1000000:990000);}console.log('PASS: barcha bot va multiplayer g‘alaba/durang/mag‘lubiyat to‘lovlari, bir martalik to‘lov');
