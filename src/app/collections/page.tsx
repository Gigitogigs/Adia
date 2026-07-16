"use client";

import { useState, useMemo, useEffect } from "react";
import StoneCarousel from "./components/StoneCarousel";
import CollectionsSearch from "./components/CollectionsSearch";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import { mockProducts } from "./data/productData";
import { getAssetUrl } from "@/utils/assetUrl";

const ITEMS_PER_PAGE = 18;

export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStone, setActiveStone] = useState("All");
  const [activeMetal, setActiveMetal] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // Search filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Stone filter
    if (activeStone !== "All") {
      result = result.filter((p) => p.stone === activeStone);
    }

    // Metal filter
    if (activeMetal !== "All") {
      result = result.filter((p) => p.metal === activeMetal);
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    // "featured" doesn't strictly sort, leaves default order

    return result;
  }, [searchQuery, activeCategory, activeStone, activeMetal, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, activeStone, activeMetal, sortBy]);

  return (
    <main className="flex flex-col w-full min-h-screen bg-adia-cream">
      
      {/* Lifestyle Hero Section */}
      <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden mb-8">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getAssetUrl("/videos/hero-jewels-3-opt.mp4")} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Gradient fade at bottom to hint more content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-7xl text-white font-medium md:font-light tracking-widest mb-4 drop-shadow-sm px-6">
            THE COLLECTIONS
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-white/90 text-sm md:text-base tracking-[0.2em] uppercase max-w-lg drop-shadow-sm">
            Discover pieces that define everyday luxury
          </p>
        </div>
      </section>

      <StoneCarousel />
      
      <CollectionsSearch 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <FilterBar 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeStone={activeStone}
        setActiveStone={setActiveStone}
        activeMetal={activeMetal}
        setActiveMetal={setActiveMetal}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      
      <ProductGrid products={currentProducts} />
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
