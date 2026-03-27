"use client";

import { useState, useEffect } from "react";

const buttonLabels = [
  "Talk to us",
  "Ideate with us",
  "Consult with us",
  "Edify with us",
];

const keywordsLine1 = "Ultra-Niche Tools · Purpose-Built Software · Workflow Automations · Internal Dashboards · Ultra-Niche Tools · Purpose-Built Software · Workflow Automations · Internal Dashboards · ";
const keywordsLine2 = "Proof of Concept · Venture Engineering · Technical Co-founding · AI-Assisted Architecture · Proof of Concept · Venture Engineering · Technical Co-founding · AI-Assisted Architecture · ";
const keywordsLine3 = "Product Incubation · Flash Apps · Rapid Deployment · Micro-SaaS · Zero-to-One Builds · Agile Engineering · Product Incubation · Flash Apps · Rapid Deployment · Micro-SaaS · Zero-to-One Builds · Agile Engineering · ";
const keywordsLine4 = "Custom Integrations · Process Optimization · Minimum Viable Products · Full-Stack Development · Custom Integrations · Process Optimization · Minimum Viable Products · Full-Stack Development · ";
const keywordsLine5 = "Rapid Prototyping · Growth Architecture · B2B Platforms · Scalable Infrastructure · Rapid Prototyping · Growth Architecture · B2B Platforms · Scalable Infrastructure · ";
const keywordsLine6 = "Data Pipelines · Platform Migration · Legacy Modernization · End-to-End Solutions · Data Pipelines · Platform Migration · Legacy Modernization · End-to-End Solutions · ";
const keywordsLine7 = "Technical Co-founding · Generative AI Prototypes · Micro-SaaS · Agile Engineering · Technical Co-founding · Generative AI Prototypes · Micro-SaaS · Agile Engineering · ";
const keywordsLine8 = "Performance Tuning · Zero-to-One Builds · Enterprise Apps · Proof of Concept · Performance Tuning · Zero-to-One Builds · Enterprise Apps · Proof of Concept · ";

export default function Hero() {
  const [labelIndex, setLabelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((current) => (current + 1) % buttonLabels.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-x-0 -inset-y-4 md:-inset-y-8 pointer-events-none flex flex-col justify-between opacity-[0.06] select-none text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap text-foreground overflow-hidden">
        <div className="flex w-max animate-scroll-left">
          <span>{keywordsLine1}</span>
          <span>{keywordsLine1}</span>
        </div>
        <div className="flex w-max animate-scroll-right">
          <span>{keywordsLine2}</span>
          <span>{keywordsLine2}</span>
        </div>
        <div className="flex w-max animate-scroll-left">
          <span>{keywordsLine3}</span>
          <span>{keywordsLine3}</span>
        </div>
        <div className="flex w-max animate-scroll-right">
          <span>{keywordsLine4}</span>
          <span>{keywordsLine4}</span>
        </div>
        <div className="flex w-max animate-scroll-left">
          <span>{keywordsLine5}</span>
          <span>{keywordsLine5}</span>
        </div>
        <div className="flex w-max animate-scroll-right">
          <span>{keywordsLine6}</span>
          <span>{keywordsLine6}</span>
        </div>
        <div className="flex w-max animate-scroll-left">
          <span>{keywordsLine7}</span>
          <span>{keywordsLine7}</span>
        </div>
        <div className="flex w-max animate-scroll-right">
          <span>{keywordsLine8}</span>
          <span>{keywordsLine8}</span>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Make it real. <span className="text-primary">Quick!</span>
        </h1>
        
        <button 
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative overflow-hidden w-48 h-12 rounded-full bg-primary text-foreground shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center cursor-pointer"
        >
          <div className="relative w-full h-full">
            {buttonLabels.map((label, i) => (
              <span 
                key={label}
                className={`absolute inset-0 flex items-center justify-center font-medium text-sm transition-all duration-500 transform ${
                  i === labelIndex 
                    ? "translate-y-0 opacity-100" 
                    : i < labelIndex
                      ? "-translate-y-4 opacity-0"
                      : "translate-y-4 opacity-0"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </button>
      </div>
    </section>
  );
}
