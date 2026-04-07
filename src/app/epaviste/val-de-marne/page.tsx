import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Val-de-Marne – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé dans le Val-de-Marne : enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Demandez un rappel ou appelez 01 84 17 32 18.",
  pathname: "/epaviste/val-de-marne",
});

export default function EpavisteValDeMarnePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Val-de-Marne", href: "/epaviste/val-de-marne" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Val-de-Marne"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Val-de-Marne",
        url: "https://reseauepaviste.fr/epaviste/val-de-marne",
        telephone: "+33184173218",
        cityOrArea: "Val-de-Marne",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.7733,
        lng: 2.4562,
        postalCode: "94000",
      }}
      heroBadge="Val-de-Marne – Intervention selon accessibilité"
      introParagraphs={[
        "Un épaviste agréé intervient dans tout le Val-de-Marne pour l’enlèvement d’épave (véhicule hors d’usage) et l’orientation vers un centre VHU partenaire.",
        "La remise du certificat de destruction officiel permet de finaliser les démarches en conformité.",
      ]}
      zonesIntervention={[
        "Créteil",
        "Vincennes",
        "Champigny-sur-Marne",
        "Vitry-sur-Seine",
        "Ivry-sur-Seine",
        "Alfortville",
        "Charenton-le-Pont",
        "Joinville-le-Pont",
        "Orly (secteur)",
      ]}
      delaisText="A titre indicatif, souvent 45 à 90 minutes selon la commune, la circulation et l’accessibilité (parking, résidence, site d’entreprise)."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Voiture HS", "Voiture non roulante", "Véhicule accidenté"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule d’entreprise HS"] },
      ]}
      casesFrequent={[
        {
          title: "Quartiers denses (résidences / parkings)",
          description:
            "Enlèvement adapté aux contraintes d’accès. Indiquez la présence d’un parking souterrain ou d’un accès sécurisé.",
        },
        {
          title: "Secteur Orly / zones à contraintes",
          description:
            "Autour d’Orly, des contraintes de circulation peuvent s’appliquer. Nous vous orientons vers la procédure la plus adaptée.",
        },
        {
          title: "Proximité de la Marne",
          description:
            "En cas de localisation proche des berges, précisez l’accessibilité pour organiser l’enlèvement dans les meilleures conditions.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 94 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Quel est le délai d’intervention dans le Val-de-Marne ?",
          answer:
            "A titre indicatif : souvent 45 à 90 minutes. Les secteurs les plus proches de Paris peuvent être plus rapides, les communes plus éloignées peuvent demander davantage de temps.",
        },
        {
          question: "Pouvez-vous enlever une épave dans une maison individuelle du 94 ?",
          answer:
            "Oui. Nous adaptons le déroulé selon l’accès (allée, garage, cour) et la largeur de passage.",
        },
        {
          question: "Intervenez-vous dans les communes proches de l’aéroport d’Orly ?",
          answer:
            "Oui (secteur Orly). En raison de contraintes de circulation, les délais peuvent varier légèrement : on vous confirme lors de votre appel.",
        },
        {
          question: "Mon véhicule est près des berges de la Marne : intervenez-vous ?",
          answer:
            "Oui selon l’accessibilité. Nous évaluons les conditions à partir de l’adresse et de l’environnement.",
        },
        {
          question: "Avez-vous un épaviste disponible rapidement à Créteil ?",
          answer:
            "Créteil est généralement bien couvert. En pratique, le délai dépend de la localisation exacte et de la disponibilité au moment de l’appel.",
        },
      ]}
    />
  );
}
