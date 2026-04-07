import { NextResponse } from 'next/server';
import { globSync } from 'glob';
import path from 'path';

export async function GET() {
  const baseUrl = "https://www.reseauxepaviste.fr";
  const now = new Date().toISOString();

  // Find all page.tsx files in the app directory
  const pages = globSync('src/app/**/page.tsx');
  
  const urls = pages.map(page => {
    // Convert file path to URL path
    let route = page
      .replace('src/app', '')
      .replace('/page.tsx', '');
      
    // Handle dynamic routes like [slug] by skipping them in the main map
    // (You'll need a CMS or database query for actual dynamic routes)
    if (route.includes('[')) return null;
    
    return route;
  }).filter(Boolean); // Remove nulls

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${urls.filter(url => url !== '').map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
