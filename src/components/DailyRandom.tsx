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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 h-48 animate-pulse" />
    );
  }

  const cat = dailyApi.category;

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 md:p-12 cursor-pointer group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
      onClick={() => onSelect(dailyApi)}
    >
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            📡 오늘의 랜덤 API
          </span>
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80">
            {cat}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
          {dailyApi.name}
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
          {dailyApi.description}
        </p>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-sm font-medium text-white transition-colors">
            🚀 Try it now
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <span className="text-white/50 text-xs font-mono hidden md:block">
            {dailyApi.endpoint.length > 60 ? dailyApi.endpoint.slice(0, 60) + "..." : dailyApi.endpoint}
          </span>
        </div>
      </div>
    </div>
  );
}
