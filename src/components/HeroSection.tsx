import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[120px] hidden lg:block" />

    <div className="section-container w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block text-sm font-medium text-primary font-display tracking-wider uppercase mb-4">
          Graphic & Web Designer
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">Nelly</span>
          <br />
          I craft digital
          <br />
          experiences.
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
          Blending creative design with clean code to build beautiful, functional websites and stunning visual identities.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="#portfolio">
              <ArrowDown size={16} /> View My Work
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#contact">
              <Mail size={16} /> Contact Me
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Nelly - Graphic & Web Designer"
            width={800}
            height={900}
            className="relative w-72 sm:w-80 lg:w-96 h-auto object-contain"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
