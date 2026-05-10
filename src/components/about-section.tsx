"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 border-t border-white/5 bg-slate-950/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white sm:text-3xl">
            Built for BMCC NYC learners
          </h2>
          <p className="mt-4 text-slate-400">
            This hub mirrors the polished, exam-forward UX of our ISC2 prep stack — dark
            surfaces, high-contrast neon cues, and motion that reinforces focus without
            distraction. Use it as your single entry point before you jump into each vendor
            experience.
          </p>
        </motion.div>
        <motion.ul
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {[
            { t: "Academic rigor", d: "Structured paths that respect how you actually study between classes." },
            { t: "Industry alignment", d: "Cards map directly to live prep apps used in our cybersecurity coursework." },
            { t: "Mobile-first", d: "Review links and status on your phone between campus sessions." },
            { t: "Always updating", d: "Security+ will appear here the moment the app is ready to ship." },
          ].map((item) => (
            <li
              key={item.t}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-cyan-200">
                {item.t}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.d}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
