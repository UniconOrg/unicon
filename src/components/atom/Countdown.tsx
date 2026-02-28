"use client";

import { useState, useEffect } from "react";

type CountdownProps = {
  targetDate: Date;
  variant?: "horizontal" | "vertical";
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
};

const formatNumber = (num: number) => num.toString().padStart(2, "0");

export default function Countdown({
  targetDate,
  variant = "horizontal",
  className = "",
  numberClassName,
  labelClassName,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        setTimeLeft({ days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Actualiza cada minuto

    return () => clearInterval(timer);
  }, [targetDate]);

  const defaultNumberClass =
    variant === "horizontal"
      ? "text-white/90 text-base md:text-[80px] leading-relaxed font-bold"
      : "text-7xl font-bold leading-[90px] tracking-tight text-transparent [-webkit-text-stroke:2px_#F4F4F6]";
  const defaultLabelClass =
    variant === "horizontal" ? "text-white" : "text-xs font-normal text-white mt-1";

  const numClass = numberClassName ?? defaultNumberClass;
  const lblClass = labelClassName ?? defaultLabelClass;

  const items = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
  ];

  if (variant === "vertical") {
    return (
      <div className={`flex items-end gap-6 ${className}`}>
        {items.map(({ value, label }) => (
          <div key={label} className="flex flex-col">
            <span className={numClass}>{formatNumber(value)}</span>
            <span className={lblClass}>{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-row gap-4 text-center items-center ${className}`}>
      {items.flatMap(({ value, label }) => [
        <div key={`${label}-num`} className={numClass}>
          {formatNumber(value)}
        </div>,
        <div key={`${label}-lbl`} className={lblClass}>
          {label}
        </div>,
      ])}
    </div>
  );
}
