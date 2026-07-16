"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SIDEBAR_LINKS = [
  { name: "Frequently Asked Questions", href: "/faq" },
  { name: "Jewelry Care", href: "/care" },
  { name: "Shipping & Returns", href: "/shipping" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function InformationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen bg-adia-cream pt-24 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-32">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="lg:sticky lg:top-40 flex flex-col">
            <h1 className="font-[family-name:var(--font-cormorant)] text-3xl text-black mb-6 lg:mb-10 tracking-widest uppercase">
              Customer Care
            </h1>
            
            <div className="relative -mx-6 lg:mx-0 mb-6 lg:mb-0">
              <nav className="flex flex-row lg:flex-col lg:gap-6 border-b lg:border-b-0 lg:border-l border-black px-6 lg:px-0 lg:pl-6 pb-4 lg:pb-0 overflow-x-auto whitespace-nowrap divide-x divide-black lg:divide-x-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {SIDEBAR_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-[family-name:var(--font-cormorant)] text-lg transition-all duration-300 relative inline-block lg:block px-6 lg:px-0 first:pl-0 lg:first:pl-0 ${
                        isActive 
                          ? "text-black italic" 
                          : "text-black/80 hover:text-black"
                      }`}
                    >
                      {/* Active indicator dot (desktop only) */}
                      {isActive && (
                        <span className="hidden lg:block absolute -left-[29px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full" />
                      )}
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              {/* Scroll hint gradient & icon for mobile */}
              <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#fdfbf7] via-[#fdfbf7]/80 to-transparent pointer-events-none lg:hidden flex justify-end items-center pr-2 text-black/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 animate-pulse">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
            
            {/* Contact CTA in Sidebar */}
            <div className="hidden lg:block mt-16 pt-10 border-t border-black/10">
              <p className="font-[family-name:var(--font-cormorant)] text-black/80 mb-4">
                Require further assistance?
              </p>
              <Link 
                href="/contact"
                className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:text-black/70 hover:border-black/70 transition-colors"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="w-full lg:w-3/4 lg:pb-32">
          {children}
          
          {/* Mobile Contact CTA */}
          <div className="lg:hidden mt-24 pt-10 border-t border-black/10 flex flex-col items-start">
            <p className="font-[family-name:var(--font-cormorant)] text-black/80 mb-4 text-lg">
              Require further assistance?
            </p>
            <Link 
              href="/contact"
              className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:text-black/70 hover:border-black/70 transition-colors"
            >
              Contact Concierge
            </Link>
          </div>
        </main>
        
      </div>
    </div>
  );
}
