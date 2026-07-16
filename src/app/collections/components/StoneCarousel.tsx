"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GEMS_LIST } from "../data/productData";

const STONE_DATA: Record<string, { image: string }> = {
  Amethyst: { image: "/images/Amethyst/amethyst-1.jpg" },
  Diamond: { image: "/images/Diamond/18225573488365493.jpg" },
  Emerald: { image: "/images/Emerald/8373949304225451.jpg" },
  Ruby: { image: "/images/Ruby/Ruby Moissanite Pendant Necklace, Sterling Silver Diamond Halo, July Birthstone.jpg" },
  Sapphire: { image: "/images/Sapphire/Blueberry Tanzanite Couture Diamond Necklace.jpg" },
  Gold: { image: "/images/Gold/70437491205309.jpg" },
};

export default function StoneCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-adia-cream pt-4 pb-12 overflow-hidden relative">

      {/* Massive Watermark */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-[0.04]">
        <h2 className="font-[family-name:var(--font-script)] text-[12rem] md:text-[20rem] text-adia-charcoal leading-none whitespace-nowrap">
          GEMS
        </h2>
      </div>

      <div className="px-6 lg:px-12 mb-8 relative z-10 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium md:font-light text-adia-charcoal uppercase tracking-[0.2em]">
          Explore The Gems
        </h2>
        <div className="h-px w-24 bg-adia-gold mx-auto mt-4" />
      </div>

      <div className="relative group/carousel">
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-adia-cream/80 backdrop-blur-sm p-3 rounded-full border border-adia-gold/50 text-adia-gold opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-adia-gold hover:text-adia-violet"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-adia-cream/80 backdrop-blur-sm p-3 rounded-full border border-adia-gold/50 text-adia-gold opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-adia-gold hover:text-adia-violet"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar px-6 lg:px-12 snap-x snap-mandatory relative z-10 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GEMS_LIST.map((stone, index) => (
            <div key={`${stone}-${index}`} className="flex-none w-64 snap-center flex flex-col items-center group">

              <Link
                href={`/collections/${stone.toLowerCase()}`}
                className="w-full h-[340px] relative cursor-pointer block rounded-t-full border-2 border-adia-gold/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden bg-white transition-all duration-500 group-hover:border-adia-gold group-hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] group-hover:-translate-y-2"
              >
                <Image
                  src={STONE_DATA[stone].image}
                  alt={`${stone} collection`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="256px"
                />
              </Link>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-adia-charcoal tracking-widest uppercase mt-6 text-center group-hover:text-adia-gold transition-colors duration-500">
                {stone}
              </h3>

              <Link
                href={`/collections/${stone.toLowerCase()}`}
                className="mt-3 text-xs font-semibold tracking-[0.2em] text-adia-charcoal/50 uppercase border-b border-transparent group-hover:border-adia-gold group-hover:text-adia-gold transition-all duration-500 pb-1"
              >
                Discover
              </Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
