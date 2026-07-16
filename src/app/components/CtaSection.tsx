"use client";

import { useRef, useEffect } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only set the src when the section becomes visible
          const source = video.querySelector("source") as HTMLSourceElement | null;
          if (source && !source.src) {
            source.src = source.dataset.src || "";
            video.load();
            video.play().catch(() => {}); // Autoplay may be blocked, ignore error
          }
          observer.disconnect(); // Only need to trigger once
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters the viewport
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full relative py-16 md:py-24 lg:py-48 flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background: Video or Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* data-src used by IntersectionObserver to lazy-load the video */}
            <source data-src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hans-bracelet-671789_1920.jpg"
            alt="Adia custom jewelry"
            fill
            quality={60}
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-adia-charcoal/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-adia-violet-dark/30" />
      </div>
      
      <div className="relative z-10 max-w-4xl px-5 md:px-6">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-7xl font-medium md:font-light text-adia-cream mb-8 leading-tight">
          {headline}
        </h2>
        
        <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-2xl text-adia-cream/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 border border-adia-gold text-adia-gold font-[family-name:var(--font-cormorant)] text-sm md:text-lg tracking-widest uppercase hover:bg-adia-gold hover:text-adia-violet-dark transition-all duration-300"
          >
            Book a Consultation
          </Link>
          <Link 
            href="/collections"
            className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 border border-adia-gold text-adia-gold font-[family-name:var(--font-cormorant)] text-sm md:text-lg tracking-widest uppercase hover:bg-adia-gold hover:text-adia-violet-dark transition-all duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
