import { ArrowUpRight } from "lucide-react";

const showcaseItems = [
  {
    title: "Design System",
    description: "A comprehensive design system built for scalability",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&sat=-100",
  },
  {
    title: "Web Application",
    description: "Dashboard interface with real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&sat=-100",
  },
  {
    title: "Mobile Experience",
    description: "Native mobile app with gesture-based navigation",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&sat=-100",
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="section-title">Showcase</p>
        <h2 className="heading-section max-w-2xl mb-16">
          Visual highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <article
              key={item.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-muted aspect-[3/2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
