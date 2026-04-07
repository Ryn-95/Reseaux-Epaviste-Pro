import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Service d\'Enlèvement de VHU Ivry-sur-Seine (94) – Épaviste Agréé',
  description: 'Demande de prise en charge pour l\'enlèvement de véhicule hors d\'usage (VHU) à Ivry-sur-Seine et dans le département Val-de-Marne. Certificat de destruction CERFA remis immédiatement. Service public de proximité.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/epaviste/ivry-sur-seine/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/epaviste/ivry-sur-seine/#business',
      name: 'RéseauEpaviste Ivry-sur-Seine',
      description: 'Centre d\'appel pour l\'enlèvement de VHU certifié à Ivry-sur-Seine',
      url: 'https://reseauepaviste.fr/epaviste/ivry-sur-seine/',
      telephone: '+33-1-84-17-32-18',
      areaServed: { '@type': 'City', name: 'Ivry-sur-Seine' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ivry-sur-Seine',
        postalCode: '94000',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function EpavisteIvrysurSeinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="fr-header bg-white">
        <div className="fr-container">
          <div className="fr-header__body py-6 flex items-center justify-between border-b-2 border-[var(--blue-france-main)]">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center justify-center border-2 border-black p-2 font-serif font-black text-[9px] leading-none text-center bg-white min-w-[80px]">
                RÉPUBLIQUE<br/>FRANÇAISE
                <div className="mt-1 w-full h-0.5 bg-black"></div>
                <div className="mt-0.5 font-bold text-[7px] italic">Liberté<br/>Égalité<br/>Fraternité</div>
              </div>
              <div className="h-16 w-px bg-gray-300 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tighter uppercase leading-none text-[var(--grey-900)]">
                  Réseau<br/>
                  <span className="text-[var(--blue-france-main)]">Epaviste</span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Plateforme Nationale Agréée</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Secteur Ivry-sur-Seine Actif</span>
              </div>
              <a href="tel:+33184173218" className="text-2xl font-black text-[var(--blue-france-main)] no-underline">
                01 84 17 32 18
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <HeroSection
          variant="local"
          badge="Intervention sous 24h"
          title="Épaviste Agréé à Ivry-sur-Seine (94)"
          subtitle="Service public de proximité pour l'enlèvement gratuit de vos véhicules hors d'usage. Mise en conformité administrative totale sur Ivry-sur-Seine et ses environs."
          ctaText="Centre d'Appel : 01 84 17 32 18"
          ctaHref="tel:+33184173218"
        />

        <TrustBadges />

        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1645216755684-c946ce202427?q=80&w=1200&auto=format&fit=crop"
                  alt="Enlèvement d'épave à Ivry-sur-Seine"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-france-main)]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[var(--blue-france-main)] shadow-lg max-w-xs">
                  <p className="text-[10px] font-bold text-[var(--blue-france-main)] uppercase mb-1">Secteur 94</p>
                  <p className="text-sm font-bold text-[var(--grey-900)]">Intervention rapide à Ivry-sur-Seine et communes limitrophes.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="fr-alert">
                  <p className="text-sm font-bold leading-relaxed">
                    Tout propriétaire de véhicule hors d\'usage à Ivry-sur-Seine est responsable de sa remise à un centre VHU agréé, sous peine de sanctions administratives.
                  </p>
                </div>
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Votre épaviste de proximité à Ivry-sur-Seine</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Nos unités d\'intervention couvrent l\'intégralité de la commune de <strong>Ivry-sur-Seine</strong> (94) pour collecter vos véhicules destinés à la destruction. Nous assurons la dépollution systématique et le recyclage des matériaux dans le strict respect des directives environnementales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceGallery />

        <section className="py-20 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Demande de prise en charge</h2>
                <p className="text-[var(--grey-600)] leading-relaxed text-lg">
                  Nos agents basés en Val-de-Marne traitent votre dossier prioritairement. Préparez votre certificat d\'immatriculation pour l\'établissement du certificat de destruction CERFA.
                </p>
                <div className="p-8 bg-[var(--blue-france-950)] border-l-8 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-[10px] font-black uppercase text-[var(--blue-france-main)] tracking-[0.2em] mb-3">Ligne Directe Ivry-sur-Seine</p>
                  <a href="tel:+33184173218" className="text-3xl font-black text-[var(--grey-900)] no-underline">01 84 17 32 18</a>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-white p-2 shadow-2xl border border-[var(--grey-200)]">
                  <CallbackForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection items={[
          { question: 'L\'enlèvement est-il réellement gratuit à Ivry-sur-Seine ?', answer: 'Oui, l\'intervention est sans frais si le véhicule est complet (présence du bloc moteur et du pot catalytique). Nos frais sont couverts par la revente des matériaux recyclables.' },
          { question: 'Quels sont les délais d\'intervention en Val-de-Marne ?', answer: 'Nous intervenons généralement sous 24h à Ivry-sur-Seine et dans les villes voisines comme Charenton-le-Pont, Vitry-sur-Seine, Kremlin-Bicêtre.' },
          { question: 'Remettez-vous un document officiel ?', answer: 'Absolument. Un certificat de destruction (CERFA n°15776*02) vous est remis en main propre, déchargeant immédiatement votre responsabilité civile et pénale.' }
        ]} title="Informations complémentaires Ivry-sur-Seine" />
      </main>
    </>
  );
}
