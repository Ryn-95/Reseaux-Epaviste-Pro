import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ───────────────────────────── FAQ DATA ───────────────────────────── */
const faqItems = [
  {
    question: "L'enlèvement d'épave est-il vraiment gratuit ?",
    answer: "Oui, l'enlèvement d'épave est 100% gratuit si le véhicule est complet (avec son moteur, son pot catalytique et ses éléments essentiels). En faisant appel à notre réseau d'épavistes agréés VHU, aucun frais de déplacement ni de destruction ne vous sera facturé. Notre modèle repose sur le recyclage des métaux. Pour bénéficier de la gratuité, assurez-vous simplement que le véhicule est accessible et complet."
  },
  {
    question: "Comment détruire légalement sa voiture en France ?",
    answer: "Pour détruire légalement sa voiture en France, il est obligatoire de la remettre à un centre VHU (Véhicule Hors d'Usage) agréé par la préfecture. La démarche s'effectue en 3 étapes : prendre rendez-vous avec un épaviste agréé, fournir les documents obligatoires (carte grise, pièce d'identité, non-gage), et récupérer le certificat de destruction (CERFA 14365*01) qui clôturera votre dossier."
  },
  {
    question: "Quels documents faut-il pour faire enlever une épave ?",
    answer: "Trois documents obligatoires sont requis pour faire enlever une épave : la carte grise originale barrée avec la mention « cédé le [date/heure] pour destruction », la copie de votre pièce d'identité (ou passeport), et un certificat de non-gage de moins de 15 jours. En cas de perte de la carte grise, une déclaration de perte remplie en gendarmerie ou au commissariat sera exigée."
  },
  {
    question: "Qu'est-ce que le certificat CERFA de destruction ?",
    answer: "Le certificat de destruction CERFA (formulaire 14365*01) est le seul document officiel et légal prouvant que votre véhicule a été pris en charge par un centre agréé VHU pour y être dépollué et détruit. Ce document vous dégage de toute responsabilité pénale ou civile (amendes, accidents) et est indispensable pour résilier définitivement votre contrat d'assurance auto."
  },
  {
    question: "Comment bénéficier de la prime à la conversion 2026 ?",
    answer: "Pour bénéficier de la prime à la conversion (jusqu'à 5 000€), vous devez obligatoirement mettre au rebut votre ancien véhicule (diesel d'avant 2011 ou essence d'avant 2006) dans un centre VHU agréé. Lors de l'enlèvement, nous vous remettons le certificat de destruction prouvant la mise au rebut. Vous devrez ensuite joindre ce document à votre dossier d'aide gouvernementale sur le portail de l'ASP."
  },
  {
    question: "Combien de temps prend l'enlèvement d'une épave ?",
    answer: "L'enlèvement d'une épave prend en moyenne 24 à 48 heures après votre prise de contact. En cas d'urgence (véhicule accidenté, stationnement gênant ou fourrière imminente), nos dépanneuses peuvent intervenir le jour même en Île-de-France. L'intervention sur place (chargement du véhicule et formalités administratives) dure généralement moins de 30 minutes."
  },
  {
    question: "Peut-on faire enlever une voiture sans carte grise ?",
    answer: "Oui, il est tout à fait possible de faire enlever une voiture sans carte grise. En cas de perte ou de vol, vous devez fournir une déclaration de perte (formulaire CERFA 13753*04). Si le véhicule est très ancien (plus de 30 ans), un justificatif de propriété suffira. Contactez-nous pour que nous analysions votre situation spécifique."
  },
  {
    question: "Quelle est la différence entre épaviste et casse auto ?",
    answer: "Un épaviste est le professionnel chargé du remorquage et du transport sécurisé du véhicule vers la casse auto. La casse auto (ou centre VHU) est l'installation classée pour la protection de l'environnement (ICPE) habilitée par la préfecture pour dépolluer, démonter et broyer les véhicules. Notre réseau intègre ces deux pôles pour vous offrir un service clé en main."
  },
  {
    question: "Que devient ma voiture après destruction chez un épaviste ?",
    answer: "Après l'enlèvement, votre voiture suit un processus écologique strict en centre VHU : dépollution (retrait des huiles, liquides de frein, batteries), démontage des pièces encore réutilisables pour le marché de l'occasion (économie circulaire), puis broyage et tri des matériaux (acier, aluminium, plastique) pour recyclage. Près de 95% de la masse du véhicule est revalorisée."
  },
  {
    question: "Est-ce qu'un épaviste peut intervenir en parking souterrain ?",
    answer: "Oui, notre flotte de dépanneuses comprend des véhicules extra-plats (type 4x4 ou petits plateaux) spécialement conçus pour intervenir dans les parkings souterrains, les sous-sols et les accès à hauteur limitée (moins de 1,90m). Précisez-le lors de votre appel afin que nous envoyions le matériel adéquat."
  },
  {
    question: "Comment arrêter l'assurance auto après destruction du véhicule ?",
    answer: "Pour résilier votre assurance auto après destruction, vous devez envoyer une lettre recommandée avec accusé de réception à votre assureur, accompagnée d'une copie du certificat de destruction (CERFA 14365*01) remis par notre épaviste. La résiliation prendra effet le lendemain de la date figurant sur le certificat, et la portion de prime trop-perçue vous sera remboursée."
  },
  {
    question: "Quel est l'agrément VHU et pourquoi est-il obligatoire ?",
    answer: "L'agrément VHU (Véhicule Hors d'Usage) est une certification délivrée par la préfecture attestant qu'une entreprise respecte les normes environnementales strictes pour le traitement des déchets toxiques automobiles. Confier son véhicule à un professionnel non agréé est un délit passible de 2 ans d'emprisonnement et 75 000 € d'amende."
  },
  {
    question: "Peut-on faire enlever une moto ou un scooter gratuitement ?",
    answer: "Absolument. L'enlèvement gratuit concerne également les deux-roues (motos, scooters, cyclomoteurs) et les trois-roues hors d'usage. Les démarches administratives et les documents requis (carte grise, pièce d'identité, non-gage) sont exactement les mêmes que pour une voiture. Nous disposons d'équipements spécifiques pour le levage des deux-roues."
  },
  {
    question: "L'enlèvement est-il gratuit pour un véhicule accidenté ?",
    answer: "Oui, l'enlèvement d'un véhicule accidenté ou non roulant reste 100% gratuit en Île-de-France, à condition que le véhicule contienne toujours ses composants principaux (moteur, carrosserie complète, ligne d'échappement). Nos dépanneuses sont équipées de treuils et de grues pour charger les véhicules gravement endommagés."
  },
  {
    question: "Quelle amende risque-t-on à abandonner une épave ?",
    answer: "Abandonner une épave sur la voie publique ou dans la nature est une infraction grave au Code de l'environnement. Le propriétaire risque une amende pouvant aller jusqu'à 1 500 €, la mise en fourrière à ses frais, et dans les cas graves de pollution, des sanctions pénales pouvant atteindre 2 ans de prison et 75 000 € d'amende."
  }
];

