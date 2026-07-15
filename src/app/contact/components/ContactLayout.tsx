"use client";

export default function ContactLayout() {
  return (
    <section className="w-full bg-adia-cream pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 -mt-16 relative z-10">
        
        {/* Left Side: The Atelier Info */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start pt-8 md:pt-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-adia-charcoal mb-8 tracking-wide">
            The Atelier
          </h2>
          
          <div className="flex flex-col gap-8 text-adia-charcoal/80 font-[family-name:var(--font-cormorant)] text-lg">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-adia-gold mb-2">Location</p>
              <p>15 Place Vendôme</p>
              <p>75001 Paris, France</p>
            </div>
            
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-adia-gold mb-2">Hours</p>
              <p>Monday — Saturday</p>
              <p>10:00 AM — 6:00 PM</p>
              <p className="italic mt-1 text-adia-violet">By private appointment only.</p>
            </div>
            
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-adia-gold mb-2">Direct Contact</p>
              <p>+33 1 42 60 00 00</p>
              <p>inquiries@adia.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Inquiry Form */}
        <div className="w-full lg:w-7/12 bg-white p-8 md:p-12 shadow-2xl shadow-black/5">
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal mb-8">
            Send an Inquiry
          </h3>
          
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full flex flex-col">
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="First Name" 
                  className="w-full bg-transparent border-b border-adia-charcoal/20 py-3 text-adia-charcoal focus:outline-none focus:border-adia-gold transition-colors font-[family-name:var(--font-cormorant)] text-lg placeholder:text-adia-charcoal/40"
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Last Name" 
                  className="w-full bg-transparent border-b border-adia-charcoal/20 py-3 text-adia-charcoal focus:outline-none focus:border-adia-gold transition-colors font-[family-name:var(--font-cormorant)] text-lg placeholder:text-adia-charcoal/40"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full flex flex-col">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-adia-charcoal/20 py-3 text-adia-charcoal focus:outline-none focus:border-adia-gold transition-colors font-[family-name:var(--font-cormorant)] text-lg placeholder:text-adia-charcoal/40"
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Phone Number (Optional)" 
                  className="w-full bg-transparent border-b border-adia-charcoal/20 py-3 text-adia-charcoal focus:outline-none focus:border-adia-gold transition-colors font-[family-name:var(--font-cormorant)] text-lg placeholder:text-adia-charcoal/40"
                />
              </div>
            </div>

            <div className="w-full relative flex flex-col">
              <select 
                id="inquiryType"
                defaultValue=""
                className="w-full bg-transparent border-b border-adia-charcoal/20 py-3 pr-8 text-adia-charcoal focus:outline-none focus:border-adia-gold transition-colors font-[family-name:var(--font-cormorant)] text-lg appearance-none cursor-pointer"
              >
                <option value="" disabled>Nature of Inquiry</option>
                <option value="bespoke">Custom Creation</option>
                <option value="collection">Collection Viewing</option>
                <option value="press">Press & Media</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-adia-charcoal/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <textarea 
                id="message" 
                placeholder="How may we assist you?" 
                rows={4}
                className="w-full bg-transparent border-b border-adia-charcoal/20 py-3 text-adia-charcoal focus:outline-none focus:border-adia-gold transition-colors font-[family-name:var(--font-cormorant)] text-lg placeholder:text-adia-charcoal/40 resize-none"
                required
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 px-10 py-4 bg-adia-violet text-adia-cream font-[family-name:var(--font-cormorant)] text-lg tracking-[0.2em] uppercase hover:bg-adia-charcoal transition-all duration-500 w-full md:w-auto self-end"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
