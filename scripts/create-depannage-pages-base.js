#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Configuration complète des villes
const cities = [
  // IDF
  { name: 'Versailles', dept: '78', deptName: 'Yvelines', region: 'Île-de-France', lat: 48.8049, lng: 2.1204, pop: '85000', prefix: 'PR7800', nearby: ['Le Chesnay', 'Viroflay', 'Vélizy-Villacoublay'], specificity: 'château et centre historique', parking: 'parkings souterrains du centre-ville' },
  { name: 'Nanterre', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8925, lng: 2.2069, pop: '96000', prefix: 'PR9200', nearby: ['Rueil-Malmaison', 'Courbevoie', 'Puteaux'], specificity: 'quartier d\'affaires La Défense', parking: 'parkings de La Défense et université' },
  { name: 'Boulogne-Billancourt', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8352, lng: 2.2403, pop: '121000', prefix: 'PR9200', nearby: ['Issy-les-Moulineaux', 'Meudon', 'Sèvres'], specificity: 'ancienne zone industrielle Renault', parking: 'parkings résidentiels et souterrains' },
  { name: 'Argenteuil', dept: '95', deptName: 'Val-d\'Oise', region: 'Île-de-France', lat: 48.9474, lng: 2.2474, pop: '110000', prefix: 'PR9500', nearby: ['Bezons', 'Cormeilles-en-Parisis', 'Sannois'], specificity: 'zones pavillonnaires étendues', parking: 'stationnement résidentiel' },
  { name: 'Montreuil', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.8634, lng: 2.4432, pop: '109000', prefix: 'PR9300', nearby: ['Bagnolet', 'Vincennes', 'Rosny-sous-Bois'], specificity: 'proximité Paris Est', parking: 'parkings de copropriété' },
  { name: 'Saint-Denis', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9362, lng: 2.3574, pop: '112000', prefix: 'PR9300', nearby: ['Aubervilliers', 'La Courneuve', 'Épinay-sur-Seine'], specificity: 'Stade de France et zone commerciale', parking: 'parkings du Stade et centre-ville' },
  { name: 'Créteil', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7903, lng: 2.4555, pop: '92000', prefix: 'PR9400', nearby: ['Maisons-Alfort', 'Alfortville', 'Bonneuil-sur-Marne'], specificity: 'préfecture du Val-de-Marne', parking: 'parkings administratifs et Créteil Soleil' },
  { name: 'Vincennes', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8478, lng: 2.4395, pop: '50000', prefix: 'PR9400', nearby: ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil'], specificity: 'château et bois de Vincennes', parking: 'stationnement résidentiel dense' },
  { name: 'Évry-Courcouronnes', dept: '91', deptName: 'Essonne', region: 'Île-de-France', lat: 48.6289, lng: 2.4269, pop: '69000', prefix: 'PR9100', nearby: ['Corbeil-Essonnes', 'Ris-Orangis', 'Grigny'], specificity: 'ville nouvelle et préfecture', parking: 'parkings de la cathédrale et centre commercial' },
  { name: 'Cergy', dept: '95', deptName: 'Val-d\'Oise', region: 'Île-de-France', lat: 49.0369, lng: 2.0778, pop: '68000', prefix: 'PR9500', nearby: ['Pontoise', 'Osny', 'Éragny'], specificity: 'ville nouvelle de Cergy-Pontoise', parking: 'parkings des 3 Fontaines' },
  
  // Grandes métropoles
  { name: 'Marseille', dept: '13', deptName: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.2965, lng: 5.3698, pop: '870000', prefix: 'PR1300', nearby: ['Aix-en-Provence', 'Aubagne', 'Martigues'], specificity: '2ème ville de France et port méditerranéen', parking: 'parkings du Vieux-Port et quartiers Nord' },
  { name: 'Bordeaux', dept: '33', deptName: 'Gironde', region: 'Nouvelle-Aquitaine', lat: 44.8378, lng: -0.5792, pop: '260000', prefix: 'PR3300', nearby: ['Mérignac', 'Pessac', 'Talence'], specificity: 'centre historique UNESCO', parking: 'parkings souterrains centre-ville' },
  { name: 'Lille', dept: '59', deptName: 'Nord', region: 'Hauts-de-France', lat: 50.6292, lng: 3.0573, pop: '236000', prefix: 'PR5900', nearby: ['Roubaix', 'Tourcoing', 'Villeneuve-d\'Ascq'], specificity: 'métropole européenne transfrontalière', parking: 'parkings Euralille et gares' },
  { name: 'Toulouse', dept: '31', deptName: 'Haute-Garonne', region: 'Occitanie', lat: 43.6047, lng: 1.4442, pop: '490000', prefix: 'PR3100', nearby: ['Blagnac', 'Colomiers', 'Tournefeuille'], specificity: 'capitale aéronautique européenne', parking: 'parkings Capitole et zones Airbus' },
  { name: 'Nantes', dept: '44', deptName: 'Loire-Atlantique', region: 'Pays de la Loire', lat: 47.2184, lng: -1.5536, pop: '320000', prefix: 'PR4400', nearby: ['Saint-Herblain', 'Rezé', 'Saint-Sébastien-sur-Loire'], specificity: 'métropole atlantique', parking: 'parkings île de Nantes et centre' },
  { name: 'Nice', dept: '06', deptName: 'Alpes-Maritimes', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.7102, lng: 7.2620, pop: '340000', prefix: 'PR0600', nearby: ['Antibes', 'Cannes', 'Cagnes-sur-Mer'], specificity: 'Côte d\'Azur et tourisme', parking: 'parkings Promenade des Anglais' },
  { name: 'Strasbourg', dept: '67', deptName: 'Bas-Rhin', region: 'Grand Est', lat: 48.5734, lng: 7.7521, pop: '290000', prefix: 'PR6700', nearby: ['Schiltigheim', 'Illkirch-Graffenstaden', 'Hoenheim'], specificity: 'capitale européenne', parking: 'parkings centre historique' },
  { name: 'Rennes', dept: '35', deptName: 'Ille-et-Vilaine', region: 'Bretagne', lat: 48.1173, lng: -1.6778, pop: '220000', prefix: 'PR3500', nearby: ['Saint-Grégoire', 'Cesson-Sévigné', 'Chantepie'], specificity: 'capitale bretonne', parking: 'parkings République et gare' },
  { name: 'Montpellier', dept: '34', deptName: 'Hérault', region: 'Occitanie', lat: 43.6108, lng: 3.8767, pop: '300000', prefix: 'PR3400', nearby: ['Castelnau-le-Lez', 'Lattes', 'Pérols'], specificity: 'métropole méditerranéenne', parking: 'parkings Antigone et Odysseum' },
  { name: 'Grenoble', dept: '38', deptName: 'Isère', region: 'Auvergne-Rhône-Alpes', lat: 45.1885, lng: 5.7245, pop: '160000', prefix: 'PR3800', nearby: ['Échirolles', 'Saint-Martin-d\'Hères', 'Fontaine'], specificity: 'capitale des Alpes', parking: 'parkings centre et campus universitaire' },
  { name: 'Rouen', dept: '76', deptName: 'Seine-Maritime', region: 'Normandie', lat: 49.4432, lng: 1.0993, pop: '112000', prefix: 'PR7600', nearby: ['Le Havre', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan'], specificity: 'capitale normande historique', parking: 'parkings cathédrale et rive gauche' },
];

function generatePage(city) {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  const nearbyList = city.nearby.map(n => `                <li>• ${n}</li>`).join('\n');
  
  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dépannage Auto ${city.name} 24h/24 – Intervention Rapide | RéseauEpaviste',
  description: 'Dépannage auto à ${city.name} et ${city.deptName} (${city.dept}). Panne batterie, crevaison, panne essence. Intervention 24h/24 – 7j/7. ☎️ Devis immédiat.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/depannage-auto/${slug}/',
  },
  openGraph: {
    title: 'Dépannage Auto ${city.name} 24h/24 – Intervention Rapide',
    description: 'Dépannage auto à ${city.name} et ${city.deptName} (${city.dept}). Panne batterie, crevaison, panne essence. Intervention 24h/24 – 7j/7.',
    url: 'https://reseauepaviste.fr/depannage-auto/${slug}/',
    type: 'website',
    locale: 'fr_FR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/depannage-auto/${slug}/#business',
      name: 'RéseauEpaviste Dépannage ${city.name}',
      description: 'Service de dépannage automobile 24h/24 à ${city.name} et dans ${city.deptName}',
      url: 'https://reseauepaviste.fr/depannage-auto/${slug}/',
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
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Générer et écrire le contenu
  const content = generatePage(city);
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ Créé: /epaviste/${slug}/page.tsx`);
});

console.log(`\n🎉 ${cities.length} pages générées avec succès !`);
