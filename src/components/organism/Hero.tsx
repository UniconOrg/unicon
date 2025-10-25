// src/components/Hero.tsx
import EventHeader from "../molecule/EventHeader";
import IntroBlock from "../molecule/IntroBlock";
import CallToActionLogin from "../molecule/CallToActionLogin";
import VisionGrid from "../molecule/VisionGrid";

export default function Hero() {
  return (
    <section className="w-full bg-primary">
      <div
        className="
          flex flex-col min-h-dvh
          md:grid md:grid-cols-5 md:grid-rows-4
        "
      >
        {/* EventHeader */}
        <div className="flex items-center border border-white md:col-span-3">
          <EventHeader />
        </div>

        {/* IntroBlock */}
        <div className="border border-white md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-2">
          <IntroBlock />
        </div>

        {/* CallToActionLogin */}
        <div className="border border-white md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-1">
          <CallToActionLogin />
        </div>

        {/* VisionGrid */}
        <div className="border border-white md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-3">
          <VisionGrid />
        </div>
      </div>
    </section>
  );
}
