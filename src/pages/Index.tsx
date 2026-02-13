import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubStats from "@/components/GitHubStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Index = () => {
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
    {/* Global grid background */}
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)]",
      )}
    />
    {/* Radial fade mask — softer so more grid is visible */}
    <div className="pointer-events-none fixed inset-0 z-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />

    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
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
