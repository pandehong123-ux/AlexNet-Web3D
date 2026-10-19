export const STAGE_SECONDS=1.65;
export const DURATION=13*STAGE_SECONDS;
export function softmax(values){if(!values.length||!values.every(Number.isFinite))throw new Error('分数必须是有限数值');const m=Math.max(...values),e=values.map(v=>Math.exp(v-m)),sum=e.reduce((a,b)=>a+b,0);return e.map(v=>v/sum);}
export function convolve(values,kernel){if(values.length!==kernel.length)throw new Error('窗口与卷积核尺寸不符');return values.reduce((a,v,i)=>a+v*kernel[i],0);}
export function pool(values){return Math.max(...values);}
export function flatten(values){return values.flat(Infinity);}
export function playback(){return {time:0,running:false,paused:false,complete:false,speed:1};}
export function stageSample(time){const pos=Math.max(0,Math.min(13,time/STAGE_SECONDS));return {index:Math.min(12,Math.floor(pos)),local:pos>=13?1:pos%1,progress:pos/13};}
export function advance(s,action,value){switch(action){case 'run':return {...playback(),running:true,speed:s.speed};case 'pause':return s.running?{...s,paused:!s.paused}:s;case 'speed':return {...s,speed:[.5,1,2].includes(value)?value:s.speed};case 'step':{const next=Math.min(13,(Math.floor(s.time/STAGE_SECONDS+1e-8)+1));return {...s,time:next*STAGE_SECONDS,running:next<13,paused:next<13,complete:next===13};}case 'tick':{if(!s.running||s.paused)return s;const time=Math.min(DURATION,s.time+Math.max(0,value)*s.speed);return {...s,time,running:time<DURATION,complete:time>=DURATION};}case 'reset':return playback();default:return s;}}
