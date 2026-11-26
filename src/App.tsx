import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { projects } from "@/data/portfolio";

function Portfolio() {
  return (
    <div className="portfolio-site">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectShowcase projects={projects} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
