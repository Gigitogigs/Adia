"use client";

import SidePanel from "./SidePanel";

interface SortPanelProps {
  isOpen: boolean;
  onClose: () => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function SortPanel({
  isOpen,
  onClose,
  sortBy,
  setSortBy,
}: SortPanelProps) {
  return (
    <SidePanel isOpen={isOpen} onClose={onClose} title="Sort By">
      <div className="flex flex-col gap-4 mt-4">
        {SORT_OPTIONS.map((option) => (
          <label key={option.value} className="flex items-center gap-4 cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5">
              <input
                type="radio"
                name="sort"
                value={option.value}
                checked={sortBy === option.value}
                onChange={() => {
                  setSortBy(option.value);
                  setTimeout(onClose, 300); // Auto close after short delay for better UX
                }}
                className="appearance-none w-5 h-5 border border-adia-charcoal/30 rounded-none checked:border-adia-charcoal transition-colors peer cursor-pointer"
              />
              <div className="absolute w-2.5 h-2.5 bg-adia-charcoal opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <span className={`font-[family-name:var(--font-cormorant)] text-xl tracking-wide transition-colors ${
              sortBy === option.value ? "text-adia-charcoal font-medium" : "text-adia-charcoal/70 group-hover:text-adia-charcoal"
            }`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </SidePanel>
  );
}
