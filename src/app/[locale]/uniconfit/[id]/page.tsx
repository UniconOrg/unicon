import { notFound } from "next/navigation";
import Sidebar from "@/components/molecule/SideBar";
import UniconFitLanding from "@/components/organism/UniconFitLanding";
import Footer from "@/components/organism/Footer";
import { getFitEventById } from "@/lib/events";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UniconFitPage({ params }: Props) {
  const { id } = await params;
  const event = getFitEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex w-full min-h-screen bg-primary text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto divide-y divide-white pt-14 md:pt-0 md:ml-16">
        <div id="uniconfit-landing">
          <UniconFitLanding event={event} />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}
