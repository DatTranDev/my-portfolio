import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import GenerativeBackground from "./components/GenerativeBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <GenerativeBackground>
        <div className="container mt-24 mx-auto px-6 md:px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </GenerativeBackground>
    </main>
  );
}
