import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubStats from "@/components/GitHubStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme } = useTheme();

  /* ── Butter-smooth scroll with Lenis ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // expose globally so Navbar can call lenis.scrollTo()
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
  <div className="relative min-h-screen bg-background text-foreground">
    {/* Interactive dot grid background */}
    <DotGrid
      dotSize={3}
      gap={22}
      baseColor={theme === "dark" ? "#1e293b" : "#cbd5e1"}
      activeColor={theme === "dark" ? "#0ea5e9" : "#0284c7"}
      proximity={130}
      speedTrigger={80}
      shockRadius={220}
      shockStrength={4}
      resistance={0.85}
      returnDuration={1.4}
    />
    {/* Radial fade at edges */}
    <div className="pointer-events-none fixed inset-0 z-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubStats />
      <ContactSection />
    </main>
    <Footer />
  </div>
  );
};

export default Index;
