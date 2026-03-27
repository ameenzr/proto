import Hero from "@/components/Hero";
import Collab from "@/components/Collab";
import Motive from "@/components/Motive";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <Hero />
      <Collab />
      <Motive />
      <Projects />
      <Contact />
    </div>
  );
}
