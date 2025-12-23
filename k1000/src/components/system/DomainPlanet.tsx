"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type Props = {
  name: string;
  radius: number;
  size: number;
  speed: number;
  baseColor: THREE.ColorRepresentation;
  accentColor: THREE.ColorRepresentation;
  onClick: (name: string) => void;
};

export default function DomainPlanet({
  name,
  radius,
  size,
  speed,
  baseColor,
  accentColor,
  onClick,
}: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // 🔑 persistent orbital phase (never resets)
  const phase = useRef(Math.random() * Math.PI * 2);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + phase.current;

    if (meshRef.current) {
      const xRadius = radius;
      const zRadius = radius * 0.65; // elliptical orbit

      meshRef.current.position.x = Math.cos(t) * xRadius;
      meshRef.current.position.z = Math.sin(t) * zRadius;

      // slow axial motion = weight
      meshRef.current.rotation.y += 0.0018;
      meshRef.current.rotation.x += 0.0006;
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
      materialRef.current.uniforms.uHover.value = hovered ? 1.0 : 0.0;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[0.35, phase.current, 0.25]} // axial tilt
      scale={hovered ? 1.12 : 1}
      onClick={() => onClick(name)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 96, 96]} />

      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
          uHover: { value: 0 },
          uBaseColor: { value: new THREE.Color(baseColor) },
          uAccentColor: { value: new THREE.Color(accentColor) },
        }}
        vertexShader={`
          varying vec3 vNormal;

          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform float uHover;
          uniform vec3 uBaseColor;
          uniform vec3 uAccentColor;

          varying vec3 vNormal;

          float noise(vec3 p) {
            return sin(p.x * 6.0) *
                   sin(p.y * 6.0) *
                   sin(p.z * 6.0);
          }

          void main() {
            // multi-frequency terrain
            float n1 = noise(vNormal * 2.5 + uTime * 0.05);
            float n2 = noise(vNormal * 6.0);

            vec3 terrain = mix(
              uBaseColor,
              uAccentColor,
              n1 * 0.5 + 0.5
            );

            terrain = mix(terrain, uAccentColor * 1.15, n2 * 0.3);

            // fake sun lighting (terminator)
            vec3 lightDir = normalize(vec3(0.4, 0.6, 1.0));
            float light = clamp(dot(vNormal, lightDir), 0.08, 1.0);

            // atmosphere rim
            float rim = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);

            vec3 color = terrain * light;
            color += rim * 0.18;
            color += uHover * 0.2;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}
