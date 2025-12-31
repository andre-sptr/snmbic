import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Bagaimana cara mendaftar SNMB MAN IC Siak?",
    answer: "Pendaftaran dilakukan secara online melalui portal resmi SNMB Kemenag di snmb-madrasah.kemenag.go.id. Silakan akses Pusat Informasi kami untuk panduan lengkap pendaftaran.",
  },
  {
    question: "Apa bedanya Jalur Prestasi dan Jalur Tes?",
    answer: "Jalur Prestasi diperuntukkan bagi calon peserta didik yang memiliki prestasi akademik/non-akademik dan diseleksi melalui Psikotes. Jalur Tes terbuka untuk semua calon peserta dan diseleksi melalui Computer Based Test (CBT). Untuk informasi lebih detail, silakan kunjungi Pusat Informasi resmi kami.",
  },
  {
    question: "Di mana saya melihat pengumuman hasil seleksi?",
    answer: "Pengumuman hasil seleksi akan diumumkan melalui portal resmi SNMB Kemenag dan kanal resmi MAN IC Siak. Pastikan Anda memantau kanal-kanal tersebut sesuai jadwal pengumuman.",
  },
  {
    question: "Apa saja persyaratan berkas pendaftaran?",
    answer: "Informasi detail mengenai persyaratan berkas pendaftaran dapat dilihat melalui juknis SNMB atau portal pendaftaran SNMB Kemenag.",
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Untuk informasi terkait biaya pendaftaran, silakan merujuk pada panduan resmi di portal SNMB Kemenag atau hubungi Pusat Informasi MAN IC Siak.",
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar SNMB MAN IC Siak.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={faqItemVariants}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-2xl border-0 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground text-lg pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-14 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Additional help */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Masih punya pertanyaan lain?
          </p>
          <a
            href="https://linktr.ee/manicsiak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Hubungi Pusat Informasi
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
