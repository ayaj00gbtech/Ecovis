import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const lists = await Promise.all(entries.map((entry) => entry.isDirectory()
    ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]));
  return lists.flat();
}
const sources = await files(path.join(root, 'src'));
const all = await Promise.all(sources.map(async (file) => ({ file, content: await readFile(file, 'utf8') })));
const routes = JSON.parse(await readFile(path.join(root, 'docs/routes.json'), 'utf8'));
const validHashes = new Set(routes.map(({ route }) => route));
['contact','quiz','quick','book','philosophy','journey-slider','team','inv-quiz','inv-report','grc-result','diagnostic',
 'era-1','era-2','era-3','era-4','home-pillars','partner-dheeraj','partner-pankaj','partner-deepa','partner-sanjeev','partner-bala']
  .forEach((route) => validHashes.add(route));
let assets = 0;
const errors = [];
for (const { file, content } of all) {
  for (const match of content.matchAll(/assets\/(?:images|fonts)\/[A-Za-z0-9_.-]+/g)) {
    try { await access(path.join(root, 'public', match[0])); assets++; }
    catch { errors.push(`Missing asset ${match[0]} in ${path.relative(root, file)}`); }
  }
  for (const match of content.matchAll(/href="#([^"\s]+)"/g)) {
    if (!validHashes.has(match[1])) errors.push(`Unknown route #${match[1]} in ${path.relative(root, file)}`);
  }
}
if (routes.length !== 16) errors.push(`Expected 16 primary route panels; found ${routes.length}.`);
for (const { component } of routes) {
  try { await access(path.join(root, 'src/pages', component + '.jsx')); }
  catch { errors.push(`Missing page component ${component}`); }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Verified ${routes.length} page components and ${assets} local asset references; internal navigation targets resolve.`);
