import SectionReveal from "./SectionReveal";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "GoldCustom - Headless Shopify Storefront",
    description: "Sub-second, composable custom jewelry storefront built on Shopify Hydrogen & Remix, deployed via Oxygen edge hosting with GraphQL Storefront API.",
    tech: ["Shopify Hydrogen", "Oxygen", "Remix", "GraphQL", "GEO/SEO"],
    image: "/portfolio.jpeg",
    github: "https://github.com/adnaan-2",
    live: "https://goldcustom.com",
  },
  {
    title: "Custom Shopify Store Development",
    description: "Tailored Shopify store development with custom Liquid sections, dynamic checkout optimization, and CRO features for DTC brand scaling.",
    tech: ["Shopify Liquid", "Storefront API", "Custom Store Dev", "CRO"],
    image: "/crm.jpeg",
    github: "https://github.com/adnaan-2",
    live: "https://creativeprints.ae",
  },
  {
    title: "ShareDocs - Collaborative Workspace",
    description: "Real-time collaborative document and text sharing platform with instant session sync and zero-friction access for 50+ active users.",
    tech: ["Next.js", "Node.js", "Supabase", "TypeScript"],
    image: "/share.jpeg",
    github: "https://github.com/adnaan-2/share",
    live: "https://share.gameidea.org/",
  },
  {
    title: "Content Flow - AI & Automation Manager",
    description: "AI-powered social media manager with Gemini API integrations, automated content schedules, and multi-platform publishing workflows.",
    tech: ["Next.js", "FastAPI", "n8n", "Gemini API"],
    image: "/content.jpeg",
    github: "https://github.com/adnaan-2",
    live: "#",
  },
  {
    title: "CRM & E-Commerce Platform",
    description: "Full-stack custom e-commerce and CRM platform managing order lifecycles and customer workflows for 200+ active clients.",
    tech: ["React", "Next.js", "Django", "PostgreSQL", "Docker"],
    image: "/crm.jpeg",
    github: "https://github.com/adnaan-2",
    live: "https://creativeprints.ae",
  },
  {
    title: "Blogging & Content Management CMS",
    description: "Admin dashboard for content moderation, approvals, and role-based access control built for a client platform.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    image: "/blogging.jpeg",
    github: "https://github.com/adnaan-2/interview-prep",
    live: "https://interview-prep-ten-rose.vercel.app/",
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
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div>
                  <div className="h-36 overflow-hidden sm:h-44">
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
                  </div>
                </div>

                <div className="flex gap-3 px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </a>
                  )}
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

