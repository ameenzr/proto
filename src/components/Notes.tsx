import SectionHeader from "./SectionHeader";
import NoteTeaser from "./NoteTeaser";

const notes = [
  {
    index: "01",
    title: "The technical calls that sink seed-stage startups",
    tag: "ARCHITECTURE · 0-TO-1",
  },
  {
    index: "02",
    title: "What to build first when everything feels urgent",
    tag: "PRIORITISATION · MVP",
  },
  {
    index: "03",
    title: "When to prototype and when to architect",
    tag: "JUDGMENT · METHOD",
  },
];

export default function Notes() {
  return (
    <section id="notes" className="scroll-mt-16 border-b border-rule py-24 lg:py-32">
      <div className="shell flex flex-col gap-14">
        <SectionHeader
          index="05"
          label="FIELD NOTES"
          title="How I think about the calls, written down."
          titleClassName="max-w-[24ch]"
        />

        <div className="grid grid-cols-12 gap-6">
          {notes.map((note) => (
            <div key={note.index} className="col-span-12 md:col-span-4">
              <NoteTeaser {...note} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
