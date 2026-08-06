// verification only: screenshot /resume from the preview server (desktop + mobile)
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';

const PORT = 43219;
const OUT = process.argv[2] ?? '.';
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'pipe' });
await new Promise((res, rej) => {
  server.stdout.on('data', (d) => d.toString().includes(String(PORT)) && res());
  server.stderr.on('data', () => {});
  server.on('exit', () => rej(new Error('preview server died — run `npm run build` first')));
  setTimeout(() => rej(new Error('preview timeout')), 15000);
});

try {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const [name, w, h] of [['desktop', 1280, 900], ['mobile', 400, 800]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(`http://localhost:${PORT}/resume`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `${OUT}/resume-${name}.png`, fullPage: true, type: 'png' });
    console.log(`wrote ${OUT}/resume-${name}.png`);
    await page.close();
  }
  await browser.close();
} finally {
  server.kill();
}
