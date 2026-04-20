"use client";

import { ApiItem, getCategoryById } from "@/data/apis";

interface ApiCardProps {
  api: ApiItem;
  onSelect: (api: ApiItem) => void;
}

export default function ApiCard({ api, onSelect }: ApiCardProps) {
  const cat = getCategoryById(api.category);

  return (
    <button
      onClick={() => onSelect(api)}
      className="w-full text-left px-4 py-3.5 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border)] transition-all duration-150 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs">{cat?.icon}</span>
            <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white truncate">
              {api.name}
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] truncate">{api.description}</p>
        </div>
        <span className={`
          shrink-0 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider
          ${api.method === "GET"
            ? "text-[var(--color-accent)] bg-[var(--color-accent-dim)]"
            : "text-[var(--color-warn)] bg-[var(--color-warn-dim)]"
          }
        `}>
          {api.method}
        </span>
      </div>
    </button>
  );
}
