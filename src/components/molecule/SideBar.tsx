import { Home, Ticket, MapPin, HelpCircle, Phone, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-16 h-full bg-[#22253F] flex flex-col items-center justify-between py-6 border-r border-white/20">
      {/* Logo */}
      <div className="mb-6">
        <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-6 text-white">
        <Home className="w-6 h-6 text-accent" />
        <Ticket className="w-6 h-6" />
        <MapPin className="w-6 h-6" />
        <HelpCircle className="w-6 h-6" />
        <Phone className="w-6 h-6" />
      </nav>

      {/* Usuario */}
      <div className="mt-6">
        <User className="w-8 h-8 p-1 rounded-full bg-accent text-white" />
      </div>
    </aside>
  );
}
