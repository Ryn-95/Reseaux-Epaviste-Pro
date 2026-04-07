import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://reseauxepaviste.fr";
  const now = new Date().toISOString();

  const services = [
    "/epaviste",
    "/epaviste/enlevement-epave-gratuit",
    "/epaviste/certificat-destruction-cerfa",
    "/epaviste/voiture-accidentee",
    "/epaviste/voiture-sans-carte-grise",
    "/epaviste/prime-conversion-2026",
    "/epaviste/reglementation-vhu",
    "/depannage-auto",
    "/depannage-auto/panne-batterie",
    "/depannage-auto/erreur-carburant",
    "/depannage-auto/remorquage",
    "/depannage-auto/urgence-autoroute"
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${services.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
