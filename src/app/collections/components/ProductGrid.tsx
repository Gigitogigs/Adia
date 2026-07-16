"use client";

import { Product } from "../data/productData";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full py-32 flex flex-col items-center justify-center text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-2xl text-adia-charcoal/50">
          No collections match your current criteria.
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-lg text-adia-charcoal/40 mt-4">
          Please adjust your filters and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-adia-cream pb-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-3 p-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} size="small" />
        ))}
      </div>
    </div>
  );
}
