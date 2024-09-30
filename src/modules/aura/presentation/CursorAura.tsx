import React, { useEffect, useState } from 'react';
import './CursorAura.css';

interface CursorPosition {
    x: number;
    y: number;
}

const CursorAura: React.FC = () => {
    const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorPos({ 
                x: event.clientX + window.scrollX, // Ajustar la posición x considerando el scroll
                y: event.clientY + window.scrollY  // Ajustar la posición y considerando el scroll
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const deltaX = 100; // Mitad del ancho de la aura
    const deltaY = 100;

    return (
        <div
            className="cursor-aura"
            style={{
                width: `${deltaX * 2}px`, // Ajusta el tamaño del aura
                height: `${deltaY * 2}px`, // Ajusta el tamaño del aura
                left: `${cursorPos.x - deltaX}px`, // Centrar en el cursor
                top: `${cursorPos.y - deltaY}px`,   // Centrar en el cursor
                position: 'absolute',
                pointerEvents: 'none',
            }}
        />
    );
};

export default CursorAura;