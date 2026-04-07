import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD for Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.reseauxepaviste.fr/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://www.reseauxepaviste.fr${item.href}`
      }))
    ]
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="py-4 bg-zinc-900 border-b border-white/5 hidden md:block">
        <div className="premium-container">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Accueil</span>
                </Link>
              </div>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.label}>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-zinc-600" aria-hidden="true" />
                    <Link
                      href={item.href}
                      className={`ml-4 text-xs font-medium uppercase tracking-wider ${
                        isLast ? 'text-white' : 'text-zinc-400 hover:text-white transition-colors'
                      }`}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
