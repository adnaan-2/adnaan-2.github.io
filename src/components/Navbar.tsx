import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Home, User, Briefcase, Code2, Mail, Users, LayoutGrid, Terminal, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Skills", href: "#skills", icon: Users },
  { label: "Stats", href: "#stats", icon: LayoutGrid },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop floating glassmorphism navbar */}
      <nav className="fixed top-5 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-1 rounded-full border border-border/40 bg-background/60 px-4 py-2.5 shadow-lg backdrop-blur-2xl">
          {/* Logo */}
          <a
            href="#"
            className="mr-2 flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label="Home"
          >
            <Terminal className="h-5 w-5" />
          </a>

          <div className="mx-1 h-5 w-px bg-border/50" />

          {/* Nav icons */}
          {navLinks.slice(1).map(link => (
            <a
              key={link.href}
              href={link.href}
              className="group relative flex items-center justify-center rounded-full p-2.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label={link.label}
            >
              <link.icon className="h-[18px] w-[18px]" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 font-mono text-[10px] text-background opacity-0 transition-opacity group-hover:opacity-100">
                {link.label}
              </span>
            </a>
          ))}

          <div className="mx-1 h-5 w-px bg-border/50" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <div className={cn(
          "flex flex-col rounded-2xl border border-border/40 bg-background/60 shadow-lg backdrop-blur-2xl transition-all",
          mobileOpen ? "w-[280px]" : "w-auto"
        )}>
          <div className="flex items-center justify-between px-4 py-2.5">
            <a href="#" className="flex items-center gap-2 text-foreground" aria-label="Home">
              <Terminal className="h-5 w-5" />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary">
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="flex flex-col gap-1 border-t border-border/30 px-3 py-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
