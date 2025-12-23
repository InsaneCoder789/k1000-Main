"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SunSurface() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[1.0, 64, 64]} />
      <shaderMaterial
        ref={matRef}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec3 vNormal;

          float plasma(vec3 p) {
            return sin(p.x * 6.0 + uTime) *
                   sin(p.y * 6.0 - uTime) *
                   sin(p.z * 6.0);
          }

          void main() {
            float n = plasma(vNormal) * 0.4;
            vec3 base = vec3(1.0, 0.55, 0.15);
            vec3 hot  = vec3(1.0, 0.85, 0.4);
            vec3 color = mix(base, hot, n + 0.6);
            gl_FragColor = vec4(color * 1.4, 1.0);
          }
        `}
      />
    </mesh>
  );
}

function SunCorona() {
  return (
    <mesh>
      <sphereGeometry args={[0.75, 64, 64]} />
      <meshBasicMaterial
        color="#ff9933"
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function Core({ onToggle }: { onToggle: () => void }) {
  return (
    <group onClick={onToggle}>
      <SunSurface />
      <SunCorona />
    </group>
  );
}
