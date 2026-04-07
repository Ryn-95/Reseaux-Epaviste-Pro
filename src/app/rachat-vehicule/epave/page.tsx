import { buildPageMetadata } from "@/lib/seo/metadata";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Rachat véhicule épave – Quand c’est possible | RéseauEpaviste",
  description:
    "Rachat d’un véhicule épave : dans certains cas, une reprise peut être envisagée selon l’état du véhicule et la valeur résiduelle des pièces. Demandez un rappel. 07 45 48 24 64.",
  pathname: "/rachat-vehicule/epave",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Rachat véhicule", href: "/rachat-vehicule/epave" },
];

const faqItems = [
  {
    question: "Le rachat d’une épave est-il toujours possible ?",
    answer:
      "Non. En pratique, la reprise avec paiement dépend de l’état du véhicule et de la valeur résiduelle des pièces. Dans la majorité des situations VHU, l’enlèvement peut être pris en charge sans paiement direct en échange.",
  },
  {
    question: "Quels critères influencent le rachat ?",
    answer:
      "L’état général, la présence de pièces valorisables, le kilométrage, l’historique et la difficulté d’accès. TODO : préciser vos critères opérationnels.",
  },
  {
    question: "Le certificat de destruction est-il fourni ?",
    answer:
      "Oui. Quel que soit le traitement, l’opération doit être encadrée et le certificat de destruction officiel est remis.",
  },
  {
    question: "Que faire si je n’ai pas la carte grise ?",
    answer:
      "Selon le contexte, des solutions administratives peuvent exister. Nous vous orientons au téléphone sur la procédure applicable.",
  },
];

export default function RachatVehiculeEpavePage() {
  return (
    <>
      <ServiceJsonLd name="Rachat véhicule épave" url="https://reseauepaviste.fr/rachat-vehicule/epave" areaServed="France" />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Selon cas – reprise possible"
        title="Rachat d’un véhicule épave : quand c’est envisageable"
        subtitle="Vous avez un véhicule immobilisé/épave ? Dans certains cas, une reprise avec paiement peut être étudiée selon la valeur résiduelle. Sinon, l’enlèvement VHU reste encadré et le certificat officiel est remis."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-14 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Qui est concerné ?</h2>
            <p className="text-sm text-[#1F2933] leading-relaxed mt-3">
              Propriétaires d’un véhicule en fin de vie (épave / VHU) souhaitant savoir si une reprise peut être proposée, ou si l’enlèvement VHU encadré est la solution la plus adaptée.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Quand une reprise avec paiement est possible ?</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#374151] list-disc list-inside">
              <li>Pièces encore valorisables (mécanique/équipements)</li>
              <li>Accès et conditions d’enlèvement compatibles</li>
              <li>Contexte administratif permettant la prise en charge</li>
            </ul>
            <p className="text-xs text-[#6B7280] mt-3">
              TODO : ajouter vos conditions exactes et votre processus d’évaluation (photos, infos véhicule, délais).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Comment se déroule l’étude ?</h2>
            <div className="mt-3 space-y-3">
              {[
                { title: "1. Contact", desc: "Vous indiquez le type de véhicule, l’état et la localisation." },
                { title: "2. Évaluation", desc: "On vérifie la faisabilité et, si applicable, on étudie une reprise." },
                { title: "3. Prise en charge", desc: "Enlèvement et documents, avec remise du certificat de destruction officiel." },
              ].map((s) => (
                <div key={s.title} className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-lg p-5">
                  <div className="font-bold text-[#111827]">{s.title}</div>
                  <div className="text-sm text-[#374151] mt-2 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Demander un rappel</h2>
            <p className="text-sm text-[#1F2933] leading-relaxed mt-3">
              Pour aller plus vite, préparez : type de véhicule, année, état et accès au lieu.
            </p>
            <div className="mt-5 max-w-3xl">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <ContextualLinksBlock
            title="Liens utiles (VHU & démarches)"
            links={[
              { href: "/enlevement-epave", label: "Enlèvement d’épave (VHU)", description: "Procédure encadrée et certificat." },
              { href: "/centre-vhu", label: "Centres VHU agréés", description: "Traitement et obligations." },
              { href: "/guides/checklist-dossier-epave", label: "Checklist dossier épave", description: "Documents et accessibilité." },
              { href: "/faq", label: "FAQ", description: "Questions fréquentes (documents, délais, carte grise…)."},
            ]}
          />
        </div>
      </div>

      <FAQSection items={faqItems} title="Questions fréquentes – Rachat véhicule épave" />
    </>
  );
}

