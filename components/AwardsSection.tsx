"use client";

import { useState } from "react";
import { awards } from "@/lib/data";
import FadeIn from "./ui/FadeIn";

const COLLAPSED_COUNT = 4;

export default function AwardsSection() {
  const [expanded, setExpanded] = useState(false);
  const canExpand = awards.length > COLLAPSED_COUNT;
  const visible = expanded ? awards : awards.slice(0, COLLAPSED_COUNT);

  return (
    <section
      id="awards"
      className="bg-white pt-8 pb-16 md:pt-12 md:pb-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Honors &amp; Awards
          </h2>
        </FadeIn>
        <ul
          id="awards-list"
          className="mt-8 max-w-4xl divide-y divide-black/5 border-y border-black/5 md:mt-10"
        >
          {visible.map((a, i) => (
            <FadeIn
              as="li"
              key={a.title}
              delay={i < COLLAPSED_COUNT ? i * 0.05 : (i - COLLAPSED_COUNT) * 0.04}
              y={i < COLLAPSED_COUNT ? 24 : 8}
            >
              <div className="grid grid-cols-[64px_1fr] items-baseline gap-6 py-5 md:grid-cols-[96px_1fr] md:py-6">
                <div className="text-base font-semibold tabular-nums text-[var(--color-accent)] md:text-lg">
                  {a.year}
                </div>
                <p className="text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
                  {a.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </ul>
        {canExpand && (
          <div className="mt-8 flex justify-start">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls="awards-list"
              className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-6 py-3 text-sm font-medium text-[var(--color-ink)] ring-1 ring-black/5 transition-colors hover:bg-black/[0.07]"
            >
              {expanded
                ? "Show fewer"
                : `Show all ${awards.length} awards`}
              <span
                aria-hidden
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
