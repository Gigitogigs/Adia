import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/app/collections/data/productData";
import ProductCard from "@/app/collections/components/ProductCard";

// Select 8 featured products from our mock data (fills 2 rows of 4)
const FEATURED_IDS = ["em-01", "di-02", "am-01", "sa-02", "go-01", "ru-02", "ru-01", "di-01"];
const PRODUCTS = mockProducts.filter((p) => FEATURED_IDS.includes(p.id))
  .sort((a, b) => FEATURED_IDS.indexOf(a.id) - FEATURED_IDS.indexOf(b.id));

export default function ProductGridSection() {
  return (
    <section className="w-full bg-adia-cream py-8 md:py-24 overflow-hidden border-t border-black/10" id="products">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 px-5 md:px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-adia-charcoal uppercase tracking-widest mb-4">
            Curated <span className="font-[family-name:var(--font-script)] text-adia-violet-dark lowercase text-5xl md:text-6xl mx-2">Acquisitions</span>
          </h2>
          <div className="h-px w-24 bg-adia-gold mx-auto" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-1 md:gap-3 p-1 md:p-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
