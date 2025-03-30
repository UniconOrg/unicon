"use client";

import React, { useEffect, useRef } from 'react';
import './AppBackground.css';

const AppBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createRipple = (x: number, y: number) => {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Tamaño aleatorio para las gotas
            const size = Math.random() * 200 + 100; // Entre 50px y 150px
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            container.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 4000);
        };

        const addRandomRipple = () => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createRipple(x, y);
        };

        const interval = setInterval(addRandomRipple, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="app-background">
            <div className="gradient-layer gradient-layer-1"></div>
            <div className="gradient-layer gradient-layer-2"></div>
        </div>
    );
};

export default AppBackground;