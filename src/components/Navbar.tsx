import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#jalur", label: "Jalur Seleksi" },
  { href: "#jadwal", label: "Jadwal" },
  { href: "#pusat-informasi", label: "Pusat Informasi" },
  { href: "#faq", label: "FAQ" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-4"
      }`}
      style={{ marginTop: isScrolled ? 0 : "36px" }}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-royal-blue flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div className={`transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              <p className="font-bold text-sm leading-tight">MAN IC Siak</p>
              <p className="text-xs opacity-80">SNMB 2026/2027</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="btn-primary rounded-full px-6"
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
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-card/95 backdrop-blur-xl rounded-2xl shadow-lg animate-fade-up">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 px-4 text-foreground font-medium rounded-xl hover:bg-primary/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="btn-primary rounded-full mt-4"
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
