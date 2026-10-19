const layer=(id,name,cn,type,shape,desc,features,detail,kernel='—')=>({id,name,cn,type,shape,desc,features,detail,kernel,units:shape[2]||shape[0]});
export const LAYERS=[
layer('input','INPUT','一张图像，旅程的开始','input',[227,227,3],'计算机看不到“狗”，它首先接收的是红、绿、蓝三个通道的像素数值。',['RGB 三通道','像素 → 数值'],'这里用程序绘制的犬类示意图作为输入，不上传图片，也不进行真实识别。'),
layer('conv1','CONV1','先看见边缘','conv',[55,55,96],'第一层卷积像一组小型视觉探测器，在图像上滑动，寻找最基础的视觉线索。',['边缘与方向','色彩对比','简单纹理'],'96 个卷积核形成 96 张特征图。随后使用 ReLU；原网络还在此阶段使用局部响应归一化 LRN。','11 × 11 / 步长 4'),
layer('pool1','POOL1','保留重要的，缩小其余','pool',[27,27,96],'池化降低特征图的空间尺寸，在局部区域保留最强的响应。',['最大池化','空间压缩'],'使用重叠最大池化：窗口 3×3，步长 2。通道数仍为 96，而宽、高从 55 降到 27。','3 × 3 / 步长 2'),
layer('conv2','CONV2','从线条走向纹理','conv',[27,27,256],'网络把前一层的简单线索组合起来，开始响应纹理和局部图案。',['重复纹理','局部图案'],'256 个输出通道。原始模型在双 GPU 间采用分组连接；卷积后接 ReLU 与 LRN。','5 × 5 / 步长 1'),
layer('pool2','POOL2','更紧凑的视觉摘要','pool',[13,13,256],'再一次压缩空间信息，让后面的层关注更大范围内的视觉结构。',['保留强响应','降低计算量'],'最大池化窗口 3×3、步长 2。宽高由 27 降至 13，256 个通道保留。','3 × 3 / 步长 2'),
layer('conv3','CONV3','拼出更复杂的形状','conv',[13,13,384],'在更大的感受野中组合纹理和边缘，提取更复杂的局部形状。',['形状组合','更大感受野'],'384 个输出通道，卷积后使用 ReLU。这一层连接前一层全部通道，不是简单逐通道过滤。','3 × 3 / 步长 1'),
layer('conv4','CONV4','寻找有意义的组合','conv',[13,13,384],'更深的特征不再只是像素边缘，而是多个视觉线索的组合。',['部件式线索','层次化表示'],'384 个输出通道，原始实现采用分组连接。所谓“部件”是理解网络的直观比喻，并非每个通道都对应明确语义。','3 × 3 / 步长 1'),
layer('conv5','CONV5','形成高级视觉特征','conv',[13,13,256],'最后一组卷积整合之前的表示，为图像分类准备更抽象的视觉特征。',['高级特征','语义组合'],'256 个输出通道，卷积后接 ReLU，再进入最后一次最大池化。','3 × 3 / 步长 1'),
layer('pool5','POOL5','压缩为分类的原料','pool',[6,6,256],'将高级特征压缩为 6×6×256 的张量，再展平为 9,216 个数值。',['最后一次池化','展平为向量'],'展平只改变组织方式，不会自动生成新特征。这个向量接入第一个全连接层。','3 × 3 / 步长 2'),
layer('fc6','FC6','组合全局视觉证据','fc',[4096],'全连接层开始将前面提取出的视觉特征组合起来，用于最终分类。',['4,096 个神经元','ReLU · Dropout'],'每个单元接收展平后的特征。训练时使用 Dropout，降低过拟合；图中的节点是抽样示意，而非完整 4,096 个。'),
layer('fc7','FC7','进一步整合高级特征','fc',[4096],'第二个全连接层继续整合全局证据，形成有利于区分类别的表示。',['4,096 个神经元','全局特征组合'],'同样使用 ReLU，并在训练时应用 Dropout。层与层的连接权重由训练学习获得。'),
layer('fc8','FC8','映射到 1,000 个类别','fc',[1000],'最后一层将网络提取出的特征映射到 ImageNet 的 1,000 个类别。',['1,000 个类别分数','分类头'],'输出的是类别分数 logits，再经 Softmax 转为相对概率。狗是一个概念总类，并非这里与金毛并列的标准 ImageNet 类别。'),
layer('output','OUTPUT','从数值走向一个判断','output',[1000],'Softmax 将类别分数转换为概率分布。最高分的类别成为这次预测。',['Golden retriever','示意概率 78%'],'78% 是预设的动画演示数值，不是模型推理结果，也不表示已经校准的真实置信度。')];
export function layout(expanded){return LAYERS.map((_,i)=>(i-6)*(expanded?3.35:2.25));}
export function stageAt(progress){return Math.min(12,Math.max(0,Math.floor(Math.max(0,Math.min(1,progress))*13)));}
export function initialState(){return {expanded:false,selected:-1,running:false,complete:false};}
export function transition(s,action,value){switch(action){case 'expand':return {...s,expanded:!s.expanded};case 'select':return {...s,selected:Number.isInteger(value)&&value>=0&&value<13?value:s.selected};case 'run':return {...s,running:true,complete:false};case 'finish':return {...s,running:false,complete:true};case 'reset':return initialState();default:return s;}}
