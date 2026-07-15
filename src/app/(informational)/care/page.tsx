export default function CarePage() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl text-adia-charcoal mb-12 font-light">
        Jewelry Care & Preservation
      </h2>
      
      <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-12">
        An Adia creation is designed to outlast its wearer, serving as a luminous heirloom for generations to come. However, the delicate interplay of fine metals and rare gemstones requires thoughtful stewardship. Below are our official guidelines for preserving the brilliance of your masterpiece.
      </p>

      <div className="flex flex-col gap-12">
        
        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            The Ritual of Daily Wear
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            While crafted for resilience, fine jewelry is ultimately an art form that should be treated with reverence. We highly advise removing your pieces before partaking in intense physical activities, swimming, or bathing.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            Furthermore, cosmetics, perfumes, and lotions contain compounds that can rapidly dull the luster of gold and obscure the fire of your diamonds. As a rule of thumb: your jewelry should be the last thing you put on before leaving, and the first thing you take off upon returning.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            Cleansing Your Gemstones
          </h3>
          <ul className="list-disc pl-6 flex flex-col gap-4 font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal">
            <li>
              <strong>Diamonds & Sapphires:</strong> These robust stones may be gently revitalized at home. Submerge the piece in lukewarm water mixed with a mild, unscented soap. Use a meticulously soft brush to clear away impurities, rinse thoroughly, and pat dry with a lint-free cloth.
            </li>
            <li>
              <strong>Emeralds, Pearls & Opals:</strong> These marvels of nature are inherently porous and susceptible to extreme damage from harsh agents. Never expose them to ultrasonic cleaners, abrasive fabrics, or chemical solutions. Wipe them delicately with a slightly damp, incredibly soft cloth.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            Sanctuary & Storage
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            Because diamonds rank as the hardest material on Earth, they can easily scratch softer gemstones or metals if allowed to collide. When not adorning you, each Adia piece should be housed individually in its original suede pouch or securely nestled within its presentation box, far from intense heat or moisture.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            The Annual Rejuvenation
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            To ensure the absolute security of your stones, we extend a complimentary annual inspection service to all our clients. We invite you to bring your piece to any Adia location, where our artisans will meticulously check the integrity of every prong and perform a professional ultrasonic cleansing, restoring its original, breathtaking fire.
          </p>
        </section>

      </div>
    </div>
  );
}
