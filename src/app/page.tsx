import HeroSection from "@/components/HeroSection";
import CollabSection from "@/components/CollabSection";
import MotiveSection from "@/components/MotiveSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <HeroSection />
      <CollabSection />
      <MotiveSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
