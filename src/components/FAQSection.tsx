"use client";
import { useState } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({
  items,
  title = "Questions Fréquentes",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-premium bg-bg-pure" id="faq">
      <FaqJsonLd items={items.map((i) => ({ question: i.question, answer: i.answer }))} />
      <div className="premium-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="label-official mb-6">Aide & Support</div>
            <h2 className="title-lg">
              {title}<span className="text-brand-red">.</span>
            </h2>
            <p className="text-secondary/50 text-base mt-4 max-w-xl">
              Les réponses aux questions les plus posées par nos clients sur l'enlèvement d'épave, le dépannage auto et les démarches administratives.
            </p>
          </div>

          <div className="space-y-px">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="border-b"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <button
                  className="w-full flex items-center justify-between py-7 text-left focus:outline-none group"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className={`font-semibold text-base tracking-tight transition-colors pr-8 ${
                    openIndex === idx ? "text-brand-red" : "text-brand-dark group-hover:text-brand-red"
                  }`}>
                    {item.question}
                  </span>
                  <span className={`text-secondary/30 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === idx ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-7 text-secondary/60 leading-relaxed text-sm max-w-2xl">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
