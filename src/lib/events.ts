export type Event = {
  id: string;
  date: string;
  time: string;
  speakerName: string;
  speakerRole: string;
  speakerCompany: string;
  description: string;
  imageUrl: string;
  // Campos para la landing del evento
  title: string;
  fullDate: string;
  fullTime: string;
  address: string;
  monthShort: string;
  dayNum: string;
  location: string;
  /** Fecha/hora de inicio para el countdown (ISO string) */
  eventStartDate: string;
};

export const mockEvents: Event[] = [
  {
    id: "1",
    date: "Hoy",
    time: "02:00 pm",
    speakerName: "María González",
    speakerRole: "CTO",
    speakerCompany: "TechMX",
    description: "Cómo escalar startups en Latinoamérica: lecciones aprendidas y estrategias clave para el éxito",
    imageUrl: "/illustrations/hero-speaker.png",
    title: "Primera Meetup",
    fullDate: "12 de Febrero 2026",
    fullTime: "4:00 PM a 8:00 PM",
    address: "National Art Museum, C. de Tacuba 8, Centro Histórico de la Cdad",
    monthShort: "Feb",
    dayNum: "12",
    location: "CDMX, MX",
    eventStartDate: "2026-02-12T16:00:00",
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
    title: "Arquitectura a Escala",
    fullDate: "13 de Febrero 2026",
    fullTime: "10:30 AM a 12:30 PM",
    address: "WeWork Reforma, Av. Paseo de la Reforma 250",
    monthShort: "Feb",
    dayNum: "13",
    location: "CDMX, MX",
    eventStartDate: "2026-02-13T10:30:00",
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
    title: "IA Generativa",
    fullDate: "28 de Febrero 2026",
    fullTime: "4:00 PM a 6:00 PM",
    address: "Google Campus CDMX, Av. Insurgentes Sur 1458",
    monthShort: "Feb",
    dayNum: "28",
    location: "CDMX, MX",
    eventStartDate: "2026-02-28T16:00:00",
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
    title: "Product-Led Growth",
    fullDate: "12 de Febrero 2026",
    fullTime: "5:30 PM a 7:30 PM",
    address: "Rappi HQ, Av. Presidente Masaryk 111",
    monthShort: "Feb",
    dayNum: "12",
    location: "CDMX, MX",
    eventStartDate: "2026-02-12T17:30:00",
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
    title: "Sistemas Distribuidos",
    fullDate: "13 de Febrero 2026",
    fullTime: "3:00 PM a 5:00 PM",
    address: "Spotify Office, Av. Santa Fe 505",
    monthShort: "Feb",
    dayNum: "13",
    location: "CDMX, MX",
    eventStartDate: "2026-02-13T15:00:00",
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
    title: "De Idea a Unicornio",
    fullDate: "29 de Febrero 2026",
    fullTime: "11:00 AM a 1:00 PM",
    address: "CloudLatam, Polanco",
    monthShort: "Feb",
    dayNum: "29",
    location: "CDMX, MX",
    eventStartDate: "2026-02-29T11:00:00",
  },
  {
    id: "7",
    date: "Mar 15",
    time: "06:00 pm",
    speakerName: "Eric Brown",
    speakerRole: "Co-founder",
    speakerCompany: "Whiteboard",
    description: "Descripcion del evento",
    imageUrl: "/illustrations/hero-speaker.png",
    title: "Meetup Marzo",
    fullDate: "15 de Marzo 2026",
    fullTime: "6:00 PM a 8:00 PM",
    address: "WeWork Reforma",
    monthShort: "Mar",
    dayNum: "15",
    location: "CDMX, MX",
    eventStartDate: "2026-03-15T18:00:00",
  },
];

export type FitEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  // Campos para UniconFitLanding
  fullDate: string;
  fullTime: string;
  address: string;
  monthShort: string;
  dayNum: string;
  eventStartDate: string;
};

export const mockFitEvents: FitEvent[] = [
  {
    id: "1",
    title: "5K Running",
    date: "Hoy",
    time: "02:00 pm",
    location: "Parque de Chapultepec",
    fullDate: "12 de Febrero 2026",
    fullTime: "2:00 PM a 4:00 PM",
    address: "Parque de Chapultepec, Av. Paseo de la Reforma",
    monthShort: "Feb",
    dayNum: "12",
    eventStartDate: "2026-02-12T14:00:00",
  },
  {
    id: "2",
    title: "5K Running",
    date: "Hoy",
    time: "02:00 pm",
    location: "Parque de Chapultepec",
    fullDate: "12 de Febrero 2026",
    fullTime: "2:00 PM a 4:00 PM",
    address: "Parque de Chapultepec, Av. Paseo de la Reforma",
    monthShort: "Feb",
    dayNum: "12",
    eventStartDate: "2026-02-12T14:00:00",
  },
  {
    id: "3",
    title: "5K Running",
    date: "Hoy",
    time: "02:00 pm",
    location: "Parque de Chapultepec",
    fullDate: "12 de Febrero 2026",
    fullTime: "2:00 PM a 4:00 PM",
    address: "Parque de Chapultepec, Av. Paseo de la Reforma",
    monthShort: "Feb",
    dayNum: "12",
    eventStartDate: "2026-02-12T14:00:00",
  },
];

const MONTH_NAMES: Record<string, string> = {
  "01": "Enero", "02": "Febrero", "03": "Marzo", "04": "Abril", "05": "Mayo", "06": "Junio",
  "07": "Julio", "08": "Agosto", "09": "Septiembre", "10": "Octubre", "11": "Noviembre", "12": "Diciembre",
};

export type EventsByMonth = { monthLabel: string; events: Event[] }[];

export function getEventsGroupedByMonth(): EventsByMonth {
  const map = new Map<string, Event[]>();

  for (const event of mockEvents) {
    const date = new Date(event.eventStartDate);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const key = `${year}-${month}`;

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(event);
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, events]) => {
      const [year, month] = key.split("-");
      const monthLabel = `${MONTH_NAMES[month] || month} ${year}`;
      return {
        monthLabel,
        events: events.sort(
          (a, b) => new Date(a.eventStartDate).getTime() - new Date(b.eventStartDate).getTime()
        ),
      };
    });
}

export function getEventById(id: string): Event | undefined {
  return mockEvents.find((e) => e.id === id);
}

export function getFitEventById(id: string): FitEvent | undefined {
  return mockFitEvents.find((e) => e.id === id);
}
