import Schematic from "./Schematic";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-main">
        <div className="hero-topline mono-label reveal"><span><span className="signal-dot" /> Independent technical studio</span><span className="hero-edition">IDEAS INTO REALITY. / BY AMEEN NAZER</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow mono-label reveal">For the ones building what&apos;s next.</p>
            <h1 className="hero-title reveal" style={{ "--i": 1 } as React.CSSProperties}>From zero.<br />To <span className="real-word">real<svg viewBox="0 0 300 18" aria-hidden="true"><path d="M3 13Q145 -3 295 9M70 16Q180 6 260 13" /></svg></span><span className="orange-period">.</span></h1>
            <p className="hero-description reveal" style={{ "--i": 2 } as React.CSSProperties}>The technical partner for your first big bet.<br />I help you decide what to build. Then I build it<br className="desktop-break" /> to hold up when it takes off.</p>
            <div className="hero-actions reveal" style={{ "--i": 3 } as React.CSSProperties}><a href="#contact" className="btn btn-signal">Let&apos;s build something <span aria-hidden="true">↗</span></a><a href="#work" className="text-link">Explore the work <span aria-hidden="true">↓</span></a></div>
            <div className="hero-signature"><span className="signature-mark" aria-hidden="true">an.</span><div><span>Ameen Nazer</span><p>YOUR TECHNICAL HALF.</p></div></div>
          </div>
          <Schematic />
        </div>
        <div className="hero-bottom mono-label"><span>Good judgment. Real engineering.</span><a href="#wedge">A little further down <span aria-hidden="true">↓</span></a><span>0 → 1 / BUILT TO MATTER</span></div>
      </div>
      <div className="capability-strip"><div className="shell"><span>Strategy before syntax.</span><span aria-hidden="true">✳</span><span>Architecture that holds.</span><span aria-hidden="true">✳</span><span>Products that ship.</span><span aria-hidden="true">✳</span><span>Skin in the game.</span></div></div>
    </section>
  );
}
