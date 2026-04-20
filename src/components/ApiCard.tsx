"use client";

import { ApiItem } from "@/data/apis";
import { getCategoryById } from "@/data/apis";

interface ApiCardProps {
  api: ApiItem;
  onSelect: (api: ApiItem) => void;
}

export default function ApiCard({ api, onSelect }: ApiCardProps) {
  const cat = getCategoryById(api.category);

  return (
    <button
      onClick={() => onSelect(api)}
      className="w-full text-left p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-base">{cat?.icon}</span>
            <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors truncate">
              {api.name}
            </h3>
          </div>
          <p className="text-sm text-slate-400 mb-2">{api.description}</p>
          <p className="text-xs text-slate-500 font-mono truncate">{api.endpoint}</p>
        </div>
        <span
          className={`
            shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wider
            ${api.method === "GET" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" : "bg-blue-500/15 text-blue-400 border border-blue-500/20"}
          `}
        >
          {api.method}
        </span>
      </div>
    </button>
  );
}
