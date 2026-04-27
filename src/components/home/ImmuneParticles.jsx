"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ImmuneParticles({ count = 1000 }) {
  const mesh = useRef();
  const light = useRef();

  // Create random positions for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const u = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 0.5;
      const x = r * Math.sin(t) * Math.cos(u);
      const y = r * Math.sin(t) * Math.sin(u);
      const z = r * Math.cos(t);
      temp.push({ x, y, z, speed: 0.005 + Math.random() * 0.01 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire group
    mesh.current.rotation.y = time * 0.1;
    mesh.current.rotation.z = time * 0.05;

    particles.forEach((particle, i) => {
      let { x, y, z, speed } = particle;
      
      // Add some orbital motion
      const s = time * speed;
      const angle = i + s;
      
      dummy.position.set(
        x + Math.sin(angle) * 0.2,
        y + Math.cos(angle) * 0.2,
        z + Math.sin(angle * 0.5) * 0.2
      );
      
      // Pulse scale
      const scale = 0.01 + Math.sin(time + i) * 0.005;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={10} intensity={2} color="#1A5F3A" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color="#1A5F3A" emissive="#1A5F3A" emissiveIntensity={0.5} transparent opacity={0.6} />
      </instancedMesh>
    </>
  );
}
