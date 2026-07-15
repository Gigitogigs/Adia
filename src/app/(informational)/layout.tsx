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
    <div className="w-full min-h-screen bg-adia-cream pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="lg:sticky lg:top-40 flex flex-col">
            <h1 className="font-[family-name:var(--font-cormorant)] text-3xl text-adia-charcoal mb-10 tracking-widest uppercase">
              Customer Care
            </h1>
            <nav className="flex flex-col gap-6 border-l border-adia-charcoal/10 pl-6">
              {SIDEBAR_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-[family-name:var(--font-cormorant)] text-lg transition-all duration-300 relative ${
                      isActive 
                        ? "text-adia-gold italic" 
                        : "text-adia-charcoal/80 hover:text-adia-charcoal"
                    }`}
                  >
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute -left-[29px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-adia-gold rounded-full" />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            
            {/* Contact CTA in Sidebar */}
            <div className="mt-16 pt-10 border-t border-adia-charcoal/10">
              <p className="font-[family-name:var(--font-cormorant)] text-adia-charcoal/80 mb-4">
                Require further assistance?
              </p>
              <Link 
                href="/contact"
                className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase text-adia-charcoal border-b border-adia-charcoal pb-1 hover:text-adia-gold hover:border-adia-gold transition-colors"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="w-full lg:w-3/4 pb-32">
          {children}
        </main>
        
      </div>
    </div>
  );
}
