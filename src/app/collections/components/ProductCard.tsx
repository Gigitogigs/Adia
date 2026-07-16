"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../data/productData";
import { formatPrice } from "@/app/lib/format";

import Link from "next/link";

export default function ProductCard({ product, size = "normal" }: { product: Product, size?: "normal" | "small" }) {
  const [isBookmarked, setIsBookmarked] = useState(product.isBookmarked);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const formattedPrice = formatPrice(product.price);

  const heightClasses = size === "small" 
    ? "h-[35vh] md:h-[40vh] lg:h-[60vh]" 
    : "h-[40vh] md:h-[50vh] lg:h-[80vh]";

  return (
    <Link 
      href={`/product/${product.id}`}
      className={`group relative w-full ${heightClasses} overflow-hidden cursor-pointer bg-adia-charcoal/5 block`}
    >
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Bookmark Icon */}
      <button 
        onClick={toggleBookmark}
        className="absolute top-4 right-4 z-20 p-2 text-adia-cream hover:text-adia-gold transition-colors"
        aria-label="Bookmark"
      >
        {isBookmarked ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-adia-gold">
            <path fillRule="evenodd" d="M6.32 2.577a4.901 4.901 0 013.186 1.184l2.494 2.138 2.494-2.138c.883-.757 2.023-1.184 3.186-1.184 2.898 0 5.25 2.352 5.25 5.25v13.5a.75.75 0 01-1.22.58l-6.71-5.751a.75.75 0 00-.98 0l-6.71 5.75a.75.75 0 01-1.22-.58V7.827c0-2.898 2.352-5.25 5.25-5.25z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:stroke-adia-gold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        )}
      </button>

      {/* Overlay: Gradient on mobile for text legibility, solid dark on desktop hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-adia-charcoal/90 via-transparent to-transparent md:bg-none md:bg-adia-charcoal/70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

      {/* Content Box: Always visible on mobile, hover-reveal on desktop */}
      <div className="absolute inset-x-0 bottom-0 p-2 md:p-8 flex flex-col items-center text-center z-10 md:opacity-0 md:translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 ease-out">
        <p className="hidden md:block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] text-adia-gold uppercase mb-2">
          {product.stone} · {product.metal}
        </p>
        <h3 className="font-[family-name:var(--font-cormorant)] text-base md:text-2xl text-adia-cream mb-1 md:mb-2 tracking-wide leading-tight px-1">
          {product.name}
        </h3>
        <p className="hidden md:block font-[family-name:var(--font-cormorant)] text-sm text-adia-cream/70 mb-6 max-w-[20ch]">
          {product.description}
        </p>
        <div className="flex flex-col items-center w-full">
          <span className="font-[family-name:var(--font-cormorant)] text-[11px] md:text-lg text-adia-gold tracking-widest mt-1 md:mt-0">
            {formattedPrice}
          </span>
        </div>
      </div>
    </Link>
  );
}
