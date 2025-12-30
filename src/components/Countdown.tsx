import { useState, useEffect } from "react";

interface CountdownProps {
  startDate: Date;
  endDate: Date;
  upcomingLabel?: string;
  openLabel?: string;
  closedLabel?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ 
  startDate, 
  endDate, 
  upcomingLabel = "Pendaftaran dibuka dalam",
  openLabel = "⚠️ Segera daftar! Pendaftaran ditutup dalam",
  closedLabel = "⛔ Pendaftaran Telah Ditutup"
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [status, setStatus] = useState<'upcoming' | 'open' | 'closed'>('upcoming');
  const [label, setLabel] = useState("Pendaftaran dibuka dalam");

  useEffect(() => {
    const calculateTimeLeft = (): { timeLeft: TimeLeft; status: 'upcoming' | 'open' | 'closed'; label: string } => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const end = endDate.getTime();
      
      let targetTime = start;
      let currentStatus: 'upcoming' | 'open' | 'closed' = 'upcoming';
      let currentLabel = upcomingLabel;

      if (now < start) {
        targetTime = start;
        currentStatus = 'upcoming';
        currentLabel = upcomingLabel;
      } else if (now >= start && now < end) {
        targetTime = end;
        currentStatus = 'open';
        currentLabel = openLabel;
      } else {
        currentStatus = 'closed';
        return { 
          timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 }, 
          status: 'closed', 
          label: closedLabel 
        };
      }

      const difference = targetTime - now;

      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };

      return { timeLeft, status: currentStatus, label: currentLabel };
    };

    const initial = calculateTimeLeft();
    setTimeLeft(initial.timeLeft);
    setStatus(initial.status);
    setLabel(initial.label);

    const timer = setInterval(() => {
      const result = calculateTimeLeft();
      setTimeLeft(result.timeLeft);
      setStatus(result.status);
      setLabel(result.label);
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate, upcomingLabel, openLabel, closedLabel]);

  if (status === 'closed') {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-destructive/10 backdrop-blur-sm border border-destructive/20">
        <span className="text-destructive font-bold text-lg">{closedLabel}</span>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div className="text-center">
      <p className={`text-sm mb-4 font-medium ${status === 'open' ? 'text-yellow-400 animate-pulse' : 'text-primary-foreground/70'}`}>
        {label}
      </p>

      <div className="inline-flex items-center gap-2 sm:gap-3">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
            <div className="relative group">
              <div className={`absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity ${status === 'open' ? 'bg-yellow-500/30' : 'bg-primary/30'}`} />
              
              <div className="relative w-16 sm:w-20 h-20 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <span className="relative text-2xl sm:text-4xl font-extrabold text-primary-foreground tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="relative text-[10px] sm:text-xs text-primary-foreground/70 font-medium mt-1">
                  {unit.label}
                </span>
              </div>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-primary-foreground/50 text-2xl sm:text-3xl font-bold animate-pulse">
                :
              </span>
            )}
          </div>
        ))}
      </div>
      {status === 'open' && (
        <div className="w-full mt-6 flex justify-center">
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
            ● Pendaftaran Sedang Berlangsung
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;