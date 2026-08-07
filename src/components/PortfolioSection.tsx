import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebProject {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url?: string;
}

const webProjects: WebProject[] = [];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-secondary/30">
    <div className="section-container">
      <div className="text-center mb-10">
        <span className="section-label justify-center">Selected Work</span>
        <h2 className="section-title">
          Web Development <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Responsive, performant websites and web apps built with clean, modern code.
        </p>
      </div>

      {webProjects.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated p-6"
            >
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
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated max-w-2xl mx-auto p-10 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Code2 size={26} className="text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-2">Web projects coming soon</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
            I'm currently putting together case studies of my latest web development work. In the
            meantime, reach out and I'll gladly walk you through live builds.
          </p>
          <Button className="gap-2 rounded-full px-7 font-semibold" asChild>
            <a href="#contact">
              <Mail size={16} /> Get in touch
            </a>
          </Button>
        </motion.div>
      )}
    </div>
  </section>
);

export default PortfolioSection;
