// Template DÉPANNAGE-AUTO optimisé SEO on-site
module.exports = function generateDepannagePage(city) {
  return `import type { Metadata } from 'next';

// =====================================================
// MÉTADONNÉES SEO - Dépannage Auto ${city.name}
// =====================================================

export const metadata: Metadata = {
  title: 'Assistance Routière ${city.name} 24h/24 – Dépannage Technique Certifié | RéseauEpaviste',
  description: 'Service d\\'assistance automobile à ${city.name} (${city.dept}). Intervention technique 24h/24 pour batterie, pneumatiques et pannes mécaniques. Service certifié disponible 7j/7. Contactez le 07 45 48 24 64.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/depannage-auto/${city.slug}/',
  },
  openGraph: {
    title: 'Dépannage Automobile ${city.name} 24h/24 – Assistance Prioritaire',
    description: 'Prise en charge technique de votre véhicule à ${city.name}. Unité mobile d\\'intervention disponible 24h/24.',
    url: 'https://reseauepaviste.fr/depannage-auto/${city.slug}/',
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
      '@id': 'https://reseauepaviste.fr/depannage-auto/${city.slug}/#business',
      name: 'RéseauEpaviste Dépannage ${city.name}',
      description: 'Service de dépannage automobile 24h/24 à ${city.name}',
      url: 'https://reseauepaviste.fr/depannage-auto/${city.slug}/',
      telephone: '+33-1-84-17-32-18',
      priceRange: '€€',
      image: 'https://reseauepaviste.fr/images/depannage-${city.slug}.jpg',
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
        name: 'Services de dépannage ${city.name}',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dépannage batterie ${city.name}',
              description: 'Démarrage avec câbles ou remplacement batterie sur place',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Réparation crevaison ${city.name}',
              description: 'Changement de roue ou réparation pneu sur place',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Livraison carburant ${city.name}',
              description: 'Livraison essence ou diesel d\\'urgence',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://reseauepaviste.fr/depannage-auto/${city.slug}/#breadcrumb',
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
          name: 'Dépannage Auto',
          item: 'https://reseauepaviste.fr/depannage-auto/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Assistance ${city.name}',
          item: 'https://reseauepaviste.fr/depannage-auto/${city.slug}/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://reseauepaviste.fr/depannage-auto/${city.slug}/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel est le délai d\\'intervention pour un dépannage à ${city.name} ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nos unités d\\'intervention prioritaire à ${city.name} sont mobilisées pour intervenir sous un délai moyen de 30 à 45 minutes. Ce délai peut être réduit à 20 minutes pour les interventions sur les axes routiers majeurs et les situations d\\'urgence avérée.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la tarification d\\'un dépannage automobile à ${city.name} ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La tarification des prestations de dépannage à ${city.name} est encadrée : assistance batterie à partir de 60€, remplacement pneumatique dès 50€, et assistance carburant dès 70€. Une estimation détaillée est fournie systématiquement avant toute mobilisation au 07 45 48 24 64.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les pannes éligibles à l\\'assistance mobile à ${city.name} ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nous assurons la prise en charge technique des pannes de batterie, crevaisons, erreurs de carburant, dysfonctionnements de serrurerie et défaillances électroniques légères à ${city.name}. En cas d\\'impossibilité de réparation sur site, un transfert sécurisé vers un centre technique est organisé.',
          },
        },
      ],
    },
  ],
};

export default function DepannageAuto${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="bg-white">
        <div className="border-b border-[var(--gris-border)] bg-[var(--gris-fond)] relative overflow-hidden">
          {/* Decorative Institutional Pattern */}
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
                    <span className="text-[10px] font-bold text-[var(--gris-texte)] uppercase tracking-widest">Service National</span>
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 border border-[var(--bleu-france)] text-[var(--bleu-france)] uppercase tracking-widest bg-white">
                    Assistance technique 24h/7j
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--gris-texte)] mb-8 tracking-tighter leading-tight">
                  Dispositif d'Assistance Routière à ${city.name}
                </h1>

                <div className="bg-white border-l-4 border-[var(--bleu-france)] p-8 shadow-sm mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gris-texte-leger)] mb-2">Ligne d'Urgence Technique</div>
                      <a href="tel:+33745482464" className="text-3xl font-black text-[var(--bleu-france)] no-underline">
                        07 45 48 24 64
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-green-700 uppercase tracking-wide">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Intervention certifiée
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--bleu-france)] uppercase tracking-wide">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Astreinte 24h/24
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[var(--gris-texte-leger)] leading-relaxed max-w-2xl">
                  La <strong>Direction des Opérations Techniques</strong> coordonne l'ensemble des interventions de dépannage sur le territoire de ${city.name}. Nos unités mobiles sont habilitées pour la résolution immédiate des pannes courantes et la sécurisation des véhicules sur la voie publique.
                </p>
              </div>

              <aside className="lg:col-span-5 hidden lg:block">
                <div className="bg-white border border-[var(--gris-border)] p-10 relative">
                  <div className="absolute -top-2 -right-2 w-full h-full border border-[var(--gris-border)] -z-10"></div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--gris-border)]">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--gris-texte)]">Données de Service</h2>
                    <div className="w-8 h-8 opacity-10">
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <text x="0" y="80" fontSize="80" fontWeight="bold">RF</text>
                      </svg>
                    </div>
                  </div>
                  <ul className="space-y-6">
                    {[
                      { l: 'Secteur', v: '${city.name} (${city.dept})' },
                      { l: 'Temps Moyen', v: '30 à 45 min' },
                      { l: 'Certification', v: 'Technicien Agréé' },
                      { l: 'Conformité', v: 'Normes de Sécurité' }
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
              <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--gris-texte)]">Périmètre Technique d'Intervention</h2>
              <div className="flex-1 h-px bg-[var(--gris-border)]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: 'Énergie & Batterie', d: 'Contrôle du circuit de charge, démarrage assisté ou remplacement standard.', p: 'À partir de 60€' },
                { t: 'Assistance Pneumatique', d: 'Réparation de fortune sur site ou remplacement par roue de secours.', p: 'À partir de 50€' },
                { t: 'Serrurerie & Accès', d: 'Ouverture technique de portière sans altération des mécanismes de sécurité.', p: 'À partir de 80€' },
                { t: 'Fluides & Carburant', d: 'Réapprovisionnement d\\'urgence ou vidange suite à erreur de carburant.', p: 'À partir de 70€' }
              ].map((service, idx) => (
                <div key={idx} className="border border-[var(--gris-border)] p-8 hover:border-[var(--bleu-france)] transition-colors">
                  <h3 className="font-black uppercase tracking-wide text-sm text-[var(--gris-texte)] mb-4">{service.t}</h3>
                  <p className="text-sm text-[var(--gris-texte-leger)] leading-relaxed mb-6">{service.d}</p>
                  <div className="text-[10px] font-black text-[var(--bleu-france)] uppercase tracking-widest border-t border-[var(--gris-fond)] pt-4">
                    Tarif Conventionné : {service.p}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[var(--gris-fond)] border border-[var(--gris-border)] p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--bleu-france)]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--gris-texte)] mb-6">Protocole de Prise en Charge</h2>
                <p className="text-[var(--gris-texte-leger)] leading-relaxed mb-8">
                  Chaque intervention à ${city.name} suit un protocole strict visant à assurer la sécurité de l\\'usager et la fluidité du trafic. Nos agents sont habilités pour les interventions sur voie publique.
                </p>
                <div className="space-y-4">
                  {[
                    'Évaluation technique immédiate par téléphone',
                    'Signalisation de zone d\\'intervention sécurisée',
                    'Établissement d\\'un rapport technique d\\'assistance',
                    'Option de transfert vers établissement agréé'
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
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--gris-texte-leger)] mb-4">Demande de Déploiement Technique</div>
                  <a href="tel:+33745482464" className="btn-primary w-full py-5 justify-center text-xl">
                    Mobiliser un Agent
                  </a>
                  <p className="text-[9px] text-[var(--gris-texte-leger)] mt-4 uppercase tracking-widest font-bold">
                    Permanence opérationnelle 24h/24
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--gris-texte)] mb-12">Dispositions Réglementaires & FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { q: 'Quel est le temps d\\'attente constaté à ${city.name} ?', a: 'Nos unités mobiles interviennent sous 30 à 45 minutes en moyenne sur l\\'ensemble de la commune de ${city.name}.' },
                { q: 'Les tarifs sont-ils majorés durant la nuit ?', a: 'Conformément aux usages de la profession, une tarification spécifique s\\'applique entre 20h00 et 08h00, ainsi que les dimanches et jours fériés.' },
                { q: 'Proposez-vous le remorquage si la réparation échoue ?', a: 'Oui, nos unités sont équipées pour effectuer un remorquage immédiat vers le centre technique de votre choix en cas d\\'immobilisation prolongée.' },
                { q: 'Le service est-il éligible à l\\'assistance assurance ?', a: 'Absolument. Une facture normalisée vous est remise pour la prise en charge de vos frais de dépannage par votre compagnie d\\'assurance.' }
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
              <h2 className="text-2xl font-black uppercase tracking-tight text-[var(--gris-texte)]">Services Complémentaires à ${city.name}</h2>
              <div className="w-12 h-1 bg-[var(--bleu-france)] mt-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: 'Remorquage & Transport', h: '/remorquage/${city.slug}/', d: 'Transfert de véhicules toutes distances.' },
                { t: 'Enlèvement de VHU', h: '/epaviste/${city.slug}/', d: 'Mise à la casse gratuite de véhicules hors d\\'usage.' },
                { t: 'Centres Agréés VHU', h: '/centre-vhu/', d: 'Accès au réseau national de centres de traitement.' }
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
