import { buildPageMetadata } from "@/lib/seo/metadata";
import EpavisteLocalTemplate from "@/components/EpavisteLocalTemplate";

export const metadata = buildPageMetadata({
  title: "Épaviste Hauts-de-Seine – Enlèvement d’épave gratuit et agréé VHU | RéseauEpaviste",
  description:
    "Épaviste agréé dans les Hauts-de-Seine : enlèvement d’épave (VHU) pris en charge, orientation vers un centre VHU partenaire et remise du certificat de destruction officiel. Demandez un rappel ou appelez 07 45 48 24 64.",
  pathname: "/epaviste/hauts-de-seine",
});

export default function EpavisteHautsDeSeinePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Épaviste", href: "/epaviste" },
    { label: "Épaviste Hauts-de-Seine", href: "/epaviste/hauts-de-seine" },
  ];

  return (
    <EpavisteLocalTemplate
      cityLabel="Hauts-de-Seine"
      breadcrumbItems={breadcrumbItems}
      localBusinessJsonLdProps={{
        name: "RéseauEpaviste Hauts-de-Seine",
        url: "https://reseauepaviste.fr/epaviste/hauts-de-seine",
        telephone: "+33745482464",
        cityOrArea: "Hauts-de-Seine",
        postalCode: "92000",
        rating: 4.8,
        reviewCount: 1247,
        lat: 48.8566,
        lng: 2.2322,
      }}
      heroBadge="Hauts-de-Seine – Intervention selon accessibilité"
      introParagraphs={[
        "Besoin d’un épaviste à Hauts-de-Seine ? Un professionnel agréé intervient pour l’enlèvement de votre véhicule hors d’usage et vous guide vers un centre VHU partenaire.",
        "Le certificat de destruction officiel est remis afin de finaliser la procédure en conformité.",
      ]}
      zonesIntervention={[
        "Nanterre",
        "Boulogne-Billancourt",
        "Colombes",
        "Levallois-Perret",
        "Issy-les-Moulineaux",
        "Neuilly-sur-Seine",
        "Rueil-Malmaison",
        "Courbevoie",
      ]}
      delaisText="A titre indicatif, l’intervention est souvent possible sous 45 à 75 minutes selon la commune, l’accès au site (parking, résidence) et les contraintes locales."
      vehicles={[
        { type: "Voiture / véhicule particulier", exemples: ["Véhicule non roulant", "Carrosserie accidentée", "Voiture immobilisée"] },
        { type: "Deux-roues motorisés", exemples: ["Moto", "Scooter", "Deux-roues hors d’usage"] },
        { type: "Utilitaire", exemples: ["Fourgon", "Véhicule d’entreprise", "Camionnette HS"] },
      ]}
      casesFrequent={[
        {
          title: "Parkings et accès en zone urbaine",
          description:
            "Résidences sécurisées, garages et parkings souterrains : nous adaptons l’organisation et le matériel selon la configuration.",
        },
        {
          title: "Quartiers denses (ex. La Défense)",
          description:
            "Pour les zones à contraintes, l’équipe vous indique la procédure la plus adaptée afin de réaliser l’enlèvement correctement.",
        },
        {
          title: "Communes périphériques",
          description:
            "Les délais peuvent varier : lors de l’appel, précisez l’adresse, l’accès et le type de véhicule pour mieux planifier.",
        },
      ]}
      centers={[
        {
          name: "Centre VHU partenaire (à compléter)",
          address: "Adresse à compléter – 92 (ou proche)",
          agrément: "N° d’agrément préfectoral à compléter",
        },
      ]}
      miniFaq={[
        {
          question: "Quel délai pour un épaviste dans le 92 ?",
          answer:
            "A titre indicatif, souvent 45 à 75 minutes selon la commune et l’accès au lieu. Les zones périphériques peuvent nécessiter plus de temps.",
        },
        {
          question: "Intervenez-vous à La Défense / parkings ?",
          answer:
            "Oui, nous intervenons dans les parkings et zones denses. Indiquez le niveau et la configuration pour mobiliser le bon matériel.",
        },
        {
          question: "Comment faire si l’accès est en résidence sécurisée ?",
          answer:
            "En général, il suffit d’être présent ou de communiquer un mode d’accès. Nos équipes s’adaptent aux règles internes de la copropriété.",
        },
        {
          question: "Couvrez-vous les communes plus résidentielles ?",
          answer:
            "Oui. Pour les communes plus éloignées ou en accès plus difficile, on vous précise la faisabilité à partir de votre adresse.",
        },
        {
          question: "Service disponible le week-end ?",
          answer:
            "Oui, le service est accessible 7j/7 et l’organisation peut varier selon la planification locale.",
        },
      ]}
    />
  );
}
