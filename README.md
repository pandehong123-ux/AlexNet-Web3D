# 2016：机器落下的一手

以阿尔法围棋与李世石的五番棋为主线的中文 Web 3D 科普展馆。将人工智能历史、计算硬件、学习与搜索、张量结构和动手实验连接成六个展区。

## 直接体验

用新版 Edge / Chrome 打开 **index.html**。Three.js、模型和样式均在本地，运行时无需 Blender、ComfyUI 或联网。

若设备策略限制本地网页，在此目录运行 `python -m http.server 8766 --bind 127.0.0.1`，然后访问 `http://127.0.0.1:8766/`。三维画布需要 WebGL 2。

## 六个展区

| 导航 | 内容与操作 |
| --- | --- |
| 00 崛起前夜 | 1943—2016 六章历史、20个事件、原始资料；四组历史原理模型与黑白到彩色叙事。 |
| 01 世纪对局 | 五局背景与4比1结果；Blender 制作的开放机架、处理器、加速模块、内存、互联、十九路棋盘。可旋转、缩放、拆解、点击查看部件档案。 |
| 02 决策之核 | 策略网络、价值网络、树搜索；逐步执行选择、扩展、评估和回传，观察先验、访问次数与均值。 |
| 03 维度解剖 | 十三阶段亚历克斯网络，数据流、暂停、单步、聚焦、拆解；图像/棋盘平面与通道切片对照。 |
| 04 成长系统 | 精细加速器五部件、反馈训练五阶段、自我对弈五部件；每部分提供原理、输入输出和系统关系说明。 |
| 05 实验与边界 | 六关真实局部数值实验；研究员、系统工程师、对局分析师三种角色，各有取证、判断、修正及三阶段复盘。 |

路由：`#origins`、`#match`、`#decision`、`#dimensions`、`#growth`、`#experiments`。兼容旧 `#history` / `#model` / `#labs` 链接。

顶部 **进入三维展馆** 打开可行走的六展台大厅，中央为本地 ComfyUI 真实生成的“学习之核”。使用 WASD / 方向键移动，拖动环视；手机使用屏幕方向按钮。点击实体标牌或展区目录进入相应内容，Esc 退出。

右下 **参观地图** 支持任意跳转、六站手动讲解与访问记录。角色和实验进度在当前页面会话保留；访问记录在浏览器允许时写入本地存储。没有儿童或亲子模式。

## 拆解与部件检视

01 与04点击“拆解”后，部件按相机方向分配独立区域，旋转时重新计算间距，机架与内部板卡完全分离。手机采用两列布局。

- 点击真实网格、空间编号或部件列表，同步更新档案及高亮。
- **单件检视**：隐藏其余部件并放大当前部件，可继续切换目标。
- **整理视图**：恢复观察角度并让当前展开结构完整入画。
- **恢复模型**：平滑返回装配状态。滚轮仍可自主缩放。

## 资产与复用

| 文件 | 用途 |
| --- | --- |
| assets/models/compute-system.glb | 六部件计算系统与棋盘；独立节点含稳定的 `extras.key`。 |
| assets/models/accelerator.glb | 底板、计算核心、显存、散热器、风扇五部件。 |
| assets/models/ai-museum-engineering-v002.blend | 可编辑工程源文件，保留独立任务场景与细分结构。 |
| assets/models/ai-museum-live-v003.blend | 新版可播放工程源文件：计算系统与加速器共四个独立风扇转子。 |
| assets/models/compute-system-live.glb | 网页01使用的循环风扇动画模型。 |
| assets/models/accelerator-live.glb | 网页04使用的循环风扇动画模型。 |
| assets/models/live-manifest.json | 动画轨道、轴心、源文件哈希及渲染验收记录。 |
| assets/provenance/engineering-task-only.blend | 仅含任务场景的最终可编辑归档，不含初始立方体场景。 |
| assets/models/learning-sculpture.glb | 本地混元3D生成并清理、减面、着色的原创抽象雕塑。 |
| assets/models/engineering-manifest.json | 几何、节点、文件与源场景验收记录。 |
| assets/models/comfy-provenance.json | 模型、种子、工作流、输入指纹、执行证据与后处理记录。 |

