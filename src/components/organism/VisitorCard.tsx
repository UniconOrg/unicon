"use client";

import Image from "next/image";
import { Settings } from "lucide-react";

// Barcode pattern (simulates CODE128-like bars)
function BarcodeSVG() {
  const bars = [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2];
  return (
    <div className="flex items-center justify-center gap-px h-10">
      {bars.map((width, i) => (
        <div
          key={i}
          className="bg-white h-full"
          style={{ width: width * 2 }}
        />
      ))}
    </div>
  );
}

// QR-like blocky pattern
function QRPattern() {
  const grid = [
    [1, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1],
  ];
  return (
    <div className="grid grid-cols-6 gap-0.5">
      {grid.flat().map((fill, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 ${fill ? "bg-white/80" : "bg-transparent"}`}
        />
      ))}
    </div>
  );
}

// Tech stack icons (simplified colored squares)
const techIcons = [
  { color: "bg-[#007ACC]", label: "VS Code", icon: null },
  { color: "bg-[#42B883]", label: "Vue", icon: null },
  { color: "bg-white", label: "Gear", icon: "gear" },
  { color: "bg-[#CB3837]", label: "npm", icon: null },
];

export interface VisitorCardProps {
  name?: string;
  date?: string;
  location?: string;
  year?: string;
}

export default function VisitorCard({
  name = "Rafael Zamora",
  date = "Sept. 17 18",
  location = "CDMX, MX",
  year = "2025",
}: VisitorCardProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Lanyard strap */}
      <div className="w-1 h-8 bg-gray-600 rounded-t-sm" />
      <div className="w-6 h-3 bg-gray-500 rounded-t-md border-2 border-gray-400 -mt-1" />

      {/* Badge card */}
      <div className="relative w-64 bg-gradient-to-b from-[#2d2a4a] to-[#1e1c33] rounded-xl p-4 border border-white/10 shadow-xl -mt-1">
        {/* Clip/carabiner */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-400 rounded-full border-2 border-gray-500 shadow-inner" />

        {/* Top row: QR pattern + Logo */}
        <div className="flex justify-between items-start mb-3">
          <QRPattern />
          <div className="relative w-10 h-10">
            <Image
              src="/brand/unicon-mark.png"
              alt="Unicon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-[#A87AB9] text-center mb-3 tracking-tight">
          {name}
        </h3>

        {/* Tech icons */}
        <div className="flex justify-center gap-2 mb-3">
          {techIcons.map(({ color, label, icon }, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded flex items-center justify-center ${color}`}
              title={label}
            >
              {icon === "gear" && <Settings className="w-3 h-3 text-gray-800" />}
            </div>
          ))}
        </div>

        {/* Date & Location */}
        <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/90">
          <span>Sept.</span>
          <span className="flex items-center gap-1">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white font-semibold">
              17
            </span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white font-semibold">
              18
            </span>
          </span>
          <span>{location}</span>
        </div>

        {/* Barcode */}
        <div className="mb-1">
          <BarcodeSVG />
        </div>

        {/* Year */}
        <p className="text-center text-white/80 font-medium text-sm">{year}</p>
      </div>
    </div>
  );
}
