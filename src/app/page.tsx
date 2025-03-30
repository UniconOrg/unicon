import Image from "next/image";
import CountDown from "./home/components/CountDown";
export default function Home() {
  return (
    <main className="">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Image
          src="/unicon.png"
          alt="Logo"
          width={800}
          height={800}
          className="w-1/2 object-contain"
          quality={100}  // Opcional: para mayor calidad
        />
        <CountDown />
        <div className="flex flex-col items-center justify-center mt-15">
          <p className="text-4xl m-5 text-white">Un faro de inspiración y comunidad para los visionarios del mañana.</p>
          <p className="text-3xl m-5 text-white italic">Boletos disponibles proximamente.</p>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Unicon</h1>
        <p className="text-gray-600">La mejor comunidad de desarrolladores</p>
        <p className="text-gray-600">¡Pronto disponible!</p>
        <p className="text-gray-600">¡Síguenos en nuestras redes sociales!</p>
      </div>

    </main>
  );
}
