"use client";

import { useState, useEffect } from "react";
import { ApiItem, getDailyRandomApi } from "@/data/apis";

interface DailyRandomProps {
  onSelect: (api: ApiItem) => void;
}

export default function DailyRandom({ onSelect }: DailyRandomProps) {
  const [dailyApi, setDailyApi] = useState<ApiItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDailyApi(getDailyRandomApi());
    setMounted(true);
  }, []);

  if (!mounted || !dailyApi) {
    return (
      <div className="border border-[var(--color-border)] rounded-lg h-[180px] bg-[var(--color-surface)] animate-pulse" />
    );
  }

  return (
    <div
      className="border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] p-6 md:p-8 cursor-pointer group hover:border-[var(--color-accent)] transition-colors duration-200"
      onClick={() => onSelect(dailyApi)}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
        <span className="text-[11px] font-medium tracking-wider uppercase text-[var(--color-text-muted)]">
          Today&apos;s Pick
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-1.5 tracking-tight">
            {dailyApi.name}
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] max-w-lg">
            {dailyApi.description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <code className="hidden md:block text-xs text-[var(--color-text-muted)] font-mono bg-[var(--color-bg)] px-3 py-1.5 rounded border border-[var(--color-border-light)] max-w-xs truncate">
            {dailyApi.endpoint}
          </code>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] group-hover:gap-2.5 transition-all duration-200">
            Try
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
