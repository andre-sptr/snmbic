import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#jalur", label: "Seleksi" },
  { href: "#jadwal", label: "Jadwal" },
  { href: "#pusat-informasi", label: "Informasi" },
  { href: "#faq", label: "FAQ" },
  { href: "/JuknisSNMB.pdf", label: "Juknis", external: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-9 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-lg ${
        isScrolled ? "shadow-xl bg-background/90" : ""
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            <img 
              src="/favicon.ico" 
              alt="Logo MAN IC Siak" 
              className="w-9 h-9 rounded-full shadow-sm object-cover"
            />
            <div className="text-foreground transition-colors">
              <p className="font-bold text-sm leading-tight">MAN IC Siak</p>
              <p className="text-[10px] opacity-80 uppercase tracking-wider">SNMB 2026/2027</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="text-sm font-medium px-4 py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="sm"
              className="btn-primary rounded-full px-6 h-9"
            >
              <a
                href="https://snmb-madrasah.kemenag.go.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daftar Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown (Floating below the capsule) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/40 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1 p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  className="py-3 px-4 text-sm font-medium text-foreground rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="btn-primary rounded-xl mt-2 w-full"
              >
                <a
                  href="https://snmb-madrasah.kemenag.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;