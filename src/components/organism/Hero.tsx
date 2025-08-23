// src/components/Hero.tsx
import Image from "next/image";
import EventHeader from "../molecule/EventHeader";
import IntroBlock from "../molecule/IntroBlock";
import CallToActionLogin from "../molecule/CallToActionLogin";
import VisionGrid from "../molecule/VisionGrid";

// Ejemplo
export default function Hero() {
    return (
        <section className="w-full  min-h-dvh bg-primary p-3">
            <div className="grid grid-cols-5 grid-rows-4 min-h-dvh">
                <div className="col-span-3 flex items-center border-1 border-white">
                    <EventHeader />
                </div>
                <div className="col-span-3 row-span-3 col-start-1 row-start-2 border-1 border-white">
                    <IntroBlock />
                </div>
                <div className="col-span-2 row-span-2 col-start-4 row-start-1 h-full border-1 border-white">
                    <CallToActionLogin />
                </div>
                <div className="col-span-2 row-span-2 col-start-4 row-start-3 border-1 border-white">
                    <VisionGrid />
                </div>
            </div>
        </section>
    );
}
