import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function VisionGrid() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full">
            {/* 1: Imagen */}
            <div className="relative">
                <Image
                    src="/image.png"
                    alt="Speaker"
                    fill
                    className="object-cover"
                />
            </div>

            {/* 2: vacío o placeholder */}
            <div className="bg-primary"></div>

            {/* 3: vacío o placeholder */}
            <div className="bg-primary"></div>

            {/* 4: CTA con grid background */}
            <div className="relative bg-primary text-white p-4">
                {/* Cuadriculado */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 border border-white/30">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="border border-white/10"></div>
                    ))}
                </div>

                {/* Contenido */}
                <div className="relative flex flex-col h-full justify-between pb-6">
                    <button className="w-15 h-15 flex items-center justify-center rounded-full border-6 border-white bg-[#788BCE] hover:bg-[#2563eb] transition">
                        <ArrowRight className="w-15 h-15 text-white" strokeWidth={2} />
                    </button>
                    
                    <p className="text-lg font-semibold">Se visionario</p>
                </div>

            </div>
        </div>
    );
}
