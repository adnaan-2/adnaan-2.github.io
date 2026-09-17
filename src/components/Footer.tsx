import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/40 px-4 py-8 sm:px-6 sm:py-12 backdrop-blur-sm">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-foreground">Adnan Khalil</span>
            <p className="font-mono text-[10px] text-muted-foreground">Full-Stack Software Engineer & Headless Shopify Developer</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-muted-foreground">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>

      <div className="mt-8 border-t border-border/30 pt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Adnan Khalil (COMSATS University). All rights reserved.
        </p>
        <p className="mt-2 font-mono text-[11px] text-muted-foreground/70">
          Headless Shopify Development • Shopify Hydrogen & Oxygen Edge • Storefront API (GraphQL) • GEO & Technical SEO
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
