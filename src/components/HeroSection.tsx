import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Code2, Mail, Phone, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const titles = [
  "Headless Shopify Developer",
  "Full-Stack Software Engineer",
  "Shopify Hydrogen & Remix Specialist",
  "Custom E-Commerce & Store Developer",
  "Full-Stack Web & MVP Builder",
  "Business Automation & AI Integrator",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -100, duration: 1.2 });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/Adnan khalil Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Adnan Khalil Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/Adnan khalil Resume.pdf', '_blank');
    }
  };

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTitleIndex(prev => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          
          {/* Availability pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-medium text-emerald-400">
              Open to Full-Time Roles & Freelance Projects
            </span>
          </div>

          {/* Terminal card */}
          <div className="mx-auto mb-6 max-w-2xl overflow-hidden rounded-xl border border-border/50 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur-sm sm:mb-8">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2 sm:px-4 sm:py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/80 sm:h-3 sm:w-3" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground sm:text-xs">portfolio.config.ts</span>
            </div>
            <div className="p-4 text-left font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-cyan-400 dark:text-cyan-300">engineer</span> = {"{"}
              </p>
              <p className="ml-4 text-muted-foreground">
                name: <span className="text-green-400 dark:text-green-300">"Adnan Khalil"</span>,
              </p>
              <p className="ml-4 text-muted-foreground">
                education: <span className="text-green-400 dark:text-green-300">"BS SE @ COMSATS University"</span>,
              </p>
              <p className="ml-4 text-muted-foreground">
                specialty: <span className="text-green-400 dark:text-green-300">"Headless Shopify & Custom Store Dev"</span>,
              </p>
              <p className="ml-4 text-muted-foreground">
                role:{" "}
                <span className="text-green-400 dark:text-green-300">
                  "{text}
                  <span className="animate-pulse">|</span>"
                </span>
                ,
              </p>
              <p className="ml-4 text-muted-foreground">
                mission: <span className="text-green-400 dark:text-green-300">"Sub-second storefronts, CRO & GEO optimization"</span>
              </p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </div>

          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Adnan Khalil</span>
          </h1>
          <p className="mb-2 font-mono text-sm text-foreground sm:text-lg">
            Full-Stack Software Engineer (COMSATS University) | 2+ Years Exp
          </p>
          <p className="mb-6 max-w-2xl mx-auto text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Specializing in <span className="text-primary font-medium">Headless Shopify</span> (Hydrogen, Oxygen, Remix), Custom Store Development (Liquid, GraphQL), Scalable Web Apps & Business AI Automation.
          </p>

          <div className="mb-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <a href="mailto:adnanmughal0342@gmail.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" /> adnanmughal0342@gmail.com
            </a>
            <a href="tel:03421986817" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" /> 0342-1986817
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="default" className="w-full gap-2 font-mono sm:w-auto sm:size-lg" asChild>
              <a href="#services" onClick={(e) => smoothScrollTo(e, "services")}>
                <ShoppingBag className="h-4 w-4" />
                Explore Solutions
              </a>
            </Button>
            <Button size="default" variant="outline" className="w-full gap-2 font-mono sm:w-auto sm:size-lg" asChild>
              <a href="#projects" onClick={(e) => smoothScrollTo(e, "projects")}>
                <Code2 className="h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button size="default" variant="secondary" className="w-full gap-2 font-mono sm:w-auto sm:size-lg" onClick={handleDownloadCV}>
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-12 sm:mt-16">
          <a href="#about" onClick={(e) => smoothScrollTo(e, "about")} className="inline-block animate-bounce text-muted-foreground transition-colors hover:text-primary">
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

