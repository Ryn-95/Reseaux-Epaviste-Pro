import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Épave sans contrôle technique – Enlèvement VHU & démarches | RéseauEpaviste",
  description:
    "Voiture sans contrôle technique : que faire si elle devient une épave/VHU ? Procédure, documents, erreurs à éviter et sources officielles.",
  pathname: "/enlevement-epave/sans-controle-technique",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement d’épave", href: "/enlevement-epave" },
  { label: "Sans contrôle technique", href: "/enlevement-epave/sans-controle-technique" },
];

const faqItems = [
  {
    question: "Peut-on enlever une épave sans contrôle technique ?",
    answer:
      "Le contrôle technique n’est pas le cœur du sujet pour une destruction VHU : la procédure et les documents dépendent du cas. Vérifiez les démarches officielles et expliquez votre situation au téléphone.",
  },
  {
    question: "Quels documents prévoir ?",
    answer:
      "Carte grise si disponible et pièce d’identité. En cas de situation particulière, des solutions existent selon le cas (perte/vol/ancien véhicule).",
  },
  {
    question: "Mon véhicule est-il une épave (VHU) ?",
    answer:
      "Le statut dépend du contexte. Si une destruction est engagée, elle doit être conforme et documentée via un circuit agréé.",
  },
  {
    question: "Le certificat de destruction est-il remis ?",
    answer:
      "Dans une procédure VHU conforme, un certificat de destruction (CERFA) est établi via un centre agréé. Conservez-le.",
  },
  {
    question: "Puis-je laisser la voiture sur la voie publique ?",
    answer:
      "Non : cela peut entraîner des procédures et sanctions. Organisez une solution conforme dès que possible selon votre situation.",
  },
];

export default function SansControleTechniquePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="local"
        badge="Cas particulier – sans CT"
        title="Voiture sans contrôle technique : quoi faire si elle devient une épave (VHU) ?"
        subtitle="Cette page donne une vue d’ensemble : documents à préparer, procédure VHU et sources officielles à consulter selon votre situation."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : si le véhicule doit être détruit, la priorité est la procédure VHU conforme (documents, certificat, démarches). Vérifiez la règle à jour sur des sources officielles."
        enResumePoints={[
          "Expliquez votre situation (documents disponibles, état du véhicule).",
          "Ne laissez pas le véhicule sur voie publique.",
          "Procédure VHU conforme + certificat à conserver.",
        ]}
        tocItems={[
          { label: "Cas le plus fréquent", id: "cas" },
          { label: "Documents", id: "documents" },
          { label: "Procédure VHU", id: "procedure" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="cas" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Cas le plus fréquent
              </h2>
              <p>
                Un véhicule sans contrôle technique peut devenir non roulant ou être destiné à la destruction. L’important est d’appliquer une procédure conforme VHU.
              </p>

              <h2 id="documents" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Documents (selon cas)
              </h2>
              <p>
                Voir aussi :{" "}
                <Link href="/enlevement-epave/sans-carte-grise" className="text-blue-600 hover:underline">
                  enlèvement sans carte grise
                </Link>
                .
              </p>

              <h2 id="procedure" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Procédure VHU (vue d’ensemble)
              </h2>
              <p>
                Si une destruction est engagée, un certificat de destruction est établi via un centre agréé. Conservez les preuves et suivez les démarches officielles.
              </p>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères selon situation.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Épave sans contrôle technique" />
    </>
  );
}

