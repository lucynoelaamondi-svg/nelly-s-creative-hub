const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-display font-bold gradient-text">LucyNoela Amondi</span>
        . All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-primary transition-colors font-medium">About</a>
        <a href="#portfolio" className="hover:text-primary transition-colors font-medium">Portfolio</a>
        <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
