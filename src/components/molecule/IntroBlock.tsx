"use client";

import Image from "next/image";
import Countdown from "@/components/atom/Countdown";

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
            <Countdown targetDate={targetDate} className="py-[100px]" />
        </section>
    );
}
