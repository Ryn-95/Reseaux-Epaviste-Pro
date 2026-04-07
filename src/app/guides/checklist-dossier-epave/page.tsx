import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Checklist dossier épave – Documents et étapes (VHU) | RéseauEpaviste",
  description:
    "Checklist simple pour préparer les documents et organiser l’enlèvement d’une épave (VHU). Étapes, erreurs à éviter, liens officiels. Guide + FAQ.",
  pathname: "/guides/checklist-dossier-epave",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides", href: "/guides/checklist-dossier-epave" },
  { label: "Checklist dossier épave", href: "/guides/checklist-dossier-epave" },
];

const faqItems = [
  {
    question: "La carte grise est-elle toujours obligatoire ?",
    answer:
      "Dans la majorité des cas, la carte grise est demandée. En cas de perte/vol ou situation spécifique, des solutions existent selon le cas. Le plus simple est d’expliquer votre situation au téléphone.",
  },
  {
    question: "Dois-je être présent lors de l’enlèvement ?",
    answer:
      "C’est recommandé pour remettre les documents et confirmer l’accès. Sinon, une procuration et une copie de pièce d’identité peuvent être nécessaires selon le cas.",
  },
  {
    question: "Que faire si le véhicule est en parking souterrain ?",
    answer:
      "Indiquez la hauteur maximale, les accès (badge/code) et les contraintes. L’équipe confirme la faisabilité selon le matériel.",
  },
  {
    question: "Le certificat de destruction est-il systématique ?",
    answer:
      "Dans une procédure conforme VHU, un certificat de destruction (CERFA) est établi via un centre agréé. Conservez-le.",
  },
  {
    question: "Quelles infos préparer pour gagner du temps ?",
    answer:
      "Adresse exacte, accessibilité (parking/cour/terrain), type de véhicule, et la situation administrative (carte grise disponible ou non).",
  },
];

export default function GuideChecklistDossierEpavePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Checklist dossier épave : documents et étapes (VHU)",
    description:
      "Checklist pratique pour préparer un enlèvement d’épave conforme (VHU) et éviter les erreurs de documents et d’accès.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-10",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/guides/checklist-dossier-epave",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Préparer un dossier pour enlèvement d’épave (VHU)",
    description:
      "Étapes simples pour préparer les documents et les informations nécessaires avant l’enlèvement d’un véhicule hors d’usage.",
    step: [
      {
        "@type": "HowToStep",
        name: "Préparer les informations d’accès",
        text: "Notez l’adresse exacte et l’accessibilité : voie publique, cour, résidence, parking souterrain (hauteur), badges/codes, étage.",
      },
      {
        "@type": "HowToStep",
        name: "Préparer les documents",
        text: "Rassemblez la carte grise si disponible et une pièce d’identité. En cas de perte/vol ou situation particulière, préparez les éléments utiles et expliquez le contexte au téléphone.",
      },
      {
        "@type": "HowToStep",
        name: "Vérifier le statut VHU et la procédure",
        text: "Assurez-vous de passer par un circuit agréé VHU. Conservez le certificat de destruction (CERFA) et toute preuve de démarches administratives.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Guide – Checklist"
        title="Checklist dossier épave : documents et étapes (VHU)"
        subtitle="Une checklist courte pour préparer l’enlèvement d’une épave : infos d’accès, documents, erreurs à éviter et sources officielles."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Objectif : éviter les blocages (documents manquants, accès difficile) et sécuriser la procédure VHU."
        enResumePoints={[
          "Préparez l’adresse exacte et l’accessibilité (parking/cour/résidence).",
          "Rassemblez les documents disponibles (carte grise, identité).",
          "Conservez le certificat de destruction et les preuves de démarches.",
        ]}
        tocItems={[
          { label: "Informations à préparer", id: "infos" },
          { label: "Documents (selon cas)", id: "documents" },
          { label: "Accès difficiles", id: "acces" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="infos" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Informations à préparer (avant d’appeler)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Adresse exacte, étage/niveau si parking</li>
                <li>Accessibilité : largeur, hauteur, badge/code</li>
                <li>Type de véhicule (voiture, utilitaire, deux‑roues)</li>
                <li>État : roulant/non roulant, accidenté, brûlé, inondé</li>
              </ul>

              <h2 id="documents" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Documents (selon le cas)
              </h2>
              <p>
                Les documents requis dépendent de votre situation. Le plus important est d’expliquer clairement le contexte et ce que vous avez déjà. Voir les cas particuliers :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="/enlevement-epave/sans-carte-grise" className="text-blue-600 hover:underline">
                    épave sans carte grise
                  </Link>
                </li>
                <li>
                  <Link href="/enlevement-epave/vehicule-gage" className="text-blue-600 hover:underline">
                    véhicule gagé
                  </Link>
                </li>
                <li>
                  <Link href="/enlevement-epave/parking-souterrain" className="text-blue-600 hover:underline">
                    parking souterrain
                  </Link>
                </li>
              </ul>

              <h2 id="acces" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Accès difficiles : ce qui change concrètement
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Parking souterrain : hauteur libre et manœuvres</li>
                <li>Résidence fermée : badge, code, présence</li>
                <li>Terrain privé : sol porteur, passage, obstacles</li>
              </ul>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères et démarches liées aux véhicules.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches administratives liées à la destruction.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés sur le cadre VHU.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Checklist dossier épave" />
    </>
  );
}

