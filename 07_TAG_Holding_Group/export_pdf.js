const puppeteer = require('puppeteer');
const path = require('path');

const htmlPath = path.resolve(__dirname, 'print.html');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
const outFile = path.resolve(__dirname, 'Documents', 'TAG_Holding_Corporate_Profile_2026.pdf');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--allow-file-access-from-files',
      '--disable-web-security'
    ]
  });

  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  await page.pdf({
    path: outFile,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('Exported:', outFile);
})();
