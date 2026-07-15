"use client";

import { useState } from "react";
import FilterPanel from "./FilterPanel";
import SortPanel from "./SortPanel";

interface FilterBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeStone: string;
  setActiveStone: (stone: string) => void;
  activeMetal: string;
  setActiveMetal: (metal: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function FilterBar({
  activeCategory,
  setActiveCategory,
  activeStone,
  setActiveStone,
  activeMetal,
  setActiveMetal,
  sortBy,
  setSortBy,
}: FilterBarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Derive total active filters count (optional, for badge)
  const activeFiltersCount = 
    (activeCategory !== "All" ? 1 : 0) + 
    (activeStone !== "All" ? 1 : 0) + 
    (activeMetal !== "All" ? 1 : 0);

  return (
    <>
      <div className="w-full bg-adia-cream sticky top-[64px] z-40 border-y border-adia-charcoal/10 shadow-sm transition-all">
        <div className="w-full flex justify-end items-center px-6 lg:px-12 py-4 gap-8">
          
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-sm font-medium tracking-widest uppercase text-adia-charcoal hover:text-adia-gold transition-colors"
          >
            Filter
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-adia-charcoal text-adia-cream flex items-center justify-center text-xs ml-1">
                {activeFiltersCount}
              </span>
            )}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>

          <button 
            onClick={() => setIsSortOpen(true)}
            className="flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-sm font-medium tracking-widest uppercase text-adia-charcoal hover:text-adia-gold transition-colors"
          >
            Sort By
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          
        </div>
      </div>

      <FilterPanel 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeStone={activeStone}
        setActiveStone={setActiveStone}
        activeMetal={activeMetal}
        setActiveMetal={setActiveMetal}
      />

      <SortPanel 
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </>
  );
}
