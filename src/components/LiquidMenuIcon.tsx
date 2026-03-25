"use client";

import { useState } from "react";

export default function LiquidMenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 flex items-center justify-center w-14 h-14 rounded-full 
                 bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                 transition-all duration-500 ease-out
                 hover:scale-105 active:scale-95 group focus:outline-none"
      style={{
        // Chromatic aberration simulation + depth (modified for light theme)
        boxShadow: "inset 0 1px 3px rgba(255,181,153,0.5), inset 0 -1px 3px rgba(0,218,243,0.3), 0 10px 30px -5px rgba(0,10,30,0.15)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      aria-label="Toggle Menu"
    >
      <div className="relative w-6 h-[18px] flex flex-col justify-between items-center z-10">
        <span 
          className={`block h-[2px] w-full rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-center
            ${isOpen ? "translate-y-[8px] rotate-45 bg-[var(--color-primary)]" : "bg-black/70 group-hover:bg-[var(--color-primary)]"}`}
        />
        <span 
          className={`block h-[2px] w-full rounded-full transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0 scale-x-50 w-3" : "opacity-100 bg-black/70 group-hover:w-4"}`}
        />
        <span 
          className={`block h-[2px] w-full rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-center
            ${isOpen ? "-translate-y-[8px] -rotate-45 bg-[var(--color-primary)]" : "bg-black/70 group-hover:bg-[var(--color-primary)]"}`}
        />
      </div>

      {/* Viscous dark glow effect inside the capsule */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-multiply scale-75 group-hover:scale-100
          ${isOpen ? "bg-[#ffb599]/30 blur-[12px]" : "bg-[#00daf3]/20 blur-[12px]"}`}
      />
    </button>
  );
}
