"use client";

import SidePanel from "./SidePanel";
import { CATEGORIES, METALS, GEMS_LIST } from "../data/productData";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  setActiveCategory: (val: string) => void;
  activeStone: string;
  setActiveStone: (val: string) => void;
  activeMetal: string;
  setActiveMetal: (val: string) => void;
}

export default function FilterPanel({
  isOpen,
  onClose,
  activeCategory,
  setActiveCategory,
  activeStone,
  setActiveStone,
  activeMetal,
  setActiveMetal,
}: FilterPanelProps) {
  
  const FilterSection = ({ title, options, activeValue, onChange }: { title: string, options: string[], activeValue: string, onChange: (val: string) => void }) => (
    <div className="mb-10">
      <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-adia-charcoal uppercase tracking-widest mb-6 border-b border-adia-charcoal/10 pb-2">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-4 cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5">
              <input
                type="radio"
                name={title}
                value={option}
                checked={activeValue === option}
                onChange={() => onChange(option)}
                className="appearance-none w-5 h-5 border border-adia-charcoal/30 rounded-none checked:border-adia-charcoal transition-colors peer cursor-pointer"
              />
              <div className="absolute w-2.5 h-2.5 bg-adia-charcoal opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <span className={`font-[family-name:var(--font-cormorant)] text-lg tracking-wide transition-colors ${
              activeValue === option ? "text-adia-charcoal font-medium" : "text-adia-charcoal/70 group-hover:text-adia-charcoal"
            }`}>
              {option === "All" ? `All ${title}` : option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <SidePanel isOpen={isOpen} onClose={onClose} title="Filters">
      <div className="flex flex-col">
        <FilterSection 
          title="Categories" 
          options={CATEGORIES} 
          activeValue={activeCategory} 
          onChange={setActiveCategory} 
        />
        <FilterSection 
          title="Stones" 
          options={["All", ...GEMS_LIST]} 
          activeValue={activeStone} 
          onChange={setActiveStone} 
        />
        <FilterSection 
          title="Metals" 
          options={["All", ...METALS.filter(m => m !== "All")]} 
          activeValue={activeMetal} 
          onChange={setActiveMetal} 
        />

        <button 
          onClick={onClose}
          className="w-full mt-8 bg-adia-charcoal text-adia-cream py-4 font-[family-name:var(--font-cormorant)] text-lg uppercase tracking-widest hover:bg-adia-gold transition-colors"
        >
          View Results
        </button>
      </div>
    </SidePanel>
  );
}
