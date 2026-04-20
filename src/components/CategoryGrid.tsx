"use client";

import { categories, CategoryInfo } from "@/data/apis";

interface CategoryGridProps {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryGrid({ active, onChange }: CategoryGridProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 pb-2 min-w-max">
        {categories.map((cat: CategoryInfo) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap
              transition-all duration-200 border
              ${
                active === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                  : "bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-700/50 hover:text-white hover:border-slate-600"
              }
            `}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
