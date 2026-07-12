import Link from "next/link";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section 
      className="w-full relative py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hans-bracelet-671789_1920.jpg"
          alt="Adia bespoke jewelry"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-adia-charcoal/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-adia-violet-dark/30" />
      </div>
      
      <div className="relative z-10 max-w-4xl px-6">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-adia-cream mb-8 leading-tight">
          Begin Your <span className="text-adia-gold italic">Bespoke</span> Journey
        </h2>
        
        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-adia-cream/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          Discover the profound beauty of our exclusive collections, or work with our master artisans to create a legacy piece uniquely yours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link 
            href="/consultation"
            className="px-10 py-5 border border-adia-gold text-adia-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase hover:bg-adia-gold hover:text-adia-violet-dark transition-all duration-300"
          >
            Book a Consultation
          </Link>
          <Link 
            href="/collections"
            className="px-10 py-5 border border-adia-gold text-adia-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase hover:bg-adia-gold hover:text-adia-violet-dark transition-all duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
