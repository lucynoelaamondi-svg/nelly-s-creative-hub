import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero-photo.jpg.asset.json";

const HeroSection = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ backgroundImage: "var(--hero-gradient)" }} />
    <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-accent/15 blur-3xl" />

    <div className="section-container w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="section-label"
        >
          <Sparkles size={14} />
          Graphic & Web Designer
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="gradient-text">LucyNoela</span>
          <br />
          I craft digital
          <br />
          <span className="text-primary">experiences.</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
          Blending creative design with clean code to build beautiful, functional websites and stunning visual identities.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2 rounded-full px-8 text-base font-semibold shadow-lg" asChild>
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative">
          {/* Gradient ring behind photo */}
          <div className="absolute -inset-3 rounded-3xl opacity-60 blur-2xl" style={{ backgroundImage: "var(--hero-gradient)" }} />
          <div className="absolute -inset-1 rounded-3xl" style={{ backgroundImage: "var(--hero-gradient)", padding: "3px" }}>
            <div className="w-full h-full rounded-3xl bg-background" />
          </div>
          <img
            src={heroAsset.url}
            alt="LucyNoela Amondi - Graphic & Web Designer"
            width={420}
            height={525}
            className="relative w-72 sm:w-80 lg:w-[400px] aspect-[4/5] object-cover object-top rounded-3xl shadow-2xl"
          />
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl"
          >
            <p className="text-xs font-bold text-primary font-display">2+ Years</p>
            <p className="text-xs text-muted-foreground">Creative Experience</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
