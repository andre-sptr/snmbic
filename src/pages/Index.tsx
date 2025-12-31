import { useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SelectionPathsSection from "@/components/SelectionPathsSection";
import ScheduleSection from "@/components/ScheduleSection";
import InfoCenterSection from "@/components/InfoCenterSection";
import FAQSection from "@/components/FAQSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "SNMB MAN Insan Cendekia Siak 2026/2027";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Seleksi Nasional Murid Baru (SNMB) MAN Insan Cendekia Siak Tahun Ajaran 2026/2027. Dua jalur seleksi: Jalur Prestasi dan Jalur Tes. Daftar melalui portal resmi SNMB Kemenag.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SelectionPathsSection />
        <ScheduleSection />
        <InfoCenterSection />
        <FAQSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
