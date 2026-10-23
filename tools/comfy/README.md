# “学习之核”：本地 ComfyUI + 已下载 Hunyuan3D

此目录只负责本地雕塑生成，不修改网页。真实推理采用现有服务
`http://127.0.0.1:8188` 和已下载的
`hunyuan3d-dit-v2_fp16.safetensors`，不启动第二个服务、不安装依赖，
不修改 ComfyUI 安装、checkpoint 或全局设置，无远程或付费服务。

## 已交付

- `assets/models/learning-sculpture.glb`：真实推理几何经表面清理、减面及着色后的成品。
- `assets/models/comfy-provenance.json`：模型、seed、输入 SHA256、工作流、成功历史、后处理、验证与局限。
- `output/comfy-learning-core-20261023/hunyuan-raw.glb`：ComfyUI 原始 GLB 字节原样保留，包含执行图元数据。
- `output/comfy-learning-core-20261023/learning-sculpture-v001.blend`：成品可编辑源文件；GLB 只导出雕塑。
- 同输出目录保留原创输入图、实际 API 图、源模板、节点 schema、服务统计、推理 history、GLB 验证和正面/斜侧/背面预览。
- `learning-core-attempt-1.api.json` 是实际提交的权威执行图。
- `learning-core.workflow.json` 是同一图转换的可查看 ComfyUI 画布；使用当前本地服务已经上传的唯一输入图名。UI 图不作为第二次推理成功的证据。

## 形状和材质

三片开放圆润叶环汇聚于中央核心，是原创抽象装饰艺术，不代表硬件、神经网络的精确结构或科学装置。
成品为一个对象、一个网格、一个连通表面、一个 PBR 材质，13,995 个顶点，27,998 个三角面。
尺寸约 **宽 2.4804 × 高 2.2000 × 深 0.6221 米**。
GLB 为 **+Y 向上、+Z 正面、+X 右侧**，原点位于包围盒底面中心 `(0,0,0)`。
Blender 对应 +Z 向上、-Y 正面。

冷白/青蓝/香槟核心采用连续 `COLOR_0` 顶点色，PBR metallic/roughness 均为 0.28，无外部贴图。
颜色和材质是明确的本地艺术后处理；Hunyuan3D 只生成几何，没有运行纹理生成模型。
预览为重新导入最终 GLB 后的 CPU Cycles 渲染，展厅内的视觉效果取决于其灯光。

## 实际推理与处理

先调用 `/system_stats`、`/object_info` 确认服务、模型和节点，复用已有 lowvram 服务。
以本机 Blender 生成原创透明参考图，再用已安装 Pillow 合成纯白背景，未使用用户图片或模型作为输入。
参考脚本中的程序几何仅用来画输入图，绝不作为交付网格。

首轮 seed `2026102307`，16 steps，latent 2048，CFG 5.5，Euler/normal，
decode chunks 1000，octree 128，surface-net threshold 0.6。首轮成功，约 23 秒服务执行，无缓存节点，无重试。
原始 GLB：26,714 顶点、53,940 三角面、970,304 字节。
输入 SHA256 与原始 GLB 中 ComfyUI 的 `LoadImage.is_changed` 执行指纹一致；
原始 GLB 中的节点类型和参数与提交图一致。

原始 surface-net 网格含 5 条边界边、721 条非流形边。
成品对该真实网格进行一次 0.012 原始单位体素清理，轻度平滑（0.3，3 次）和减面；
未使用新的程序雕塑替换推理几何。
完成后边界边、非流形边、退化三角面均为 0，单连通；导出再导入保持一致。
相对规范化原始顶点的最近点距离均值约 6.1 毫米、95% 约 10.6 毫米，仅为近邻采样统计，
不是精密科学、测量或点到面的误差认证。

## 复现

在 PowerShell 中从仓库目录运行以下命令。先确保现有本地服务可用；脚本不负责启动服务。
重跑会更新指定成品和当前输出证据，若需保留本轮证据先在 `output/comfy-*` 下复制。

```powershell
Set-Location -LiteralPath 'D:/新建文件夹 (2)/AlexNet'
& 'D:/blender/blender.exe' --background --factory-startup --threads 6 --python-exit-code 1 --python 'tools/comfy/create_reference.py' -- 'D:/新建文件夹 (2)/AlexNet/output/comfy-learning-core-20261023'
& 'D:/Blender-Web3D/.local/comfy-venv/Scripts/python.exe' -u 'tools/comfy/run_local.py' --out 'output/comfy-learning-core-20261023' --input 'output/comfy-learning-core-20261023/learning-core-rgba.png' --timeout 600
& 'D:/blender/blender.exe' --background --factory-startup --threads 6 --python-exit-code 1 --python 'tools/comfy/finish_sculpture.py' -- 'D:/新建文件夹 (2)/AlexNet/output/comfy-learning-core-20261023' 'D:/新建文件夹 (2)/AlexNet/assets/models/learning-sculpture.glb'
& 'D:/Blender-Web3D/.local/comfy-venv/Scripts/python.exe' 'tools/comfy/validate_and_record.py' --out 'output/comfy-learning-core-20261023' --final 'assets/models/learning-sculpture.glb'
& 'D:/Blender-Web3D/.local/comfy-venv/Scripts/python.exe' 'tools/comfy/make_ui_workflow.py' 'output/comfy-learning-core-20261023'
```

参考图和表面处理均在独立后台 Blender 工厂场景中进行，不操作用户打开的场景。
ComfyUI 的普通 `/upload/image` 和 `SaveGLB` 会产生唯一输入与运行输出；通过 `/view` 将原始 GLB
下载到项目证据目录，不改动安装代码、模型或配置。

`run_local.py` 仅在首轮失败时降至 latent 1024、8 steps、octree 96 重试一次，错误与 history 均保留。
两轮失败就终止，不安装额外模型或依赖，也不输出伪装成 Hunyuan 的替代雕塑。
单图无法约束背面和精确对称性；成品不提供力学、碰撞、自相交、3D 打印或制造认证。
本任务不包含网页集成或漫游碰撞测试，不提交 Git。
