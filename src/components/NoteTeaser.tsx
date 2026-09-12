export default function NoteTeaser({ index, title, tag }: { index: string; title: string; tag: string }) {
  return <article className="note-card on-scroll"><div className="flex items-center justify-between gap-4"><span className="mono-label">NOTE / {index}</span><span className="mono-label note-status">IN THE WORKS</span></div><h3 className="h3 flex-1">{title}</h3><p className="mono-meta">{tag}</p></article>;
}
