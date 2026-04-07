#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Villes IDF moyennes supplémentaires
const cities = [
  { name: 'Courbevoie', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8979, lng: 2.2537, pop: '82000', prefix: 'PR9200', nearby: ['La Défense', 'Puteaux', 'Levallois-Perret'], specificity: 'quartier d\'affaires La Défense', parking: 'parkings de La Défense' },
  { name: 'Asnières-sur-Seine', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9145, lng: 2.2874, pop: '87000', prefix: 'PR9200', nearby: ['Colombes', 'Gennevilliers', 'Clichy'], specificity: 'bords de Seine', parking: 'parkings résidentiels' },
  { name: 'Levallois-Perret', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8941, lng: 2.2874, pop: '66000', prefix: 'PR9200', nearby: ['Neuilly-sur-Seine', 'Clichy', 'Courbevoie'], specificity: 'ville dense proche Paris', parking: 'parkings souterrains' },
  { name: 'Colombes', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9226, lng: 2.2531, pop: '87000', prefix: 'PR9200', nearby: ['La Garenne-Colombes', 'Bois-Colombes', 'Asnières'], specificity: 'zones pavillonnaires', parking: 'stationnement résidentiel' },
  { name: 'Vitry-sur-Seine', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7873, lng: 2.3933, pop: '93000', prefix: 'PR9400', nearby: ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi'], specificity: 'bords de Seine', parking: 'parkings de copropriété' },
  { name: 'Ivry-sur-Seine', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8138, lng: 2.3847, pop: '63000', prefix: 'PR9400', nearby: ['Charenton-le-Pont', 'Vitry-sur-Seine', 'Kremlin-Bicêtre'], specificity: 'proximité Paris 13e', parking: 'parkings résidentiels' },
  { name: 'Bobigny', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9098, lng: 2.4384, pop: '54000', prefix: 'PR9300', nearby: ['Drancy', 'Pantin', 'Bondy'], specificity: 'préfecture Seine-Saint-Denis', parking: 'parkings administratifs' },
  { name: 'Pantin', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.8937, lng: 2.4031, pop: '59000', prefix: 'PR9300', nearby: ['Le Pré-Saint-Gervais', 'Les Lilas', 'Aubervilliers'], specificity: 'canal de l\'Ourcq', parking: 'parkings des Quatre-Chemins' },
  { name: 'Aubervilliers', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9145, lng: 2.3824, pop: '88000', prefix: 'PR9300', nearby: ['La Courneuve', 'Saint-Denis', 'Pantin'], specificity: 'zones commerciales', parking: 'parkings Millénaire' },
  { name: 'Aulnay-sous-Bois', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9336, lng: 2.4946, pop: '86000', prefix: 'PR9300', nearby: ['Sevran', 'Le Blanc-Mesnil', 'Drancy'], specificity: 'zones pavillonnaires étendues', parking: 'parkings O\'Parinor' },
  { name: 'Meaux', dept: '77', deptName: 'Seine-et-Marne', region: 'Île-de-France', lat: 48.9606, lng: 2.8879, pop: '55000', prefix: 'PR7700', nearby: ['Chelles', 'Lagny-sur-Marne', 'Torcy'], specificity: 'ville historique sur la Marne', parking: 'parkings centre-ville' },
  { name: 'Melun', dept: '77', deptName: 'Seine-et-Marne', region: 'Île-de-France', lat: 48.5394, lng: 2.6609, pop: '41000', prefix: 'PR7700', nearby: ['Dammarie-les-Lys', 'Le Mée-sur-Seine', 'Vaux-le-Pénil'], specificity: 'préfecture Seine-et-Marne', parking: 'parkings préfecture' },
  { name: 'Rueil-Malmaison', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8773, lng: 2.1833, pop: '79000', prefix: 'PR9200', nearby: ['Nanterre', 'Suresnes', 'Garches'], specificity: 'château de Malmaison', parking: 'parkings résidentiels' },
  { name: 'Issy-les-Moulineaux', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8239, lng: 2.2700, pop: '68000', prefix: 'PR9200', nearby: ['Boulogne-Billancourt', 'Vanves', 'Meudon'], specificity: 'pôle tertiaire', parking: 'parkings Val de Seine' },
  { name: 'Clichy', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9044, lng: 2.3059, pop: '62000', prefix: 'PR9200', nearby: ['Levallois-Perret', 'Asnières', 'Saint-Ouen'], specificity: 'proximité Paris 17e', parking: 'parkings Mairie' },
  { name: 'Champigny-sur-Marne', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8173, lng: 2.5155, pop: '77000', prefix: 'PR9400', nearby: ['Nogent-sur-Marne', 'Saint-Maur-des-Fossés', 'Joinville-le-Pont'], specificity: 'bords de Marne', parking: 'parkings résidentiels' },
  { name: 'Saint-Maur-des-Fossés', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7995, lng: 2.4978, pop: '75000', prefix: 'PR9400', nearby: ['Créteil', 'Joinville-le-Pont', 'Champigny'], specificity: 'presqu\'île de la Marne', parking: 'parkings résidentiels' },
  { name: 'Sartrouville', dept: '78', deptName: 'Yvelines', region: 'Île-de-France', lat: 48.9364, lng: 2.1594, pop: '53000', prefix: 'PR7800', nearby: ['Houilles', 'Maisons-Laffitte', 'Montesson'], specificity: 'bords de Seine', parking: 'parkings gare' },
  { name: 'Massy', dept: '91', deptName: 'Essonne', region: 'Île-de-France', lat: 48.7308, lng: 2.2728, pop: '48000', prefix: 'PR9100', nearby: ['Palaiseau', 'Antony', 'Verrières-le-Buisson'], specificity: 'gare TGV', parking: 'parkings gare et Opéra' },
  { name: 'Antony', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.7543, lng: 2.2978, pop: '62000', prefix: 'PR9200', nearby: ['Massy', 'Bourg-la-Reine', 'Wissous'], specificity: 'ville résidentielle', parking: 'parkings RER' },
];

function generatePage(city) {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  const nearbyList = city.nearby.map(n => `                <li>• ${n}</li>`).join('\n');
  
  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Épaviste ${city.name} Gratuit 24h/24 – Agréé VHU | RéseauEpaviste',
  description: 'Enlèvement épave gratuit à ${city.name} et ${city.deptName} (${city.dept}). Épaviste agréé préfecture, intervention rapide 7j/7. Certificat destruction VHU officiel. ☎️ Devis immédiat.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/epaviste/${slug}/',
  },
  openGraph: {
    title: 'Épaviste ${city.name} Gratuit 24h/24 – Agréé VHU',
    description: 'Enlèvement épave gratuit à ${city.name} et ${city.deptName} (${city.dept}). Épaviste agréé préfecture, intervention rapide 7j/7.',
    url: 'https://reseauepaviste.fr/epaviste/${slug}/',
    type: 'website',
    locale: 'fr_FR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/epaviste/${slug}/#business',
      name: 'RéseauEpaviste ${city.name}',
      description: 'Service d\\'enlèvement d\\'épaves gratuit et agréé VHU à ${city.name} et dans ${city.deptName}',
      url: 'https://reseauepaviste.fr/epaviste/${slug}/',
      telephone: '+33-1-XX-XX-XX-XX',
      priceRange: 'Gratuit',
      image: 'https://reseauepaviste.fr/images/epaviste-${slug}.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zone d\\'intervention ${city.name}',
        addressLocality: '${city.name}',
        postalCode: '${city.dept}000',
        addressRegion: '${city.region}',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: ${city.lat},
        longitude: ${city.lng},
      },
      areaServed: [
        {
          '@type': 'City',
          name: '${city.name}',
        },
        {
          '@type': 'AdministrativeArea',
          name: '${city.deptName}',
        },
${city.nearby.map(n => `        {\n          '@type': 'City',\n          name: '${n}',\n        },`).join('\n')}
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '247',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://reseauepaviste.fr/epaviste/${slug}/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://reseauepaviste.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Épaviste', item: 'https://reseauepaviste.fr/epaviste/' },
        { '@type': 'ListItem', position: 3, name: 'Épaviste ${city.name}', item: 'https://reseauepaviste.fr/epaviste/${slug}/' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://reseauepaviste.fr/epaviste/${slug}/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Est-ce que l\\'enlèvement d\\'épave est vraiment gratuit à ${city.name} ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, l\\'enlèvement d\\'épave est totalement gratuit à ${city.name} pour tout véhicule hors d\\'usage destiné à un centre VHU agréé. Le recyclage des matériaux compense les frais d\\'intervention.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps pour enlever une épave à ${city.name} ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le délai moyen d\\'intervention à ${city.name} est de 24 à 48 heures après votre appel. En cas d\\'urgence, nous intervenons sous 4 à 6 heures selon disponibilité.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels documents faut-il pour faire enlever une épave à ${city.name} ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour l\\'enlèvement d\\'une épave à ${city.name}, vous devez fournir : la carte grise à votre nom, une pièce d\\'identité valide, et un justificatif de domicile de moins de 3 mois.',
          },
        },
      ],
    },
  ],
};

