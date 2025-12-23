"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
  director: string;
  year: number;
  position: { x: number; y: number };
};

export default function PlanetMiniPanel({
  title,
  director,
  year,
  position,
}: Props) {
  const [text, setText] = useState("");

  const finalText = `${title}
Director: ${director}
Established: ${year}`;

  useEffect(() => {
    let i = 0;
    setText("");

    const interval = setInterval(() => {
      setText(finalText.slice(0, i));
      i++;
      if (i > finalText.length) clearInterval(interval);
    }, 18);

    return () => clearInterval(interval);
  }, [finalText]);

  return (
    <div
      className="pointer-events-none absolute z-30"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, 0)",
      }}
    >
      <div className="rounded-md bg-black/60 backdrop-blur-md px-4 py-3 text-xs text-emerald-300 border border-emerald-400/30 shadow-lg whitespace-pre-line font-mono">
        {text || "decrypting…"}
      </div>
    </div>
  );
}
