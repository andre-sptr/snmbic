import { ExternalLink } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-navy via-royal-blue to-primary py-2 px-4">
      <div className="container-narrow flex items-center justify-center gap-2 text-sm text-primary-foreground">
        <span className="hidden sm:inline font-medium">🎓 Akses Pendaftaran Resmi:</span>
        <a
          href="https://snmb-madrasah.kemenag.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-accent transition-colors"
        >
          snmb-madrasah.kemenag.go.id
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
