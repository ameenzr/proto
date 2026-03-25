const PROJECTS = [
  {
    title: "Diet Platform",
    desc: "Platform for managing subscription-based diet delivery services.",
    classes: "md:w-[45%] self-start"
  },
  {
    title: "Nutritionist CMS",
    desc: "Client management system for independent nutritionists.",
    classes: "md:w-[40%] self-end md:-mt-20"
  },
  {
    title: "EV Charging App",
    desc: "App to manage and monetize local EV charging setups.",
    classes: "md:w-[50%] self-center mt-6 md:mt-24"
  },
  {
    title: "Live Gesture System",
    desc: "Gesture-controlled presentation system for live environments.",
    classes: "md:w-[45%] self-start mt-6 md:-mt-16"
  },
  {
    title: "Study Notes Tool",
    desc: "Screenshot-based Study notes organization tool for online learners.",
    classes: "md:w-[55%] self-end mt-6 md:mt-16"
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 flex flex-col items-center z-10 overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col items-center relative">
        <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-foreground text-center mb-16 md:mb-32 tracking-tight leading-tight">
          What We’ve Built.
        </h2>

        <div className="w-full flex flex-col gap-6 md:gap-0">
          {PROJECTS.map((p, i) => (
             <div key={i} 
                  className={`rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center min-h-[200px]
                              bg-black/[0.04] backdrop-blur-[20px] border border-black/10
                              transition-all duration-700 hover:-translate-y-4 hover:bg-black/[0.06] group cursor-default
                              ${p.classes}`}
                  style={{ boxShadow: "inset 0 1px 3px rgba(255,181,153,0.4), inset 0 -1px 3px rgba(0,218,243,0.3), 0 25px 50px -25px rgba(0,10,30,0.15)" }}>
               <h3 className="font-mono text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-widest leading-tight">
                 {p.title}
               </h3>
               <p className="font-sans text-sm md:text-lg text-foreground/80 leading-relaxed font-medium">
                 {p.desc}
               </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
