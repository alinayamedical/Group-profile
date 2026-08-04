/**
 * export_bc_pdf.mjs — Business Card PDF Export
 * Runs from Assets folder (which has Puppeteer installed).
 * Run: node export_bc_pdf.mjs
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dir = path.dirname(__filename);

const HTML_PATH = path.resolve(__dir, '../../Corporate_Identity/Alinaya_Business_Card.html');
const OUT_PDF   = path.resolve(__dir, '../../Corporate_Identity/Alinaya_Business_Card_Print.pdf');

if (!fs.existsSync(HTML_PATH)) {
  console.error('ERROR: Not found:', HTML_PATH);
  process.exit(1);
}

const html = fs.readFileSync(HTML_PATH, 'utf8');

console.log('Launching browser...');
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 20000 });
await page.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 800));

console.log('Exporting PDF (front + back)...');

const pdfBuffer = await page.pdf({
  width:           '89mm',
  height:          '58mm',
  printBackground: true,
  margin:          { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();

fs.writeFileSync(OUT_PDF, pdfBuffer);

console.log('Done ->', OUT_PDF);
console.log('Page 1 = Front (Emerald)  |  Page 2 = Back (White)');
console.log('Trim to 85x54mm after printing (2mm bleed included).');
