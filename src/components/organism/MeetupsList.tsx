"use client";

import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Event } from "@/lib/events";

function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex flex-col gap-4 rounded-none border border-white bg-[#2F355F] p-4 sm:flex-row sm:items-center sm:gap-6">
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
            Inscribirme ahora 🚀
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#788BCE]">
              <Plus className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
          </button>
          <Link
            href={{ pathname: "/event/[id]", params: { id: event.id } }}
            className="flex items-center gap-2 rounded-full bg-[#131420] py-2 pl-4 pr-2 text-sm font-medium text-[#F4F4F6]"
          >
            Ver Detalles →
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A87AB9]">
              <ArrowRight className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

type MeetupsListProps = {
  groups: { monthLabel: string; events: Event[] }[];
};

export default function MeetupsList({ groups }: MeetupsListProps) {
  return (
    <section className="flex flex-col bg-[#22253F]">
      <div className="rounded-none border-b border-white px-6 py-8">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Todos nuestros Meetups</h1>
      </div>

      <div className="flex flex-col gap-12 p-6 lg:p-8">
        {groups.map(({ monthLabel, events }) => (
          <div key={monthLabel} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white md:text-3xl">{monthLabel}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
