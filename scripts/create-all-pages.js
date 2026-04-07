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
  
  return `import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Service d\\'Enlèvement de VHU ${city.name} (${city.dept}) – Épaviste Agréé',
  description: 'Demande de prise en charge pour l\\'enlèvement de véhicule hors d\\'usage (VHU) à ${city.name} et dans le département ${city.deptName}. Certificat de destruction CERFA remis immédiatement. Service public de proximité.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/epaviste/${slug}/',
  },
  openGraph: {
    title: 'Épaviste Agréé à ${city.name} – Enlèvement VHU Gratuit',
    description: 'Service certifié d\\'enlèvement d\\'épaves à ${city.name}. Intervention sous 24h, mise en conformité administrative totale.',
    url: 'https://reseauepaviste.fr/epaviste/${slug}/',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/epaviste/${slug}/#business',
      name: 'RéseauEpaviste ${city.name}',
      description: 'Centre d\\'appel pour l\\'enlèvement de VHU certifié à ${city.name}',
      url: 'https://reseauepaviste.fr/epaviste/${slug}/',
      telephone: '+33-1-84-17-32-18',
      areaServed: { '@type': 'City', name: '${city.name}' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: '${city.name}',
        postalCode: '${city.dept}000',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function Epaviste${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Header Style État */}
      <header className="fr-header bg-white border-b-2 border-[var(--blue-france-main)]">
        <div className="fr-container">
          <div className="fr-header__body py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center border-2 border-black p-1.5 font-serif font-black text-[7px] leading-none text-center bg-white min-w-[60px]">
                RÉPUBLIQUE<br/>FRANÇAISE
                <div className="mt-0.5 w-full h-px bg-black"></div>
                <div className="mt-0.5 font-bold text-[5px] italic uppercase tracking-tight">Liberté • Égalité • Fraternité</div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tighter uppercase leading-none text-[var(--grey-900)]">Réseau Epaviste</span>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Plateforme Nationale Agréée</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-black text-green-600 uppercase tracking-widest mb-0.5 flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Secteur ${city.name} actif
              </div>
              <a href="tel:+33184173218" className="text-xl font-black text-[var(--blue-france-main)] no-underline">01 84 17 32 18</a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        {/* Hero Section DSFR */}
        <section className="bg-[var(--grey-100)] border-b border-[var(--grey-200)] py-12 md:py-20">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[var(--grey-200)] shadow-sm mb-6 uppercase text-[10px] font-bold tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-[var(--blue-france-main)]"></div>
                  Information Publique : ${city.name}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--grey-900)] leading-tight uppercase tracking-tighter mb-8">
                  Enlèvement de véhicule hors d'usage à ${city.name}
                </h1>
                <div className="bg-white border-l-8 border-[var(--blue-france-main)] p-8 shadow-md mb-10">
                  <p className="text-lg md:text-xl text-[var(--grey-800)] leading-relaxed font-medium">
                    Dispositif certifié pour la mise en conformité administrative et le recyclage écologique des épaves sur la commune de <strong>${city.name}</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+33184173218" className="fr-btn shadow-lg py-4 px-8 text-lg">Mobiliser une unité d'enlèvement</a>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Intervention sous</span>
                    <span className="text-xl font-black text-[var(--blue-france-main)] uppercase tracking-tighter">24 Heures</span>
                  </div>
                </div>
              </div>
              <aside className="lg:col-span-5">
                <div className="bg-white border border-[var(--grey-200)] p-8 shadow-xl relative">
                  <div className="flex items-center justify-between border-b border-[var(--grey-200)] pb-4 mb-6">
                    <h2 className="text-xs font-black uppercase tracking-widest m-0">Synthèse Administrative</h2>
                    <div className="w-10 h-10 flex flex-col items-center justify-center border border-black font-serif font-black text-[6px] leading-none text-center">
                      RÉPUBLIQUE<br/>FRANÇAISE
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { l: 'Localisation', v: '${city.name} (${city.dept})' },
                      { l: 'Coût Usager', v: 'Gratuit (selon éligibilité)' },
                      { l: 'Document Remis', v: 'Certificat CERFA n°15776*02' },
                      { l: 'Traitement', v: 'Filière agréée VHU' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center border-b border-[var(--grey-100)] pb-2">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.l}</span>
                        <span className="text-sm font-bold text-[var(--grey-900)]">{item.v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* Section Impact Visuel */}
        <section className="py-16 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-video shadow-2xl border-4 border-white overflow-hidden rounded-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1599256629724-6014e3047466?q=80&w=800&auto=format&fit=crop"
                  alt="Enlèvement d'épave à ${city.name}"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="fr-alert">
                  <p className="text-sm font-bold">L'abandon d'un véhicule sur la voie publique à ${city.name} est passible d'une amende de 1 500 € et de la mise en fourrière immédiate.</p>
                </div>
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Une procédure simplifiée pour les usagers de ${city.name}</h2>
                <p className="text-[var(--grey-600)] leading-relaxed">
                  Notre mission est de faciliter l'élimination des véhicules hors d'usage tout en garantissant le respect des normes environnementales. Chaque véhicule collecté à ${city.name} est dépollué (retrait des huiles, batteries, fluides) avant sa valorisation matière.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceGallery />

        <section className="py-16 bg-[var(--grey-100)] border-y border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Demander une prise en charge</h2>
                <p className="text-[var(--grey-600)] leading-relaxed">Veuillez préparer votre carte grise et une pièce d'identité pour la constitution du dossier administratif de destruction à ${city.name}.</p>
                <div className="p-6 bg-white border border-[var(--grey-200)] border-l-4 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-xs font-black uppercase text-[var(--blue-france-main)] mb-2">Centre d'appel local</p>
                  <a href="tel:+33184173218" className="text-2xl font-black text-[var(--grey-900)] no-underline">01 84 17 32 18</a>
                </div>
              </div>
              <div className="lg:col-span-7">
                <CallbackForm />
              </div>
            </div>
          </div>
        </section>

        <FAQSection items={[
          { question: 'L\\'enlèvement est-il gratuit à ${city.name} ?', answer: 'Oui, l\\'enlèvement est un service public gratuit si le véhicule possède encore ses composants essentiels (moteur, pot catalytique). Pour les cas spécifiques, un devis gratuit est établi immédiatement.' },
          { question: 'Quels documents fournir à ${city.name} ?', answer: 'La carte grise originale barrée avec la mention \\'vendu pour destruction\\', un certificat de non-gage de moins de 15 jours, et une copie de votre pièce d\\'identité.' },
          { question: 'Sous quel délai intervenez-vous à ${city.name} ?', answer: 'Nos unités d\\'enlèvement basées à proximité de ${city.name} interviennent généralement sous 24 heures après validation de votre demande.' }
        ]} title="Questions fréquentes à ${city.name}" />
      </main>
    </>
  );
}
`;
}

// Generer toutes les pages
cities.forEach(city => {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  const dirPath = path.join(__dirname, '..', 'src', 'app', 'epaviste', slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Creer le dossier s'il n'existe pas
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Generer et ecrire le contenu
  const content = generatePage(city);
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Creation: /epaviste/${slug}/page.tsx`);
});

console.log(`\nGeneration terminee: ${cities.length} pages creees avec succes.`);
