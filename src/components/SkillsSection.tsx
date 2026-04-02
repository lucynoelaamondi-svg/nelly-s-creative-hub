import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

const webSkills: Skill[] = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Tailwind", level: 90 },
  { name: "PHP", level: 80 },
  { name: "MySQL", level: 75 },
];

const designSkills: Skill[] = [
  { name: "Photoshop", level: 92 },
  { name: "Illustrator", level: 88 },
  { name: "Branding", level: 85 },
  { name: "UI/UX Design", level: 82 },
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="space-y-2"
  >
    <div className="flex justify-between text-sm">
      <span className="font-display font-semibold">{skill.name}</span>
      <span className="text-primary font-bold">{skill.level}%</span>
    </div>
    <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundImage: "var(--hero-gradient)" }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-14">
        <span className="section-label justify-center">What I Know</span>
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="card-elevated p-8">
          <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ backgroundImage: "var(--hero-gradient)" }} />
            Web Development
          </h3>
          <div className="space-y-5">
            {webSkills.map((s, i) => (
              <SkillBar key={s.name} skill={s} delay={i * 0.1} />
            ))}
          </div>
        </div>
        <div className="card-elevated p-8">
          <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ backgroundImage: "var(--hero-gradient)" }} />
            Graphic Design
          </h3>
          <div className="space-y-5">
            {designSkills.map((s, i) => (
              <SkillBar key={s.name} skill={s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
