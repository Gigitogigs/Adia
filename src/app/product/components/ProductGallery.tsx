"use client";

import { useState, useRef, UIEvent } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    // Calculate the width of one snap item (including gap if possible, but clientWidth is just the container)
    // Actually the gap is included in the scroll width. Let's just use the first child's width.
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    const width = firstChild.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToImage = (index: number) => {
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    // We don't strictly need the width as we can scroll directly via clientWidth * index
    // The gap is 16px (gap-4). So the scroll distance is width + gap if it wasn't snap.
    // Snap scroll to will handle it if we just scroll by index * container width roughly.
    scrollRef.current.scrollTo({
      left: scrollRef.current.clientWidth * index,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col border-b lg:border-b-0 lg:border-r border-adia-gold/20 pt-1 lg:pt-0 bg-white relative">
      {/* Scrollable Image Gallery (Swipe on mobile, stack on desktop) */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar gap-4 lg:gap-0 px-4 lg:px-0"
      >
        {images.map((img, index) => (
          <div 
            key={index} 
            className="w-full shrink-0 snap-center aspect-[3/4] lg:aspect-auto lg:h-[90vh] p-4 lg:p-10 xl:p-12 border border-adia-gold/20 lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:border-b last:border-b-0 bg-white flex items-center justify-center rounded-sm lg:rounded-none relative"
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`${productName} - View ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Visual Indicators (Dots) - Only visible on mobile where swipe is active */}
      <div className="flex lg:hidden justify-center items-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-adia-charcoal w-4" : "bg-adia-charcoal/30"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
