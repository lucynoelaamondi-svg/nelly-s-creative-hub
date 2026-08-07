import { motion } from "framer-motion";
import { Globe, Layout, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites built with modern front-end technologies.",
  },
  {
    icon: Layout,
    title: "UI Implementation",
    description: "Turning designs into pixel-accurate, reusable interface components.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Performance",
    description: "Mobile-first layouts that load fast and work on every screen size.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-12">
        <span className="section-label justify-center">What I Offer</span>
        <h2 className="section-title">
          My <span className="gradient-text">Services</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated p-7 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
