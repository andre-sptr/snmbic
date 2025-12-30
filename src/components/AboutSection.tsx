import { Award, Users, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerContainer, { staggerItemVariants } from "@/components/StaggerContainer";

const highlights = [
  {
    icon: Award,
    title: "Seleksi Nasional",
    description: "Program seleksi murid baru tingkat nasional yang diselenggarakan oleh Kementerian Agama RI.",
  },
  {
    icon: Users,
    title: "Dua Jalur Seleksi",
    description: "Tersedia Jalur Prestasi dan Jalur Tes untuk mengakomodasi berbagai potensi calon peserta didik.",
  },
  {
    icon: FileCheck,
    title: "Pendaftaran Online",
    description: "Proses pendaftaran dilakukan secara online melalui portal resmi SNMB Kemenag.",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Tentang SNMB
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seleksi Nasional Murid Baru
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SNMB (Seleksi Nasional Murid Baru) adalah jalur seleksi penerimaan siswa baru 
            yang diselenggarakan secara nasional oleh Kementerian Agama Republik Indonesia. 
            Program ini ditujukan untuk calon peserta didik MAN Insan Cendekia Siak 
            Tahun Ajaran 2026/2027.
          </p>
        </ScrollReveal>

        {/* Highlight Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItemVariants}
              className="group glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-royal-blue flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Additional info */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <img 
                src="/favicon.ico" 
                alt="Logo MAN IC Siak" 
                className="w-16 h-16 rounded-full shadow-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  MAN Insan Cendekia Siak
                </h4>
                <p className="text-muted-foreground">
                  Madrasah Aliyah Negeri Insan Cendekia Siak merupakan salah satu sekolah berasrama 
                  di bawah naungan Kementerian Agama Republik Indonesia yang menyelenggarakan 
                  pendidikan berbasis keunggulan di bidang sains dan keagamaan.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
