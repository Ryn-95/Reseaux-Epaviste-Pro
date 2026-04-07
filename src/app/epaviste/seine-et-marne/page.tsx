import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Seine-et-Marne – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé en Seine-et-Marne : enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Demandez un rappel ou appelez 07 45 48 24 64.",
  pathname: "/epaviste/seine-et-marne",
});

export default function EpavisteSeineEtMarnePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Seine-et-Marne", href: "/epaviste/seine-et-marne" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Seine-et-Marne"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Seine-et-Marne",
        url: "https://reseauepaviste.fr/epaviste/seine-et-marne",
        telephone: "+33745482464",
        cityOrArea: "Seine-et-Marne",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.5396,
        lng: 2.6539,
        postalCode: "77000",
      }}
      heroBadge="Seine-et-Marne – Intervention selon accessibilité"
      introParagraphs={[
        "En Seine-et-Marne, un épaviste agréé intervient pour l’enlèvement d’épave (véhicule hors d’usage) et l’orientation vers un centre VHU partenaire.",
        "La remise du certificat de destruction officiel permet de finaliser les démarches en conformité.",
      ]}
      zonesIntervention={[
        "Melun",
        "Chelles",
        "Meaux",
        "Fontainebleau",
        "Lagny-sur-Marne",
        "Torcy",
        "Montereau-Fault-Yonne",
        "Provins",
        "Nemours",
        "Chessy (Marne-la-Vallée)",
      ]}
      delaisText="A titre indicatif : souvent 60 à 90 minutes sur les secteurs proches de Paris, et davantage pour les zones plus éloignées (jusqu’à 2-3 heures selon l’accès et la localisation)."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Voiture non roulante", "Véhicule accidenté", "Carrosserie HS"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule d’entreprise HS"] },
      ]}
      casesFrequent={[
        {
          title: "Marne-la-Vallée / secteurs urbains",
          description:
            "Zones couvertes (ex. Chessy / Val d’Europe). Selon l’adresse, l’intervention peut être plus rapide.",
        },
        {
          title: "Forêt / zones protégées",
          description:
            "Dans certains contextes, des autorisations peuvent être nécessaires. Nous vous orientons vers la démarche appropriée.",
        },
        {
          title: "Fermes / propriétés rurales",
          description:
            "L’enlèvement dépend de la faisabilité d’accès (sol, largeur, portail). Indiquez les contraintes lors de votre appel.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 77 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Intervenez-vous dans toute la Seine-et-Marne ?",
          answer:
            "Oui. En raison de l’étendue du département, les délais varient selon la commune et l’accessibilité du lieu.",
        },
        {
          question: "Quel délai pour un épaviste à Melun ou Fontainebleau ?",
          answer:
            "A titre indicatif : à Melun souvent 90 à 120 minutes ; autour de Fontainebleau davantage selon la disponibilité.",
        },
        {
          question: "Mon véhicule est dans la forêt de Fontainebleau : que faire ?",
          answer:
            "Selon le lieu, des démarches peuvent être nécessaires auprès des autorités compétentes. Nous vous aidons à identifier la procédure.",
        },
        {
          question: "Pouvez-vous enlever une épave dans une ferme ?",
          answer:
            "Oui, dans la plupart des cas. Indiquez l’accès (sol, largeur, portail) pour organiser l’intervention.",
        },
        {
          question: "Intervenez-vous à Disneyland Paris et en Marne-la-Vallée ?",
          answer:
            "Oui. Le délai dépend de l’adresse exacte et des contraintes d’accès du secteur.",
        },
      ]}
    />
  );
}
