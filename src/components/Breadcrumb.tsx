import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `https://www.reseauxepaviste.fr${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'Ariane" className="bg-white border-b border-pro-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-pro-text-light">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {idx > 0 && <span className="text-pro-border text-xs">/</span>}
                {idx === items.length - 1 ? (
                  <span className="text-pro-dark">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-etat-blue transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
