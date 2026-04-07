// Template REMORQUAGE optimisé SEO on-site
module.exports = function generateRemorquagePage(city) {
  return `import type { Metadata } from 'next';

// =====================================================
// MÉTADONNÉES SEO - Remorquage ${city.name}
// =====================================================

export const metadata: Metadata = {
  title: 'Remorquage ${city.name} 24h/24 – Dépanneuse Rapide | RéseauEpaviste',
  description: 'Service de remorquage automobile à ${city.name} (${city.dept}). Assistance technique 24h/24 pour tout type de véhicule. Intervention certifiée sous 30 minutes. Contactez le 07 45 48 24 64.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/remorquage/${city.slug}/',
  },
  openGraph: {
    title: 'Remorquage ${city.name} 24h/24 – Assistance Routière Certifiée',
    description: 'Prise en charge de votre véhicule à ${city.name}. Dépanneuse agréée disponible 24h/24.',
    url: 'https://reseauepaviste.fr/remorquage/${city.slug}/',
    type: 'website',
    locale: 'fr_FR',
  },
};

// =====================================================
// DONNÉES STRUCTURÉES JSON-LD
// =====================================================

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/remorquage/${city.slug}/#business',
      name: 'RéseauEpaviste Remorquage ${city.name}',
      description: 'Service de remorquage 24h/24 à ${city.name}',
      url: 'https://reseauepaviste.fr/remorquage/${city.slug}/',
      telephone: '+33-1-84-17-32-18',
      priceRange: '€€',
      image: 'https://reseauepaviste.fr/images/remorquage-${city.slug}.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '${city.name}',
        postalCode: '${city.dept}000',
        addressRegion: '${city.region}',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: ${city.lat},
        longitude: ${city.lng},
      },
      areaServed: {
        '@type': 'City',
        name: '${city.name}',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de remorquage ${city.name}',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Remorquage voiture ${city.name}',
              description: 'Remorquage de voiture particulière vers garage ou domicile',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Remorquage moto ${city.name}',
              description: 'Transport sécurisé de moto et scooter',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Remorquage utilitaire ${city.name}',
              description: 'Remorquage véhicules utilitaires jusqu\\'à 3,5 tonnes',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://reseauepaviste.fr/remorquage/${city.slug}/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://reseauepaviste.fr/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Remorquage',
          item: 'https://reseauepaviste.fr/remorquage/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Assistance ${city.name}',
          item: 'https://reseauepaviste.fr/remorquage/${city.slug}/',
        },
      ],
    },
        {
          '@type': 'FAQPage',
          '@id': 'https://reseauepaviste.fr/remorquage/${city.slug}/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Quelle est la tarification d\\'un remorquage à ${city.name} ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'La tarification d\\'un remorquage sur la commune de ${city.name} est réglementée et dépend de la distance parcourue : forfait urbain pour les trajets de moins de 10 km, et tarif kilométrique au-delà. Une estimation précise peut être obtenue par simple appel au 07 45 48 24 64.',
              },
            },
            {
              '@type': 'Question',
              name: 'Quel est le délai d\\'intervention d\\'une dépanneuse à ${city.name} ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nos unités mobiles sont positionnées stratégiquement pour intervenir en moins de 30 à 45 minutes à ${city.name}. Les demandes d\\'assistance sur les axes prioritaires et les situations d\\'urgence font l\\'objet d\\'une mobilisation immédiate.',
              },
            },
            {
              '@type': 'Question',
              name: 'La responsabilité du transporteur est-elle engagée à ${city.name} ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, l\\'intégralité de nos prestations de remorquage à ${city.name} est couverte par une assurance responsabilité civile professionnelle. Chaque véhicule transporté est assuré depuis sa prise en charge jusqu\\'à sa livraison finale.',
              },
            },
          ],
        },
  ],
};

export default function Remorquage${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="bg-white">
        <div className="border-b border-[var(--gris-border)] bg-[var(--gris-fond)] relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[var(--gris-border)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--bleu-france)]"></div>
                    <span className="text-[10px] font-bold text-[var(--gris-texte)] uppercase tracking-widest">Information Publique</span>
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 border border-[var(--bleu-france)] text-[var(--bleu-france)] uppercase tracking-widest bg-white">
                    Assistance 24h/7j
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--gris-texte)] mb-8 tracking-tighter leading-tight">
                  Service d'Assistance & Remorquage à ${city.name}
                </h1>

                <div className="bg-white border-l-4 border-[var(--bleu-france)] p-8 shadow-sm mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gris-texte-leger)] mb-2">Ligne Directe Prioritaire</div>
                      <a href="tel:+33745482464" className="text-3xl font-black text-[var(--bleu-france)] no-underline">
                        07 45 48 24 64
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-green-700 uppercase tracking-wide">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Intervention sous 30 min
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--bleu-france)] uppercase tracking-wide">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Disponibilité Totale
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[var(--gris-texte-leger)] leading-relaxed max-w-2xl">
                  La <strong>Direction des Interventions Routières</strong> assure la coordination des opérations de remorquage sur la commune de ${city.name}. Nos unités mobiles sont habilitées pour le transport de tout type de véhicule immobilisé sur la voie publique ou en domaine privé.
                </p>
              </div>

              <aside className="lg:col-span-5 hidden lg:block">
                <div className="bg-white border border-[var(--gris-border)] p-10 relative">
                  <div className="absolute -top-2 -right-2 w-full h-full border border-[var(--gris-border)] -z-10"></div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--gris-border)]">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--gris-texte)]">Fiche Technique</h2>
                    <div className="w-8 h-8 opacity-10">
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <text x="0" y="80" fontSize="80" fontWeight="bold">RF</text>
                      </svg>
                    </div>
                  </div>
                  <ul className="space-y-6">
                    {[
                      { l: 'Couverture', v: '${city.name} & Banlieue' },
                      { l: 'Délai Moyen', v: '30 à 45 minutes' },
                      { l: 'Agrément', v: 'Transporteur Certifié' },
                      { l: 'Assurance', v: 'RC Professionnelle' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center border-b border-[var(--gris-fond)] pb-2">
                        <span className="text-[10px] font-bold uppercase text-[var(--gris-texte-leger)] tracking-wider">{item.l}</span>
                        <span className="text-sm font-bold text-[var(--gris-texte)]">{item.v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--gris-texte)]">Prestations de Remorquage</h2>
              <div className="flex-1 h-px bg-[var(--gris-border)]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: 'Véhicules Légers', d: 'Transport de berlines, citadines et SUV vers le lieu de votre choix.', p: 'À partir de 80€' },
                { t: 'Deux-Roues', d: 'Équipement spécifique pour le transport vertical sécurisé de motos.', p: 'À partir de 70€' },
                { t: 'Utilitaires', d: 'Prise en charge de véhicules jusqu\\'à 3,5 tonnes avec plateau adapté.', p: 'À partir de 120€' },
                { t: 'Accès Difficiles', d: 'Intervention en parking souterrain et zones à hauteur limitée.', p: 'Sur devis' }
              ].map((service, idx) => (
                <div key={idx} className="border border-[var(--gris-border)] p-8 hover:border-[var(--bleu-france)] transition-colors">
                  <h3 className="font-black uppercase tracking-wide text-sm text-[var(--gris-texte)] mb-4">{service.t}</h3>
                  <p className="text-sm text-[var(--gris-texte-leger)] leading-relaxed mb-6">{service.d}</p>
                  <div className="text-[10px] font-black text-[var(--bleu-france)] uppercase tracking-widest border-t border-[var(--gris-fond)] pt-4">
                    Tarif Réglementé : {service.p}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[var(--gris-fond)] border border-[var(--gris-border)] p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--bleu-france)]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--gris-texte)] mb-6">Cadre des Situations d'Urgence</h2>
                <p className="text-[var(--gris-texte-leger)] leading-relaxed mb-8">
                  Le remorquage s\\'effectue dans le strict respect des procédures de sécurité routière. Nos dépanneurs sont formés pour intervenir sur tout type de sinistre à ${city.name}.
                </p>
                <div className="space-y-4">
                  {[
                    'Panne moteur ou électronique immobilisante',
                    'Sinistre collision avec dégâts matériels',
                    'Véhicule immobilisé sur la voie publique',
                    'Transfert vers centre de destruction agréé'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[var(--rouge-marianne)]"></div>
                      <span className="text-sm font-bold text-[var(--gris-texte)] uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 border border-[var(--gris-border)] shadow-xl">
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gris-texte-leger)] mb-4">Demande de Prise en Charge Immédiate</div>
                  <a href="tel:+33745482464" className="btn-primary w-full py-5 justify-center text-xl">
                    Appeler l'Assistance
                  </a>
                  <p className="text-[9px] text-[var(--gris-texte-leger)] mt-4 uppercase tracking-widest font-bold">
                    Service Ouvert sans interruption 24h/24
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--gris-texte)] mb-12">Dispositions & FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { q: 'Puis-je choisir l\\'établissement de destination ?', a: 'Oui, conformément à la réglementation, l\\'usager conserve le libre choix de l\\'établissement réparateur pour son véhicule.' },
                { q: 'Mon assurance couvre-t-elle les frais ?', a: 'Selon les termes de votre contrat d\\'assistance, les frais peuvent être intégralement pris en charge par votre assureur.' },
                { q: 'Quel document est remis lors de la prestation ?', a: 'Une facture détaillée et un bon de transport certifiant la prise en charge de votre véhicule vous sont systématiquement remis.' },
                { q: 'L\\'assistance est-elle disponible les jours fériés ?', a: 'Oui, notre service assure une permanence opérationnelle 365 jours par an, incluant les périodes de fêtes.' }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-[var(--gris-border)] pb-6">
                  <h3 className="font-black uppercase tracking-wide text-xs text-[var(--bleu-france)] mb-3">{faq.q}</h3>
                  <p className="text-sm text-[var(--gris-texte-leger)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-[var(--gris-border)] pt-20">
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tight text-[var(--gris-texte)]">Services Annexes à ${city.name}</h2>
              <div className="w-12 h-1 bg-[var(--bleu-france)] mt-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: 'Épaviste ${city.name}', h: '/epaviste/${city.slug}/', d: 'Enlèvement gratuit de véhicules hors d\\'usage.' },
                { t: 'Dépannage Auto', h: '/depannage-auto/${city.slug}/', d: 'Assistance mécanique légère sur site.' },
                { t: 'Réseau National', h: '/remorquage/', d: 'Accès à l\\'ensemble de nos points d\\'assistance.' }
              ].map((item, idx) => (
                <a key={idx} href={item.h} className="group border border-[var(--gris-border)] p-8 no-underline hover:bg-[var(--gris-fond)] transition-colors">
                  <h3 className="font-black uppercase tracking-wide text-sm text-[var(--gris-texte)] mb-2 group-hover:text-[var(--bleu-france)] transition-colors">{item.t}</h3>
                  <p className="text-xs text-[var(--gris-texte-leger)] leading-relaxed">{item.d}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
`;
};
