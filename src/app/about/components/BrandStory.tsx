import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="w-full bg-adia-cream pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left Side: Editorial Image */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image 
            src="/images/Diamond/351912467107900.jpg" 
            alt="Adia elegance and beauty"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right Side: Detailed Brand Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-adia-charcoal mb-8 tracking-wide">
            A New Era of <br/><span className="text-adia-violet italic">Exclusivity</span>
          </h2>
          
          <div className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-adia-charcoal/80 space-y-6 leading-relaxed max-w-prose">
            <p>
              Born from a desire to reject mass production, Adia was founded on a singular premise: that true luxury cannot be rushed, replicated, or compromised. We are a new voice in the world of high jewelry, speaking directly to those who value intention over ubiquity.
            </p>
            <p>
              Our artisans do not simply work with precious metals and stones; they engage in a dialogue with them. Every cut, every polish, and every setting is executed with an almost obsessive dedication to perfection. We source our gems from ethical, conflict-free environments, ensuring that the beauty of our pieces is matched only by the integrity of their origins.
            </p>
            <p>
              When you commission or acquire a piece from Adia, you are not merely making a purchase. You are entering into a relationship with craftsmanship. You are holding a moment in time, crystallized into something that will long outlive us all. This is not just jewelry—this is your legacy, rendered in gold and diamond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