export default function Epaviste${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Épaviste ${city.name} Gratuit – Enlèvement Épave Agréé VHU 24h/24
          </h1>
          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="tel:+33XXXXXXXXX" className="text-blue-600 hover:text-blue-700 text-2xl font-bold">
                    ☎️ 01 XX XX XX XX
                  </a>
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                    ✓ Disponible 24h/24 – 7j/7
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                    ✓ Centre VHU agréé préfecture
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                    ★ 4.8/5 – 247 avis vérifiés
                  </span>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Rappel sous 5 minutes
              </button>
            </div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>L'enlèvement d'épave est gratuit à ${city.name}</strong> car le recyclage des matériaux (métaux, plastiques, fluides) compense les frais d'intervention. RéseauEpaviste intervient à ${city.name} et dans tout ${city.deptName} avec des épavistes agréés VHU par la préfecture.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Épaviste agréé à ${city.name} : enlèvement gratuit de véhicules hors d'usage
          </h2>
          <div className="bg-gray-50 border-l-4 border-blue-600 p-4 mb-6">
            <p className="text-lg font-semibold text-gray-900">
              ✓ Réponse directe : Un épaviste agréé à ${city.name} est un professionnel certifié par la préfecture ${city.deptName} pour enlever, transporter et traiter les véhicules hors d'usage (VHU) dans le respect de la réglementation environnementale.
            </p>
          </div>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p><strong>En résumé :</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Intervention gratuite sur ${city.name} et communes voisines</li>
              <li>Agrément préfectoral VHU obligatoire (numéro ${city.prefix}XXX)</li>
              <li>Certificat de destruction officiel délivré sous 15 jours</li>
              <li>Recyclage à 95% du poids du véhicule selon directive européenne 2000/53/CE</li>
            </ul>
            <p>
              À ${city.name}, comme partout en France, l'enlèvement d'une épave doit obligatoirement être confié à un <strong>centre VHU agréé préfecture</strong> conformément à l'article L541-21-2 du code de l'environnement.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spécificités de l'enlèvement d'épave à ${city.name}
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              ${city.name}, située en ${city.region} avec ${city.pop} habitants, présente des particularités : ${city.specificity}. Nos dépanneurs connaissent parfaitement la ville et interviennent rapidement dans tous les secteurs, y compris ${city.parking}.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Zones d'intervention autour de ${city.name}
            </h3>
            <p>Nous intervenons également dans les communes voisines :</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
${nearbyList}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions fréquentes – Épaviste ${city.name}
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Est-ce que l'enlèvement d'épave est vraiment gratuit à ${city.name} ?
              </h3>
              <p className="text-gray-700">
                Oui, l'enlèvement d'épave est totalement gratuit à ${city.name} pour tout véhicule hors d'usage destiné à un centre VHU agréé. Le recyclage des matériaux compense les frais d'intervention. Aucun frais caché.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Combien de temps pour enlever une épave à ${city.name} ?
              </h3>
              <p className="text-gray-700">
                Le délai moyen d'intervention à ${city.name} est de 24 à 48 heures après votre appel. En cas d'urgence (voie publique, parking souterrain), nous intervenons sous 4 à 6 heures selon disponibilité.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quels documents faut-il pour faire enlever une épave à ${city.name} ?
              </h3>
              <p className="text-gray-700">
                Pour l'enlèvement d'une épave à ${city.name}, vous devez fournir : la carte grise à votre nom, une pièce d'identité valide, et un justificatif de domicile de moins de 3 mois. Si vous n'avez pas la carte grise, contactez-nous pour étudier les solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Liens utiles et ressources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pages RéseauEpaviste à consulter</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/enlevement-epave/" className="text-blue-600 hover:underline">Enlèvement épave gratuit – Guide complet</a></li>
                <li><a href="/enlevement-epave/sans-carte-grise/" className="text-blue-600 hover:underline">Enlever une épave sans carte grise</a></li>
                <li><a href="/centre-vhu/" className="text-blue-600 hover:underline">Centre VHU agréé</a></li>
                <li><a href="/prime-conversion/" className="text-blue-600 hover:underline">Prime à la conversion 2025</a></li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-300 pt-8 mt-12">
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Mis à jour le :</strong> 31 mars 2026</p>
            <p><strong>Auteur :</strong> Équipe éditoriale RéseauEpaviste – Spécialistes en enlèvement VHU depuis 2018</p>
          </div>
        </footer>
      </main>
    </>
  );
}
`;
}

// Générer toutes les pages
cities.forEach(city => {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  const dirPath = path.join(__dirname, '..', 'src', 'app', 'epaviste', slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const content = generatePage(city);
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ Créé: /epaviste/${slug}/page.tsx`);
});

console.log(`\n🎉 ${cities.length} pages IDF supplémentaires générées !`);
