import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";

const categories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "React.js / Next.js", level: 95 },
      { name: "Flutter & Dart", level: 85 },
      { name: "Node.js & Express.js", level: 90 },
      { name: "Python & Django", level: 80 },
    ],
  },
  {
    title: "Databases & Commerce",
    skills: [
      { name: "PostgreSQL & MySQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Shopify (Hydrogen/Storefront)", level: 90 },
      { name: "GraphQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      { name: "Docker & AWS", level: 80 },
      { name: "CI/CD & GitHub Actions", level: 85 },
      { name: "Vercel & Git", level: 92 },
      { name: "Zapier & N8N", level: 88 },
    ],
  },
  {
    title: "Management & Tools",
    skills: [
      { name: "Jira / Agile / Scrum", level: 90 },
      { name: "BRD / SRS Documentation", level: 85 },
      { name: "WordPress & Wix", level: 80 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">Skills</div>
        <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">Technical Proficiency</h2>
      </SectionReveal>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {categories.map((cat, i) => (
          <SectionReveal key={cat.title} delay={i * 0.1}>
            <div className="rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="mb-4">
                <Badge variant="outline" className="font-mono">
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
