import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center">
    <div className="section-container w-full pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <span className="section-label">Front-End Developer</span>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 tracking-tight">
          Hi, I'm <span className="gradient-text">LucyNoela</span>
          <br />I build clean front-end interfaces.
        </h1>

        <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
          I design and code responsive websites with HTML, CSS, Tailwind and JavaScript — simple,
          fast and easy to use.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2 rounded-full px-8 text-base font-semibold" asChild>
            <a href="#portfolio">
              <ArrowDown size={16} /> View My Work
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 text-base font-semibold" asChild>
            <a href="#contact">
              <Mail size={16} /> Contact Me
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
