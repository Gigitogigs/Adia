import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import StorySection from "@/app/components/StorySection";
import LookbookSection from "@/app/components/LookbookSection";
import FeaturedGemsSection from "@/app/components/FeaturedGemsSection";
import ProductGridSection from "@/app/components/ProductGridSection";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <StorySection />
      <LookbookSection />
      <FeaturedGemsSection />
      <ProductGridSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
