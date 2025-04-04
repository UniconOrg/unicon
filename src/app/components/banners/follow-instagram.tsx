"use client";

import React, { useState } from 'react';

const BannerFollowInstagram: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsClosing(true);
    // La animación dura 300ms y luego se oculta el componente
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return (
    <div
      className={`relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 transition-transform duration-300 ${
        isClosing ? 'translate-y-full' : ''
      }`}
    >
      <div
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-577/310 w-[36.0625rem] bg-gradient-to-r from-[#ff3a8c] to-[#5d51ff] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        ></div>
      </div>
      <div
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-577/310 w-[36.0625rem] bg-gradient-to-r from-[#ff5da1] to-[#6055ff] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        ></div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-black">
          <strong className="font-semibold">¡Síguenos en Instagram!</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline size-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          No te pierdas ninguna novedad de nuestro evento.
        </p>
        <a
          href="https://www.instagram.com/unicon.hub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-pink-600 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          UniconHub <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={handleClose}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Cerrar</span>
          <svg
            className="size-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BannerFollowInstagram;

