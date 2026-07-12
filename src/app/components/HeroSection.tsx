import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background solid color taking up remaining space */}
      <div className="absolute inset-0 bg-adia-violet-dark" />

      {/* Image container covering the screen, rendering the image fully */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-3xl">
          <Image
            src="/images/beauty-and-elegance.jpg"
            alt="Adia jewellery model portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 48rem"
            className="object-contain object-center"
          />
        </div>
        {/* Subtle gradient overlay at bottom for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-adia-violet-dark via-adia-violet-dark/40 to-transparent pointer-events-none" />
      </div>

      {/*
       * Foreground text layer — sits above the image via z-index.
       * Positioned on the LEFT side to overlap the portrait edge.
       */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full max-w-7xl mx-auto px-6 lg:px-12 justify-end md:justify-between items-start md:items-end pb-16 md:pb-20 gap-6 md:gap-0">
        {/* Left Side: Brand Name & Tagline */}
        <div className="flex flex-col max-w-xl">
          {/* Brand name */}
          <h1
            id="hero-brand-name"
            className="font-[family-name:var(--font-script)] text-[clamp(6rem,12vw,10rem)] font-medium leading-none text-adia-cream pb-2 uppercase animate-slide-up-bottom [animation-delay:100ms] [animation-fill-mode:both]"
          >
            ADIA
          </h1>

          {/* Tagline */}
          <p
            id="hero-tagline"
            className="mt-3 font-[family-name:var(--font-cormorant)] text-[clamp(1.1rem,2.5vw,1.5rem)] font-light italic tracking-widest text-adia-lilac animate-slide-up-bottom [animation-delay:300ms] [animation-fill-mode:both]"
          >
            Adorn Yourself in Elegance
          </p>
        </div>

        {/* Right Side: Micro trim sub-copy */}
        <div className="flex flex-col text-left md:text-right max-w-[28ch] md:max-w-[24ch]">
          <p
            id="hero-subcopy"
            className="font-[family-name:var(--font-cormorant)] text-xs md:text-sm font-light leading-relaxed md:leading-loose tracking-[0.15em] md:tracking-[0.2em] text-adia-rose/80 uppercase animate-slide-up-bottom [animation-delay:500ms] [animation-fill-mode:both]"
          >
            Handcrafted premium jewellery for the woman who knows her worth.
          </p>
        </div>
      </div>

    </section>
  );
}
