import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Wanjiku Muthoni",
    role: "Senior Lecturer, Digital Media",
    text: "LucyNoela consistently delivers work that exceeds expectations. Her ability to combine aesthetic sensibility with technical proficiency is remarkable.",
  },
  {
    name: "Brian Kipchoge",
    role: "CEO, BrandCraft Studio",
    text: "Working with LucyNoela transformed our brand identity. She understood our vision perfectly and executed it with incredible attention to detail.",
  },
  {
    name: "Achieng Otieno",
    role: "Marketing Manager",
    text: "The designs LucyNoela created for us increased our online engagement by 40%. Her graphics work and visual intuition are truly exceptional.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <div className="text-center mb-14">
        <span className="section-label justify-center">Testimonials</span>
        <h2 className="section-title">
          What People <span className="gradient-text">Say</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-elevated p-7 relative"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundImage: "var(--hero-gradient)" }}>
              <Quote size={18} className="text-primary-foreground" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "{t.text}"
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-display font-bold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
