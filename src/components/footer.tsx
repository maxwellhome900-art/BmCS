"use client";

import Link from "next/link";
import { BmccLogo } from "./bmcc-logo";

const social = [
  { label: "LinkedIn", href: "#", placeholder: true },
  { label: "YouTube", href: "#", placeholder: true },
  { label: "GitHub", href: "#", placeholder: true },
];

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 scroll-mt-24 border-t border-white/10 bg-slate-950/80 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <BmccLogo />
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              BMCC NYC Cybersecurity Class — central hub for certification prep resources.
              For syllabus and grading questions, use your course channels.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Quick links
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#prep" className="text-slate-300 hover:text-cyan-300">
                    Certification prep
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-cyan-300">
                    About this hub
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.bmcc.cuny.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-300"
                  >
                    BMCC main site
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Connect
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-slate-300 hover:text-emerald-300"
                      aria-label={`${s.label} (placeholder)`}
                    >
                      {s.label}
                      {s.placeholder && (
                        <span className="ml-1 text-[10px] font-medium uppercase text-slate-500">
                          (soon)
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Placeholder social links — replace with your program handles when ready.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Mark. BMCC Cybersecurity Class hub. Educational use.</p>
          <p className="text-center sm:text-right">
            External apps open in a new tab. Availability depends on each hosting provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
