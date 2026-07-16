import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/app/collections/data/productData";

// Select 6 featured products from our mock data
const FEATURED_IDS = ["em-01", "di-02", "am-01", "sa-02", "go-01", "ru-02"];
const PRODUCTS = mockProducts.filter((p) => FEATURED_IDS.includes(p.id));

export default function ProductGridSection() {
  return (
    <section className="w-full bg-adia-cream pt-16 pb-1" id="products">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-adia-charcoal uppercase tracking-widest mb-4">
            Curated <span className="font-[family-name:var(--font-script)] text-adia-violet-dark lowercase text-5xl md:text-6xl mx-2">Acquisitions</span>
          </h2>
          <div className="h-px w-24 bg-adia-gold mx-auto" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 p-3">
          {PRODUCTS.map((product) => (
            <Link 
              href={`/product/${product.id}`}
              key={product.id} 
              className="group relative w-full h-[45vh] md:h-[40vh] lg:h-[60vh] overflow-hidden cursor-pointer bg-adia-charcoal/5 block"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Dark Overlay (Fades in on hover) */}
              <div className="absolute inset-0 bg-adia-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

              {/* Content Box (Slides up on hover) */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out z-10">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-cream mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-sm text-adia-cream/70 mb-6 max-w-[20ch]">
                  {product.description}
                </p>
                <div className="flex flex-col items-center gap-4 w-full">
                  <span className="font-[family-name:var(--font-cormorant)] text-lg text-adia-gold tracking-widest">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </span>
                  <span className="mt-2 text-xs font-semibold tracking-[0.2em] text-adia-cream uppercase border-b border-adia-gold pb-1 group-hover:text-adia-gold transition-colors">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
