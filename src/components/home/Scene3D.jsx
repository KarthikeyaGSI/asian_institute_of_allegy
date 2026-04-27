"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import ImmuneParticles from "./ImmuneParticles";

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <Float
        speed={2} 
        rotationIntensity={0.5} 
        floatIntensity={0.5} 
      >
        <ImmuneParticles count={800} />
      </Float>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
