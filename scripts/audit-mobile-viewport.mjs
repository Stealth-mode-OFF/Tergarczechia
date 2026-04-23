import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0] || await browser.newContext();
const page = await ctx.newPage();
await page.setViewportSize({ width: 390, height: 844 });

const outDir = '/tmp/tergar-audit/mobile-vp';
fs.mkdirSync(outDir, { recursive: true });

const url = 'https://tergarczechia-three.vercel.app/?v=' + Date.now();
await page.goto(url, { waitUntil: 'networkidle' });

const sections = [
  { y: 0, name: '01-hero' },
  { y: 800, name: '02-hero-stats' },
  { y: 1400, name: '03-segments' },
  { y: 2300, name: '04-path' },
  { y: 3100, name: '05-teacher' },
  { y: 3900, name: '06-event' },
  { y: 4700, name: '07-groups' },
  { y: 5300, name: '08-instagram' },
  { y: 5900, name: '09-footer-cta' },
];
for (const { y, name } of sections) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(200);
  await page.screenshot({ path: `${outDir}/${name}.png`, type: 'png' });
  console.log(`${name} at y=${y}`);
}
await page.close();
console.log('done');
