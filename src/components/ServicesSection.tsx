import { motion } from "framer-motion";
import { Globe, Palette, Layout, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom responsive websites built with modern technologies and optimized for performance.",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: "Memorable visual identities including logos, color systems, typography, and brand guidelines.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Intuitive user interfaces and seamless experiences backed by research and best practices.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "Strategic creative concepts for campaigns, social media, and print materials.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
      >
        My <span className="gradient-text">Services</span>
      </motion.h2>
      <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">
        End-to-end creative services to elevate your digital presence.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated p-6 text-center group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
              <s.icon
                size={26}
                className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
              />
            </div>
            <h3 className="font-display font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
