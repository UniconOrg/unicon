import Image from "next/image";
import { Plus } from "lucide-react";
import CTAButton from "@/components/atom/CTAButton";

type Event = {
  id: string;
  date: string;
  time: string;
  speakerName: string;
  speakerRole: string;
  speakerCompany: string;
  description: string;
  imageUrl: string;
};

const mockEvents: Event[] = [
  {
    id: "1",
    date: "Hoy",
    time: "02:00 pm",
    speakerName: "María González",
    speakerRole: "CTO",
    speakerCompany: "TechMX",
    description: "Cómo escalar startups en Latinoamérica: lecciones aprendidas y estrategias clave para el éxito",
    imageUrl: "/illustrations/hero-speaker.png",
  },
  {
    id: "2",
    date: "Mañana",
    time: "10:30 am",
    speakerName: "Carlos Ramírez",
    speakerRole: "Head of Engineering",
    speakerCompany: "Nubank",
    description: "Arquitectura de microservicios a escala: manejando millones de transacciones diarias",
    imageUrl: "/illustrations/hero-speaker.png",
  },
  {
    id: "3",
    date: "Vie 28",
    time: "04:00 pm",
    speakerName: "Ana Martínez",
    speakerRole: "AI Research Lead",
    speakerCompany: "Google DeepMind",
    description: "El futuro de la inteligencia artificial generativa y su impacto en el desarrollo de software",
    imageUrl: "/illustrations/hero-speaker.png",
  },
  {
    id: "4",
    date: "Hoy",
    time: "05:30 pm",
    speakerName: "Diego López",
    speakerRole: "VP of Product",
    speakerCompany: "Rappi",
    description: "Product-led growth: construyendo productos que se venden solos en mercados emergentes",
    imageUrl: "/illustrations/hero-speaker.png",
  },
  {
    id: "5",
    date: "Mañana",
    time: "03:00 pm",
    speakerName: "Laura Sánchez",
    speakerRole: "Staff Engineer",
    speakerCompany: "Spotify",
    description: "Sistemas distribuidos y alta disponibilidad: lecciones de streaming a escala global",
    imageUrl: "/illustrations/hero-speaker.png",
  },
  {
    id: "6",
    date: "Sáb 29",
    time: "11:00 am",
    speakerName: "Roberto Chen",
    speakerRole: "Founder & CEO",
    speakerCompany: "CloudLatam",
    description: "De idea a unicornio: el camino del emprendimiento tech en América Latina",
    imageUrl: "/illustrations/hero-speaker.png",
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex h-full min-h-[180px] items-center gap-4 rounded-xl border border-[#3a3f5c] p-6 md:p-8">
      {/* Fecha y hora */}
      <div className="flex w-24 shrink-0 flex-col items-center justify-center text-center">
        <span className="text-2xl font-semibold leading-tight">{event.date}</span>
        <span className="text-sm text-white/70">{event.time}</span>
      </div>

      {/* Imagen del speaker */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#788BCE] md:h-28 md:w-28">
        <Image
          src={event.imageUrl}
          alt={event.speakerName}
          fill
          className="object-cover"
        />
      </div>

      {/* Info del evento */}
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-semibold">{event.speakerName}</span>
          <span className="text-base text-white/60">
            {event.speakerRole}, {event.speakerCompany}
          </span>
        </div>
        <p className="line-clamp-2 text-base text-white/70">{event.description}</p>
        <button className="inline-flex w-fit items-center gap-3 rounded-full bg-[#2a2f4a] px-5 py-3 text-base text-white/90 transition hover:bg-[#3a3f5c]">
          Añadir a Calendario
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#788BCE]">
            <Plus className="h-4 w-4 text-white" strokeWidth={2} />
          </span>
        </button>
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
