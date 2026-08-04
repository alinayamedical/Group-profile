/**
 * export_pdf.mjs — Alinaya Business Card PDF Export
 *
 * Generates a print-ready 2-page PDF: page 1 = Front, page 2 = Back.
 * Output: Corporate_Identity/Alinaya_Business_Card_Print.pdf
 *
 * HOW TO RUN (from the Assets folder which has Puppeteer installed):
 *   cd "../00_Alinaya_Group/Assets"
 *   node export_bc_pdf.mjs
 *
 * OR install Puppeteer locally first:
 *   cd Corporate_Identity
 *   npm init -y && npm install puppeteer
 *   node export_pdf.mjs
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dir = path.dirname(__filename);

// Resolve HTML path relative to this script
const HTML_PATH = path.resolve(__dir, 'Alinaya_Business_Card.html');
const OUT_PDF   = path.resolve(__dir, 'Alinaya_Business_Card_Print.pdf');

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

// Load HTML content
await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 20000 });

// Wait for Google Fonts
await page.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 800));

console.log('Exporting PDF (2 pages: front + back)...');

// The HTML's @media print CSS handles @page { size: 89mm 58mm; margin: 0 }
// and splits front/back with page-break-after: always.
const pdfBuffer = await page.pdf({
  width:           '89mm',
  height:          '58mm',
  printBackground: true,
  margin:          { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();

fs.writeFileSync(OUT_PDF, pdfBuffer);

console.log('');
console.log('✓ PDF saved:', OUT_PDF);
console.log('  Page 1 — Front (Emerald)');
console.log('  Page 2 — Back  (White)');
console.log('');
console.log('Print instructions:');
console.log('  • Actual card size: 85 × 54 mm');
console.log('  • This PDF includes 2mm bleed on all sides (89 × 58 mm page)');
console.log('  • Print at 100% scale, no margins');
console.log('  • Trim to 85 × 54 mm after printing');
