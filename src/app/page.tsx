import HeroSection from "@/app/components/HeroSection";
import StorySection from "@/app/components/StorySection";
import LookbookSection from "@/app/components/LookbookSection";
import FeaturedGemsSection from "@/app/components/FeaturedGemsSection";
import ProductGridSection from "@/app/components/ProductGridSection";
import CtaSection from "@/app/components/CtaSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <StorySection />
      <LookbookSection />
      <FeaturedGemsSection />
      <ProductGridSection />
      <CtaSection />
    </main>
  );
}
