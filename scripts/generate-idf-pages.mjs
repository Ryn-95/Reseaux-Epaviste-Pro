import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const idfDepartments = [
  { nom: "Paris", numero: "75" },
  { nom: "Hauts-de-Seine", numero: "92" },
  { nom: "Seine-Saint-Denis", numero: "93" },
  { nom: "Val-de-Marne", numero: "94" },
  { nom: "Yvelines", numero: "78" },
  { nom: "Essonne", numero: "91" },
  { nom: "Seine-et-Marne", numero: "77" },
  { nom: "Val-d'Oise", numero: "95" }
];

const appDir = path.join(__dirname, '../src/app');

function normalizeSlug(name) {
  return name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/'/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

idfDepartments.forEach(dep => {
  const slug = normalizeSlug(dep.nom);
  const dirPath = path.join(appDir, `epaviste-${slug}-${dep.numero}`);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const content = `import type { Metadata } from 'next';
import Image from 'next/image';
import CallbackForm from '@/components/CallbackForm';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CityJsonLd from '@/components/CityJsonLd';

export const metadata: Metadata = {
  title: "Épaviste Agréé ${dep.nom} (${dep.numero}) | Réseaux Épaviste",
  description: "Épaviste gratuit et agréé VHU dans le ${dep.numero} (${dep.nom}). Enlèvement épave gratuit sous 24h. Certificat CERFA immédiat. Appelez le 07 45 48 24 64.",
  alternates: {
    canonical: 'https://reseauxepaviste.fr/epaviste-${slug}-${dep.numero}/',
  },
};

export default function Epaviste${slug.replace(/-/g, '')}${dep.numero}Page() {
  return (
    <>
      <CityJsonLd city="${dep.nom}" department="${dep.numero}" region="Île-de-France" />
      <Breadcrumbs items={[
        { label: 'Épaviste Île-de-France', href: '/epaviste' },
        { label: '${dep.nom.replace(/'/g, "\\'")}', href: '/epaviste-${slug}-${dep.numero}' }
      ]} />
      <main id="content">
        <HeroSection
          variant="local"
          badge="Intervention en Île-de-France"
          title="Épaviste Agréé VHU ${dep.nom} (${dep.numero}) – Enlèvement Gratuit"
          subtitle="Service d'enlèvement gratuit de véhicules hors d'usage dans tout le département du ${dep.nom}. Intervention rapide et remise du certificat CERFA."
          ctaText="Obtenir mon enlèvement gratuit"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Votre épaviste dans le ${dep.numero}</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Notre centre VHU agréé intervient gratuitement dans toutes les communes du <strong>${dep.nom}</strong>. Que votre véhicule soit accidenté, en panne ou sans contrôle technique, nous procédons à son enlèvement avec une dépanneuse adaptée.
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
`;
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Generated 8 IDF Department pages successfully!');
