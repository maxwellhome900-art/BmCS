"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const MATRIX_CHARS = "01アイウエオカキクケコサシスセソタチツテト";

function randomChar(seed: number) {
  return MATRIX_CHARS[Math.abs(Math.floor(Math.sin(seed) * 1000)) % MATRIX_CHARS.length];
}

export function CyberBackground() {
  const columns = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i / 18) * 100 + 2}%`,
        delay: `${(i * 0.35) % 8}s`,
        duration: `${12 + (i % 5)}s`,
        content: Array.from({ length: 24 }, (_, j) => randomChar(i * 100 + j)).join(""),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(34,211,238,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(52,211,153,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(56,189,248,0.08),transparent_45%)]" />

      <motion.div
        className="cyber-grid absolute inset-0 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
      />

      <div className="scanlines absolute inset-0 opacity-30" />

      {columns.map((col) => (
        <span
          key={col.id}
          className="matrix-column absolute top-0 opacity-40"
          style={{
            left: col.left,
            animationDelay: col.delay,
            animationDuration: col.duration,
          }}
        >
          {col.content}
        </span>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
    </div>
  );
}
