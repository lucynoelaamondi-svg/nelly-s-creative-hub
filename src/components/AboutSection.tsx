import { motion } from "framer-motion";
import { Code, Palette } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          I'm a passionate creative professional who lives at the intersection of design and development.
          With expertise in HTML, CSS, PHP, and graphic design tools like Photoshop and Illustrator,
          I bring ideas to life — from pixel-perfect interfaces to memorable brand identities.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card-elevated p-6 text-left">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building responsive, performant websites with clean, semantic code and modern best practices.
            </p>
          </div>
          <div className="card-elevated p-6 text-left">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Palette className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Graphic Design</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting visual stories through branding, illustrations, and UI/UX design that captivate audiences.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
