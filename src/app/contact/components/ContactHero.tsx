export default function ContactHero() {
  return (
    <section className="w-full bg-adia-cream min-h-[40vh] flex flex-col items-center justify-center text-center px-5 md:px-6 pt-24 pb-8 md:pt-32 md:pb-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] text-adia-gold uppercase mb-6 block">
          Connect With Us
        </span>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,6rem)] leading-none text-adia-charcoal font-medium md:font-light mb-8">
          Private <span className="font-[family-name:var(--font-script)] text-adia-violet italic">Inquiries</span>
        </h1>
      </div>
    </section>
  );
}
