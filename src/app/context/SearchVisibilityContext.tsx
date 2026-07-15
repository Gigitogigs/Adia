"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchVisibilityContextType {
  isSearchIconVisible: boolean;
  setIsSearchIconVisible: (visible: boolean) => void;
}

const SearchVisibilityContext = createContext<SearchVisibilityContextType | undefined>(undefined);

export function SearchVisibilityProvider({ children }: { children: ReactNode }) {
  const [isSearchIconVisible, setIsSearchIconVisible] = useState(false);

  return (
    <SearchVisibilityContext.Provider value={{ isSearchIconVisible, setIsSearchIconVisible }}>
      {children}
    </SearchVisibilityContext.Provider>
  );
}

export function useSearchVisibility() {
  const context = useContext(SearchVisibilityContext);
  if (context === undefined) {
    throw new Error("useSearchVisibility must be used within a SearchVisibilityProvider");
  }
  return context;
}
