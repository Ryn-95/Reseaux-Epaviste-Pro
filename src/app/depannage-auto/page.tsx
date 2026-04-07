import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { buildPageMetadata } from "@/lib/seo/metadata";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";
import Breadcrumb from "@/components/Breadcrumb";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";

export const metadata = buildPageMetadata({
  title: "Dépannage Auto Île-de-France | Réseaux Épaviste",
  description:
    "Dépannage et remorquage auto 24h/7j en Île-de-France. Batterie, crevaison, erreur carburant. Obtenez une intervention rapide. Appelez le 07 45 48 24 64.",
  pathname: "/depannage-auto",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Dépannage Auto", href: "/depannage-auto" },
];

const panneTypes = [
  { icon: "🔋", title: "Panne de batterie", desc: "Démarrage impossible ou batterie à plat. Recharge par booster professionnel ou remplacement sur place." },
  { icon: "🛞", title: "Crevaison", desc: "Changement de roue crevée, montage de roue de secours ou dépannage express avec matériel spécialisé." },
  { icon: "⛽", title: "Erreur de carburant", desc: "Siphonnage de réservoir et nettoyage du système d'injection pour une remise en route immédiate." },
  { icon: "🔑", title: "Serrure / Clés", desc: "Ouverture de porte sans effraction, assistance en cas de clés perdues ou bloquées dans l'habitacle." },
  { icon: "⚙️", title: "Panne mécanique", desc: "Diagnostic technique sur site. Si non réparable, remorquage sécurisé vers le garage de votre choix." },
  { icon: "🅿️", title: "Parking Souterrain", desc: "Véhicules d'intervention surbaissés conçus spécifiquement pour les accès difficiles et plafonds bas." },
];

const faqItems = [
  {
    question: "Quel est le délai d'intervention pour un dépannage en IDF ?",
    answer:
      "Grâce à notre maillage territorial, nous garantissons une intervention sous 30 à 45 minutes en moyenne sur l'ensemble de l'Île-de-France, 24h/24 et 7j/7.",
  },
  {
    question: "Le dépannage auto est-il pris en charge par l'assurance ?",
    answer:
      "Oui, dans la majorité des cas. Nous vous remettons une facture conforme que vous pouvez transmettre à votre assistance pour obtenir le remboursement des frais engagés.",
  },
  {
    question: "Proposez-vous le remorquage longue distance ?",
    answer:
      "Absolument. Nous effectuons des remorquages sur toute la France. Un devis transparent vous est communiqué avant toute prise en charge.",
  },
];

export default function DepannageAutoPage() {
  return (
    <div className="bg-pro-gray">
      <ServiceJsonLd name="Dépannage automobile" url="https://www.reseauxepaviste.fr/depannage-auto" areaServed="Île-de-France" />
      
      <div className="pt-32">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <HeroSection
        title="Dépannage Automobile & Remorquage 24h/24"
        subtitle="Une panne ? Un accident ? Nos dépanneurs certifiés interviennent en moins de 45 minutes en Île-de-France pour vous remettre en route ou remorquer votre véhicule."
      />

      {/* Services Grid Professionnel */}
      <section className="py-24 bg-white border-y border-pro-gray-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="section-label justify-center">Expertise Technique</div>
            <h2 className="text-4xl md:text-6xl font-black text-pro-darker">Nos Solutions de Dépannage</h2>
            <p className="seo-text">
              Que vous soyez sur l'autoroute, en centre-ville ou dans un parking souterrain, nos équipes interviennent avec réactivité et professionnalisme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {panneTypes.map((s, i) => (
              <div key={i} className="service-card group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-black text-pro-darker mb-4 uppercase tracking-tight leading-none">{s.title}</h3>
                <p className="text-pro-text-light font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention - Grid Professionnel */}
      <section className="py-24 section-slate overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div className="section-label">Couverture Territoriale</div>
              <h2 className="text-4xl md:text-5xl font-black text-pro-darker leading-tight">
                Intervention rapide en <span className="text-etat-blue">Île-de-France</span>
              </h2>
              <p className="text-lg text-pro-text-light font-medium border-l-4 border-pro-accent pl-8">
                Nos dépanneurs sont répartis sur l'ensemble des départements franciliens pour garantir une assistance immédiate, quel que soit votre secteur.
              </p>
              <div className="pt-6">
                <TrackedPhoneLink trackingLocation="depannage_index_cta" phoneHref={`tel:${PHONE_EPAVISTE_TEL}`} className="btn-pro text-xl shadow-2xl">
                  {PHONE_EPAVISTE_DISPLAY}
                </TrackedPhoneLink>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["Paris (75)", "Seine-et-Marne (77)", "Yvelines (78)", "Essonne (91)", "Hauts-de-Seine (92)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Val-d\'Oise (95)"].map(dept => (
                  <div key={dept} className="bg-white p-6 border border-pro-gray-steel text-center font-black text-xs text-pro-darker uppercase tracking-widest hover:border-etat-blue hover:text-etat-blue transition-all cursor-default shadow-sm">
                    {dept}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      
      <TestimonialsSection />

      <FAQSection items={faqItems} title="FAQ Dépannage Automobile" />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-pro-darker uppercase tracking-tight">Demander un dépannage</h2>
            <p className="text-pro-text-light font-medium mt-4">Remplissez le formulaire pour un rappel immédiat par un technicien.</p>
          </div>
          <CallbackForm />
        </div>
      </section>

      <div className="bg-slate-50 border-y border-pro-gray-steel">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <ContextualLinksBlock
            title="Services Complémentaires"
            links={[
              { href: "/remorquage", label: "Remorquage toutes distances", description: "Transport vers garage ou domicile." },
              { href: "/enlevement-epave", label: "Enlèvement d'épave Gratuit", description: "Destruction certifiée centre VHU." },
              { href: "/epaviste/paris", label: "Épaviste Paris", description: "Intervention rapide capitale." },
              { href: "/blog", label: "Blog & Conseils", description: "Réglementation et entretien." },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
