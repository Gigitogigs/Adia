"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePage = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex justify-center items-center gap-6 py-16">
      <button 
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="text-adia-charcoal hover:text-adia-gold disabled:opacity-30 disabled:hover:text-adia-charcoal transition-colors font-bold text-2xl"
        aria-label="Previous page"
      >
        ←
      </button>

      <div className="flex items-center gap-4 font-[family-name:var(--font-cormorant)] text-2xl font-medium">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <div key={page} className="flex items-center gap-4">
              <button
                onClick={() => handlePage(page)}
                className={`transition-colors ${
                  currentPage === page 
                    ? "text-adia-gold font-bold scale-110" 
                    : "text-adia-charcoal/80 hover:text-adia-gold"
                }`}
              >
                {page}
              </button>
              {page < totalPages && <span className="text-adia-charcoal/50">·</span>}
            </div>
          );
        })}
      </div>

      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="text-adia-charcoal hover:text-adia-gold disabled:opacity-30 disabled:hover:text-adia-charcoal transition-colors font-bold text-2xl"
        aria-label="Next page"
      >
        →
      </button>
    </div>
  );
}
