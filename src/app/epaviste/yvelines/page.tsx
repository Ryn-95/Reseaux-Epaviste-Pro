import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Yvelines – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé dans les Yvelines : enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Demandez un rappel ou appelez 07 45 48 24 64.",
  pathname: "/epaviste/yvelines",
});

export default function EpavisteYvelinesPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Yvelines", href: "/epaviste/yvelines" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Yvelines"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Yvelines",
        url: "https://reseauepaviste.fr/epaviste/yvelines",
        telephone: "+33745482464",
        cityOrArea: "Yvelines",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.7856,
        lng: 1.8683,
        postalCode: "78000",
      }}
      heroBadge="Yvelines – Intervention selon accessibilité"
      introParagraphs={[
        "Un épaviste agréé intervient dans tout le département des Yvelines pour l’enlèvement d’épave (véhicule hors d’usage) et l’orientation vers un centre VHU partenaire.",
        "Vous recevez le certificat de destruction officiel afin de finaliser les démarches en conformité.",
      ]}
      zonesIntervention={[
        "Versailles",
        "Mantes-la-Jolie",
        "Saint-Germain-en-Laye",
        "Vélizy-Villacoublay",
        "Rambouillet",
        "Poissy",
        "Conflans-Sainte-Honorine",
        "Trappes",
      ]}
      delaisText="A titre indicatif : souvent 60 à 120 minutes selon la commune. Les secteurs proches de La Défense et des grands axes peuvent être plus rapides, tandis que les zones plus rurales peuvent demander davantage de temps."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Voiture non roulante", "Véhicule accidenté", "Carrosserie HS"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule d’entreprise HS"] },
      ]}
      casesFrequent={[
        {
          title: "Versailles / zones forestières",
          description:
            "Si le véhicule est situé sur un chemin forestier ou une zone protégée, des autorisations peuvent être nécessaires : on vous guide selon le contexte.",
        },
        {
          title: "Hameaux isolés / accès difficile",
          description:
            "Pour les accès plus complexes, précisez les conditions (type de sol, portail, largeur). Nos moyens peuvent s’adapter selon faisabilité.",
        },
        {
          title: "Remorquage (si besoin)",
          description:
            "Le remorquage peut être proposé en complément selon le cas : un devis peut être nécessaire.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 78 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Quel délai pour un enlèvement d’épave dans les Yvelines ?",
          answer:
            "A titre indicatif : souvent 60 à 120 minutes selon la commune. Les secteurs proches de La Défense peuvent être plus rapides.",
        },
        {
          question: "Intervenez-vous à Versailles ?",
          answer:
            "Oui. En cas de localisation en zone forestière proche de sites protégés, on vous indiquera s’il faut contacter l’ONF au préalable.",
        },
        {
          question: "Intervenez-vous dans un hameau isolé ?",
          answer:
            "Oui, sous réserve d’un accès possible. Pour les accès en chemin de terre, précisez les conditions lors de l’appel.",
        },
        {
          question: "Proposez-vous le remorquage ?",
          answer:
            "Le remorquage peut être proposé en complément selon le cas, avec un devis séparé.",
        },
        {
          question: "Restrictions dans le PNR ?",
          answer:
            "Selon le secteur, des procédures particulières peuvent s’appliquer. On vous conseille de vérifier auprès de la commune si nécessaire.",
        },
      ]}
    />
  );
}
