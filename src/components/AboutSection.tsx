import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code, title: "Web Development", desc: "Building responsive, performant websites with clean code and modern best practices." },
  { icon: Palette, title: "Graphic Design", desc: "Crafting visual stories through branding, illustrations, and UI/UX that captivate." },
  { icon: Zap, title: "Fast Delivery", desc: "Efficient workflows that deliver polished results on time, every time." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="section-label justify-center">Who I Am</span>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          I'm a passionate creative professional living at the intersection of design and development.
          With expertise in HTML, CSS, PHP, and tools like Photoshop and Illustrator,
          I bring ideas to life — from pixel-perfect interfaces to memorable brand identities.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated p-7 text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
              <h.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
