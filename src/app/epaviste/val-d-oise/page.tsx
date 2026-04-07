import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Val-d’Oise – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé dans le Val-d’Oise : enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Demandez un rappel ou appelez 07 45 48 24 64.",
  pathname: "/epaviste/val-d-oise",
});

export default function EpavisteValDOisePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Val-d’Oise", href: "/epaviste/val-d-oise" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Val-d’Oise"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Val-d’Oise",
        url: "https://reseauepaviste.fr/epaviste/val-d-oise",
        telephone: "+33745482464",
        cityOrArea: "Val-d’Oise",
        rating: 4.8,
        reviewCount: 1247,
        lat: 49.0711,
        lng: 2.1048,
        postalCode: "95000",
      }}
      heroBadge="Val-d’Oise – Intervention selon accessibilité"
      introParagraphs={[
        "Un épaviste agréé intervient dans tout le Val-d’Oise pour l’enlèvement d’épave (véhicule hors d’usage) et l’orientation vers un centre VHU partenaire.",
        "La remise du certificat de destruction officiel permet de finaliser les démarches en conformité.",
      ]}
      zonesIntervention={[
        "Cergy",
        "Argenteuil",
        "Pontoise",
        "Sarcelles",
        "Villiers-le-Bel",
        "Garges-lès-Gonesse",
        "Ermont",
        "Enghien-les-Bains",
        "Marines",
      ]}
      delaisText="A titre indicatif : souvent 60 à 90 minutes sur certaines zones, et jusqu’à 90 à 120 minutes sur des communes plus éloignées. Les délais varient selon l’accès et la localisation exacte."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Véhicule non roulant", "Voiture accidentée", "Voiture immobilisée"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule d’entreprise HS"] },
      ]}
      casesFrequent={[
        {
          title: "Cergy / secteur urbain",
          description:
            "Zone souvent bien couverte. Indiquez l’adresse et les conditions de stationnement pour organiser l’intervention.",
        },
        {
          title: "Roissy-CDG et communes proches",
          description:
            "Des contraintes locales peuvent impacter l’organisation : nous vous confirmons la procédure lors de votre appel.",
        },
        {
          title: "Zones forestières / Vexin",
          description:
            "Si le véhicule est en zone forestière ou protégée, des démarches peuvent être nécessaires. Nous vous orientons selon le contexte.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 95 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Quel délai d’intervention pour un épaviste dans le Val-d’Oise ?",
          answer:
            "A titre indicatif : souvent 60 à 90 minutes selon la commune, et plus vers le nord (jusqu’à 90 à 120 minutes) selon la localisation et l’accès.",
        },
        {
          question: "Intervenez-vous à Cergy-Pontoise ?",
          answer:
            "Oui. Nous couvrons l’agglomération de Cergy-Pontoise ; le délai dépend de l’adresse et des conditions de stationnement.",
        },
        {
          question: "Que faire si le véhicule est en zone forestière ?",
          answer:
            "Dans certains cas, des procédures/autorisation peuvent s’appliquer. On vous indique la démarche à suivre à partir de l’adresse.",
        },
        {
          question: "Intervenez-vous autour de Roissy-CDG ?",
          answer:
            "Oui. Les contraintes locales peuvent varier : on vous confirme la meilleure procédure lors de votre appel.",
        },
        {
          question: "Intervenez-vous dans le Vexin ?",
          answer:
            "Oui. Pour les propriétés plus isolées, le délai peut être plus long : précisez l’environnement (accès, sol, largeur de passage).",
        },
      ]}
    />
  );
}
