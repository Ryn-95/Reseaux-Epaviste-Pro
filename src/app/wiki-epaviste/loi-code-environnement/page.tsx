import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Épave et code de l'environnement – Textes légaux | WikiEpaviste",
  description:
    "Réglementation française sur les épaves automobiles : articles L541, R543, décret 2003-727, directive 2000/53/CE. Textes légaux commentés par WikiEpaviste.",
  pathname: "/wiki-epaviste/loi-code-environnement",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Wiki Épaviste", href: "/wiki-epaviste/definition-epave" },
  { label: "Loi code environnement", href: "/wiki-epaviste/loi-code-environnement" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Réglementation épave : articles L.541 et suivants du code de l'environnement",
  description: "Les textes légaux applicables aux épaves automobiles en France : articles L.541, R543-154, décret 2003-727, directive européenne 2000/53/CE.",
  author: { "@type": "Organization", name: "RéseauEpaviste" },
  publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
  datePublished: "2024-02-01",
  dateModified: "2026-03-30",
};

const texts = [
  {
    ref: "Directive 2000/53/CE",
    title: "Directive européenne relative aux véhicules hors d'usage",
    date: "18 septembre 2000",
    desc: "Texte fondateur du droit européen des VHU. Cette directive fixe les objectifs de recyclage (95% de la masse depuis 2015), instaure le principe de la responsabilité élargie des producteurs, et définit les obligations des États membres en matière de collecte et traitement des véhicules hors d'usage.",
  },
  {
    ref: "Décret n°2003-727",
    title: "Décret relatif à la construction des véhicules et à l'élimination des VHU",
    date: "1er août 2003",
    desc: "Texte de transposition en droit français de la directive 2000/53/CE. Il définit les obligations des constructeurs, importateurs, distributeurs et démolisseurs agréés. Il crée le régime d'agrément préfectoral des centres VHU et fixe les conditions de délivrance du certificat de destruction.",
  },
  {
    ref: "Articles R543-153 à R543-165",
    title: "Code de l'environnement – Section sur les véhicules hors d'usage",
    date: "Codifiés depuis 2003",
    desc: "Ces articles constituent le corpus réglementaire central applicable aux VHU. L'article R543-154 définit le VHU. L'article R543-157 fixe les conditions d'agrément des centres VHU. L'article R543-162 précise les obligations de délivrance du certificat de destruction.",
  },
  {
    ref: "Articles L541-1 et suivants",
    title: "Code de l'environnement – Titre IV sur les déchets",
    date: "Version consolidée",
    desc: "Le titre IV du livre V du Code de l'environnement constitue la base légale de la politique française des déchets. Les véhicules hors d'usage y sont classifiés parmi les déchets spéciaux nécessitant une filière de traitement spécifique.",
  },
  {
    ref: "Arrêté du 2 mai 2012",
    title: "Arrêté relatif aux agréments des centres VHU et des broyeurs",
    date: "2 mai 2012",
    desc: "Ce texte précise les conditions techniques et administratives requises pour l'obtention et le maintien de l'agrément préfectoral. Il fixe les normes d'équipement, les procédures de contrôle et les obligations de reporting des centres VHU.",
  },
];

