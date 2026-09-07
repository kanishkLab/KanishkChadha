import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.SCREENSHOT_URL || 'http://localhost:4321';

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'case-study', path: '/projects/lead-qualification-agent' },
  { name: 'blog', path: '/blog' },
  { name: 'blog-post', path: '/blog/experiments/observability-beyond-logging' },
  // /journey and /stuff-i-like are disabled (src/pages/_*.astro) and /contact
  // is now a redirect to /#contact, so none of them are shootable routes.
  // Re-add them here if those pages are ever restored.
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
  // iPhone Pro Max class. Worth its own pass: layout bugs have hidden in the
  // 390-430 gap before, where a grid column gets wide enough to expose a
  // shrink-to-fit child that looks fine at 390.
  { name: 'mobile-max', width: 430, height: 932 },
];

const outDir = join(__dirname, '../screenshots/auto');
mkdirSync(outDir, { recursive: true });

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    // Containers and CI run as root, where Chromium's sandbox refuses to
    // start. Opt out only when PUPPETEER_NO_SANDBOX is set so local runs
    // keep the sandbox on.
    args: process.env.PUPPETEER_NO_SANDBOX ? ['--no-sandbox'] : [],
  });

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
