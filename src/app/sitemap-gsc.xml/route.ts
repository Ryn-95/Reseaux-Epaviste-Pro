import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

  const top50Cities = [
    {"ville":"Paris","region":"Île-de-France","departement":"75"},
    {"ville":"Marseille","region":"Provence-Alpes-Côte d'Azur","departement":"13"},
    {"ville":"Lyon","region":"Auvergne-Rhône-Alpes","departement":"69"},
    {"ville":"Toulouse","region":"Occitanie","departement":"31"},
    {"ville":"Nice","region":"Provence-Alpes-Côte d'Azur","departement":"06"},
    {"ville":"Nantes","region":"Pays de la Loire","departement":"44"},
    {"ville":"Montpellier","region":"Occitanie","departement":"34"},
    {"ville":"Strasbourg","region":"Grand Est","departement":"67"},
    {"ville":"Bordeaux","region":"Nouvelle-Aquitaine","departement":"33"},
    {"ville":"Lille","region":"Hauts-de-France","departement":"59"},
    {"ville":"Rennes","region":"Bretagne","departement":"35"},
    {"ville":"Reims","region":"Grand Est","departement":"51"},
    {"ville":"Toulon","region":"Provence-Alpes-Côte d'Azur","departement":"83"},
    {"ville":"Saint-Étienne","region":"Auvergne-Rhône-Alpes","departement":"42"},
    {"ville":"Le Havre","region":"Normandie","departement":"76"},
    {"ville":"Grenoble","region":"Auvergne-Rhône-Alpes","departement":"38"},
    {"ville":"Dijon","region":"Bourgogne-Franche-Comté","departement":"21"},
    {"ville":"Angers","region":"Pays de la Loire","departement":"49"},
    {"ville":"Saint-Denis","region":"Île-de-France","departement":"93"},
    {"ville":"Le Mans","region":"Pays de la Loire","departement":"72"},
    {"ville":"Aix-en-Provence","region":"Provence-Alpes-Côte d'Azur","departement":"13"},
    {"ville":"Brest","region":"Bretagne","departement":"29"},
    {"ville":"Villeurbanne","region":"Auvergne-Rhône-Alpes","departement":"69"},
    {"ville":"Nîmes","region":"Occitanie","departement":"30"},
    {"ville":"Limoges","region":"Nouvelle-Aquitaine","departement":"87"},
    {"ville":"Clermont-Ferrand","region":"Auvergne-Rhône-Alpes","departement":"63"},
    {"ville":"Tours","region":"Centre-Val de Loire","departement":"37"},
    {"ville":"Amiens","region":"Hauts-de-France","departement":"80"},
    {"ville":"Metz","region":"Grand Est","departement":"57"},
    {"ville":"Perpignan","region":"Occitanie","departement":"66"},
    {"ville":"Besançon","region":"Bourgogne-Franche-Comté","departement":"25"},
    {"ville":"Orléans","region":"Centre-Val de Loire","departement":"45"},
    {"ville":"Boulogne-Billancourt","region":"Île-de-France","departement":"92"},
    {"ville":"Mulhouse","region":"Grand Est","departement":"68"},
    {"ville":"Rouen","region":"Normandie","departement":"76"},
    {"ville":"Caen","region":"Normandie","departement":"14"},
    {"ville":"Nancy","region":"Grand Est","departement":"54"},
    {"ville":"Argenteuil","region":"Île-de-France","departement":"95"},
    {"ville":"Montreuil","region":"Île-de-France","departement":"93"},
    {"ville":"Roubaix","region":"Hauts-de-France","departement":"59"},
    {"ville":"Tourcoing","region":"Hauts-de-France","departement":"59"},
    {"ville":"Dunkerque","region":"Hauts-de-France","departement":"59"},
    {"ville":"Nanterre","region":"Île-de-France","departement":"92"},
    {"ville":"Créteil","region":"Île-de-France","departement":"94"},
    {"ville":"Avignon","region":"Provence-Alpes-Côte d'Azur","departement":"84"},
    {"ville":"Vitry-sur-Seine","region":"Île-de-France","departement":"94"},
    {"ville":"Poitiers","region":"Nouvelle-Aquitaine","departement":"86"},
    {"ville":"Courbevoie","region":"Île-de-France","departement":"92"},
    {"ville":"Versailles","region":"Île-de-France","departement":"78"}
  ];

  const services = [
    "/",
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

  const urls = [
    ...services,
    ...idfDepartments.map(dep => `/epaviste-${normalizeSlug(dep.nom)}-${dep.numero}`),
    ...top50Cities.map(city => `/epaviste-${normalizeSlug(city.ville)}`)
  ];

  const generatedIdf = [
    "paris", "seine-et-marne", "yvelines", "essonne", "hauts-de-seine", "seine-saint-denis", "val-de-marne", "val-d-oise",
    "boulogne-billancourt", "argenteuil", "montreuil", "saint-denis", "versailles", "nanterre", "creteil", "aulnay-sous-bois",
    "vitry-sur-seine", "colombes", "asnieres-sur-seine", "champigny-sur-marne", "rueil-malmaison", "saint-maur-des-fosses",
    "courbevoie", "aubervilliers", "drancy", "neuilly-sur-seine", "antony", "noisy-le-grand", "sarcelles", "cergy",
    "levallois-perret", "issy-les-moulineaux", "maisons-alfort", "ivry-sur-seine", "fontenay-sous-bois", "clichy",
    "sartrouville", "pantin", "evry-courcouronnes", "meaux", "clamart", "villejuif", "sevran", "le-blanc-mesnil",
    "bondy", "epinay-sur-seine", "chelles", "montrouge", "bobigny", "vincennes", "bussy-saint-georges", "massy",
    "saint-ouen", "corbeil-essonnes", "melun"
  ];
  
  generatedIdf.forEach(city => {
    urls.push(`/epaviste/${city}`);
    urls.push(`/depannage-auto/${city}`);
    urls.push(`/remorquage/${city}`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
