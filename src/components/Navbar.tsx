import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Showcase", href: "#showcase" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-medium tracking-tight animate-fade-in">
          Portfolio
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.name} className={`animate-fade-in delay-${(index + 1) * 100}`}>
              <a href={link.href} className="nav-link text-sm">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#connect"
          className="btn-outline text-xs animate-fade-in delay-600"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
