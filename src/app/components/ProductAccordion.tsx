"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

export default function ProductAccordion({ items }: { items: AccordionItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-adia-gold/30 max-w-md w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-adia-gold/30">
          <button
            onClick={() => toggle(index)}
            className="w-full py-4 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest flex justify-between items-center text-adia-charcoal text-left"
          >
            {item.title}
            <span className={`transition-transform duration-300 ease-in-out ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
              +
            </span>
          </button>
          
          <div 
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pb-4 font-[family-name:var(--font-inter)] text-sm font-light text-adia-charcoal/70 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
