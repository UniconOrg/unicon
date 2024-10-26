import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import './GridBackgroud.css';

const AnimatedCamera: React.FC<{ fov: number }> = () => {
    const { camera } = useThree();
    const startTime = useRef<number>(performance.now());

    // useFrame se llama en cada frame para animar la cámara
    useFrame(() => {
        const elapsed = (performance.now() - startTime.current) / 1000; // Convertir a segundos
        const cycleTime = 20; // Duración del ciclo completo (5 segundos)

        // Calcular la fracción del ciclo (entre 0 y 1)
        const t = (elapsed % cycleTime) / cycleTime;

        // Animación de izquierda a derecha y luego de vuelta
        const displacementX = Math.sin(t * Math.PI * 2) * (100 / 2 / 100);
        const displacementZ = Math.cos(t * Math.PI * 2) * 5;

        camera.position.x = displacementX;
        camera.position.z = 10 + displacementZ;

        if (camera instanceof THREE.PerspectiveCamera) {
            camera.fov = 70 + Math.abs(scrollY * 0.2);  // Actualizamos el fov de la cámara
            camera.updateProjectionMatrix();  // Actualizamos la proyección después del cambio
        }

    });

    return null;
};

const BackGrid: React.FC = () => {
    const { scene } = useThree();

    useEffect(() => {
        scene.fog = new THREE.FogExp2(0x000000, 0.01);
    }, [scene]);

    return (
        <mesh position={[0, -1, -8]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[80, 80, 128, 128]} />
            <meshStandardMaterial
                color="#d1bce6"
                wireframe
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

const GridBackground: React.FC = () => {
    const [fov, setFov] = useState(179);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 180) {
                const newFov = 100 + (scrollY * 0.5);
                setFov(newFov);
            } else {
                setFov(270);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='grid-background'>
            <Canvas camera={{ position: [5, 0, 10], fov: fov }}>
                <ambientLight intensity={0.5} />
                <AnimatedCamera fov={fov} />
                <BackGrid />
            </Canvas>
        </div>
    );
};

export default GridBackground;
