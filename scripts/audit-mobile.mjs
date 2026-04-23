import { chromium } from 'playwright';
import fs from 'node:fs';

const URL_BASE = 'https://tergarczechia-three.vercel.app';
const PAGES = [
  { slug: '/', name: 'home' },
  { slug: '/meditace', name: 'meditace' },
  { slug: '/cesta', name: 'cesta' },
  { slug: '/o-nas', name: 'o-nas' },
  { slug: '/daru', name: 'daru' },
  { slug: '/skupiny', name: 'skupiny' },
  { slug: '/kontakt', name: 'kontakt' },
];

const cacheBust = '?v=' + Date.now();

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0] || await browser.newContext();
const page = await ctx.newPage();
// iPhone 14 Pro viewport
await page.setViewportSize({ width: 390, height: 844 });

const outDir = '/tmp/tergar-audit/mobile';
fs.mkdirSync(outDir, { recursive: true });

for (const { slug, name } of PAGES) {
  try {
    await page.goto(URL_BASE + slug + cacheBust, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `${outDir}/${name}.png`,
      type: 'png',
      fullPage: true,
    });
    console.log(`${name}: screenshot captured`);
  } catch (e) {
    console.log(`${name}: ERROR ${e.message}`);
  }
}
await page.close();
console.log('done. screenshots in', outDir);
