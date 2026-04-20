import { getApiCount } from "@/data/apis";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-5xl mx-auto px-5 py-6 flex items-center justify-between">
        <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
          {getApiCount()} free public APIs · no keys required
        </span>
        <span className="text-[11px] text-[var(--color-text-muted)]">
          Next.js + Tailwind
        </span>
      </div>
    </footer>
  );
}
