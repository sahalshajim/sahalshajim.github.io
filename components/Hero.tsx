import Image from "next/image";
import { profile } from "@/lib/data";
import FadeIn from "./ui/FadeIn";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-16 pb-16 md:pt-28 md:pb-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 0%, rgba(0,113,227,0.10), transparent 70%), radial-gradient(50% 35% at 80% 10%, rgba(120,80,255,0.08), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-[1.15fr_1fr]">
        <FadeIn>
          <div className="mb-5 text-base font-medium tracking-wide text-[var(--color-accent)] md:text-lg">
            {profile.title}
          </div>
          <h1 className="text-5xl font-bold leading-[0.96] tracking-[-0.035em] text-[var(--color-ink)] md:text-7xl lg:text-[88px]">
            Sahal Shaji
            <br />
            <span className="text-4xl md:text-6xl lg:text-[72px]">
              Mullappilly
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-col items-start gap-5">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              View publications
              <span aria-hidden>→</span>
            </a>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.resumePdf}
                className="inline-flex items-center justify-center rounded-full bg-black/[0.04] px-6 py-3 text-sm font-medium text-[var(--color-ink)] ring-1 ring-black/5 transition-colors hover:bg-black/[0.07]"
              >
                Download CV
              </a>
              <a
                href={profile.scholar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)]/[0.04]"
              >
                <Image
                  src="/icons/google.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                Google Scholar
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)]/[0.04]"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mx-auto md:mx-0">
          <div className="relative aspect-square w-[280px] overflow-hidden rounded-[22%] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] md:w-[420px]">
            <Image
              src={profile.headshot}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 768px) 420px, 280px"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
