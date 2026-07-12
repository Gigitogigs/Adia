export default function AboutHero() {
  return (
    <section className="w-full bg-adia-violet-dark min-h-[50vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-32">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#DCC9DD 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] text-adia-gold uppercase mb-6 block">
          Our Heritage & Promise
        </span>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(4rem,8vw,7rem)] leading-none text-adia-cream font-light mb-8">
          The Adia <span className="font-[family-name:var(--font-script)] text-adia-gold italic">Vision</span>
        </h1>
        <div className="h-24 w-px bg-gradient-to-b from-adia-gold to-transparent" />
      </div>
    </section>
  );
}
