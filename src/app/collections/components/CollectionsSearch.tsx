"use client";

import { useEffect, useRef } from "react";
import { useSearchVisibility } from "@/app/context/SearchVisibilityContext";

interface CollectionsSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function CollectionsSearch({ searchQuery, setSearchQuery }: CollectionsSearchProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setIsSearchIconVisible } = useSearchVisibility();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the search bar is NOT intersecting (not visible), we want to show the navbar icon
        setIsSearchIconVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Account for the navbar height roughly
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [setIsSearchIconVisible]);

  return (
    <div ref={containerRef} className="w-full bg-adia-cream py-12 px-6 lg:px-12 flex justify-center">
      <div className="w-full max-w-4xl relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search collections, stones, or pieces..."
          className="w-full bg-transparent border-b-2 border-adia-charcoal py-4 text-adia-charcoal focus:outline-none focus:border-adia-charcoal transition-colors font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl placeholder:text-adia-charcoal/30 pr-12"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-adia-charcoal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
