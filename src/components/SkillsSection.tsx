import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Responsive Design",
  "PHP",
  "MySQL",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-10">
        <span className="section-label justify-center">What I Know</span>
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-5 py-2.5 rounded-full bg-card border border-border font-display font-semibold text-sm"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
