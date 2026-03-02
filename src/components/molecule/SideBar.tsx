"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Home, Ticket, MapPin, HelpCircle, Phone, User, Menu } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";

const navItems = [
  { icon: Home, hash: "hero", label: "Inicio" },
  { icon: Ticket, hash: "events", label: "Eventos" },
  { icon: MapPin, hash: "closing", label: "Ubicación" },
  { icon: HelpCircle, hash: "faq", label: "Preguntas" },
  { icon: Phone, hash: "footer", label: "Contacto" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEventPage = pathname?.startsWith("/event/");

  useEffect(() => {
    if (isEventPage) return;

    const handleScroll = () => {
      const sections = navItems.map((item) => item.hash);

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
      handleScroll();
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isEventPage]);

  const scrollToSection = (hash: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavContent = () => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = !isEventPage && activeSection === item.hash;

        if (isEventPage) {
          return (
            <Link
              key={item.hash}
              href={{ pathname: "/", hash: item.hash }}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                item.hash === "hero" ? "text-[#945ea7]" : "text-white/60 hover:text-white"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          );
        }

        return (
          <button
            key={item.hash}
            onClick={() => scrollToSection(item.hash)}
            className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
              isActive ? "text-[#945ea7]" : "text-white/60 hover:text-white"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </>
  );

  return (
    <>
      {/* Mobile: barra horizontal fija arriba */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between bg-[#22253F] px-4 border-b border-white/20 md:hidden">
        <Link href="/" className="relative h-8 w-8 shrink-0">
          <Image src="/brand/unicon-mark.png" alt="Unicon logo" fill className="object-contain" />
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-white"
          aria-label="Menú"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#22253F] bg-[#A87AB9]">
          <User className="h-5 w-5 text-white" />
        </div>
      </header>

      {/* Mobile: menú desplegable */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#22253F]/95 pt-14 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            className="flex flex-col py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <NavContent />
          </nav>
        </div>
      )}

      {/* Desktop: sidebar vertical fijo a la izquierda */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-16 flex-col items-center justify-between bg-[#22253F] py-6 border-r border-white/20 md:flex">
        <Link href="/" className="mb-6 relative w-8 h-8 block">
          <Image src="/brand/unicon-mark.png" alt="Unicon logo" fill className="object-contain" />
        </Link>

        <nav className="flex flex-col gap-6 text-white">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = !isEventPage && activeSection === item.hash;

            if (isEventPage) {
              return (
                <Link
                  key={item.hash}
                  href={{ pathname: "/", hash: item.hash }}
                  className={`w-6 h-6 transition-colors ${
                    item.hash === "hero" ? "text-[#945ea7]" : "text-white/60 hover:text-white"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            }

            return (
              <button
                key={item.hash}
                onClick={() => scrollToSection(item.hash)}
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

        <div className="mt-6">
          <User className="w-8 h-8 p-1 rounded-full bg-[#788BCE] text-white" />
        </div>
      </aside>
    </>
  );
}
