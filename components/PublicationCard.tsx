import type { Publication } from "@/lib/types";
import CountUp from "./ui/CountUp";
import FadeIn from "./ui/FadeIn";
import Pill from "./ui/Pill";

const palettes = [
  "from-[#0071e3]/8 via-[#0071e3]/3 to-transparent",
  "from-[#7d4eff]/8 via-[#7d4eff]/3 to-transparent",
  "from-[#06b6d4]/8 via-[#06b6d4]/3 to-transparent",
  "from-[#10b981]/8 via-[#10b981]/3 to-transparent",
  "from-[#f97316]/8 via-[#f97316]/3 to-transparent",
  "from-[#ec4899]/8 via-[#ec4899]/3 to-transparent",
];

function formatAuthors(pub: Publication) {
  return pub.authors.map((a, i) => {
    const isCoFirst = pub.coFirst?.includes(i);
    const isMe = i === pub.meIndex;
    return (
      <span key={`${a}-${i}`}>
        <span
          className={
            isMe
              ? "font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)]/40 underline-offset-4"
              : ""
          }
        >
          {a}
        </span>
        {isCoFirst && <sup className="ml-0.5 text-[var(--color-ink-muted)]">*</sup>}
        {i < pub.authors.length - 1 && <span>, </span>}
      </span>
    );
  });
}

export default function PublicationCard({
  pub,
  index,
}: {
  pub: Publication;
  index: number;
}) {
  const palette = palettes[index % palettes.length];

  return (
    <FadeIn as="article" delay={(index % 3) * 0.05}>
      <div className="group relative overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5 transition-all duration-300 hover:ring-black/10 hover:shadow-[0_24px_60px_-25px_rgba(0,0,0,0.18)]">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${palette}`}
        />
        <div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-[1.6fr_1fr] md:p-12">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Pill tone="accent">{pub.venue}</Pill>
              {pub.notes?.map((n) => (
                <Pill key={n} tone="default">
                  {n}
                </Pill>
              ))}
            </div>
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[32px] md:leading-[1.1]">
              {pub.title}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)] md:text-base">
              {pub.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-1 gap-y-1 text-sm text-[var(--color-ink-muted)]">
              {formatAuthors(pub)}
            </div>
            {pub.coFirst && pub.coFirst.length > 1 && (
              <p className="mt-2 text-xs text-[var(--color-ink-muted)]">
                * equal contribution
              </p>
            )}
          </div>
          <div className="flex flex-col items-stretch justify-end gap-5 md:items-end">
            {pub.downloads && (
              <div className="md:text-right">
                <div className="text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
                  <CountUp value={pub.downloads} />
                </div>
                <div className="mt-0.5 text-xs text-[var(--color-ink-muted)]">
                  Hugging Face downloads
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
              {pub.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] px-4 py-2 text-sm font-medium text-[var(--color-ink)] ring-1 ring-black/5 transition-colors hover:bg-[var(--color-accent)] hover:text-white hover:ring-transparent"
                >
                  {l.label}
                  <span aria-hidden className="transition-transform group-hover/link:translate-x-0.5">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
