import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const DownloadSection = () => {
  return (
    <section className="section-padding pt-0 relative z-10">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  <span>Dokumen Persyaratan</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Template Surat Rekomendasi SNMB
                </h2>
                <p className="text-muted-foreground text-lg">
                  Unduh template surat rekomendasi SNMB 2026/2027. Pastikan Anda mengisi data dengan benar sebelum mengunggahnya.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300" 
                  asChild
                >
                  <a href="/Template-Surat-Rekomendasi-SNMB-2026.docx" download="Template-Surat-Rekomendasi-SNMB-2026.docx">
                    <Download className="mr-2 h-5 w-5" />
                    Unduh Template
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DownloadSection;