GLB 由构建器嵌入离线 script.js，在浏览器内存中解析；独立 GLB 同时保留，便于下个项目使用。

`assets/provenance/` 保留最小生成证据集与源文件，使用相对路径映射检查哈希，不依赖本机 output 目录或绝对路径。对应文件在 Git 中保持原始字节，避免跨系统换行转换破坏证据指纹。

复用指南见 [三维制作与交互管线](docs/3d-pipeline.md)、[本轮验收](docs/2026-10-23-exhibit-upgrade.md) 和 [ComfyUI 复现说明](tools/comfy/README.md)。

最新的00模型细化与01、03、04运行动画见 [运转动画制作与验收](docs/2026-10-23-operating-exhibits.md)。直接打开首页即可体验；模型画布底部提供“暂停运转 / 继续运转”。03沿用“运行数据流、暂停、单步”控制。所有运转均为教学示意，风扇速度不代表真实硬件转速。

## 实现边界

2016年3月9日至15日阿尔法围棋4比1获胜，第四局李世石胜。模型为原创计算原理表达，**不是历史设备复刻**；棋形为合成示例，切换五局只改变解说。亚历克斯网络是视觉学习的基础对照，不是阿尔法围棋的实际架构。

局部卷积、池化、展平、权重更新和概率归一化执行真实数值运算。全网传播、搜索评估、自我对弈和角色情境用于教学，没有加载历史模型权重，没有真实图像识别或围棋棋力。“学习之核”是艺术装置，不代表精密算法结构。

## 开发与验证

```powershell
npm ci
npm test
npm run build
```

主要模块：

- `museum.mjs` / `museum-data.mjs`：内容、展区交互与教学状态。
- `history-models.mjs`：00四组原创原理装置、曲线信号通路与细分结构。
- `exhibit-motion.mjs`：01/04动画播放器、历史装置运转、局部信号与受控时间。
- `museum-scene.mjs` / `exhibit-layout.mjs`：三维选择、相机、拆解与部件布局。
- `engineering-models.mjs`：内存 GLB 解析与资源释放。
- `museum-walk.mjs` / `walk-state.mjs`：大厅、环视、行走碰撞与展台入口。
- `visitor-experience.mjs`：三角色任务、复盘、地图与分站导览。
- `app.mjs` / `rendering.mjs`：原神经网络与数据流；`science.mjs` / `labs.mjs`：数值与关卡。
- `tools/blender/`、`tools/comfy/`：本地制作、导出及可复现生成管线。

`npm test` 覆盖原算法、关卡、角色、布局、资产与行走边界。浏览器脚本为 `tests/engineering-browser.cjs`、`walk-browser.cjs`、`visitor-browser.cjs`，原网络和六关回归为 `browser.cjs`、`navigation-browser.cjs`。这些脚本使用本机 Playwright 绝对路径，换电脑需调整依赖路径。

新增 `tests/live-exhibits-browser.cjs` 检查风扇、静态外框、暂停、局部聚焦、后台停转和减少动态效果；`tests/live-model-assets.test.mjs` 直接解析交付GLB，验证部件重挂之后的真实动画。动画接触表与最小验收证据已归档到 `assets/provenance/live/`，可随Git迁移。

本轮具体结果见验收文档与 `output/` 记录。测试使用 Edge 软件渲染，不能据此声称真实手机帧率、制造精度或现场教学成效。离开展区、打开大厅时暂停背景三维渲染。

## Git 与许可

在 `feature/curated-history` 分支持续管理源码、离线产物、资产、测试和文档。依赖、临时日志、验证截图和交付压缩包不入库。当前已配置 `origin` 为 `pandehong123-ux/AlexNet-Web3D`；本轮只创建本地提交，未推送。

Three.js 许可见 `assets/THREE-LICENSE.txt`；ComfyUI 所用本地模型信息和生成来源见 provenance，后续分发请保留模型适用许可。
