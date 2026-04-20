"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";
import ApiCard from "@/components/ApiCard";
import ApiDetail from "@/components/ApiDetail";
import DailyRandom from "@/components/DailyRandom";
import { ApiItem, getApisByCategory, searchApis, getApiCount } from "@/data/apis";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApi, setSelectedApi] = useState<ApiItem | null>(null);

  const filteredApis = useMemo(() => {
    if (searchQuery.trim()) {
      return searchApis(searchQuery);
    }
    return getApisByCategory(activeCategory);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} totalApis={getApiCount()} />

      <main className="flex-1 max-w-5xl mx-auto w-full px-5 py-6 space-y-5">
        <DailyRandom onSelect={setSelectedApi} />

        <div className="flex items-center justify-between">
          <p className="text-xs text-[var(--color-text-muted)] font-mono">
            {searchQuery
              ? <>{filteredApis.length} results for &quot;{searchQuery}&quot;</>
              : <>{filteredApis.length} APIs</>
            }
          </p>
        </div>

        <CategoryGrid active={activeCategory} onChange={setActiveCategory} />

        {filteredApis.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 animate-fade-up" key={activeCategory + searchQuery}>
            {filteredApis.map((api) => (
              <ApiCard key={api.id} api={api} onSelect={setSelectedApi} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-[var(--color-text-muted)]">
            <p className="text-sm">No results found</p>
            <p className="text-xs mt-1 opacity-60">Try a different search or category</p>
          </div>
        )}
      </main>

      <Footer />

      {selectedApi && (
        <ApiDetail api={selectedApi} onClose={() => setSelectedApi(null)} />
      )}
    </>
  );
}
