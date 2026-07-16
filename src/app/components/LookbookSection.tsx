"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: "The Golden Era",
    subtitle: "Timeless Bracelets",
    description: "Layered to perfection. Our gold bracelet stacks are designed to be mixed, matched, and cherished.",
    image: "/images/Gold-Bracelet-Stack-Inspiration.jpg",
  },
  {
    id: 2,
    title: "Luminous Pearls",
    subtitle: "Ocean's Treasure",
    description: "Sourced from the deepest waters, each pearl is hand-selected for its immaculate luster and perfect spherical form.",
    image: "/images/rishika73978-pearl-8012322_1920.jpg",
  },
  {
    id: 3,
    title: "Royal Amethyst",
    subtitle: "The Purple Rhinestone Set",
    description: "A commanding presence. This necklace set is reserved for moments that demand absolute royalty.",
    image: "/images/Purple-rhinestone-necklace-set.jpg",
  },
  {
    id: 4,
    title: "Modern Minimalist",
    subtitle: "Everyday Elegance",
    description: "Sleek lines and understated brilliance. Pieces designed to seamlessly transition from day to night.",
    image: "/images/pexels-accessory-1867039_1920.jpg",
  }
];

export default function LookbookSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      
      const { top, height } = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the target section
      const scrollableDistance = height - windowHeight;
      
      let progress = 0;
      if (top > 0) {
        progress = 0;
      } else if (-top > scrollableDistance) {
        progress = 1;
      } else {
        progress = -top / scrollableDistance;
      }
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map the continuous scroll progress to a discrete active index for snapping
  const maxIndex = LOOKBOOK_ITEMS.length - 1;
  const activeIndex = Math.min(maxIndex, Math.max(0, Math.round(scrollProgress * maxIndex)));

  // Calculate the horizontal translation based on the discrete active index.
  const xTransform = `translateX(-${activeIndex * 100}vw)`;

  return (
    <section 
      ref={targetRef} 
      // The height dictates how long the user must scroll to finish the horizontal animation.
      // Reducing to 200vh makes it so roughly one normal scroll motion triggers a slide transition.
      className="relative w-full bg-adia-violet-dark h-[200vh]"
      id="lookbook"
      aria-label="Lookbook Carousel"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-adia-violet-dark">
        
        {/* The horizontal scrolling container */}
        <div 
          className="flex h-full will-change-transform"
          style={{ 
            transform: xTransform, 
            transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" 
          }}
        >
          {LOOKBOOK_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              className="w-screen h-full flex-shrink-0 flex items-center justify-center relative px-5 md:px-24"
            >
              {/* Layout for each page of the lookbook */}
              <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
                
                {/* Image side - Alternate order based on index */}
                <div className={`w-full md:w-1/2 relative h-[50vh] md:h-[70vh] min-h-[400px] ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle elegant frame */}
                  <div className={`absolute inset-0 border border-adia-gold/30 transform ${index % 2 !== 0 ? '-translate-x-6' : 'translate-x-6'} translate-y-6 -z-10`} />
                </div>

                {/* Text side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] text-adia-gold uppercase mb-4">
                    {item.subtitle}
                  </span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-adia-cream mb-8 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-adia-lilac/80 max-w-md mb-10">
                    {item.description}
                  </p>
                  
                  {/* CTA with French Elegance recommendation */}
                  <Link 
                    href="/collections"
                    className="inline-flex w-fit items-center gap-3 font-[family-name:var(--font-cormorant)] text-sm font-light tracking-[0.2em] text-adia-cream uppercase transition-colors duration-300 hover:text-adia-gold group"
                  >
                    <span className="border-b border-adia-gold pb-1">Explore</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2 text-adia-gold">→</span>
                  </Link>
                </div>
              </div>
              
              {/* Big background watermark number */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                <span className="font-[family-name:var(--font-cormorant)] text-[50vw] font-bold text-adia-cream leading-none tracking-tighter">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Global sticky progress indicator overlay */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-px bg-adia-cream/20 z-50">
           <div 
             className="h-full bg-adia-gold" 
             style={{ width: `${scrollProgress * 100}%` }}
           />
        </div>

      </div>
    </section>
  );
}
