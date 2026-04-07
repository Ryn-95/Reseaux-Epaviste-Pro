import { NextResponse } from 'next/server';
import { top50Cities } from '@/data/cities';

export async function GET() {
  const baseUrl = "https://www.reseauxepaviste.fr";
  const now = new Date().toISOString();

  function normalizeSlug(name: string) {
    return name.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .replace(/'/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  const idfDepartments = [
    { nom: "Paris", numero: "75" },
    { nom: "Hauts-de-Seine", numero: "92" },
    { nom: "Seine-Saint-Denis", numero: "93" },
    { nom: "Val-de-Marne", numero: "94" },
    { nom: "Yvelines", numero: "78" },
    { nom: "Essonne", numero: "91" },
    { nom: "Seine-et-Marne", numero: "77" },
    { nom: "Val-d'Oise", numero: "95" }
  ];

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
    "/depannage-auto/urgence-autoroute",
    "/blog",
    "/faq",
    "/a-propos",
    "/contact",
    "/mentions-legales"
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${services.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  `).join('')}
  ${idfDepartments.map(dep => `
  <url>
    <loc>${baseUrl}/epaviste-${normalizeSlug(dep.nom)}-${dep.numero}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
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
