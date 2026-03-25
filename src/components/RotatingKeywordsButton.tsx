"use client";

import { useState, useEffect } from "react";

const KEYWORDS = [
  "talk to us",
  "ideate with us",
  "consult with us",
  "edify with us"
];

export default function RotatingKeywordsButton() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % KEYWORDS.length);
    }, 2800); // 2.8s interval allows time to read before crossfade
    return () => clearInterval(interval);
  }, []);

  return (
    <a 
      href="#footer"
      className="relative flex flex-col items-center justify-center rounded-full px-8 py-4 md:px-12 md:py-5
                 bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                 hover:scale-105 active:scale-95 group focus:outline-none overflow-hidden
                 w-[280px] sm:w-[320px] md:w-[400px] h-[56px] md:h-[64px]"
      style={{
        boxShadow: "inset 0 1px 3px rgba(255,181,153,0.5), inset 0 -1px 3px rgba(0,218,243,0.3), 0 15px 40px -10px rgba(0,10,30,0.15)",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {KEYWORDS.map((word, i) => (
          <span 
            key={word}
            className={`absolute w-max font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-foreground font-bold transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
              ${i === index 
                ? "opacity-90 scale-100 blur-none" 
                : "opacity-0 scale-95 blur-[2px] pointer-events-none"}`}
          >
            {word}
          </span>
        ))}
      </div>
      
      {/* Inner liquid bloom effect */}
      <div 
        className="absolute inset-0 rounded-full transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-multiply scale-75 group-hover:scale-100 bg-[#ffb599]/30 blur-[20px]"
      />
    </a>
  );
}
