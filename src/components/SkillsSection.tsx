import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";

const categories = [
  {
    title: "Commerce & Headless Architecture",
    skills: [
      { name: "Shopify Hydrogen & Oxygen", level: 95 },
      { name: "Storefront API & GraphQL", level: 92 },
      { name: "Custom Shopify Store Dev & Liquid", level: 95 },
      { name: "Headless Commerce & Remix", level: 90 },
      { name: "GEO & Technical SEO", level: 88 },
      { name: "Conversion Rate Optimization (CRO)", level: 90 },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js & Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Remix & Liquid", level: 90 },
      { name: "Flutter & Dart", level: 82 },
    ],
  },
  {
    title: "Backend & API Systems",
    skills: [
      { name: "Node.js & Express.js", level: 90 },
      { name: "Python & FastAPI", level: 88 },
      { name: "REST & GraphQL APIs", level: 92 },
      { name: "PostgreSQL & MySQL", level: 86 },
      { name: "MongoDB & Supabase", level: 88 },
    ],
  },
  {
    title: "Automation, AI & DevOps",
    skills: [
      { name: "n8n & Zapier Automation", level: 92 },
      { name: "Custom Third-Party AI APIs", level: 90 },
      { name: "CI/CD & GitHub Actions", level: 88 },
      { name: "Docker & AWS", level: 82 },
      { name: "Vercel & Git Workflows", level: 95 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">Technical SEO & Tech Stack</div>
        <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">Technical Proficiency</h2>
      </SectionReveal>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {categories.map((cat, i) => (
          <SectionReveal key={cat.title} delay={i * 0.1}>
            <div className="rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="mb-4">
                <Badge variant="outline" className="font-mono text-xs text-primary border-primary/30">
                  {cat.title}
                </Badge>
              </div>
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