/* ───────────────────────────── COMPONENT ───────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-bg-pure">
      {/* JSON-LD Structured Data - @graph architecture */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "AutomotiveBusiness"],
                "@id": "https://www.reseauxepaviste.fr/#organization",
                "name": "Réseaux Épaviste",
                "telephone": "07 45 48 24 64",
                "email": "contact@reseauxepaviste.fr",
                "url": "https://www.reseauxepaviste.fr",
                "logo": "https://www.reseauxepaviste.fr/logo.png",
                "image": "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1600&auto=format&fit=crop",
                "priceRange": "Gratuit",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                ],
                "areaServed": [
                  { "@type": "City", "name": "Paris" },
                  { "@type": "City", "name": "Hauts-de-Seine" },
                  { "@type": "City", "name": "Seine-Saint-Denis" },
                  { "@type": "City", "name": "Val-de-Marne" },
                  { "@type": "City", "name": "Yvelines" },
                  { "@type": "City", "name": "Essonne" },
                  { "@type": "City", "name": "Seine-et-Marne" },
                  { "@type": "City", "name": "Val-d'Oise" }
                ],
                "hasCredential": "Agrément VHU PR9200012D"
              },
              {
                "@type": "Service",
                "serviceType": "Enlèvement épave gratuit",
                "provider": { "@id": "https://www.reseauxepaviste.fr/#organization" },
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
              },
              {
                "@type": "Service",
                "serviceType": "Dépannage auto 24h/7j",
                "provider": { "@id": "https://www.reseauxepaviste.fr/#organization" }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              },
              {
                "@type": "AggregateRating",
                "itemReviewed": { "@id": "https://www.reseauxepaviste.fr/#organization" },
                "ratingValue": "4.9",
                "reviewCount": "1847",
                "bestRating": "5"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.reseauxepaviste.fr/" },
                  { "@type": "ListItem", "position": 2, "name": "Enlèvement d'épave", "item": "https://www.reseauxepaviste.fr/enlevement-epave" },
                  { "@type": "ListItem", "position": 3, "name": "Dépannage auto", "item": "https://www.reseauxepaviste.fr/depannage-auto" },
                  { "@type": "ListItem", "position": 4, "name": "Centre VHU", "item": "https://www.reseauxepaviste.fr/centre-vhu" }
                ]
              }
            ]
          })
        }}
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <HeroSection />


      {/* ═══════════════════ TRUST BAND ═══════════════════ */}
      <section className="py-5 border-b" style={{ backgroundColor: '#0a0a0a', borderColor: 'rgba(255,255,255,0.05)' }} aria-label="Certifications et agréments">
        <div className="premium-container">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              "Agrément Préfectoral VHU",
              "Habilitation SIV",
              "Certification ISO 14001",
              "Enlèvement Gratuit Garanti",
              "Intervention 7j/7",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8b1a1a' }} />
                <span className="text-[10px] font-semibold tracking-widest uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ INTRODUCTION / MANIFESTO ═══════════════════ */}
      <section className="section-premium bg-bg-pure overflow-hidden" id="introduction">
        <div className="premium-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden hidden lg:block">
              <Image 
                src="https://images.unsplash.com/photo-1730514785075-b065c757b653?q=80&w=1600&auto=format&fit=crop"
                alt="Dépanneuse en intervention - remorquage et enlèvement de véhicule"
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div className="max-w-2xl">
              <div className="label-official mb-8">Notre Mission</div>
              <h2 className="title-lg text-balance mb-8">
                Épaviste agréé VHU :<br />
                <span className="text-secondary/50">l'excellence au service de la conformité.</span>
              </h2>
              <p className="text-secondary/80 text-lg leading-relaxed mb-10">
                Réseaux Épaviste est le <strong>premier réseau national</strong> dédié à l'enlèvement gratuit des véhicules hors d'usage (VHU) et au dépannage d'urgence. Notre mission : simplifier radicalement la gestion de votre épave tout en garantissant une conformité totale.
              </p>
              
              <div className="grid grid-cols-2 gap-12 mt-12 pt-12 border-t border-subtle">
                <div>
                  <div className="text-5xl font-medium tracking-tighter text-brand-dark mb-2">15+</div>
                  <div className="text-xs uppercase tracking-widest text-secondary/50 font-semibold">Années d'expertise</div>
                </div>
                <div>
                  <div className="text-5xl font-medium tracking-tighter text-brand-dark mb-2">12K</div>
                  <div className="text-xs uppercase tracking-widest text-secondary/50 font-semibold">Véhicules par an</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ SERVICES PRINCIPAUX ═══════════════════ */}
      <section className="section-premium bg-bg-soft" id="services">
        <div className="premium-container">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="label-official mb-6">Nos Expertises</div>
              <h2 className="title-lg">
                Des services <span className="text-secondary/50">d'exception.</span>
              </h2>
            </div>
            <Link href="/services" className="text-xs font-bold uppercase tracking-wider border-b border-brand-dark pb-1 text-brand-dark hover:opacity-50 transition-colors inline-block">
              Voir tout nos services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Service 1 */}
            <Link href="/enlevement-epave" className="group relative h-[500px] w-full overflow-hidden rounded-sm flex flex-col justify-end p-10" style={{ backgroundColor: '#0a0a0a' }}>
              <Image src="/images/enlevement-depave.png" alt="Enlèvement épave gratuit en Île-de-France - service professionnel VHU agréé" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>01 — Service Gratuit</div>
                <h3 className="text-3xl font-medium mb-3" style={{ color: '#ffffff' }}>Enlèvement d&apos;Épave</h3>
                <p className="max-w-md" style={{ color: 'rgba(255,255,255,0.7)' }}>Prise en charge de votre véhicule hors d&apos;usage à domicile avec remise du certificat CERFA immédiate.</p>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/depannage-auto" className="group relative h-[500px] w-full overflow-hidden rounded-sm flex flex-col justify-end p-10" style={{ backgroundColor: '#0a0a0a' }}>
              <Image src="/images/DEpannage.png" alt="Dépannage auto urgence 24/7 Paris Île-de-France - remorquage et assistance" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>02 — Urgence 24/7</div>
                <h3 className="text-3xl font-medium mb-3" style={{ color: '#ffffff' }}>Dépannage Auto</h3>
                <p className="max-w-md" style={{ color: 'rgba(255,255,255,0.7)' }}>Panne de batterie, crevaison ou erreur de carburant. Une intervention rapide où que vous soyez.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════ PROCESSUS EN 4 ÉTAPES ═══════════════════ */}
      <section className="section-premium bg-bg-pure" id="processus">
        <div className="premium-container">
          <div className="max-w-3xl mb-20">
            <h2 className="title-lg mb-8">Un processus fluide.<br/><span className="text-secondary/50">Sans stress ni complexité.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-subtle pt-12">
            {[
              { step: "01", title: "Contact", desc: "Contactez-nous par téléphone ou web." },
              { step: "02", title: "Validation", desc: "Vérification des documents et du créneau." },
              { step: "03", title: "Enlèvement", desc: "Chargement sécurisé de l'épave sur place." },
              { step: "04", title: "Certificat", desc: "Remise du CERFA officiel pour résiliation." },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="text-xl font-medium text-brand-dark mb-4">{item.step}.</div>
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-secondary/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <TrackedPhoneLink
              trackingLocation="process_cta"
              phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-sm font-semibold text-sm uppercase tracking-widest hover:bg-black/80 transition-all"
            >
              Lancer ma demande
            </TrackedPhoneLink>
          </div>
        </div>
      </section>


      {/* ═══════════════════ IMAGE BREAK CINÉMATIQUE ═══════════════════ */}
      <section className="h-[50vh] lg:h-[60vh] w-full relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80&w=2400&auto=format&fit=crop"
          alt="Parc automobile de véhicules hors d'usage en attente de dépollution et broyage"
          fill
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-brand-dark/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-4">Depuis 2009</div>
            <div className="text-white text-4xl md:text-6xl font-semibold tracking-tighter">12 000+ véhicules traités</div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ ZONES D'INTERVENTION (SEO Local) ═══════════════════ */}
      <section className="section-premium bg-bg-pure" id="zones">
        <div className="premium-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="label-official mb-8">Couverture Géographique</div>
              <h2 className="title-lg mb-8">
                Épaviste en<br /><span className="text-brand-red">Île-de-France.</span>
              </h2>
              <p className="text-secondary/60 text-sm leading-relaxed mb-8">
                Notre réseau de <strong>dépanneurs et épavistes agréés</strong> couvre l'intégralité de la région Île-de-France. Avec des bases opérationnelles stratégiquement positionnées dans chaque département, nous garantissons une <strong>intervention rapide</strong> où que vous soyez : centre-ville, banlieue, zone industrielle ou résidentielle.
              </p>
              <TrackedPhoneLink
                trackingLocation="zones_cta"
                phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
                className="btn-premium btn-primary"
              >
                Vérifier ma zone — {PHONE_EPAVISTE_DISPLAY}
              </TrackedPhoneLink>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { code: "75", label: "Paris", href: "/epaviste/paris", cities: "Paris 1er au 20e, toutes les portes" },
                  { code: "77", label: "Seine-et-Marne", href: "/epaviste/seine-et-marne", cities: "Meaux, Melun, Chelles, Torcy" },
                  { code: "78", label: "Yvelines", href: "/epaviste/yvelines", cities: "Versailles, Sartrouville, Poissy" },
                  { code: "91", label: "Essonne", href: "/epaviste/essonne", cities: "Évry, Corbeil, Massy, Savigny" },
                  { code: "92", label: "Hauts-de-Seine", href: "/epaviste/hauts-de-seine", cities: "Nanterre, Boulogne, Colombes" },
                  { code: "93", label: "Seine-Saint-Denis", href: "/epaviste/seine-saint-denis", cities: "Saint-Denis, Montreuil, Bobigny" },
                  { code: "94", label: "Val-de-Marne", href: "/epaviste/val-de-marne", cities: "Créteil, Vitry, Ivry, Champigny" },
                  { code: "95", label: "Val-d'Oise", href: "/epaviste/val-d-oise", cities: "Cergy, Argenteuil, Sarcelles" },
                ].map((z) => (
                  <Link
                    key={z.code}
                    href={z.href}
                    className="group flex items-start justify-between p-6 bg-white border border-subtle hover:border-brand-red/30 hover:shadow-sm transition-all no-underline"
                  >
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] text-secondary/30 mb-1">DÉPARTEMENT {z.code}</div>
                      <div className="text-base font-semibold text-brand-dark group-hover:text-brand-red transition-colors">{z.label}</div>
                      <div className="text-xs text-secondary/40 mt-1">{z.cities}</div>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center text-secondary/20 group-hover:text-brand-red transition-colors mt-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ PRIME À LA CONVERSION ═══════════════════ */}
      <section className="section-premium" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }} id="prime" aria-label="Prime à la conversion automobile">
        <div className="premium-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8b1a1a' }} />
                <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Aide Financière</span>
              </div>
              <h2 className="title-lg mb-8" style={{ color: '#ffffff' }}>
                Prime à la conversion :<br />
                <span style={{ color: '#8b1a1a' }}>jusqu&apos;à 5 000 € d&apos;aide.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-base leading-relaxed mb-8">
                En confiant votre ancien véhicule polluant à notre <strong style={{ color: 'rgba(255,255,255,0.7)' }}>centre VHU agréé</strong>, vous remplissez la condition principale pour bénéficier de la <strong style={{ color: 'rgba(255,255,255,0.7)' }}>prime à la conversion 2026</strong>. Cette aide de l&apos;État vous permet de financer l&apos;achat d&apos;un véhicule plus propre (électrique, hybride ou Crit&apos;Air 1).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Véhicule Diesel", desc: "Immatriculé avant janvier 2011" },
                  { title: "Véhicule Essence", desc: "Immatriculé avant janvier 2006" },
                  { title: "Revenu fiscal ≤ 22 983€", desc: "Prime majorée possible" },
                  { title: "Documents fournis", desc: "Dossier ASP complet remis" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ border: '1px solid #8b1a1a' }}>
                      <svg className="w-3 h-3" style={{ color: '#8b1a1a' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: '#ffffff' }}>{item.title}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/prime-conversion/conditions-2025" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
                Vérifier mon éligibilité
              </Link>
            </div>

            <div className="p-10 lg:p-12" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#ffffff' }}>Comment bénéficier de la prime ?</h3>
              <ol className="space-y-6">
                {[
                  "Contactez notre service pour planifier l'enlèvement gratuit de votre ancien véhicule.",
                  "Nous remettons le certificat de destruction CERFA et tous les justificatifs nécessaires.",
                  "Constituez votre dossier sur primealaconversion.gouv.fr avec nos documents.",
                  "Recevez votre prime et financez votre nouveau véhicule propre.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="text-sm font-bold mt-0.5" style={{ color: '#8b1a1a' }}>0{i + 1}</span>
                    <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ TYPES DE VÉHICULES ═══════════════════ */}
      <section className="section-premium bg-bg-pure" id="vehicules">
        <div className="premium-container">
          <div className="text-center mb-16">
            <div className="label-official justify-center mb-6">Prise en Charge</div>
            <h2 className="title-lg">Tous types de <span className="text-brand-red">véhicules.</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border-subtle">
            {[
              { title: "Voitures", desc: "Citadines, berlines, SUV, coupés, cabriolets" },
              { title: "Utilitaires", desc: "Fourgons, camionnettes, pick-up" },
              { title: "Deux-roues", desc: "Motos, scooters, quads" },
              { title: "Accidentées", desc: "Collision, choc, carrosserie déformée" },
              { title: "Incendiées", desc: "Véhicules brûlés, calcinés" },
              { title: "Sans CT", desc: "Contrôle technique expiré" },
            ].map((v) => (
              <div key={v.title} className="bg-bg-pure p-8 text-center hover:bg-bg-soft transition-colors">
                <div className="text-base font-semibold mb-2">{v.title}</div>
                <div className="text-xs text-secondary/40">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ SEO EDITORIAL : GUIDE COMPLET ═══════════════════ */}
      <section className="section-premium bg-bg-soft border-y" style={{ borderColor: 'var(--border-subtle)' }} id="guide">
        <div className="premium-container">
          <div className="max-w-4xl mx-auto">
            <div className="label-official mb-8">Guide Complet</div>
            <h2 className="title-lg mb-12">Enlèvement d'épave gratuit : <span className="text-brand-red">tout ce qu'il faut savoir.</span></h2>

            <div className="space-y-12 text-secondary/70 text-base leading-relaxed">
              {/* Block 1 */}
              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-4">Pourquoi faire appel à un épaviste professionnel ?</h3>
                <p className="mb-4">
                  Un <strong>épaviste agréé VHU</strong> (Véhicule Hors d'Usage) est un professionnel habilité par la préfecture pour collecter, dépolluer et recycler les véhicules en fin de vie. Contrairement à un simple ferrailleur, l'épaviste agréé respecte un protocole strict de <strong>dépollution environnementale</strong> : vidange des fluides (huile moteur, liquide de frein, liquide de refroidissement), retrait de la batterie, extraction des gaz de climatisation, dépose des pneumatiques et traitement des composants dangereux.
                </p>
                <p>
                  Faire appel à un réseau certifié comme Réseaux Épaviste vous garantit un <strong>enlèvement gratuit</strong>, la <strong>remise immédiate du certificat de destruction</strong> et une traçabilité complète de la destruction de votre véhicule. C'est la seule procédure légale conforme à l'article R.543-162 du Code de l'environnement.
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-white border border-subtle p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-brand-dark mb-6">Documents obligatoires pour la mise en destruction</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-red mb-4">Documents du propriétaire</h4>
                    <ul className="space-y-3">
                      {[
                        "Carte grise originale barrée avec mention « cédé pour destruction » et date/signature",
                        "Pièce d'identité en cours de validité (CNI, passeport, titre de séjour)",
                        "Certificat de situation administrative (non-gage) de moins de 15 jours",
                      ].map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-brand-red mt-1.5 text-xs">●</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-red mb-4">Documents remis par l'épaviste</h4>
                    <ul className="space-y-3">
                      {[
                        "Certificat de destruction (CERFA 14365*01) signé et daté",
                        "Bon d'enlèvement avec identité du centre VHU agréé",
                        "Récépissé de déclaration en préfecture (sous 24h)",
                      ].map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-brand-red mt-1.5 text-xs">●</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-4">Dépannage auto d'urgence : une expertise complète</h3>
                <p className="mb-4">
                  Au-delà de l'<strong>enlèvement d'épave</strong>, notre réseau propose un service complet de <strong>dépannage automobile</strong> et de <strong>remorquage professionnel</strong>. Que votre voiture tombe en panne sur l'autoroute, dans un parking ou devant chez vous, nos techniciens interviennent avec rapidité et efficacité.
                </p>
                <p className="mb-4">
                  Nos interventions couvrent : <strong>panne de batterie</strong>, <strong>crevaison</strong>, <strong>erreur de carburant</strong> (essence dans diesel, diesel dans essence), <strong>panne mécanique</strong>, <strong>problème de démarreur</strong>, <strong>surchauffe moteur</strong>, <strong>perte de clés</strong>, <strong>véhicule embourbé</strong> et <strong>accident de la route</strong>.
                </p>
                <p>
                  Chaque intervention est réalisée dans le respect des normes de sécurité par des <strong>dépanneurs certifiés</strong>. Notre flotte comprend des plateaux, des dépanneuses à bras articulé et des véhicules extra-bas pour les parkings souterrains.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-4">Réglementation VHU : que dit la loi ?</h3>
                <p className="mb-4">
                  La gestion des <strong>véhicules hors d'usage (VHU)</strong> est strictement encadrée par le Code de l'environnement (articles R.543-153 à R.543-171). Tout propriétaire d'un véhicule irréparable ou qu'il souhaite mettre au rebut est tenu de le confier à un <strong>centre VHU agréé</strong> ou à un broyeur agréé.
                </p>
                <p className="mb-4">
                  L'abandon d'un véhicule sur la voie publique ou sur un terrain est passible d'une amende pouvant aller jusqu'à 1 500 €. En cas de pollution constatée, les sanctions peuvent être considérablement alourdies. La directive européenne 2000/53/CE impose un taux de réutilisation et de recyclage de 95% du poids du véhicule.
                </p>
                <p>
                  Notre réseau respecte scrupuleusement ces obligations réglementaires et assure une <strong>traçabilité intégrale</strong> de chaque véhicule, de l'enlèvement jusqu'au recyclage final.
                </p>
              </div>

              {/* Block 5 : Internal Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Checklist dossier épave", href: "/guides/checklist-dossier-epave", desc: "Tous les documents à préparer" },
                  { label: "Guide certificat CERFA", href: "/guides/certificat-destruction-vhu", desc: "Comprendre le CERFA 14365*01" },
                  { label: "Centres VHU agréés", href: "/centre-vhu", desc: "Trouvez un centre près de chez vous" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="group block bg-white border border-subtle p-6 hover:border-brand-red/30 transition-all no-underline">
                    <div className="text-sm font-semibold text-brand-dark group-hover:text-brand-red transition-colors mb-1">{link.label}</div>
                    <div className="text-xs text-secondary/40">{link.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ TESTIMONIALS / AVIS ═══════════════════ */}
      <section className="section-premium bg-bg-pure" id="avis">
        <div className="premium-container">
          <div className="text-center mb-16">
            <div className="label-official justify-center mb-6">Ce qu'ils en disent</div>
            <h2 className="title-lg">La confiance de <span className="text-brand-red">nos clients.</span></h2>
            <p className="text-secondary/50 mt-4 text-sm">Note moyenne : 4.9/5 sur 1 847 avis vérifiés</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie M.",
                loc: "Paris 15e",
                text: "Intervention ultra rapide pour l'enlèvement de ma Clio qui ne démarrait plus depuis 6 mois. Certificat de destruction remis en main propre. Personnel très professionnel.",
                rating: 5,
              },
              {
                name: "Karim B.",
                loc: "Montreuil (93)",
                text: "Mon véhicule était dans un parking souterrain avec un accès très étroit. Ils ont réussi à l'enlever avec une dépanneuse adaptée. Gratuit comme promis, rien à redire.",
                rating: 5,
              },
              {
                name: "Laurent D.",
                loc: "Versailles (78)",
                text: "Dépannage en urgence un dimanche soir après une panne de batterie sur l'A13. Le technicien est arrivé en 35 minutes. Service impeccable et tarif raisonnable.",
                rating: 5,
              },
            ].map((review) => (
              <div key={review.name} className="card-premium">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary/60 text-sm leading-relaxed mb-6">"{review.text}"</p>
                <div className="border-t border-subtle pt-4">
                  <div className="text-sm font-semibold">{review.name}</div>
                  <div className="text-xs text-secondary/40">{review.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ SEO : ÉPAVISTE PAR VILLE ═══════════════════ */}
      <section className="section-premium-sm bg-bg-soft border-y" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="premium-container">
          <div className="text-center mb-12">
            <h2 className="title-sm">Épaviste et dépannage dans <span className="text-brand-red">les principales villes</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Épaviste Paris", "Épaviste Boulogne-Billancourt", "Épaviste Saint-Denis",
              "Épaviste Montreuil", "Épaviste Argenteuil", "Épaviste Nanterre",
              "Épaviste Créteil", "Épaviste Vitry-sur-Seine", "Épaviste Colombes",
              "Dépannage auto Paris", "Dépannage urgence Île-de-France",
              "Enlèvement épave gratuit 93", "Enlèvement épave gratuit 94",
              "Remorquage Paris", "Casse automobile agréée 92",
              "Destruction véhicule 75", "Rachat voiture HS 95",
              "Épaviste Meaux", "Épaviste Évry", "Épaviste Cergy",
            ].map((tag) => (
              <span key={tag} className="inline-block px-4 py-2 bg-white border border-subtle text-xs text-secondary/50 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ FAQ MASSIF ═══════════════════ */}
      <FAQSection items={faqItems} title="Questions Fréquentes" />


      {/* ═══════════════════ SOURCES OFFICIELLES ═══════════════════ */}
      <section className="section-premium-sm bg-bg-soft border-t" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="premium-container">
          <div className="max-w-4xl mx-auto">
            <div className="label-neutral mb-6">Sources Officielles & Cadre Réglementaire</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Service-Public.fr", desc: "Démarches officielles destruction véhicule", url: "https://www.service-public.fr/" },
                { name: "ANTS", desc: "Agence Nationale des Titres Sécurisés", url: "https://ants.gouv.fr/" },
                { name: "Légifrance", desc: "Code de l'environnement — VHU", url: "https://www.legifrance.gouv.fr/" },
              ].map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-white border border-subtle hover:border-brand-red/20 transition-colors no-underline group">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-semibold text-brand-dark group-hover:text-brand-red transition-colors">{s.name}</div>
                    <div className="text-xs text-secondary/40">{s.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="py-24 lg:py-32 text-center relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }} aria-label="Contactez un épaviste maintenant">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.15) 0%, transparent 60%)' }} />
        </div>
        <div className="premium-container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#8b1a1a' }} />
              <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Disponible 24/7</span>
            </div>
            <h2 className="title-lg mb-4" style={{ color: '#ffffff' }}>
              Besoin d&apos;un épaviste ou d&apos;un dépannage ?
            </h2>
            <p className="text-base mb-12 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Un seul appel suffit. Notre équipe confirme la faisabilité, les documents nécessaires et le créneau d&apos;intervention.
            </p>
            <div className="w-12 h-px mx-auto mb-12" style={{ backgroundColor: '#8b1a1a' }} />
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <TrackedPhoneLink
                trackingLocation="final_cta"
                phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all"
                style={{ backgroundColor: '#8b1a1a', color: '#ffffff' }}
              >
                Appeler le {PHONE_EPAVISTE_DISPLAY}
              </TrackedPhoneLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all"
                style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Demander un rappel gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
