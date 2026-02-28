import Sidebar from "@/components/molecule/SideBar";
import MeetupsList from "@/components/organism/MeetupsList";
import Footer from "@/components/organism/Footer";
import { getEventsGroupedByMonth } from "@/lib/events";

export default function MeetupsPage() {
  const groups = getEventsGroupedByMonth();

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#22253F] text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto pt-14 md:ml-16 md:pt-0">
        <MeetupsList groups={groups} />
        <Footer />
      </main>
    </div>
  );
}
