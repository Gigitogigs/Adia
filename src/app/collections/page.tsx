"use client";

import { useState, useMemo } from "react";
import StoneCarousel from "./components/StoneCarousel";
import CollectionsSearch from "./components/CollectionsSearch";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import { mockProducts } from "./data/productData";

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
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, activeStone, activeMetal, sortBy]);

  return (
    <main className="flex flex-col w-full min-h-screen bg-adia-cream pt-20">
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
