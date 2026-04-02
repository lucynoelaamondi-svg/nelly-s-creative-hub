const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} <span className="font-display font-semibold gradient-text">Nelly</span>. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
