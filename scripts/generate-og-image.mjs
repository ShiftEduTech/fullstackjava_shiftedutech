import sharp from 'sharp';

const logo = await sharp('src/assets/shiftedutech-logo.png')
  .resize({ width: 420, withoutEnlargement: true })
  .png()
  .toBuffer();

const { width: logoWidth = 420 } = await sharp(logo).metadata();

const svg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="48" y="48" width="1104" height="534" rx="32" fill="#fff7ed" fill-opacity="0.12"/>
  <text x="600" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="white">Full Stack Java Course with Placement</text>
  <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#ffedd5">Hyderabad (Kondapur/KPHB) &amp; Eluru</text>
</svg>
`);

await sharp(svg)
  .composite([
    {
      input: logo,
      top: 120,
      left: Math.round((1200 - logoWidth) / 2),
    },
  ])
  .png({ quality: 90 })
  .toFile('public/og-image.png');

console.log('Wrote public/og-image.png');
