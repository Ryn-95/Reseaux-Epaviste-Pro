import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, '../src/app');

const silos = [
  {
    hub: "epaviste",
    pages: [
      "enlevement-epave-gratuit",
      "certificat-destruction-cerfa",
      "voiture-accidentee",
      "voiture-sans-carte-grise",
      "prime-conversion-2026",
      "reglementation-vhu"
    ]
  },
  {
    hub: "depannage-auto",
    pages: [
      "panne-batterie",
      "erreur-carburant",
      "remorquage",
      "urgence-autoroute"
    ]
  }
];

silos.forEach(silo => {
  const hubDir = path.join(appDir, silo.hub);
  if (!fs.existsSync(hubDir)) {
    fs.mkdirSync(hubDir, { recursive: true });
  }

  silo.pages.forEach(page => {
    const pageDir = path.join(hubDir, page);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    const content = `import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import CallbackForm from '@/components/CallbackForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: '${page.replace(/-/g, ' ').toUpperCase()} | Réseaux Épaviste',
  description: 'Découvrez notre service de ${page.replace(/-/g, ' ')} avec Réseaux Épaviste. Intervention rapide et agréée.',
};

export default function ${page.replace(/-/g, '')}Page() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Accueil', href: '/' },
        { label: '${silo.hub.replace(/-/g, ' ')}', href: '/${silo.hub}' },
        { label: '${page.replace(/-/g, ' ')}', href: '/${silo.hub}/${page}' }
      ]} />
      <main id="content">
      <HeroSection
        variant="local"
        badge="Service Spécialisé"
        title="${page.replace(/-/g, ' ').toUpperCase()}"
        subtitle="Nous vous accompagnons dans toutes vos démarches pour ${page.replace(/-/g, ' ')}."
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
`;
    
    fs.writeFileSync(path.join(pageDir, 'page.tsx'), content);
  });
});

console.log('Generated Silo Architecture successfully!');
