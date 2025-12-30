import { useState } from "react";
import { Calendar, FileText, Monitor, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollReveal from "@/components/ScrollReveal";

const scheduleData = {
  prestasi: {
    title: "Jalur Prestasi",
    color: "accent",
    steps: [
      {
        icon: FileText,
        phase: "Tahap 1",
        title: "Pendaftaran Online",
        date: "2 Januari – 2 Februari 2026",
        description: "Pendaftaran melalui portal resmi SNMB Kemenag",
      },
      {
        icon: Monitor,
        phase: "Tahap 2",
        title: "Psikotes",
        date: "7 Februari 2026",
        description: "Pelaksanaan tes psikologi calon peserta didik",
      },
      {
        icon: Megaphone,
        phase: "Tahap 3",
        title: "Pengumuman",
        date: "13 Februari 2026",
        description: "Pengumuman hasil seleksi Jalur Prestasi",
      },
    ],
  },
  tes: {
    title: "Jalur Tes",
    color: "primary",
    steps: [
      {
        icon: FileText,
        phase: "Tahap 1",
        title: "Pendaftaran Online",
        date: "2 Januari – 7 Februari 2026",
        description: "Pendaftaran melalui portal resmi SNMB Kemenag",
      },
      {
        icon: Monitor,
        phase: "Tahap 2",
        title: "Computer Based Test (CBT)",
        date: "14 – 15 Februari 2026",
        description: "Pelaksanaan ujian berbasis komputer",
      },
      {
        icon: Megaphone,
        phase: "Tahap 3",
        title: "Pengumuman",
        date: "6 Maret 2026",
        description: "Pengumuman hasil seleksi Jalur Tes",
      },
    ],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState("prestasi");

  return (
    <section id="jadwal" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Jadwal Seleksi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Jadwal SNMB 2026/2027
          </h2>
          <p className="text-lg text-muted-foreground">
            Pastikan Anda memperhatikan jadwal setiap tahapan seleksi dengan cermat.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.2}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-12 p-1.5 bg-muted/50 rounded-full">
              <TabsTrigger
                value="prestasi"
                className="rounded-full py-3 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-amber-400 data-[state=active]:text-navy data-[state=active]:shadow-md transition-all font-semibold"
              >
                Jalur Prestasi
              </TabsTrigger>
              <TabsTrigger
                value="tes"
                className="rounded-full py-3 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-royal-blue data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all font-semibold"
              >
                Jalur Tes
              </TabsTrigger>
            </TabsList>

            {Object.entries(scheduleData).map(([key, data]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  id={`jadwal-${key}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Timeline for desktop */}
                  <div className="hidden md:block relative">
                    {/* Timeline line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-3 gap-8">
                      {data.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="relative"
                          custom={index}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={cardVariants}
                        >
                          {/* Timeline dot */}
                          <div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-gradient-to-br ${key === 'prestasi' ? 'from-accent to-amber-400' : 'from-primary to-royal-blue'} flex items-center justify-center shadow-lg z-10`}>
                            <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                          </div>

                          {/* Card */}
                          <div className="glass-card p-6 rounded-2xl mt-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${key === 'prestasi' ? 'from-accent/20 to-amber-400/10' : 'from-primary/20 to-royal-blue/10'} flex items-center justify-center mb-4`}>
                              <step.icon className={`w-6 h-6 ${key === 'prestasi' ? 'text-accent' : 'text-primary'}`} />
                            </div>
                            <span className={`text-xs font-semibold ${key === 'prestasi' ? 'text-accent' : 'text-primary'}`}>
                              {step.phase}
                            </span>
                            <h4 className="text-lg font-bold text-foreground mt-1 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              {step.description}
                            </p>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${key === 'prestasi' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} text-sm font-semibold`}>
                              <Calendar className="w-4 h-4" />
                              {step.date}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile timeline */}
                  <div className="md:hidden space-y-6">
                    {data.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="relative flex gap-4"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                      >
                        {/* Timeline line and dot */}
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${key === 'prestasi' ? 'from-accent to-amber-400' : 'from-primary to-royal-blue'} flex items-center justify-center shadow-lg flex-shrink-0`}>
                            <step.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          {index < data.steps.length - 1 && (
                            <div className={`w-0.5 flex-1 mt-2 ${key === 'prestasi' ? 'bg-accent/30' : 'bg-primary/30'}`} />
                          )}
                        </div>

                        {/* Card */}
                        <div className="glass-card p-5 rounded-xl flex-1 pb-6">
                          <span className={`text-xs font-semibold ${key === 'prestasi' ? 'text-accent' : 'text-primary'}`}>
                            {step.phase}
                          </span>
                          <h4 className="text-lg font-bold text-foreground mt-1 mb-2">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {step.description}
                          </p>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${key === 'prestasi' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} text-xs font-semibold`}>
                            <Calendar className="w-3 h-3" />
                            {step.date}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Summary table */}
                  <ScrollReveal delay={0.3} className="mt-12">
                    <div className="glass-card rounded-2xl overflow-hidden">
                      <div className={`p-4 bg-gradient-to-r ${key === 'prestasi' ? 'from-accent to-amber-400' : 'from-primary to-royal-blue'}`}>
                        <h4 className="text-lg font-bold text-primary-foreground text-center">
                          Ringkasan Jadwal {data.title}
                        </h4>
                      </div>
                      <div className="p-6">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 text-sm font-semibold text-muted-foreground">Tahapan</th>
                              <th className="text-right py-3 text-sm font-semibold text-muted-foreground">Tanggal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.steps.map((step, index) => (
                              <tr key={index} className="border-b border-border/50 last:border-0">
                                <td className="py-4 font-medium text-foreground">{step.title}</td>
                                <td className="py-4 text-right font-semibold text-primary">{step.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </ScrollReveal>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScheduleSection;
