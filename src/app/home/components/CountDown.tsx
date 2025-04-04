"use client";

import "./CountDown.css";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, className }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300); // Duración de la animación
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span className={`${className} ${animate ? "animate-number-scale" : ""}`}>
      {value}
    </span>
  );
};

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const targetDate = Date.UTC(2025, 8, 30, 9, 0, 0);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursDifference = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesDifference = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);

      const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

      setTimeLeft({
        days: formatTime(daysDifference),
        hours: formatTime(hoursDifference),
        minutes: formatTime(minutesDifference),
        seconds: formatTime(secondsDifference),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      <div className="countDown">
        <div className="countDownItemColumn">
          <p className="countDownTimeDays" style={{ fontSize: "4rem" }}>
            <AnimatedNumber value={timeLeft.days} />
          </p>

          <p
            className="countDownLabel"
            style={{
              transform: "rotate(270deg)",
              fontSize: "1.6rem",
            }}
          >
            Días
          </p>
        </div>

        <div className="countDownItemRow">
          <p className="countDownLabel" style={{ fontSize: "1.4rem" }}>
            Horas
          </p>
          <p className="countDownTimeHours">
            <AnimatedNumber value={timeLeft.hours} />
          </p>
        </div>

        <p
          style={{ fontSize: "3.2rem", marginTop: "13px", marginBottom: "0px" }}
        >
          :
        </p>

        <div className="countDownItemRow" style={{ marginTop: "10px" }}>
          <p className="countDownLabel">Minutos</p>
          <p
            className="countDownTimeMins"
            style={{
              fontSize: "2.4rem",
              transform: "translateY(-9px)",
            }}
          >
            <AnimatedNumber value={timeLeft.minutes} />
          </p>
        </div>

        <p
          style={{ fontSize: "3.2rem", marginTop: "13px", marginBottom: "0px" }}
          className="countDownItemRowSec"
        >
          :
        </p>

        <div className="countDownItemRowSec" style={{ marginTop: "20px" }}>
          <p className="countDownLabel" style={{ fontSize: "0.7rem" }}>
            Segundos
          </p>
          <p className="countDownTimeSec">
            <AnimatedNumber value={timeLeft.seconds} />
          </p>
        </div>
      </div>
    </div>
  );
}
