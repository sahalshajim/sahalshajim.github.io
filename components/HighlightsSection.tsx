import { researchHighlights } from "@/lib/data";
import type { Highlight } from "@/lib/types";
import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";

function renderHighlight(h: Highlight) {
  return h.map((seg, i) => {
    const className = seg.bold
      ? "font-semibold text-[var(--color-ink)]"
      : undefined;
    if (seg.url) {
      return (
        <a
          key={i}
          href={seg.url}
          target="_blank"
          rel="noreferrer"
          className={`underline decoration-[var(--color-accent)]/35 decoration-1 underline-offset-[5px] transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)] ${
            seg.bold ? "font-semibold text-[var(--color-ink)]" : ""
          }`}
        >
          {seg.text}
        </a>
      );
    }
    return (
      <span key={i} className={className}>
        {seg.text}
      </span>
    );
  });
}

export default function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader title="Research Highlights" align="center" />
        <ul className="mt-12 divide-y divide-black/5 border-y border-black/5 md:mt-16">
          {researchHighlights.map((h, i) => (
            <FadeIn as="li" key={i} delay={(i % 4) * 0.05}>
              <div className="grid grid-cols-[40px_1fr] gap-6 py-7 md:grid-cols-[64px_1fr] md:py-8">
                <div className="text-2xl font-bold text-[var(--color-ink-muted)] md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
                  {renderHighlight(h)}
                </p>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
