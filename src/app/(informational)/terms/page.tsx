export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl text-adia-charcoal mb-8 font-medium md:font-light">
        Terms of Service
      </h2>
      
      <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal/60 mb-12 italic">
        Last Updated: July 2026
      </p>

      <div className="flex flex-col gap-12">
        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            1. Agreement to Terms
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            These Terms of Service constitute a legally binding agreement made between you and Adia concerning your access to and use of our website as well as any other media form, mobile application, or custom service related thereto.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            2. Custom Commissions
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            Our custom creation process involves extensive consultation, sourcing of rare gemstones, and masterful craftsmanship. Due to the highly personalized nature of these commissions:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal">
            <li>A non-refundable deposit of 50% is required before any stone sourcing or design drafting begins.</li>
            <li>Once the final design is approved and casting begins, the commission cannot be canceled.</li>
            <li>Final payment is due prior to the delivery or collection of the completed masterpiece.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            3. Intellectual Property Rights
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            No part of the Site, no Content, and no Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever without our express prior written permission.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            4. Pricing and Availability
          </h3>
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-adia-charcoal/80 leading-relaxed">
            All prices are subject to change without notice. Due to the rarity of our materials, certain pieces are strictly one-of-a-kind. We reserve the right to discontinue any product at any time. We cannot guarantee that the colors and details of the pieces you see on your monitor will be perfectly accurate.
          </p>
        </section>
      </div>
    </div>
  );
}
