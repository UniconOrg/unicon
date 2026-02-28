"use client";

import Image from "next/image";
import { ArrowRight, Plus, MapPin, Calendar, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { mockEvents, mockFitEvents } from "@/lib/events";
import CallToActionCard from "./CallToAction";
import FAQSection from "./FAQSection";

/* --- Hero cards (estructura CallToAction: imagen + card) --- */
const heroCards = [
  {
    title: "Mueve - UniconFit",
    bgColor: "#A87AB9",
    href: "#uniconfit",
    imageUrl: "/illustrations/hero-speaker.png",
    imageAlt: "UniconFit",
  },
  {
    title: "Escucha - Podcast",
    bgColor: "#71B6E0",
    href: "#podcast",
    imageUrl: "/illustrations/hero-speaker.png",
    imageAlt: "Podcast",
  },
  {
    title: "Asiste - Meet Ups",
    bgColor: "#4259A8",
    href: "#meetups",
    imageUrl: "/illustrations/hero-speaker.png",
    imageAlt: "Meet Ups",
  },
];

/* --- Qué es UniCon cards --- */
const queEsCards = [
  "UniCon no es un evento aislado. No es una empresa. No es un club elitista. Es una generación conectándose.",
  "Somos una sociedad creada por jóvenes del sector tecnológico que entendieron algo simple: 👉",
  "Gente con ideas. Gente que ejecuta. Gente que está empezando.",
];

/* --- Nuestra Energía cards --- */
const energiaCards = [
  { emoji: "⚡", title: "Mentalidad de crecimiento" },
  { emoji: "🤝", title: "Networking sin incomodidad" },
  { emoji: "💡", title: "Ideas que se comparten" },
  { emoji: "🚀", title: "Personas que construyen en serio" },
];

/* --- Meetup info --- */
const meetupInfo = [
  {
    icon: MapPin,
    label: "Espacios para hablar de:",
    items: ["Producto", "IA", "Diseño", "Desarrollo", "Lo que esté moviendo el momento"],
  },
  {
    icon: Calendar,
    label: "Motivo:",
    items: [
      "Vienes a conocer gente real.",
      "Vienes a compartir lo que estás construyendo.",
      "Vienes a salir con nuevas conexiones.",
    ],
  },
  {
    icon: Clock,
    label: "Dresscode:",
    text: "Nada rígido. Nada corporativo. Solo comunidad tech activa.",
  },
];

/* --- Podcast: solo título y botón escuchar --- */
const mockPodcasts = [
  { id: "1", title: "5K Running" },
  { id: "2", title: "Social Run + Tech Talk" },
  { id: "3", title: "Corre. Conecta. Impacta." },
];

function EventListCard({ event }: { event: (typeof mockEvents)[0] }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 rounded-none border border-white p-4 sm:flex-row sm:items-center sm:gap-6">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-[132px] sm:w-[132px]">
        <Image
          src={event.imageUrl}
          alt={event.speakerName}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xl font-bold text-[#F4F4F6]">{event.speakerName}</span>
          <span className="text-sm text-[#BAC4E8]">
            {event.speakerRole}, {event.speakerCompany}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#BAC4E8]">{event.date}</span>
          <span className="text-sm font-semibold text-[#F1F1F3]">{event.time}</span>
        </div>
        <p className="line-clamp-1 text-sm text-[#F4F4F6]">{event.description}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#F1F1F3] py-2 pl-4 pr-2 text-sm font-medium text-[#131420]"
          >
            Inscribirme ahora
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#788BCE]">
              <Plus className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
          </button>
          <Link
            href={{ pathname: "/event/[id]", params: { id: event.id } }}
            className="flex items-center gap-2 rounded-full bg-[#131420] py-2 pl-4 pr-2 text-sm font-medium text-[#F4F4F6]"
          >
            Ver Detalles
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A87AB9]">
              <ArrowRight className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PodcastCard({ podcast }: { podcast: (typeof mockPodcasts)[0] }) {
  return (
    <div className="flex flex-col gap-4 rounded-none border border-white bg-[#22253F] p-6">
      <h4 className="text-xl font-bold text-[#F4F4F6]">{podcast.title}</h4>
      <button
        type="button"
        className="flex w-fit items-center gap-2 rounded-full border border-white bg-[#F1F1F3] py-2 pl-4 pr-2 text-sm font-medium text-[#131420]"
      >
        Escuchar ahora 🚀
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#788BCE]">
          <Plus className="h-5 w-5 text-white" strokeWidth={2} />
        </span>
      </button>
    </div>
  );
}

function FitEventCard({ event }: { event: (typeof mockFitEvents)[0] }) {
  return (
    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#788BCE]/50 sm:h-[132px] sm:w-[132px]" />
      <div className="flex flex-1 flex-col gap-2">
        <h4 className="text-xl font-bold text-[#F4F4F6]">{event.title}</h4>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#BAC4E8]">{event.date}</span>
          <span className="text-sm font-semibold text-[#F1F1F3]">{event.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#F4F4F6]">
          <MapPin className="h-4 w-4 shrink-0" />
          {event.location}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#F1F1F3] py-2 pl-4 pr-2 text-sm font-medium text-[#131420]"
          >
            Inscribirme
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#788BCE]">
              <Plus className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
          </button>
          <Link
            href={{ pathname: "/uniconfit/[id]", params: { id: event.id } }}
            className="flex items-center gap-2 rounded-full bg-[#131420] py-2 pl-4 pr-2 text-sm font-medium text-[#F4F4F6]"
          >
            Ver
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A87AB9]">
              <ArrowRight className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LandingContent() {
  return (
    <div className="flex flex-col bg-[#F4F4F6] text-[#F4F4F6]">
      {/* Hero */}
      <section id="hero" className="flex flex-col bg-[#22253F]">
        {/* Dos columnas: izquierda (MADE IN + Build.Connect.Repeat) | derecha (grid) */}
        <div className="flex flex-col lg:flex-row">
          {/* Columna izquierda: sin padding en el gran contenedor */}
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex w-full items-center justify-between rounded-none border border-white p-3">
              <span className="text-2xl font-semibold text-[#F4F4F6] md:text-3xl">MADE IN:</span>
              <span className="text-2xl font-semibold text-[#F4F4F6] md:text-3xl">MEX-COL</span>
            </div>
            {/* Contenedor del contenido hero (logo, título, descripción, CTA) para modificar fácil */}
            <div className="hero-content flex flex-col gap-6 p-8">
              <div className="flex justify-center lg:justify-start">
                <div className="relative h-12 w-48 md:h-16 md:w-64">
                  <Image
                    src="/brand/unicon-wordmark.png"
                    alt="Unicon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h1 className="flex flex-col text-4xl font-bold leading-tight md:text-3xl lg:text-5xl xl:text-6xl">
                <span style={{ color: "#4259A8" }}>Build.</span>
                <span style={{ color: "#71B6E0" }}>Connect.</span>
                <span style={{ color: "#A87AB9" }}>Repeat.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#F4F4F6]/90">
                Somos la comunidad donde jóvenes en tecnología se conectan, comparten y crecen juntos.
              </p>
              <a
                href="#hero"
                className="flex w-fit items-center gap-3 rounded-full bg-[#F1F1F3] py-3 pl-5 pr-2 text-base font-medium text-[#131420] transition hover:opacity-95"
              >
                El futuro Inicia aquí
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#788BCE]">
                  <ArrowRight className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
              </a>
            </div>
          </div>

          {/* Columna derecha: Grid alternado [foto|CTA] [CTA|foto] [foto|CTA] + row full width */}
          <div className="grid grid-cols-2 divide-y divide-[#4259A8]/30 border-l border-[#22253F]/50 lg:w-[45%] xl:w-[40%]">
            <div key={heroCards[0].title} className="col-span-2 rounded-none border border-white">
              <CallToActionCard
                title={heroCards[0].title}
                href={heroCards[0].href}
                bgColor={heroCards[0].bgColor}
                imageUrl={heroCards[0].imageUrl}
                imageAlt={heroCards[0].imageAlt}
              />
            </div>
            <div key={heroCards[1].title} className="col-span-2 rounded-none border border-white">
              <CallToActionCard
                title={heroCards[1].title}
                href={heroCards[1].href}
                bgColor={heroCards[1].bgColor}
                imageUrl={heroCards[1].imageUrl}
                imageAlt={heroCards[1].imageAlt}
                reverse
              />
            </div>
            <div key={heroCards[2].title} className="col-span-2 rounded-none border border-white">
              <CallToActionCard
                title={heroCards[2].title}
                href={heroCards[2].href}
                bgColor={heroCards[2].bgColor}
                imageUrl={heroCards[2].imageUrl}
                imageAlt={heroCards[2].imageAlt}
              />
            </div>
            {/* Row 4: ocupa las dos columnas */}
            <div className="col-span-2 rounded-none border border-white bg-[#131420] p-6 lg:p-8">
              <p className="text-xl font-medium text-[#F4F4F6]/90 md:text-2xl">
                Aquí no vienes a mirar.
              </p>
              <p className="text-2xl font-semibold leading-snug text-[#F4F4F6] md:text-3xl">
                Vienes a hacer que cosas pasen. 🪄
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es UniCon? */}
      <section className="flex flex-col bg-[#22253F]">
        {/* Título en contenedor con borde blanco */}
        <div className="rounded-none border border-white px-6 py-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">¿Qué es UniCon?</h2>
        </div>
        {/* Tres cards en flexbox, ancho completo */}
        <div className="flex w-full border border-white divide-x divide-white">
          {queEsCards.map((text, i) => (
            <div
              key={i}
              className="flex-1 rounded-none p-6 text-white"
            >
              <p className="text-base leading-relaxed md:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nuestra Energía */}
      <section className="flex flex-col bg-[#22253F]">
        {/* Título en contenedor con borde blanco */}
        <div className="rounded-none border border-white px-6 py-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Nuestra Energía</h2>
        </div>
        {/* Cuatro cards en flexbox, apiladas en mobile, horizontales en desktop */}
        <div className="flex w-full flex-col border border-white divide-y divide-white md:flex-row md:divide-x md:divide-y-0">
          {energiaCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col gap-4 rounded-none px-[24px] py-[48px] text-white"
            >
              <span className="text-5xl font-bold">{card.emoji}</span>
              <h3 className="text-left text-xl font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* UniCon Meetups */}
      <section id="meetups" className="flex flex-col bg-[#22253F]">
        {/* Título en contenedor con borde blanco */}
        <div className="flex flex-col gap-4 rounded-none border border-white px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-white md:text-4xl">UniCon Meetups</h2>
          <Link
            href="/meetups"
            className="flex w-fit items-center gap-2 text-sm font-medium text-white transition hover:underline"
          >
            Ver todos los meetups
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          {/* Info cards - sin gap, cada una con borde blanco, se ajustan al espacio */}
          <div className="flex min-h-0 flex-1 flex-col">
            {meetupInfo.map((item, i) => {
              const Icon = item.icon;
              const hasItems = "items" in item && Array.isArray(item.items);
              return (
                <div
                  key={i}
                  className="flex min-h-0 flex-1 gap-4 rounded-none border border-white bg-[#2F355F] p-6"
                >
                  <Icon className="h-9 w-9 shrink-0 text-[#F4F4F6]" strokeWidth={2} />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold text-[#F1F1F3]">{item.label}</h4>
                    {hasItems && "items" in item ? (
                      <ul className="list-inside list-disc text-sm leading-relaxed text-[#F1F1F3]/90">
                        {item.items!.map((listItem, j) => (
                          <li key={j}>{listItem}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-[#F1F1F3]/90">
                        {"text" in item ? item.text : ""}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Event list - tres eventos más recientes, contenedor con borde blanco, se ajusta al espacio */}
          <div className="flex min-h-0 flex-1 flex-col rounded-none border border-white bg-[#22253F]">
            {mockEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="flex min-h-0 flex-1">
                <EventListCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UniConFit */}
      <section id="uniconfit" className="flex flex-col bg-[#22253F]">
        <div className="flex flex-col gap-4 rounded-none border border-white px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-white md:text-4xl">UniConFit</h2>
          <a
            href="#uniconfit"
            className="flex w-fit items-center gap-2 text-sm font-medium text-white transition hover:underline"
          >
            Ver todos los encuentros
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {mockFitEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-none border border-white bg-[#22253F]"
            >
              <FitEventCard event={event} />
            </div>
          ))}
        </div>
      </section>

      {/* UniCon Podcast */}
      <section id="podcast" className="flex flex-col bg-[#22253F]">
        <div className="rounded-none border border-white px-6 py-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">UniCon Podcast</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {mockPodcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="rounded-none border border-white bg-[#22253F]"
            >
              <PodcastCard podcast={podcast} />
            </div>
          ))}
        </div>
      </section>

      {/* ¿Aún tienes preguntas? + FAQ */}
      <section className="bg-[#22253F]">
        <FAQSection />
      </section>
    </div>
  );
}
