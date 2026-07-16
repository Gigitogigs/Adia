import Image from "next/image";

export default function StorySection() {
  return (
    <section 
      id="story" 
      aria-label="L'Éclat Éternel Feature"
      className="relative w-full bg-adia-cream py-8 md:py-32 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-adia-rose/10 -skew-x-12 transform origin-top-right" />

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:flex relative max-w-7xl mx-auto px-6 lg:px-12 flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-8">
        
        {/* Left side: Editorial Feature Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          {/* Lifestyle backdrop */}
          <div className="relative w-3/4 h-[60vh] md:h-[70vh] min-h-[500px] z-0 grayscale-[20%]">
            <Image
              src="/images/life in black.jpg"
              alt="Adia elegant lifestyle"
              fill
              className="object-cover object-center shadow-lg"
              sizes="(max-width: 1024px) 75vw, 40vw"
            />
          </div>
          
          {/* Highlighted Jewel (Overlapping) */}
          <div className="absolute -bottom-16 -right-4 md:-right-8 w-2/3 h-[45vh] min-h-[350px] z-10 border-[8px] border-adia-cream shadow-2xl">
            <Image
              src="/images/hans-bracelet-671789_1920.jpg"
              alt="L'Éclat Éternel rings"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 66vw, 35vw"
            />
          </div>
        </div>

        {/* Right side: Editorial Text */}
        <div className="w-full lg:w-1/2 flex flex-col mt-24 lg:mt-16 relative z-20 lg:pl-12">
          
          <div className="mb-8">
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] text-adia-gold uppercase block mb-4">
              18k Solid Gold · Flawless Clarity
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-black tracking-wide leading-tight">
              L&apos;Éclat <br />
              <span className="font-[family-name:var(--font-script)] text-adia-gold text-6xl md:text-8xl lowercase">éternel</span>
            </h2>
          </div>
          
          <div className="bg-adia-cream/60 backdrop-blur-sm p-0 md:p-6 text-black">
            <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-[family-name:var(--font-display)] first-letter:text-black first-letter:leading-[0.8] mb-6">
              Born from a single, unbroken line of 18-karat gold, the Éclat Éternel ring captures the essence of unending devotion. Our master jewelers spend over forty hours hand-polishing the band to achieve its liquid-like reflection, perfectly framing the center stone. It is not just a ring; it is a physical manifestation of light.
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed">
              Each diamond is ethically sourced and meticulously examined to ensure it meets our rigorous standards of brilliance. The resulting piece catches even the faintest glimmer, casting a kaleidoscope of warmth across the skin. To wear it is to carry a legacy of uncompromising beauty wherever you go.
            </p>
          </div>

        </div>

      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden flex flex-col w-full max-w-7xl mx-auto px-5 gap-8 relative z-20">
        
        {/* Top Row: Title + Square Image */}
        <div className="flex flex-row justify-between items-center w-full gap-4">
          <div className="w-5/12 flex flex-col pt-4">
            <span className="font-[family-name:var(--font-cormorant)] text-xs font-bold tracking-[0.2em] text-adia-gold uppercase block mb-3">
              18k Solid Gold
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-black tracking-wide leading-tight">
              L&apos;Éclat <br />
              <span className="font-[family-name:var(--font-script)] text-adia-gold text-5xl lowercase">éternel</span>
            </h2>
          </div>
          
          <div className="w-7/12 relative aspect-square border-[4px] border-adia-cream shadow-lg">
            <Image
              src="/images/hans-bracelet-671789_1920.jpg"
              alt="L'Éclat Éternel rings"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw"
            />
          </div>
        </div>

        {/* Bottom Row: Description */}
        <div className="flex flex-col text-black bg-adia-cream/60 backdrop-blur-sm pt-2">
          <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed first-letter:float-left first-letter:text-6xl first-letter:pr-3 first-letter:font-[family-name:var(--font-display)] first-letter:text-black first-letter:leading-[0.8] mb-4">
            Born from a single, unbroken line of 18-karat gold, the Éclat Éternel ring captures the essence of unending devotion. Our master jewelers spend over forty hours hand-polishing the band to achieve its liquid-like reflection, perfectly framing the center stone. It is not just a ring; it is a physical manifestation of light.
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed">
            Each diamond is ethically sourced and meticulously examined to ensure it meets our rigorous standards of brilliance. The resulting piece catches even the faintest glimmer, casting a kaleidoscope of warmth across the skin. To wear it is to carry a legacy of uncompromising beauty wherever you go.
          </p>
        </div>
      </div>
    </section>
  );
}
