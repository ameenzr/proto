export default function SectionHeader({ index, label, title, titleClassName = "max-w-[22ch]" }: { index: string; label: string; title: React.ReactNode; titleClassName?: string }) {
  return <header><div className="section-kicker"><span className="mono-label">{index}</span><span className="kicker-line" aria-hidden="true" /><span className="mono-label">{label}</span></div><h2 className={`h2 on-scroll ${titleClassName}`}>{title}</h2></header>;
}
