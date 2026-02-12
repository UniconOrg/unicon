"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuándo y dónde será el evento?",
    answer: "El evento se llevará a cabo en el National Art Museum, C. de Tacuba 8, Centro Histórico de la Ciudad de México. Las fechas específicas serán anunciadas próximamente.",
  },
  {
    question: "¿Cuál es el costo de la entrada?",
    answer: "Contamos con diferentes tipos de entradas según el acceso que desees. Consulta nuestra página de tickets para conocer los precios y beneficios de cada opción.",
  },
  {
    question: "¿Cómo puedo registrarme?",
    answer: "Puedes registrarte directamente en nuestra página web haciendo clic en el botón 'Registrate' o 'Adquiere tu entrada'. El proceso es rápido y sencillo.",
  },
  {
    question: "¿Habrá opciones de pago en el evento?",
    answer: "Sí, aceptamos múltiples formas de pago incluyendo tarjetas de crédito, débito y transferencias bancarias. También habrá opciones de pago en efectivo en el lugar.",
  },
  {
    question: "¿De qué serán las conferencias?",
    answer: "Las conferencias abarcarán temas de tecnología, innovación, inteligencia artificial, desarrollo de software, emprendimiento y el futuro de la web.",
  },
  {
    question: "¿Habrá streaming en vivo?",
    answer: "Sí, transmitiremos las conferencias principales en vivo para quienes no puedan asistir presencialmente. Los detalles de acceso se compartirán con los registrados.",
  },
  {
    question: "¿Se proporcionará material de apoyo?",
    answer: "Todos los asistentes recibirán acceso a las presentaciones y materiales complementarios después del evento.",
  },
  {
    question: "¿Habrá actividades de networking?",
    answer: "Por supuesto, habrá espacios dedicados para networking, además de actividades especiales para conectar con otros profesionales y speakers.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[4px] border-white bg-[#788BCE] text-white transition hover:bg-[#2563eb]">
          {isOpen ? (
            <Minus className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Plus className="h-6 w-6" strokeWidth={2} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-base text-white/70">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="border border-white text-white">
      {/* Header */}
      <div className="px-8 py-16 md:px-16 lg:px-20">
        <h2 className="text-4xl font-bold md:text-5xl">¿Aún tienes preguntas?</h2>
        <p className="mt-4 text-lg text-white/70">Estamos aquí para ayudarte.</p>
      </div>

      {/* FAQs Grid */}
      <div className="grid grid-cols-1 border-t border-white md:grid-cols-2">
        {/* Columna izquierda */}
        <div className="border-r border-white px-8 md:px-16 lg:px-20">
          {leftFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Columna derecha */}
        <div className="px-8 md:px-16 lg:px-20">
          {rightFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
