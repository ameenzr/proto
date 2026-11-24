const projects = [
  {
    title: "Diet Delivery OS",
    description: "Subscription-based diet delivery management platform",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "NutriDesk",
    description: "Client management for independent nutritionists",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "ChargeLocal",
    description: "Manage and monetize local EV charging setups",
    span: "md:col-span-1 md:row-span-1 flex flex-col justify-end",
  },
  {
    title: "GestureStage",
    description: "Gesture-controlled presentation system for live events",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "SnapNotes",
    description: "Screenshot-based study notes organiser for online learners",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
        What We've Built
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] grid-flow-dense mb-12">
        {projects.map((project, i) => (
          <div key={i} className={`card-base p-8 flex flex-col justify-center transition-transform hover:-translate-y-1 hover:shadow-lg ${project.span}`}>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end w-full">
        <a 
          href="#contact"
          className="text-sm font-semibold tracking-wide uppercase text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group cursor-pointer"
        >
          Connect to know more 
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
