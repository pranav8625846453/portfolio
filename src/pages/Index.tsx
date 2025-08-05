import { Header } from "@/components/Header";
import { ProfileSection } from "@/components/ProfileSection";
import { SocialLinks } from "@/components/SocialLinks";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { BlogSection } from "@/components/BlogSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProfileSection />
        <SocialLinks />
        <AboutSection />
        <TechStack />
        <BlogSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
