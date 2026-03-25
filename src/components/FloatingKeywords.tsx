import React from "react";

const KEYWORDS = [
  "Ultra-Niche Tools", "Purpose-Built Software", "Workflow Automations", 
  "Internal Dashboards", "Proof of Concept (PoC)", "Venture Engineering", 
  "Technical Co-founding", "AI-Assisted Architecture", "Product Incubation", 
  "Flash Apps", "Rapid Deployment", "Micro-SaaS", "Zero-to-One Builds", "Agile Engineering"
];

// Split and randomize for different rows
const row1 = [...KEYWORDS].sort(() => Math.random() - 0.5);
const row2 = [...KEYWORDS].sort(() => Math.random() - 0.5);
const row3 = [...KEYWORDS].sort(() => Math.random() - 0.5);

export default function FloatingKeywords() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-evenly py-32 md:py-40 opacity-[0.06] mix-blend-multiply">
       <MarqueeRow items={row1} direction="normal" duration="140s" />
       <MarqueeRow items={row2} direction="reverse" duration="180s" />
       <MarqueeRow items={row3} direction="normal" duration="120s" />
    </div>
  );
}

function MarqueeRow({ items, direction, duration }: { items: string[], direction: 'normal' | 'reverse', duration: string }) {
  // Rendering the array 3 times ensures the scroll logic perfectly loops back to identical content
  return (
    <div className="flex w-[400vw] sm:w-[300vw] lg:w-max">
      <div 
        className={`flex whitespace-nowrap gap-8 sm:gap-16 lg:gap-24 items-center ${direction === 'normal' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{ animationDuration: duration }}
      >
        {items.map((item, i) => <span key={`a-${i}`} className="font-mono text-lg sm:text-2xl md:text-4xl lg:text-5xl text-foreground font-bold tracking-widest uppercase">{item}</span>)}
        {items.map((item, i) => <span key={`b-${i}`} className="font-mono text-lg sm:text-2xl md:text-4xl lg:text-5xl text-foreground font-bold tracking-widest uppercase">{item}</span>)}
        {items.map((item, i) => <span key={`c-${i}`} className="font-mono text-lg sm:text-2xl md:text-4xl lg:text-5xl text-foreground font-bold tracking-widest uppercase">{item}</span>)}
      </div>
    </div>
  )
}
