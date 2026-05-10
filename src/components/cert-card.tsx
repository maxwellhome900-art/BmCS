"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";

export type CertVariant = "isc2" | "linux" | "soon";

type CertCardProps = {
  variant: CertVariant;
  title: string;
  subtitle: string;
  href?: string;
  ctaLabel: string;
  disabled?: boolean;
  badge?: string;
  delay?: number;
};

const variantStyles: Record<
  CertVariant,
  { border: string; glow: string; accent: string; icon: ReactElement }
> = {
  isc2: {
    border: "from-cyan-500/40 via-sky-400/20 to-amber-400/30",
    glow: "shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]",
    accent: "text-cyan-300",
    icon: <Isc2Icon />,
  },
  linux: {
    border: "from-emerald-500/50 via-green-400/20 to-lime-400/25",
    glow: "shadow-[0_0_60px_-12px_rgba(52,211,153,0.4)]",
    accent: "text-emerald-300",
    icon: <LinuxTerminalIcon />,
  },
  soon: {
    border: "from-slate-500/40 via-slate-600/30 to-sky-500/20",
    glow: "shadow-[0_0_50px_-16px_rgba(148,163,184,0.25)]",
    accent: "text-slate-300",
    icon: <ShieldPulseIcon />,
  },
};

export function CertCard({
  variant,
  title,
  subtitle,
  href,
  ctaLabel,
  disabled,
  badge,
  delay = 0,
}: CertCardProps) {
  const vs = variantStyles[variant];
  const content = (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        disabled
          ? undefined
          : { y: -6, transition: { type: "spring", stiffness: 280, damping: 22 } }
      }
      className={`group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl p-[1px] ${
        disabled ? "pulse-glow cursor-not-allowed" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-80 ${vs.border}`}
        aria-hidden
      />
      <div
        className={`glass-panel relative flex h-full flex-1 flex-col rounded-2xl p-6 sm:p-8 ${
          disabled ? "opacity-90" : vs.glow
        }`}
      >
        {badge && (
          <span className="mb-4 inline-flex w-fit rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {badge}
          </span>
        )}

        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className={`mt-2 text-sm font-medium ${vs.accent}`}>{subtitle}</p>
          </div>
          <motion.div
            className="shrink-0 rounded-xl border border-white/10 bg-slate-950/80 p-3"
            animate={
              disabled
                ? { scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }
                : { rotate: [0, 2, -2, 0] }
            }
            transition={
              disabled
                ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden
          >
            {vs.icon}
          </motion.div>
        </div>

        {variant === "linux" && <TerminalPreview />}

        {variant === "isc2" && <Isc2Decor />}

        {variant === "soon" && <ComingSoonDecor />}

        <div className="mt-auto pt-8">
          {disabled || !href ? (
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-600/60 bg-slate-800/40 py-3.5 text-sm font-semibold text-slate-500"
            >
              {ctaLabel}
            </button>
          ) : (
            <motion.span whileTap={{ scale: 0.98 }} className="block">
              <span className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-cyan-400/35 bg-gradient-to-r from-cyan-500/15 to-emerald-500/10 py-3.5 text-sm font-semibold text-cyan-100 transition group-hover:border-cyan-300/50 group-hover:from-cyan-400/25 group-hover:to-emerald-400/15 group-hover:shadow-[0_0_32px_-8px_rgba(34,211,238,0.5)]">
                {ctaLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.span>
          )}
        </div>
      </div>
    </motion.article>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full rounded-2xl outline-none ring-offset-2 ring-offset-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label={`${title}: opens preparation application in a new tab`}
      >
        {content}
      </a>
    );
  }

  return content;
}

function Isc2Icon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 4L6 12v16l14 8 14-8V12L20 4z"
        stroke="url(#isc)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M20 12v16M12 16l8 4 8-4" stroke="url(#isc)" strokeWidth="1.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="isc" x1="6" y1="6" x2="34" y2="34">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LinuxTerminalIcon() {
  return (
    <svg className="h-10 w-10 text-emerald-400" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="5" y="8" width="30" height="24" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 14h6M9 19l4 3-4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 26h13" stroke="#22d3ee" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function ShieldPulseIcon() {
  return (
    <svg className="h-10 w-10 text-sky-400/80" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 6l12 5v9c0 7-5 12-12 15-7-3-12-8-12-15V11l12-5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M20 14v10M16 18h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function TerminalPreview() {
  const lines = [
    { prompt: "student@bmcc-lab", cmd: "~$ ./drill --module firewalls" },
    { out: "> Packet filter chains loaded… OK" },
    { out: "> Score: 94% — keep pushing." },
  ];
  return (
    <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 font-mono text-[11px] leading-relaxed text-emerald-200/90 shadow-inner">
      <div className="mb-2 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.12 }}
          className={line.cmd ? "text-slate-300" : "text-emerald-400/85"}
        >
          {line.prompt && (
            <>
              <span className="text-cyan-400/90">{line.prompt}</span>{" "}
            </>
          )}
          {line.cmd ?? line.out}
        </motion.div>
      ))}
    </div>
  );
}

function Isc2Decor() {
  return (
    <div className="flex flex-wrap gap-2">
      {["Security Principles", "Network Defense", "Incident Readiness"].map((t, i) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.06 }}
          className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-[11px] font-medium text-cyan-100/90"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

function ComingSoonDecor() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-600/40 bg-gradient-to-br from-slate-900/90 to-slate-950 p-4">
      <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(56,189,248,0.08)_50%,transparent_60%)]" />
      <p className="relative text-sm text-slate-400">
        Security+ Prep App — <span className="font-semibold text-sky-300">Uploading Soon</span>
      </p>
      <div className="relative mt-3 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 flex-1 rounded-full bg-slate-700"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
