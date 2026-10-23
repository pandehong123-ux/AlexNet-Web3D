"""Run the installed local ComfyUI Hunyuan3D once, with one smaller retry.

No downloads, installs, server startup, global settings or remote endpoints.
SaveGLB writes normal runtime files in the server output directory; /view copies
the exact output bytes into this project's output/comfy-* evidence directory.
"""
import argparse
import hashlib
import json
import mimetypes
import struct
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from datetime import datetime, timezone
from pathlib import Path

MODEL = 'hunyuan3d-dit-v2_fp16.safetensors'
SEED = 2026102307
BASE = 'http://127.0.0.1:8188'


def write_json(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def request(endpoint, data=None, timeout=30):
    req = urllib.request.Request(BASE + endpoint)
    if data is not None:
        req.data = json.dumps(data).encode()
        req.add_header('Content-Type', 'application/json')
    with urllib.request.urlopen(req, timeout=timeout) as response:
        return json.load(response)


def upload(path):
    boundary = '----LearningCore' + uuid.uuid4().hex
    name = 'learning-core-' + sha256(path)[:16] + '.png'
    content = (
        f'--{boundary}\r\nContent-Disposition: form-data; name="image"; filename="{name}"\r\n'
        'Content-Type: image/png\r\n\r\n'
    ).encode() + path.read_bytes() + f'\r\n--{boundary}--\r\n'.encode()
    req = urllib.request.Request(BASE + '/upload/image', data=content)
    req.add_header('Content-Type', 'multipart/form-data; boundary=' + boundary)
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.load(response)


def workflow(image, attempt, run_name):
    small = attempt == 2
    return {
        '2': {'class_type': 'ImageOnlyCheckpointLoader', 'inputs': {'ckpt_name': MODEL}},
        '3': {'class_type': 'LoadImage', 'inputs': {'image': image}},
        '4': {'class_type': 'ModelSamplingAuraFlow', 'inputs': {'shift': 1.0, 'model': ['2', 0]}},
        '5': {'class_type': 'CLIPVisionEncode', 'inputs': {'crop': 'none', 'clip_vision': ['2', 1], 'image': ['3', 0]}},
        '6': {'class_type': 'EmptyLatentHunyuan3Dv2', 'inputs': {'resolution': 1024 if small else 2048, 'batch_size': 1}},
        '7': {'class_type': 'Hunyuan3Dv2Conditioning', 'inputs': {'clip_vision_output': ['5', 0]}},
        '8': {'class_type': 'KSampler', 'inputs': {'seed': SEED, 'steps': 8 if small else 16, 'cfg': 5.5,
            'sampler_name': 'euler', 'scheduler': 'normal', 'denoise': 1.0, 'model': ['4', 0],
            'positive': ['7', 0], 'negative': ['7', 1], 'latent_image': ['6', 0]}},
        '9': {'class_type': 'VAEDecodeHunyuan3D', 'inputs': {'num_chunks': 1000,
            'octree_resolution': 96 if small else 128, 'samples': ['8', 0], 'vae': ['2', 2]}},
        '10': {'class_type': 'VoxelToMesh', 'inputs': {'algorithm': 'surface net', 'threshold': 0.6, 'voxel': ['9', 0]}},
        '11': {'class_type': 'SaveGLB', 'inputs': {'filename_prefix': f'{run_name}/attempt-{attempt}', 'mesh': ['10', 0]}},
    }


def check_glb(path):
    raw = path.read_bytes()
    magic, version, size = struct.unpack_from('<4sII', raw)
    if (magic, version, size) != (b'glTF', 2, len(raw)):
        raise ValueError('Invalid GLB header')
    length, kind = struct.unpack_from('<II', raw, 12)
    if kind != 0x4E4F534A:
        raise ValueError('Missing JSON chunk')
    gltf = json.loads(raw[20:20+length])
    primitives = [p for m in gltf['meshes'] for p in m['primitives']]
    vertices = sum(gltf['accessors'][p['attributes']['POSITION']]['count'] for p in primitives)
    triangles = sum(gltf['accessors'][p['indices']]['count']//3 for p in primitives)
    if vertices < 30 or triangles < 30:
        raise ValueError('Empty or degenerate generated mesh')
    return {'magic': 'glTF', 'version': version, 'declared_bytes': size, 'actual_bytes': len(raw),
            'meshes': len(gltf['meshes']), 'vertices': vertices, 'triangles': triangles,
            'sha256': sha256(path)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--out', type=Path, required=True)
    parser.add_argument('--input', type=Path, required=True)
    parser.add_argument('--template', type=Path, default=Path('D:/Blender-Web3D/hunyuan3d-local.api.json'))
    parser.add_argument('--timeout', type=int, default=1200, help='Per attempt wall time cap, seconds')
    args = parser.parse_args()
    out = args.out.resolve()
    out.mkdir(parents=True, exist_ok=True)
    from PIL import Image
    original = Image.open(args.input).convert('RGBA')
    white = Image.new('RGBA', original.size, (255, 255, 255, 255))
    white.alpha_composite(original)
    input_path = out / 'learning-core-input.png'
    white.convert('RGB').save(input_path)
    stats = request('/system_stats')
    info = request('/object_info')
    write_json(out / 'system-stats-before.json', stats)
    names = {n['class_type'] for n in workflow('placeholder.png', 1, out.name).values()}
    write_json(out / 'object-info-used.json', {k:info[k] for k in sorted(names)})
    if MODEL not in info['ImageOnlyCheckpointLoader']['input']['required']['ckpt_name'][0]:
        raise RuntimeError('Required downloaded checkpoint is not exposed by local server')
    # Copy templates for inspection; never modify installation or source templates.
    write_json(out / 'source-template.api.json', json.loads(args.template.read_text('utf-8')))
    ui_template = args.template.with_name('hunyuan3d-local.workflow.json')
    if ui_template.exists():
        write_json(out / 'source-template.workflow.json', json.loads(ui_template.read_text('utf-8')))
    uploaded = upload(input_path)
    write_json(out / 'upload.json', uploaded)
    image = '/'.join(x for x in [uploaded.get('subfolder'), uploaded['name']] if x)
    evidence = {'created_utc': datetime.now(timezone.utc).isoformat(), 'endpoint': BASE,
                'server_reused': True, 'remote_services': False, 'model': MODEL, 'seed': SEED,
                'input_image': str(input_path), 'input_sha256': sha256(input_path),
                'reference_rgba_sha256': sha256(args.input),
                'input_origin': 'Original isolated white-background Blender render; no user files.',
                'attempts': [], 'success': False}
    write_json(out / 'inference-evidence.json', evidence)
    for attempt in (1, 2):
        wf = workflow(image, attempt, out.name)
        wf_path = out / f'attempt-{attempt}.api.json'
        write_json(wf_path, wf)
        # Stable, reviewable copy under tools/comfy, same bytes as submitted graph.
        write_json(Path(__file__).parent / f'learning-core-attempt-{attempt}.api.json', wf)
        record = {'attempt': attempt, 'workflow': wf_path.name, 'workflow_sha256': sha256(wf_path),
                  'parameters': {'latent_resolution': wf['6']['inputs']['resolution'],
                                 'steps': wf['8']['inputs']['steps'], 'cfg': wf['8']['inputs']['cfg'],
                                 'octree_resolution': wf['9']['inputs']['octree_resolution'],
                                 'num_chunks': 1000}, 'status': 'submitting'}
        evidence['attempts'].append(record)
        start = time.monotonic()
        try:
            try:
                result = request('/prompt', {'prompt': wf, 'client_id': 'learning-core-' + uuid.uuid4().hex})
            except urllib.error.HTTPError as exc:
                write_json(out / f'attempt-{attempt}-http-error.json', {'code': exc.code, 'body': exc.read().decode()})
                raise
            write_json(out / f'attempt-{attempt}-submission.json', result)
            record['prompt_id'] = prompt_id = result['prompt_id']
            record['status'] = 'running'
            write_json(out / 'inference-evidence.json', evidence)
            print(json.dumps({'event': 'submitted', **record}), flush=True)
            while time.monotonic() - start < args.timeout:
                h = request('/history/' + prompt_id)
                if prompt_id in h:
                    history = h[prompt_id]
                    write_json(out / f'attempt-{attempt}-history.json', history)
                    record['execution_status'] = history.get('status')
                    if history.get('status', {}).get('status_str') != 'success':
                        raise RuntimeError('ComfyUI execution failed; see saved history')
                    outputs = history.get('outputs', {}).get('11', {})
                    write_json(out / f'attempt-{attempt}-outputs.json', outputs)
                    candidates = [v for value in outputs.values() if isinstance(value, list)
                                  for v in value if isinstance(v, dict) and v.get('filename', '').endswith('.glb')]
                    if not candidates:
                        raise RuntimeError('No GLB in successful SaveGLB output')
                    file = candidates[0]
                    url = BASE + '/view?' + urllib.parse.urlencode({k:file[k] for k in ('filename','subfolder','type') if k in file})
                    with urllib.request.urlopen(url, timeout=60) as response:
                        (out / 'hunyuan-raw.glb').write_bytes(response.read())
                    record['raw_validation'] = check_glb(out / 'hunyuan-raw.glb')
                    record['server_output'] = file
                    record['status'] = 'success'
                    evidence['success'] = True
                    evidence['successful_attempt'] = attempt
                    print(json.dumps({'event': 'success', **record}), flush=True)
                    break
                time.sleep(5)
            else:
                # Interrupt only if this exact task is still running; never cancel another job.
                q = request('/queue')
                if any(item[1] == prompt_id for item in q.get('queue_running', [])):
                    request('/interrupt', {})
                request('/queue', {'delete': [prompt_id]})
                raise TimeoutError('Bounded local inference time exceeded')
        except Exception as exc:
            record['status'] = 'failed'
            record['error'] = repr(exc)
            print(json.dumps({'event': 'failure', **record}), flush=True)
        finally:
            record['elapsed_seconds'] = round(time.monotonic() - start, 2)
            write_json(out / 'inference-evidence.json', evidence)
        if evidence['success']:
            break
    write_json(out / 'system-stats-after.json', request('/system_stats'))
    if not evidence['success']:
        raise SystemExit('Both bounded attempts failed. Evidence preserved; no synthetic replacement exported.')


if __name__ == '__main__':
    main()
