// src/app/[locale]/page.tsx
import Hero from "@/components/organism/Hero";
import CallToAction from "@/components/organism/CallToAction";
import Footer from "@/components/organism/Footer";
import ClosingSection from "@/components/organism/ClosingSection";
import EventsSection from "@/components/organism/EventsSection";
import FAQSection from "@/components/organism/FAQSection";
import GallerySection from "@/components/organism/GallerySection";
import ParticipaSection from "@/components/organism/ParticipaSection";
import QuoteSection from "@/components/organism/QuoteSection";
import SponsorsSection from "@/components/organism/SponsorsSection";
import Sidebar from "@/components/molecule/SideBar";


export default function Page() {
    return (
      <div className="flex w-full h-screen bg-primary text-white">
        {/* Sidebar fijo a la izquierda */}
        <Sidebar />
  
        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto divide-y divide-white">
          <Hero />
          <QuoteSection />
          <EventsSection />
          <SponsorsSection />
          <ParticipaSection />
          <GallerySection />
          <ClosingSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    );
  }
