import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const htmlPath = join(root, 'index.html');
const html = readFileSync(htmlPath, 'utf8');
const errors = [];

function report(message) {
  errors.push(message);
}

for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
  const target = match[1];
  if (/^(mailto:|https?:|#)/.test(target)) continue;
  const cleanTarget = decodeURIComponent(target.split('#')[0]);
  if (!existsSync(join(dirname(htmlPath), cleanTarget))) {
    report(`Missing local asset: ${target}`);
  }
}

const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
for (const match of html.matchAll(/\shref=["']#([^"']+)["']/g)) {
  if (!ids.has(match[1])) {
    report(`Missing anchor target: #${match[1]}`);
  }
}

for (const match of html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) {
  report(`Image missing alt text: ${match[0]}`);
}

const cssBlocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((match) => match[1]);
for (const [index, css] of cssBlocks.entries()) {
  const opens = (css.match(/{/g) || []).length;
  const closes = (css.match(/}/g) || []).length;
  if (opens !== closes) {
    report(`CSS block ${index + 1} has ${opens} opening braces and ${closes} closing braces`);
  }
}

if (!html.includes('Artem Ervits - Resume - 060326.pdf')) {
  report('Resume PDF link text/path does not reference the 060326 PDF.');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Static portfolio checks passed.');
