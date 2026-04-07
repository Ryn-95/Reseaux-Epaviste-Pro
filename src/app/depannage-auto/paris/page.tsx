import { buildPageMetadata } from "@/lib/seo/metadata";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import Image from "next/image";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";

export const metadata = buildPageMetadata({
  title: "Dépannage Auto Paris (75) | Assistance & Remorquage 24h/24",
  description:
    "Besoin d'un dépannage auto à Paris ? Intervention rapide sous 45 min pour batterie HS, crevaison, erreur de carburant ou remorquage. Dépanneurs agréés disponibles 7j/7.",
  pathname: "/depannage-auto/paris",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Dépannage auto", href: "/depannage-auto" },
  { label: "Dépannage auto Paris", href: "/depannage-auto/paris" },
];

const faqItems = [
  {
    question: "Quel délai pour un dépannage à Paris ?",
    answer:
      "A titre indicatif : l’intervention est souvent possible en moins d’une heure selon l’arrondissement, la circulation et la disponibilité des équipes. On vous confirme lors de l’appel.",
  },
  {
    question: "Le dépannage est-il payant ?",
    answer:
      "Oui, le dépannage auto est un service payant. En revanche, l’enlèvement d’épave (VHU) peut, selon le cas, être pris en charge gratuitement via des opérateurs agréés.",
  },
  {
    question: "Que se passe-t-il si je dois remorquer le véhicule ?",
    answer:
      "Si le véhicule ne peut pas être réparé sur place, un remorquage vers le garage de votre choix peut être proposé. Les modalités sont confirmées avant l’intervention.",
  },
  {
    question: "Intervenez-vous pour les pannes de nuit et week-end ?",
    answer:
      "Oui. Le service est disponible 24h/24 – 7j/7 ; l’organisation dépend du secteur et du niveau de priorité.",
  },
  {
    question: "Quels documents préparer ?",
    answer:
      "En général : pièce d’identité, carte grise, et tout élément utile (assurance, référence de panne). Pour les situations spécifiques, on vous guide au téléphone.",
  },
];

export default function DepannageAutoParisPage() {
  return (
    <div className="bg-pro-gray">
      <LocalBusinessJsonLd
        name="Épaviste.pro – Dépannage auto Paris"
        url="https://www.reseauxepaviste.fr/depannage-auto/paris"
        telephone="+33745482464"
        cityOrArea="Paris"
        rating={4.8}
        reviewCount={1247}
        postalCode="75000"
        lat={48.8566}
        lng={2.3522}
      />
      
      <div className="pt-32">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <HeroSection
        title="Dépannage Auto Paris 24h/24 & Remorquage Urgent"
        subtitle="Batterie HS, crevaison, erreur de carburant ou accident ? Nos dépanneurs certifiés interviennent à Paris (tous arrondissements) en moins de 45 minutes."
      />

      {/* Services Grid Local */}
      <section className="py-24 bg-white border-y border-pro-gray-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="section-label">Nos Interventions à Paris</div>
              <h2 className="text-4xl md:text-5xl font-black text-pro-darker leading-tight title-underline">
                Assistance routière et remorquage professionnel
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Panne Batterie", d: "Boost 12V/24V ou remplacement" },
                  { t: "Crevaison", d: "Changement de roue ou mèche" },
                  { t: "Erreur Carburant", d: "Siphonnage et nettoyage" },
                  { t: "Porte Claquée", d: "Ouverture sans dégâts" }
                ].map((s, i) => (
                  <div key={i} className="service-card p-6 border-l-4 border-etat-blue hover:border-pro-accent">
                    <div className="font-black text-pro-darker text-sm uppercase mb-1">{s.t}</div>
                    <div className="text-xs text-pro-text-light font-medium">{s.d}</div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <TrackedPhoneLink trackingLocation="depannage_paris_cta" phoneHref={`tel:${PHONE_EPAVISTE_TEL}`} className="btn-pro btn-emergency w-full sm:w-auto">
                  Besoin d'aide ? {PHONE_EPAVISTE_DISPLAY}
                </TrackedPhoneLink>
              </div>
            </div>
            <div className="relative group img-wrapper">
              <Image 
                src="https://images.unsplash.com/photo-1599256629724-6014e3047466?q=80&w=1200"
                alt="Dépanneuse professionnelle en intervention de remorquage à Paris"
                width={800}
                height={800}
                className="object-cover aspect-square img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pro-darker/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 shadow-2xl border-l-8 border-etat-red">
                <div className="text-2xl font-black text-etat-blue">45 min</div>
                <div className="text-[10px] font-bold text-pro-text-light uppercase tracking-widest">Délai moyen d'arrivée</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Dépannage SEO */}
      <FAQSection items={faqItems} title="Questions sur le dépannage à Paris" />

      {/* Contact & Localisation */}
      <section className="py-24 section-slate overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-10">
              <div className="section-label">Disponibilité</div>
              <h2 className="text-4xl font-black text-pro-darker uppercase tracking-tight">Intervention dans tout Paris</h2>
              <p className="text-lg text-pro-text-light font-medium leading-relaxed">
                Nos unités de dépannage sont stationnées stratégiquement pour couvrir les 20 arrondissements de Paris ainsi que le périphérique. Nous intervenons également en parking souterrain grâce à nos véhicules surbaissés.
              </p>
              <div className="bg-white p-8 border border-pro-gray-steel grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["75001", "75008", "75015", "75016", "75017", "75018", "75019", "75020"].map(cp => (
                  <div key={cp} className="text-center p-3 bg-pro-gray border border-pro-gray-steel font-black text-xs text-etat-blue">{cp}</div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

