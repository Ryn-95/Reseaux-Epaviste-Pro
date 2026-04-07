import type { Metadata } from 'next';
import Image from 'next/image';
import CallbackForm from '@/components/CallbackForm';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CityJsonLd from '@/components/CityJsonLd';

export const metadata: Metadata = {
  title: "Épaviste Agréé Essonne (91) | Réseaux Épaviste",
  description: "Épaviste gratuit et agréé VHU dans le 91 (Essonne). Enlèvement épave gratuit sous 24h. Certificat CERFA immédiat. Appelez le 07 45 48 24 64.",
  alternates: {
    canonical: 'https://reseauxepaviste.fr/epaviste-essonne-91/',
  },
};

export default function Epavisteessonne91Page() {
  return (
    <>
      <CityJsonLd city="Essonne" department="91" region="Île-de-France" />
      <Breadcrumbs items={[
        { label: 'Épaviste Île-de-France', href: '/epaviste' },
        { label: 'Essonne', href: '/epaviste-essonne-91' }
      ]} />
      <main id="content">
        <HeroSection
          variant="local"
          badge="Intervention en Île-de-France"
          title="Épaviste Agréé VHU Essonne (91) – Enlèvement Gratuit"
          subtitle="Service d'enlèvement gratuit de véhicules hors d'usage dans tout le département du Essonne. Intervention rapide et remise du certificat CERFA."
          ctaText="Obtenir mon enlèvement gratuit"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Votre épaviste dans le 91</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Notre centre VHU agréé intervient gratuitement dans toutes les communes du <strong>Essonne</strong>. Que votre véhicule soit accidenté, en panne ou sans contrôle technique, nous procédons à son enlèvement avec une dépanneuse adaptée.
                </p>
              </div>
              <div className="bg-white p-2 shadow-2xl border border-[var(--grey-200)]">
                <CallbackForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
