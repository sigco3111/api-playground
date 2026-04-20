"use client";

import { categories, CategoryInfo } from "@/data/apis";

interface CategoryGridProps {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryGrid({ active, onChange }: CategoryGridProps) {
  return (
    <nav className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-1 min-w-max">
        {categories.map((cat: CategoryInfo) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium whitespace-nowrap
              transition-colors duration-150 border
              ${
                active === cat.id
                  ? "bg-[var(--color-accent-dim)] text-[var(--color-accent)] border-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]"
              }
            `}
          >
            <span className="text-xs">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
