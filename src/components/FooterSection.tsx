export default function FooterSection() {
  return (
    <footer id="footer" className="relative w-full py-32 px-6 md:px-12 flex flex-col items-center z-10 bg-gradient-to-t from-black/[0.04] to-transparent">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        
        <h2 className="display-lg text-3xl md:text-5xl lg:text-7xl text-foreground mb-16 px-4">
          Connect to know more <br className="hidden md:block"/> <span className="text-[var(--color-primary-container)]">→</span>
        </h2>

        {/* Contact Module */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full">
          
          <div className="font-mono text-lg md:text-xl uppercase tracking-[0.2em] text-foreground font-bold md:mr-8 mb-8 md:mb-0">
            Ameen Nazer
          </div>

          <a href="mailto:ameennazerpk7@gmail.com"
             className="relative flex items-center justify-center rounded-full px-10 py-4 md:py-5
                        bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                        transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105 active:scale-95 group w-full md:w-auto"
             style={{ boxShadow: "inset 0 1px 3px rgba(255,181,153,0.4), 0 15px 30px -10px rgba(0,0,0,0.05)" }}>
             <span className="font-mono text-sm md:text-base uppercase tracking-widest text-foreground font-bold z-10 relative">Email</span>
             <div className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 bg-[#ffb599]/20 blur-[15px] pointer-events-none" />
          </a>

          <a href="https://www.linkedin.com/in/ameenzr" target="_blank" rel="noopener noreferrer"
             className="relative flex items-center justify-center rounded-full px-10 py-4 md:py-5
                        bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                        transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105 active:scale-95 group w-full md:w-auto"
             style={{ boxShadow: "inset 0 1px 3px rgba(0,218,243,0.4), 0 15px 30px -10px rgba(0,0,0,0.05)" }}>
             <span className="font-mono text-sm md:text-base uppercase tracking-widest text-foreground font-bold z-10 relative">LinkedIn</span>
             <div className="absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 bg-[#00daf3]/20 blur-[15px] pointer-events-none" />
          </a>
        </div>
      </div>
    </footer>
  );
}
