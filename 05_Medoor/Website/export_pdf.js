const puppeteer = require('puppeteer');
const path = require('path');

const htmlPath = path.resolve(__dirname, 'print.html');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

async function exportPdf(lang) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files', '--disable-web-security']
  });
  const page = await browser.newPage();

  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

  // Load fonts
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  if (lang === 'ar') {
    await page.evaluate(() => {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    });
    await new Promise(r => setTimeout(r, 500));
  }

  const suffix = lang === 'ar' ? '_AR' : '';
  const outFile = path.resolve(__dirname, `Medoor_Profile_2026${suffix}_v7.pdf`);

  await page.pdf({
    path: outFile,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    scale: 1
  });

  await browser.close();
  console.log(`Exported: ${outFile}`);
}

(async () => {
  await exportPdf('en');
  await exportPdf('ar');
  console.log('Done.');
})();
