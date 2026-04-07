import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Épave véhicule gagé – Enlèvement possible ? | RéseauEpaviste",
  description:
    "Votre épave est toujours sous crédit auto ? Découvrez comment procéder légalement pour enlever un véhicule gagé. Guide et démarches par RéseauEpaviste.",
  pathname: "/enlevement-epave/vehicule-gage",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement Épave", href: "/enlevement-epave" },
  { label: "Véhicule gagé", href: "/enlevement-epave/vehicule-gage" },
];

const faqItems = [
  {
    question: "Puis-je faire enlever mon épave si mon crédit auto n'est pas soldé ?",
    answer:
      "Non, pas directement. Un véhicule gagé est juridiquement la garantie du crédit en cours. Vous ne pouvez pas le céder (même pour destruction) sans l'accord de l'organisme de crédit. Vous devez d'abord contacter votre banque ou organisme de financement pour obtenir une mainlevée du gage ou solder le crédit.",
  },
  {
    question: "Comment obtenir la mainlevée du gage ?",
    answer:
      "Pour obtenir la mainlevée, vous devez soit solder entièrement le crédit restant, soit négocier avec votre organisme de crédit un accord de cession de la garantie. Dans certains cas d'accident grave ou de vol, l'assurance peut couvrir le solde restant du crédit. Contactez votre assureur et votre organisme de crédit simultanément.",
  },
  {
    question: "Mon véhicule est accidenté et gagé, que fait l'assurance ?",
    answer:
      "En cas de perte totale du véhicule (VEI – Véhicule Économiquement Irréparable), votre assurance verse une indemnisation basée sur la valeur vénale du véhicule au moment de l'accident. Si cette indemnisation est inférieure au solde restant du crédit, vous restez redevable de la différence envers l'organisme de crédit, sauf si vous avez souscrit une assurance 'gap' ou 'valeur à neuf'.",
  },
  {
    question: "Que se passe-t-il si j'abandonne l'épave sans solder le crédit ?",
    answer:
      "Abandonner un véhicule gagé sans solder le crédit est illégal et vous expose à des poursuites civiles de la part de l'organisme de crédit. De plus, vous restez responsable des éventuelles infractions liées au véhicule tant qu'il est immatriculé à votre nom. Il est impératif de régulariser la situation avant tout enlèvement.",
  },
  {
    question: "Combien de temps faut-il pour régulariser un véhicule gagé ?",
    answer:
      "Les délais varient selon l'organisme de crédit et la situation. En général, une mainlevée de gage après solde du crédit est délivrée en 15 à 30 jours ouvrés. En cas d'accident et d'intervention de l'assurance, la procédure peut prendre 1 à 3 mois. Anticipez et lancez les démarches le plus tôt possible.",
  },
];

export default function VehiculeGagePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="guide"
        badge="Cas particulier – Crédit en cours"
        title="Enlèvement d'une épave avec crédit en cours (véhicule gagé)"
        subtitle="Un véhicule gagé ne peut pas être cédé pour destruction sans accord préalable de l'organisme de crédit. Voici la procédure légale à suivre étape par étape."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Qu'est-ce qu'un gage sur véhicule ?
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Lorsque vous achetez un véhicule à crédit, l'organisme de financement (banque,
                organisme de crédit auto) inscrit un <strong>gage</strong> sur le véhicule dans
                le registre national. Ce gage signifie que le véhicule sert de garantie pour le
                remboursement du prêt. Tant que le crédit n'est pas entièrement remboursé,
                l'organisme de crédit détient un droit sur le véhicule.
              </p>
              <p>
                Concrètement, le gage interdit au propriétaire de céder le véhicule sans l'accord
                du créancier. Cela inclut la vente, la donation, et également la cession pour
                destruction à un centre VHU. Un épaviste agréé sérieux refusera de prendre en
                charge un véhicule gagé sans preuve de mainlevée, car il s'exposerait lui-même
                à des poursuites juridiques.
              </p>
              <p>
                En France, le gage automobile est régi par l'<strong>article L521-1 et suivants
                du Code de la consommation</strong>. Il est inscrit au Registre du Commerce et
                des Sociétés et visible sur la carte grise du véhicule (mention figurant dans
                la section relative au financement).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Procédure pour enlever une épave gagée
            </h2>
            <ol className="space-y-4">
              {[
                { num: "1", title: "Vérifiez l'existence du gage", text: "Consultez votre carte grise ou le service Histovec (histovec.interieur.gouv.fr) pour vérifier si un gage est bien enregistré sur votre véhicule." },
                { num: "2", title: "Contactez votre organisme de crédit", text: "Appelez votre banque ou organisme de financement pour expliquer la situation (épave, accident, inondation...) et demandez la procédure de mainlevée." },
                { num: "3", title: "Contactez votre assureur", text: "Si l'épave résulte d'un sinistre, déclarez-le immédiatement à votre assurance. En cas de perte totale, l'assurance verse une indemnisation qui peut couvrir tout ou partie du solde du crédit." },
                { num: "4", title: "Obtenez la mainlevée du gage", text: "Une fois le crédit soldé ou un accord conclu avec l'organisme de crédit, obtenez la mainlevée du gage par écrit. Ce document prouve que le véhicule n'est plus soumis à garantie." },
                { num: "5", title: "Procédez à l'enlèvement", text: "Avec la mainlevée en main, contactez RéseauEpaviste au 01 84 17 32 18. L'enlèvement peut être organisé normalement, avec remise du certificat de destruction CERFA." },
              ].map((step) => (
                <li key={step.num} className="flex gap-4 items-start bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                  <span className="w-8 h-8 rounded-full text-white font-bold flex items-center justify-center flex-shrink-0 text-sm" style={{ backgroundColor: "#D01F2B" }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions – Véhicule gagé et crédit auto" />
    </>
  );
}
