export default function Motive() {
  return (
    <section id="motive" className="w-full py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex flex-col w-full">
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground mb-16">
          AI intelligence is progressing towards minimal cost. It will reshape the world like electricity once did. Building digital products has never been this fast or accessible. Now it's possible to enter ultra-niche and short-term markets like never before. We're here to build in that shift.
        </p>
        
        <div className="flex flex-col gap-8">
          <blockquote className="card-base p-6 md:p-8 flex flex-col gap-4 border-l-[6px] border-l-primary border-y-0 border-r-0 rounded-l-none bg-primary/5 relative">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
              "The cost of intelligence will eventually converge to near the cost of electricity."
            </p>
            <footer className="text-sm font-semibold tracking-wide uppercase text-foreground/50">
              — Sam Altman, CEO of OpenAI
            </footer>
          </blockquote>

          <blockquote className="card-base p-6 md:p-8 flex flex-col gap-4 border-l-[6px] border-l-primary border-y-0 border-r-0 rounded-l-none bg-primary/5 relative">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
              "This platform shift is the most profound we have seen in 25 years. The tools we are putting in the hands of developers today will unlock a wave of innovation unlike anything before."
            </p>
            <footer className="text-sm font-semibold tracking-wide uppercase text-foreground/50">
              — Sundar Pichai, CEO of Google
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
