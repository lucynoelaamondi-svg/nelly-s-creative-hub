import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioAdvert from "@/assets/portfolio-advert.png";

type Category = "all" | "web" | "graphic";

interface Project {
  id: number;
  title: string;
  category: "web" | "graphic";
  description: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Hotel Website",
    category: "web",
    description: "Responsive booking website with elegant UI for a boutique hotel.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Modern Furniture Store",
    category: "web",
    description: "E-commerce storefront with product catalog and shopping cart.",
    tech: ["HTML", "CSS", "PHP"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Booking Management System",
    category: "web",
    description: "Full-stack reservation system with admin dashboard.",
    tech: ["PHP", "MySQL", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Coffee Brand Identity",
    category: "graphic",
    description: "Complete brand package including logo, packaging, and social media.",
    tech: ["Photoshop", "Illustrator"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Music Festival Poster",
    category: "graphic",
    description: "Bold typographic poster series for an annual music festival.",
    tech: ["Illustrator", "Photoshop"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "graphic",
    description: "Cohesive visual campaign for a lifestyle brand launch.",
    tech: ["Photoshop", "Canva"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Web Design", value: "web" },
  { label: "Graphic Design", value: "graphic" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Portfolio</span>
        </motion.h2>
        <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
          A selection of web and graphic design projects showcasing creativity and technical expertise.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="card-elevated overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="sm" variant="secondary" className="gap-1.5">
                      <ExternalLink size={14} /> Live
                    </Button>
                    {project.category === "web" && (
                      <Button size="sm" variant="secondary" className="gap-1.5">
                        <Github size={14} /> Code
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
