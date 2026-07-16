"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-adia-violet-dark text-adia-cream border-t border-adia-gold/20">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-12 pt-12 pb-12 md:pt-24 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-8 mb-12 md:mb-24">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="font-[family-name:var(--font-script)] text-6xl text-adia-gold mb-6 leading-none">
              Adia
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-adia-cream/70 max-w-sm leading-relaxed mb-0 md:mb-8">
              A legacy of elegance and profound beauty. We create custom jewels designed to capture life&apos;s most luminous moments.
            </p>
          </div>

          {/* Column 2: Collections */}
          <div className="lg:col-span-2 flex flex-col border-b border-adia-cream/10 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('collections')}
              className="w-full flex justify-between items-center font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] text-adia-gold uppercase md:mb-8 md:cursor-default"
            >
              <span>Collections</span>
              <span className="md:hidden text-lg font-light">{openSection === 'collections' ? '−' : '+'}</span>
            </button>
            <ul className={`flex flex-col gap-4 font-[family-name:var(--font-cormorant)] text-base text-adia-cream/70 overflow-hidden transition-all duration-300 md:max-h-full md:mt-0 md:opacity-100 ${openSection === 'collections' ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
              <li><Link href="/collections?stone=Amethyst" className="hover:text-adia-gold transition-colors block">Amethyst</Link></li>
              <li><Link href="/collections?stone=Diamond" className="hover:text-adia-gold transition-colors block">Diamond</Link></li>
              <li><Link href="/collections?stone=Emerald" className="hover:text-adia-gold transition-colors block">Emerald</Link></li>
              <li><Link href="/collections?stone=Ruby" className="hover:text-adia-gold transition-colors block">Ruby</Link></li>
              <li><Link href="/collections?stone=Sapphire" className="hover:text-adia-gold transition-colors block">Sapphire</Link></li>
            </ul>
          </div>

          {/* Column 3: Assistance */}
          <div className="lg:col-span-2 flex flex-col border-b border-adia-cream/10 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('assistance')}
              className="w-full flex justify-between items-center font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] text-adia-gold uppercase md:mb-8 md:cursor-default"
            >
              <span>Assistance</span>
              <span className="md:hidden text-lg font-light">{openSection === 'assistance' ? '−' : '+'}</span>
            </button>
            <ul className={`flex flex-col gap-4 font-[family-name:var(--font-cormorant)] text-base text-adia-cream/70 overflow-hidden transition-all duration-300 md:max-h-full md:mt-0 md:opacity-100 ${openSection === 'assistance' ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
              <li><Link href="/custom" className="hover:text-adia-gold transition-colors block">Custom Creations</Link></li>
              <li><Link href="/care" className="hover:text-adia-gold transition-colors block">Jewelry Care</Link></li>
              <li><Link href="/shipping" className="hover:text-adia-gold transition-colors block">Shipping & Returns</Link></li>
              <li><Link href="/contact" className="hover:text-adia-gold transition-colors block">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-adia-gold transition-colors block">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 flex flex-col border-b border-adia-cream/10 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('newsletter')}
              className="w-full flex justify-between items-center font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] text-adia-gold uppercase md:mb-8 md:cursor-default"
            >
              <span>Join the Inner Circle</span>
              <span className="md:hidden text-lg font-light">{openSection === 'newsletter' ? '−' : '+'}</span>
            </button>
            <div className={`flex flex-col overflow-hidden transition-all duration-300 md:max-h-full md:mt-0 md:opacity-100 ${openSection === 'newsletter' ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
              <p className="font-[family-name:var(--font-cormorant)] text-base text-adia-cream/70 mb-6">
                Subscribe to receive private invitations to our exclusive collections and private events.
              </p>
              <form className="flex w-full mt-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b border-adia-cream/30 text-adia-cream font-[family-name:var(--font-cormorant)] text-lg py-3 focus:outline-none focus:border-adia-gold transition-colors placeholder:text-adia-cream/30"
                  required
                />
                <button 
                  type="submit" 
                  className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase text-adia-gold ml-4 hover:text-adia-cream transition-colors"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-adia-cream/10 font-[family-name:var(--font-cormorant)] text-sm text-adia-cream/40">
          <p>&copy; {new Date().getFullYear()} Adia Jewelry. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-adia-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-adia-cream transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
