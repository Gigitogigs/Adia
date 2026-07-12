export default function VisionQuote() {
  return (
    <section className="w-full bg-adia-cream py-24 md:py-40 px-6 lg:px-12 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* The Giant Quote mark */}
        <span className="font-[family-name:var(--font-cormorant)] text-8xl md:text-9xl text-adia-gold/20 leading-none h-16 md:h-24 overflow-hidden block">
          &ldquo;
        </span>
        
        <blockquote className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] text-adia-charcoal leading-snug md:leading-tight italic font-light max-w-4xl z-10 relative mt-4 md:mt-8">
          True luxury is not found in the abundance of stones, but in the quiet, undeniable perfection of a piece crafted specifically for you. We don&apos;t just forge jewelry; we forge legacies.
        </blockquote>
      </div>
    </section>
  );
}
