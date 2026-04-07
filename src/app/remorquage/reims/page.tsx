import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Service de Remorquage Reims 24h/24 – Transport Automobile Certifié',
  description: 'Service de remorquage professionnel à Reims. Transport sécurisé toutes distances pour véhicules légers, utilitaires et deux-roues. Intervention rapide 7j/7.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/remorquage/reims/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/remorquage/reims/#business',
      name: 'RéseauEpaviste Reims',
      description: 'Direction des Interventions Routières - Service de remorquage certifié à Reims',
      url: 'https://reseauepaviste.fr/remorquage/reims/',
      telephone: '+33-1-84-17-32-18',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Reims',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function RemorquageReimsPage() {
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
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Direction des Interventions</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[var(--blue-france-main)] animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Remorquage Reims actif</span>
              </div>
              <a href="tel:+33745482464" className="text-2xl font-black text-[var(--blue-france-main)] no-underline">
                07 45 48 24 64
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <HeroSection
          variant="urgence"
          badge="Transfert Sécurisé"
          title="Service de Remorquage Agréé à Reims"
          subtitle="Solution logistique certifiée pour le transport de votre véhicule depuis ou vers Reims. Intervention immédiate par plateau technique spécialisé, disponible 24h/24."
          ctaText="Demander un Remorquage : 07 45 48 24 64"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?q=80&w=800&auto=format&fit=crop"
                  alt="Remorquage véhicule à Reims"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-france-main)]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[var(--blue-france-main)] shadow-lg max-w-xs">
                  <p className="text-[10px] font-bold text-[var(--blue-france-main)] uppercase mb-1">Logistique Reims</p>
                  <p className="text-sm font-bold text-[var(--grey-900)]">Transport sécurisé toutes distances pour VL et VU.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="fr-alert">
                  <p className="text-sm font-bold leading-relaxed">
                    Normes de sécurité : Tous nos convois de remorquage à Reims respectent strictement le Code de la Route et les consignes de sécurité routière.
                  </p>
                </div>
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Une logistique de pointe à Reims</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Notre flotte de dépanneuses-plateaux intervient sur l\'ensemble du secteur de <strong>Reims</strong> pour assurer le transfert de vos véhicules immobilisés. Nous garantissons une prise en charge délicate, adaptée aux spécificités techniques de chaque modèle, y compris les véhicules de prestige et les deux-roues.
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
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Estimation de transfert</h2>
                <p className="text-[var(--grey-600)] leading-relaxed text-lg">
                  Besoin de déplacer un véhicule depuis Reims ? Nos régulateurs calculent immédiatement le coût de votre transfert sur simple appel.
                </p>
                <div className="p-8 bg-[var(--blue-france-950)] border-l-8 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-[10px] font-black uppercase text-[var(--blue-france-main)] tracking-[0.2em] mb-3">Ligne Transfert Reims</p>
                  <a href="tel:+33745482464" className="text-3xl font-black text-[var(--grey-900)] no-underline">07 45 48 24 64</a>
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
          { question: 'Quel est le prix au kilomètre à Reims ?', answer: 'Nos tarifs sont calculés sur une base forfaitaire incluant la prise en charge et la distance. Contactez-nous pour une cotation précise en fonction de votre point de départ à Reims.' },
          { question: 'Remorquez-vous les utilitaires à Reims ?', answer: 'Oui, nous disposons de plateaux haute capacité capables de remorquer des véhicules utilitaires jusqu\'à 3.5 tonnes (fourgons, bennes, etc.) sur le secteur de Reims.' },
          { question: 'Quelles sont les garanties d\'assurance ?', answer: 'Tous nos transports sont couverts par une assurance responsabilité civile professionnelle spécifique au remorquage, garantissant votre véhicule contre tout dommage durant le trajet.' }
        ]} title="Questions fréquentes - Remorquage Reims" />
      </main>
    </>
  );
}