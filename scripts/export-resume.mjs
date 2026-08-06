// export /resume -> public/resume.pdf (+ resume.txt plain fallback) using
// system Chrome via playwright-core. run via `npm run resume:pdf` after
// content changes; commit the outputs.
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const PORT = 43219;
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'pipe' });
await new Promise((res, rej) => {
  server.stdout.on('data', (d) => d.toString().includes(String(PORT)) && res());
  server.on('exit', () => rej(new Error('preview server died — run `npm run build` first')));
  setTimeout(() => rej(new Error('preview timeout')), 15000);
});

try {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/resume`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: 'public/resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  await browser.close();
  console.log('wrote public/resume.pdf');

  // plain ATS fallback from the same source of truth
  const { resume: r } = await import('../src/data/resume.ts');
  const L = [];
  L.push(r.meta.name.toUpperCase(), r.meta.tagline, '');
  r.header.forEach((h) => L.push(`${h.k}: ${h.v}`));
  L.push('', 'EXPERIENCE', '----------');
  r.experience.forEach((e) => {
    L.push(`${e.role} — ${e.company} (${e.where}, ${e.when})`);
    e.bullets.forEach((b) => L.push(`- ${b}`));
    L.push('');
  });
  r.ledger.forEach((l) => L.push(`${l.when}  ${l.what}`));
  L.push('', 'PROJECTS', '--------');
  r.projects.forEach((p) => L.push(`${p.title} [${p.tags.join(', ')}]`, p.blurb, ''));
  L.push('SKILLS', '------');
  Object.entries(r.stack).forEach(([g, i]) => L.push(`${g}: ${i.join(', ')}`));
  L.push('', 'EDUCATION', '---------');
  r.education.forEach((e) => L.push(`${e.when}  ${e.what}`));
  L.push('', 'LANGUAGES', '---------');
  r.languages.forEach((l) => L.push(`${l.k}: ${l.v}`));
  writeFileSync('public/resume.txt', L.join('\n') + '\n');
  console.log('wrote public/resume.txt');
} finally {
  server.kill();
}
