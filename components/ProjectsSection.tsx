import { interdisciplinary, projects } from "@/lib/data";
import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built."
          description="Side projects from undergrad and beyond — shipped products, hardware experiments, and the occasional drone."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <FadeIn as="article" key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-[28px] bg-white p-8 ring-1 ring-black/5 md:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base text-[var(--color-ink-soft)]">
                  {p.blurb}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-[var(--color-ink-soft)]"
                    >
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-ink-muted)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]"
                  >
                    Watch demo
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Interdisciplinary
          </p>
          <div className="flex flex-wrap gap-2">
            {interdisciplinary.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 text-sm text-[var(--color-ink)] ring-1 ring-black/5"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
