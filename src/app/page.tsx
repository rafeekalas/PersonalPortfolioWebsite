import { AboutSection } from "@/components/AboutSection";
import { CareerTimeline } from "@/components/CareerTimeline";
import { ContactFooter } from "@/components/ContactFooter";
import { EducationPublications } from "@/components/EducationPublications";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CareerTimeline />
      <SkillsSection />
      <EducationPublications />
      <ContactFooter />
    </>
  );
}
