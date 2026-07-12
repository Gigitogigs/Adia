import BrandStory from "./components/BrandStory";
import CtaSection from "@/app/components/CtaSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <BrandStory />
      <CtaSection
        headline={
          <>Let&apos;s Create <span className="text-adia-gold italic">Something</span> Together</>
        }
        subtext="Every masterpiece begins with a single conversation. Share your vision with our artisans and watch it take shape in gold and gemstone."
      />
    </main>
  );
}
