"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CTAButton from "@/components/atom/CTAButton";

const allImages = [
  "/illustrations/unicon_1.png",
  "/illustrations/hero-speaker.png",
];

function GalleryImage({ index }: { index: number }) {
  const [currentImage, setCurrentImage] = useState(allImages[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Intervalo aleatorio entre 5 y 10 segundos para cada imagen
    const baseDelay = 5000 + Math.random() * 5000;
    const offset = index * 1000; // Offset para que no cambien todas al mismo tiempo

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentImage((prev) => {
          const otherImages = allImages.filter((img) => img !== prev);
          return otherImages[Math.floor(Math.random() * otherImages.length)];
        });
        setIsVisible(true);
      }, 800);
    }, baseDelay + offset);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={currentImage}
        alt={`UniCon preview ${index + 1}`}
        fill
        className={`object-cover transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="border border-white text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-8 md:px-16 lg:px-20">
        <h2 className="text-3xl font-bold md:text-4xl">Un vistazo a UniCon</h2>
        <CTAButton>Información de contacto</CTAButton>
      </div>

      {/* Grid de imágenes */}
      <div className="flex flex-col gap-4 px-8 pb-8 md:px-16 lg:px-20">
        {/* Fila 1: 3 imágenes */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <GalleryImage index={0} />
          <GalleryImage index={1} />
          <GalleryImage index={2} />
        </div>

        {/* Fila 2: 2 imágenes centradas */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <div className="md:col-start-2 md:col-span-2">
            <GalleryImage index={3} />
          </div>
          <div className="md:col-span-2">
            <GalleryImage index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
