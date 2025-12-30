import { Trophy, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/StaggerContainer";

const paths = [
  {
    id: "prestasi",
    icon: Trophy,
    title: "Jalur Prestasi",
    description: "Jalur seleksi bagi calon peserta didik yang memiliki prestasi akademik maupun non-akademik yang dibuktikan dengan sertifikat atau penghargaan.",
    features: [
      "Berbasis prestasi akademik/non-akademik",
      "Seleksi melalui Psikotes",
      "Proses lebih cepat",
    ],
    schedule: "2 Januari – 2 Februari 2026",
    accentColor: "from-accent to-amber-400",
    bgGradient: "from-accent/10 to-amber-400/5",
  },
  {
    id: "tes",
    icon: ClipboardCheck,
    title: "Jalur Tes",
    description: "Jalur seleksi umum bagi seluruh calon peserta didik melalui Computer Based Test (CBT) yang menguji kemampuan akademik.",
    features: [
      "Terbuka untuk semua calon peserta",
      "Seleksi melalui CBT",
      "Menguji kemampuan akademik",
    ],
    schedule: "2 Januari – 7 Februari 2026",
    accentColor: "from-primary to-royal-blue",
    bgGradient: "from-primary/10 to-royal-blue/5",
  },
];

const SelectionPathsSection = () => {
  return (
    <section id="jalur" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Jalur Seleksi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pilih Jalur Pendaftaran
          </h2>
          <p className="text-lg text-muted-foreground">
            SNMB MAN IC Siak menyediakan dua jalur seleksi. 
            Pilih jalur yang sesuai dengan profil dan kemampuan Anda.
          </p>
        </ScrollReveal>

        {/* Path Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
          {paths.map((path) => (
            <motion.div
              key={path.id}
              variants={staggerItemVariants}
              className="group relative glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-8 lg:p-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.accentColor} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <path.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {path.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {path.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {path.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${path.accentColor} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Schedule preview */}
                <div className={`p-4 rounded-xl bg-gradient-to-r ${path.bgGradient} border border-border/50 mb-6`}>
                  <p className="text-sm text-muted-foreground mb-1">Periode Pendaftaran</p>
                  <p className="font-semibold text-foreground">{path.schedule}</p>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${path.accentColor} text-primary-foreground rounded-xl py-6 font-semibold shadow-lg hover:shadow-xl transition-all group/btn`}
                >
                  <a href={`#jadwal-${path.id}`}>
                    <span>Lihat Detail Jadwal</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SelectionPathsSection;
