import Image from "next/image";
import CountDown from "./components/CountDown";
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
        </div>
      </main>
  );
}
