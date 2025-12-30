import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate, label = "Pendaftaran dibuka dalam" }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30">
        <span className="text-accent font-bold text-lg">🎉 Pendaftaran Telah Dibuka!</span>
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
      <p className="text-primary-foreground/70 text-sm mb-4 font-medium">{label}</p>
      <div className="inline-flex items-center gap-2 sm:gap-3">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Card */}
              <div className="relative w-16 sm:w-20 h-20 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                
                {/* Number */}
                <span className="relative text-2xl sm:text-4xl font-extrabold text-primary-foreground tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
                
                {/* Label */}
                <span className="relative text-[10px] sm:text-xs text-primary-foreground/70 font-medium mt-1">
                  {unit.label}
                </span>
              </div>
            </div>

            {/* Separator */}
            {index < timeUnits.length - 1 && (
              <span className="text-primary-foreground/50 text-2xl sm:text-3xl font-bold animate-pulse">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
