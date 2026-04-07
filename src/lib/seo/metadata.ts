import type { Metadata } from "next";
import { DEFAULT_LOCALE, SITE_URL } from "@/lib/constants";

type BuildPageMetadataParams = {
  title: string;
  description: string;
  /**
   * Chemin relatif, ex: "/epaviste/paris".
   * Sert à construire `openGraph.url`.
   */
  pathname: string;
  /**
   * Type OpenGraph (par défaut: "website").
   */
  openGraphType?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  openGraphType = "website",
}: BuildPageMetadataParams): Metadata {
  const url = new URL(pathname, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: openGraphType,
      locale: DEFAULT_LOCALE,
      siteName: "RéseauEpaviste",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

