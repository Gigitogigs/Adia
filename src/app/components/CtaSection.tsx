import Link from "next/link";
import Image from "next/image";

interface CtaSectionProps {
  headline?: React.ReactNode;
  subtext?: string;
  videoSrc?: string;
}

export default function CtaSection({
  headline = (
    <>Begin Your <span className="text-adia-gold italic">Atelier</span> Journey</>
  ),
  subtext = "Discover the profound beauty of our exclusive collections, or work with our master artisans to create a legacy piece uniquely yours.",
  videoSrc,
}: CtaSectionProps) {
  return (
    <section 
      className="w-full relative py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background: Video or Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hans-bracelet-671789_1920.jpg"
            alt="Adia custom jewelry"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-adia-charcoal/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-adia-violet-dark/30" />
      </div>
      
      <div className="relative z-10 max-w-4xl px-6">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-adia-cream mb-8 leading-tight">
          {headline}
        </h2>
        
        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-adia-cream/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link 
            href="/contact"
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
