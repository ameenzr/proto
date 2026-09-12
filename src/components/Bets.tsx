import SectionHeader from "./SectionHeader";
import BetCard from "./BetCard";

const bets = [
  {
    index: "01",
    title: "Subscription diet-delivery platform",
    context: "A food business drowning in manual ops — orders, plans and fulfilment held together by hand.",
    call: "Build the subscription and fulfilment engine as the product, rather than a pretty app sitting on top of the chaos.",
    held: "The operation scaled without the founder adding headcount to absorb it.",
    role: "ARCHITECTURE + BUILD",
    system: "SUBSCRIPTION / FULFILMENT",
    stage: "SHIPPED",
  },
  {
    index: "02",
    title: "Client management for independent nutritionists",
    context: "Independent practitioners running their entire client book through tools built for somebody else.",
    call: "Verticalize hard for one niche instead of shipping another generic CRM.",
    held: "It fit a workflow no horizontal tool respected, so it actually got adopted.",
    role: "ARCHITECTURE + BUILD",
    system: "VERTICAL SAAS",
    stage: "SHIPPED",
  },
  {
    index: "03",
    title: "Monetizing local EV-charging setups",
    context: "Charging hardware installed as a cost centre, with no way to meter, manage or bill against it.",
    call: "Treat the hardware as a managed, monetizable network rather than a set of one-off installs.",
    held: "It turned standing infrastructure into recurring revenue instead of sunk cost.",
    role: "ARCHITECTURE + BUILD",
    system: "HARDWARE-ADJACENT",
    stage: "SHIPPED",
  },
  {
    index: "04",
    title: "Gesture-controlled live presentation system",
    context: "Live events, on stage, where a freeze in front of an audience is not a bug report — it is the whole failure.",
    call: "Engineer for real-time reliability first and feature surface second.",
    held: "It performed live, without a net, under conditions that punish latency.",
    role: "ARCHITECTURE + BUILD",
    system: "REAL-TIME / VISION",
    stage: "SHIPPED",
  },
  {
    index: "05",
    title: "Screenshot-based study-notes organiser",
    context: "Online learners capturing everything and finding nothing, across a dozen disconnected sources.",
    call: "Nail capture-to-organize as the entire value and resist every feature that would slow it down.",
    held: "It stayed fast, so it stayed used.",
    role: "ARCHITECTURE + BUILD",
    system: "CONSUMER UTILITY",
    stage: "SHIPPED",
  },
];

export default function Bets() {
  return (
    <section id="work" className="work-section">
      <div className="shell">
        <div className="section-heading">
        <SectionHeader
          index="03"
          label="SELECTED WORK / THE BETS"
          title={<>Less hypothetical.<br />More out in the world.</>}
          titleClassName="max-w-[26ch]"
        />
        <p>Different problems. Deliberate decisions. Real systems built to earn their place.</p>
        </div>
        <div className="work-grid">
          {bets.map((bet) => (
            <BetCard key={bet.index} {...bet} />
          ))}
        </div>
      </div>
    </section>
  );
}
