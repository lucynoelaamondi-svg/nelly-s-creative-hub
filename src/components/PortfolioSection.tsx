import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import portfolioUaeJob from "@/assets/portfolio-uae-job.jpeg";
import portfolioIphone14Pro from "@/assets/portfolio-iphone-14-pro.jpeg";
import portfolioIphone15 from "@/assets/portfolio-iphone-15.jpeg";
import portfolioIphone11Pro from "@/assets/portfolio-iphone-11-pro.jpeg";
import portfolioKmsNutrition from "@/assets/portfolio-kms-nutrition.jpeg";
import portfolioKmsAmbulance from "@/assets/portfolio-kms-ambulance.jpeg";
import portfolioKmsWhyChoose from "@/assets/portfolio-kms-why-choose.jpeg";
import portfolioKmsBreastfeeding from "@/assets/portfolio-kms-breastfeeding.jpeg";
import portfolioBetopMonday from "@/assets/portfolio-betop-monday.jpeg";
import portfolioKmsFamilyHealth from "@/assets/portfolio-kms-family-health.jpeg";
import portfolioKmsCervical from "@/assets/portfolio-kms-cervical.jpeg";
import portfolioKeyResourceHiring from "@/assets/portfolio-key-resource-hiring.jpeg";
import portfolioBetopBrands from "@/assets/portfolio-betop-brands.jpeg";
import portfolioSejojoPaints from "@/assets/portfolio-sejojo-paints.jpeg";
import portfolioBaristaCourse from "@/assets/portfolio-barista-course.jpeg";
import portfolioKeyResourceWaiters from "@/assets/portfolio-key-resource-waiters.jpeg";
import portfolioGraysonWorkshop from "@/assets/portfolio-grayson-workshop.jpeg";
import portfolioSejojoKorompoi from "@/assets/portfolio-sejojo-korompoi.jpeg";
import portfolioLogihostWebsite from "@/assets/portfolio-logihost-website.jpeg";
import portfolioSejojoGypsum from "@/assets/portfolio-sejojo-gypsum.jpeg";
import portfolioGraysonJobEvaluation from "@/assets/portfolio-grayson-job-evaluation.jpeg";
import portfolioGraysonKeyAccount from "@/assets/portfolio-grayson-key-account.jpeg";

interface GalleryProject {
  id: string;
  title: string;
  image: string;
}

const galleryProjects: GalleryProject[] = [
  { id: "sejojo-gypsum-flash-deal", title: "Sejojo Hardware — Flash Deal: Premium Gypsum Boards", image: portfolioSejojoGypsum },
  { id: "grayson-job-evaluation-workshop", title: "Grayson Consulting — Job Evaluation & Workload Analysis Workshop", image: portfolioGraysonJobEvaluation },
  { id: "grayson-key-account-workshop", title: "Grayson Consulting — Key Account Management Workshop", image: portfolioGraysonKeyAccount },
  { id: "betop-brands-concepts", title: "Betop Brands Concepts — Where Identity Meets Impact", image: portfolioBetopBrands },
  { id: "sejojo-paints-poster", title: "Sejojo Hardware — Your One-Stop Paint Store", image: portfolioSejojoPaints },
  { id: "barista-ace-course", title: "Barista Ace — Professional Barista Course", image: portfolioBaristaCourse },
  { id: "key-resource-waiters", title: "Key Resource Services — Waiters Recruitment", image: portfolioKeyResourceWaiters },
  { id: "grayson-workshop", title: "Grayson Consulting — International Trade & Finance Workshop", image: portfolioGraysonWorkshop },
  { id: "sejojo-korompoi-branch", title: "Sejojo Hardware — New Korompoi Branch Launch", image: portfolioSejojoKorompoi },
  { id: "logihost-website-poster", title: "Logihost Technologies — Need a Professional Website", image: portfolioLogihostWebsite },
  { id: "kms-family-health-poster", title: "Kitengela Medical — Your Family's Health, Our Priority", image: portfolioKmsFamilyHealth },
  { id: "kms-cervical-poster", title: "Kitengela Medical — Cervical Cancer Screening", image: portfolioKmsCervical },
  { id: "key-resource-hiring-poster", title: "Key Resource Services — Gulf Hiring Campaign", image: portfolioKeyResourceHiring },
  { id: "kms-why-choose-poster", title: "Kitengela Medical — Why Choose Us", image: portfolioKmsWhyChoose },
  { id: "kms-breastfeeding-poster", title: "Kitengela Medical — World Breastfeeding Week 2025", image: portfolioKmsBreastfeeding },
  { id: "betop-monday-poster", title: "Betop Brands Concepts — It's a Monday", image: portfolioBetopMonday },
  { id: "kms-nutrition-poster", title: "Kitengela Medical — Healthy Eating Campaign", image: portfolioKmsNutrition },
  { id: "kms-ambulance-poster", title: "Kitengela Medical — 24/7 Emergency Response", image: portfolioKmsAmbulance },
  { id: "uae-job-poster", title: "UAE Job Opportunity Poster", image: portfolioUaeJob },
  { id: "iphone-14-pro-poster", title: "iPhone 14 Pro Product Poster", image: portfolioIphone14Pro },
  { id: "iphone-15-poster", title: "iPhone 15 Product Poster", image: portfolioIphone15 },
  { id: "iphone-11-pro-poster", title: "iPhone 11 Pro Product Poster", image: portfolioIphone11Pro },
];

const PortfolioSection = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="section-label justify-center">Selected Work</span>
          <h2 className="section-title">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Browse my graphic design work. Click any piece to view it in full.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Dropdown trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="gallery-projects-panel"
            className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-all"
          >
            <span className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
              </span>
              <span className="text-left">
                <span className="block font-display font-bold">Graphic Design Projects</span>
                <span className="block text-xs text-muted-foreground">{galleryProjects.length} pieces</span>
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
                id="gallery-projects-panel"
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
                  {galleryProjects.map((project, idx) => (
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
      </div>

      {/* Lightbox preview */}
      <Dialog open={!!activeProject} onOpenChange={(o) => !o && setActiveProject(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border">
          {activeProject && (
            <>
              <DialogHeader className="px-6 pt-6 pb-3">
                <DialogTitle className="font-display">{activeProject.title}</DialogTitle>
                <DialogDescription>Graphic Design</DialogDescription>
              </DialogHeader>
              <div className="bg-muted/40 max-h-[70vh] overflow-auto flex items-center justify-center">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex justify-end px-6 py-4 border-t border-border">
                <Button variant="outline" onClick={() => setActiveProject(null)} className="rounded-full">
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
