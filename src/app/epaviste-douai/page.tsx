import type { Metadata } from 'next';
import Image from 'next/image';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CityJsonLd from '@/components/CityJsonLd';

export const metadata: Metadata = {
  title: "Épaviste Gratuit Douai | Réseaux Épaviste",
  description: "Épaviste agréé VHU à Douai (59). Enlèvement d'épave gratuit sous 24h. Obtenez votre certificat de destruction CERFA. Intervention rapide.",
  alternates: {
    canonical: 'https://www.reseauxepaviste.fr/epaviste-douai/',
  },
};

export default function EpavistedouaiPage() {
  return (
    <>
      <CityJsonLd city="Douai" department="59" region="Hauts-de-France" />
      <Breadcrumbs items={[
        { label: 'Épaviste', href: '/epaviste' },
        { label: 'Douai', href: '/epaviste-douai' }
      ]} />
      <main id="content">
        <HeroSection
          variant="local"
          badge="Intervention sous 24h à Douai"
          title="Épaviste Agréé VHU à Douai – Enlèvement Gratuit"
          subtitle="Service public de proximité pour l'enlèvement gratuit de vos véhicules hors d'usage à Douai (59). Mise en conformité administrative totale."
          ctaText="Centre d'Appel : 07 45 48 24 64"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        {/* H2: Notre intervention à [Ville] et [communes voisines] */}
        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden shadow-2xl border-4 border-white h-96">
                <Image 
                  src="https://images.unsplash.com/photo-1645216755684-c946ce202427?q=80&w=1200&auto=format&fit=crop"
                  alt="Enlèvement d'épave à Douai"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-france-main)]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[var(--blue-france-main)] shadow-lg max-w-xs">
                  <p className="text-[10px] font-bold text-[var(--blue-france-main)] uppercase mb-1">Secteur 59</p>
                  <p className="text-sm font-bold text-[var(--grey-900)]">Intervention rapide à Douai et communes limitrophes.</p>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Notre intervention à Douai et Sin-le-Noble, Cuincy, Waziers</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Nos unités d\'intervention sillonnent la région de Hauts-de-France, en particulier autour de Douai et la <strong>ZI Dorignies</strong>. Nous prenons en compte les spécificités locales : <strong>Centre historique restreint</strong> et adaptons nos moyens d\'enlèvement face aux contraintes comme : <em>Contraintes d'accès ancien</em>.
                </p>
                <div className="fr-alert">
                  <p className="text-sm font-bold leading-relaxed">
                    Le non-respect de la mise en destruction d\'un véhicule hors d\'usage par un centre VHU agréé expose le propriétaire à de lourdes sanctions. Confiez-nous votre épave en toute légalité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Zone couverte depuis [Ville] */}
        <section className="py-16 bg-white">
          <div className="fr-container">
            <h2 className="text-3xl font-black uppercase m-0 border-none p-0 mb-8 text-center">Zone couverte depuis Douai</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-[var(--grey-600)] leading-relaxed mb-6">
                Nos dépanneuses interviennent dans un rayon de 20 à 30 km autour de Douai, couvrant notamment les secteurs de :
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Douai', ...["Sin-le-Noble","Cuincy","Waziers"]].map((commune, i) => (
                  <span key={i} className="bg-[var(--grey-100)] text-[var(--grey-900)] px-4 py-2 rounded-full text-sm font-bold border border-[var(--grey-200)]">
                    {commune}
                  </span>
                ))}
                <span className="bg-[var(--grey-100)] text-[var(--grey-900)] px-4 py-2 rounded-full text-sm font-bold border border-[var(--grey-200)]">
                  Et tout le département 59
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Témoignages de clients à [Ville] */}
        <section className="py-16 bg-[var(--grey-50)]">
          <div className="fr-container">
            <h2 className="text-3xl font-black uppercase m-0 border-none p-0 mb-12 text-center">Témoignages de clients à Douai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 shadow-sm border border-[var(--grey-200)]">
                <div className="flex items-center gap-2 mb-4 text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-[var(--grey-700)] italic mb-6">
                  "Intervention très rapide suite à une panne irréparable. Le chauffeur connaissait bien le quartier et a pu récupérer la voiture malgré l'accès difficile."
                </p>
                <p className="font-bold text-[var(--grey-900)]">— Jean-Marc, Douai</p>
              </div>
              <div className="bg-white p-8 shadow-sm border border-[var(--grey-200)]">
                <div className="flex items-center gap-2 mb-4 text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-[var(--grey-700)] italic mb-6">
                  "Prise de rendez-vous simple et enlèvement le lendemain. L'épaviste s'est occupé de toute la paperasse et m'a remis le certificat CERFA directement."
                </p>
                <p className="font-bold text-[var(--grey-900)]">— Sophie, Sin-le-Noble</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Comment nous joindre depuis [Ville] */}
        <section className="py-20 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Comment nous joindre depuis Douai</h2>
                <p className="text-[var(--grey-600)] leading-relaxed text-lg">
                  Notre centre d\'appels coordonne les interventions de nos camions sur tout le secteur de Douai. Nos équipes sont mobilisables 7j/7 pour vous assister.
                </p>
                <div className="space-y-4 text-[var(--grey-700)]">
                  <p><strong>Téléphone :</strong> <a href="tel:+33745482464" className="text-[var(--blue-france-main)]">07 45 48 24 64</a></p>
                  <p><strong>Horaires :</strong> 24h/24, 7j/7</p>
                  <p><strong>Secteur d\'intervention :</strong> Douai et l\'ensemble du département 59</p>
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

        {/* H2: FAQ spécifique [Ville] */}
        <FAQSection items={[
          { question: 'L\'enlèvement d\'épave est-il gratuit partout à Douai ?', answer: 'Oui, l\'enlèvement est 100% gratuit si votre véhicule est complet (moteur, batterie, pot catalytique), même dans les quartiers difficiles d\'accès ou en parking souterrain à Douai.' },
          { question: 'Comment gérer les restrictions Crit\'Air à Douai pour l\'enlèvement ?', answer: 'Nos dépanneuses respectent les normes environnementales et sont autorisées à circuler dans la ZFE de Douai pour procéder à l\'enlèvement de votre véhicule polluant.' },
          { question: 'Quel est le délai pour obtenir le certificat de destruction CERFA à Douai ?', answer: 'Le certificat de destruction officiel vous est remis en main propre par notre chauffeur au moment de l\'enlèvement de votre véhicule à Douai.' }
        ]} title="FAQ : Enlèvement d'épave à Douai" />
      </main>
    </>
  );
}
