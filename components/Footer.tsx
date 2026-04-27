import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 px-6 text-xs text-[var(--color-ink-muted)] md:flex-row md:items-center">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a
            href={profile.scholar}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-ink)]"
          >
            Scholar
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-ink)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-ink)]"
          >
            GitHub
          </a>
          <a href={profile.resumePdf} className="hover:text-[var(--color-ink)]">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
