// src/app/[locale]/page.tsx
import Sidebar from "@/components/molecule/SideBar";
import { homeSections } from "@/sections/homeSections";

export default function Page() {
  return (
    <div className="flex w-full h-screen bg-primary text-white">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 overflow-y-auto divide-y divide-white">
        {/* Renderizar las secciones preconfiguradas para evitar importarlas como componentes */}
        {homeSections.map(({ key, node }) => (
          <div key={key} id={key}>
            {node}
          </div>
        ))}
      </main>
    </div>
  );
}
