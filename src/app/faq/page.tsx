import FAQSection from "@/components/FAQSection";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "FAQ Épaviste Agréé VHU | Réseaux Épaviste",
  description:
    "Consultez notre FAQ sur l'enlèvement d'épave gratuit. Agréé VHU, certificat CERFA, intervention rapide. Obtenez toutes les réponses à vos questions.",
  pathname: "/faq",
});

const faqItems = [
  { question: "L'enlèvement d'épave est-il vraiment gratuit ?", answer: "Oui, l'enlèvement d'épave par un centre VHU agréé est entièrement gratuit pour le propriétaire. Les centres VHU se rémunèrent grâce à la valorisation des métaux et des pièces recyclables récupérés sur le véhicule. Aucun frais de déplacement, ni de main-d'œuvre ne vous sera demandé." },
  { question: "Quels documents dois-je fournir pour l'enlèvement ?", answer: "Vous devez présenter la carte grise (certificat d'immatriculation) barrée avec la mention manuscrite 'vendu/cédé le [date]' et votre signature, ainsi qu'une pièce d'identité valide (carte nationale d'identité ou passeport). Si le propriétaire ne peut pas être présent, une procuration écrite et une copie de sa pièce d'identité sont nécessaires." },
  { question: "Que se passe-t-il si je n'ai plus la carte grise ?", answer: "En cas de perte ou de vol de la carte grise, plusieurs solutions existent. Pour les véhicules de moins de 15 ans, vous devez en général fournir un duplicata ou une attestation de l'ANTS. Pour les véhicules plus anciens, certaines exceptions s'appliquent. Contactez-nous au 07 45 48 24 64 pour trouver la solution adaptée à votre situation." },
  { question: "Puis-je faire enlever un véhicule qui ne m'appartient pas ?", answer: "Non, en principe l'enlèvement doit être demandé par le propriétaire légal du véhicule. Cependant, avec une procuration écrite et notariée du propriétaire, ou dans le cas d'une succession, d'autres personnes peuvent initier la démarche. Contactez-nous pour étudier votre cas particulier." },
  { question: "Quel est le délai d'intervention en Île-de-France ?", answer: "En Île-de-France, notre délai moyen d'intervention est de 30 minutes à 2 heures selon votre localisation et la disponibilité de nos équipes. En province, le délai est généralement de 24 à 48 heures. Nous intervenons 7 jours sur 7 et jours fériés." },
  { question: "Intervenez-vous le week-end et les jours fériés ?", answer: "Oui, notre service est disponible 24 heures sur 24 et 7 jours sur 7, y compris les week-ends, les jours fériés et la nuit. Certains départements peuvent avoir des disponibilités réduites hors heures ouvrables, mais nous nous engageons à traiter toutes les demandes dans les meilleurs délais." },
  { question: "Qu'est-ce que le certificat de destruction CERFA ?", answer: "Le certificat de destruction est un document officiel (formulaire CERFA n°14365) délivré par le centre VHU agréé attestant que le véhicule a bien été réceptionné pour destruction. Ce document est fondamental : il libère l'ancien propriétaire de toute responsabilité civile, pénale et fiscale liée au véhicule. Il permet également de procéder à la radiation du véhicule auprès de l'ANTS." },
  { question: "Combien de temps garder le certificat de destruction ?", answer: "Il est recommandé de conserver le certificat de destruction CERFA à vie, ou au minimum pendant 10 ans. Ce document constitue la preuve irréfutable que vous avez remis votre véhicule à un professionnel agréé pour destruction. En cas de litige futur (amende de stationnement envoyée par erreur, problème d'assurance...), il est votre seule protection." },
  { question: "Puis-je obtenir de l'argent pour mon épave ?", answer: "Dans la majorité des cas, l'enlèvement est gratuit mais sans contrepartie financière de la part du centre VHU. Cependant, si votre véhicule présente encore des pièces en bon état ou une valeur résiduelle significative (faible kilométrage malgré une carrosserie endommagée, pièces recherchées), une reprise avec paiement peut parfois être envisagée. Renseignez-vous directement lors de l'appel." },
  { question: "Que deviennent les pièces de mon épave ?", answer: "Les pièces encore en bon état de fonctionnement sont démontées et vendues comme pièces de réemploi. Les fluides (huile, carburant, liquide de frein...) sont collectés et traités par des filières spécialisées. Les métaux ferreux et non-ferreux sont triés et envoyés en fonderie pour être recyclés. La réglementation impose un taux de valorisation minimum de 95% de la masse du véhicule." },
  { question: "Puis-je enlever un véhicule sans roues ou en très mauvais état ?", answer: "Oui, nos épavistes sont équipés pour enlever tous types de véhicules, même sans roues, renversés, accidentés, calcinés ou partiellement démantelés. Certaines situations très complexes (véhicule enfoui, accès très difficile) peuvent nécessiter du matériel spécial et faire l'objet d'un devis." },
  { question: "Est-ce que votre service couvre la province ?", answer: "Oui, notre réseau couvre 48 départements français, dont l'ensemble de l'Île-de-France, les grandes agglomérations (Lyon, Marseille, Bordeaux, Toulouse, Nantes, Lille, Strasbourg) et de nombreuses zones rurales. En dehors de nos zones de couverture directe, nous pouvons vous orienter vers un partenaire agréé local." },
  { question: "Mon véhicule est en fourrière, que faire ?", answer: "Si votre véhicule est en fourrière et que vous souhaitez y renoncer pour le faire détruire, vous devez d'abord contacter le service de fourrière pour signer un document de renonciation. Une fois cette procédure effectuée, le véhicule est cédé à un centre VHU désigné par la préfecture. RéseauEpaviste ne peut pas intervenir directement sur un véhicule en fourrière." },
  { question: "Le véhicule doit-il être assuré pour l'enlèvement ?", answer: "Non, l'assurance n'est pas requise pour organiser l'enlèvement d'une épave. Cependant, tant que le véhicule est immatriculé à votre nom, vous restez théoriquement responsable de l'assurance responsabilité civile. La meilleure solution est de procéder rapidement à l'enlèvement et à la radiation du véhicule auprès de l'ANTS pour mettre fin à cette obligation." },
  { question: "Puis-je enlever une épave appartenant à un défunt ?", answer: "Oui, dans le cadre d'une succession, les héritiers peuvent organiser l'enlèvement d'un véhicule appartenant à un défunt. Les documents requis sont généralement : acte de décès, certificat d'hérédité ou acte de notoriété, et pièce d'identité de l'héritier effectuant la démarche. Contactez-nous pour vous guider dans cette situation particulière." },
  { question: "Que faire si mon véhicule est gagé (crédit auto en cours) ?", answer: "Si votre véhicule fait l'objet d'un gage (crédit auto non soldé), vous ne pouvez pas légalement le céder pour destruction sans l'accord de l'organisme de crédit. En pratique, vous devez contacter votre banque ou organisme de financement, solder le crédit ou obtenir mainlevée du gage avant de procéder à l'enlèvement. Consultez notre page dédiée pour plus d'informations." },
  { question: "Existe-t-il une prime à la casse ?", answer: "La prime à la conversion (ou prime à la casse) est une aide de l'État français destinée à encourager le remplacement d'un vieux véhicule polluant par un véhicule propre (électrique ou hybride). Elle est cumulable avec l'enlèvement gratuit de votre épave. Son montant varie selon votre revenu fiscal et le type de véhicule acheté. Renseignez-vous sur le site officiel du gouvernement." },
  { question: "Intervenez-vous en parking souterrain ?", answer: "Oui, nous intervenons dans les parkings souterrains, mais cela nécessite un équipement adapté. Selon la hauteur libre du parking et l'état du véhicule, nous utilisons des équipements de faible hauteur ou procédons à un pré-démontage sur place pour faciliter l'extraction. Précisez la hauteur limite du parking lors de votre appel." },
  { question: "Peut-on enlever une épave sur une propriété privée (terrain, jardin) ?", answer: "Oui, nous intervenons sur propriété privée. Vous devez simplement vous assurer que l'accès pour nos véhicules est possible (largeur de passage, sol porteur) et que vous êtes bien le propriétaire du terrain ou que vous avez l'accord du propriétaire. Certains accès complexes peuvent nécessiter une évaluation préalable." },
  { question: "Que faire si quelqu'un a abandonné une épave sur mon terrain ?", answer: "Si un véhicule a été abandonné sur votre propriété privée par un tiers, vous devez d'abord tenter d'identifier le propriétaire via la plaque d'immatriculation (en faisant une demande auprès des autorités). Si le propriétaire est introuvable, une procédure administrative est nécessaire avant l'enlèvement. Contactez la mairie ou la gendarmerie pour connaître la procédure applicable dans votre commune." },
  { question: "Proposez-vous un service d'enlèvement d'épave la nuit ?", answer: "Oui, notre service téléphonique est disponible 24h/24. Des enlèvements nocturnes sont possibles, notamment en cas d'urgence (accident, véhicule gênant la circulation). En dehors de l'urgence, il est préférable de planifier l'intervention en journée pour des raisons pratiques (bruit, accès...). Un supplément peut s'appliquer pour les interventions entre 22h et 6h." },
  { question: "Puis-je assister à l'enlèvement de mon véhicule ?", answer: "Oui, vous pouvez assister à l'enlèvement. Il est même recommandé d'être présent lors de l'intervention pour remettre les documents, vérifier l'identité de l'épaviste et récupérer immédiatement votre certificat de destruction. Si vous ne pouvez pas être présent, une procuration écrite et une copie de votre pièce d'identité suffisent." },
  { question: "Que faire si j'ai laissé des affaires personnelles dans l'épave ?", answer: "Avant l'enlèvement, récupérez absolument tous vos effets personnels : documents importants (carte grise, contrôle technique...), objets de valeur, équipements électroniques, accessoires. Une fois le véhicule parti au centre VHU, il est très difficile de récupérer des objets. Les épavistes ne sont pas responsables des biens laissés dans les véhicules." },
  { question: "Faut-il résilier l'assurance avant ou après l'enlèvement ?", answer: "Il est conseillé de résilier l'assurance automobile juste après avoir reçu le certificat de destruction et effectué la radiation du véhicule auprès de l'ANTS. Prévenez votre assureur de la vente/cession pour destruction, ce qui peut mettre fin immédiatement à certaines garanties coûteuses (dommages). Conservez une attestation de la fin du contrat." },
  { question: "Combien de temps faut-il pour radier un véhicule après destruction ?", answer: "La radiation d'un véhicule détruit doit être effectuée dans les 15 jours suivant la remise du certificat de destruction. La démarche se fait en ligne sur le site de l'ANTS (ants.gouv.fr) ou via un professionnel habilité. La radiation est gratuite et met définitivement fin à votre obligation d'assurance et à toute taxe éventuelle sur ce véhicule." },
  { question: "Acceptez-vous les épaves de véhicules de collection ?", answer: "Oui, nous acceptons les véhicules de collection. Cependant, avant de procéder à la destruction d'un véhicule de collection, il est fortement recommandé de le faire évaluer par un expert spécialisé. Certains véhicules anciens ont une valeur patrimoniale ou marchande bien supérieure à leur valeur de recyclage. Nous pouvons vous orienter vers des spécialistes en véhicules de collection." },
];

