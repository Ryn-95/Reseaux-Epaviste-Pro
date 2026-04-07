import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Enlèvement épave sans carte grise – C'est possible | RéseauEpaviste",
  description:
    "Comment enlever une épave sans carte grise ? Procédure légale, documents alternatifs, cas spéciaux. Guide complet par RéseauEpaviste. Appelez le 07 45 48 24 64.",
  pathname: "/enlevement-epave/sans-carte-grise",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement Épave", href: "/enlevement-epave" },
  { label: "Sans carte grise", href: "/enlevement-epave/sans-carte-grise" },
];

const faqItems = [
  {
    question: "Est-il légalement possible d'enlever une épave sans carte grise ?",
    answer:
      "Oui, sous certaines conditions précises. La loi française prévoit des dispositions pour les cas où la carte grise est perdue, volée ou n'existe plus (véhicules très anciens). Dans ces cas, des documents alternatifs peuvent être acceptés par le centre VHU agréé pour procéder à l'enlèvement et délivrer le certificat de destruction.",
  },
  {
    question: "Quels documents puis-je fournir à la place de la carte grise ?",
    answer:
      "Selon le cas : pour une carte grise perdue, un récépissé de déclaration de perte ou de vol à la gendarmerie/police ; pour un véhicule très ancien sans carte grise (avant 1990 dans certains cas), une déclaration sur l'honneur accompagnée d'une pièce d'identité peut suffire. Contactez-nous pour évaluer votre situation spécifique.",
  },
  {
    question: "Que faire si le véhicule appartient à quelqu'un de décédé ?",
    answer:
      "Dans le cadre d'une succession, l'héritier peut procéder à l'enlèvement en fournissant : acte de décès, certificat d'hérédité ou acte de notoriété établi par un notaire, et sa propre pièce d'identité. La carte grise originale est également bienvenue si elle est disponible parmi les effets du défunt.",
  },
  {
    question: "Combien de temps prend la procédure sans carte grise ?",
    answer:
      "La procédure sans carte grise peut prendre un peu plus de temps qu'un enlèvement standard. Selon le cas de figure et les documents à rassembler, comptez 24 à 72 heures supplémentaires. Certains cas très simples (déclaration de perte récente, véhicule très ancien connu) peuvent être traités rapidement en 24 heures.",
  },
  {
    question: "Puis-je obtenir le certificat de destruction sans carte grise ?",
    answer:
      "Oui, le certificat de destruction peut être délivré même sans carte grise, sous réserve que l'épaviste et le centre VHU aient pu établir l'identité du propriétaire et la légitimité de la cession. Ce document reste essentiel pour votre protection, même dans les cas difficiles.",
  },
];

export default function SansCarteGrisePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="guide"
        badge="Cas particulier – Guide complet"
        title="Enlever une épave sans carte grise : c'est possible"
        subtitle="La perte ou l'absence de carte grise ne bloque pas systématiquement l'enlèvement d'une épave. Découvrez les solutions légales disponibles selon votre situation."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              La carte grise, un document central dans la procédure VHU
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Le <strong>certificat d'immatriculation</strong> (anciennement carte grise) est au
                cœur de la procédure légale d'enlèvement d'épave. Il permet au centre VHU agréé
                d'identifier le véhicule, de vérifier l'identité du propriétaire et d'établir la
                traçabilité administrative requise par la réglementation. En son absence, la
                procédure standard ne peut pas être suivie.
              </p>
              <p>
                Cependant, la loi française prévoit des cas dérogatoires. La doctrine administrative
                et la jurisprudence ont évolué pour permettre l'enlèvement dans certains cas
                particuliers, car interdire totalement l'enlèvement sans carte grise aurait pour
                conséquence de laisser des épaves polluantes sur la voie publique indéfiniment.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Les cas autorisant l'enlèvement sans carte grise
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Cas 1 : Carte grise perdue ou volée",
                  desc: "Si votre carte grise a été perdue ou volée, commencez par déclarer le fait à la gendarmerie ou au commissariat. Avec le récépissé de cette déclaration, certains centres VHU agréés acceptent de procéder à l'enlèvement. Vous devrez également fournir votre pièce d'identité et, si possible, tout document prouvant votre lien avec le véhicule (certificat de contrôle technique, facture d'achat, relevé d'assurance).",
                },
                {
                  title: "Cas 2 : Véhicule très ancien (avant immatriculation obligatoire)",
                  desc: "Pour les véhicules mis en circulation avant la généralisation de la carte grise (avant les années 1950 pour certains types), ou pour des véhicules dont le titre a été perdu il y a très longtemps, une déclaration sur l'honneur accompagnée d'une pièce d'identité peut être acceptée. Le centre VHU réalisera une vérification auprès du fichier SIV (Système d'Immatriculation des Véhicules).",
                },
                {
                  title: "Cas 3 : Véhicule acheté sans carte grise",
                  desc: "Si vous avez acheté un véhicule sans recevoir la carte grise du vendeur, vous êtes dans une situation délicate. Vous devez d'abord tenter de contacter l'ancien propriétaire pour récupérer le document. En cas d'impossibilité, signalez la situation à la préfecture de votre département qui pourra vous orienter. Certains cas peuvent nécessiter une intervention judiciaire.",
                },
                {
                  title: "Cas 4 : Succession et décès du propriétaire",
                  desc: "Si le propriétaire est décédé et que vous n'avez pas retrouvé la carte grise parmi ses affaires, les documents de succession peuvent remplacer la carte grise. Un acte de notoriété ou un certificat d'hérédité, accompagné de l'acte de décès et de votre pièce d'identité, permettront généralement de procéder à l'enlèvement.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Démarches étape par étape
            </h2>
            <ol className="space-y-4">
              {[
                { num: "1", text: "Contactez-nous au 07 45 48 24 64 en expliquant votre situation (perte, vol, succession...)" },
                { num: "2", text: "Rassemblez les documents alternatifs disponibles (déclaration de perte, acte de succession, récépissé de déclaration de vol)" },
                { num: "3", text: "Faites une déclaration à la gendarmerie ou au commissariat si la carte grise est perdue ou volée" },
                { num: "4", text: "Consultez le site ANTS (ants.gouv.fr) pour demander un duplicata si vous êtes toujours le propriétaire légal" },
                { num: "5", text: "Notre équipe évalue votre dossier et vous confirme la faisabilité de l'enlèvement et les délais" },
              ].map((step) => (
                <li key={step.num} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full text-white font-bold flex items-center justify-center flex-shrink-0 text-sm" style={{ backgroundColor: "#D01F2B" }}>
                    {step.num}
                  </span>
                  <p className="text-gray-700 pt-1">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Attention aux pratiques illégales</h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              Certains opérateurs non agréés proposent de prendre en charge votre épave sans
              carte grise, sans formalités. Cette pratique est illégale et vous expose à des risques
              importants : continuité de votre responsabilité civile, absence de certificat de
              destruction, sanctions administratives. Ne faites appel qu'à des épavistes titulaires
              d'un agrément préfectoral, comme tous les membres du réseau RéseauEpaviste.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions – Enlèvement sans carte grise" />
    </>
  );
}
