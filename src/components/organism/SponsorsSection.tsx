import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/atom/CTAButton";

const sponsors = [
  { name: "GitHub", logo: "/logos/partners/logo-github.svg" },
  { name: "Google", logo: "/logos/partners/logo-google.svg" },
  { name: "Spotify", logo: "/logos/partners/logo-spotify.svg" },
  { name: "Notion", logo: "/logos/partners/logo-notion.svg" },
  { name: "BBVA", logo: "/logos/partners/logo-bbva.svg" },
  { name: "HP", logo: "/logos/partners/logo-hp.svg" },
  { name: "Facebook", logo: "/logos/partners/logo-facebook.svg" },
  { name: "Santander", logo: "/logos/partners/logo-santander.svg" },
];

export default function SponsorsSection() {
  return (
    <section className="border border-white text-white">
      <div className="grid min-h-[80vh] grid-cols-1 lg:grid-cols-2">
        {/* Columna izquierda: Título y CTA */}
        <div className="flex flex-col justify-center gap-8 px-8 py-16 md:px-16 lg:px-20">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Marcas que{" "}
            <span className="text-[#945ea7]">confían</span>
            <br />
            en el <span className="text-[#4259a8]">futuro</span>
          </h2>
          <CTAButton>Adquiere tu entrada</CTAButton>
        </div>

        {/* Columna derecha: Grid de logos + CTA */}
        <div className="grid grid-cols-4 grid-rows-3 border-l border-white">
          {/* Fila 1: 1 logo grande (2 cols) + 2 logos */}
          <div className="col-span-2 flex items-center justify-center border border-white/20 p-8">
            <div className="relative h-24 w-48">
              <Image
                src={sponsors[0].logo}
                alt={sponsors[0].name}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
          {sponsors.slice(1, 3).map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center border border-white/20 p-8"
            >
              <div className="relative h-20 w-36">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          ))}

          {/* Fila 2: 4 logos */}
          {sponsors.slice(3, 7).map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center border border-white/20 p-8"
            >
              <div className="relative h-20 w-36">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          ))}

          {/* Fila 3: CTA grande que ocupa todo el ancho (4 cols) */}
          <div className="col-span-4 p-4">
            <div className="relative flex h-full flex-col justify-between bg-[#4259a8] p-8">
              <p className="text-4xl font-semibold leading-tight md:text-5xl">
                El futuro inicia aqui,
                <br />
                registrate
              </p>
              <button className="absolute bottom-6 right-6 w-15 h-15 flex items-center justify-center rounded-full border-6 border-white bg-[#788BCE] hover:bg-[#2563eb] transition">
                <ArrowRight className="w-15 h-15 text-white" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
