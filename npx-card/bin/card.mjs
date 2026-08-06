#!/usr/bin/env node
// $ npx dagas — the printed résumé, running in your terminal.
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

const W = 62;
const strip = (s) => s.replace(/\x1b\[[0-9;]*m/g, '');
const line = (s = '') =>
  console.log(`  ${d('│')} ${s}${' '.repeat(Math.max(0, W - strip(s).length))} ${d('│')}`);

console.log(`\n  ${d('┌' + '─'.repeat(W + 2) + '┐')}`);
line(`${d('●')} ${d('●')} ${d('●')}  ${d('fabio@cassisa — card')}`);
line(d('─'.repeat(W)));
line();
line(`${b('Fabio Cassisa')}  ${d('//')}  ${c('dagas')}`);
line();
for (const [k, v] of rows) line(`${g(k.padEnd(5))}${v}`);
line();
line(d('this card is printed on my paper résumé — hej, nice to meet you'));
line();
console.log(`  ${d('└' + '─'.repeat(W + 2) + '┘')}\n`);
