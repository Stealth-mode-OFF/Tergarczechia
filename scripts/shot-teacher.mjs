import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0] || await browser.newContext();
const page = await ctx.newPage();

// Mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('https://tergarczechia-three.vercel.app/?v=' + Date.now(), { waitUntil: 'networkidle' });
await page.evaluate(() => {
  const q = document.querySelector('.teacher-quote');
  if (q) q.scrollIntoView({ block: 'center', behavior: 'instant' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/tergar-audit/teacher-mobile.png' });

// Desktop
await page.setViewportSize({ width: 1440, height: 900 });
await page.reload({ waitUntil: 'networkidle' });
await page.evaluate(() => {
  const q = document.querySelector('.teacher-quote');
  if (q) q.scrollIntoView({ block: 'center', behavior: 'instant' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/tergar-audit/teacher-desktop.png' });

await page.close();
console.log('done');
