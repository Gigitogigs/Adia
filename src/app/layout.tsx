import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { SearchVisibilityProvider } from "@/app/context/SearchVisibilityContext";
import "./globals.css";

/*
 * NOTE: Using Cormorant Garamond as a stand-in for Moara.
 * To switch to Moara:
 *   1. Place Moara font files in src/app/fonts/
 *   2. Replace this import with:
 *        import localFont from "next/font/local";
 *        const cormorant = localFont({ src: "./fonts/Moara-Regular.otf", variable: "--font-cormorant" });
 */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adia — Premium Jewellery for Women",
  description:
    "Discover Adia's curated collection of premium jewellery. Exquisite rings, necklaces, earrings and bracelets crafted for the modern woman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dancingScript.variable} ${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <SearchVisibilityProvider>
          <Navbar />
          <div className="flex-1 w-full flex flex-col">
            {children}
          </div>
          <Footer />
        </SearchVisibilityProvider>
      </body>
    </html>
  );
}
