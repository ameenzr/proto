export default function MotiveSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 flex flex-col items-center z-10 bg-gradient-to-b from-transparent to-black/[0.02]">
      <div className="w-full max-w-4xl text-center mb-24">
        <p className="font-sans text-xl md:text-3xl lg:text-4xl text-foreground font-medium leading-relaxed tracking-tight">
          AI intelligence is progressing towards minimal cost. It will reshape the world like electricity once did. Building digital products has never been this fast or accessible. Now it's possible to enter ultra-niche and short-term markets like never before. 
          <br/><br/>
          <span className="text-[var(--color-primary-container)] font-black italic">We’re here to build in that shift!</span>
        </p>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Quote 1 */}
        <blockquote className="relative p-8 md:p-12 rounded-[2.5rem] bg-black/[0.03] backdrop-blur-[15px] border border-black/5 self-start w-full md:w-5/6"
                    style={{ boxShadow: "inset 0 1px 3px rgba(255,181,153,0.3), 0 15px 30px -15px rgba(0,0,0,0.1)" }}>
          <p className="font-display font-bold uppercase text-2xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-[1.1] tracking-tight">
            "The cost of intelligence will eventually converge to near the cost of electricity."
          </p>
          <footer className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--color-tertiary)] opacity-90 font-bold">
            — Sam Altman, CEO of OpenAI
          </footer>
        </blockquote>

        {/* Quote 2 */}
        <blockquote className="relative p-8 md:p-12 rounded-[2.5rem] bg-black/[0.03] backdrop-blur-[15px] border border-black/5 self-end w-full md:w-5/6 text-left md:text-right"
                    style={{ boxShadow: "inset 0 1px 3px rgba(0,218,243,0.3), 0 15px 30px -15px rgba(0,0,0,0.1)" }}>
          <p className="font-display font-bold uppercase text-2xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-[1.1] tracking-tight">
            "This platform shift is the most profound we have seen in 25 years. The tools we are putting in the hands of developers today will unlock a wave of innovation unlike anything before."
          </p>
          <footer className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--color-primary-container)] opacity-90 font-bold">
            — Sundar Pichai, CEO of Google
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
