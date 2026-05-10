"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BmccLogo } from "./bmcc-logo";

const links = [
  { href: "#prep", label: "Cert Prep" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:px-6 lg:px-8 md:flex-nowrap md:py-0">
        <Link href="/" className="group flex items-center gap-1 outline-none ring-cyan-400/50 focus-visible:ring-2">
          <BmccLogo />
        </Link>

        <nav
          className="flex max-w-[45%] flex-wrap items-center justify-end gap-x-4 gap-y-1 md:max-w-none md:justify-start md:gap-8"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium text-slate-300 transition-colors hover:text-cyan-300 md:text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#prep"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_24px_-8px_rgba(34,211,238,0.6)] transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
          >
            Launch Hub
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
