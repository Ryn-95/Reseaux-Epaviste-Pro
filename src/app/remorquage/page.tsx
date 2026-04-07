import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Remorquage 24h/7j – Vers le garage de votre choix | RéseauEpaviste",
  description:
    "Remorquage automobile 24h/7j partout en France. Acheminement vers le garage de votre choix ou vers les centres VHU partenaires selon le cas.",
  pathname: "/remorquage",
});

const faqItems = [
  {
    question: "Combien coûte un remorquage ?",
    answer:
      "Le tarif d'un remorquage dépend de la distance, du type de véhicule et de l'heure d'intervention. En IDF, le prix de base commence autour de 80-150 € pour un véhicule léger sur courte distance. Si vous bénéficiez d'une assistance auto via votre assurance, le remorquage peut être pris en charge partiellement ou totalement.",
  },
  {
    question: "Mon véhicule peut-il être remorqué jusqu'au garage de mon choix ?",
    answer:
      "Absolument. Vous êtes libre de désigner le garage ou le centre de réparation de votre choix. Nos camions-plateau transportent votre véhicule en toute sécurité jusqu'à destination, sur toute la France.",
  },
  {
    question: "Remorquez-vous aussi les motos et les camping-cars ?",
    answer:
      "Oui, nous disposons d'équipements adaptés pour remorquer les motos, scooters, camping-cars, fourgons et utilitaires légers. Pour les poids lourds, contactez-nous afin que nous vous orientions vers le prestataire adapté.",
  },
];

export default function RemorquagePage() {
  return (
    <>
      <ServiceJsonLd name="Remorquage automobile" url="https://reseauepaviste.fr/remorquage" areaServed="France" />
      <HeroSection
        variant="urgence"
        badge="Disponible 24h/24 7j/7"
        title="Remorquage voiture 24h/7j – Intervention rapide"
        subtitle="Votre véhicule est immobilisé ? Nos camions-plateau interviennent rapidement pour remorquer votre voiture vers le garage de votre choix, partout en France."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Service de remorquage professionnel
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le <strong>remorquage automobile</strong> est parfois la seule solution quand votre
              véhicule ne peut pas être réparé sur place : panne moteur grave, accident, véhicule
              bloqué dans la neige ou dans la boue, transmission défectueuse, ou simplement quand
              vous souhaitez faire réparer votre véhicule dans un atelier spécialisé.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              RéseauEpaviste dispose d'une flotte de <strong>camions-plateau</strong> et de
              véhicules de remorquage modernes, adaptés à toutes les tailles de véhicules.
              Nos conducteurs sont formés au chargement et à l'arrimage sécurisé afin de garantir
              l'intégrité de votre véhicule tout au long du transport.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous intervenons sur la <strong>voie publique, les parkings souterrains, les
              propriétés privées</strong> et même sur les zones difficiles d'accès. En cas
              d'accident sur autoroute, contactez d'abord le 15 ou le 18, puis appelez-nous
              pour organiser le remorquage dès que la sécurité est assurée.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Pourquoi choisir notre service de remorquage ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Disponibilité totale", desc: "24h/24, 7j/7, y compris les jours fériés. Un opérateur répond toujours à votre appel." },
                { title: "Véhicule assuré", desc: "Votre véhicule est couvert pendant toute la durée du transport. En cas de dommage, notre assurance prend en charge les réparations." },
                { title: "Camions-plateau modernes", desc: "Nos camions-plateau à inclinaison hydraulique chargent et déchargent sans risque de dommage au bas de caisse ou à la carrosserie." },
                { title: "Réseau national", desc: "Quel que soit votre localisation en France, un de nos partenaires remorqueurs est à proximité pour intervenir rapidement." },
              ].map((item) => (
                <div key={item.title} className="bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <div className="bg-white border-y border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <ContextualLinksBlock
            title="Liens utiles (remorquage & suites)"
            links={[
              { href: "/depannage-auto", label: "Dépannage auto", description: "Pannes courantes, intervention, prise en charge." },
              { href: "/enlevement-epave", label: "Enlèvement d’épave (VHU)", description: "Si véhicule non réparable : procédure VHU." },
              { href: "/centre-vhu", label: "Centres VHU agréés", description: "Traitement et certificat de destruction." },
              { href: "/faq", label: "FAQ", description: "Prix, délais, assurance, autoroute." },
            ]}
          />
        </div>
      </div>

      <FAQSection items={faqItems} title="Questions sur le remorquage" />
    </>
  );
}
