import sharp from 'sharp';
import { mkdir, writeFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const ASSETS = path.join(ROOT, 'src', 'assets');
const PROJECTS = path.join(ASSETS, 'projects');

const HERO_URL =
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600';

async function toWebp(inputPath, outputPath, { width, quality = 78 } = {}) {
  let pipeline = sharp(inputPath).rotate();
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  await pipeline.webp({ quality, effort: 5 }).toFile(outputPath);
  const { size } = await sharp(outputPath).metadata().then(async () => {
    const { stat } = await import('fs/promises');
    return stat(outputPath);
  });
  console.log(`Wrote ${path.relative(ROOT, outputPath)} (${(size / 1024).toFixed(1)} KB)`);
}

async function downloadHero() {
  const tmp = path.join(ASSETS, '_hero-source.jpg');
  const out = path.join(ASSETS, 'hero-students.webp');
  console.log('Downloading hero source…');
  const res = await fetch(HERO_URL);
  if (!res.ok) throw new Error(`Hero download failed: ${res.status}`);
  await writeFile(tmp, Buffer.from(await res.arrayBuffer()));
  await toWebp(tmp, out, { width: 1200, quality: 80 });
  try {
    await unlink(tmp);
  } catch {
    console.warn(`Could not remove temp file (locked): ${tmp}`);
  }
}

async function convertLocalPngs() {
  const jobs = [
    {
      in: path.join(ASSETS, 'trainer-rama-chandra-rao.png'),
      out: path.join(ASSETS, 'trainer-rama-chandra-rao.webp'),
      width: 640,
      quality: 80,
    },
    {
      in: path.join(PROJECTS, 'cli-project.png'),
      out: path.join(PROJECTS, 'cli-project.webp'),
      width: 960,
      quality: 78,
    },
    {
      in: path.join(PROJECTS, 'gui-project.png'),
      out: path.join(PROJECTS, 'gui-project.webp'),
      width: 960,
      quality: 78,
    },
    {
      in: path.join(PROJECTS, 'static-web-project.png'),
      out: path.join(PROJECTS, 'static-web-project.webp'),
      width: 960,
      quality: 78,
    },
    {
      in: path.join(PROJECTS, 'dynamic-web-project.png'),
      out: path.join(PROJECTS, 'dynamic-web-project.webp'),
      width: 960,
      quality: 78,
    },
  ];

  for (const job of jobs) {
    if (!existsSync(job.in)) {
      console.warn(`Skip missing: ${job.in}`);
      continue;
    }
    await toWebp(job.in, job.out, { width: job.width, quality: job.quality });
  }
}

await mkdir(PROJECTS, { recursive: true });
await downloadHero();
await convertLocalPngs();
console.log('Asset optimization complete.');