export default function LoiCodeEnvironnementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />

      <GuideWikiArticleLayout
        chapapo="Textes légaux & logique de la réglementation VHU : architecture des normes, textes applicables, sanctions et évolutions récentes."
        tocItems={[
          { label: "Architecture de la réglementation", id: "architecture-vhu" },
          { label: "Principaux textes applicables", id: "textes-applicables" },
          { label: "Régime des sanctions", id: "regime-sanctions" },
          { label: "Évolutions réglementaires", id: "evolutions-reglementaires" },
        ]}
      >
        <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              WikiEpaviste – Article juridique
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
            Réglementation épave : articles L.541 et suivants
          </h1>

          <div className="bg-gray-50 border-l-4 rounded-r-xl p-5 mb-8" style={{ borderColor: "#D01F2B" }}>
            <p className="font-semibold text-gray-800">
              La réglementation française sur les épaves automobiles s'articule autour du{" "}
              <strong>Code de l'environnement</strong> (articles L.541-1 et R543-153 à R543-165)
              et de la <strong>directive européenne 2000/53/CE</strong> transposée par le décret
              n°2003-727 du 1er août 2003.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 mb-10 border border-blue-100">
            <h2 className="font-bold text-blue-800 mb-3">En 3 points clés :</h2>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start gap-2"><span className="font-bold">1.</span> Le cadre légal est à <strong>double niveau</strong> : directive européenne 2000/53/CE + droit national français.</li>
              <li className="flex items-start gap-2"><span className="font-bold">2.</span> L'agrément préfectoral des centres VHU est <strong>obligatoire</strong> et régi par arrêté ministériel.</li>
              <li className="flex items-start gap-2"><span className="font-bold">3.</span> Les constructeurs automobiles ont une <strong>responsabilité légale</strong> dans la filière de traitement des VHU.</li>
            </ul>
          </div>

          <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
            <h2 id="architecture-vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Architecture de la réglementation VHU
            </h2>
            <p>
              La réglementation applicable aux véhicules hors d'usage s'organise selon une
              <strong> hiérarchie des normes</strong> à plusieurs niveaux :
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Niveau supranational :</strong> directive européenne 2000/53/CE du Parlement européen et du Conseil</li>
              <li><strong>Niveau législatif national :</strong> articles L.541-1 et suivants du Code de l'environnement</li>
              <li><strong>Niveau réglementaire :</strong> décret n°2003-727 du 1er août 2003 (codifié aux articles R543-153 à R543-165)</li>
              <li><strong>Niveau technique :</strong> arrêté du 2 mai 2012 sur les conditions d'agrément</li>
            </ol>

            {/* Textes légaux */}
            <h2 id="textes-applicables" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Les principaux textes applicables
            </h2>
            <div className="space-y-4">
              {texts.map((t, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-800 text-sm">{t.title}</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded ml-2 flex-shrink-0">{t.ref}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Date : {t.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="regime-sanctions" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Le régime des sanctions
            </h2>
            <p>
              Le non-respect de la réglementation VHU expose les contrevenants à des sanctions
              significatives. Selon l'article L541-46 du Code de l'environnement, le fait de
              remettre ou d'accepter des VHU en dehors des circuits agréés est puni de{" "}
              <strong>2 ans d'emprisonnement et de 75 000 € d'amende</strong> pour les
              professionnels. Des sanctions administratives (suspension, retrait d'agrément)
              peuvent également s'appliquer aux centres VHU ne respectant pas leurs obligations.
            </p>
            <p>
              Pour les particuliers, les sanctions sont moins sévères mais réelles : responsabilité
              civile maintenue tant que le véhicule est immatriculé à leur nom, amendes pour
              stationnement gênant ou abandon de déchets, et mise en demeure de prise en charge.
            </p>

            <h2 id="evolutions-reglementaires" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Évolutions réglementaires récentes
            </h2>
            <p>
              La réglementation VHU continue d'évoluer. Au niveau européen, la directive
              2000/53/CE a été révisée plusieurs fois et de nouvelles propositions visent à
              renforcer encore les exigences en matière de recyclage et de recyclabilité des
              véhicules. La Commission européenne a notamment proposé en 2023 un nouveau
              règlement sur la fin de vie des véhicules (End-of-Life Vehicles Regulation –
              ELV Regulation) visant à remplacer la directive actuelle.
            </p>
            <p>
              En France, la <strong>loi AGEC (Anti-Gaspillage pour une Économie Circulaire)</strong>
              du 10 février 2020 a renforcé les obligations des constructeurs automobiles en matière
              d'écoconception et de transparence sur la recyclabilité de leurs véhicules.
            </p>

            <div className="bg-[#F8F8F8] rounded-xl p-6 border border-gray-200 mt-8">
              <h3 className="font-bold text-gray-800 mb-3">Besoin d'un épaviste agréé conforme à la loi ?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tous les épavistes du réseau RéseauEpaviste sont titulaires de l'agrément
                préfectoral requis et respectent intégralement la réglementation en vigueur.
              </p>
              <a
                href="tel:+33745482464"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition text-sm"
                style={{ backgroundColor: "#D01F2B" }}
              >
                Appeler le 07 45 48 24 64 – Gratuit
              </a>
            </div>
          </div>

          <OfficialSourcesBlock
            title="Textes officiels (cadre VHU)"
            intro="Ces liens permettent de vérifier directement les textes et repères institutionnels :"
            sources={[
              {
                label: "Légifrance – Code de l’environnement",
                description:
                  "Accès aux articles et versions consolidées liées aux VHU.",
                url: "https://www.legifrance.gouv.fr/",
              },
              {
                label: "EUR-Lex – Directive 2000/53/CE",
                description:
                  "Texte de référence au niveau européen sur les véhicules hors d’usage.",
                url: "https://eur-lex.europa.eu/",
              },
              {
                label: "Service-public.fr",
                description: "Repères pratiques sur les démarches et obligations.",
                url: "https://www.service-public.fr/",
              },
            ]}
          />

          <ContextualLinksBlock
            title="Liens contextuels (procédure VHU)"
            links={[
              { href: "/wiki-epaviste/definition-epave", label: "Définition d’une épave", description: "Comprendre la notion et ses implications." },
              { href: "/wiki-epaviste/vehicule-hors-usage", label: "Véhicule hors d’usage (VHU)", description: "Droits, obligations, certificat." },
              { href: "/centre-vhu", label: "Centres VHU agréés", description: "Rôle, obligations, traitement." },
              { href: "/faq", label: "FAQ", description: "Réponses rapides et cas particuliers." },
            ]}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/wiki-epaviste/definition-epave" className="text-blue-600 hover:underline">
                Définition d'une épave
              </Link>{" "}
              ·{" "}
              <Link href="/wiki-epaviste/vehicule-hors-usage" className="text-blue-600 hover:underline">
                Véhicule hors d'usage
              </Link>
            </p>
          </div>
        </div>
        </article>
      </GuideWikiArticleLayout>
    </>
  );
}
