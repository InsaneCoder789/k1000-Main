"use client";

import { Points } from "@react-three/drei";
import { useMemo } from "react";

export default function GalaxyBackground() {
  const stars = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 2000; i++) {
      positions.push(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        -Math.random() * 50
      );
    }
    return new Float32Array(positions);
  }, []);

  return (
    <Points positions={stars} stride={3}>
      <pointsMaterial
        color="#ffffff"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
