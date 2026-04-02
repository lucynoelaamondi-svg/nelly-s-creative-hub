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
      <div className="text-center mb-14">
        <span className="section-label justify-center">What I Offer</span>
        <h2 className="section-title">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          End-to-end creative services to elevate your digital presence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated p-7 text-center group relative overflow-hidden"
          >
            {/* Subtle gradient corner */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: "var(--hero-gradient-subtle)" }} />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
