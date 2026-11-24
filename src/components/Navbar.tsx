"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Build", href: "#collab" },
  { name: "Motive", href: "#motive" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300); // Wait for menu to start closing
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-primary/25 via-background/70 to-secondary/25 backdrop-blur-2xl border-b border-white/40 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between py-5 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-[60]">
        <Link href="/" className="z-50" onClick={() => setIsOpen(false)}>
          <img
            src="/logo black.png"
            alt="Proto"
            className="h-4.5 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden z-[70] p-2 text-foreground focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-foreground transition-all duration-300 transform origin-left ${isOpen ? 'rotate-45 translate-x-[4px] -translate-y-[1px]' : ''}`} />
            <span className={`w-full h-0.5 bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-foreground transition-all duration-300 transform origin-left ${isOpen ? '-rotate-45 translate-x-[4px] translate-y-[1px]' : ''}`} />
          </div>
        </button>

        {/* Immersive Mobile Menu Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 h-[100dvh] w-screen bg-gradient-to-br from-[#0A0A0B]/80 via-[#0A0A0B]/60 to-[#0A0A0B]/80 backdrop-blur-2xl z-40 flex items-center justify-center p-6 transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`relative card-base w-full max-w-md p-8 md:p-12 flex flex-col items-center gap-8 text-center shadow-2xl transition-all duration-500 transform ${
              isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-4xl font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors py-2 min-h-[56px] flex items-center justify-center w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Red Warning Banner */}
      <div className="bg-red-600/90 backdrop-blur-md text-white text-[10px] md:text-xs py-2 px-6 text-center font-bold tracking-wide border-t border-white/10">
        ⚠️ We're currently redesigning our website — this page is live for content only and not a reflection of the final experience.
      </div>
    </nav>
  );
}
