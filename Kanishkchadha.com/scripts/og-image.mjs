/**
 * Generates public/og-image.png — the social card shown when any page on the
 * site is shared to LinkedIn, Slack, WhatsApp or X.
 *
 * Rendered through a headless browser rather than drawn with sharp so it can
 * use the real Playfair Display + Manrope webfonts from Google Fonts. That
 * keeps the card on the same type system as the homepage instead of
 * approximating it with whatever serif the build machine happens to have.
 *
 *   node scripts/og-image.mjs
 *
 * 1200x630 is the size LinkedIn, X and Slack all crop from. Re-run this after
 * changing the name, title or brand colours.
 */
import puppeteer from 'puppeteer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/og-image.png');

const NAVY = '#092634';
const ORANGE = '#ff6e42';

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Manrope:wght@500;600;700;800&family=Inter:wght@800&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px;
    background:${NAVY};
    font-family:'Manrope', system-ui, sans-serif;
    color:#fff;
    position:relative;
    overflow:hidden;
    display:flex; flex-direction:column;
    padding:72px 80px;
  }
  /* Faint diagonal hatch, same texture language as the case-study cover art */
  body::before {
    content:''; position:absolute; inset:0;
    background-image:repeating-linear-gradient(
      45deg, rgba(255,255,255,.022) 0 2px, transparent 2px 9px);
  }
  /* Oceanic glow bottom-right so the card isn't a flat rectangle */
  body::after {
    content:''; position:absolute;
    right:-180px; bottom:-260px; width:720px; height:720px; border-radius:50%;
    background:radial-gradient(circle, rgba(0,78,114,.55) 0%, rgba(9,38,52,0) 70%);
  }
  .inner { position:relative; z-index:2; display:flex; flex-direction:column; height:100%; }

  .lockup { display:flex; align-items:center; gap:16px; }
  .monogram {
    font-family:'Inter', system-ui, sans-serif; font-weight:800;
    font-size:44px; letter-spacing:-.08em; line-height:1; color:#fff;
  }
  .monogram i { color:${ORANGE}; font-style:normal; }
  .name {
    font-weight:700; font-size:17px; letter-spacing:.04em;
    text-transform:uppercase; color:rgba(255,255,255,.72);
  }

  .headline {
    font-family:'Playfair Display', Georgia, serif;
    font-weight:600; font-size:69px; line-height:1.1; letter-spacing:-.025em;
    margin-top:auto; max-width:19ch;
  }
  .headline em { font-style:normal; color:${ORANGE}; }

  .sub {
    margin-top:26px; font-size:23px; line-height:1.45; font-weight:500;
    color:rgba(255,255,255,.68); max-width:36ch;
  }

  .rule { margin-top:38px; height:3px; width:76px; background:${ORANGE}; border-radius:2px; }

  .foot {
    margin-top:30px; display:flex; align-items:center; gap:14px;
    font-size:15px; font-weight:600; letter-spacing:.14em;
    text-transform:uppercase; color:rgba(255,255,255,.42);
  }
  .foot span.dot { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,.3); }
</style>
</head>
<body>
  <div class="inner">
    <div class="lockup">
      <div class="monogram">K<i>C</i></div>
      <div class="name">Kanishk Chadha</div>
    </div>

    <h1 class="headline">I build the data layer marketing runs on &mdash; and the <em>AI agents</em> that act on it.</h1>
    <div class="rule"></div>
    <div class="foot">
      <span>Martech</span><span class="dot"></span>
      <span>Analytics</span><span class="dot"></span>
      <span>Automation</span><span class="dot"></span>
      <span>Calgary</span>
    </div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: process.env.PUPPETEER_NO_SANDBOX ? ['--no-sandbox'] : [],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
// Belt and braces: don't shoot until the webfonts have actually swapped in.
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: OUT, type: 'png' });
await browser.close();
console.log(`og-image written to ${OUT}`);
