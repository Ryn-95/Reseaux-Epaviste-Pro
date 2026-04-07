import Link from "next/link";

type ContextualLink = {
  href: string;
  label: string;
  description?: string;
};

export default function ContextualLinksBlock({
  title = "Aller plus loin",
  links,
}: {
  title?: string;
  links: ContextualLink[];
}) {
  if (!links || links.length === 0) return null;

  return (
    <section className="mt-16 border-t-4 border-[var(--rouge-marianne)] bg-[var(--gris-fond)] p-8 space-y-6">
      <h2 className="text-xl font-black uppercase tracking-tight text-[var(--gris-texte)]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group border border-[var(--gris-border)] bg-white p-6 hover:border-[var(--bleu-france)] transition-all duration-300 no-underline"
          >
            <div className="font-bold text-[var(--bleu-france)] uppercase tracking-wide text-sm mb-2 group-hover:text-[var(--bleu-france-hover)] transition-colors">
              {l.label}
            </div>
            {l.description ? (
              <div className="text-xs text-[var(--gris-texte-leger)] leading-relaxed">
                {l.description}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

