"use client";
import { useState } from "react";
import BootTerminal from "@/components/boot/BootTerminal";
import LogoCharge from "@/components/boot/LogoCharge";
import SystemCanvas from "@/components/system/SystemCanvas";

export default function HomePage() {
  const [phase, setPhase] = useState<"term"|"logo"|"app">("term");

  return (
    <>
      {phase === "term" && <BootTerminal onDone={() => setPhase("logo")} />}
      {phase === "logo" && <LogoCharge onDone={() => setPhase("app")} />}
      {phase === "app" && <SystemCanvas />}
    </>
  );
}
