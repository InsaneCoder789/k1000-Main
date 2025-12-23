"use client";

import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

const bootSteps = [
  "INITIALIZING K-1000 CORE",
  "CHECKING DOMAIN SYSTEMS",
  "VERIFYING EVENT MEMORY",
  "CALIBRATING ORBITAL LOGIC",
  "ESTABLISHING CENTRAL CONTROL",
  "SYSTEM READY",
];

export default function SystemBoot({ onComplete }: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= bootSteps.length - 1) {
      const doneTimer = setTimeout(onComplete, 800);
      return () => clearTimeout(doneTimer);
    }

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center font-mono text-sm tracking-widest text-neutral-300">
        <p className="mb-4">K-1000 SYSTEM BOOT</p>
        <p className="text-neutral-400">
          {bootSteps[step]}
          <span className="animate-pulse">_</span>
        </p>
      </div>
    </div>
  );
}
