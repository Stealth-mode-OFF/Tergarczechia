import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0] || await browser.newContext();
const page = await ctx.newPage();
await page.setViewportSize({ width: 390, height: 844 });

const outDir = '/tmp/tergar-audit/mobile-dyn';
fs.mkdirSync(outDir, { recursive: true });

const url = 'https://tergarczechia-three.vercel.app/?v=' + Date.now();
await page.goto(url, { waitUntil: 'networkidle' });

const sections = [
  { selector: '.hero', name: '01-hero' },
  { selector: '.seg-header', name: '02-segments' },
  { selector: '.path-head', name: '03-path' },
  { selector: '.teacher', name: '04-teacher' },
  { selector: '.next-event', name: '05-event' },
  { selector: '.groups-teaser', name: '06-groups' },
  { selector: '.ig-section', name: '07-instagram' },
  { selector: '.end-cta', name: '08-end' },
];

for (const { selector, name } of sections) {
  try {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
      window.scrollBy(0, -72);
    }, selector);
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${outDir}/${name}.png`, type: 'png' });
    console.log(`${name} captured`);
  } catch (e) {
    console.log(`${name}: ${e.message}`);
  }
}
await page.close();
console.log('done');
