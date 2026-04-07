import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';

const baseUrl = "https://www.reseauxepaviste.fr";
const now = new Date().toISOString();

const pages = globSync('src/app/**/page.tsx');

const urls = pages.map(page => {
  let route = page
    .replace('src/app', '')
    .replace('/page.tsx', '');
    
  if (route.includes('[')) return null;
  return route;
}).filter(Boolean);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${urls.filter(url => url !== '').map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
console.log(`Sitemap generated successfully with ${urls.length} URLs!`);
