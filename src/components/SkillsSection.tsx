import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Django", level: 75 },
      { name: "Socket.io", level: 80 },
      { name: "Fast API", level: 70 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Supabase", level: 82 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Git", level: 90 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 85 },
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
