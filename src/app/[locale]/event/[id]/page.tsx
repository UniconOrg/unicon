import { notFound } from "next/navigation";
import Sidebar from "@/components/molecule/SideBar";
import EventLanding from "@/components/organism/EventLanding";
import Footer from "@/components/organism/Footer";
import { getEventById } from "@/lib/events";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex w-full min-h-screen bg-primary text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto divide-y divide-white pt-14 md:ml-16 md:pt-0">
        <div id="event-landing">
          <EventLanding event={event} />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}
