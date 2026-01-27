import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Staffing Solutions", href: "#services" },
  { 
    label: "Why Partner With Us", 
    href: "#why-us",
    dropdown: [
      { label: "Why Tandem Bridge", href: "/why-tbs" },
      { label: "Why Nearshore", href: "/why-nearshore" },
    ]
  },
  { 
    label: "How It Works", 
    href: "#how-it-works",
    dropdown: [
      { label: "Our Process", href: "/our-process" },
      { label: "Nearshore vs Offshore", href: "/nearshore-vs-offshore" },
    ]
  },
  { 
    label: "About Us", 
    href: "#about",
    dropdown: [
      { label: "About TBS", href: "/about-tbs" },
      { label: "Careers", href: "/careers" },
    ]
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">TB</span>
          </div>
          <span className="font-bold text-xl text-foreground">
            Tandem<span className="text-primary">Bridge</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg border-t border-border"
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <span className="text-foreground font-medium py-2 block">
                      {item.label}
                    </span>
                    <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="text-muted-foreground hover:text-primary transition-colors py-1 block text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors py-2 font-medium block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <Button variant="hero" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Schedule a Consultation
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
