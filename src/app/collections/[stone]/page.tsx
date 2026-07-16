import { notFound } from "next/navigation";
import StoneCarousel from "../components/StoneCarousel";
import ProductGrid from "../components/ProductGrid";
import { mockProducts, GEMS_LIST } from "../data/productData";

export default async function StoneCollectionPage({ params }: { params: Promise<{ stone: string }> }) {
  const resolvedParams = await params;
  const decodedStone = decodeURIComponent(resolvedParams.stone).toLowerCase();
  
  // Verify it's a valid stone
  const validStone = GEMS_LIST.find(s => s.toLowerCase() === decodedStone);
  if (!validStone) {
    notFound();
  }

  // Filter products by stone
  const filteredProducts = mockProducts.filter(
    p => p.stone.toLowerCase() === decodedStone
  );

  return (
    <main className="flex flex-col w-full min-h-screen bg-adia-cream pt-20">
      <StoneCarousel />
      
      <div className="w-full px-5 py-8 md:px-6 md:py-12 lg:px-12">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-adia-charcoal uppercase tracking-widest mb-4 text-center">
          The <span className="font-[family-name:var(--font-script)] text-adia-violet-dark lowercase text-5xl md:text-6xl mx-2">{validStone}</span> Collection
        </h1>
        <div className="h-px w-24 bg-adia-gold mx-auto mb-16" />
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-8 md:py-20 font-[family-name:var(--font-inter)] text-adia-charcoal/50">
            No pieces found in this collection yet.
          </div>
        )}
      </div>
    </main>
  );
}
