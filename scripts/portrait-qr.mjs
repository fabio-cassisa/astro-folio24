// portrait-QR: QR matrix (EC level H tolerates ~30% damage) with a center
// window holding the ASCII portrait. custom SVG render, resume paper palette.
import QRCode from 'qrcode';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const URL_TARGET = 'https://dagas-portfolio.vercel.app';
const qr = QRCode.create(URL_TARGET, { errorCorrectionLevel: 'H' });
const n = qr.modules.size;
const data = qr.modules.data;

const CELL = 10; // svg units per module
const HOLE = Math.floor(n * 0.30); // center window edge (modules) — < H tolerance
const h0 = Math.floor((n - HOLE) / 2);
const h1 = h0 + HOLE;

const portrait = readFileSync('src/data/portrait-ascii.txt', 'utf8')
  .split('\n')
  .filter((l) => l.trim().length > 0);

let cells = '';
for (let y = 0; y < n; y++)
  for (let x = 0; x < n; x++) {
    if (x >= h0 && x < h1 && y >= h0 && y < h1) continue; // carve window
    if (!data[y * n + x]) continue;
    // finder patterns stay square (scanners key on them); data modules rounded
    const finder = (x < 8 && y < 8) || (x >= n - 8 && y < 8) || (x < 8 && y >= n - 8);
    cells += finder
      ? `<rect x="${x * CELL}" y="${y * CELL}" width="${CELL}" height="${CELL}"/>`
      : `<rect x="${x * CELL + 1}" y="${y * CELL + 1}" width="${CELL - 2}" height="${CELL - 2}" rx="2.5"/>`;
  }

const win = HOLE * CELL;
const rowH = win / portrait.length;
const text = portrait
  .map(
    (line, i) =>
      `<text x="${h0 * CELL + win / 2}" y="${(h0 * CELL + (i + 0.86) * rowH).toFixed(2)}" font-size="${(rowH * 1.34).toFixed(2)}" text-anchor="middle" xml:space="preserve">${line
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')}</text>`
  )
  .join('');

const size = n * CELL;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges">
<rect width="${size}" height="${size}" fill="#faf9f6"/>
<g fill="#16161d">${cells}</g>
<g fill="#166534" font-family="JetBrains Mono, ui-monospace, monospace" font-weight="700">${text}</g>
</svg>`;

mkdirSync('public/images', { recursive: true });
writeFileSync('public/images/portrait-qr.svg', svg);
console.log(`portrait-qr.svg: ${n}x${n} modules, window ${HOLE}, target ${URL_TARGET}`);

// also rasterize to PNG — the resume page embeds the PNG so the PDF text
// layer stays clean (SVG <text> would leak ascii garbage into extraction)
const { chromium } = await import('playwright-core');
const PX = 720; // 30mm at ~600dpi
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: PX, height: PX } });
await page.setContent(
  `<body style="margin:0">${svg.replace('<svg ', `<svg width="${PX}" height="${PX}" `)}</body>`
);
await page.screenshot({ path: 'public/images/portrait-qr.png', type: 'png' });
await browser.close();
console.log(`portrait-qr.png: ${PX}x${PX}px`);
