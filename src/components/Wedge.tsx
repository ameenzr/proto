import SectionHeader from "./SectionHeader";

export default function Wedge() {
  return (
    <section id="wedge" className="scroll-mt-16 border-b border-rule py-24 lg:py-32">
      <div className="shell grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            index="01"
            label="THE WEDGE"
            title={
              <>
                Building got cheap.
                <br />
                Judgment didn&apos;t.
              </>
            }
            titleClassName=""
          />
        </div>

        <div className="col-span-12 flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          <p className="body-copy on-scroll">
            AI collapsed the cost of writing software. It did not collapse the cost of building
            the wrong thing — the wrong data model, the wrong integration, the wrong bet about
            what this product has to become the week it starts working.
          </p>
          <p className="body-copy on-scroll">
            Early founders keep hiring hands when what they need is a head. The most expensive
            mistakes at seed stage are not bugs. They are architectural, they get made in month
            one, and you do not feel them until traction makes them fatal.
          </p>
          <p className="body-copy on-scroll">
            That is the seat I take. Opinionated before the code — about what to build first,
            what to defer, and which decisions are load-bearing — and accountable for it after,
            because I am the one building it.
          </p>
        </div>
      </div>
    </section>
  );
}
