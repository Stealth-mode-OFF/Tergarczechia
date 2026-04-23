import { chromium } from 'playwright';
import fs from 'node:fs';

const URL_BASE = 'https://tergarczechia-three.vercel.app';
const PAGES = [
  { slug: '/', name: 'home' },
  { slug: '/meditace', name: 'meditace' },
  { slug: '/cesta', name: 'cesta' },
  { slug: '/o-nas', name: 'o-nas' },
  { slug: '/daru', name: 'daru' },
  { slug: '/faq', name: 'faq' },
  { slug: '/skupiny', name: 'skupiny' },
  { slug: '/kontakt', name: 'kontakt' },
];

const cacheBust = '?v=' + Date.now();

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0] || await browser.newContext();
const page = await ctx.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

const outDir = '/tmp/tergar-audit';
fs.mkdirSync(outDir, { recursive: true });

for (const { slug, name } of PAGES) {
  try {
    await page.goto(URL_BASE + slug + cacheBust, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `${outDir}/${name}-top.png`,
      type: 'png',
      fullPage: false,
    });
    // Check for specific issues
    const issues = await page.evaluate(() => {
      const bugs = [];
      // Check all h1/h2/h3 for auto-hyphens rendering
      document.querySelectorAll('h1, h2, h3').forEach((h) => {
        const cs = getComputedStyle(h);
        if (cs.hyphens === 'auto') bugs.push('heading has hyphens:auto: ' + h.tagName + ' "' + h.textContent.slice(0, 40) + '"');
      });
      // Check for very small images claiming to be hero-portrait-like
      document.querySelectorAll('img').forEach((img) => {
        const r = img.getBoundingClientRect();
        if (r.width > 0 && r.width < 100 && (img.alt || '').toLowerCase().includes('mingyur')) {
          bugs.push('tiny mingyur image: ' + r.width + 'x' + r.height);
        }
      });
      // Look for empty Section containers (blank space)
      document.querySelectorAll('section').forEach((s) => {
        const r = s.getBoundingClientRect();
        const textLen = s.textContent.trim().length;
        if (r.height > 300 && textLen < 10 && !s.querySelector('img')) {
          bugs.push('large empty section: h=' + r.height + 'px');
        }
      });
      return bugs;
    });
    console.log(`${name}: ${issues.length === 0 ? 'OK' : issues.join('; ')}`);
  } catch (e) {
    console.log(`${name}: ERROR ${e.message}`);
  }
}
await page.close();
console.log('done. screenshots in', outDir);
