"use client";

import { useState } from "react";
import { publications } from "@/lib/data";
import PublicationCard from "./PublicationCard";
import SectionHeader from "./ui/SectionHeader";

const INITIAL = 3;

export default function PublicationsSection() {
  const [expanded, setExpanded] = useState(false);
  const total = publications.length;
  const hiddenCount = total - INITIAL;
  const visible = expanded ? publications : publications.slice(0, INITIAL);

  return (
    <section
      id="publications"
      className="bg-[var(--color-surface-2)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader title="Research Publications" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16">
          {visible.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </div>
        {hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-ink)] ring-1 ring-black/5 transition-all hover:shadow-[0_10px_28px_-12px_rgba(0,0,0,0.18)]"
            >
              {expanded
                ? "Show fewer"
                : `Show all ${total} publications`}
              <span
                aria-hidden
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
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
