import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution with payment integration and inventory management",
    tags: ["React", "Node.js", "Stripe"],
    year: "2024",
  },
  {
    title: "Brand Identity System",
    description: "Complete visual identity including logo, typography, and guidelines",
    tags: ["Branding", "Design System"],
    year: "2024",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive banking experience with biometric authentication",
    tags: ["React Native", "TypeScript"],
    year: "2023",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool to scaffold developer portfolios with customizable themes",
    tags: ["Node.js", "CLI", "Open Source"],
    year: "2023",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-title">Projects</p>
        <h2 className="heading-section max-w-2xl mb-16">
          Selected work
        </h2>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-10">{project.description}</p>
                  <div className="flex gap-3 mt-4 ml-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground border border-border px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
