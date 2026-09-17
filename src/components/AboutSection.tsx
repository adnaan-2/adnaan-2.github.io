import SectionReveal from "./SectionReveal";
import { Code2, Zap, Layers, GitBranch, CheckCircle2, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Years Production Exp", value: "2+" },
  { label: "Storefront Load Speed", value: "Sub-1s" },
  { label: "COMSATS Degree", value: "BS SE" },
  { label: "Search & Growth", value: "GEO & CRO" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    category: "Software Engineering",
    features: [
      "TypeScript & robust type-safe codebases",
      "Modular components & clean architecture",
      "Maintainable, readable & scalable logic",
    ],
  },
  {
    icon: Zap,
    title: "Performance",
    category: "Speed & Core Web Vitals",
    features: [
      "Shopify Hydrogen, Oxygen & Remix edge hosting",
      "Sub-second page loading & asset optimization",
      "Generative Engine Optimization (GEO) for AI search",
    ],
  },
  {
    icon: Layers,
    title: "Architecture",
    category: "System Design",
    features: [
      "Composable Headless Shopify & Storefront API",
      "Custom Shopify Liquid themes & dynamic checkout",
      "React.js, Next.js, Node.js & FastAPI platforms",
    ],
  },
  {
    icon: GitBranch,
    title: "Collaboration",
    category: "Team & Process",
    features: [
      "Git branch workflows & CI/CD automation",
      "Agile, Scrum & sprint task execution",
      "n8n & Zapier business process automation",
    ],
  },
];

const AboutSection = () => (
  <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">About Me</div>
        <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">README.md</h2>
      </SectionReveal>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
        {/* Left Column */}
        <SectionReveal delay={0.1} className="flex flex-col h-full justify-between gap-4 sm:gap-6">
          <div className="flex-1 rounded-xl border border-border/50 bg-card/80 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between font-mono text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  about.md
                </div>
                <span className="text-xs text-primary font-medium font-mono">Full-Stack & Shopify Specialist</span>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground text-sm sm:text-base">
                I am <strong className="text-foreground">Adnan Khalil</strong>, a <strong className="text-foreground">Full-Stack Software Engineer (COMSATS University)</strong> with 2+ years of production experience specializing in <strong className="text-primary">Headless Shopify Development</strong>, custom e-commerce scaling, and high-performance web architecture. I assist DTC brands, agencies, and businesses in scaling revenue through custom digital storefronts.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground text-sm sm:text-base">
                My core expertise spans building sub-second composable storefronts using <strong className="text-foreground">Shopify Hydrogen, Oxygen edge hosting, and Remix</strong>, as well as crafting custom Liquid themes, Storefront API (GraphQL) integrations, full-stack MVPs (Next.js, FastAPI, Node.js), and automated AI workflows with n8n and Zapier.
              </p>
              <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                Every storefront and application I build is engineered from the ground up for superior Core Web Vitals, traditional search indexing, and <strong className="text-foreground">Generative Engine Optimization (GEO)</strong> to ensure visibility across modern AI search engines.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-lg border border-border/50 bg-card/80 p-3.5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-4 flex flex-col justify-center">
                <div className="text-lg font-bold text-primary sm:text-xl">{stat.value}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Right Column Highlights */}
        <SectionReveal delay={0.2} className="h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
            {highlights.map(item => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between h-full"
              >
                {/* Left-bottom glow accent appearing on hover */}
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/25 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 z-0" />

                {/* Left-bottom border accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full z-10" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium flex items-center gap-1">
                        {item.category}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="mb-3 font-bold text-foreground text-lg sm:text-xl">{item.title}</h3>

                    <ul className="space-y-2.5 border-t border-border/40 pt-3">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
