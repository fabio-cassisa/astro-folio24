// verification only: render portrait-qr.svg at print-ish sizes and decode with jsQR
import { chromium } from 'playwright-core';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';
import { readFileSync } from 'node:fs';

const svgPath = process.argv[2] ?? "public/images/portrait-qr.svg";
const svg = readFileSync(svgPath, 'utf8');
const browser = await chromium.launch({ channel: 'chrome' });

for (const px of [340, 240, 170]) {
  const page = await browser.newPage({ viewport: { width: px, height: px } });
  await page.setContent(
    `<body style="margin:0"><div style="width:${px}px;height:${px}px">${svg.replace('<svg ', `<svg width="${px}" height="${px}" `)}</div></body>`
  );
  const buf = await page.screenshot();
  const png = PNG.sync.read(buf);
  const result = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  console.log(`${px}px: ${result ? 'DECODED -> ' + result.data : 'FAILED'}`);
  await page.close();
}
await browser.close();
