#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Liste complète des villes
const cities = [
  'versailles', 'nanterre', 'boulogne-billancourt', 'argenteuil', 'montreuil',
  'saint-denis', 'creteil', 'vincennes', 'evry-courcouronnes', 'cergy',
  'marseille', 'bordeaux', 'lille', 'toulouse', 'nantes', 'nice',
  'strasbourg', 'rennes', 'montpellier', 'grenoble', 'rouen', 'lyon',
  'courbevoie', 'asnieres-sur-seine', 'levallois-perret', 'colombes',
  'vitry-sur-seine', 'ivry-sur-seine', 'bobigny', 'pantin', 'aubervilliers',
  'aulnay-sous-bois', 'meaux', 'melun', 'rueil-malmaison', 'issy-les-moulineaux',
  'clichy', 'champigny-sur-marne', 'saint-maur-des-fosses', 'sartrouville',
  'massy', 'antony', 'villeurbanne', 'aix-en-provence', 'dijon', 'angers',
  'le-mans', 'brest', 'clermont-ferrand', 'tours', 'amiens', 'limoges',
  'reims', 'toulon', 'saint-etienne', 'le-havre', 'perpignan'
];

// Mapping ville slug -> nom affiché
const cityNames = {
  'versailles': 'Versailles',
  'nanterre': 'Nanterre',
  'boulogne-billancourt': 'Boulogne-Billancourt',
  'argenteuil': 'Argenteuil',
  'montreuil': 'Montreuil',
  'saint-denis': 'Saint-Denis',
  'creteil': 'Créteil',
  'vincennes': 'Vincennes',
  'evry-courcouronnes': 'Évry-Courcouronnes',
  'cergy': 'Cergy',
  'marseille': 'Marseille',
  'bordeaux': 'Bordeaux',
  'lille': 'Lille',
  'toulouse': 'Toulouse',
  'nantes': 'Nantes',
  'nice': 'Nice',
  'strasbourg': 'Strasbourg',
  'rennes': 'Rennes',
  'montpellier': 'Montpellier',
  'grenoble': 'Grenoble',
  'rouen': 'Rouen',
  'lyon': 'Lyon',
  'courbevoie': 'Courbevoie',
  'asnieres-sur-seine': 'Asnières-sur-Seine',
  'levallois-perret': 'Levallois-Perret',
  'colombes': 'Colombes',
  'vitry-sur-seine': 'Vitry-sur-Seine',
  'ivry-sur-seine': 'Ivry-sur-Seine',
  'bobigny': 'Bobigny',
  'pantin': 'Pantin',
  'aubervilliers': 'Aubervilliers',
  'aulnay-sous-bois': 'Aulnay-sous-Bois',
  'meaux': 'Meaux',
  'melun': 'Melun',
  'rueil-malmaison': 'Rueil-Malmaison',
  'issy-les-moulineaux': 'Issy-les-Moulineaux',
  'clichy': 'Clichy',
  'champigny-sur-marne': 'Champigny-sur-Marne',
  'saint-maur-des-fosses': 'Saint-Maur-des-Fossés',
  'sartrouville': 'Sartrouville',
  'massy': 'Massy',
  'antony': 'Antony',
  'villeurbanne': 'Villeurbanne',
  'aix-en-provence': 'Aix-en-Provence',
  'dijon': 'Dijon',
  'angers': 'Angers',
  'le-mans': 'Le Mans',
  'brest': 'Brest',
  'clermont-ferrand': 'Clermont-Ferrand',
  'tours': 'Tours',
  'amiens': 'Amiens',
  'limoges': 'Limoges',
  'reims': 'Reims',
  'toulon': 'Toulon',
  'saint-etienne': 'Saint-Étienne',
  'le-havre': 'Le Havre',
  'perpignan': 'Perpignan'
};

