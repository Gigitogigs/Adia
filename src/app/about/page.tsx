import Image from "next/image";
import BrandStory from "./components/BrandStory";
import CtaSection from "@/app/components/CtaSection";
import { getAssetUrl } from "@/utils/assetUrl";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">

      {/* Full-Viewport Hero */}
      <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={getAssetUrl("/images/about-hero.jpg")}
          alt="Adia — Our Story"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 pointer-events-none" />

        <div className="relative z-10 text-center flex flex-col items-center px-6 -mt-24">
          <p className="font-[family-name:var(--font-inter)] text-adia-gold text-xs tracking-[0.4em] uppercase mb-6">
            Our Heritage &amp; Promise
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,7rem)] leading-none text-white font-medium md:font-light tracking-widest mb-6">
            The Adia <span className="font-[family-name:var(--font-script)] italic text-adia-gold">Vision</span>
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* CTA with video background */}
      <CtaSection
        headline={
          <>Let&apos;s Create <span className="text-adia-gold italic">Something</span> Together</>
        }
        subtext="Every masterpiece begins with a single conversation. Share your vision with our artisans and watch it take shape in gold and gemstone."
        videoSrc={getAssetUrl("/videos/hero-jewels-opt.mp4")}
      />

    </main>
  );
}
