"use client";

import { useState } from "react";
import LogoCharge from "./LogoCharge";
import SystemCanvas from "../system/SystemCanvas";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"charge"|"system">("charge");

  return (
    <>
      {stage === "charge" && (
        <LogoCharge onDone={() => setStage("system")} />
      )}

      {stage === "system" && (
        <SystemCanvas />
      )}
    </>
  );
}
