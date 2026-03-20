import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = links.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-border py-4 text-foreground"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer group"
            onClick={() => scrollTo("#home")}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
              alt="Shreeji Solar Service"
              className="h-12 w-auto object-contain rounded-lg bg-white px-1 group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "font-medium text-sm transition-colors hover:text-accent relative",
                      activeSection === link.href.substring(1) && "text-accent"
                    )}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-border hidden lg:block" />
            <Button 
              onClick={() => scrollTo("#contact")}
              variant={isScrolled ? "primary" : "white"}
              size="sm"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-border shadow-lg absolute top-full left-0 right-0 text-foreground"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left font-medium text-lg py-2 hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={() => scrollTo("#contact")}
                  className="w-full" 
                  size="lg"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
