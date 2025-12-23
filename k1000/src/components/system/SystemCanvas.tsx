"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Core from "./Core";
import DomainPlanet from "./DomainPlanet";
import GalaxyBackground from "./GalaxyBackground";
import OrbitRing from "./OrbitRing";
import CameraRig from "./CameraRig";
import DomainHoloPanel from "../ui/DomainHoloPanel";
import { domains } from "../../data/domain";

/**
 * Fixed orbital radii — guaranteed to stay on screen
 */
const ORBITS = [2.0, 2.6, 3.2, 3.9, 4.6, 5.4];

export default function SystemCanvas() {
  const [activeDomainKey, setActiveDomainKey] = useState<string | null>(null);
  const [focusPos, setFocusPos] = useState<THREE.Vector3 | null>(null);

  const activeDomain = domains.find(d => d.key === activeDomainKey) ?? null;

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* ================= LOGOS ================= */}
      <img
        src="/k1000-logo.png"
        alt="K-1000"
        className="absolute top-4 left-4 h-12 z-20 select-none"
        draggable={false}
      />

      <img
        src="/kiit-logo.png"
        alt="KIIT"
        className="absolute top-4 right-4 h-14 z-20 select-none"
        draggable={false}
      />

      {/* ================= 3D CANVAS ================= */}
      <Canvas
        camera={{ position: [0, 4.5, 9], fov: 50 }}
        dpr={[1, 1.5]}
      >
        {/* Background */}
        <GalaxyBackground />

        {/* Lighting */}
        <ambientLight intensity={0.45} />
        <pointLight position={[0, 0, 0]} intensity={7} />
        <directionalLight position={[6, 6, -6]} intensity={0.8} />

        {/* Camera focus (safe even if null) */}
        <CameraRig target={focusPos} />

        {/* ================= SOLAR SYSTEM ================= */}
        <group rotation={[0.35, 0.25, 0]}>

          {/* Sun */}
          <Core onToggle={() => {}} />

          {/* Orbit rings */}
          {ORBITS.map(radius => (
            <OrbitRing key={radius} radius={radius} />
          ))}

          {/* Domain planets */}
          {domains.map((domain, index) => (
            <DomainPlanet
              key={domain.key}
              name={domain.key}
              radius={ORBITS[index]}
              size={0.3}
              speed={0.25 + index * 0.03}
              baseColor={domain.baseColor ?? "#2a4fff"}
              accentColor={domain.accentColor ?? "#6bbcff"}
              onClick={(key) => {
                // SAFE: only one argument
                setActiveDomainKey(key);
                setFocusPos(null); // no camera snap yet
              }}
            />
          ))}
        </group>

        {/* Controls locked for cinematic feel */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* ================= INFO PANEL ================= */}
      {activeDomain && (
        <DomainHoloPanel
          domain={activeDomain}
          onClose={() => {
            setActiveDomainKey(null);
            setFocusPos(null);
          }}
        />
      )}
    </div>
  );
}
