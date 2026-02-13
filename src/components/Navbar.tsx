import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ThemeProvider";
import {
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  Users,
  LayoutGrid,
  Terminal,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero", icon: Home, sectionId: "hero" },
  { label: "About", href: "#about", icon: User, sectionId: "about" },
  { label: "Experience", href: "#experience", icon: Briefcase, sectionId: "experience" },
  { label: "Projects", href: "#projects", icon: Code2, sectionId: "projects" },
  { label: "Skills", href: "#skills", icon: Users, sectionId: "skills" },
  { label: "Stats", href: "#stats", icon: LayoutGrid, sectionId: "stats" },
  { label: "Contact", href: "#contact", icon: Mail, sectionId: "contact" },
];

const SCROLL_OFFSET = 100;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  /* ── Track which section is in view ─────────────────────── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Compact navbar on scroll ───────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth-scroll handler (Lenis-aware) ────────────────── */
  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const target = document.getElementById(sectionId);
      if (!target) return;

      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -SCROLL_OFFSET, duration: 1.2 });
      } else {
        const top =
          target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }

      setMobileOpen(false);
    },
    [],
  );

  return (
    <>
      {/* ═══════════════ Desktop navbar ═══════════════ */}
      <nav className="fixed top-5 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div
          className={cn(
            "flex items-center gap-1 rounded-full border bg-background/60 px-4 backdrop-blur-2xl transition-all duration-500",
            scrolled ? "py-1.5" : "py-2",
            // border & glow
            "border-primary/20 ring-1 ring-primary/10",
            "shadow-[0_0_20px_hsl(var(--primary)/0.10),0_0_60px_hsl(var(--primary)/0.03),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
            // hover
            "hover:border-primary/35 hover:ring-primary/20",
            "hover:shadow-[0_0_30px_hsl(var(--primary)/0.18),0_0_80px_hsl(var(--primary)/0.05),inset_0_0_0_1px_rgba(255,255,255,0.1)]",
            // dark
            "dark:border-primary/15 dark:bg-background/50",
            "dark:shadow-[0_0_25px_hsl(var(--primary)/0.12),0_0_60px_hsl(var(--primary)/0.04),inset_0_0_0_1px_rgba(255,255,255,0.04)]",
            "dark:hover:border-primary/30 dark:hover:shadow-[0_0_40px_hsl(var(--primary)/0.22),0_0_80px_hsl(var(--primary)/0.06)]",
          )}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNav(e, "hero")}
            className={cn(
              "mr-1 flex items-center justify-center rounded-full p-2.5 transition-all duration-200",
              "text-foreground hover:bg-primary/10 hover:text-primary hover:scale-110",
              activeSection === "hero" && "text-primary",
            )}
            aria-label="Home"
          >
            <Terminal className="h-5 w-5" />
          </a>

          <div className="mx-1 h-5 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

          {/* Nav icons */}
          {navLinks.slice(1).map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.sectionId}
                href={link.href}
                onClick={(e) => handleNav(e, link.sectionId)}
                className={cn(
                  "group relative flex items-center justify-center rounded-full p-2.5 transition-all duration-200",
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                  "hover:scale-110",
                )}
                aria-label={link.label}
              >
                <link.icon className="h-[18px] w-[18px]" />

                {/* Active dot */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-all duration-300",
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                />

                {/* Tooltip */}
                <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border/50 bg-card px-2.5 py-1 font-mono text-[10px] text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 group-hover:-bottom-10">
                  {link.label}
                </span>
              </a>
            );
          })}

          <div className="mx-1 h-5 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2.5 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:rotate-12"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </nav>

      {/* ═══════════════ Mobile navbar ═══════════════ */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <div
          className={cn(
            "flex flex-col rounded-2xl border border-primary/20 bg-background/60 backdrop-blur-2xl transition-all duration-300",
            "shadow-[0_0_20px_hsl(var(--primary)/0.10),inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-primary/10",
            "dark:border-primary/15 dark:bg-background/50 dark:shadow-[0_0_25px_hsl(var(--primary)/0.12),inset_0_0_0_1px_rgba(255,255,255,0.04)] dark:ring-primary/10",
            mobileOpen ? "w-[260px]" : "w-auto",
          )}
        >
          <div className="flex items-center justify-between px-4 py-2.5">
            <a
              href="#hero"
              onClick={(e) => handleNav(e, "hero")}
              className="flex items-center gap-2 text-foreground"
              aria-label="Home"
            >
              <Terminal className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Animated dropdown */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="flex flex-col gap-0.5 border-t border-border/30 px-3 py-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.sectionId}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.sectionId)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 font-mono text-sm transition-all duration-200",
                      isActive
                        ? "bg-primary/15 text-primary font-medium"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </a>
                );
              })}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
