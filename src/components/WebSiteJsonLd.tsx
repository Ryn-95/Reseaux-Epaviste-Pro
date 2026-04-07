import { SITE_URL, PHONE_EPAVISTE_TEL, OPENING_HOURS_SCHEMA } from "@/lib/constants";

/**
 * Rich WebSite + Organization + AutoRepair structured data
 * for Google Knowledge Panel, Sitelinks Search Box, and rich snippets.
 */
export default function WebSiteJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Réseaux Épaviste",
      alternateName: ["RéseauÉpaviste", "Reseau Epaviste", "Épaviste IDF"],
      url: SITE_URL,
      description:
        "Épaviste agréé VHU en Île-de-France. Enlèvement d'épave gratuit, dépannage auto 24/7, remorquage, certificat de destruction CERFA immédiat.",
      inLanguage: "fr-FR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/recherche?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Réseaux Épaviste",
      url: SITE_URL,
      telephone: PHONE_EPAVISTE_TEL,
      email: "contact@reseauepaviste.fr",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.facebook.com/reseauepaviste",
        "https://www.instagram.com/reseauepaviste",
        "https://www.linkedin.com/company/reseauepaviste",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Rue de la République",
        addressLocality: "Boulogne-Billancourt",
        postalCode: "92100",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8396,
        longitude: 2.2399,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Paris" },
        { "@type": "AdministrativeArea", name: "Hauts-de-Seine (92)" },
        { "@type": "AdministrativeArea", name: "Seine-Saint-Denis (93)" },
        { "@type": "AdministrativeArea", name: "Val-de-Marne (94)" },
        { "@type": "AdministrativeArea", name: "Val-d'Oise (95)" },
        { "@type": "AdministrativeArea", name: "Essonne (91)" },
        { "@type": "AdministrativeArea", name: "Yvelines (78)" },
        { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1847",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Épaviste et Dépannage",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enlèvement d'épave gratuit",
              description:
                "Enlèvement gratuit de véhicules hors d'usage (VHU) à domicile en Île-de-France. Remise du certificat de destruction CERFA immédiat.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dépannage automobile 24/7",
              description:
                "Dépannage auto d'urgence 24h/24, 7j/7. Panne batterie, crevaison, erreur carburant, panne mécanique.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Remorquage professionnel",
              description:
                "Remorquage sur plateau vers garage, concessionnaire ou centre VHU agréé.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rachat véhicule hors service",
              description:
                "Rachat de voiture en panne ou hors service au meilleur prix. Estimation gratuite.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": `${SITE_URL}/#autorepair`,
      name: "Réseaux Épaviste - Centre VHU Agréé",
      url: SITE_URL,
      telephone: PHONE_EPAVISTE_TEL,
      priceRange: "Gratuit - €€",
      openingHours: OPENING_HOURS_SCHEMA,
      image: `${SITE_URL}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Rue de la République",
        addressLocality: "Boulogne-Billancourt",
        postalCode: "92100",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8396,
        longitude: 2.2399,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1847",
        bestRating: "5",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sophie M." },
          datePublished: "2025-12-15",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Intervention ultra rapide pour l'enlèvement de ma Clio. Certificat de destruction remis en main propre. Personnel très professionnel.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Karim B." },
          datePublished: "2026-01-08",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Mon véhicule était dans un parking souterrain avec un accès très étroit. Ils ont réussi à l'enlever avec une dépanneuse adaptée. Gratuit comme promis.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Laurent D." },
          datePublished: "2026-02-22",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Dépannage en urgence un dimanche soir après une panne de batterie sur l'A13. Le technicien est arrivé en 35 minutes. Service impeccable.",
        },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