function generateDepannagePage(slug) {
  const cityName = cityNames[slug];
  const componentName = cityName.replace(/[^a-zA-Z]/g, '');
  
  return `import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Assistance Routière ${cityName} 24h/24 – Dépannage Technique Certifié',
  description: 'Service d\\'assistance automobile à ${cityName}. Intervention technique 24h/24 pour batterie, pneumatiques et pannes mécaniques. Service certifié disponible 7j/7.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/depannage-auto/${slug}/',
  },
  openGraph: {
    title: 'Dépannage Automobile ${cityName} 24h/24 – Assistance Prioritaire',
    description: 'Prise en charge technique de votre véhicule à ${cityName}. Unité mobile d\\'intervention disponible 24h/24.',
    url: 'https://reseauepaviste.fr/depannage-auto/${slug}/',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/depannage-auto/${slug}/#business',
      name: 'RéseauEpaviste ${cityName}',
      description: 'Direction des Opérations Techniques - Service de dépannage automobile certifié à ${cityName}',
      url: 'https://reseauepaviste.fr/depannage-auto/${slug}/',
      telephone: '+33-1-84-17-32-18',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '${cityName}',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function DepannageAuto${componentName}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
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
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Assistance Routière Nationale</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-black text-green-600 uppercase tracking-widest mb-0.5 flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Unité ${cityName} en astreinte
              </div>
              <a href="tel:+33184173218" className="text-xl font-black text-[var(--blue-france-main)] no-underline">01 84 17 32 18</a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="bg-[var(--grey-100)] border-b border-[var(--grey-200)] py-12 md:py-20">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[var(--grey-200)] shadow-sm mb-6 uppercase text-[10px] font-bold tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-[var(--blue-france-main)]"></div>
                  Service d'Assistance : ${cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--grey-900)] leading-tight uppercase tracking-tighter mb-8">
                  Dépannage automobile d'urgence à ${cityName}
                </h1>
                <div className="bg-white border-l-8 border-[var(--blue-france-main)] p-8 shadow-md mb-10">
                  <p className="text-lg md:text-xl text-[var(--grey-800)] leading-relaxed font-medium">
                    Unité mobile d'intervention technique pour la résolution immédiate des pannes mécaniques et électriques sur la commune de <strong>${cityName}</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+33184173218" className="fr-btn shadow-lg py-4 px-8 text-lg">Mobiliser un technicien</a>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Arrivée sur site</span>
                    <span className="text-xl font-black text-[var(--blue-france-main)] uppercase tracking-tighter">30-45 Min</span>
                  </div>
                </div>
              </div>
              <aside className="lg:col-span-5">
                <div className="bg-white border border-[var(--grey-200)] p-8 shadow-xl relative">
                  <div className="flex items-center justify-between border-b border-[var(--grey-200)] pb-4 mb-6">
                    <h2 className="text-xs font-black uppercase tracking-widest m-0">Données de Service</h2>
                    <div className="w-10 h-10 flex flex-col items-center justify-center border border-black font-serif font-black text-[6px] leading-none text-center">
                      RÉPUBLIQUE<br/>FRANÇAISE
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { l: 'Secteur', v: '${cityName}' },
                      { l: 'Disponibilité', v: '24h/24 – 7j/7' },
                      { l: 'Certification', v: 'Technicien Agréé' },
                      { l: 'Type d\\'acte', v: 'Dépannage sur site' }
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

        <section className="py-16 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-video shadow-2xl border-4 border-white overflow-hidden rounded-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1506017594549-d4efaf589cf2?q=80&w=800&auto=format&fit=crop"
                  alt="Dépannage auto d'urgence à ${cityName}"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="fr-alert">
                  <p className="text-sm font-bold">Sécurisation : Nos techniciens sont habilités pour intervenir sur les voies à forte circulation à ${cityName}.</p>
                </div>
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Expertise technique certifiée à ${cityName}</h2>
                <p className="text-[var(--grey-600)] leading-relaxed">
                  Qu'il s'agisse d'une panne de batterie, d'une erreur de carburant ou d'une crevaison, nos unités disposent du matériel de diagnostic nécessaire pour une remise en circulation rapide. En cas d'immobilisation lourde, un remorquage vers le centre technique le plus proche de ${cityName} est organisé immédiatement.
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
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Besoin d'assistance ?</h2>
                <p className="text-[var(--grey-600)] leading-relaxed">Contactez notre ligne technique pour une évaluation immédiate de votre panne à ${cityName}.</p>
                <div className="p-6 bg-white border border-[var(--grey-200)] border-l-4 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-xs font-black uppercase text-[var(--blue-france-main)] mb-2">Ligne Prioritaire</p>
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
          { question: 'Quel est le temps d\\'attente à ${cityName} ?', answer: 'Nos techniciens interviennent sous 30 à 45 minutes en moyenne sur l\\'ensemble de la zone de ${cityName}.' },
          { question: 'Prenez-vous en charge les véhicules électriques ?', answer: 'Oui, nos agents sont formés aux risques électriques et disposent de l\\'équipement spécifique pour le dépannage de véhicules hybrides et électriques.' },
          { question: 'Les tarifs sont-ils conventionnés ?', answer: 'Absolument. Nous appliquons les barèmes officiels et une facture normalisée vous est remise pour votre assurance.' }
        ]} title="Questions fréquentes - Assistance ${cityName}" />
      </main>
    </>
  );
}`;
}

