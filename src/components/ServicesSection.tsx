import SectionReveal from "./SectionReveal";
import { ShoppingBag, Sparkles, Code2, Cpu, ArrowUpRight, Check } from "lucide-react";
import { Badge } from "./ui/badge";

const solutions = [
  {
    icon: ShoppingBag,
    title: "Headless Shopify Development",
    subtitle: "Shopify Hydrogen • Oxygen Edge • Remix",
    description:
      "Engineering sub-second, composable storefronts using Shopify Hydrogen, Oxygen edge hosting, and Remix. Engineered for top Core Web Vitals and Generative Engine Optimization (GEO) to win modern AI search discovery.",
    bullets: [
      "Custom Shopify Hydrogen & Remix composable architecture",
      "Oxygen edge hosting with ultra-fast global CDN delivery",
      "Storefront API (GraphQL) data fetching & cart synchronization",
      "Generative Engine Optimization (GEO) for AI search engine ranking",
    ],
    tags: ["Hydrogen", "Oxygen", "Remix", "Storefront API", "GEO & SEO", "Core Web Vitals"],
  },
  {
    icon: Sparkles,
    title: "Custom E-Commerce & Store Dev",
    subtitle: "Tailored Liquid • GraphQL • CRO Scaling",
    description:
      "Building highly tailored Liquid themes, custom Storefront API (GraphQL) integrations, bespoke Shopify store features, and dynamic checkout flows for conversion rate optimization.",
    bullets: [
      "Custom Shopify Liquid theme creation & section engineering",
      "Custom Storefront API (GraphQL) integrations & dynamic checkout",
      "Performance optimization (LCP, INP & Core Web Vitals tuning)",
      "Conversion Rate Optimization (CRO) & customer journey scaling",
    ],
    tags: ["Custom Liquid Themes", "Shopify Store Dev", "GraphQL", "Custom Checkout", "CRO"],
  },
  {
    icon: Code2,
    title: "Full-Stack Web Apps & MVPs",
    subtitle: "React • Next.js • Node.js • FastAPI",
    description:
      "Architecting end-to-end scalable web applications, enterprise CRMs, and SaaS tools using React.js, Next.js, TypeScript, Node.js, and FastAPI.",
    bullets: [
      "Modern React.js & Next.js web application architecture",
      "FastAPI & Node.js scalable backend microservices",
      "PostgreSQL, MySQL & MongoDB database design & ORMs",
      "Robust REST & GraphQL APIs with JWT authentication",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Node.js", "FastAPI", "PostgreSQL"],
  },
  {
    icon: Cpu,
    title: "Business Automation & AI",
    subtitle: "n8n • Zapier • Custom AI API Integrations",
    description:
      "Streamlining SMB operations with n8n, Zapier, and custom third-party AI API integrations to automate repetitive workflows and scale operational efficiency.",
    bullets: [
      "n8n & Zapier multi-step automated workflow building",
      "Custom AI API integrations (Gemini API, OpenAI API)",
      "Automated e-commerce order, stock & CRM data pipelines",
      "Custom Python scripts & webhooks for business logic",
    ],
    tags: ["n8n", "Zapier", "AI APIs", "Workflow Automation", "Python"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">Core Solutions & Services</div>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Headless Shopify & Full-Stack Solutions
          </h2>
          <p className="mb-8 max-w-2xl text-muted-foreground sm:mb-12">
            Empowering DTC brands, e-commerce agencies, and startups with ultra-fast composable architecture, custom store development, and automated AI workflows.
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 sm:p-8">
                {/* Glow accent */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary"
                    >
                      Hire Me <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-foreground">{item.title}</h3>
                  <div className="mb-4 font-mono text-xs text-primary">{item.subtitle}</div>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mb-6 space-y-2 border-t border-border/40 pt-4">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
