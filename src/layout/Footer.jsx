import { Github, Linkedin, Instagram, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Kinguya123", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/fikry__0998/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fikry-azzam-9904833a5/", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/Kinguya123", label: "Telegram" }, // Tambahan ikon Telegram (gunakan Lucide Send)
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills-section", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              Fikry Tech<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Fikry Tech. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};