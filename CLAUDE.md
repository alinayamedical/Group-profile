# Alinaya Alrafia Medical Company — Project Instructions

## Company

- **English name:** Alinaya Alrafia Medical Company
- **Arabic name:** شركة العناية الرفيعة الطبية
- **Short name:** Alinaya Medical
- **Website:** alinayamedical.com
- **Founded:** 2023, Riyadh, Saudi Arabia
- **Context:** Saudi healthcare company, aligned with Vision 2030

## Brand Decisions (All Locked — July 2026)

### Logo
- **Style:** Abstract Wedge — Shape H (Clean Minimalist)
- **Mark:** Two upper triangular wedges (left solid, right 62% opacity) forming an implied "A" peak. Gold diamond completing the rhombus below. White vertical line at center apex.
- **Reference:** `00_Alinaya_Group/Assets/Logo_Palette_Compare.html` (Palette 2 column)
- **Production SVGs:** `00_Alinaya_Group/Assets/Logo_Icon_Only.svg`, `Logo_Full_Color.svg`, `Logo_White.svg`, `Logo_Mono_Black.svg`, `Logo_Mono_White.svg`, `Logo_Icon_Mono_Black.svg`
- **PNG exports:** `Final/PNG/` — 15 files: wordmarks 2×/3×, icons 280/400px, favicons 32/192px, Apple Touch 180px, social 400px
- **Favicon:** `Final/PNG/Favicon_32px.png` ✓

### Colors (Palette 2 — Confirmed)
| Role | Hex | Use |
|---|---|---|
| Primary — Emerald | `#1B4D3E` | Navbar, hero, footer, CTAs, headings |
| Accent — Gold | `#C9A84C` | Dividers, highlights, icons, accents |
| White | `#FFFFFF` | Text on dark, cards |
| Off-white | `#F8F9FC` | Page background, alternating sections |
| Charcoal | `#1A1A2E` | Body text on light backgrounds |
| Grey | `#6B7280` | Subheadings, captions, labels |
| Border | `#E5E7EB` | Card borders, subtle separators |

### Typography
- **English:** Raleway (Google Fonts) — weights 400, 500, 600, 700
- **Arabic:** Cairo (Google Fonts) — weights 400, 500, 600, 700
- H1: Bold 700 | 56–64px (EN) / 48–56px (AR)
- H2: SemiBold 600 | 36–42px (EN) / 32–36px (AR)
- Body: Regular 400 | 16px | line-height 1.7

### Slogan (Option 11 — Selected)
- **English:** "Diagnostic Precision. Professional Integrity."
- **Arabic:** "دقة التشخيص وأمانة المهنة."

## Key Files

```
CompanyProfile/
├── CLAUDE.md                                        ← this file
├── Final/                                           ← PRODUCTION EXPORTS (July 2026)
│   ├── PNG/                                         ← 15 PNG files, all sizes
│   └── SVG/                                         ← 7 production SVG source files
├── Corporate_Identity/
│   ├── Alinaya_Brand_Guide.html                    ← full brand book (14 sections)
│   ├── Alinaya_Business_Card.html                  ← business card template
│   └── Card_Front/Back_Print.svg                   ← print-ready card artwork
├── 00_Alinaya_Group/
│   ├── Assets/
│   │   ├── Logo_Icon_Only.svg                      ← 140×140 icon mark
│   │   ├── Logo_Full_Color.svg                     ← 620×140 full wordmark
│   │   ├── Logo_White.svg                          ← 620×140 reversed (for dark bg)
│   │   ├── Logo_Mono_Black.svg                     ← 620×140 monochrome dark
│   │   ├── Logo_Mono_White.svg                     ← 620×140 monochrome white
│   │   ├── Logo_Icon_Mono_Black.svg                ← 140×140 icon mono dark
│   │   ├── Logo_Master_Source.svg                  ← master source
│   │   ├── export_png.js                           ← PNG export script (Node/Puppeteer)
│   │   └── _Archive/                               ← superseded explorations
│   ├── Design/
│   │   └── Alinaya_Design_Spec.txt                 ← full design specification
│   └── Website Content/
│       ├── Alinaya_Group_Website_Content.txt       ← bilingual EN/AR copy (canonical)
│       └── Alinaya_Slogan_Options.txt              ← all slogan options (11 selected)
├── 01_Al_Jood_Medical/
├── 05_Medoor/
├── 06_W_Holding_Group/
├── Competition/
└── _Planning/
```

## Coding Conventions

- All HTML files are single self-contained files (no external CSS/JS files beyond Google Fonts CDN)
- SVG logos are always inlined — do not use `<img src>` for logo references
- Bilingual: always provide both EN and AR text; Arabic uses `dir="rtl"` and Cairo font
- Dark professional aesthetic: page bg `#0C1410`, white section cards, gold section headers
- Test on Safari iOS (most common browser in Saudi Arabia)
- WhatsApp link format: `https://wa.me/966XXXXXXXXX`

## What's Pending

- Homepage website (HTML/CSS)
- 5 subsidiary pages: Al Jood Medical, SATECH, Alwarood, Alkhawaled, Medoor
- Fill in real data: address, phone, WhatsApp, professional count, patient count, cities
- Privacy Policy page (PDPL compliance)
- Medical disclaimer in footer
- Leadership / About section with named executives
- CR (Commercial Registration) number in legal footer

## Completed (July 2026)

- ✅ Logo mark — Abstract Wedge, Palette 2 (Emerald + Gold)
- ✅ All 6 SVG logo variants (color, white, mono black, mono white, icon, icon mono)
- ✅ 15 PNG exports in `Final/PNG/` — all sizes, transparent + solid backgrounds
- ✅ Favicon 32×32 and 192×192 in `Final/PNG/`
- ✅ Apple Touch Icon 180×180 (Emerald bg)
- ✅ Social profile icon 400×400 (Emerald bg)
- ✅ Brand Guide (14 sections)
- ✅ Business card template (front + back)
- ✅ Design Spec (color conflict resolved — all Navy #1B2E5E removed)
- ✅ Canonical Mission & Vision (unified across all documents)
- ✅ Arabic copy improvements (hero, about, key figures)
