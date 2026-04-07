import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Qu'est-ce qu'une épave ? Définition légale | WikiEpaviste",
  description:
    "Définition légale d'une épave automobile en France : critères juridiques, textes de loi (art. R543-154 Code Env.), directive 2000/53/CE. Guide informatif WikiEpaviste.",
  pathname: "/wiki-epaviste/definition-epave",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Wiki Épaviste", href: "/wiki-epaviste/definition-epave" },
  { label: "Définition épave", href: "/wiki-epaviste/definition-epave" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Définition d'une épave automobile en France",
  description: "Qu'est-ce qu'une épave automobile en droit français ? Définition légale, critères, textes applicables.",
  author: { "@type": "Organization", name: "RéseauEpaviste" },
  publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
  datePublished: "2024-01-15",
  dateModified: "2026-03-30",
};

export default function DefinitionEpavePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <GuideWikiArticleLayout
        chapapo="Guide informatif : comprenez ce qu’est une épave selon le droit français, et ce que cela implique pour le traitement d’un VHU."
        tocItems={[
          { label: "Définition légale", id: "definition-legale" },
          { label: "Directive 2000/53/CE", id: "directive-2000-53" },
          { label: "Épave vs mauvais état", id: "distinction-epave" },
          { label: "Obligations du propriétaire", id: "obligations-legales" },
          { label: "Références légales", id: "references-legales" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
          {/* Badge wiki */}
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              WikiEpaviste – Article informatif
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
            Définition d'une épave automobile en France
          </h1>

          {/* Définition courte */}
          <div className="bg-gray-50 border-l-4 rounded-r-xl p-5 mb-8" style={{ borderColor: "#D01F2B" }}>
            <p className="font-semibold text-gray-800">
              En résumé : une <strong>épave automobile</strong> est un véhicule terrestre à moteur
              dont la valeur marchande est nulle ou inférieure au coût de sa remise en état, ou qui
              ne peut plus circuler légalement.
            </p>
          </div>

          {/* Résumé 3 points */}
          <div className="bg-blue-50 rounded-xl p-5 mb-10 border border-blue-100">
            <h2 className="font-bold text-blue-800 mb-3">En 3 points clés :</h2>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start gap-2"><span className="font-bold">1.</span> Une épave est définie légalement par l&apos;article R543-154 du Code de l&apos;environnement comme un &ldquo;véhicule hors d&apos;usage (VHU)&rdquo;.</li>
              <li className="flex items-start gap-2"><span className="font-bold">2.</span> La directive européenne 2000/53/CE fixe le cadre supranational du traitement des VHU.</li>
              <li className="flex items-start gap-2"><span className="font-bold">3.</span> Tout VHU doit être confié à un centre agréé ou à un épaviste agréé sous peine de sanctions.</li>
            </ul>
          </div>

          {/* Article complet */}
          <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
            <h2
              id="definition-legale"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              La définition légale : article R543-154 du Code de l'environnement
            </h2>
            <p>
              En droit français, la notion d'<strong>épave</strong> dans le domaine automobile
              est étroitement liée à celle de <strong>véhicule hors d'usage (VHU)</strong>.
              L'article R543-154 du Code de l'environnement définit le VHU comme « tout véhicule
              terrestre à moteur dont le détenteur se défait, a l'intention de se défaire ou a
              l'obligation de se défaire ».
            </p>
            <p>
              Cette définition est volontairement large pour englober plusieurs situations :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Le propriétaire <strong>décide volontairement</strong> d'abandonner ou de détruire le véhicule</li>
              <li>Le véhicule est dans un état tel que le propriétaire <strong>n'a pas d'autre choix</strong> raisonnable que de s'en débarrasser</li>
              <li>La <strong>réparation est impossible ou économiquement injustifiée</strong> (coût de réparation supérieur à la valeur vénale)</li>
              <li>Le véhicule est <strong>immobilisé définitivement</strong> suite à un accident, un incendie, une inondation ou une panne irréparable</li>
            </ul>

            <h2
              id="directive-2000-53"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              La directive européenne 2000/53/CE : le cadre supranational
            </h2>
            <p>
              Au niveau européen, le traitement des véhicules hors d'usage est régi par la{" "}
              <strong>directive 2000/53/CE du Parlement européen et du Conseil du 18 septembre
              2000</strong> relative aux véhicules hors d'usage. Cette directive constitue le
              socle réglementaire commun à tous les États membres de l'Union européenne.
            </p>
            <p>
              La directive fixe notamment des objectifs ambitieux de valorisation des VHU :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Depuis 2006 : au minimum <strong>85% de la masse</strong> du véhicule doit être réutilisée ou recyclée</li>
              <li>Depuis 2015 : au minimum <strong>95% de la masse</strong> doit être valorisée (réutilisation, recyclage ou autre valorisation)</li>
              <li>Depuis 2015 : au maximum <strong>10% de la masse</strong> peut être éliminée (incinération sans récupération d'énergie ou mise en décharge)</li>
            </ul>
            <p>
              En France, cette directive a été transposée en droit national par le{" "}
              <strong>décret n°2003-727 du 1er août 2003</strong>, codifié aux articles
              R543-153 à R543-165 du Code de l'environnement.
            </p>

            <h2
              id="distinction-epave"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              Distinction entre épave et véhicule en mauvais état
            </h2>
            <p>
              Il est important de distinguer une <strong>épave</strong> (VHU au sens légal) d'un
              simple véhicule en mauvais état mais encore immatriculé et assuré. Un véhicule peut
              être visuellement en mauvais état sans être légalement une épave. De même, un véhicule
              en parfait état mécanique peut devenir une épave si son propriétaire décide de s'en
              défaire sans le vendre.
            </p>
            <p>
              Les critères pratiques permettant de qualifier un véhicule d'épave sont :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Le véhicule est <strong>déclaré en perte totale</strong> par l'assurance (VEI)</li>
              <li>Le coût de réparation est <strong>supérieur à la valeur vénale</strong> estimée</li>
              <li>Le véhicule ne peut plus circuler et son immatriculation est <strong>suspendue ou périmée</strong></li>
              <li>Le propriétaire a exprimé sa <strong>volonté de destruction</strong> (déclaration auprès du centre VHU)</li>
            </ul>

            <h2
              id="obligations-legales"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              Obligations légales du propriétaire d'une épave
            </h2>
            <p>
              En droit français, le propriétaire d'un VHU est soumis à plusieurs obligations légales :
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Obligation de remise à un centre agréé :</strong> le VHU doit être confié à
                un centre VHU agréé préfecture ou à un collecteur agréé. La remise à tout autre
                opérateur est illégale.
              </li>
              <li>
                <strong>Obligation de délivrance de la carte grise :</strong> lors de la remise du VHU,
                le propriétaire doit remettre la carte grise barrée au centre VHU agréé.
              </li>
              <li>
                <strong>Obligation de radiation :</strong> dans les 15 jours suivant la remise du
                certificat de destruction, le propriétaire doit déclarer la destruction du véhicule
                auprès de l'ANTS.
              </li>
            </ol>

            <div className="bg-[#F8F8F8] rounded-xl p-6 border border-gray-200 mt-8">
              <h3 className="font-bold text-gray-800 mb-3">Besoin d'enlever une épave ?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Si vous pensez que votre véhicule correspond à la définition d'une épave, nos
                épavistes agréés peuvent intervenir gratuitement pour l'enlever et vous remettre
                le certificat de destruction officiel.
              </p>
              <a
                href="tel:+33184173218"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition text-sm"
                style={{ backgroundColor: "#D01F2B" }}
              >
                Appeler le 01 84 17 32 18 – Gratuit
              </a>
            </div>

            <h2
              id="references-legales"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              Références légales
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Code de l'environnement, articles R543-153 à R543-165</li>
              <li>Directive 2000/53/CE du Parlement européen et du Conseil du 18 septembre 2000</li>
              <li>Décret n°2003-727 du 1er août 2003 relatif à la construction des véhicules et à l'élimination des véhicules hors d'usage</li>
              <li>Arrêté du 2 mai 2012 relatif aux agréments des centres VHU et des broyeurs</li>
            </ul>

            <OfficialSourcesBlock
              title="Sources officielles à consulter"
              intro="Pour vérifier les textes applicables, vous pouvez consulter directement les sites officiels suivants :"
              sources={[
                {
                  label: "Légifrance – Code de l’environnement",
                  description: "Accès aux versions consolidées des textes relatifs aux VHU.",
                  url: "https://www.legifrance.gouv.fr/",
                },
                {
                  label: "Service-public.fr",
                  description: "Repères pratiques sur les démarches liées au VHU.",
                  url: "https://www.service-public.fr/",
                },
                {
                  label: "ANTS",
                  description: "Portail officiel pour finaliser les démarches après destruction.",
                  url: "https://ants.gouv.fr/",
                },
              ]}
            />

            <ContextualLinksBlock
              title="À lire ensuite"
              links={[
                { href: "/wiki-epaviste/vehicule-hors-usage", label: "Véhicule hors d’usage (VHU)", description: "Définition, droits et obligations du propriétaire." },
                { href: "/wiki-epaviste/loi-code-environnement", label: "Loi & code de l’environnement", description: "Textes applicables et cadre réglementaire." },
                { href: "/enlevement-epave", label: "Enlèvement d’épave", description: "Procédure légale, certificat, documents." },
                { href: "/guides/checklist-dossier-epave", label: "Checklist dossier épave", description: "Préparer l’appel et éviter les blocages (accès/documents)." },
              ]}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/wiki-epaviste/vehicule-hors-usage" className="text-blue-600 hover:underline">
                Véhicule hors d'usage (VHU)
              </Link>{" "}
              ·{" "}
              <Link href="/wiki-epaviste/loi-code-environnement" className="text-blue-600 hover:underline">
                Loi et code de l'environnement
              </Link>
            </p>
          </div>
        </div>
        </article>
      </GuideWikiArticleLayout>
    </>
  );
}
