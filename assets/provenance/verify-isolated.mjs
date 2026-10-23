import assert from 'node:assert/strict';
import {copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, statSync, writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const index = JSON.parse(readFileSync(path.join(root, 'assets/provenance/evidence-index.json')));
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const temporaryParent = path.resolve(tmpdir());
const isolated = mkdtempSync(path.join(temporaryParent, 'alexnet-asset-qa-'));
const files = [
  'tests/model-assets.test.mjs',
  'assets/provenance/evidence-index.json',
  ...index.repository_files,
  ...index.files.map(file => file.path),
];
const recordsBefore = Object.fromEntries(Object.keys(index.record_hashes).map(file => [file, sha(readFileSync(path.join(root, file)))]));
const report = {schema_version: 1, node_version: process.version, isolated_files: files,
  archive_files: index.files.length, archive_bytes: index.files.reduce((n, file) => n + file.bytes, 0)};

function run(extra = []) {
  const result = spawnSync(process.execPath, ['--test', ...extra, 'tests/model-assets.test.mjs'],
    {cwd: isolated, encoding: 'utf8', timeout: 30000, maxBuffer: 1024 * 1024});
  assert.ifError(result.error);
  const output = (result.stdout + result.stderr).replaceAll(isolated, '<isolated-root>');
  const value = label => Number(output.match(new RegExp(`^# ${label} (\\d+)$`, 'm'))?.[1]);
  return {exit_code: result.status, tests: value('tests'), passed: value('pass'), failed: value('fail'), output};
}

try {
  for (const file of files) {
    assert.ok(!path.isAbsolute(file) && !file.includes('..') && !file.startsWith('output/'));
    const target = path.join(isolated, file);
    mkdirSync(path.dirname(target), {recursive: true});
    copyFileSync(path.join(root, file), target);
  }
  report.output_directory_present = existsSync(path.join(isolated, 'output'));
  report.node_modules_present = existsSync(path.join(isolated, 'node_modules'));
  report.fixture_bytes = files.reduce((n, file) => n + statSync(path.join(isolated, file)).size, 0);
  assert.equal(report.output_directory_present, false);
  assert.equal(report.node_modules_present, false);
  report.positive = run();
  assert.equal(report.positive.exit_code, 0, report.positive.output);
  assert.equal(report.positive.tests, 9);
  assert.equal(report.positive.passed, 9);
  assert.equal(report.positive.failed, 0);

  // Missing archive evidence must fail, even on the original workstation where
  // the historical absolute path still exists. No silent machine-path fallback.
  const input = path.join(isolated, index.files.find(file => file.role === 'Original white-background input').path);
  renameSync(input, input + '.withheld');
  try {
    report.missing_archive_negative_control = run(['--test-name-pattern=Comfy provenance']);
    assert.notEqual(report.missing_archive_negative_control.exit_code, 0);
    assert.equal(report.missing_archive_negative_control.failed, 1);
    assert.match(report.missing_archive_negative_control.output, /ENOENT/);
    assert.match(report.missing_archive_negative_control.output, /comfy-input\.png/);
  } finally {
    renameSync(input + '.withheld', input);
  }
  const recordsAfter = Object.fromEntries(Object.keys(index.record_hashes).map(file => [file, sha(readFileSync(path.join(root, file)))]));
  assert.deepEqual(recordsBefore, index.record_hashes);
  assert.deepEqual(recordsAfter, recordsBefore);
  report.historical_record_hashes_unchanged = recordsAfter;
  report.status = 'passed';
} finally {
  // Delete only this mkdtemp-created directory, after checking its absolute
  // parent and name. Never enumerate paths and hand them to another shell.
  const target = path.resolve(isolated);
  assert.equal(path.dirname(target), temporaryParent);
  assert.ok(path.basename(target).startsWith('alexnet-asset-qa-'));
  assert.ok(statSync(target).isDirectory());
  rmSync(target, {recursive: true, force: true});
  report.temporary_directory_removed = !existsSync(target);
}
writeFileSync(path.join(root, 'assets/provenance/portable-verification.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({status: report.status, isolated_files: files.length,
  tests: report.positive.tests, passed: report.positive.passed, failed: report.positive.failed,
  output_directory_present: report.output_directory_present,
  negative_control_failed_as_expected: report.missing_archive_negative_control.failed === 1,
  historical_record_hashes_unchanged: true, temporary_directory_removed: report.temporary_directory_removed}));
