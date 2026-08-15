import SectionReveal from "./SectionReveal";

const experiences = [
  {
    company: "Tab on Tech Solution",
    role: "Full-Stack Developer (Hydrogen + Oxygen)",
    period: "June 2026 – Current",
    description:
      "Built and deployed headless Shopify storefronts (Hydrogen + Oxygen) averaging 200+ daily active users and $8,000+ in average sales per store. Integrated Shopify Storefront API/GraphQL for product, cart, and checkout flows; improved load speed and Core Web Vitals.",
  },
  {
    company: "Creative Connect Advertising LLC",
    role: "Full-Stack Developer (Next.js + Django)",
    period: "Jan 2026 – May 2026",
    description:
      "Built and shipped full-stack features for a live CRM and e-commerce platform serving 100+ real customers. Designed and developed a complete website for a printing company handling frontend and backend. Implemented admin dashboard enhancements, product management workflows, and end-to-end order handling systems using Django and PostgreSQL.",
  },
  {
    company: "Osaid Travel & Tours",
    role: "Junior Web Developer (MERN Stack)",
    period: "Jan 2025 – Nov 2025",
    description:
      "Developed and deployed responsive business websites using the MERN stack, serving 50+ users. Integrated third-party APIs for booking and analytics with secure JWT-based authentication. Automated CI/CD pipeline via Vercel, reducing deployment time and eliminating manual release steps by 50%.",
  },
  {
    company: "COMSATS University Islamabad",
    role: "Bachelor of Science in Software Engineering",
    period: "Jan 2022 – Jan 2026",
    description:
      "Bachelor's degree in Software Engineering with focus on web development, software architecture, and modern programming practices.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-4 py-16 sm:px-6 sm:py-24">
    <div className="mx-auto max-w-4xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">Experience</div>
        <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">Career Timeline</h2>
      </SectionReveal>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-border sm:left-4 md:left-1/2" />

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company} delay={i * 0.1}>
              <div
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-3 top-6 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background sm:left-4 sm:h-3 sm:w-3 md:left-1/2" />
                <div className={`ml-8 sm:ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
                    <div className="mb-1 font-mono text-xs text-primary">{exp.period}</div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <div className="mb-2 font-mono text-sm text-muted-foreground">{exp.company}</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
