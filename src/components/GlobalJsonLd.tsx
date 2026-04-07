export default function GlobalJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutomotiveBusiness"],
        "@id": "https://reseauxepaviste.fr/#LocalBusiness",
        "name": "Réseaux Épaviste",
        "telephone": "01 84 17 32 18",
        "email": "contact@reseauxepaviste.fr",
        "url": "https://reseauxepaviste.fr",
        "logo": "https://reseauxepaviste.fr/logo.png",
        "image": "https://reseauxepaviste.fr/images/depanneuse.jpg",
        "priceRange": "Gratuit",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Paris" },
          { "@type": "City", "name": "Hauts-de-Seine" },
          { "@type": "City", "name": "Seine-Saint-Denis" },
          { "@type": "City", "name": "Val-de-Marne" },
          { "@type": "City", "name": "Yvelines" },
          { "@type": "City", "name": "Essonne" },
          { "@type": "City", "name": "Seine-et-Marne" },
          { "@type": "City", "name": "Val-d'Oise" }
        ],
        "hasCredential": "Agrément VHU PR9200012D",
        "sameAs": [
          "https://www.google.com/search?q=Reseaux+Epaviste",
          "https://www.facebook.com/reseauxepaviste"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://reseauxepaviste.fr/#ServiceEnlevement",
        "serviceType": "Enlèvement épave gratuit",
        "provider": { "@id": "https://reseauxepaviste.fr/#LocalBusiness" },
        "areaServed": { "@type": "State", "name": "Île-de-France" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      },
      {
        "@type": "Service",
        "@id": "https://reseauxepaviste.fr/#ServiceDepannage",
        "serviceType": "Dépannage auto 24h/7j",
        "provider": { "@id": "https://reseauxepaviste.fr/#LocalBusiness" },
        "areaServed": { "@type": "State", "name": "Île-de-France" }
      },
      {
        "@type": "Service",
        "@id": "https://reseauxepaviste.fr/#ServiceRemorquage",
        "serviceType": "Remorquage professionnel",
        "provider": { "@id": "https://reseauxepaviste.fr/#LocalBusiness" },
        "areaServed": { "@type": "State", "name": "Île-de-France" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://reseauxepaviste.fr/#FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment obtenir le certificat CERFA de destruction ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le certificat CERFA n°14365*01 vous est remis immédiatement sur place par notre épaviste agréé au moment de l'enlèvement du véhicule."
            }
          },
          {
            "@type": "Question",
            "name": "Quel délai pour arrêter l'assurance après destruction ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dès l'instant où nous vous remettons le document CERFA, vous pouvez annuler votre assurance automobile immédiatement sans aucun préavis."
            }
          },
          {
            "@type": "Question",
            "name": "L'enlèvement est-il gratuit pour un véhicule sans CT ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, il n'y a aucune exigence de validité du contrôle technique. La destruction et le remorquage sont 100% gratuits."
            }
          },
          {
            "@type": "Question",
            "name": "Intervenez-vous en dehors de l'Île-de-France ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, notre réseau couvre 50 grandes villes sur le plan national pour la mise en destruction de vos véhicules hors d'usage."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle différence entre épaviste agréé et ferrailleur ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seul un épaviste lié à un centre VHU agréé par la préfecture a légalement le droit d'assurer la déclaration de destruction et de procurer le CERFA. Un simple ferrailleur en est incapable."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://reseauxepaviste.fr/#AggregateRating",
        "itemReviewed": { "@id": "https://reseauxepaviste.fr/#LocalBusiness" },
        "ratingValue": "4.9",
        "reviewCount": "1847",
        "bestRating": "5"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reseauxepaviste.fr" },
          { "@type": "ListItem", "position": 2, "name": "Enlèvement Épave", "item": "https://reseauxepaviste.fr/enlevement-epave/" }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Comment faire enlever sa vieille voiture",
        "step": [
          { "@type": "HowToStep", "name": "Contactez-nous", "text": "Appelez ou prenez rdv en ligne 24/7." },
          { "@type": "HowToStep", "name": "Préparez vos papiers", "text": "Ayez avec vous carte grise, non-gage, et pièce d'identité." },
          { "@type": "HowToStep", "name": "Enlèvement par la dépanneuse", "text": "Nous remorquons gratuitement l'épave de sa place de parking." },
          { "@type": "HowToStep", "name": "Récupération du CERFA", "text": "Le chauffeur vous remet l'attestation légale officielle." }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
