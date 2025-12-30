import { Facebook, Youtube, Instagram, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#jalur", label: "Jalur Seleksi" },
  { href: "#jadwal", label: "Jadwal" },
  { href: "#pusat-informasi", label: "Pusat Informasi" },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/MANInsanCendekiaSiak",
    label: "Facebook",
    username: "MAN Insan Cendekia Siak",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@MANICSiakOfficial",
    label: "YouTube",
    username: "MAN IC Siak Official",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/manic_siak",
    label: "Instagram",
    username: "@manic_siak",
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Main footer content */}
      <div className="container-narrow py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-royal-blue flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">MAN Insan Cendekia</p>
                <p className="text-primary-foreground/70 text-sm">Siak, Riau</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Madrasah Aliyah Negeri Insan Cendekia Siak, sekolah berasrama unggulan 
              di bawah naungan Kementerian Agama Republik Indonesia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-6">Media Sosial</h4>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm group"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.username}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} MAN Insan Cendekia Siak. Seluruh hak dilindungi.
            </p>
            <p className="text-primary-foreground/50 text-xs max-w-lg">
              Informasi resmi mengacu pada portal SNMB Kemenag dan kanal resmi MAN IC Siak. 
              Website ini bukan bagian resmi dari portal Kementerian Agama RI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
