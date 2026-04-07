import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Épave en succession – Enlèvement & documents (VHU) | RéseauEpaviste",
  description:
    "Véhicule épave dans une succession : qui peut demander l’enlèvement ? Quels documents prévoir ? Procédure VHU, cas fréquents et sources officielles.",
  pathname: "/enlevement-epave/succession",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement d’épave", href: "/enlevement-epave" },
  { label: "Succession", href: "/enlevement-epave/succession" },
];

const faqItems = [
  {
    question: "Un héritier peut-il demander l’enlèvement ?",
    answer:
      "Souvent oui, mais cela dépend des justificatifs et de la situation. Le plus important est d’indiquer clairement le contexte (succession) et de préparer les pièces demandées.",
  },
  {
    question: "Quels documents sont généralement demandés ?",
    answer:
      "Selon les cas : justificatifs liés à la succession, pièce d’identité, et documents du véhicule s’ils sont disponibles. Nous vous guidons au téléphone selon votre situation.",
  },
  {
    question: "Que faire si la carte grise est introuvable ?",
    answer:
      "Selon l’ancienneté et le contexte, des solutions existent. Consultez le cas « sans carte grise » et expliquez votre situation au téléphone.",
  },
  {
    question: "Le certificat de destruction est-il remis ?",
    answer:
      "Dans une procédure conforme VHU, un certificat de destruction (CERFA) est établi via un centre agréé. Conservez-le.",
  },
  {
    question: "Combien de temps ça prend ?",
    answer:
      "Le délai dépend surtout de l’accessibilité et de l’organisation. Nous confirmons un délai indicatif au téléphone selon l’adresse et le contexte.",
  },
];

export default function EpaveSuccessionPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="local"
        badge="Cas particulier – succession"
        title="Épave en succession : qui peut demander l’enlèvement et quoi préparer"
        subtitle="Cette page explique les points clés en cas de véhicule hors d’usage dans une succession : documents, erreurs fréquentes et procédure conforme VHU."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse rapide : un enlèvement est souvent possible si la situation est clarifiée et si les pièces justificatives adaptées sont réunies. Les exigences varient selon le cas."
        enResumePoints={[
          "Expliquez dès l’appel qu’il s’agit d’une succession.",
          "Préparez les justificatifs disponibles (succession + véhicule).",
          "Procédure VHU : certificat de destruction + démarches administratives.",
        ]}
        tocItems={[
          { label: "Qui peut faire la demande", id: "qui" },
          { label: "Documents (selon cas)", id: "documents" },
          { label: "Cas fréquents", id: "cas" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="qui" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Qui peut demander l’enlèvement ?
              </h2>
              <p>
                Dans une succession, l’objectif est d’éviter les erreurs (personne non habilitée, documents incomplets). Décrivez la situation au téléphone : nous indiquons les pièces nécessaires selon votre cas.
              </p>

              <h2 id="documents" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Documents (selon le cas)
              </h2>
              <p>
                Les documents varient selon la situation (carte grise présente ou non, héritiers, procuration). Voir aussi :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="/enlevement-epave/sans-carte-grise" className="text-blue-600 hover:underline">
                    enlèvement sans carte grise
                  </Link>
                </li>
                <li>
                  <Link href="/guides/checklist-dossier-epave" className="text-blue-600 hover:underline">
                    checklist dossier épave
                  </Link>
                </li>
              </ul>

              <h2 id="cas" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Cas fréquents
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Véhicule immobilisé depuis longtemps sur terrain privé</li>
                <li>Documents incomplets (carte grise introuvable)</li>
                <li>Accès difficile (cour, parking, résidence)</li>
              </ul>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères administratifs et démarches.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches liées aux véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Épave en succession" />
    </>
  );
}

