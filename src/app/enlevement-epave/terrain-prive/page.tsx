import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Enlèvement d'une épave sur propriété privée | RéseauEpaviste",
  description:
    "Épave abandonnée sur votre terrain privé ou dans votre jardin ? Procédure légale, droits du propriétaire, démarches. Guide RéseauEpaviste. Appelez le 01 84 17 32 18.",
  pathname: "/enlevement-epave/terrain-prive",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement Épave", href: "/enlevement-epave" },
  { label: "Terrain privé", href: "/enlevement-epave/terrain-prive" },
];

const faqItems = [
  {
    question: "Puis-je faire enlever une épave abandonnée sur mon terrain privé ?",
    answer:
      "Si l'épave vous appartient, oui, directement. Si l'épave a été abandonnée sur votre terrain par un tiers, la procédure est plus complexe. Vous devez d'abord identifier le propriétaire du véhicule (via la police ou la gendarmerie), lui mettre en demeure de récupérer son véhicule, puis si nécessaire initier une procédure judiciaire ou administrative pour obtenir l'autorisation de faire enlever le véhicule.",
  },
  {
    question: "Combien de temps ai-je pour signaler une épave abandonnée sur mon terrain ?",
    answer:
      "Il n'y a pas de délai légal imposé pour signaler un véhicule abandonné sur propriété privée. Cependant, plus vous attendez, plus le véhicule se dégrade et plus la situation peut devenir complexe (fuite de fluides, pollution, risque d'incendie). Il est recommandé d'agir rapidement, idéalement dans les 7 à 15 jours suivant l'abandon.",
  },
  {
    question: "Que faire si je ne connais pas le propriétaire de l'épave abandonnée ?",
    answer:
      "Contactez la gendarmerie ou le commissariat de police avec le numéro de plaque d'immatriculation. Les forces de l'ordre peuvent identifier le propriétaire via le fichier national des immatriculations. Une fois le propriétaire identifié, une mise en demeure recommandée avec accusé de réception lui sera envoyée lui demandant de récupérer son véhicule.",
  },
  {
    question: "Puis-je facturer des frais de gardiennage au propriétaire de l'épave ?",
    answer:
      "En principe, non, pas directement. Sur la voie publique, les fourrières peuvent facturer des frais de garde. Sur propriété privée, vous pouvez tenter de réclamer un dédommagement devant les tribunaux, mais la procédure est longue et souvent disproportionnée par rapport aux sommes en jeu. La solution la plus pragmatique est souvent de régulariser la situation le plus vite possible.",
  },
  {
    question: "L'enlèvement d'une épave sur terrain privé est-il gratuit ?",
    answer:
      "Oui, l'enlèvement est gratuit quelle que soit la localisation de l'épave, y compris sur terrain privé. Les conditions sont les mêmes que pour un enlèvement standard : le véhicule doit être cédé légalement à un centre VHU agréé, avec remise de la carte grise et d'une pièce d'identité. Si l'épave appartient à un tiers, des documents supplémentaires peuvent être requis.",
  },
];

export default function TerrainPrivePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Propriété privée – Procédure adaptée"
        title="Enlèvement d'une épave sur propriété privée"
        subtitle="Votre épave est dans votre jardin, votre cour ou votre terrain ? Ou quelqu'un a abandonné un véhicule chez vous ? Découvrez la procédure légale selon chaque cas."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Deux situations très différentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <h3 className="font-bold text-green-800 mb-3">Cas 1 : L'épave vous appartient</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Vous êtes le propriétaire légal du véhicule et il se trouve sur votre terrain.
                  La procédure est simple : appelez-nous, préparez votre carte grise et votre
                  pièce d'identité. Nous organisons l'enlèvement gratuitement avec remise du
                  certificat de destruction CERFA.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-3">Cas 2 : L'épave appartient à un tiers</h3>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Un véhicule dont vous n'êtes pas propriétaire a été abandonné sur votre terrain.
                  La procédure est plus longue : il faut identifier le propriétaire, mettre en
                  demeure, et si nécessaire obtenir une autorisation judiciaire avant d'enlever
                  le véhicule.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Procédure pour un véhicule abandonné par un tiers
            </h2>
            <ol className="space-y-4">
              {[
                { num: "1", title: "Relevez la plaque et signalez", text: "Notez le numéro d'immatriculation et signalez le véhicule abandonné à la gendarmerie ou à la mairie. Demandez l'identification du propriétaire." },
                { num: "2", title: "Envoyez une mise en demeure", text: "Une fois le propriétaire identifié, envoyez-lui une lettre recommandée avec accusé de réception lui demandant de récupérer son véhicule dans un délai raisonnable (7 à 15 jours)." },
                { num: "3", title: "Attendez le délai", text: "Si le propriétaire ne réagit pas, vous pouvez saisir le tribunal judiciaire pour obtenir une ordonnance autorisant l'enlèvement." },
                { num: "4", title: "Procédez à l'enlèvement légal", text: "Avec l'ordonnance du tribunal ou l'accord du propriétaire, contactez RéseauEpaviste pour organiser l'enlèvement. Le certificat de destruction sera établi au nom du propriétaire légal." },
              ].map((step) => (
                <li key={step.num} className="flex gap-4 items-start bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                  <span className="w-8 h-8 rounded-full text-white font-bold flex items-center justify-center flex-shrink-0 text-sm" style={{ backgroundColor: "#D01F2B" }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-800 mb-2">ℹ️ Accès pour les terrains difficiles</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              Pour les terrains agricoles, les propriétés avec accès en chemin de terre ou
              les jardins avec portail étroit, nos équipes s'adaptent. Lors de votre appel,
              précisez : la largeur de l'accès, la nature du sol (stabilisé, terre, gravier),
              et tout obstacle potentiel. Nous mobiliserons le matériel adapté à votre situation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions – Épave sur propriété privée" />
    </>
  );
}
