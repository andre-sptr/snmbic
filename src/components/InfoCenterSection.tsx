import { ExternalLink, QrCode, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/StaggerContainer";

const InfoCenterSection = () => {
  return (
    <section id="pusat-informasi" className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(221 83% 30%) 50%, hsl(221 83% 40%) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground text-sm font-semibold mb-4">
            Pusat Informasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pusat Informasi SNMB
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 opacity-90">
              MAN IC Siak
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Akses semua informasi resmi dan link pendaftaran melalui kanal berikut.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
          {/* Main CTA Card */}
          <motion.div
            variants={staggerItemVariants}
            className="glass-dark p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Link2 className="w-8 h-8 text-navy" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Pusat Informasi
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Akses seluruh informasi, panduan, dan kontak resmi SNMB MAN IC Siak melalui Linktree kami.
            </p>
            <Button
              asChild
              size="lg"
              className="btn-gold rounded-full w-full py-6 text-lg group/btn"
            >
              <a
                href="https://linktr.ee/manicsiak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Buka Pusat Informasi
                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Registration Link Card */}
          <motion.div
            variants={staggerItemVariants}
            className="glass-dark p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-royal-blue flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <ExternalLink className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Link Pendaftaran Resmi
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Lakukan pendaftaran SNMB secara online melalui portal resmi Kementerian Agama RI.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-royal-blue text-primary-foreground rounded-full w-full py-6 text-lg shadow-lg hover:shadow-glow transition-all group/btn"
            >
              <a
                href="https://snmb-madrasah.kemenag.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </StaggerContainer>

        {/* QR Code Section */}
        <ScrollReveal delay={0.4} className="mt-12 max-w-xl mx-auto">
          <div className="glass-dark p-8 rounded-3xl border border-white/10 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-7 h-7 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-primary-foreground mb-2">
              Scan QR Code
            </h4>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Scan QR code berikut untuk akses cepat ke pusat informasi
            </p>
            
            {/* QR Placeholder */}
            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg">
              <div className="w-40 h-40 bg-muted rounded-xl flex items-center justify-center">
                <div className="inline-block bg-white rounded-2xl shadow-lg">
                  <img 
                    src="/QR.jpg" 
                    alt="Scan QR Code" 
                    className="w-40 h-40 object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InfoCenterSection;
