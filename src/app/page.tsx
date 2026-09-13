const work = [
  ["Subscription infrastructure", "Product + engineering"],
  ["Vertical software for nutritionists", "Architecture + build"],
  ["EV charging platform", "Systems + product"],
  ["Real-time gesture interface", "Computer vision"],
];

export default function Home() {
  return (
    <div className="minimal-site">
      <section id="top" className="minimal-hero shell">
        <p className="minimal-kicker">Independent technical studio · 2026</p>
        <h1>From zero.<br />To <em>real.</em></h1>
        <div className="minimal-hero-foot">
          <p>I help founders decide what to build—then engineer the first version.</p>
          <a href="#contact">Start a project <span>↗</span></a>
        </div>
      </section>

      <section id="work" className="minimal-section shell">
        <div className="minimal-section-head"><p>Selected work</p><span>01—04</span></div>
        <div className="minimal-work-list">
          {work.map(([title, role], index) => (
            <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{role}</p></article>
          ))}
        </div>
      </section>

      <section id="studio" className="minimal-about shell">
        <p>Studio</p>
        <div>
          <h2>One person.<br />Fully involved.</h2>
          <p>I’m Ameen Nazer. I work with early founders on the decisions and systems that make a new product real.</p>
          <p>No layers, handoffs, or theatre. Just clear thinking and accountable engineering.</p>
        </div>
      </section>

      <section id="contact" className="minimal-contact shell">
        <p>Have something worth building?</p>
        <a href="mailto:ameennazerpk7@gmail.com">Let’s talk <span>↗</span></a>
        <small>ameennazerpk7@gmail.com</small>
      </section>
    </div>
  );
}
