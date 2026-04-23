// Build og-default.png — composites the real Mingyur portrait with hand-
// rendered text + dharma wheel ornament. Run via `node scripts/build-og.mjs`.
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const P_SIZE = 320; // diameter of portrait inside frame
const F_SIZE = P_SIZE + 28; // frame adds ring padding

const portrait = await sharp(path.join(root, 'src/assets/mingyur-portrait.png'))
  .resize(P_SIZE, P_SIZE, { fit: 'cover', position: 'top' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${P_SIZE}" height="${P_SIZE}"><defs><mask id="m"><rect width="${P_SIZE}" height="${P_SIZE}" fill="black"/><circle cx="${P_SIZE / 2}" cy="${P_SIZE / 2}" r="${P_SIZE / 2}" fill="white"/></mask></defs><rect width="${P_SIZE}" height="${P_SIZE}" fill="white" mask="url(#m)"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

// Compose portrait + gold halo
const portraitFramed = await sharp({
  create: { width: F_SIZE, height: F_SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    {
      input: Buffer.from(
        `<svg width="${F_SIZE}" height="${F_SIZE}"><circle cx="${F_SIZE / 2}" cy="${F_SIZE / 2}" r="${F_SIZE / 2 - 3}" fill="none" stroke="#E0A020" stroke-width="2.5" opacity="0.85"/><circle cx="${F_SIZE / 2}" cy="${F_SIZE / 2}" r="${F_SIZE / 2 - 0.5}" fill="none" stroke="#E0A020" stroke-width="1" opacity="0.3"/></svg>`,
      ),
      top: 0,
      left: 0,
    },
    { input: portrait, top: (F_SIZE - P_SIZE) / 2, left: (F_SIZE - P_SIZE) / 2 },
  ])
  .png()
  .toBuffer();

const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="#FAF8F4"/>
      <stop offset="40%" stop-color="#F6E7C8"/>
      <stop offset="100%" stop-color="#E8D8B6"/>
    </linearGradient>
    <radialGradient id="saffronGlow" cx="0.14" cy="0.25" r="0.55">
      <stop offset="0%" stop-color="#E0A020" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#E0A020" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="navyGlow" cx="0.92" cy="0.9" r="0.5">
      <stop offset="0%" stop-color="#203070" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#203070" stop-opacity="0"/>
    </radialGradient>
    <style>
      .kicker { font-family: "Inter", system-ui, sans-serif; letter-spacing: 0.22em; font-size: 22px; fill: #203070; font-weight: 700; text-transform: uppercase; }
      .title-main { font-family: "Playfair Display", "Source Serif 4", Georgia, serif; font-size: 64px; font-weight: 600; fill: #1C2B3A; letter-spacing: -0.02em; }
      .title-accent { font-family: "Playfair Display", "Source Serif 4", Georgia, serif; font-size: 64px; font-weight: 600; font-style: italic; fill: #203070; letter-spacing: -0.02em; }
      .sub { font-family: "Inter", system-ui, sans-serif; font-size: 22px; fill: #2D3748; font-weight: 500; }
      .folio { font-family: "Playfair Display", Georgia, serif; font-style: italic; font-size: 20px; fill: #E0A020; }
      .url { font-family: "Inter", system-ui, sans-serif; font-size: 17px; fill: #6B7480; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; }
      .name { font-family: "Playfair Display", Georgia, serif; font-size: 16px; fill: #203070; font-weight: 600; }
      .role { font-family: "Inter", system-ui, sans-serif; font-size: 11px; fill: #6B7480; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; }
    </style>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#saffronGlow)"/>
  <rect width="1200" height="630" fill="url(#navyGlow)"/>

  <!-- Dharma wheel — top-left, hand-drawn 8 spokes -->
  <g transform="translate(78, 84)" stroke-linecap="round">
    <circle cx="0" cy="0" r="28" fill="none" stroke="#E0A020" stroke-width="2.1"/>
    <circle cx="0" cy="0" r="8.8" fill="none" stroke="#E0A020" stroke-width="1.7"/>
    <g stroke="#E0A020" stroke-width="1.8" opacity="0.9">
      <line x1="0" y1="-27.5" x2="0" y2="-9"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(45)"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(90)"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(135)"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(180)"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(225)"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(270)"/>
      <line x1="0" y1="-27.5" x2="0" y2="-9" transform="rotate(315)"/>
    </g>
    <circle cx="0" cy="0" r="2.8" fill="#E0A020"/>
  </g>

  <text x="130" y="90" class="folio">01.</text>
  <text x="78" y="148" class="kicker">Tergar Česko</text>

  <!-- Headline: 2 lines, roman + italic accent. Kept narrow so portrait
       on the right doesn't collide. -->
  <text x="78" y="242" class="title-main">Meditace, která</text>
  <text x="78" y="312" class="title-main">se hodí</text>
  <text x="78" y="382" class="title-accent">do českého života.</text>

  <text x="78" y="448" class="sub">Yongey Mingyur Rinpočhe · Karma Kagjü</text>

  <!-- Thin rule -->
  <line x1="78" y1="528" x2="680" y2="528" stroke="#E8E4DD" stroke-width="1"/>

  <!-- Footer meta -->
  <text x="78" y="564" class="url">tergarczechia.cz</text>
  <text x="680" y="564" text-anchor="end" class="url" style="font-size:13px; letter-spacing:0.12em;">Praha · Č. Budějovice · Liberec · Online</text>

  <!-- Teacher credit below portrait -->
  <line x1="800" y1="500" x2="1068" y2="500" stroke="#E0A020" stroke-width="1" opacity="0.5"/>
  <text x="934" y="532" class="name" text-anchor="middle">Yongey Mingyur Rinpočhe</text>
  <text x="934" y="554" class="role" text-anchor="middle">Zakladatel · Tergar International</text>
</svg>`;

const bg = await sharp(Buffer.from(bgSvg)).png().toBuffer();

// Portrait placed right side — F_SIZE=348. Target center at x≈935, y≈290.
const portraitTop = 290 - F_SIZE / 2;
const portraitLeft = 935 - F_SIZE / 2;
const final = await sharp(bg)
  .composite([
    { input: portraitFramed, top: portraitTop, left: portraitLeft },
  ])
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(path.join(root, 'public/og-default.png'));

console.log('og-default.png built:', final);
