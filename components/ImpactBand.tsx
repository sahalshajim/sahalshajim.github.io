import { impactStats } from "@/lib/data";
import CountUp from "./ui/CountUp";
import FadeIn from "./ui/FadeIn";

export default function ImpactBand() {
  return (
    <section className="border-y border-black/5 bg-[var(--color-surface-2)] py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="mb-12 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Open-source impact
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {impactStats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div>
                <div className="text-5xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-3 text-sm text-[var(--color-ink-soft)] md:text-base">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
