import React from "react";

type TocItem = {
  label: string;
  id: string;
};

type GuideWikiArticleLayoutProps = {
  chapapo?: string;
  enResumePoints?: string[];
  tocItems?: TocItem[];
  children: React.ReactNode;
};

export default function GuideWikiArticleLayout({
  chapapo,
  enResumePoints,
  tocItems,
  children,
}: GuideWikiArticleLayoutProps) {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {chapapo && (
          <p className="text-lg text-[var(--gris-texte)] leading-relaxed mb-12 font-medium border-l-4 border-[var(--bleu-france)] pl-6 italic">
            {chapapo}
          </p>
        )}

        {enResumePoints && enResumePoints.length > 0 && (
          <section className="bg-[var(--gris-fond)] border-t-4 border-[var(--bleu-france)] p-8 mb-12 shadow-sm">
            <div className="font-black uppercase tracking-widest text-xs text-[var(--gris-texte)] mb-4">En résumé</div>
            <ul className="space-y-3 text-sm text-[var(--gris-texte-leger)]">
              {enResumePoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {tocItems && tocItems.length > 0 && (
          <nav
            aria-label="Sommaire"
            className="border border-[var(--gris-border)] p-8 mb-12 bg-white"
          >
            <div className="font-black uppercase tracking-widest text-xs text-[var(--gris-texte)] mb-6 border-b border-[var(--gris-border)] pb-2 inline-block">Sommaire</div>
            <ul className="space-y-3">
              {tocItems.map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`} className="text-[var(--bleu-france)] hover:text-[var(--bleu-france-hover)] font-bold text-sm uppercase tracking-wide no-underline flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--rouge-marianne)] flex-shrink-0"></span>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <article className="prose prose-blue max-w-none institutional-content">
          {children}
        </article>
      </div>
    </div>
  );
}

