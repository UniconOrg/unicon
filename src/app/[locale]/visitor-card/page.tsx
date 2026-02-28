// src/app/[locale]/visitor-card/page.tsx
import Sidebar from "@/components/molecule/SideBar";
import VisitorCard from "@/components/organism/VisitorCard";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Sparkles, Mic, Triangle } from "lucide-react";

export default function VisitorCardPage() {
  return (
    <div className="flex w-full min-h-screen bg-[#1E1E2E] text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto relative pt-14 md:pt-0">
        {/* Top right: Adquirir Boleto button */}
        <div className="absolute top-6 right-8 z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition"
          >
            Adquirir Boleto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-16 max-w-6xl mx-auto">
          {/* Left: Benefits + CTA */}
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl font-bold">Adquirir Boleto</h1>

            <h2 className="text-2xl font-bold">Nuestros beneficios:</h2>

            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#A87AB9] shrink-0 mt-0.5" />
                <span>
                  Gafete personalizado para vivir el evento como un verdadero
                  insider.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 text-[#A87AB9] shrink-0 mt-0.5" />
                <span>
                  Acceso total a todas las charlas, conferencias y actividades.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Triangle className="w-5 h-5 text-[#A87AB9] shrink-0 mt-0.5 fill-current rotate-180" />
                <span>
                  Conexión directa con la comunidad de Unicon: speakers,
                  asistentes y expertos.
                </span>
              </li>
            </ul>

            <p className="text-xl font-bold">
              ¡Tu boleto es la llave para vivir UniconHUB al máximo!
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#945ea7] font-semibold hover:bg-white/90 transition"
            >
              Adquirir Boleto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Visitor Card */}
          <div className="flex-shrink-0">
            <VisitorCard />
          </div>
        </div>

        <div className="px-8 pb-8">
          <Link
            href="/"
            className="text-[#A87AB9] hover:opacity-80 font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
