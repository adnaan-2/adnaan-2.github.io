import SectionReveal from "./SectionReveal";
import { Code2, Zap, Layers, GitBranch } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Education", value: "BS SE" },
];

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, well-documented code" },
  { icon: Zap, title: "Performance", desc: "Optimizing for speed and scalability" },
  { icon: Layers, title: "Architecture", desc: "Designing robust system architectures" },
  { icon: GitBranch, title: "Collaboration", desc: "Git workflows and team development" },
];

const AboutSection = () => (
  <section id="about" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">{"## About Me"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">README.md</h2>
      </SectionReveal>

      <div className="grid gap-12 lg:grid-cols-2">
        <SectionReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              about.md
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Full stack developer with strong expertise in Next.js, React specializing in interactive 
              web applications. I also have hands-on experience in backend development using Node.js, 
              Express.js, Fast API, and cloud-based solutions.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I'm a graduate of COMSATS University Islamabad with a Bachelor's in Software Engineering. 
              I'm passionate about building scalable applications and continuously learning new technologies 
              to deliver elegant solutions.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-lg border border-border bg-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(item => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <item.icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
