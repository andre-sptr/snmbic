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
    href: "https://facebook.com/manicsiak",
    label: "Facebook",
    username: "MAN Insan Cendekia Siak",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@manicsiakofficial",
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
        {/* PERUBAHAN DISINI: Menggunakan grid-cols-12 untuk pembagian lebar kolom yang tidak sama rata */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Kolom 1: Brand (Lebar: 5/12) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/favicon.ico" 
                alt="Logo MAN IC Siak" 
                className="w-10 h-10 rounded-full shadow-lg object-cover"
              />
              <div>
                <p className="font-bold text-lg leading-tight">MAN Insan Cendekia Siak</p>
                <p className="text-primary-foreground/70 text-sm">Tualang, Siak, Riau</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 pr-0 md:pr-8">
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

          {/* Kolom 2: Media Sosial (Lebar: 3/12) - Dibuat lebih sempit agar rapi */}
          <div className="md:col-span-3">
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

          {/* Kolom 3: Lokasi (Lebar: 4/12) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Lokasi Kami</h3>
            
            {/* Container Peta */}
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-md border border-gray-200/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5326127905546!2d101.5636605!3d0.6856847999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d44e5c7392bc85%3A0x90f4a1e1a9464d9b!2sMAN%20Insan%20Cendekia%20Siak!5e0!3m2!1sid!2sid!4v1767139227037!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokasi Kami"
              ></iframe>
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-2">
              Jl. Pemda KM 11, Perawang Barat, Kec. Tualang, Kabupaten Siak, Riau 28685
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} MAN Insan Cendekia Siak.
            </p>
            <p className="text-primary-foreground/50 text-xs max-w-lg">
              Informasi resmi mengacu pada portal SNMB Kemenag dan kanal resmi MAN IC Siak.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/BCOiGOUW1rJAuzETix31tI"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group flex items-center justify-center"
        aria-label="Grup WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
          Grup WA
        </span>

        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.309-5.235c0-5.42 4.409-9.85 9.856-9.85 2.632 0 5.108 1.026 6.969 2.887 1.861 1.861 2.887 4.337 2.887 6.969 0 5.421-4.408 9.851-9.855 9.851" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
