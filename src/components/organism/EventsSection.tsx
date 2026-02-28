import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";
import CTAButton from "@/components/atom/CTAButton";
import { Link } from "@/i18n/navigation";
import { mockEvents, type Event } from "@/lib/events";

function EventCard({ event }: { event: Event }) {
  const speakerTitle = `${event.speakerRole}, ${event.speakerCompany}`;

  return (
    <div className="flex flex-row flex-wrap items-center gap-3 rounded-xl border border-[#788BCE] px-4 py-6">
      {/* Imagen circular del speaker */}
      <div className="relative h-[132px] w-[132px] shrink-0 overflow-hidden rounded-full p-2.5">
        <Image
          src={event.imageUrl}
          alt={event.speakerName}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex min-w-[120px] flex-1 flex-col gap-2">
        {/* Nombre y título del speaker */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold leading-8 text-[#F4F4F6]">
            {event.speakerName}
          </span>
          <span className="text-base font-normal leading-6 text-[#BAC4E8]">
            {speakerTitle}
          </span>
        </div>

        {/* Fecha y hora */}
        <div className="flex items-center gap-2 pr-3">
          <span className="text-lg font-semibold leading-7 text-[#BAC4E8]">
            {event.date}
          </span>
          <span className="text-lg font-semibold leading-7 text-[#F1F1F3]">
            {event.time}
          </span>
        </div>

        {/* Descripción */}
        <p className="line-clamp-1 text-sm font-normal leading-5 text-[#F4F4F6]">
          {event.description}
        </p>

        {/* Botones CTA */}
        <div className="flex items-start gap-2">
          <button
            type="button"
            className="flex items-center gap-3 rounded-full bg-[#F1F1F3] py-1.5 pl-4 pr-2 transition hover:bg-white/90"
          >
            <span className="text-sm font-medium leading-5 text-[#131420]">
              Inscribirme ahora 🚀
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#788BCE]">
              <Plus className="h-6 w-6 text-[#F4F4F6]" strokeWidth={2} />
            </span>
          </button>
          <Link
            href={{ pathname: "/event/[id]", params: { id: event.id } }}
            className="flex items-center gap-3 rounded-full bg-[#131420] py-1.5 pl-4 pr-2 transition hover:bg-[#1a1b2e]"
          >
            <span className="text-sm font-medium leading-5 text-[#F4F4F6]">
              Ver Detalles
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A87AB9]">
              <ArrowRight className="h-6 w-6 text-[#F4F4F6]" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="border border-white text-white">
      <div className="mx-auto flex w-full flex-col gap-10 px-6 py-16 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold">Eventos destacados</h2>
          <CTAButton icon="arrow">Ver todos Los Eventos</CTAButton>
        </div>

        {/* Lista de eventos en 2 columnas con flujo vertical (1,2,3 | 4,5,6) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Columna izquierda: eventos 1, 2, 3 */}
          <div className="grid auto-rows-fr gap-6">
            {mockEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {/* Columna derecha: eventos 4, 5, 6 */}
          <div className="grid auto-rows-fr gap-6">
            {mockEvents.slice(3, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
