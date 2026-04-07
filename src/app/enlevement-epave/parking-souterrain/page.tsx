import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Enlèvement épave en parking souterrain | RéseauEpaviste",
  description:
    "Enlèvement d'épave en parking souterrain : équipements adaptés, procédure, contraintes. Copropriété, résidence, parking public. Gratuit. Appelez le 07 45 48 24 64.",
  pathname: "/enlevement-epave/parking-souterrain",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement Épave", href: "/enlevement-epave" },
  { label: "Parking souterrain", href: "/enlevement-epave/parking-souterrain" },
];

const faqItems = [
  {
    question: "Peut-on toujours enlever une épave en parking souterrain ?",
    answer:
      "Dans la grande majorité des cas, oui. Nos équipes disposent d'équipements à faible hauteur (moins de 1,90 m) adaptés aux parkings souterrains résidentiels et commerciaux. Les seules situations bloquantes sont les parkings avec une hauteur libre inférieure à 1,70 m (très rares) ou des accès trop étroits pour nos véhicules. Précisez la hauteur limite lors de votre appel.",
  },
  {
    question: "Faut-il l'accord de la copropriété pour enlever une épave dans le parking ?",
    answer:
      "Si l'épave se trouve dans une place de parking privative vous appartenant, vous n'avez pas besoin de l'accord de la copropriété. En revanche, si l'intervention nécessite d'immobiliser temporairement l'accès au parking ou d'intervenir dans les parties communes, il est conseillé de prévenir le gardien ou le syndic. Pour un parking public, contactez l'exploitant du parking.",
  },
  {
    question: "Que faire si mon véhicule est sur la place de quelqu'un d'autre ?",
    answer:
      "Si le véhicule épave se trouve sur une place ne vous appartenant pas, le propriétaire de la place peut demander son déplacement. La procédure implique généralement la mairie ou le tribunal compétent pour obtenir une autorisation de déplacement. Contactez-nous pour vous guider.",
  },
  {
    question: "L'épave peut-elle être enlevée si elle est complètement désossée ?",
    answer:
      "Oui, même une carcasse entièrement désossée peut être enlevée. Nos équipes sont équipées de sangles et de berceaux pour charger des véhicules sans roues ou très endommagés. Selon l'état du sol et l'accès, nous pouvons utiliser un plancher roulant ou un chariot spécifique.",
  },
  {
    question: "Y a-t-il un surcoût pour l'enlèvement en parking souterrain ?",
    answer:
      "En général non, l'enlèvement en parking souterrain est gratuit comme tout autre enlèvement d'épave. Cependant, si l'intervention nécessite un équipement très spécialisé non standard (grue miniature, démontage partiel préalable), des frais supplémentaires peuvent s'appliquer. Nous vous en informerons toujours à l'avance avant toute intervention.",
  },
];

export default function ParkingSouterrainPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Équipement spécialisé – Parking adapté"
        title="Enlèvement épave en parking souterrain"
        subtitle="L'enlèvement d'une épave en parking souterrain nécessite un équipement spécialisé et une expertise particulière. Nos équipes interviennent dans les parkings de résidence, copropriétés et centres commerciaux."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Les spécificités de l'enlèvement en parking souterrain
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                L'enlèvement d'une épave en parking souterrain est l'une des interventions les
                plus complexes dans notre métier. Les contraintes sont multiples : hauteur réduite,
                luminosité insuffisante, manœuvrabilité limitée, revêtements glissants, et
                souvent des véhicules dans un état avancé de dégradation.
              </p>
              <p>
                Pour ces interventions, nous utilisons des <strong>camions plateaux de faible
                hauteur</strong> (hauteur maximale : 1,85 m) et des <strong>rouleaux
                hydrauliques</strong> permettant de déplacer des véhicules sans roues ou bloqués
                dans leur place. Dans les cas les plus difficiles, un <strong>démontage
                partiel préalable</strong> (retrait des portières, du toit) peut être nécessaire.
              </p>
              <p>
                Nous intervenons dans tous les types de parkings souterrains :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Parkings de <strong>résidences privées</strong> et copropriétés</li>
                <li>Parkings <strong>commerciaux</strong> de centres commerciaux et supermarchés</li>
                <li>Parkings <strong>publics</strong> (Q-Park, Indigo, Effia...)</li>
                <li>Parkings de <strong>bureaux</strong> et immeubles tertiaires</li>
                <li>Caves et <strong>garages individuels</strong> en sous-sol</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Informations à préparer avant l'appel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "📏", label: "Hauteur libre du parking", desc: "Indiquée sur le panneau d'entrée, généralement entre 1,80 m et 2,20 m" },
                { icon: "📐", label: "Largeur de la place", desc: "Une place standard fait 2,30 à 2,50 m de large" },
                { icon: "🔑", label: "Code d'accès ou gardien", desc: "Pour permettre l'accès à nos équipes sans attente" },
                { icon: "🚗", label: "État du véhicule", desc: "Précisez si le véhicule est sur roues, flat, sans roues, ou bloqué" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-[#F8F8F8] rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{item.label}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
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

      <FAQSection items={faqItems} title="Questions – Enlèvement en parking souterrain" />
    </>
  );
}
