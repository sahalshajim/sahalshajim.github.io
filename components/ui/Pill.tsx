import type { ReactNode } from "react";

type Tone = "default" | "accent" | "success" | "neutral";

const tones: Record<Tone, string> = {
  default: "bg-black/[0.04] text-[var(--color-ink)] ring-1 ring-black/5",
  accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/15",
  success: "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/15",
  neutral: "bg-black/[0.04] text-[var(--color-ink-soft)] ring-1 ring-black/5",
};

export default function Pill({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
