import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Enlèvement voiture brûlée – Procédure et gratuité | RéseauEpaviste",
  description:
    "Votre voiture a été brûlée ? Découvrez la procédure d'enlèvement d'une épave incendiée : démarches assurance, police, certificat VHU. Gratuit. Appelez le 01 84 17 32 18.",
  pathname: "/enlevement-epave/voiture-brulee",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement Épave", href: "/enlevement-epave" },
  { label: "Voiture brûlée", href: "/enlevement-epave/voiture-brulee" },
];

const faqItems = [
  {
    question: "L'enlèvement d'une voiture brûlée est-il gratuit ?",
    answer:
      "Oui, l'enlèvement d'une voiture brûlée est gratuit, même si le véhicule est réduit à l'état de carcasse. Les métaux récupérables permettent au centre VHU de couvrir les frais d'intervention. Aucun frais ne vous sera demandé, que ce soit pour le déplacement ou l'enlèvement.",
  },
  {
    question: "Dois-je déclarer l'incendie à la police avant l'enlèvement ?",
    answer:
      "Oui, il est fortement conseillé de déclarer l'incendie à la police ou à la gendarmerie avant de procéder à l'enlèvement, surtout si c'est un acte criminel ou une tentative de vol. Un dépôt de plainte vous protège juridiquement et est nécessaire pour votre déclaration d'assurance. Obtenez un numéro de plainte ou une attestation de déclaration.",
  },
  {
    question: "Mon assurance couvre-t-elle la voiture brûlée ?",
    answer:
      "Cela dépend de votre contrat. La garantie incendie est incluse dans les contrats 'tous risques' et certains contrats intermédiaires. Elle ne figure généralement pas dans les contrats au tiers simple. Si votre assurance prend en charge le sinistre, elle peut également organiser l'enlèvement via son propre réseau. Vérifiez votre contrat et déclarez le sinistre rapidement.",
  },
  {
    question: "Combien de temps puis-je laisser une voiture brûlée sur la voie publique ?",
    answer:
      "Une voiture brûlée sur la voie publique sera rapidement mise en demeure d'être enlevée par les autorités locales (mairie, police). En général, si le propriétaire ne réagit pas dans un délai de 5 à 7 jours, le véhicule peut être mis en fourrière aux frais du propriétaire. Agissez rapidement pour éviter ces frais supplémentaires.",
  },
  {
    question: "Peut-on encore délivrer un certificat de destruction pour une voiture entièrement détruite par les flammes ?",
    answer:
      "Oui, le certificat de destruction (CERFA n°14365) peut être délivré même pour un véhicule entièrement calciné. L'identification du véhicule se fait via le numéro VIN gravé sur le châssis (qui résiste souvent aux incendies), ou à défaut via la plaque d'immatriculation et les documents d'assurance. Ce certificat reste indispensable pour radier le véhicule.",
  },
];

export default function VoitureBruleePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="urgence"
        badge="Urgence – Intervention rapide"
        title="Enlèvement voiture brûlée : procédure et gratuité"
        subtitle="Votre véhicule a été victime d'un incendie accidentel ou criminel ? RéseauEpaviste organise l'enlèvement gratuit de votre voiture brûlée avec toutes les démarches administratives."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Voiture brûlée : que faire en priorité ?
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Découvrir sa voiture incendiée est un choc émotionnel et pratique important.
                La première réaction doit être de <strong>sécuriser la zone</strong> et de
                contacter les secours si l'incendie est encore actif. Une fois l'incendie éteint
                et la situation sécurisée, voici les étapes à suivre dans l'ordre.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Les démarches à effectuer dans l'ordre
            </h2>
            <ol className="space-y-4">
              {[
                { num: "1", title: "Appeler les pompiers et/ou la police (si ce n'est pas fait)", text: "En cas d'incendie actif : 18 (pompiers) ou 17 (police). Si l'incendie est éteint mais récent, signalez-le quand même à la police." },
                { num: "2", title: "Déposer plainte (si acte criminel)", text: "Si le feu est d'origine criminelle (incendie volontaire, tentative de vol), déposez plainte dans les 24 heures auprès de la police ou de la gendarmerie. Obtenez un récépissé de plainte." },
                { num: "3", title: "Déclarer le sinistre à votre assurance", text: "Contactez votre assureur dans les 5 jours ouvrés. Transmettez le numéro de plainte et une description des faits. Votre assurance évaluera si la garantie incendie s'applique." },
                { num: "4", title: "Organiser l'enlèvement", text: "Appelez RéseauEpaviste au 01 84 17 32 18. L'enlèvement est gratuit. Préparez votre carte grise, votre pièce d'identité et la déclaration de sinistre assurance." },
                { num: "5", title: "Radier le véhicule", text: "Avec le certificat de destruction CERFA remis lors de l'enlèvement, procédez à la radiation du véhicule sur le site ANTS dans un délai de 15 jours." },
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

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Aspects environnementaux d'un véhicule incendié
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Un véhicule brûlé contient de nombreuses substances toxiques libérées lors de
              la combustion (plastiques, caoutchoucs, huiles...) et potentiellement polluantes
              pour le sol et les nappes phréatiques. Il est important de le faire enlever
              rapidement par un centre VHU agréé qui procèdera à la neutralisation des
              substances résiduelles et au recyclage correct des matériaux. L'abandon d'une
              épave incendiée peut engager la responsabilité civile et pénale du propriétaire
              pour pollution de l'environnement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions – Enlèvement voiture brûlée" />
    </>
  );
}
