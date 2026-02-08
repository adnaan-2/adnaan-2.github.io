import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const filters = ["All", "Frontend", "Backend", "Full Stack"];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat UI with streaming responses, markdown rendering, and conversation management.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    category: "Frontend",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management API",
    description: "RESTful API with authentication, real-time updates via WebSockets, and comprehensive testing.",
    tech: ["Node.js", "Express", "MongoDB", "Jest"],
    category: "Backend",
    github: "#",
    live: "#",
  },
  {
    title: "DevOps Dashboard",
    description: "Real-time monitoring dashboard for CI/CD pipelines, server metrics, and deployment tracking.",
    tech: ["React", "D3.js", "Go", "Docker"],
    category: "Full Stack",
    github: "#",
    live: "#",
  },
  {
    title: "Component Library",
    description: "Accessible, themeable UI component library with Storybook documentation and comprehensive tests.",
    tech: ["React", "TypeScript", "Storybook", "Jest"],
    category: "Frontend",
    github: "#",
    live: "#",
  },
  {
    title: "Auth Microservice",
    description: "OAuth 2.0 / JWT authentication service with rate limiting, session management, and audit logging.",
    tech: ["Go", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">{"## Projects"}</div>
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">Featured Work</h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map(f => (
              <Button
                key={f}
                variant={active === f ? "default" : "outline"}
                size="sm"
                className="font-mono"
                onClick={() => setActive(f)}
              >
                {f}
              </Button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex h-40 items-center justify-center bg-secondary/50 font-mono text-sm text-muted-foreground">
                  {"<Screenshot />"}
                </div>
                <div className="p-5">
                  <h3 className="mb-2 font-semibold text-foreground">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="font-mono text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
