import { patents } from "@/lib/data";
import FadeIn from "./ui/FadeIn";
import Pill from "./ui/Pill";
import SectionHeader from "./ui/SectionHeader";

export default function PatentsSection() {
  return (
    <section id="patents" className="bg-[var(--color-surface-2)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Patents"
          title="US Patents"
          description="One granted US patent and two pending filings spanning open-world detection, bilingual medical LLMs, and pixel-grounded multimodal models."
        />
        <ul className="mt-14 divide-y divide-black/5 border-y border-black/5">
          {patents.map((p, i) => (
            <FadeIn as="li" key={p.number} delay={i * 0.05}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-1 gap-3 py-7 transition-colors md:grid-cols-[1fr_auto] md:items-start md:gap-12 md:py-8"
              >
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Pill tone={p.status === "Granted" ? "success" : "neutral"}>
                      {p.status}
                    </Pill>
                    <span className="text-xs font-medium tracking-wide text-[var(--color-ink-muted)]">
                      {p.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] md:text-2xl">
                    {p.title}
                  </h3>
                </div>
                <div className="text-sm font-medium text-[var(--color-accent)] md:pt-1">
                  View patent →
                </div>
              </a>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
