import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// Background — white
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Load and draw the logo centered
const logo = await loadImage(resolve(root, 'public/images/logo-full.png'));

// Scale logo to fit nicely (max width ~500px, keep aspect ratio)
const maxLogoWidth = 500;
const scale = Math.min(maxLogoWidth / logo.width, 1);
const logoW = logo.width * scale;
const logoH = logo.height * scale;
const logoX = (WIDTH - logoW) / 2;
const logoY = 180;

ctx.drawImage(logo, logoX, logoY, logoW, logoH);

// Draw slogan below logo
const sloganY = logoY + logoH + 60;

ctx.textAlign = 'center';
ctx.textBaseline = 'top';

// Line 1: "Lighten your emails."
ctx.font = '600 36px "Segoe UI", Arial, sans-serif';
ctx.fillStyle = '#2563eb'; // blue accent
ctx.fillText('Lighten your emails.', WIDTH / 2, sloganY);

// Line 2: "Lighten your impact."
ctx.font = '600 36px "Segoe UI", Arial, sans-serif';
ctx.fillStyle = '#16a34a'; // green accent
ctx.fillText('Lighten your impact.', WIDTH / 2, sloganY + 50);

// Save
const outputPath = resolve(root, 'public/images/og-image.png');
writeFileSync(outputPath, canvas.toBuffer('image/png'));
console.log(`OG image generated at: ${outputPath}`);
