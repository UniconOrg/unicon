import { ArrowRight } from "lucide-react";

export default function CallToActionLogin() {
  return (
    <div className="h-full p-6">

    <div className="relative bg-[#A87AB9] text-white rounded-sm p-6 h-full flex flex-col justify-end">
      {/* Botón circular arriba a la derecha */}
      <button
        className="absolute top-4 right-4 w-15 h-15 flex items-center justify-center 
                   rounded-full border-6 border-white bg-[#788BCE] hover:bg-[#2563eb] transition"
      >
        <ArrowRight className="w-15 h-15 text-white" strokeWidth={2}/>
      </button>

      {/* Texto */}
      <p className="text-5xl font-semibold leading-snug">
        El futuro inicia aqui, <br /> registrate
      </p>
    </div>
    </div>
  );
}
