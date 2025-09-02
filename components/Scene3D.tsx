'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Icosahedron } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, geometry }: { position: [number, number, number], geometry: 'sphere' | 'box' | 'icosahedron' }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    icosahedron: Icosahedron
  }[geometry];

  return (
    <GeometryComponent ref={meshRef} position={position} args={[1]}>
      <meshStandardMaterial 
        color={new THREE.Color().setHSL(0.6 + position[0] * 0.1, 0.8, 0.6)}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
      />
    </GeometryComponent>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#4ecdc4" />
        
        <FloatingGeometry position={[-3, 0, 0]} geometry="sphere" />
        <FloatingGeometry position={[0, 2, -2]} geometry="box" />
        <FloatingGeometry position={[3, -1, 1]} geometry="icosahedron" />
        <FloatingGeometry position={[-1, -2, 2]} geometry="sphere" />
        <FloatingGeometry position={[2, 1, -1]} geometry="box" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