function generateRemorquagePage(slug) {
  const cityName = cityNames[slug];
  const componentName = cityName.replace(/[^a-zA-Z]/g, '');

  return `import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Service de Remorquage ${cityName} 24h/24 – Transport Automobile Certifié',
  description: 'Service de remorquage professionnel à ${cityName}. Transport sécurisé toutes distances pour véhicules légers, utilitaires et deux-roues. Intervention rapide 7j/7.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/remorquage/${slug}/',
  },
  openGraph: {
    title: 'Remorquage Automobile ${cityName} 24h/24 – Assistance Certifiée',
    description: 'Prise en charge de votre véhicule à ${cityName}. Dépanneuse agréée disponible 24h/24.',
    url: 'https://reseauepaviste.fr/remorquage/${slug}/',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/remorquage/${slug}/#business',
      name: 'RéseauEpaviste ${cityName}',
      description: 'Direction des Interventions Routières - Service de remorquage certifié à ${cityName}',
      url: 'https://reseauepaviste.fr/remorquage/${slug}/',
      telephone: '+33-1-84-17-32-18',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '${cityName}',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function Remorquage${componentName}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
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
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Direction des Interventions</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-black text-[var(--blue-france-main)] uppercase tracking-widest mb-0.5 flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-france-main)] animate-pulse"></span>
                Remorquage ${cityName}
              </div>
              <a href="tel:+33184173218" className="text-xl font-black text-[var(--blue-france-main)] no-underline">01 84 17 32 18</a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="bg-[var(--grey-100)] border-b border-[var(--grey-200)] py-12 md:py-20">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[var(--grey-200)] shadow-sm mb-6 uppercase text-[10px] font-bold tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-[var(--blue-france-main)]"></div>
                  Transfert Logistique : ${cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--grey-900)] leading-tight uppercase tracking-tighter mb-8">
                  Service de remorquage agréé à ${cityName}
                </h1>
                <div className="bg-white border-l-8 border-[var(--blue-france-main)] p-8 shadow-md mb-10">
                  <p className="text-lg md:text-xl text-[var(--grey-800)] leading-relaxed font-medium">
                    Solution de transport automobile sécurisée pour le transfert de votre véhicule depuis ou vers la commune de <strong>${cityName}</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+33184173218" className="fr-btn shadow-lg py-4 px-8 text-lg">Demander un remorquage</a>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Intervention</span>
                    <span className="text-xl font-black text-[var(--blue-france-main)] uppercase tracking-tighter">7j/7 - 24h/24</span>
                  </div>
                </div>
              </div>
              <aside className="lg:col-span-5">
                <div className="bg-white border border-[var(--grey-200)] p-8 shadow-xl relative">
                  <div className="flex items-center justify-between border-b border-[var(--grey-200)] pb-4 mb-6">
                    <h2 className="text-xs font-black uppercase tracking-widest m-0">Fiche de Synthèse</h2>
                    <div className="w-10 h-10 flex flex-col items-center justify-center border border-black font-serif font-black text-[6px] leading-none text-center">
                      RÉPUBLIQUE<br/>FRANÇAISE
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { l: 'Zone', v: '${cityName} & Banlieue' },
                      { l: 'Délai', v: 'Sous 30 à 45 minutes' },
                      { l: 'Agrément', v: 'Transporteur Certifié' },
                      { l: 'Assurance', v: 'Responsabilité Civile Pro' }
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

        <section className="py-16 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-video shadow-2xl border-4 border-white overflow-hidden rounded-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?q=80&w=800&auto=format&fit=crop"
                  alt="Remorquage véhicule à ${cityName}"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="fr-alert">
                  <p className="text-sm font-bold">Transport sécurisé : Nos plateaux sont équipés pour le remorquage de véhicules de prestige et de deux-roues à ${cityName}.</p>
                </div>
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Une logistique adaptée à tous les besoins à ${cityName}</h2>
                <p className="text-[var(--grey-600)] leading-relaxed">
                  Notre flotte de dépanneuses permet de prendre en charge tout type de véhicule, du véhicule léger à l'utilitaire de 3.5 tonnes. Nous assurons le transfert vers le lieu de votre choix : domicile, garage spécialisé ou centre de destruction agréé VHU.
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
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Estimation immédiate</h2>
                <p className="text-[var(--grey-600)] leading-relaxed">Laissez vos coordonnées pour recevoir un devis gratuit pour votre remorquage à ${cityName}.</p>
                <div className="p-6 bg-white border border-[var(--grey-200)] border-l-4 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-xs font-black uppercase text-[var(--blue-france-main)] mb-2">Ligne Directe</p>
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
          { question: 'Puis-je choisir le garage de destination ?', answer: 'Oui, vous avez le libre choix de l\\'établissement réparateur pour votre véhicule remorqué depuis ${cityName}.' },
          { question: 'Mon assurance couvre-t-elle les frais ?', answer: 'La plupart des contrats incluent l\\'assistance 0km. Nous vous fournissons tous les justificatifs pour le remboursement par votre assureur.' },
          { question: 'Effectuez-vous des remorquages longue distance ?', answer: 'Oui, nous réalisons des transferts toutes distances au départ ou à destination de ${cityName} et sa banlieue.' }
        ]} title="Questions fréquentes - Remorquage ${cityName}" />
      </main>
    </>
  );
}`;
}

