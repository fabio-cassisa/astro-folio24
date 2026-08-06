#!/usr/bin/env node
// $ npx dagas-card — the printed résumé, running in your terminal.
const g = (s) => `\x1b[32m${s}\x1b[0m`; // green
const c = (s) => `\x1b[36m${s}\x1b[0m`; // cyan/teal
const d = (s) => `\x1b[2m${s}\x1b[0m`; // dim
const b = (s) => `\x1b[1m${s}\x1b[0m`; // bold

const rows = [
  ['role', 'creative technologist — designer · maker · coder'],
  ['work', 'Creative Developer @ Adnami, Copenhagen'],
  ['web', 'https://dagas-portfolio.vercel.app'],
  ['cv', 'https://dagas-portfolio.vercel.app/resume.pdf'],
  ['git', 'https://github.com/fabio-cassisa'],
  ['in', 'https://www.linkedin.com/in/fabiocassisa/'],
  ['mail', 'cassisafabio97@gmail.com'],
];

// display width: strip ANSI, NFC-normalize (decomposed accents), count code points
const width = (s) => [...s.replace(/\x1b\[[0-9;]*m/g, '').normalize('NFC')].length;

// content first — the box sizes itself to the longest line, so nothing can overflow
const content = [
  `${d('●')} ${d('●')} ${d('●')}  ${d('fabio@cassisa — card')}`,
  '@RULE@',
  '',
  `${b('Fabio Cassisa')}  ${d('//')}  ${c('dagas')}`,
  '',
  ...rows.map(([k, v]) => `${g(k.padEnd(5))}${v}`),
  '',
  d('this card is printed on my paper résumé — hej, nice to meet you'),
  '',
];

const W = Math.max(...content.map((s) => (s === '@RULE@' ? 0 : width(s))));
const line = (s) => console.log(`  ${d('│')} ${s}${' '.repeat(W - width(s))} ${d('│')}`);

console.log(`\n  ${d('┌' + '─'.repeat(W + 2) + '┐')}`);
for (const s of content) line(s === '@RULE@' ? d('─'.repeat(W)) : s);
console.log(`  ${d('└' + '─'.repeat(W + 2) + '┘')}\n`);
