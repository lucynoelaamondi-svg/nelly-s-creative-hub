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
  {
    id: 7,
    title: "Nelly Furnitures Advert",
    category: "graphic",
    description: "Eye-catching promotional advert for a furniture store featuring new arrivals.",
    tech: ["Photoshop", "Illustrator"],
    image: portfolioAdvert,
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Design", value: "web" },
  { label: "Graphic Design", value: "graphic" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label justify-center">Selected Work</span>
          <h2 className="section-title">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A selection of web and graphic design projects showcasing creativity and technical expertise.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                active === f.value
                  ? "text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
              style={active === f.value ? { backgroundImage: "var(--hero-gradient)" } : undefined}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="sm" variant="secondary" className="gap-1.5 rounded-full">
                      <ExternalLink size={14} /> Live
                    </Button>
                    {project.category === "web" && (
                      <Button size="sm" variant="secondary" className="gap-1.5 rounded-full">
                        <Github size={14} /> Code
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold mb-1.5">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold"
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
