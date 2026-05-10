"use client";

import { motion } from "framer-motion";

type BmccLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BmccLogo({ className = "", compact = false }: BmccLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-950 shadow-[0_0_20px_-4px_rgba(34,211,238,0.5)]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
          <path
            d="M8 28V12l8-4 8 4v16l-8 4-8-4Z"
            stroke="url(#g1)"
            strokeWidth="1.5"
          />
          <path
            d="M16 10v16M24 14v12"
            stroke="url(#g1)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="g1" x1="8" y1="8" x2="32" y2="32">
              <stop stopColor="#22d3ee" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      {!compact && (
        <div className="leading-tight">
          <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Borough of Manhattan
          </p>
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white">
            BMCC <span className="text-cyan-400">NYC</span>
          </p>
          <p className="text-xs font-medium text-emerald-400/90">
            Cybersecurity Program
          </p>
        </div>
      )}
    </div>
  );
}
