import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution with payment integration and inventory management",
    tags: ["React", "Node.js", "Stripe"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop&sat=-100",
  },
  {
    title: "Brand Identity System",
    description: "Complete visual identity including logo, typography, and guidelines",
    tags: ["Branding", "Design System"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=200&fit=crop&sat=-100",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive banking experience with biometric authentication",
    tags: ["React Native", "TypeScript"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop&sat=-100",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool to scaffold developer portfolios with customizable themes",
    tags: ["Node.js", "CLI", "Open Source"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop&sat=-100",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Projects</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-2xl mb-16">
          Selected work
        </h2>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group py-6 border-b border-border hover:bg-secondary/50 transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                {/* Project Image */}
                <div className="hidden sm:block w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300 truncate">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-10 text-sm hidden md:block">{project.description}</p>
                  <div className="hidden lg:flex gap-2 mt-3 ml-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year and Arrow */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-sm text-muted-foreground hidden sm:block">{project.year}</span>
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
