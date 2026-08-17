import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.SCREENSHOT_URL || 'http://localhost:4321';

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'writing', path: '/writing' },
  { name: 'journey', path: '/journey' },
  { name: 'tools', path: '/tools' },
  { name: 'speaking', path: '/speaking' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const outDir = join(__dirname, '../screenshots/auto');
mkdirSync(outDir, { recursive: true });

async function takeScreenshots() {
  const browser = await puppeteer.launch({ headless: true });

  for (const viewport of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: viewport.width, height: viewport.height });

    for (const { name, path } of PAGES) {
      const url = `${BASE_URL}${path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
        const file = join(outDir, `${name}-${viewport.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`✓ ${name} (${viewport.name}) → ${file}`);
      } catch (err) {
        console.warn(`✗ ${name} (${viewport.name}): ${err.message}`);
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('\nDone. Screenshots saved to screenshots/auto/');
}

takeScreenshots();
