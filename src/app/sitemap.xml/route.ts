import { NextResponse } from 'next/server';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.reseauxepaviste.fr/sitemap-home.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.reseauxepaviste.fr/sitemap-services.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.reseauxepaviste.fr/sitemap-idf.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.reseauxepaviste.fr/sitemap-national.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.reseauxepaviste.fr/sitemap-blog.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
