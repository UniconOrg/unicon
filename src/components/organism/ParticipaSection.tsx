import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/atom/CTAButton";

export default function ParticipaSection() {
  return (
    <section className="border border-white text-white">
      {/* Título superior */}
      <div className="px-8 py-24 md:px-16 lg:px-20">
        <h2 className="text-4xl font-bold md:text-5xl">PARTICIPA</h2>
      </div>

      {/* Grid de 2 columnas */}
      <div className="grid grid-cols-1 border-t border-white md:grid-cols-2">
        {/* Card izquierda - Registrate */}
        <div className="border-r border-white p-4">
          <div className="relative flex h-full min-h-[250px] flex-col justify-between bg-[#4da3da] p-8">
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

        {/* Card derecha - Sponsor */}
        <div className="p-4">
          <div className="relative flex h-full min-h-[250px] flex-col justify-center gap-4 bg-[#B07FB8] p-8">
            <h3 className="text-3xl font-semibold md:text-4xl">Sponsor</h3>
            <p className="text-lg text-white/90">Expande tu marca en este evento</p>
            <CTAButton variant="light" className="mt-2">
              Solicitar Informacion
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
