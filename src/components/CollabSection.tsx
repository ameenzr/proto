export default function CollabSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 flex flex-col items-center z-10">
      <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-foreground text-center mb-16 max-w-5xl tracking-tight leading-tight">
        Two ways to build with <span className="text-[var(--color-primary-container)] italic font-black">Proto.</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Studio Service Tile */}
        <div className="flex-1 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-start
                        bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                        transition-all duration-500 hover:-translate-y-2 group"
             style={{ boxShadow: "inset 0 1px 3px rgba(255,181,153,0.4), inset 0 -1px 3px rgba(0,218,243,0.2), 0 20px 40px -20px rgba(0,10,30,0.15)" }}>
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
            The Studio Service: <br/>
            <span className="opacity-70 font-medium">Hire our lab. We build scalable systems fast.</span>
          </h3>
          <p className="font-mono text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed uppercase tracking-wider mt-auto pt-8">
            Thanks to AI people are shipping MVPs in days now. You must be super-efficient to stay ahead and we can be a huge leverage to you.
          </p>
        </div>

        {/* Founders Tile */}
        <div className="flex-1 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-start
                        bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                        transition-all duration-500 hover:-translate-y-2 group"
             style={{ boxShadow: "inset 0 1px 3px rgba(0,218,243,0.4), inset 0 -1px 3px rgba(255,181,153,0.2), 0 20px 40px -20px rgba(0,10,30,0.15)" }}>
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
            We back founders worth building with. <br/>
            <span className="opacity-70 font-medium">Bring us your most ambitious idea.</span>
          </h3>
          <p className="font-mono text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed uppercase tracking-wider mt-auto pt-8">
            We can be your technical co-founders building the system end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
