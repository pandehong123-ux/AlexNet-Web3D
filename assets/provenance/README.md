# 可移植资产证据归档

本目录保存 `tests/model-assets.test.mjs` 真正读取的最小生成证据集。
普通克隆后即可使用 Node 20+ 运行资产测试，无需 `output/`、Blender、ComfyUI、GPU、
Python、node_modules 或原机器的磁盘路径。

```sh
node --test tests/model-assets.test.mjs
```

| 归档文件 | 用途 |
| --- | --- |
| `engineering-task-only.blend` | 原任务场景的独立源文件；结构、对象清单、预算和无 Cube 检查 |
| `rack-final-qa.png` | 已目视检查的机架持久渲染 |
| `accelerator-final-qa.png` | 已目视检查的加速器持久渲染 |
| `comfy-input.png` | 实际用于 Hunyuan3D 推理的原创白背景输入图 |
| `comfy-hunyuan-raw.glb` | 真实推理的原始输出，含执行图和输入哈希元数据 |
| `comfy-executed.api.json` | 实际提交并成功执行的工作流 |

六份证据共 **10,433,849 字节**，均逐字节复制，未重新渲染、建模或改写元数据。
没有复制整个 `output/`、中间版本、额外预览、安装文件或模型权重。
原始工程 `.blend` 和三份交付 GLB 已位于 `assets/models/`，无需在此重复存储。

`evidence-index.json` 的 `paths` 将原始记录路径映射为仓库相对路径；Windows 反斜杠
仅规范化为 `/` 来匹配索引。原始绝对路径只作为历史标签保留。
测试的统一 `read()` helper 优先读取归档，检查归档长度和 SHA256；
未映射的绝对路径或 `output/` 路径直接报错，禁止回退到本机原文件。
所有 Comfy 证据读取也使用该 helper。

历史记录保持原样：

- `assets/models/engineering-manifest.json` SHA256：`66a3dd3314601c6372c8d7f30c750a30f7821230ef659f440e89b6e85761942a`
- `assets/models/comfy-provenance.json` SHA256：`8ca71a2fe22e38724a77fe072d8ee6c9f8e49a64e15ab1e11d4ac028bad8ab9d`

索引保存这两份记录的原始哈希。测试继续核对历史记录中的文件哈希、GLB 统计、
输入图指纹、seed、模型名与执行成功证据，不重写其旧路径或历史字段。
记录里的旧 `output/`、软件安装路径和绝对输入路径无需在新机器上存在。

可重复运行隔离验证：

```sh
node assets/provenance/verify-isolated.mjs
```

验证器仅复制索引列出的仓库资产、六份归档、索引和该测试（共 14 个文件）到临时目录，
从该目录运行 9 项测试；不复制 `output/`、依赖或其他项目代码。
然后暂时移走归档输入图，确认 Comfy 证据测试失败，证明不会回退读取原机器绝对路径。
验证器检查历史记录哈希不变，清理自己创建的临时目录，并写入
`portable-verification.json`。该 JSON 包含正向运行与预期失败的负向检查记录。

归档和测试需要随本次改动一起纳入版本控制；无需修改 `.gitignore`、package 或主程序。
