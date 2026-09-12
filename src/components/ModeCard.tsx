export default function ModeCard({ id, index, name, subLabel, body, cta, accent = false }: { id: string; index: string; name: string; subLabel: string; body: string; cta: string; accent?: boolean }) {
  return <article id={id} className={`mode-card on-scroll ${accent ? "co-founder" : ""}`}><div className="mode-card-top"><span className="mono-label">{accent ? "CO-FOUND" : "BUILD"} / {index}</span><span className="mono-label">{accent ? "EQUITY" : "PROJECT"}</span></div>
    <svg viewBox="0 0 80 70" fill="none" stroke="currentColor" strokeWidth="1" className="mode-icon" aria-hidden="true">{accent ? <><circle cx="29" cy="34" r="23" /><circle cx="51" cy="34" r="23" /><path d="M29 11v46M51 11v46M6 34h68" strokeDasharray="2 3" /></> : <><path d="M40 4 72 22v33L40 69 8 51V20Z M8 20l32 18 32-16M40 38v31M40 4v34M8 51l32-17 32 21" /><path d="M24 12v49M56 13v49M8 36l32 18 32-16" opacity=".45" /></>}</svg>
    <h3>{name}</h3><p className="body-copy">{body}</p><p className="mono-label">{subLabel}</p><a href="#contact" className="text-link">{cta}<span aria-hidden="true">↗</span></a>
  </article>;
}
