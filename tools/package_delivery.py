"""Create a self-contained source/runtime delivery without dependencies or local settings."""
import argparse
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parents[1]


def package(destination):
    if destination.exists():
        raise FileExistsError(f'Delivery already exists: {destination}')
    files = [ROOT / name for name in [
        'index.html', 'script.js', 'style.css', 'gallery.css', 'visitor.css', 'walk.css', 'motion.css',
        'README.md', 'package.json', 'package-lock.json', 'build.mjs', '本地预览.bat',
        '.gitignore', '.gitattributes',
    ]]
    for directory in ['assets', 'docs', 'tests', 'tools']:
        files.extend(path for path in (ROOT / directory).rglob('*')
                     if path.is_file() and '__pycache__' not in path.parts
                     and path.suffix not in {'.pyc', '.pyo', '.blend1', '.log'})
    for name in ['engineering-qa.json', 'walk-qa.json', 'lifecycle-qa.json', 'visitor-qa.json',
                 'professional-qa.json', 'navigation-qa.json', 'curated-qa.json',
                 'engineering-match.png', 'engineering-gpu.png', 'walk-desktop.png', 'walk-mobile.png']:
        artifact = ROOT / 'output' / name
        if artifact.is_file():
            files.append(artifact)
    sculpture_source = ROOT / 'output/comfy-learning-core-20261023/learning-sculpture-v001.blend'
    if sculpture_source.is_file():
        files.append(sculpture_source)
    for file in files:
        if not file.is_file():
            raise FileNotFoundError(file)
    with ZipFile(destination, 'x', compression=ZIP_DEFLATED, compresslevel=6) as archive:
        for file in sorted(set(files)):
            archive.write(file, 'AlexNet/' + file.relative_to(ROOT).as_posix())
    with ZipFile(destination) as archive:
        bad = archive.testzip()
        if bad:
            raise ValueError(f'Archive CRC failed: {bad}')
        required = ['AlexNet/index.html', 'AlexNet/script.js', 'AlexNet/assets/models/compute-system.glb',
                    'AlexNet/assets/models/accelerator.glb', 'AlexNet/assets/models/learning-sculpture.glb',
                    'AlexNet/assets/provenance/evidence-index.json']
        for name in required:
            if name not in archive.namelist():
                raise ValueError(f'Missing required delivery file: {name}')
        return {'archive': str(destination), 'bytes': destination.stat().st_size,
                'files': len(archive.namelist()), 'crc_check': 'passed'}


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--out', type=Path, required=True)
    arguments = parser.parse_args()
    print(json.dumps(package(arguments.out.resolve()), ensure_ascii=False))
