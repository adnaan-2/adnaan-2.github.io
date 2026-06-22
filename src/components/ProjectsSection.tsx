import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ShareDocs",
    description: "Real-time collaborative document editor enabling users to create and share unique documents with secure, no-login access using unique session-based sharing links.",
    tech: ["Next.js", "Node.js", "Supabase", "TypeScript"],
    image: "/share.jpeg",
    github: "https://github.com/adnaan-2/share",
    live: "https://share.gameidea.org/",
  },
  {
    title: "Creative connect advertising CRM",
    description: "A complete CRM solution for managing advertising campaigns, client interactions, analytics, and complete work operations of employees and the ordering system.",
    tech: ["React", "Next.js", "Django", "SQL","Docker"],
    image: "/crm.jpeg",
    github: "https://github.com/adnaan-2",
    live: "https://app.crm.click2print.store/admin/login",
  },
  {
    title: "News & Blogging Platform",
    description: "Secure admin dashboard for content moderation, approvals, and analytics with category-based filtering, comment system, and image uploads using Cloudinary.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    image: "/blogging.jpeg",
    github: "https://github.com/adnaan-2/interview-prep",
    live: "https://interview-prep-ten-rose.vercel.app/",
  },
  {
    title: "Business Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects with smooth animations, dark mode support, and optimized performance. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/portfolio.jpeg",
    github: "https://github.com/adnaan-2",
    live: "https://osaidtraveltours.com/",
  },
  {
    title: "Content Flow FYP",
    description: "A single application that will manage the content scheduling and posting on all social media platforms (Facebook, Instagram, LinkedIn, Twitter). It will also have the feature of generating the content using AI",
    tech: ["Next.js", "MERN", "Vercel"],
    image: "/content flow.jpeg",
    github: "https://github.com/adnaan-2",
    live: "https://osaidtraveltours.com/",
  },
  {
    title: "Content Generation",
    description: "A single application that generate photo or video content using AI for all social media platforms or just for fun. i made it just to generate some nice stuff for time pass and for an interview they gave me a task",
    tech: ["Next.js", "MERN", "Vercel"],
    image: "/content.jpeg",
    github: "https://github.com/adnaan-2/content-generation",
    live: "https://content-generation-beige.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">Projects</div>
          <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">Featured Work</h2>
        </SectionReveal>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="h-32 overflow-hidden sm:h-40">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="mb-2 text-sm font-semibold text-foreground sm:text-base">{project.title}</h3>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">{project.description}</p>
                  <div className="mb-3 flex flex-wrap gap-1 sm:mb-4 sm:gap-1.5">
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
