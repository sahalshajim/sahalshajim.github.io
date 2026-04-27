import FadeIn from "./FadeIn";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <FadeIn className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-[var(--color-ink-soft)] md:text-xl">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
