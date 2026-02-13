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
  <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <div className="mb-4 font-mono text-sm text-primary">About Me</div>
        <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">README.md</h2>
      </SectionReveal>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <SectionReveal delay={0.1}>
          <div className="rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
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

          <div className="mx-auto mt-4 grid w-full max-w-xl grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4 sm:max-w-none sm:gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-lg border border-border/50 bg-card/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-4">
                <div className="text-xl font-bold text-primary sm:text-2xl">{stat.value}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {highlights.map(item => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-5"
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
