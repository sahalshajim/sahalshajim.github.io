"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { featuredPosts } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

const backdrops = [
  "linear-gradient(135deg, #eaf3ff 0%, #f5edff 100%)",
  "linear-gradient(135deg, #fff1e9 0%, #ffe9f1 100%)",
  "linear-gradient(135deg, #e9f7f2 0%, #e9f3ff 100%)",
  "linear-gradient(135deg, #f0eaff 0%, #ffeaf3 100%)",
  "linear-gradient(135deg, #e9f4ff 0%, #f7f5ff 100%)",
  "linear-gradient(135deg, #fff7ea 0%, #fde9ef 100%)",
  "linear-gradient(135deg, #e8f6ff 0%, #ecf0ff 100%)",
  "linear-gradient(135deg, #f4eaff 0%, #ffeae8 100%)",
  "linear-gradient(135deg, #eaf6ff 0%, #efeaff 100%)",
  "linear-gradient(135deg, #fff0ea 0%, #fce9f5 100%)",
];

const DESKTOP = {
  spacing: 240,
  rotate: 32,
  maxRotate: 115,
  visible: 4,
  dragThreshold: 60,
};
const MOBILE = {
  spacing: 110,
  rotate: 22,
  maxRotate: 80,
  visible: 2,
  dragThreshold: 40,
};

function PlayIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ExpandIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default function FeaturedPosts() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const total = featuredPosts.length;

  const cfg = isMobile ? MOBILE : DESKTOP;

  const next = useCallback(
    () => setActive((a) => (a + 1) % total),
    [total],
  );
  const prev = useCallback(
    () => setActive((a) => (a - 1 + total) % total),
    [total],
  );

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (expanded) {
        if (e.key === "Escape") setExpanded(false);
        return;
      }
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, next, prev]);

  useEffect(() => {
    if (!expanded) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [expanded]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -cfg.dragThreshold || info.velocity.x < -300) next();
    else if (info.offset.x > cfg.dragThreshold || info.velocity.x > 300) prev();
  };

  if (total === 0) return null;

  const post = featuredPosts[active];

  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeader title="Featured Posts" align="center" />

        <div
          className="relative mt-10 h-[230px] select-none sm:h-[260px] md:mt-16 md:h-[360px]"
          style={{ perspective: isMobile ? "1000px" : "1400px" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 flex cursor-grab touch-pan-y items-center justify-center active:cursor-grabbing"
            style={{ transformStyle: "preserve-3d" }}
          >
            {featuredPosts.map((p, i) => {
              const half = total / 2;
              let offset = i - active;
              if (offset > half) offset -= total;
              else if (offset < -half) offset += total;
              const abs = Math.abs(offset);
              if (abs > cfg.visible) return null;
              const isActive = offset === 0;
              const rotateY =
                -Math.sign(offset) *
                Math.min(abs * cfg.rotate, cfg.maxRotate);
              const x =
                Math.sign(offset) * cfg.spacing * Math.pow(abs, 0.85);

              return (
                <motion.button
                  key={p.title}
                  type="button"
                  onClick={() => {
                    if (isActive) setExpanded(true);
                    else setActive(i);
                  }}
                  aria-label={
                    isActive ? `View full image: ${p.title}` : `Show: ${p.title}`
                  }
                  className="absolute rounded-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                  initial={false}
                  animate={{
                    x,
                    rotateY,
                    z: isActive ? 60 : 0,
                    scale: isActive ? 1 : 0.84,
                    opacity: 1 - abs * 0.14,
                    zIndex: total - abs,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 30,
                    mass: 0.8,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="group relative overflow-hidden rounded-[22px] ring-1 ring-black/10"
                    style={{
                      width: "clamp(220px, 64vw, 360px)",
                      aspectRatio: "4 / 3",
                      background: backdrops[i % backdrops.length],
                      boxShadow: isActive
                        ? "0 35px 80px -20px rgba(0,0,0,0.35), 0 12px 30px -10px rgba(0,0,0,0.18)"
                        : "0 18px 40px -10px rgba(0,0,0,0.22)",
                    }}
                  >
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 360px, 64vw"
                        className="object-cover"
                        style={{ objectPosition: p.objectPosition ?? "center" }}
                        draggable={false}
                        priority={i < 2}
                      />
                    )}
                    {p.youtube && (
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/85 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                        <PlayIcon /> Watch
                      </span>
                    )}
                    {isActive && (
                      <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                        <ExpandIcon />
                        View full
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <div className="relative mx-auto mt-8 min-h-[180px] max-w-2xl px-2 text-center md:mt-14 md:min-h-[200px]">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {post.eyebrow}
            </p>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl md:text-3xl">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)] md:mt-4 md:text-base">
              {post.dek}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 md:mt-7 md:gap-3">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Read post
                <span aria-hidden>→</span>
              </a>
              {post.youtube && (
                <a
                  href={post.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] ring-1 ring-black/5 transition-colors hover:bg-black/[0.07]"
                >
                  <PlayIcon className="h-3 w-3" />
                  Watch on YouTube
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:mt-12 md:gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-[var(--color-ink)] ring-1 ring-black/5 transition-all hover:bg-black/[0.07] md:h-10 md:w-10"
          >
            <span aria-hidden>←</span>
          </button>
          <div className="flex items-center gap-1 md:gap-1.5">
            {featuredPosts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to post ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-5 bg-[var(--color-accent)] md:w-7"
                    : "w-1.5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-[var(--color-ink)] ring-1 ring-black/5 transition-all hover:bg-black/[0.07] md:h-10 md:w-10"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && post.image && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setExpanded(false)}
            role="dialog"
            aria-modal="true"
            aria-label={post.title}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/20 md:right-5 md:top-5"
            >
              <CloseIcon />
            </button>
            <motion.div
              className="relative z-10 flex max-h-full max-w-[1100px] flex-col items-center"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative max-h-[72vh] w-full overflow-hidden rounded-[20px] ring-1 ring-white/10 md:max-h-[78vh]"
                style={{ aspectRatio: "auto" }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1600}
                  height={1200}
                  sizes="100vw"
                  className="h-auto max-h-[72vh] w-auto max-w-full object-contain md:max-h-[78vh]"
                  priority
                />
              </div>
              <div className="mt-4 max-w-2xl px-2 text-center text-white md:mt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                  {post.eyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-tight md:text-xl">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-white/90"
                >
                  Read post
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
