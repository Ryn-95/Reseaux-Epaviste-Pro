import { OPENING_HOURS_SCHEMA, PHONE_EPAVISTE_TEL } from "@/lib/constants";

type LocalBusinessJsonLdProps = {
  name: string;
  url: string;
  telephone?: string;
  cityOrArea: string;
  postalCode?: string;
  addressLocality?: string;
  lat?: number;
  lng?: number;
  /**
   * Placeholder: les valeurs doivent être remplies avec des données réelles à terme.
   */
  rating?: number;
  reviewCount?: number;
};

export default function LocalBusinessJsonLd({
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
}: LocalBusinessJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone,
    areaServed: cityOrArea,
    openingHours: OPENING_HOURS_SCHEMA,
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

