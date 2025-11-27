import Image from "next/image";
import CTAButton from "@/components/atom/CTAButton";

export default function ClosingSection() {
  return (
    <section className="border border-white text-white">
      <div className="grid min-h-[80vh] grid-cols-1 lg:grid-cols-2">
        {/* Columna izquierda: Texto y CTA */}
        <div className="flex flex-col justify-center gap-8 px-8 py-16 md:px-16 lg:px-20">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Nos vemos UniCon
          </h2>

          <div className="space-y-2">
            <p className="text-lg font-semibold underline">Direccion:</p>
            <p className="text-lg">
              National Art Museum, C. de Tacuba 8,
              <br />
              Centro Histórico de la Cdad
            </p>
          </div>

          <CTAButton>¿Cómo llegar?</CTAButton>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden">
            <Image
              src="/illustrations/unicon_2.png"
              alt="UniCon evento"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
