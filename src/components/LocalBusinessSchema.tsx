interface LocalBusinessSchemaProps {
  name: string;
  url: string;
  telephone: string;
  city: string;
  rating: number;
  reviewCount: number;
  lat?: number;
  lng?: number;
  address?: string;
  postalCode?: string;
}

export default function LocalBusinessSchema({
  name,
  url,
  telephone,
  city,
  rating,
  reviewCount,
  lat,
  lng,
  address,
  postalCode,
}: LocalBusinessSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone,
    areaServed: city,
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "Gratuit",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
    },
  };

  if (address || postalCode || city) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: address || "",
      addressLocality: city,
      postalCode: postalCode || "",
      addressCountry: "FR",
    };
  }

  if (lat && lng) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
