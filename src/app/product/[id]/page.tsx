import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProducts, Product } from "@/app/collections/data/productData";
import ProductCard from "@/app/collections/components/ProductCard";
import ProductAccordion from "@/app/components/ProductAccordion";
import ProductGallery from "@/app/product/components/ProductGallery";
import { formatPrice } from "@/app/lib/format";
import { NAVBAR_HEIGHT } from "@/app/lib/constants";

// Mock helper to get gallery images based on stone type
const getGalleryImages = (product: Product): string[] => {
  const GALLERY_MAP: Record<string, string[]> = {
    Diamond: ["/images/Diamond/diamond-1.jpg", "/images/Diamond/diamond-2.jpg", "/images/Diamond/109493834686009542.jpg"],
    Emerald: ["/images/Emerald/emerald-1.jpg", "/images/Emerald/emerald-2.jpg", "/images/Emerald/heeee.jpg"],
    Ruby: ["/images/Ruby/ruby-1.jpg", "/images/Ruby/ruby-2.jpg", "/images/Ruby/ruby-3.jpg"],
    Sapphire: ["/images/Sapphire/sapphire-1.jpg", "/images/Sapphire/sapphire-2.jpg", "/images/Sapphire/sapphire-3.jpg"],
    Amethyst: ["/images/Amethyst/amethyst-1.jpg", "/images/Amethyst/amethyst-3.jpg", "/images/Amethyst/download-(2).jpg"],
    Gold: ["/images/Gold-Bracelet-Stack-Inspiration.jpg", "/images/Gold/70437491205309.jpg", "/images/story-lifestyle.jpg"]
  };

  const images = GALLERY_MAP[product.stone] || [product.image, product.image, product.image];
  // Ensure the primary product image is always the first one, deduplicate
  const uniqueImages = Array.from(new Set([product.image, ...images]));
  // Fallback if not enough unique images
  return uniqueImages.length > 1 ? uniqueImages : [product.image, product.image, product.image];
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = mockProducts.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const galleryImages = getGalleryImages(product);

  const formattedPrice = formatPrice(product.price);

  // Get related products (same category or stone, excluding current)
  const relatedProducts = mockProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.stone === product.stone))
    .slice(0, 4);

  // Fallback if not enough related products
  const moreLikeThis = relatedProducts.length >= 4 
    ? relatedProducts 
    : mockProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="w-full bg-adia-cream" style={{ paddingTop: NAVBAR_HEIGHT }}>
      
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row w-full relative border-b border-adia-gold/20 lg:min-h-[calc(100vh-88px)]">
        
        {/* LEFT: Scrollable Image Gallery (Swipe on mobile, stack on desktop) */}
        <ProductGallery images={galleryImages} productName={product.name} />

        {/* RIGHT: Sticky Product Info */}
        <div className="w-full lg:w-1/2 relative bg-adia-cream">
          <div 
            className="lg:sticky flex flex-col justify-center px-5 py-8 md:px-8 lg:py-16 lg:px-16 xl:px-24 lg:min-h-[calc(100vh-88px)]"
            style={{ top: NAVBAR_HEIGHT }}
          >
            
            <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] text-adia-charcoal/50 uppercase mb-4">
              {product.stone} · {product.metal}
            </p>
            
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl xl:text-6xl text-adia-charcoal font-medium md:font-light leading-tight mb-6">
              {product.name}
            </h1>
            
            <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-6 lg:mb-12 max-w-lg">
              {product.description}
            </p>
            
            <div className="text-2xl font-[family-name:var(--font-cormorant)] text-adia-charcoal tracking-widest mb-8 lg:mb-12">
              {formattedPrice}
            </div>

            {/* CTA Buttons - Sticky on mobile, normal flow on desktop */}
            <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-adia-gold/20 z-40 flex gap-2 lg:static lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:border-t-0 lg:flex-col lg:gap-4 max-w-md lg:mb-16 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:shadow-none">
              <button className="flex-1 lg:w-full bg-adia-charcoal text-adia-cream py-3 lg:py-4 uppercase tracking-[0.1em] lg:tracking-[0.2em] text-[10px] lg:text-sm font-light hover:bg-adia-charcoal/90 transition-colors">
                Add To Collection
              </button>
              <Link 
                href="/contact"
                className="flex-1 lg:w-full bg-transparent border border-black text-black text-center flex items-center justify-center py-3 lg:py-4 uppercase tracking-[0.1em] lg:tracking-[0.2em] text-[10px] lg:text-sm font-medium hover:bg-black hover:text-adia-cream transition-colors"
              >
                Reserve a Viewing
              </Link>
            </div>

            {/* Accordion Details */}
            <div className="pb-10 lg:pb-0 w-full">
              <ProductAccordion 
                items={[
                  { title: "Product Details", content: "Crafted by master artisans in our private ateliers. Every Adia creation uses conflict-free, ethically sourced gemstones and recycled precious metals." },
                  { title: "Complimentary Shipping", content: "We offer fully insured express shipping globally. A direct signature is strictly required upon delivery." }
                ]} 
              />
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM: More Like This Strip */}
      <div className="w-full px-0 lg:px-12 py-8 md:py-12 lg:py-24 bg-white border-t border-adia-gold/20">
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl md:text-4xl text-left text-adia-charcoal uppercase tracking-widest mb-6 lg:mb-16 px-5 md:px-6 lg:px-0">
          More Like This
        </h2>
        
        {/* Carousel on mobile, Grid on desktop */}
        <div className="flex lg:grid flex-row lg:grid-cols-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar gap-2 lg:gap-3 px-5 md:px-6 lg:px-3 pb-8 lg:pb-3">
          {moreLikeThis.map((p) => (
            <div key={p.id} className="w-[85vw] sm:w-[45vw] lg:w-auto shrink-0 snap-center">
              <ProductCard product={p} size="small" />
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
