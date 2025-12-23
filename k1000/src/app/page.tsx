"use client";

import { useState } from "react";
import SystemCanvas from "@/components/system/SystemCanvas";
import SystemBoot from "@/components/ui/SystemBoot";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {!ready && <SystemBoot onComplete={() => setReady(true)} />}

      {ready && (
        <>
          <SystemCanvas />
          <Footer />
        </>
      )}
    </main>
  );
}