// Génération effective
let depannageCount = 0;
let remorquageCount = 0;

cities.forEach(slug => {
  // Page dépannage
  const depannageDir = path.join(__dirname, '..', 'src', 'app', 'depannage-auto', slug);
  const depannageFile = path.join(depannageDir, 'page.tsx');
  if (!fs.existsSync(depannageDir)) fs.mkdirSync(depannageDir, { recursive: true });
  fs.writeFileSync(depannageFile, generateDepannagePage(slug), 'utf8');
  depannageCount++;
  console.log(`Création: /depannage-auto/${slug}/page.tsx`);

  // Page remorquage
  const remorquageDir = path.join(__dirname, '..', 'src', 'app', 'remorquage', slug);
  const remorquageFile = path.join(remorquageDir, 'page.tsx');
  if (!fs.existsSync(remorquageDir)) fs.mkdirSync(remorquageDir, { recursive: true });
  fs.writeFileSync(remorquageFile, generateRemorquagePage(slug), 'utf8');
  remorquageCount++;
  console.log(`Création: /remorquage/${slug}/page.tsx`);
});

console.log(`\nGénération terminée.`);
console.log(`${depannageCount} pages dépannage-auto créées`);
console.log(`${remorquageCount} pages remorquage créées`);
console.log(`TOTAL: ${depannageCount + remorquageCount} pages`);
