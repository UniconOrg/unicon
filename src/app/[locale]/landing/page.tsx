import Sidebar from "@/components/molecule/SideBar";
import Footer from "@/components/organism/Footer";
import LandingContent from "@/components/organism/LandingContent";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#F4F4F6]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto pt-14 md:ml-16 md:pt-0">
        <LandingContent />
        <Footer />
      </main>
    </div>
  );
}
