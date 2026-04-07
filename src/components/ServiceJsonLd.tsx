import { OPENING_HOURS_SCHEMA, PHONE_EPAVISTE_TEL, SITE_URL } from "@/lib/constants";

type ServiceJsonLdProps = {
  name?: string;
  serviceName?: string;
  url?: string;
  description?: string;
  /**
   * Texte/zone, ex: "Île-de-France" ou "France".
   * Sert à renseigner `areaServed` (sans sur-promesse).
   */
  areaServed?: string;
  telephone?: string;
};

export default function ServiceJsonLd({
  name,
  serviceName,
  url = SITE_URL,
  description,
  areaServed,
  telephone = PHONE_EPAVISTE_TEL,
}: ServiceJsonLdProps) {
  const resolvedName = name ?? serviceName ?? "Service";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: resolvedName,
    url,
    ...(description ? { description } : {}),
    provider: {
      "@type": "Organization",
      name: "RéseauEpaviste",
      url: SITE_URL,
      telephone,
      openingHours: OPENING_HOURS_SCHEMA,
    },
    ...(areaServed ? { areaServed } : {}),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        availableLanguage: ["fr"],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
