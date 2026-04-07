import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Assistance Routière Grenoble 24h/24 – Dépannage Technique Certifié',
  description: 'Service d\'assistance automobile à Grenoble. Intervention technique 24h/24 pour batterie, pneumatiques et pannes mécaniques. Service certifié disponible 7j/7.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/depannage-auto/grenoble/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/depannage-auto/grenoble/#business',
      name: 'RéseauEpaviste Grenoble',
      description: 'Direction des Opérations Techniques - Service de dépannage automobile certifié à Grenoble',
      url: 'https://reseauepaviste.fr/depannage-auto/grenoble/',
      telephone: '+33-1-84-17-32-18',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grenoble',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function DepannageAutoGrenoblePage() {
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
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Assistance Routière Nationale</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Unité Grenoble active</span>
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
          badge="Astreinte 24h/7j"
          title="Dépannage Automobile d'Urgence à Grenoble"
          subtitle="Intervention technique immédiate pour pannes mécaniques, batteries et pneumatiques sur la commune de Grenoble. Nos dépanneurs certifiés arrivent sous 30-45 minutes."
          ctaText="Ligne Prioritaire : 07 45 48 24 64"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1506017594549-d4efaf589cf2?q=80&w=800&auto=format&fit=crop"
                  alt="Dépannage automobile à Grenoble"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-france-main)]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[var(--blue-france-main)] shadow-lg max-w-xs">
                  <p className="text-[10px] font-bold text-[var(--blue-france-main)] uppercase mb-1">Expertise Grenoble</p>
                  <p className="text-sm font-bold text-[var(--grey-900)]">Diagnostic valise et réparation sur place pour 80% des pannes.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="fr-alert">
                  <p className="text-sm font-bold leading-relaxed">
                    Sécurisation : En cas de panne à Grenoble, allumez vos feux de détresse et revêtez votre gilet de haute visibilité avant notre arrivée.
                  </p>
                </div>
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Assistance technique certifiée à Grenoble</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Nos unités mobiles d\'intervention sont équipées des derniers outils de diagnostic pour résoudre vos pannes directement sur site à <strong>Grenoble</strong>. Nous intervenons sur tout type de véhicule (thermique, hybride, électrique) avec des techniciens habilités par la Direction des Opérations.
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
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Demande d'assistance immédiate</h2>
                <p className="text-[var(--grey-600)] leading-relaxed text-lg">
                  Nos dépanneurs sont en astreinte permanente sur le secteur de Grenoble. Laissez vos coordonnées pour un rappel et une estimation précise du délai d\'arrivée.
                </p>
                <div className="p-8 bg-[var(--blue-france-950)] border-l-8 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-[10px] font-black uppercase text-[var(--blue-france-main)] tracking-[0.2em] mb-3">Ligne d'Urgence Grenoble</p>
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
          { question: 'Quel est le coût d\'un dépannage à Grenoble ?', answer: 'Nos tarifs sont conventionnés et dépendent de la nature de l\'intervention. Un devis transparent vous est communiqué avant tout acte technique.' },
          { question: 'Intervenez-vous les jours fériés à Grenoble ?', answer: 'Oui, nous assurons une continuité de service 365 jours par an, 24h sur 24, y compris les dimanches et jours fériés sur Grenoble.' },
          { question: 'Proposez-vous le remorquage si la réparation est impossible ?', answer: 'Absolument. Si votre véhicule ne peut être réparé sur place à Grenoble, nous organisons son transfert vers le garage de votre choix ou notre centre technique.' }
        ]} title="Questions fréquentes - Dépannage Grenoble" />
      </main>
    </>
  );
}