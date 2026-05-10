"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300/90"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Student certification hub
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          BMCC NYC{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
            Cybersecurity
          </span>{" "}
          Class
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Your launchpad for industry certifications — aligned with our ISC2-style prep
          experience, terminal-forward Linux+ drills, and Security+ resources on the way.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          <Link
            href="#prep"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_40px_-10px_rgba(34,211,238,0.7)] transition hover:brightness-110"
          >
            Explore prep apps
          </Link>
          <Link
            href="#about"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/50 px-8 py-3.5 text-base font-semibold text-slate-200 backdrop-blur transition hover:border-cyan-400/40 hover:text-white"
          >
            Program overview
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
