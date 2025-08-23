// src/components/Hero.tsx
import Image from "next/image";

// Ejemplo
export default function Hero() {
    return (
        <section className="w-full  min-h-dvh bg-primary p-3">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 bg-primary h-dvh ">
                <div className="col-span-3 row-span-2 bg-red-500 opacity-10">1</div>
                <div className="col-span-3 row-span-3 col-start-1 row-start-3 bg-blue-500 opacity-50">2</div>
                <div className="col-span-2 row-span-3 col-start-4 row-start-1 bg-green-500 opacity-50">3</div>
                <div className="col-start-4 row-start-4 bg-yellow-500 opacity-50">4</div>
                <div className="col-start-5 row-start-4 bg-purple-500 opacity-50">5</div>
                <div className="col-start-4 row-start-5 bg-orange-500 opacity-50">6</div>
                <div className="col-start-5 row-start-5 bg-pink-500 opacity-50">7</div>
            </div>
        </section>
    );
}
