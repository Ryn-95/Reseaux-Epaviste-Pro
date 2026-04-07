import React from "react";

type SourceItem = {
  label: string;
  description?: string;
  url?: string;
};

type OfficialSourcesBlockProps = {
  title?: string;
  intro?: string;
  sources: SourceItem[];
};

export function OfficialSourcesBlock({
  title = "Sources officielles",
  intro,
  sources,
}: OfficialSourcesBlockProps) {
  return (
    <div className="bg-bg-soft border border-subtle rounded-2xl p-8 space-y-6">
      <div className="label-official">{title}</div>
      {intro ? (
        <p className="text-sm text-brand-dark/60 font-medium leading-relaxed max-w-3xl">
          {intro}
        </p>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sources.map((s, i) => {
          const content = (
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-subtle shadow-sm">
              <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              <div>
                <div className="text-xs font-bold text-brand-dark">{s.label}</div>
                {s.description ? (
                  <div className="text-[11px] text-brand-dark/60">{s.description}</div>
                ) : null}
              </div>
            </div>
          );

          return s.url ? (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="block hover:opacity-95 transition">
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}

export default OfficialSourcesBlock;
