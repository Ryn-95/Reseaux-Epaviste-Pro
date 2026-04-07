import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "Twitterbot", "facebot"],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/_next/",
          "/static/",
          "/*?utm_*",
          "/*?ref=*",
          "/*?sort=*",
          "/*?page=*",
          "/recherche",
        ],
        crawlDelay: 10, // Crawl-delay ONLY for secondary bots
      },
    ],
    sitemap: [
      "https://reseauxepaviste.fr/sitemap.xml",
      "https://reseauxepaviste.fr/sitemap-services.xml",
      "https://reseauxepaviste.fr/sitemap-idf.xml",
      "https://reseauxepaviste.fr/sitemap-national.xml",
      "https://reseauxepaviste.fr/sitemap-blog.xml",
    ],
  };
}
