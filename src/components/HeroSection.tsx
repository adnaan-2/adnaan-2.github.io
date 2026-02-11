import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const titles = ["Software Engineer", "Full Stack Developer", "MERN Stack Developer"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Terminal card */}
          <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">portfolio.tsx</span>
            </div>
            <div className="p-6 text-left font-mono text-sm leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-cyan-400 dark:text-cyan-300">developer</span> = {"{"}
              </p>
              <p className="ml-4 text-muted-foreground">
                name: <span className="text-green-400 dark:text-green-300">"Adnan Khalil"</span>,
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
                passion: <span className="text-green-400 dark:text-green-300">"Building elegant solutions"</span>
              </p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hi, I'm <span className="text-primary">Adnan Khalil</span>
          </h1>
          <p className="mb-8 font-mono text-lg text-muted-foreground">
            {">"} {text}
            <span className="animate-pulse text-primary">_</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 font-mono" asChild>
              <a href="#projects">
                <Code2 className="h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-mono" asChild>
              <a href="/Adnan khalil Resume.pdf" download="Adnan Khalil Resume.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-16">
          <a href="#about" className="inline-block animate-bounce text-muted-foreground transition-colors hover:text-primary">
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
