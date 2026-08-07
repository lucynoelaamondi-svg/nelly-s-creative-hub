import { motion } from "framer-motion";
import { Layout, ShoppingBag, LayoutDashboard, Smartphone } from "lucide-react";

const webProjects = [
  {
    icon: Layout,
    title: "Business Landing Page",
    description: "A responsive marketing site with a hero, services grid and contact form.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Storefront UI",
    description: "Product listing, filtering and cart interface built with reusable components.",
    stack: ["React", "Tailwind"],
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Clean dashboard layout with cards, tables and simple charts.",
    stack: ["React", "Tailwind", "Charts"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Portfolio",
    description: "Lightweight personal site optimised for small screens and fast loading.",
    stack: ["HTML", "Tailwind"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-secondary/30">
    <div className="section-container">
      <div className="text-center mb-12">
        <span className="section-label justify-center">Selected Work</span>
        <h2 className="section-title">
          Front-End <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Web development work — responsive layouts, interfaces and components.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {webProjects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-elevated p-7"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
