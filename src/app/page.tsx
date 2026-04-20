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

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Hero - Daily Random API */}
        <DailyRandom onSelect={setSelectedApi} />

        {/* Stats bar */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">
            {searchQuery ? (
              <>🔍 &quot;{searchQuery}&quot; 검색 결과: <span className="text-white font-semibold">{filteredApis.length}</span>개</>
            ) : (
              <>{filteredApis.length}개의 API</>
            )}
          </p>
        </div>

        {/* Category Grid */}
        <CategoryGrid active={activeCategory} onChange={setActiveCategory} />

        {/* API Grid */}
        {filteredApis.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in" key={activeCategory + searchQuery}>
            {filteredApis.map((api) => (
              <ApiCard key={api.id} api={api} onSelect={setSelectedApi} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
            <span className="text-5xl mb-4">🔍</span>
            <p className="text-lg font-medium">결과가 없습니다</p>
            <p className="text-sm mt-1">다른 검색어나 카테고리를 시도해보세요</p>
          </div>
        )}
      </main>

      <Footer />

      {/* API Detail Modal */}
      {selectedApi && (
        <ApiDetail api={selectedApi} onClose={() => setSelectedApi(null)} />
      )}
    </>
  );
}
