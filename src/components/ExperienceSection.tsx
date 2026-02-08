import SectionReveal from "./SectionReveal";

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    description:
      "Leading frontend architecture for a SaaS platform serving 100K+ users. Mentoring junior developers and establishing coding standards.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 – 2022",
    description:
      "Built and scaled a real-time collaboration tool from 0 to 50K users. Implemented microservices architecture and CI/CD pipelines.",
  },
  {
    company: "DevAgency",
    role: "Frontend Developer",
    period: "2019 – 2020",
    description:
      "Developed responsive web applications for 15+ clients. Introduced component-driven development with React and Storybook.",
  },
  {
    company: "University CS Lab",
    role: "Research Assistant",
    period: "2018 – 2019",
    description:
      "Conducted research on distributed systems and published 2 papers. Built tools for data visualization and analysis.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-24">
    <div className="mx-auto max-w-4xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">{"## Experience"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">Career Timeline</h2>
      </SectionReveal>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company} delay={i * 0.1}>
              <div
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30">
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
