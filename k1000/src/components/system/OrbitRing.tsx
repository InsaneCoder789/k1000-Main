"use client";

import { Line } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function OrbitRing({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          Math.cos(theta) * radius,
          0,
          Math.sin(theta) * radius
        )
      );
    }

    return pts;
  }, [radius]);

  return (
    <Line
      points={points}
      color="#ffffff"
      lineWidth={0.3}
      transparent
      opacity={0.15}
    />
  );
}
