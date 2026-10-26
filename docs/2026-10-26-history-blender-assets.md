# 00 历史主展区 Blender 资产

本轮把 00 页的四组程序化原理装置改为 Blender 可编辑源文件，并导出为网页使用的 GLB。它们是解释“规则、搜索、学习与计算”关系的原创展陈模型，不是历史硬件复刻。

## 源文件与导出文件

| 类型 | 文件 |
| --- | --- |
| Blender 工程 | `assets/models/ai-museum-history-v001.blend` |
| 神经元与加权计算 | `assets/models/history-neuron-v001.glb` |
| 规则推理 | `assets/models/history-rules-v001.glb` |
| 搜索与评估 | `assets/models/history-search-v001.glb` |
| 深度学习闭环 | `assets/models/history-learning-v001.glb` |
| 可重复生成脚本 | `tools/blender/build_history_exhibits.py` |

每组 GLB 都保留独立的部件父级，并在对象上写入 `extras.key`。网页加载器会把 Blender 的展品根节点解包为可选择部件，同时把信号总线和反馈管路作为辅助对象保留，因此拆解时不会把线路焊接到某一个零件里。

## 细节层级

- 框架：底板、导轨、立柱、固定脚、紧固件与透明观察舱边框。
- 电路：铜色和金色走线、过孔、芯片小块、接点、连接器和针脚。
- 计算模块：封装、散热底座、鳍片、并行阵列节点与发光信号。
- 关系结构：规则总线、搜索树分支、评估回传、前向通路、梯度反馈与参数更新路径。
- 材质：深蓝陶瓷、青蓝金属、薄荷信号、紫色逻辑、金色触点和半透明观察边框。

## 重新生成

在项目根目录运行：

```powershell
& 'D:\blender\blender.exe' --background --factory-startup --threads 6 `
  --python-exit-code 1 --python 'tools\blender\build_history_exhibits.py'
npm run build
```

脚本不会读取或覆盖此前的 01、04 动画工程；它只重建 `ai-museum-history-v001.blend` 和四个 `history-*.glb`。生成时还会保存 `output/history-blender/history-overview.png` 作为快速检查图。

## 网页拆解

00 页的 `assets/engineering-models.mjs` 会加载四个 GLB，`assets/exhibit-details.mjs` 定义部件档案，`assets/museum-scene.mjs` 负责拆解、360°旋转、点击高亮、单件检视和信号管路显示。重新生成 GLB 后必须重新运行 `npm run build`，因为项目把 GLB 嵌入离线 `script.js`。

## 验证

- `npm test`：73/73 通过。
- `tests/history-browser.cjs`：历史章节、四组 GLB、拆解、恢复、移动端布局均通过。
- `tests/engineering-browser.cjs`：01、04 的现有 Blender 资产与拆解、旋转、单件检视回归通过。
