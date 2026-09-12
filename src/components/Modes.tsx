import SectionHeader from "./SectionHeader";
import ModeCard from "./ModeCard";
export default function Modes() {
  return <section className="engagement"><div className="shell"><div className="section-heading"><SectionHeader index="02" label="CHOOSE YOUR WAY IN" title={<>Different commitments.<br />Same conviction.</>} /><p>From the first line of thinking to the first real version. Two ways to make it happen.</p></div><div className="mode-grid">
    <ModeCard id="build" index="01" name="Your build partner." subLabel="ONE IDEA. BUILT RIGHT." body="Bring me the idea. I design and build the system end to end — MVPs, internal tools, and the load-bearing infrastructure. A real first version, engineered for what comes next." cta="Start a build" />
    <ModeCard id="cofound" index="02" name="Your technical half." subLabel="SHARED RISK. SHARED UPSIDE." body="For founders worth betting on. I come in as the technical co-founder — architecture, build, and the hard calls — with real skin in the game. Fewer of these. Chosen carefully." cta="Make the case" accent />
  </div></div></section>;
}
