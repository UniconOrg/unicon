"use client";

import { useState, useEffect } from "react";
import { Home, Ticket, MapPin, HelpCircle, Phone, User } from "lucide-react";

const navItems = [
  { icon: Home, href: "#hero", label: "Inicio" },
  { icon: Ticket, href: "#events", label: "Eventos" },
  { icon: MapPin, href: "#closing", label: "Ubicación" },
  { icon: HelpCircle, href: "#faq", label: "Preguntas" },
  { icon: Phone, href: "#footer", label: "Contacto" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="w-16 h-full bg-[#22253F] flex flex-col items-center justify-between py-6 border-r border-white/20">
      {/* Logo */}
      <div className="mb-6">
        <img src="/brand/unicon-mark.png" alt="Unicon logo" className="w-8 h-8" />
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-6 text-white">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace("#", "");
          
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`w-6 h-6 transition-colors ${
                isActive ? "text-[#945ea7]" : "text-white/60 hover:text-white"
              }`}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </nav>

      {/* Usuario */}
      <div className="mt-6">
        <User className="w-8 h-8 p-1 rounded-full bg-[#788BCE] text-white" />
      </div>
    </aside>
  );
}
