export default function Collab() {
  return (
    <section id="collab" className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
        Two ways to build with Proto.
      </h2>
      
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="card-base p-8 md:p-12 flex flex-col gap-4">
          <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-xs font-bold uppercase tracking-wider text-primary rounded-full">
            Studio Service
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Hire our lab. We build scalable systems fast.
          </h3>
          <p className="text-base font-semibold text-foreground/60 leading-relaxed md:w-3/4">
            Thanks to AI, people are shipping MVPs in days. You must be super-efficient to stay ahead — and we can be your biggest leverage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card-base p-8 md:p-12 flex flex-col gap-4">
          <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-xs font-bold uppercase tracking-wider text-primary rounded-full">
            Co-Founding
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            We back founders worth building with.
          </h3>
          <p className="text-base font-semibold text-foreground/60 leading-relaxed md:w-3/4">
            Bring us your most ambitious idea. We can be your technical co-founders, building the system end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
