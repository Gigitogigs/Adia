import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProducts, Product } from "@/app/collections/data/productData";
import ProductCard from "@/app/collections/components/ProductCard";
import ProductAccordion from "@/app/components/ProductAccordion";

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

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(product.price);

  // Get related products (same category or stone, excluding current)
  const relatedProducts = mockProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.stone === product.stone))
    .slice(0, 4);

  // Fallback if not enough related products
  const moreLikeThis = relatedProducts.length >= 4 
    ? relatedProducts 
    : mockProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="w-full bg-adia-cream pt-[88px]">
      
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-88px)] relative border-b border-adia-gold/20">
        
        {/* LEFT: Scrollable Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col border-r border-black">
          {galleryImages.map((img, index) => (
            <div key={index} className="w-full h-[60vh] lg:h-[90vh] p-6 lg:p-10 xl:p-12 border-b border-adia-gold/20 last:border-b-0 bg-white flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky Product Info */}
        <div className="w-full lg:w-1/2 relative bg-adia-cream">
          <div className="sticky top-[88px] flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24 min-h-[calc(100vh-88px)]">
            
            <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] text-adia-charcoal/50 uppercase mb-4">
              {product.stone} · {product.metal}
            </p>
            
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl xl:text-6xl text-adia-charcoal font-light leading-tight mb-6">
              {product.name}
            </h1>
            
            <p className="font-[family-name:var(--font-inter)] text-base font-light text-adia-charcoal leading-relaxed mb-12 max-w-lg">
              {product.description}
            </p>
            
            <div className="text-2xl font-[family-name:var(--font-cormorant)] text-adia-charcoal tracking-widest mb-12">
              {formattedPrice}
            </div>

            <div className="flex flex-col gap-4 max-w-md w-full mb-16">
              <button className="w-full bg-adia-charcoal text-adia-cream py-4 uppercase tracking-[0.2em] text-sm font-light hover:bg-adia-charcoal/90 transition-colors">
                Add To Collection
              </button>
              <Link 
                href="/contact"
                className="w-full bg-transparent border border-black text-black text-center py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-black hover:text-adia-cream transition-colors"
              >
                Reserve a Viewing
              </Link>
            </div>

            {/* Accordion Details */}
            <ProductAccordion 
              items={[
                { title: "Product Details", content: "Crafted by master artisans in our private ateliers. Every Adia creation uses conflict-free, ethically sourced gemstones and recycled precious metals." },
                { title: "Complimentary Shipping", content: "We offer fully insured express shipping globally. A direct signature is strictly required upon delivery." }
              ]} 
            />

          </div>
        </div>

      </div>

      {/* BOTTOM: More Like This Strip */}
      <div className="w-full px-6 lg:px-12 py-24 bg-white border-t border-adia-gold/20">
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-left text-adia-charcoal uppercase tracking-widest mb-16">
          More Like This
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
          {moreLikeThis.map((p) => (
            <ProductCard key={p.id} product={p} size="small" />
          ))}
        </div>
      </div>

    </main>
  );
}
