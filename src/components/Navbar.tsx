import { useState, useEffect, useCallback, useRef, Children, cloneElement, useMemo, type ReactElement } from "react";
import { useTheme } from "./ThemeProvider";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "motion/react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Nav data ──────────────────────────────────────────── */

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
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };
const BASE_SIZE = 40;
const MAGNIFICATION = 60;
const DISTANCE = 140;

/* ── Dock primitives ───────────────────────────────────── */

interface DockItemProps {
  children: ReactElement | ReactElement[];
  mouseX: MotionValue<number>;
  onClick?: () => void;
  className?: string;
}

function DockItem({ children, mouseX, onClick, className = "" }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: BASE_SIZE };
    return val - rect.x - BASE_SIZE / 2;
  });

  const targetSize = useTransform(mouseDistance, [-DISTANCE, 0, DISTANCE], [BASE_SIZE, MAGNIFICATION, BASE_SIZE]);
  const size = useSpring(targetSize, SPRING);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center rounded-xl border border-border/40 bg-background/80 shadow-sm outline-none backdrop-blur-sm transition-colors",
        "hover:border-primary/40 hover:bg-primary/10",
        className,
      )}
      tabIndex={0}
      role="button"
    >
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, { isHovered }),
      )}
    </motion.div>
  );
}

function DockLabel({ children, isHovered }: { children: React.ReactNode; isHovered?: MotionValue<number> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsub = isHovered.on("change", (v) => setVisible(v === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none absolute -top-8 left-1/2 z-50 whitespace-nowrap rounded-md border border-border/50 bg-card px-2.5 py-1 font-mono text-[10px] text-foreground shadow-lg backdrop-blur-sm"
          style={{ x: "-50%" }}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children }: { children: React.ReactNode; isHovered?: MotionValue<number> }) {
  return <div className="flex items-center justify-center">{children}</div>;
}

/* ── Main Navbar ───────────────────────────────────────── */

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const panelHeight = 56;
  const maxHeight = useMemo(
    () => Math.max(80, MAGNIFICATION + MAGNIFICATION / 2 + 4),
    [],
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, SPRING);

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

  /* ── Smooth-scroll handler ──────────────────────────────── */
  const scrollTo = useCallback(
    (sectionId: string) => {
      const target = document.getElementById(sectionId);
      if (!target) return;
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -SCROLL_OFFSET, duration: 1.2 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <>
      {/* ═══════════════ Desktop Dock Navbar ═══════════════ */}
      <nav className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <motion.div
          style={{ height, scrollbarWidth: "none" }}
          className="mx-2 flex items-end"
        >
          <motion.div
            onMouseMove={({ pageX }) => {
              isHovered.set(1);
              mouseX.set(pageX);
            }}
            onMouseLeave={() => {
              isHovered.set(0);
              mouseX.set(Infinity);
            }}
            className={cn(
              "flex items-end gap-2 rounded-2xl border bg-background/60 px-3 pb-2 backdrop-blur-2xl",
              "border-primary/20 ring-1 ring-primary/10",
              "shadow-[0_0_20px_hsl(var(--primary)/0.10),0_0_60px_hsl(var(--primary)/0.03),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
              "dark:border-primary/15 dark:bg-background/50",
              "dark:shadow-[0_0_25px_hsl(var(--primary)/0.12),0_0_60px_hsl(var(--primary)/0.04),inset_0_0_0_1px_rgba(255,255,255,0.04)]",
            )}
            style={{ height: panelHeight }}
            role="toolbar"
            aria-label="Navigation dock"
          >
            {/* Logo */}
            <DockItem mouseX={mouseX} onClick={() => scrollTo("hero")} className={activeSection === "hero" ? "border-primary/40 text-primary" : ""}>
              <DockIcon>
                <Terminal className="h-[18px] w-[18px]" />
              </DockIcon>
              <DockLabel>Home</DockLabel>
            </DockItem>

            {/* Divider */}
            <div className="mx-0.5 mb-1 h-8 w-px self-end bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

            {/* Nav items */}
            {navLinks.slice(1).map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <DockItem
                  key={link.sectionId}
                  mouseX={mouseX}
                  onClick={() => scrollTo(link.sectionId)}
                  className={isActive ? "border-primary/40 bg-primary/15 text-primary" : "text-muted-foreground"}
                >
                  <DockIcon>
                    <link.icon className="h-[18px] w-[18px]" />
                  </DockIcon>
                  <DockLabel>{link.label}</DockLabel>
                </DockItem>
              );
            })}

            {/* Divider */}
            <div className="mx-0.5 mb-1 h-8 w-px self-end bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

            {/* Theme toggle */}
            <DockItem mouseX={mouseX} onClick={toggleTheme} className="text-muted-foreground">
              <DockIcon>
                {theme === "dark" ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </DockIcon>
              <DockLabel>{theme === "dark" ? "Light" : "Dark"}</DockLabel>
            </DockItem>
          </motion.div>
        </motion.div>
      </nav>

      {/* ═══════════════ Mobile navbar ═══════════════ */}
      <nav className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <div
          onMouseMove={({ pageX }) => {
            isHovered.set(1);
            mouseX.set(pageX);
          }}
          onMouseLeave={() => {
            isHovered.set(0);
            mouseX.set(Infinity);
          }}
          className={cn(
            "flex items-center gap-1.5 rounded-xl border bg-background/60 px-2 py-1.5 backdrop-blur-2xl overflow-x-auto scrollbar-hide max-w-[95vw]",
            "border-primary/20 ring-1 ring-primary/10",
            "shadow-[0_0_20px_hsl(var(--primary)/0.10),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
            "dark:border-primary/15 dark:bg-background/50",
            "dark:shadow-[0_0_25px_hsl(var(--primary)/0.12),inset_0_0_0_1px_rgba(255,255,255,0.04)]",
          )}
          role="toolbar"
          aria-label="Mobile navigation"
        >
          {/* Home/Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className={cn(
              "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background/80 transition-colors",
              activeSection === "hero" 
                ? "border-primary/40 bg-primary/15 text-primary" 
                : "text-muted-foreground hover:border-primary/40 hover:bg-primary/10"
            )}
          >
            <Terminal className="h-4 w-4" />
          </button>

          {/* Divider */}
          <div className="mx-0.5 h-6 w-px flex-shrink-0 bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

          {/* All nav items */}
          {navLinks.slice(1).map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <button
                key={link.sectionId}
                onClick={() => scrollTo(link.sectionId)}
                className={cn(
                  "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background/80 transition-colors",
                  isActive
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "text-muted-foreground hover:border-primary/40 hover:bg-primary/10"
                )}
              >
                <link.icon className="h-4 w-4" />
              </button>
            );
          })}

          {/* Divider */}
          <div className="mx-0.5 h-6 w-px flex-shrink-0 bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background/80 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
