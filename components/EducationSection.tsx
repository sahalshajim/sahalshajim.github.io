import { education } from "@/lib/data";
import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";

export default function EducationSection() {
  return (
    <section id="education" className="bg-[var(--color-surface-2)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader title="Education" align="center" />
        <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {education.map((e, i) => (
            <FadeIn as="li" key={e.degree} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-[28px] bg-[var(--color-surface-2)] p-8 ring-1 ring-black/5">
                <div className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  {e.period}
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[var(--color-ink)] md:text-2xl">
                  {e.degree}
                </h3>
                <p className="mt-2 text-base text-[var(--color-ink-soft)]">
                  {e.institution}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--color-ink-muted)]">
                  {e.gpa && <span>{e.gpa}</span>}
                  {e.notes && <span>· {e.notes}</span>}
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
