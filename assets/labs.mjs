import {softmax,convolve} from './science.mjs';
export const LABS=[
 {name:'通道分离',tag:'图像编码',goal:'分别查看红、绿、蓝三个通道，观察同一图像的数值组成。',hint:'依次点击三个颜色通道；合成图不计作独立通道。',layer:0},
 {name:'卷积扫描',tag:'局部感受野',goal:'把卷积窗口移到至少两个不同位置，比较输出响应。',hint:'移动下方滑条，或点击输入矩阵。至少扫描两个不同窗口。',layer:1},
 {name:'最大池化',tag:'响应保留',goal:'在这个局部窗口中，选出应被保留的最大值。',hint:'比较全部九个数值，最大值是 7；并非选择中心位置。',layer:2},
 {name:'张量展平',tag:'索引重排',goal:'执行一次展平，再判断元素数量是否发生改变。',hint:'展平只改变索引组织方式。先执行重排，再回答问题。',layer:8},
 {name:'权重调节',tag:'线性组合与整流',goal:'调节连接权重，让整流后的输出恰好变成 0。',hint:'先让加权和不大于 0。整流函数会把负值截断为 0。',layer:9},
 {name:'概率竞争',tag:'归一化分布',goal:'调节第一类分数，使其归一化概率达到 80% 或更高。',hint:'提高第一项分数，观察其余概率一起下降。分数不等于概率。',layer:12}
];
export function route(hash){const key=hash.replace(/^#/,'');return ['history','model','labs'].includes(key)?key:'history'}
export function createLab(){return {index:0,completed:[],channels:[],scans:[],flattened:false,weight:1,score:2,passed:false,feedback:'等待操作。'};}
const success=(s,msg)=>({...s,passed:true,completed:[...new Set([...s.completed,s.index])],feedback:msg});
export function act(state,event,value){let s={...state};if(event==='reset')return createLab();if(event==='retry')return {...createLab(),index:s.index,completed:s.completed.filter(i=>i!==s.index)};if(event==='next')return s.passed&&s.index<5?{...createLab(),index:s.index+1,completed:s.completed}:s;
 if(s.index===0&&event==='channel'&&['red','green','blue'].includes(value)){s.channels=[...new Set([...s.channels,value])];s.feedback=`已观察 ${s.channels.length} / 3 个通道。`;if(s.channels.length===3)return success(s,'通道分离完成。彩色图像由空间对齐的三个颜色通道组成。');}
 if(s.index===1&&event==='scan'&&Number.isInteger(value)&&value>=0&&value<=8){s.scans=[...new Set([...s.scans,value])];s.feedback=`已扫描 ${s.scans.length} 个不同窗口。`;if(s.scans.length>=2)return success(s,'卷积扫描完成。同一组权重在不同位置重复应用，输出随局部输入变化。');}
 if(s.index===2&&event==='pool'){s.feedback=value===7?'':'这个值不是局部最大值，请再次比较。';if(value===7)return success(s,'最大池化输出为 7。空间窗口缩小，局部最大响应被保留。');}
 if(s.index===3&&event==='flatten'){s.flattened=true;s.feedback='重排完成：2×3 张量 → 长度为 6 的向量。请判断元素数量。';}
 if(s.index===3&&event==='answer'){if(!s.flattened)s.feedback='请先执行展平，再判断。';else if(value==='same')return success(s,'展平完成。排列改变，但六个数值及其数量都未改变。');else s.feedback='注意：展平没有添加或删除数值，请再观察。';}
 if(s.index===4&&event==='weight'&&Number.isFinite(value)){s.weight=value;const z=convolve([.8,-.4,.6],[value,.5,-.2])+.1;s.feedback=`加权和 ${z.toFixed(3)} → 整流输出 ${Math.max(0,z).toFixed(3)}`;if(z<=0)return success(s,'输出归零：整流函数截断非正输入，而不是把连接权重全部清空。');}
 if(s.index===5&&event==='score'&&Number.isFinite(value)){s.score=value;const p=softmax([value,1,.4,-.1])[0];s.feedback=`第一类概率 ${(p*100).toFixed(1)}%，目标至少 80%。`;if(p>=.8)return success(s,'归一化实验完成。提高一个类别的分数，会改变所有类别的相对概率。');}
 return s;
}
