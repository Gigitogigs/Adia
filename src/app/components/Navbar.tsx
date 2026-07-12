"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full",
        "transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-adia-violet shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-6",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          id="navbar-logo"
          className="font-[family-name:var(--font-script)] text-4xl font-medium text-adia-gold hover:text-adia-rose transition-colors duration-300 uppercase"
        >
          ADIA
        </Link>

        {/* Nav Links */}
        <nav
          id="navbar-links"
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-cormorant)] text-base font-light tracking-widest text-adia-gold hover:text-adia-cream transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/collections"
          id="navbar-cta"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-adia-gold px-5 py-2 font-[family-name:var(--font-cormorant)] text-sm font-light tracking-widest text-adia-gold uppercase transition-all duration-300 hover:bg-adia-gold hover:text-adia-violet"
        >
          Reserve a Viewing
        </Link>

        {/* Mobile menu icon (visual only — for future implementation) */}
        <button
          id="navbar-mobile-toggle"
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block h-px w-6 bg-adia-lilac" />
          <span className="block h-px w-4 bg-adia-lilac" />
          <span className="block h-px w-6 bg-adia-lilac" />
        </button>
      </div>
    </header>
  );
}
