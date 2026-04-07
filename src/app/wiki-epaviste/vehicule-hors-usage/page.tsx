import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Véhicule hors d'usage (VHU) – Définition et droits | WikiEpaviste",
  description:
    "Qu'est-ce qu'un véhicule hors d'usage (VHU) ? Définition légale, droits du propriétaire, obligations, certificat de destruction. Guide informatif WikiEpaviste.",
  pathname: "/wiki-epaviste/vehicule-hors-usage",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Wiki Épaviste", href: "/wiki-epaviste/definition-epave" },
  { label: "Véhicule hors d'usage", href: "/wiki-epaviste/vehicule-hors-usage" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Véhicule hors d'usage (VHU) : ce que dit la loi",
  description: "Définition légale du véhicule hors d'usage, droits du propriétaire, obligations et procédure de destruction.",
  author: { "@type": "Organization", name: "RéseauEpaviste" },
  publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
  datePublished: "2024-01-20",
  dateModified: "2026-03-30",
};

export default function VehiculeHorsUsagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />

      <GuideWikiArticleLayout
        chapapo="Comprenez le statut juridique du véhicule hors d’usage (VHU) : définition, droits, obligations et rôle des opérateurs agréés."
        tocItems={[
          { label: "Définition légale", id: "definition-legale-vhu" },
          { label: "Types de véhicules", id: "types-vhu" },
          { label: "Droits du propriétaire", id: "droits-proprietaire" },
          { label: "Obligations du propriétaire", id: "obligations-proprietaire" },
          { label: "Références légales", id: "references-legales-vhu" },
        ]}
      >
        <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              WikiEpaviste – Article informatif
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
            Véhicule hors d'usage : ce que dit la loi
          </h1>

          <div className="bg-gray-50 border-l-4 rounded-r-xl p-5 mb-8" style={{ borderColor: "#D01F2B" }}>
            <p className="font-semibold text-gray-800">
              Un <strong>véhicule hors d'usage (VHU)</strong> est tout véhicule à moteur dont
              son propriétaire décide de se défaire définitivement, qu'il soit encore
              fonctionnel ou non.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 mb-10 border border-blue-100">
            <h2 className="font-bold text-blue-800 mb-3">En 3 points clés :</h2>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start gap-2"><span className="font-bold">1.</span> Le statut de VHU est déclenché par la <strong>décision du propriétaire</strong> de s'en défaire, indépendamment de l'état du véhicule.</li>
              <li className="flex items-start gap-2"><span className="font-bold">2.</span> Tout VHU doit être remis à un <strong>centre agréé préfecture</strong> qui délivre un certificat de destruction officiel.</li>
              <li className="flex items-start gap-2"><span className="font-bold">3.</span> Les <strong>constructeurs automobiles</strong> ont l'obligation légale de reprendre leurs véhicules en fin de vie, souvent via des réseaux partenaires.</li>
            </ul>
          </div>

          <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
            <h2 id="definition-legale-vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Définition légale du VHU
            </h2>
            <p>
              La notion de <strong>véhicule hors d'usage (VHU)</strong> est définie par l'article
              R543-154 du Code de l'environnement comme tout véhicule terrestre à moteur « dont
              le détenteur se défait, a l'intention de se défaire ou a l'obligation de se
              défaire ». Cette définition est issue de la transposition en droit français de la
              directive européenne 2000/53/CE.
            </p>
            <p>
              Contrairement à l'idée reçue, un VHU n'est pas nécessairement un véhicule en
              mauvais état ou ne pouvant plus rouler. Un véhicule en bon état de fonctionnement
              peut être qualifié de VHU si son propriétaire décide de s'en débarrasser sans
              le vendre (démolition volontaire, véhicule de collection mis au rebut, etc.).
            </p>

            <h2 id="types-vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Types de véhicules concernés
            </h2>
            <p>
              La réglementation VHU s'applique à l'ensemble des <strong>véhicules terrestres
              à moteur</strong>, soit notamment :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Les <strong>voitures particulières</strong> (catégorie M1)</li>
              <li>Les <strong>véhicules utilitaires légers</strong> de moins de 3,5 tonnes (catégorie N1)</li>
              <li>Les <strong>tricycles à moteur</strong> (catégorie L5e)</li>
              <li>Certaines catégories de <strong>véhicules agricoles</strong> et industriels dans des conditions spécifiques</li>
            </ul>
            <p>
              Les véhicules exclus du champ d'application de la réglementation VHU comprennent
              notamment les véhicules à moteur à deux roues (motos, scooters) dans certains
              contextes, bien que des dispositions spécifiques leur soient souvent applicables
              en pratique.
            </p>

            <h2
              id="droits-proprietaire"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              Droits du propriétaire d'un VHU
            </h2>
            <p>
              Le propriétaire d'un véhicule hors d'usage bénéficie de plusieurs droits importants :
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Droit à la gratuité de l'enlèvement :</strong> les constructeurs automobiles
                sont légalement tenus d'organiser la reprise gratuite de leurs véhicules en fin de
                vie, directement ou via des réseaux de collecte agréés.
              </li>
              <li>
                <strong>Droit au certificat de destruction :</strong> lors de la remise du VHU à
                un centre agréé, le propriétaire a le droit de recevoir gratuitement le certificat
                de destruction CERFA n°14365.
              </li>
              <li>
                <strong>Droit au choix du centre agréé :</strong> le propriétaire est libre de
                choisir le centre VHU agréé de son choix, dans la mesure où ce dernier accepte
                la prise en charge.
              </li>
              <li>
                <strong>Droit à l'information :</strong> les centres VHU agréés sont tenus
                d'informer le propriétaire sur la procédure de destruction et les documents requis.
              </li>
            </ol>

            <h2
              id="obligations-proprietaire"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              Obligations du propriétaire d'un VHU
            </h2>
            <p>
              En contrepartie de ces droits, le propriétaire d'un VHU est soumis à plusieurs
              obligations :
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Obligation de remise à un opérateur agréé :</strong> le VHU ne peut être
                remis qu'à un centre VHU agréé ou à un collecteur agréé. La remise à un ferrailleur
                non agréé, même gratuite, est illégale.
              </li>
              <li>
                <strong>Obligation de fournir le certificat d'immatriculation :</strong> lors de
                la remise, la carte grise doit être remise barrée et annotée.
              </li>
              <li>
                <strong>Obligation de radiation :</strong> dans les 15 jours suivant l'obtention du
                certificat de destruction, le propriétaire doit déclarer la destruction à l'ANTS.
              </li>
            </ol>

            <h2
              id="responsabilite-rep"
              className="text-2xl font-bold"
              style={{ color: "#1A1A2E" }}
            >
              La responsabilité élargie des producteurs (REP automobile)
            </h2>
            <p>
              La directive 2000/53/CE et son décret de transposition français instaurent le principe
              de la <strong>responsabilité élargie des producteurs (REP)</strong> dans le secteur
              automobile. Les constructeurs et importateurs de véhicules sont responsables de la
              fin de vie de leurs véhicules mis sur le marché.
            </p>
            <p>
              Concrètement, cela signifie que les constructeurs doivent :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Mettre en place des <strong>systèmes de collecte</strong> des VHU sur l'ensemble du territoire</li>
              <li>Financer (directement ou indirectement) la <strong>reprise gratuite</strong> des véhicules hors d'usage</li>
              <li>Concevoir leurs véhicules de manière à faciliter le <strong>démantèlement et le recyclage</strong> en fin de vie</li>
              <li>Tenir des <strong>registres et produire des rapports</strong> sur les VHU collectés et traités</li>
            </ul>

            <div className="bg-[#F8F8F8] rounded-xl p-6 border border-gray-200 mt-8">
              <h3 className="font-bold text-gray-800 mb-3">Votre VHU, notre expertise</h3>
              <p className="text-gray-600 text-sm mb-4">
                RéseauEpaviste connecte les propriétaires de VHU avec des épavistes agréés pour
                un enlèvement gratuit, légal et respectueux de l'environnement.
              </p>
              <a
                href="tel:+33745482464"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition text-sm"
                style={{ backgroundColor: "#D01F2B" }}
              >
                Appeler le 07 45 48 24 64 – Gratuit
              </a>
            </div>

            <h2 id="references-legales-vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
              Références légales
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Code de l'environnement, articles L541-1 et suivants, R543-153 à R543-165</li>
              <li>Directive 2000/53/CE du Parlement européen et du Conseil, 18 septembre 2000</li>
              <li>Décret n°2003-727 du 1er août 2003</li>
            </ul>

            <OfficialSourcesBlock
              title="Textes officiels (référence VHU)"
              intro="Vous pouvez consulter les sites institutionnels suivants pour vérifier le cadre réglementaire :"
              sources={[
                {
                  label: "Légifrance – Code de l’environnement",
                  description:
                    "Textes consolidés liés aux véhicules hors d’usage.",
                  url: "https://www.legifrance.gouv.fr/",
                },
                {
                  label: "EUR-Lex – Directive 2000/53/CE",
                  description:
                    "Texte européen fondateur relatif aux VHU (ELV).",
                  url: "https://eur-lex.europa.eu/",
                },
                {
                  label: "Service-public.fr",
                  description:
                    "Démarches et repères pratiques selon votre situation.",
                  url: "https://www.service-public.fr/",
                },
              ]}
            />

            <ContextualLinksBlock
              title="Liens utiles (services liés)"
              links={[
                { href: "/enlevement-epave", label: "Enlèvement d’épave (VHU)", description: "Procédure, documents, cas particuliers." },
                { href: "/centre-vhu", label: "Centres VHU agréés", description: "Rôle des centres, dépollution, certificat." },
                { href: "/epaviste/ile-de-france", label: "Épaviste Île‑de‑France", description: "Accès aux pages locales par département IDF." },
                { href: "/faq", label: "FAQ épaviste", description: "Réponses rapides (documents, délais, fourrière, etc.)." },
              ]}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/wiki-epaviste/definition-epave" className="text-blue-600 hover:underline">
                Définition d'une épave
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
