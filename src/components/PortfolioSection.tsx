import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface BehanceProject {
  id: string;
  title: string;
  image: string;
  url: string;
}

const behanceUrl = "https://www.behance.net/nellynoela";

const behanceProjects: BehanceProject[] = [
  {
    id: "248312437",
    title: "Brand Project",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/8db670248312437.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpeg",
    url: "https://www.behance.net/gallery/248312437/project",
  },
  {
    id: "248312169",
    title: "Design Project",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/df295f248312169.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpeg",
    url: "https://www.behance.net/gallery/248312169/project",
  },
  {
    id: "247186913",
    title: "Advert",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/1e4761247186913.Y3JvcCw3MjAwLDU2MzEsMCwyNTg0.png",
    url: "https://www.behance.net/gallery/247186913/advert",
  },
  {
    id: "247185839",
    title: "Campaign",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/7c56d5247185839.Y3JvcCwxMjAwLDkzOCwwLDI3OQ.png",
    url: "https://www.behance.net/gallery/247185839/campaign",
  },
  {
    id: "247185683",
    title: "Dummy Site",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/b8663b247185683.Y3JvcCwxNzg5LDE0MDAsMTU1LDA.png",
    url: "https://www.behance.net/gallery/247185683/dummy-site",
  },
  {
    id: "247105561",
    title: "Pin Badge",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/d4b689247105561.Y3JvcCwxMjAwLDkzOCwwLDI3OQ.png",
    url: "https://www.behance.net/gallery/247105561/pin-budge",
  },
  {
    id: "247104831",
    title: "Poster",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/cd3951247104831.Y3JvcCwyNDgwLDE5MzksMCw3ODU.jpg",
    url: "https://www.behance.net/gallery/247104831/poster",
  },
  {
    id: "247104659",
    title: "Banner",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/c357c2247104659.Y3JvcCw5OTksNzgyLDAsMTA4.png",
    url: "https://www.behance.net/gallery/247104659/banner",
  },
  {
    id: "247104531",
    title: "Photoshop Work",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/0f96a4247104531.Y3JvcCw5OTksNzgyLDAsNDA4.png",
    url: "https://www.behance.net/gallery/247104531/ps-work",
  },
  {
    id: "247104435",
    title: "Photoshop Work",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/3b1733247104435.Y3JvcCw5OTksNzgyLDAsNDA4.png",
    url: "https://www.behance.net/gallery/247104435/ps-work",
  },
  {
    id: "247090399",
    title: "Banner",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/8a90da247090399.Y3JvcCwzNjQ4LDI4NTMsMCwxMzA5.png",
    url: "https://www.behance.net/gallery/247090399/Banner",
  },
  {
    id: "246948849",
    title: "Campaign Flyer",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/6629c1246948849.Y3JvcCwxMDI0LDgwMCwwLDIwMA.png",
    url: "https://www.behance.net/gallery/246948849/campaign-flyer",
  },
];

const PortfolioSection = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<BehanceProject | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="section-label justify-center">Selected Work</span>
          <h2 className="section-title">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Browse my graphic design work pulled from Behance. Click any piece to view it in full.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Dropdown trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="behance-projects-panel"
            className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-all"
          >
            <span className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
              </span>
              <span className="text-left">
                <span className="block font-display font-bold">Graphic Design Projects</span>
                <span className="block text-xs text-muted-foreground">{behanceProjects.length} pieces from Behance</span>
              </span>
            </span>
            <ChevronDown
              size={22}
              className={`text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown panel */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="behance-projects-panel"
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
                  {behanceProjects.map((project, idx) => (
                    <motion.button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveProject(project)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="card-elevated overflow-hidden group block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Preview ${project.title}`}
                    >
                      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 text-background font-semibold text-sm">
                            <ZoomIn size={16} /> Click to preview
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-bold text-base">{project.title}</h3>
                        <p className="text-muted-foreground text-xs mt-1">Graphic Design</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="gap-2 rounded-full px-8 font-semibold shadow-lg" asChild>
            <a href={behanceUrl} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
              See All My Work on Behance
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
