"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface CallToActionCardProps {
  title: string;
  href: string;
  bgColor: string;
  imageUrl?: string;
  imageAlt?: string;
  /** true = CTA izquierda, imagen derecha; false = imagen izquierda, CTA derecha */
  reverse?: boolean;
  className?: string;
}

function ImageBlock({ imageUrl, imageAlt }: { imageUrl: string; imageAlt: string }) {
  return (
    <div className="relative hidden h-[200px] w-1/2 shrink-0 border border-white md:block md:h-[250px]">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 0px, 250px"
      />
      <div className="absolute inset-0 bg-[#4259A8]/40" />
    </div>
  );
}

function CardBlock({
  title,
  bgColor,
}: {
  title: string;
  bgColor: string;
}) {
  return (
    <div className="flex min-h-[200px] flex-1 p-3 md:min-h-[250px]">
      <div
        className="relative flex min-h-0 w-full flex-1 flex-col justify-between p-4 text-[#F4F4F6] transition group-hover:opacity-95 md:p-6"
        style={{ backgroundColor: bgColor }}
      >
        <span className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-[#F1F1F3] text-[#131420] transition group-hover:bg-white md:right-4 md:top-4">
          <ArrowRight className="h-6 w-6" strokeWidth={2} />
        </span>
        <h3 className="max-w-[200px] text-2xl font-semibold leading-tight md:text-3xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function CallToActionCard({
  title,
  href,
  bgColor,
  imageUrl = "/brand/unicon-mark.png",
  imageAlt = "Unicon",
  reverse = false,
  className = "",
}: CallToActionCardProps) {
  return (
    <a
      href={href}
      className={`group flex min-h-[200px] overflow-hidden md:min-h-[250px] ${className}`}
    >
      {reverse ? (
        <>
          <CardBlock title={title} bgColor={bgColor} />
          <ImageBlock imageUrl={imageUrl} imageAlt={imageAlt} />
        </>
      ) : (
        <>
          <ImageBlock imageUrl={imageUrl} imageAlt={imageAlt} />
          <CardBlock title={title} bgColor={bgColor} />
        </>
      )}
    </a>
  );
}
