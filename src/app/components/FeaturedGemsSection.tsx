"use client";

import { useState } from "react";
import Image from "next/image";

const GEMS = [
  {
    id: "amethyst",
    name: "Amethyst",
    description: "Deep, mysterious purples that carry the quiet strength of royalty and the wisdom of the ancients.",
    images: [
      "/images/Amethyst/amethyst-1.jpg",
      "/images/Amethyst/amethyst-3.jpg",
      "/images/Amethyst/188306828165091116.jpg"
    ]
  },
  {
    id: "diamond",
    name: "Diamond",
    description: "The ultimate expression of light and endurance. Flawless clarity that remains forever untamed.",
    images: [
      "/images/Diamond/diamond-1.jpg",
      "/images/Diamond/diamond-2.jpg",
      "/images/Diamond/351912467107900.jpg"
    ]
  },
  {
    id: "emerald",
    name: "Emerald",
    description: "Rich, verdant greens that evoke the lushness of nature and the allure of hidden gardens.",
    images: [
      "/images/Emerald/emerald-1.jpg",
      "/images/Emerald/emerald-2.jpg",
      "/images/Emerald/49258189670365884.jpg"
    ]
  },
  {
    id: "ruby",
    name: "Ruby",
    description: "A passionate, vibrant red. The stone of life, burning with an unquenchable internal fire.",
    images: [
      "/images/Ruby/ruby-feat-1.jpg",
      "/images/Ruby/ruby-feat-2.jpg",
      "/images/Ruby/ruby-feat-3.jpg"
    ]
  },
  {
    id: "sapphire",
    name: "Sapphire",
    description: "Celestial blues that capture the profound depth of the midnight sky and the endless ocean.",
    images: [
      "/images/Sapphire/sapphire-1.jpg",
      "/images/Sapphire/sapphire-2.jpg",
      "/images/Sapphire/sapphire-3.jpg"
    ]
  }
];

export default function FeaturedGemsSection() {
  const [activeGem, setActiveGem] = useState(GEMS[0]);

  return (
    <section className="w-full bg-adia-cream pt-[100px] pb-32 md:pb-32 relative overflow-hidden" id="featured-gems">
      {/* Decorative texture overlay to mimic old paper/canvas */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#423155 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-8 relative z-10">
        
        {/* Left: The Ledger Index */}
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <span className="font-[family-name:var(--font-cormorant)] text-sm md:text-base font-semibold tracking-[0.3em] text-adia-charcoal uppercase mb-12 block">
            The Gemologist&apos;s Ledger
          </span>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {GEMS.map((gem) => {
              const isActive = activeGem.id === gem.id;
              return (
                <div key={gem.id} className="flex flex-col">
                  <button
                    onMouseEnter={() => setActiveGem(gem)}
                    onClick={() => setActiveGem(gem)}
                    className={`text-left transition-all duration-500 group ${isActive ? 'opacity-100 translate-x-4' : 'opacity-30 hover:opacity-70'}`}
                  >
                    <h3 className="font-[family-name:var(--font-script)] text-6xl md:text-8xl text-adia-violet-dark lowercase">
                      {gem.name}
                    </h3>
                    {/* Subtle underline for the active item */}
                    <div className={`h-px bg-adia-gold mt-2 transition-all duration-700 ${isActive ? 'w-full max-w-[150px]' : 'w-0'}`} />
                  </button>
                  
                  {/* Accordion Description */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-4 translate-x-4' : 'max-h-0 opacity-0 mt-0 translate-x-0'}`}
                  >
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-adia-charcoal leading-relaxed max-w-sm">
                      {gem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: The Collage Page */}
        <div className="w-full md:w-7/12 relative h-[600px] md:h-[800px] mt-12 md:mt-0">
          
          {GEMS.map((gem) => {
            const isActive = activeGem.id === gem.id;
            
            return (
              <div 
                key={gem.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                {/* Image 1: Large Main Image */}
                <div className="absolute top-0 md:top-[5%] right-0 w-[80%] h-[50%] md:h-[60%] border-[12px] border-adia-cream shadow-2xl z-10 transform translate-x-4 md:-translate-x-4">
                  <Image
                    src={gem.images[0]}
                    alt={`${gem.name} feature 1`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                  <div className="absolute inset-0 border border-adia-gold/40 z-20 pointer-events-none" />
                </div>

                {/* Image 2: Small overlapping detail */}
                <div className="absolute top-[40%] md:top-[50%] left-0 md:left-[5%] w-[55%] md:w-[45%] h-[35%] md:h-[40%] border-[8px] border-adia-cream shadow-xl z-20 transform md:-translate-y-8 -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={gem.images[1]}
                    alt={`${gem.name} feature 2`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 55vw, 25vw"
                  />
                </div>

                {/* Image 3: Background subtle image */}
                <div className="absolute bottom-0 right-[10%] w-[50%] h-[30%] opacity-90 shadow-lg z-0 grayscale-[20%]">
                  <Image
                    src={gem.images[2]}
                    alt={`${gem.name} feature 3`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
