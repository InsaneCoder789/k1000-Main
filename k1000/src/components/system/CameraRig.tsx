"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

type Props = {
  target: THREE.Vector3 | null;
};

export default function CameraRig({ target }: Props) {
  const { camera } = useThree();

  const defaultPosition = useRef(new THREE.Vector3(0, 4.5, 9));
  const focusOffset = new THREE.Vector3(1.6, 0.6, 1.6);

  useFrame(() => {
    const desired = target
      ? target.clone().add(focusOffset)
      : defaultPosition.current;

    camera.position.lerp(desired, 0.05);
    camera.lookAt(target ?? new THREE.Vector3(0, 0, 0));
  });

  return null;
}
