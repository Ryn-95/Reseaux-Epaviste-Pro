import { NextResponse } from 'next/server';
import { top50Cities } from '@/data/cities';

export async function GET() {
  const baseUrl = "https://reseauxepaviste.fr";
  const now = new Date().toISOString();

  function normalizeSlug(name: string) {
    return name.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .replace(/'/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${top50Cities.map(city => `
  <url>
    <loc>${baseUrl}/epaviste-${normalizeSlug(city.ville)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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
