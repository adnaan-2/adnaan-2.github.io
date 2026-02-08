import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "Go", level: 65 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Git", level: 95 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">{"## Skills"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">Technical Proficiency</h2>
      </SectionReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat, i) => (
          <SectionReveal key={cat.title} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-card p-6">
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
