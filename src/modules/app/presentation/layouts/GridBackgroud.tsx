import React, { useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

import './GridBackgroud.css'

const AnimatedCamera: React.FC<{ fov: number }> = ({ fov }) => {
    const { camera } = useThree();

    // Usamos useFrame para animar la cámara en cada frame
    useFrame(() => {
        camera.fov = 70 + Math.abs(scrollY * 0.2);  // Actualizamos el fov de la cámara
        camera.updateProjectionMatrix();  // Actualizamos la proyección después del cambio
    });

    return null;
};

const BackGrid: React.FC = () => {
    const { scene } = useThree();

    // Efecto de niebla aplicado a la escena
    useEffect(() => {
        scene.fog = new THREE.FogExp2(0x000000, 0.01); // Ajusta el color de la niebla y la densidad
    }, [scene]);

    return (
        <mesh position={[0, -1, -8]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[80, 80, 128, 128]} />
            <meshStandardMaterial
                color="#d1bce6"
                wireframe
                side={THREE.DoubleSide} // Para que sea visible desde ambos lados
            />
        </mesh>
    );
};

const GridBackground: React.FC = () => {

    const [fov, setFov] = useState(179); // Valor inicial del fov

    // Efecto que actualiza el fov según la posición del scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log(scrollY);
            if (scrollY < 180) {

                const newFov = 100 + (scrollY * 0.5); // Ajustamos el fov en función del scrollu
                setFov(newFov);
            }else{
                setFov(270);

            }
        };

        // Agrega el listener de scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup para eliminar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='grid-background'>

            <Canvas camera={{ position: [5, 0, 10], fov: fov }}>
                {/* Luz ambiental */}
                <ambientLight intensity={0.5} />

                <AnimatedCamera fov={fov} />

                {/* Plano de la cuadrícula */}
                <BackGrid />

                {/* Texto flotante */}

            </Canvas>
        </div>
    );
};

export default GridBackground;
