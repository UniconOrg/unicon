'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const AnimatedCamera: React.FC<{ fov: number }> = ({ fov }) => {
  const { camera } = useThree()
  const startTime = useRef(performance.now())

  useFrame(() => {
    const elapsed = (performance.now() - startTime.current) / 1000
    const cycleTime = 20
    const t = (elapsed % cycleTime) / cycleTime

    const displacementX = Math.sin(t * Math.PI * 2) * 0.5
    const displacementZ = Math.cos(t * Math.PI * 2) * 5

    camera.position.x = displacementX
    camera.position.z = 10 + displacementZ

    // Solo modificamos el FOV, sin mover la cámara en Y
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = fov
      camera.updateProjectionMatrix()
    }
  })

  return null
}

const BackGrid: React.FC = () => {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x000000, 0.01)
  }, [scene])

  return (
    <mesh position={[0, -1, -8]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[80, 80, 128, 128]} />
      <meshStandardMaterial
        color={0xe3d5e9}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const GridBackground: React.FC = () => {
  const [fov, setFov] = useState(70)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newFov = 70 + Math.min(scrollY * 0.2, 200) // Limita el FOV
      setFov(newFov)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [5, 0, 10], fov }}>
        <ambientLight intensity={0.5} />
        <AnimatedCamera fov={fov} />
        <BackGrid />
      </Canvas>
    </div>
  )
}

export default GridBackground
