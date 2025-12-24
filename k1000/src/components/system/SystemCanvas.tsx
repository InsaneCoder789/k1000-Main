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

const ORBITS = [2.0, 2.6, 3.2, 3.9, 4.6, 5.4];

export default function SystemCanvas() {
  const [activeDomainKey, setActiveDomainKey] = useState<string | null>(null);
  const [focusPos, setFocusPos] = useState<THREE.Vector3 | null>(null);

  const activeDomain = domains.find(d => d.key === activeDomainKey) ?? null;

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* CORNER LOGOS */}
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

      {/* ================= HUD NAVBAR (COMPACT) ================= */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
        <div
          className="
            relative flex items-center gap-8
            px-8 py-2.5 rounded-full
            backdrop-blur-2xl bg-white/[0.045]
            border border-white/10
            shadow-[0_0_70px_rgba(0,200,255,0.12)]
          "
        >
          {/* ENERGY GLOW */}
          <div
            className="
              absolute inset-0 rounded-full pointer-events-none
              bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-400/10
              blur-xl opacity-40
            "
          />

          {/* NAV ITEMS */}
          <nav className="relative flex items-center gap-8">
            {[
              "Home",
              "About",
              "Benefits",
              "Branches",
              "Departments",
              "Apply",
              "Contact",
            ].map(label => (
              <button
                key={label}
                className="
                  group relative
                  text-[11px] uppercase tracking-[0.26em]
                  text-white/70
                  transition-all duration-300
                  hover:text-cyan-300
                  active:scale-[0.96]
                "
              >
                <span className="relative z-10">{label}</span>

                {/* UNDERLINE */}
                <span
                  className="
                    absolute left-1/2 -bottom-2 h-[1px] w-0
                    bg-cyan-400
                    transition-all duration-300
                    group-hover:w-full
                    group-hover:left-0
                    opacity-70
                  "
                />

                {/* TOUCH GLOW */}
                <span
                  className="
                    absolute inset-0 rounded-md
                    bg-cyan-400/10
                    opacity-0 blur-md
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= 3D CANVAS ================= */}
      <Canvas
        camera={{ position: [0, 4.5, 9], fov: 50 }}
        dpr={[1, 1.5]}
      >
        <GalaxyBackground />

        <ambientLight intensity={0.45} />
        <pointLight position={[0, 0, 0]} intensity={7} />
        <directionalLight position={[6, 6, -6]} intensity={0.8} />

        <CameraRig target={focusPos} />

        <group rotation={[0.35, 0.25, 0]}>
          <Core onToggle={() => {}} />

          {ORBITS.map(radius => (
            <OrbitRing key={radius} radius={radius} />
          ))}

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
                setActiveDomainKey(key);
                setFocusPos(null);
              }}
            />
          ))}
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* ================= DOMAIN PANEL ================= */}
      {activeDomain && (
        <DomainHoloPanel
          domain={activeDomain}
          onClose={() => {
            setActiveDomainKey(null);
            setFocusPos(null);
          }}
        />
      )}

      {/* ================= TAGLINE ================= */}
      <div
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2 z-20
          text-white/85 text-xl tracking-[0.35em]
          font-[Orbitron]
          drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]
        "
      >
        Train · Transform · Transcend
      </div>
    </div>
  );
}
