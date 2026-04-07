import React from 'react';

interface CityJsonLdProps {
  city: string;
  department: string;
  region: string;
}

export default function CityJsonLd({ city, department, region }: CityJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "name": `Réseaux Épaviste ${city}`,
    "description": `Centre VHU agréé intervenant à ${city} (${department}) pour l'enlèvement gratuit d'épave et le dépannage auto.`,
    "url": `https://www.reseauxepaviste.fr/epaviste-${city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/'/g, '-')}`,
    "telephone": "+33 1 84 17 32 18",
    "areaServed": [
      {
        "@type": "City",
        "name": city
      },
      {
        "@type": "AdministrativeArea",
        "name": region
      }
    ],
    "hasCredential": "Agrément VHU PR9200012D",
    "priceRange": "Gratuit",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
