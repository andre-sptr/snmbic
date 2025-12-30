import { ArrowDown, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";

// Target date: 2 Januari 2026
const REGISTRATION_START_DATE = new Date("2026-01-02T00:00:00");

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(221 83% 30%) 50%, hsl(221 83% 45%) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-blue/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-narrow relative z-10 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Tahun Ajaran 2026/2027
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-4 animate-fade-up delay-100">
            SNMB
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 opacity-90">
              Seleksi Nasional Murid Baru
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-foreground/90 mb-6 animate-fade-up delay-200">
            MAN Insan Cendekia Siak
          </h2>

          {/* Countdown Timer */}
          <div className="mb-8 animate-fade-up delay-300">
            <Countdown 
              targetDate={REGISTRATION_START_DATE} 
              label="Pendaftaran dibuka dalam"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up delay-300">
            Selamat datang di laman resmi SNMB MAN Insan Cendekia Siak. 
            Pilih jalur seleksi yang sesuai dan daftarkan diri Anda melalui portal resmi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-400">
            <Button
              asChild
              size="lg"
              className="btn-gold rounded-full px-8 py-6 text-lg w-full sm:w-auto group"
            >
              <a
                href="https://snmb-madrasah.kemenag.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Daftar Sekarang
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="btn-secondary bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:border-white/50 rounded-full px-8 py-6 text-lg w-full sm:w-auto group"
            >
              <a
                href="https://linktr.ee/manicsiak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Info className="w-5 h-5" />
                Pusat Informasi
              </a>
            </Button>
          </div>

          {/* Secondary CTA */}
          <a
            href="#jadwal"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-fade-up delay-500"
          >
            <span className="text-sm font-medium">Lihat Jadwal Seleksi</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Trust Cues */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-up delay-500">
            <p className="text-primary-foreground/50 text-sm mb-4">Diselenggarakan oleh</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold">K</span>
                </div>
                <span className="text-sm font-medium">Kementerian Agama RI</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold">M</span>
                </div>
                <span className="text-sm font-medium">MAN Insan Cendekia Siak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
