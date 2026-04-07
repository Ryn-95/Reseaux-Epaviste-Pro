"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function CanonicalLogic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Defensive canonicalization to remove trailing slashes and parameters
    if (typeof window !== "undefined") {
      let currentUrl = window.location.href;
      
      // Remove UTM parameters and trailing slash for canonical
      const urlObj = new URL(currentUrl);
      urlObj.search = ""; // Remove all query parameters
      
      let cleanPath = urlObj.pathname;
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      
      const canonicalUrl = `${urlObj.protocol}//${urlObj.host}${cleanPath}`;
      
      // Update or create canonical tag
      let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      
      // Only update if it doesn't match the expected clean URL
      if (link.href !== canonicalUrl) {
        link.href = canonicalUrl;
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export default function CanonicalTag() {
  return (
    <Suspense fallback={null}>
      <CanonicalLogic />
    </Suspense>
  );
}
