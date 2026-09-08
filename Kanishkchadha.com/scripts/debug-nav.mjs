import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'http://localhost:4321';
const out = join(__dirname, '../screenshots/debug');
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const errors = [];

// ── Test 1: Direct URL load ───────────────────────────────
{
  const page = await browser.newPage();
  page.on('console', m => { if (m.type() === 'error') errors.push(`[direct] ${m.text()}`); });
  page.on('pageerror', e => errors.push(`[direct] PAGE ERROR: ${e.message}`));
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(BASE + '/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: join(out, 'home-direct.png'), fullPage: true });
  console.log('✓ direct load screenshot saved');

  // Check what CSS classes are present on key elements
  const statsRowBg = await page.$eval('.stats-row', el => getComputedStyle(el).background).catch(() => 'MISSING');
  const heroDisplay = await page.$eval('.hero', el => getComputedStyle(el).display).catch(() => 'MISSING');
  const pageWrap = await page.$eval('.page-wrap', el => getComputedStyle(el).maxWidth).catch(() => 'MISSING');
  console.log('  .stats-row background:', statsRowBg.slice(0, 60));
  console.log('  .hero display:', heroDisplay);
  console.log('  .page-wrap max-width:', pageWrap);

  await page.close();
}

// ── Test 2: Navigate via nav link (View Transitions) ──────
{
  const page = await browser.newPage();
  page.on('console', m => { if (m.type() === 'error') errors.push(`[nav] ${m.text()}`); });
  page.on('pageerror', e => errors.push(`[nav] PAGE ERROR: ${e.message}`));
  await page.setViewport({ width: 1440, height: 900 });

  // Start on projects page, then click Home
  await page.goto(BASE + '/projects', { waitUntil: 'networkidle2' });
  console.log('✓ loaded /projects');

  // Click the Home nav link
  await page.click('a[href="/"]');
  await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {});
  await new Promise(r => setTimeout(r, 500)); // let transitions settle

  await page.screenshot({ path: join(out, 'home-via-nav.png'), fullPage: true });
  console.log('✓ nav-click screenshot saved');

  const statsRowBg = await page.$eval('.stats-row', el => getComputedStyle(el).background).catch(() => 'MISSING');
  const heroDisplay = await page.$eval('.hero', el => getComputedStyle(el).display).catch(() => 'MISSING');
  const pageWrap = await page.$eval('.page-wrap', el => getComputedStyle(el).maxWidth).catch(() => 'MISSING');
  console.log('  .stats-row background:', statsRowBg.slice(0, 60));
  console.log('  .hero display:', heroDisplay);
  console.log('  .page-wrap max-width:', pageWrap);

  await page.close();
}

await browser.close();

console.log('\n── Console errors ──────────────────────────────────');
if (errors.length === 0) {
  console.log('  None');
} else {
  errors.forEach(e => console.log(' ', e));
}
console.log('\nDone. Screenshots in screenshots/debug/');
