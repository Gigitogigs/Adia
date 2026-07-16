"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSearchVisibility } from "@/app/context/SearchVisibilityContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const { isSearchIconVisible } = useSearchVisibility();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const TRANSPARENT_NAV_ROUTES = ["/", "/about", "/collections"];
  const isSolid = scrolled || !TRANSPARENT_NAV_ROUTES.includes(pathname);
  const showSearchIcon = pathname === "/collections" && isSearchIconVisible;

  return (
    <header
      id="navbar"
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full",
        "transition-all duration-500 ease-in-out",
        isSolid
          ? "bg-adia-violet shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-4 md:py-6",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          id="navbar-logo"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-[family-name:var(--font-script)] text-2xl md:text-4xl font-medium text-adia-gold hover:text-adia-rose transition-all duration-300 uppercase relative z-50 ${isSearchExpanded ? "opacity-0 w-0 overflow-hidden pointer-events-none" : "opacity-100"
            }`}
        >
          ADIA
        </Link>

        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <nav
            id="navbar-links"
            aria-label="Primary navigation"
            className={`hidden md:flex items-center gap-8 transition-all duration-300 ${isSearchExpanded ? "opacity-0 w-0 overflow-hidden pointer-events-none" : "opacity-100"
              }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-cormorant)] text-base font-light tracking-widest uppercase transition-colors duration-300 text-adia-gold hover:text-adia-cream whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Icon & Input */}
          {showSearchIcon && (
            <div className="flex items-center relative h-10">
              <div
                className={`flex items-center transition-all duration-500 ease-in-out overflow-hidden border-b border-adia-gold ${isSearchExpanded ? "w-64 opacity-100" : "w-0 opacity-0 border-transparent"
                  }`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search collections..."
                  className="bg-transparent text-adia-gold placeholder:text-adia-gold/50 outline-none w-full py-1 px-2 font-[family-name:var(--font-cormorant)] text-lg"
                  onBlur={() => setIsSearchExpanded(false)}
                />
              </div>
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="text-adia-gold hover:text-adia-cream transition-colors p-2 z-10"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          )}

          {/* CTA */}
          <Link
            href="/contact"
            id="navbar-cta"
            className={`hidden md:inline-flex items-center gap-2 border px-5 py-2 font-[family-name:var(--font-cormorant)] text-sm font-light tracking-widest uppercase transition-all duration-300 border-adia-gold text-adia-gold hover:bg-adia-gold hover:text-adia-violet whitespace-nowrap ${isSearchExpanded ? "opacity-0 w-0 overflow-hidden pointer-events-none" : "opacity-100"
              }`}
          >
            Reserve a Viewing
          </Link>
        </div>

        {/* Mobile menu icon */}
        <button
          id="navbar-mobile-toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block h-px bg-adia-gold transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
          <span className={`block h-px bg-adia-gold transition-all duration-300 ${isMobileMenuOpen ? "w-6 opacity-0" : "w-6 opacity-100"}`} />
          <span className={`block h-px bg-adia-gold transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-4 self-end"}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-adia-violet-dark z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-12 text-center w-full px-6">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-[family-name:var(--font-cormorant)] text-4xl text-adia-gold uppercase tracking-widest hover:text-adia-cream transition-colors duration-300"
              style={{
                transitionDelay: `${isMobileMenuOpen ? index * 75 + 150 : 0}ms`,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
                transitionProperty: "transform, opacity, color"
              }}
            >
              {link.label}
            </Link>
          ))}
          
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-10 py-4 border border-adia-gold text-adia-gold font-[family-name:var(--font-cormorant)] text-xl tracking-widest uppercase hover:bg-adia-gold hover:text-adia-violet-dark transition-all duration-300"
            style={{
              transitionDelay: `${isMobileMenuOpen ? NAV_LINKS.length * 75 + 150 : 0}ms`,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionProperty: "transform, opacity, color, background-color"
            }}
          >
            Reserve a Viewing
          </Link>
        </nav>
      </div>
    </header>
  );
}
