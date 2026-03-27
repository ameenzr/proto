"use client";

import { useState } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailAdrs = "ameennazerpk7@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAdrs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 bg-[#F2E6D9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 text-foreground">
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-2">
            Connect with founder
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ameen Nazer Pk
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center min-h-[56px] px-10 py-4 text-base font-bold tracking-wide text-foreground bg-primary rounded-xl shadow-sm hover:shadow-md transition-all w-full sm:w-auto cursor-pointer"
          >
            Email us
          </button>

          <a
            href="https://www.linkedin.com/in/ameenzr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-[56px] px-10 py-4 text-base font-bold tracking-wide text-white bg-secondary rounded-xl shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/40 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative card-base w-full max-w-md p-8 md:p-12 flex flex-col items-center gap-8 text-center shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-foreground/20 hover:text-foreground transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-primary/10 p-4 rounded-full">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-foreground">Email id</h3>
              <p className="text-foreground/60 font-medium select-all">
                {emailAdrs}
              </p>
            </div>

            <button
              type="button"
              onClick={copyToClipboard}
              className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all ${copied
                  ? "bg-green-600 text-white"
                  : "bg-primary text-foreground hover:bg-primary/90"
                }`}
            >
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
