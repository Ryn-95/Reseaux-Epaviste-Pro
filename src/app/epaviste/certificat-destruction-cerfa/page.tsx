import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import CallbackForm from '@/components/CallbackForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CERTIFICAT DESTRUCTION CERFA | Réseaux Épaviste',
  description: 'Découvrez notre service de certificat destruction cerfa avec Réseaux Épaviste. Intervention rapide et agréée.',
};

export default function certificatdestructioncerfaPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Accueil', href: '/' },
        { label: 'epaviste', href: '/epaviste' },
        { label: 'certificat destruction cerfa', href: '/epaviste/certificat-destruction-cerfa' }
      ]} />
      <main id="content">
      <HeroSection
        variant="local"
        badge="Service Spécialisé"
        title="CERTIFICAT DESTRUCTION CERFA"
        subtitle="Nous vous accompagnons dans toutes vos démarches pour certificat destruction cerfa."
        ctaText="Nous contacter"
        ctaHref="tel:+33745482464"
      />
      <section className="py-16 bg-white">
        <div className="fr-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase">Besoin d'assistance ?</h2>
          <p className="text-lg text-[var(--grey-600)] mb-12">
            Remplissez le formulaire ci-dessous pour être recontacté par l'un de nos conseillers spécialisés.
          </p>
          <div className="bg-white p-2 shadow-2xl border border-[var(--grey-200)] text-left">
            <CallbackForm />
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
