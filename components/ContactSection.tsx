import { profile } from "@/lib/data";
import FadeIn from "./ui/FadeIn";

export default function ContactSection() {
  const blocks = [
    {
      label: "Academic email",
      value: profile.emails[0],
      href: `mailto:${profile.emails[0]}`,
    },
    {
      label: "Personal email",
      value: profile.emails[1],
      href: `mailto:${profile.emails[1]}`,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sahalshajim",
      href: profile.linkedin,
    },
    {
      label: "Google Scholar",
      value: "scholar.google.com",
      href: profile.scholar,
    },
  ];

  return (
    <section id="contact" className="bg-[var(--color-surface-2)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Get in touch
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
            Let&apos;s talk research, collaboration,
            <span className="text-[var(--color-ink-muted)]">
              {" "}
              or interesting ideas.
            </span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {blocks.map((b, i) => (
            <FadeIn key={b.label} delay={(i % 2) * 0.05}>
              <a
                href={b.href}
                target={b.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[28px] bg-[var(--color-surface-2)] px-8 py-7 ring-1 ring-black/5 transition-all hover:bg-[var(--color-accent)]/5 hover:ring-[var(--color-accent)]/15"
              >
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
                    {b.label}
                  </div>
                  <div className="mt-2 text-lg font-medium text-[var(--color-ink)] md:text-xl">
                    {b.value}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="text-xl text-[var(--color-ink-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
                >
                  →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--color-ink-muted)]">
            <span>{profile.location}</span>
            <span>·</span>
            <a
              href={`tel:${profile.phones[0].replace(/\s/g, "")}`}
              className="hover:text-[var(--color-ink)]"
            >
              {profile.phones[0]}
            </a>
            <a
              href={`tel:${profile.phones[1].replace(/\s/g, "")}`}
              className="hover:text-[var(--color-ink)]"
            >
              {profile.phones[1]}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
