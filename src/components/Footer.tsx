import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
];

const Footer = () => {
  return (
    <footer id="connect" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="section-title">Connect</p>
          <h2 className="heading-section mb-8">
            Let's work together
          </h2>
          <p className="body-large mb-12">
            Have a project in mind or just want to say hello? 
            I'm always open to discussing new opportunities.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
