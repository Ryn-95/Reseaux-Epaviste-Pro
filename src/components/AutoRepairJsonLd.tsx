import { OPENING_HOURS_SCHEMA, PHONE_EPAVISTE_TEL, SITE_URL } from "@/lib/constants";

type AutoRepairJsonLdProps = {
  name: string;
  url: string;
  telephone?: string;
  cityOrArea: string;
  postalCode?: string;
  addressLocality?: string;
  lat?: number;
  lng?: number;
  rating?: number;
  reviewCount?: number;
};

export default function AutoRepairJsonLd({
  name,
  url,
  telephone = PHONE_EPAVISTE_TEL,
  cityOrArea,
  postalCode,
  addressLocality,
  lat,
  lng,
  rating,
  reviewCount,
}: AutoRepairJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name,
    url,
    telephone,
    areaServed: cityOrArea,
    openingHours: OPENING_HOURS_SCHEMA,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enlèvement d’épave gratuit (VHU)",
          url: new URL("/enlevement-epave", SITE_URL).toString(),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage et remorquage auto",
          url: new URL("/depannage-auto", SITE_URL).toString(),
        },
      },
    ],
  };

  if (postalCode || addressLocality) {
    schema.address = {
      "@type": "PostalAddress",
      addressLocality: addressLocality ?? cityOrArea,
      postalCode: postalCode ?? "",
      addressCountry: "FR",
    };
  }

  if (typeof lat === "number" && typeof lng === "number") {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    };
  }

  if (typeof rating === "number" && typeof reviewCount === "number") {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

