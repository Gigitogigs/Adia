export default function ShippingPage() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl text-black mb-4 md:mb-8 font-medium md:font-light">
        Shipping & Returns
      </h2>
      
      <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-12">
        We believe that the delivery of an Adia masterpiece should be as flawless and secure as the piece itself. Our global logistics team operates with absolute discretion and precision, ensuring your jewelry arrives safely at your doorstep.
      </p>

      <div className="flex flex-col gap-12">
        
        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            Complimentary Insured Shipping
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            Every Adia order includes complimentary, fully insured express shipping. We partner exclusively with premier global couriers who specialize in the transport of high-value goods.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            Due to the exceptional value of our creations, a direct signature from the purchaser is strictly required upon delivery. Packages cannot be rerouted or left unattended under any circumstances.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            International Delivery
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            We are honored to adorn clients across the globe. For international orders, our dedicated logistics concierge will seamlessly manage all customs documentation. Please note that while shipping remains complimentary, local import duties and taxes are the responsibility of the client and will be calculated at checkout.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            Returns & Exchanges
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            If a ready-to-wear piece does not entirely meet your expectations, we accept returns and exchanges within <strong>30 days</strong> of the delivery date. To qualify for a return, the piece must be utterly unworn, devoid of any scratches or alterations, and accompanied by its original presentation box and authenticity certificates.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            Please be advised that purchases exceeding $75,000 USD are eligible for exchange only. Refunds are not permitted at this tier.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            Custom Commissions & Engravings
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            Pieces that have been uniquely engraved, altered, or created through our custom commission service are inherently personal. Because they were crafted specifically for your narrative, they are strictly non-refundable and final sale.
          </p>
        </section>

      </div>
    </div>
  );
}
