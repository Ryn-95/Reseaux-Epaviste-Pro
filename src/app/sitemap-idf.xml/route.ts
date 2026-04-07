import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://reseauxepaviste.fr";
  const now = new Date().toISOString();

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

  function normalizeSlug(name: string) {
    return name.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .replace(/'/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${idfDepartments.map(dep => `
  <url>
    <loc>${baseUrl}/epaviste-${normalizeSlug(dep.nom)}-${dep.numero}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
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
