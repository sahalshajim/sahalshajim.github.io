import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import ImpactBand from "@/components/ImpactBand";
import Nav from "@/components/Nav";
import PatentsSection from "@/components/PatentsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImpactBand />
        <FeaturedPosts />
        <PublicationsSection />
        <HighlightsSection />
        <PatentsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