export default function FAQPage() {
  return (
    <>
      <section className="py-14 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wide uppercase text-[#1E3A8A]">
              Aide &amp; procédure – FAQ
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Questions fréquentes sur l’enlèvement d’épave (VHU)
            </h1>
            <p className="text-sm text-[#374151] leading-relaxed max-w-3xl">
              Réponses pratiques sur la procédure VHU, les documents, les délais, les cas particuliers
              et les points de vigilance. Pour une situation urgente, le plus rapide reste l’appel.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <a
              href="tel:+33745482464"
              className="inline-flex items-center justify-center bg-[#1E3A8A] text-white font-semibold py-3 px-5 rounded-lg hover:opacity-90 transition"
            >
              Appeler le 07 45 48 24 64
            </a>
            <div className="text-xs text-[#6B7280]">
              Disponible 24h/24 – 7j/7. Délais indicatifs selon zone et accessibilité.
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Toutes vos questions répondues" />

      <div className="bg-white border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <ContextualLinksBlock
            title="Guides utiles (cas fréquents)"
            links={[
              { href: "/guides/checklist-dossier-epave", label: "Checklist dossier épave", description: "Documents + accessibilité (parking/cour/terrain)." },
              { href: "/guides/certificat-destruction-vhu", label: "Certificat de destruction VHU", description: "À quoi il sert et quoi conserver." },
              { href: "/guides/ants-destruction-vehicule", label: "ANTS : destruction véhicule", description: "Repères + points de vigilance." },
              { href: "/guides/eviter-faux-epaviste", label: "Éviter les faux épavistes", description: "Checklist anti-arnaque." },
            ]}
          />

          <OfficialSourcesBlock
            title="Sources officielles (procédure &amp; cadre VHU)"
            sources={[
              { label: "Service-public.fr", description: "Fiches officielles selon votre situation.", url: "https://www.service-public.fr/" },
              { label: "ANTS", description: "Démarches administratives véhicules.", url: "https://ants.gouv.fr/" },
              { label: "Légifrance", description: "Textes consolidés et versions à jour.", url: "https://www.legifrance.gouv.fr/" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
