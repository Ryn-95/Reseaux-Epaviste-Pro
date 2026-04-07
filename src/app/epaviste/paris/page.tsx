import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Paris (75) | Enlèvement d'épave Gratuit sous 2h",
  description:
    "Besoin d'un épaviste à Paris ? Enlèvement d'épave gratuit 7j/7, remorquage en parking souterrain et destruction en centre VHU agréé. Certificat de destruction officiel remis immédiatement.",
  pathname: "/epaviste/paris",
});

export default function EpavisteParisPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Paris", href: "/epaviste/paris" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Paris"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Paris",
        url: "https://reseauepaviste.fr/epaviste/paris",
        telephone: "+33184173218",
        cityOrArea: "Paris",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.8566,
        lng: 2.3522,
        postalCode: "75000",
      }}
      heroBadge="Paris – Intervention selon accessibilité"
      introParagraphs={[
        "Votre véhicule est une épave à Paris ? Notre réseau d'épavistes agréés VHU intervient gratuitement pour l'enlèvement de votre véhicule hors d'usage (VHU), quel que soit son état ou son emplacement.",
        "Grâce à notre flotte spécialisée, nous assurons le remorquage en parking souterrain, sur la voie publique ou en résidence privée. Vous recevez immédiatement le certificat de destruction officiel pour finaliser vos démarches en toute légalité.",
      ]}
      zonesIntervention={[
        "Paris intra-muros",
        "Boulogne-Billancourt",
        "Vincennes",
        "Montreuil",
        "Saint-Denis",
        "Nanterre",
        "Issy-les-Moulineaux",
        "Ivry-sur-Seine",
      ]}
      delaisText="A titre indicatif, l’intervention est souvent possible sous 30 à 90 minutes selon l’arrondissement, la circulation et l’accessibilité du lieu (parking souterrain, résidence, cave…)."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Voiture HS", "Carrosserie accidentée", "Véhicule non roulant"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter", "Véhicule brûlé / immobilisé"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Camionnette", "Véhicule hors d’usage en entreprise"] },
      ]}
      casesFrequent={[
        {
          title: "Parking souterrain",
          description:
            "Intervention avec matériel adapté (selon hauteur/accès). Indiquez la hauteur limite et les contraintes du site lors de votre appel.",
        },
        {
          title: "Résidence fermée / copropriété",
          description:
            "Nous organisons l’enlèvement avec un accès facilité (présence, code, procédure interne) pour traiter l’épave dans les cours et garages.",
        },
        {
          title: "Accès réglementé",
          description:
            "En cas de contraintes de circulation (zones spécifiques, accès limité), nos équipes vous indiquent le meilleur mode d’intervention.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 75 Paris (ou proche banlieue)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Quel est le délai d’intervention pour un épaviste à Paris ?",
          answer:
            "A titre indicatif, sous 30 à 90 minutes selon l’arrondissement, la circulation et l’accessibilité du lieu. Précisez l’adresse et le type de parking.",
        },
        {
          question: "Peut-on enlever une épave dans un parking souterrain ?",
          answer:
            "Oui, dans la plupart des cas. Indiquez la hauteur maximale et les conditions d’accès afin de mobiliser le matériel adapté.",
        },
        {
          question: "Acceptez-vous les épaves sans carte grise ?",
          answer:
            "Sous conditions. En cas de perte ou de situation particulière, nos conseillers vous orientent vers la solution administrative applicable.",
        },
        {
          question: "Comment se passe l’enlèvement en résidence fermée ?",
          answer:
            "En général, il suffit d’être présent ou de transmettre un mode d’accès. Nous adaptons l’intervention aux contraintes du site.",
        },
        {
          question: "Intervenez-vous dans tous les arrondissements de Paris ?",
          answer:
            "Oui. Nous couvrons l’ensemble de Paris, avec des délais variables selon les périodes et l’accès au lieu.",
        },
      ]}
    />
  );
}
