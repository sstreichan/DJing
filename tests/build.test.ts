import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const execP = promisify(exec);

describe('build', () => {
  it('runs astro build and produces dist/index.html', async () => {
    // run the build command
    await execP('npm run build', { cwd: process.cwd(), env: process.env });

    const out = join(process.cwd(), 'dist', 'index.html');
    expect(existsSync(out)).toBe(true);
  }, 120000);
});
