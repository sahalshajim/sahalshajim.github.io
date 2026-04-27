"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#publications", label: "Publications" },
  { href: "#highlights", label: "Highlights" },
  { href: "#patents", label: "Patents" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white/72 backdrop-blur-xl border-b border-black/5"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a
          href="#top"
          className="text-base font-medium tracking-tight text-[var(--color-ink)] md:text-lg"
        >
          Sahal Shaji
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-normal text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Sahal_Shaji_Resume.pdf"
          className="hidden rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] md:inline-block"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
