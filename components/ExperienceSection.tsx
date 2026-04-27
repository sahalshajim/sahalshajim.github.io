import { experience } from "@/lib/data";
import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Professional Experience"
          title="Where I've worked"
        />
        <ul className="mt-14 divide-y divide-black/5 border-y border-black/5">
          {experience.map((e, i) => (
            <FadeIn as="li" key={`${e.role}-${e.org}`} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-2 py-7 md:grid-cols-[1fr_auto] md:items-start md:gap-12 md:py-8">
                <div>
                  <div className="text-lg font-semibold tracking-tight text-[var(--color-ink)] md:text-2xl">
                    {e.role}
                  </div>
                  <div className="mt-1 text-base text-[var(--color-ink-soft)] md:text-lg">
                    {e.org}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-ink-muted)] md:justify-end md:pt-2">
                  {e.period && <span>{e.period}</span>}
                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-[var(--color-accent)]"
                    >
                      Letter →
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
