import Image from "next/image";

type Props = {
    year?: string;
    logoSrc?: string; // /assets/unicon-logo.svg (ajústalo a tu ruta)
};

export default function IntroBlock({
    year = "2025",
    logoSrc = "/brand/unicon-wordmark.png",
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
            <div className="flex flex-row gap-4 text-center items-center py-[100px]">
                <div className="text-white/90 text-base md:text-[80px] leading-relaxed text-bold">00</div>
                <div>Días</div>
                <div className="text-white/90 text-base md:text-[80px] leading-relaxed text-bold">00</div>
                <div>Horas</div>
                <div className="text-white/90 text-base md:text-[80px] leading-relaxed text-bold">00</div>
                <div>Minutos</div>
            </div>
        </section>
    );
}

function CounterCircle({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="h-20 w-20 rounded-full border border-white/50
                      flex items-center justify-center text-3xl font-semibold">
                {value}
            </div>
            <span className="text-xs uppercase tracking-wide text-white/70">
                {label}
            </span>
        </div>
    );
}
