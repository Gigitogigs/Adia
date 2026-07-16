export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl text-black mb-4 md:mb-8 font-medium md:font-light">
        Privacy Policy
      </h2>
      
      <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal/60 mb-12 italic">
        Last Updated: July 2026
      </p>

      <div className="flex flex-col gap-12">
        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            1. Introduction
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            At Adia, we are committed to protecting the privacy and security of our clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, visit our boutiques, or engage our custom services.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            By accessing our services, you agree to the collection and use of information in accordance with this policy. We ensure that our practices align with the highest global standards for data protection.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            2. Information We Collect
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal">
            <li>Register for an account or join our Inner Circle.</li>
            <li>Request a custom consultation or viewing appointment.</li>
            <li>Complete a purchase or arrange for secure shipping.</li>
            <li>Communicate with our concierge team.</li>
          </ul>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mt-4">
            This information may include your name, contact details, payment information, ring sizing, and specific jewelry preferences.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            3. How We Use Your Information
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-4">
            The information we collect is used strictly to elevate your experience with Adia. Specifically, we use it to:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal">
            <li>Process and fulfill your exquisite orders securely.</li>
            <li>Provide personalized custom design services.</li>
            <li>Send private invitations to exclusive collections (if opted in).</li>
            <li>Improve the functionality and security of our digital platforms.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            4. Data Security
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed">
            We implement state-of-the-art administrative, technical, and physical security measures to protect your personal information. Our luxury clientele demands the utmost discretion, and we treat your data with the same rigorous security as we treat our physical gemstones.
          </p>
        </section>

        <section>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-4">
            5. Contact Us
          </h3>
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-adia-charcoal/80 leading-relaxed">
            If you have questions or comments about this Privacy Policy, please contact our dedicated privacy concierge at privacy@adiajewelry.com.
          </p>
        </section>
      </div>
    </div>
  );
}
