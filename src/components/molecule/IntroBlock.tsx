"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
    year?: string;
    logoSrc?: string;
    targetDate?: Date;
};

export default function IntroBlock({
    year = "2026",
    logoSrc = "/brand/unicon-wordmark.png",
    targetDate = new Date("2026-02-17T00:00:00"),
}: Props) {
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

    const formatNumber = (num: number) => num.toString().padStart(2, "0");

    return (
        <section className="bg-primary text-white px-6 py-10 md:px-12 md:py-14">
            <div className="text-6xl font-bold text-[#788BCE]">{year}</div>
            <div className="relative w-full max-w-xs h-24">
                <Image
                    src={logoSrc}
                    alt="UniConhub"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="text-white/90 text-base md:text-[22px] leading-relaxed pr-8">
                Únase a nosotros en una reunión imperdible con los visionarios y creadores de cambios que están dando forma al futuro de la web en la era de la IA, desde diseñadores y desarrolladores hasta profesionales del marketing y ejecutivos.
            </div>
            <div className="flex flex-row gap-4 text-center items-center py-[100px]">
                <div className="text-white/90 text-base md:text-[80px] leading-relaxed font-bold">{formatNumber(timeLeft.days)}</div>
                <div>Días</div>
                <div className="text-white/90 text-base md:text-[80px] leading-relaxed font-bold">{formatNumber(timeLeft.hours)}</div>
                <div>Horas</div>
                <div className="text-white/90 text-base md:text-[80px] leading-relaxed font-bold">{formatNumber(timeLeft.minutes)}</div>
                <div>Minutos</div>
            </div>
        </section>
    );
}
