import Image from "next/image";
import CTAButton from "@/components/atom/CTAButton";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden text-white border border-white">

      <div className="flex min-h-[100vh] w-full flex-col items-start justify-center gap-16 px-6 py-16 md:px-20 lg:px-32">
        <div className="relative max-w-5xl space-y-10 ml-12 md:ml-20 lg:ml-32">
          <p className="text-4xl font-semibold leading-tight md:text-5xl lg:text-[4.875rem]">
            &ldquo;Un faro de{" "}
            <span className="text-[#945ea7]">inspiración</span> y{" "}
            <span className="text-[#4259a8]">comunidad</span> para los
            visionarios del futuro&rdquo;
          </p>

          <CTAButton>El futuro Inicia aquí</CTAButton>
        </div>

        {/* Imagen del globo - posicionada a la derecha y más grande */}
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative h-[80vh] w-[80vh]">
            <Image
              src="/illustrations/dotted-globe-map.png"
              alt="Mundo digitalizado"
              fill
              priority
              className="object-contain opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
