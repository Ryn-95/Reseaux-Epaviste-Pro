import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Éviter les faux épavistes – Signaux d’alerte & checklist | RéseauEpaviste",
  description:
    "Comment éviter un faux épaviste : signaux d’alerte, questions à poser, documents à exiger, erreurs à éviter. Guide + FAQ + sources officielles.",
  pathname: "/guides/eviter-faux-epaviste",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides", href: "/guides/eviter-faux-epaviste" },
  { label: "Éviter les faux épavistes", href: "/guides/eviter-faux-epaviste" },
];

const faqItems = [
  {
    question: "Quels sont les signaux d’alerte les plus fréquents ?",
    answer:
      "Promesses floues, absence de documents, refus de fournir des informations de traçabilité, et pression excessive. En cas de doute, privilégiez un circuit clairement conforme et vérifiable.",
  },
  {
    question: "Dois-je payer pour l’enlèvement ?",
    answer:
      "Cela dépend du contexte et de l’offre. Pour la filière VHU, la procédure doit rester conforme et documentée. En cas de doute, demandez un devis écrit et les informations du traitement.",
  },
  {
    question: "Quels documents dois-je obtenir ?",
    answer:
      "Dans une procédure conforme VHU, un certificat de destruction (CERFA) est établi via un centre agréé. Conservez toutes les preuves liées à la prise en charge.",
  },
  {
    question: "Que faire si on me demande la carte grise sans explications ?",
    answer:
      "Ne remettez pas de documents importants sans comprendre la procédure. Posez des questions, exigez un cadre clair, et appuyez-vous sur les sources officielles.",
  },
  {
    question: "Comment être sûr de la conformité ?",
    answer:
      "Vérifiez les démarches et textes de référence sur les sites officiels. En pratique, privilégiez des partenaires clairement identifiés et des documents de destruction.",
  },
];

export default function EviterFauxEpavistePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Éviter les faux épavistes : checklist et points de vigilance",
    description:
      "Guide : comment reconnaître un faux épaviste, éviter les erreurs et sécuriser une procédure conforme VHU.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-28",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/guides/eviter-faux-epaviste",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Vérifier un enlèvement d’épave (checklist anti-arnaque)",
    description:
      "Étapes simples pour réduire les risques : questions à poser, documents à obtenir et preuves à conserver.",
    step: [
      { "@type": "HowToStep", name: "Clarifier la procédure", text: "Demandez clairement comment se déroule l’enlèvement et le traitement (circuit VHU) et ce qui vous sera remis." },
      { "@type": "HowToStep", name: "Demander les preuves", text: "Demandez les documents et confirmations (certificat de destruction/traçabilité selon cas) et conservez les preuves." },
      { "@type": "HowToStep", name: "Refuser la pression", text: "Évitez les décisions sous pression. Si quelque chose vous semble incohérent, stoppez et vérifiez via sources officielles." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Guide – éviter les arnaques"
        title="Éviter les faux épavistes : checklist et signaux d’alerte"
        subtitle="Une checklist courte pour sécuriser votre enlèvement d’épave (VHU) : questions à poser, documents à obtenir, erreurs à éviter et liens officiels."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : privilégiez un circuit VHU conforme et documenté. En cas de doute, vérifiez la procédure sur des sources officielles et ne donnez pas de documents sous pression."
        enResumePoints={[
          "Posez des questions précises sur la procédure et les documents remis.",
          "Conservez toutes les preuves (messages, devis, documents).",
          "Vérifiez le cadre via sources institutionnelles.",
        ]}
        tocItems={[
          { label: "Signaux d’alerte", id: "signaux" },
          { label: "Checklist (HowTo)", id: "checklist" },
          { label: "Erreurs à éviter", id: "erreurs" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="signaux" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Signaux d’alerte
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Réponses floues sur la destination/traitement du véhicule</li>
                <li>Refus de vous donner des informations écrites</li>
                <li>Pression “tout de suite” sans transparence</li>
                <li>Incohérences sur les documents à remettre</li>
              </ul>

              <h2 id="checklist" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Checklist (simple)
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Demander ce qui sera remis (preuve/certificat selon cas)</li>
                <li>Demander un écrit (devis, confirmation, détails)</li>
                <li>Vérifier les sources officielles si doute</li>
              </ol>

              <h2 id="erreurs" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Erreurs à éviter
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Donner des documents sans comprendre la procédure</li>
                <li>Accepter une intervention sans preuve</li>
                <li>Confondre enlèvement VHU et simple “dépose” non documentée</li>
              </ul>
              <p>
                Voir aussi :{" "}
                <Link href="/guides/certificat-destruction-vhu" className="text-blue-600 hover:underline">
                  certificat de destruction VHU
                </Link>
                .
              </p>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères et démarches officielles.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches administratives véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Éviter les faux épavistes" />
    </>
  );
}

