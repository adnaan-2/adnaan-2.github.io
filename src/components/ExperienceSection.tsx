import SectionReveal from "./SectionReveal";

const experiences = [
  {
    company: "Creative Connect Advertising",
    role: "Full-Stack Developer (Next + Django)",
    period: "Jan 2026 – Present",
    description:
      "Developing full-stack features for the company's CRM and e-commerce platform. Working on both frontend UI/UX and backend logic. Implementing admin dashboard enhancements, product management, and order handling features.",
  },
  {
    company: "Osaid Travel & Tours",
    role: "Fullstack Developer (MERN)",
    period: "Mar 2025 – July 2025",
    description:
      "Developed and deployed responsive business websites using the MERN stack. Integrated APIs for booking and analytics with secure authentication. Automated CI/CD pipeline via Vercel for seamless deployment.",
  },
  {
    company: "COMSATS University Islamabad",
    role: "Bachelor of Science in Software Engineering",
    period: "Jan 2022 – Jan 2026",
    description:
      "Completed Bachelor's degree in Software Engineering with focus on web development, software architecture, and modern programming practices.",
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
