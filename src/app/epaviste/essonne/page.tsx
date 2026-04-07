import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Essonne – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé en Essonne : enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Demandez un rappel ou appelez 01 84 17 32 18.",
  pathname: "/epaviste/essonne",
});

export default function EpavisteEssonnePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Essonne", href: "/epaviste/essonne" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Essonne"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Essonne",
        url: "https://reseauepaviste.fr/epaviste/essonne",
        telephone: "+33184173218",
        cityOrArea: "Essonne",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.6275,
        lng: 2.4326,
        postalCode: "91000",
      }}
      heroBadge="Essonne – Intervention selon accessibilité"
      introParagraphs={[
        "En Essonne, un épaviste agréé intervient pour l’enlèvement d’épave (véhicule hors d’usage) et l’orientation vers un centre VHU partenaire.",
        "Vous recevez le certificat de destruction officiel pour finaliser les démarches en conformité.",
      ]}
      zonesIntervention={[
        "Évry-Courcouronnes",
        "Corbeil-Essonnes",
        "Massy",
        "Palaiseau",
        "Étampes",
        "Longjumeau",
        "Savigny-sur-Orge",
        "Gif-sur-Yvette",
        "Orsay",
        "Milly-la-Forêt",
      ]}
      delaisText="A titre indicatif, souvent 60 à 120 minutes selon la commune, l’accès (parking, résidence, propriété rurale) et la disponibilité locale."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Voiture non roulante", "Véhicule accidenté", "Carrosserie HS"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule d’entreprise HS"] },
      ]}
      casesFrequent={[
        {
          title: "Zones urbaines (Massy / Évry)",
          description:
            "Selon l’adresse, l’intervention peut être plus rapide dans les secteurs bien desservis. Indiquez l’accès et le stationnement.",
        },
        {
          title: "Zones rurales / propriétés isolées",
          description:
            "Nous intervenons aussi dans les environnements plus ruraux, sous réserve d’un accès possible pour nos moyens (sol, portail, largeur de passage).",
        },
        {
          title: "Plateau de Saclay",
          description:
            "Secteur couvert. Le délai dépend de la localisation exacte et des contraintes d’accès du site.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 91 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Quel délai pour un épaviste en Essonne ?",
          answer:
            "A titre indicatif : souvent 60 à 120 minutes selon la commune. Le nord du département (Massy, Palaiseau, Gif-sur-Yvette) peut être plus rapide.",
        },
        {
          question: "Intervenez-vous dans les zones rurales de l’Essonne ?",
          answer:
            "Oui dans la plupart des cas. Pour les propriétés isolées, l’intervention dépend de la faisabilité d’accès pour nos moyens.",
        },
        {
          question: "Peut-on intervenir près de la forêt de Fontainebleau ?",
          answer:
            "Selon le lieu, des autorisations peuvent être nécessaires. Nous vous indiquons la démarche à suivre.",
        },
        {
          question: "Intervenez-vous sur le plateau de Saclay ?",
          answer:
            "Oui. Nous couvrons le secteur, avec des délais variables selon l’adresse.",
        },
        {
          question: "Comment traiter des machines agricoles ?",
          answer:
            "Cela dépend du cas. Certaines demandes sortent du cadre VHU standard : nous évaluons votre demande à partir des informations du véhicule.",
        },
      ]}
    />
  );
}
