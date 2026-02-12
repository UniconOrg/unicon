import Image from "next/image";
import { Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border border-white text-white">
      <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0">
        {/* Columna 1: Logo y descripción */}
        <div className="flex flex-col gap-4 p-8 md:p-12">
          <div className="relative h-10 w-40">
            <Image
              src="/brand/unicon-wordmark.png"
              alt="UniConhub"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Crear un ambiente inclusivo, divertido y motivador donde jóvenes apasionados por la tecnología puedan compartir, aprender de diversas experiencias.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="flex flex-col gap-4 p-8 md:p-12">
          <h4 className="text-lg font-semibold">Contacto</h4>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <p>+52 56 39472001</p>
            <p>info@uniconhub.org</p>
            <p>Lago Alberto 375, piso 5-120</p>
          </div>
        </div>

        {/* Columna 3: Redes y links */}
        <div className="flex flex-col gap-6 p-8 md:p-12">
          <div>
            <h4 className="text-lg font-semibold mb-3">Nuestras redes</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-[#945ea7] hover:underline">
              Términos y condiciones
            </a>
            <a href="#" className="text-sm text-[#945ea7] hover:underline">
              Políticas de privacidad
            </a>
          </div>

          <button className="inline-flex w-fit items-center gap-3 rounded-full bg-white/90 py-2 pl-5 pr-2 text-sm font-normal text-[#1A1D3B] transition hover:bg-white">
            Iniciar sesión
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#788BCE]">
              <ArrowRight className="h-4 w-4 text-white" strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
