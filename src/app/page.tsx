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

      <div className="w-full flex justify-center items-center gap-8 p-8">
        <div className="max-w-2xl p-8 border border-gray-200 rounded-lg shadow-gray-100 shadow-md flex flex-col items-center text-center backdrop-blur-md bg-opacity-30">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">Mision</h5>
          <p className="mb-6 font-normal text-gray-100 dark:text-gray-400">Crear un ambiente inclusivo, divertido y motivador donde jóvenes apasionados por la tecnología puedan compartir, aprender de diversas experiencias, y formar redes de colaboración para impulsar proyectos innovadores, con el apoyo de guías con experiencia que los ayuden a encontrar su camino hacia el éxito.</p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 p-8">
        <div className="w-full md:max-w-sm h-64 p-8 border border-gray-200 rounded-lg shadow-gray-100 shadow-md flex flex-col items-center text-center backdrop-blur-md bg-opacity-30">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">Quiero ser Speaker</h5>
          <p className="mb-6 font-normal text-gray-100 dark:text-gray-400">Comparte tu conocimiento en nuestro evento.</p>
          <a href="#" className="mt-auto inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-purple-900 rounded-lg hover:border-purple-400 hover:border-2 border-2 border-transparent">
        Me gustaria ser Speaker
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
          </a>
        </div>

        <div className="w-full md:max-w-sm h-64 p-8 border border-gray-200 rounded-lg shadow-gray-100 shadow-md flex flex-col items-center text-center backdrop-blur-md bg-opacity-30">
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white mb-8">Quiero ser Sponsor</h5>
          <div className="space-y-12">
        <p className="font-normal text-gray-100 dark:text-gray-400">Apoya nuestro evento y gana visibilidad.</p>
        <p className="font-normal text-gray-100 dark:text-gray-400">Envianos un correo a soporte@unicon.mx</p>
          </div>
        </div>
      </div>


    </main>
  );
}
