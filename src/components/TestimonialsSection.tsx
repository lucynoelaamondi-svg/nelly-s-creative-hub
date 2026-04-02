import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Senior Lecturer, Digital Media",
    text: "LucyNoela consistently delivers work that exceeds expectations. Her ability to combine aesthetic sensibility with technical proficiency is remarkable.",
  },
  {
    name: "James Okonkwo",
    role: "CEO, BrandCraft Studio",
    text: "Working with LucyNoela transformed our brand identity. She understood our vision perfectly and executed it with incredible attention to detail.",
  },
  {
    name: "Amira Hassan",
    role: "Marketing Manager",
    text: "The website Nelly built for us increased our online engagement by 40%. Her design intuition is truly exceptional.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        What People <span className="gradient-text">Say</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-elevated p-6 relative"
          >
            <Quote size={28} className="text-primary/20 mb-3" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
              "{t.text}"
            </p>
            <div>
              <p className="font-display font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
