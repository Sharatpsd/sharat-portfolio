const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/sharatacharjee", icon: "📚" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sharatacharjee", icon: "💼" },
    { name: "Email", url: "mailto:sharatacharjee6@gmail.com", icon: "✉️" },
  ];

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background/95 backdrop-blur border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sharat Acharjee Mugdho
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Python Full-Stack Developer & Machine Learning Engineer passionate about 
              building intelligent web solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-smooth text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <span className="group-hover:scale-110 transition-smooth">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sharat Acharjee Mugdho. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with{" "}
              <span className="text-primary">React</span>,{" "}
              <span className="text-secondary">TypeScript</span> &{" "}
              <span className="text-primary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;