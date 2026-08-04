import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const jobs = [
  { svg: 'Logo_Icon_Only.svg',  out: 'Logo_Icon_Only_400px.png', pw: 400,  ph: 400  },
  { svg: 'Logo_Icon_Only.svg',  out: 'Logo_Icon_Only_280px.png', pw: 280,  ph: 280  },
  { svg: 'Logo_Icon_Only.svg',  out: 'Favicon_32x32.png',        pw: 32,   ph: 32   },
  { svg: 'Logo_Full_Color.svg', out: 'Logo_Full_Color_2x.png',   pw: 1240, ph: 280  },
  { svg: 'Logo_Full_Color.svg', out: 'Logo_Full_Color_3x.png',   pw: 1860, ph: 420  },
  { svg: 'Logo_White.svg',      out: 'Logo_White_2x.png',        pw: 1240, ph: 280  },
  { svg: 'Logo_White.svg',      out: 'Logo_White_3x.png',        pw: 1860, ph: 420  },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-web-security'],
});
const page = await browser.newPage();

for (const job of jobs) {
  const svgRaw = fs.readFileSync(path.join(__dirname, job.svg), 'utf8');

  // Strip width/height attrs from <svg> so CSS controls the size
  const svgScaled = svgRaw
    .replace(/(<svg[^>]*)\s+width="[^"]*"/, '$1')
    .replace(/(<svg[^>]*)\s+height="[^"]*"/, '$1')
    // Remove @import from SVG style (fonts loaded via HTML <link> instead)
    .replace(/@import url\([^)]+\);?\s*/g, '');

  const html = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&family=Cairo:wght@600&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:${job.pw}px; height:${job.ph}px; background:transparent; overflow:hidden; }
  svg { width:${job.pw}px !important; height:${job.ph}px !important; display:block; }
</style>
</head><body>${svgScaled}</body></html>`;

  await page.setViewport({ width: job.pw, height: job.ph, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 600));

  const isTransparent = !job.svg.includes('White');
  await page.screenshot({
    path: path.join(__dirname, job.out),
    type: 'png',
    omitBackground: isTransparent,
    clip: { x: 0, y: 0, width: job.pw, height: job.ph },
  });

  console.log(`✓ ${job.out}  (${job.pw}×${job.ph}px)`);
}

await browser.close();
console.log('\nAll PNG exports complete.');
