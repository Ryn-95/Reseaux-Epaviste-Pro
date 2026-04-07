#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Villes françaises moyennes/grandes supplémentaires
const cities = [
  { name: 'Villeurbanne', dept: '69', deptName: 'Rhône', region: 'Auvergne-Rhône-Alpes', lat: 45.7667, lng: 4.8833, pop: '156000', prefix: 'PR6900', nearby: ['Lyon', 'Vaulx-en-Velin', 'Bron'], specificity: 'ville limitrophe de Lyon', parking: 'parkings Gratte-Ciel et Flachet' },
  { name: 'Aix-en-Provence', dept: '13', deptName: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.5297, lng: 5.4474, pop: '145000', prefix: 'PR1300', nearby: ['Marseille', 'Gardanne', 'Bouc-Bel-Air'], specificity: 'ville universitaire et thermale', parking: 'parkings Rotonde et centre historique' },
  { name: 'Dijon', dept: '21', deptName: 'Côte-d\'Or', region: 'Bourgogne-Franche-Comté', lat: 47.3220, lng: 5.0415, pop: '159000', prefix: 'PR2100', nearby: ['Chenôve', 'Talant', 'Fontaine-lès-Dijon'], specificity: 'capitale bourguignonne', parking: 'parkings Darcy et gare' },
  { name: 'Angers', dept: '49', deptName: 'Maine-et-Loire', region: 'Pays de la Loire', lat: 47.4784, lng: -0.5632, pop: '154000', prefix: 'PR4900', nearby: ['Avrillé', 'Trélazé', 'Saint-Barthélemy-d\'Anjou'], specificity: 'château et bords de Maine', parking: 'parkings centre-ville' },
  { name: 'Le Mans', dept: '72', deptName: 'Sarthe', region: 'Pays de la Loire', lat: 48.0077, lng: 0.1984, pop: '143000', prefix: 'PR7200', nearby: ['Allonnes', 'Coulaines', 'Arnage'], specificity: '24 Heures du Mans', parking: 'parkings circuit et centre' },
  { name: 'Brest', dept: '29', deptName: 'Finistère', region: 'Bretagne', lat: 48.3905, lng: -4.4860, pop: '139000', prefix: 'PR2900', nearby: ['Guipavas', 'Plouzané', 'Gouesnou'], specificity: 'port militaire atlantique', parking: 'parkings port et Siam' },
  { name: 'Clermont-Ferrand', dept: '63', deptName: 'Puy-de-Dôme', region: 'Auvergne-Rhône-Alpes', lat: 45.7772, lng: 3.0870, pop: '147000', prefix: 'PR6300', nearby: ['Aubière', 'Chamalières', 'Beaumont'], specificity: 'capitale auvergnate et Michelin', parking: 'parkings Jaude et gare' },
  { name: 'Tours', dept: '37', deptName: 'Indre-et-Loire', region: 'Centre-Val de Loire', lat: 47.3941, lng: 0.6848, pop: '136000', prefix: 'PR3700', nearby: ['Saint-Pierre-des-Corps', 'Joué-lès-Tours', 'Saint-Avertin'], specificity: 'châteaux de la Loire', parking: 'parkings Vinci et gare' },
  { name: 'Amiens', dept: '80', deptName: 'Somme', region: 'Hauts-de-France', lat: 49.8942, lng: 2.2957, pop: '133000', prefix: 'PR8000', nearby: ['Longueau', 'Rivery', 'Camon'], specificity: 'cathédrale UNESCO', parking: 'parkings cathédrale et gare' },
  { name: 'Limoges', dept: '87', deptName: 'Haute-Vienne', region: 'Nouvelle-Aquitaine', lat: 45.8336, lng: 1.2611, pop: '132000', prefix: 'PR8700', nearby: ['Panazol', 'Couzeix', 'Le Palais-sur-Vienne'], specificity: 'porcelaine et arts du feu', parking: 'parkings Champ de Juillet' },
  { name: 'Reims', dept: '51', deptName: 'Marne', region: 'Grand Est', lat: 49.2583, lng: 4.0317, pop: '182000', prefix: 'PR5100', nearby: ['Tinqueux', 'Bétheny', 'Cormontreuil'], specificity: 'champagne et cathédrale', parking: 'parkings cathédrale et Erlon' },
  { name: 'Toulon', dept: '83', deptName: 'Var', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.1242, lng: 5.9280, pop: '176000', prefix: 'PR8300', nearby: ['La Seyne-sur-Mer', 'La Garde', 'Hyères'], specificity: 'base navale méditerranéenne', parking: 'parkings port et Mayol' },
  { name: 'Saint-Étienne', dept: '42', deptName: 'Loire', region: 'Auvergne-Rhône-Alpes', lat: 45.4397, lng: 4.3872, pop: '172000', prefix: 'PR4200', nearby: ['Saint-Priest-en-Jarez', 'La Ricamarie', 'Firminy'], specificity: 'ville minière et design', parking: 'parkings Châteaucreux' },
  { name: 'Le Havre', dept: '76', deptName: 'Seine-Maritime', region: 'Normandie', lat: 49.4944, lng: 0.1079, pop: '170000', prefix: 'PR7600', nearby: ['Montivilliers', 'Sainte-Adresse', 'Gonfreville-l\'Orcher'], specificity: 'port maritime et architecture Perret', parking: 'parkings port et plage' },
  { name: 'Perpignan', dept: '66', deptName: 'Pyrénées-Orientales', region: 'Occitanie', lat: 42.6886, lng: 2.8948, pop: '121000', prefix: 'PR6600', nearby: ['Canet-en-Roussillon', 'Saint-Estève', 'Rivesaltes'], specificity: 'capitale catalane française', parking: 'parkings République et gare' },
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

console.log(`\n🎉 ${cities.length} pages France supplémentaires générées !`);
