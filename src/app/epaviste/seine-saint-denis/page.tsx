import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Seine-Saint-Denis – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé en Seine-Saint-Denis : enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Demandez un rappel ou appelez 07 45 48 24 64.",
  pathname: "/epaviste/seine-saint-denis",
});

export default function EpavisteSeineSaintDenisPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Seine-Saint-Denis", href: "/epaviste/seine-saint-denis" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Seine-Saint-Denis"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Seine-Saint-Denis",
        url: "https://reseauepaviste.fr/epaviste/seine-saint-denis",
        telephone: "+33745482464",
        cityOrArea: "Seine-Saint-Denis",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.9356,
        lng: 2.3539,
        postalCode: "93000",
      }}
      heroBadge="Seine-Saint-Denis – Intervention selon accessibilité"
      introParagraphs={[
        "Un épaviste agréé intervient dans toute la Seine-Saint-Denis pour l’enlèvement d’épave (véhicule hors d’usage) et l’orientation vers un centre VHU partenaire.",
        "La remise du certificat de destruction officiel permet de finaliser les démarches en conformité.",
      ]}
      zonesIntervention={[
        "Saint-Denis",
        "Bobigny",
        "Montreuil",
        "Aubervilliers",
        "Noisy-le-Grand",
        "Aulnay-sous-Bois",
        "Pantin",
        "Drancy",
        "Saint-Ouen",
      ]}
      delaisText="A titre indicatif, l’intervention est souvent possible sous 45 à 90 minutes. Les délais varient selon la commune, la circulation et l’accessibilité (résidence, parking, zone d’activité)."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Véhicule non roulant", "Carrosserie accidentée", "Voiture immobilisée"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter", "Deux-roues hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule utilitaire HS", "Véhicule d’entreprise"] },
      ]}
      casesFrequent={[
        {
          title: "Zones industrielles / d’activité",
          description:
            "Interventions possibles sur les zones d’activités. Précisez le type d’accès (horaire, portail, coordonnées d’entrée) pour organiser le bon matériel.",
        },
        {
          title: "Quartiers denses (accès contraint)",
          description:
            "En résidence, cour ou parking avec accès limité : nous adaptons le déroulé (présence, code, procédure interne).",
        },
        {
          title: "Routes à contrainte",
          description:
            "Pour certaines voiries très contraintes, l’équipe vous indique la procédure la plus adaptée (organisation depuis une zone accessible).",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 93 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Intervenez-vous dans toutes les communes du 93 ?",
          answer:
            "Oui, sur l’ensemble de la Seine-Saint-Denis. Les délais peuvent varier selon votre localisation et l’accès au lieu.",
        },
        {
          question: "Quel est le délai d’intervention en Seine-Saint-Denis ?",
          answer:
            "A titre indicatif : souvent 45 à 90 minutes. En fonction des contraintes du secteur, le délai peut être plus long.",
        },
        {
          question: "Pouvez-vous enlever une épave dans une zone industrielle ?",
          answer:
            "Oui. Précisez le type d’accès et les contraintes du site (portail, horaires, zone de manœuvre).",
        },
        {
          question: "Le véhicule est-il pris en charge si l’accès est difficile ?",
          answer:
            "Oui dans la plupart des cas. Indiquez l’environnement (parking, résidence, cour) pour mobiliser les moyens adaptés.",
        },
        {
          question: "Y a-t-il un surcoût selon la localisation ?",
          answer:
            "Dans le cadre de la prestation, nous indiquons les conditions au moment de l’échange. Les contraintes d’accès peuvent impacter l’organisation, mais on vous informe à l’avance.",
        },
      ]}
    />
  );
}
