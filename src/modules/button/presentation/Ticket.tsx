import React, { useRef, useEffect, useState } from 'react';
import './Ticket.css';

interface TicketProps {
    children?: React.ReactNode;
}

const Ticket: React.FC<TicketProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const redContainerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Detectar si es un dispositivo móvil
        setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const container = containerRef.current;
        const redContainer = redContainerRef.current;

        if (!container || !redContainer) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (isMobile) return; // No procesar en móviles

            const { left, top, width, height } = container.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            const centerX = width / 2;
            const centerY = height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            const tiltX = -deltaY * 17;
            const tiltY = deltaX * 17;
            const scale = 0.95 + Math.min(Math.abs(deltaX), Math.abs(deltaY)) * 0.1;

            redContainer.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
        };

        const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
            if (!isMobile) return; // Solo procesar en móviles

            const tiltX = e.beta ? e.beta / 3 : 0; // Dividimos por 3 para suavizar el efecto
            const tiltY = e.gamma ? e.gamma / 3 : 0;
            const scale = 0.95 + (Math.abs(tiltX) + Math.abs(tiltY)) / 180 * 0.1;

            redContainer.style.transform = `rotateX(${-tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
        };

        const handleMouseLeave = () => {
            redContainer.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        };

        if (isMobile) {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
        } else {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (isMobile) {
                window.removeEventListener('deviceorientation', handleDeviceOrientation);
            } else {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isMobile]);

    return (
        <div ref={containerRef} className="container-ticket">
            <div ref={redContainerRef} className="red-container">
                {children || 'Ticket Content'}
            </div>
        </div>
    );
};

export default Ticket;