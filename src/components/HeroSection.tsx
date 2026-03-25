import FloatingKeywords from "./FloatingKeywords";
import RotatingKeywordsButton from "./RotatingKeywordsButton";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      
      {/* Floating Keywords Background Layer */}
      <FloatingKeywords />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-6 text-center">
        
        {/* Headline */}
        <h1 className="display-lg leading-[1.1] md:leading-[1.05] tracking-tight group text-foreground">
          <span className="block opacity-90">Make it real.</span>
          <span className="block text-[var(--color-primary-container)] drop-shadow-[0_0_15px_rgba(255,95,0,0.4)] mt-1 sm:mt-2 md:mt-4 italic font-black">
            Quick!
          </span>
        </h1>

        {/* Connect Button */}
        <RotatingKeywordsButton />
      </div>
    </section>
  );
}
