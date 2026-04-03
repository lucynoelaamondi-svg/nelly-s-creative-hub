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

        {/* Behance CTA */}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="gap-2 rounded-full px-8 font-semibold shadow-lg" asChild>
            <a href="https://www.behance.net/nellynoela" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
              View My Graphic Design Work on Behance
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
