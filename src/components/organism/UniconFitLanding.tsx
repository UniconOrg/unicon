"use client";

import { Plus, MapPin, Calendar, Clock } from "lucide-react";
import Countdown from "@/components/atom/Countdown";
import CallToActionLogin from "@/components/molecule/CallToActionLogin";
import EventHeader from "@/components/molecule/EventHeader";
import type { FitEvent } from "@/lib/events";

type UniconFitLandingProps = {
  event: FitEvent;
};

export default function UniconFitLanding({ event }: UniconFitLandingProps) {
  const dayNum = parseInt(event.dayNum, 10) || 0;

  return (
    <section className="w-full bg-primary text-white">
      <div
        className="
          flex flex-col min-h-dvh
          md:grid md:grid-cols-5 md:grid-rows-4
        "
      >
        {/* 1. EventHeader - Date + Location */}
        <div className="order-1 flex items-center border-b border-white/20 md:border md:border-white md:col-span-3">
          <EventHeader
            month={`${event.monthShort}.`}
            days={[dayNum]}
            location={event.location}
          />
        </div>

        {/* 2. Event content - título, descripción, CTA, countdown */}
        <div className="order-2 border-b border-white/20 md:border md:border-white md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-2">
          <div className="flex flex-col justify-center gap-6 min-h-0 bg-[#131420] px-6 py-8 md:h-full md:py-10 md:px-12 md:py-14">
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight tracking-tight text-[#A87AB9]">
              {event.title}
            </h1>
            <p className="text-lg md:text-xl font-normal leading-8 text-[#F4F4F6] max-w-2xl">
              Únete a la comunidad UniConFit en un evento de fitness y tecnología. Conecta con personas que comparten tu pasión por la actividad física y el bienestar.
            </p>

            <button
              type="button"
              className="flex w-fit items-center gap-3 rounded-full bg-[#F1F1F3] py-1.5 pl-4 pr-2 transition hover:bg-white/90"
            >
              <span className="text-sm font-medium leading-5 text-[#131420]">
                Inscribirme ahora
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#788BCE]">
                <Plus className="h-6 w-6 text-[#F4F4F6]" strokeWidth={2} />
              </span>
            </button>

            <Countdown
              targetDate={new Date(event.eventStartDate)}
              variant="vertical"
            />
          </div>
        </div>

        {/* 3. CTA Banner */}
        <div className="order-3 border-b border-white/20 md:border md:border-white md:p-[30px] md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-1">
          <CallToActionLogin />
        </div>

        {/* 4. Logistics cards */}
        <div className="order-4 border-b border-white/20 md:border md:border-white md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-3">
          <div className="flex flex-col divide-y divide-white h-full bg-[#2F3560] rounded-lg overflow-hidden">
            <div className="flex flex-1 items-center gap-4 p-4 md:p-6 min-h-0">
              <MapPin className="h-8 w-8 shrink-0 text-[#F4F4F6]" strokeWidth={2} />
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-lg font-bold leading-7 text-[#F1F1F3]">Direccion:</h3>
                <p className="text-sm font-normal leading-6 text-[#F1F1F3] line-clamp-2">{event.address}</p>
              </div>
            </div>

            <div className="flex flex-1 items-center gap-4 p-4 md:p-6 min-h-0">
              <Calendar className="h-8 w-8 shrink-0 text-[#F4F4F6]" strokeWidth={2} />
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-lg font-bold leading-7 text-[#F1F1F3]">Fecha:</h3>
                <p className="text-sm font-normal leading-6 text-[#F1F1F3]">{event.fullDate}</p>
              </div>
            </div>

            <div className="flex flex-1 items-center gap-4 p-4 md:p-6 min-h-0">
              <Clock className="h-8 w-8 shrink-0 text-[#F4F4F6]" strokeWidth={2} />
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-lg font-bold leading-7 text-[#F1F1F3]">Hora:</h3>
                <p className="text-sm font-normal leading-6 text-[#F1F1F3]">{event.fullTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
