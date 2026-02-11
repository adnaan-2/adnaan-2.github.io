import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const filters = ["All", "Frontend", "Backend", "Full Stack"];

const projects = [
  {
    title: "ShareDocs",
    description: "Real-time collaborative document editor enabling users to create and share unique documents with secure, no-login access using unique session-based sharing links.",
    tech: ["Next.js", "Node.js", "Supabase", "TypeScript"],
    category: "Full Stack",
    github: "https://github.com/adnaan-2/share",
    live: "https://share.gameidea.org/",
  },
  {
    title: "Creative connect advertising CRM",
    description: "A complete CRM solution for managing advertising campaigns, client interactions, analytics, and complete work operations of employees and the ordering system.",
    tech: ["React", "Next.js", "Django", "SQL","Docker"],
    category: "Full Stack",
    github: "https://github.com/adnaan-2",
    live: "https://app.crm.click2print.store/admin/login",
  },
  {
    title: "News & Blogging Platform",
    description: "Secure admin dashboard for content moderation, approvals, and analytics with category-based filtering, comment system, and image uploads using Cloudinary.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    category: "Full Stack",
    github: "https://github.com/adnaan-2/interview-prep",
    live: "https://interview-prep-ten-rose.vercel.app/",
  },
  {
    title: "Business Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects with smooth animations, dark mode support, and optimized performance. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    github: "https://github.com/adnaan-2",
    live: "https://osaidtraveltours.com/",
  },
  {
    title: "Content Flow FYP",
    description: "Modern, responsive portfolio showcasing projects with smooth animations, dark mode support, and optimized performance. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    github: "https://github.com/adnaan-2",
    live: "https://osaidtraveltours.com/",
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
