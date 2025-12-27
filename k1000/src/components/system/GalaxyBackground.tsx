"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <StarField />
        <Preload all />
      </Canvas>
    </div>
  );
}

function StarField() {
  const stars = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      points[i * 3] = (Math.random() - 0.5) * 100;
      points[i * 3 + 1] = (Math.random() - 0.5) * 100;
      points[i * 3 + 2] = -Math.random() * 50;
    }
    return points;
  }, []);

  return (
    <Points positions={stars} stride={3}>
      <PointMaterial
        color="#00f7ff"
        size={0.07}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </Points>
  );
}