"use client";

import { motion } from "framer-motion";
import { CertCard } from "./cert-card";

export function CertificationGrid() {
  return (
    <section id="prep" className="relative z-10 scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white sm:text-4xl">
            Certification prep{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              dashboard
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Three focused tracks — open the live ISC2 CC and Linux+ experiences, and watch
            for Security+ as files finish uploading to the portal.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <CertCard
            variant="isc2"
            badge="Live app"
            title="ISC2 CC Prep"
            subtitle="Certified in Cybersecurity — exam-style drills"
            href="https://prepare-chi.vercel.app/"
            ctaLabel="Launch App"
            delay={0}
          />
          <CertCard
            variant="linux"
            badge="Live app"
            title="Linux+ Prep"
            subtitle="Terminal-first practice & scenario labs"
            href="https://examprep-elys.onrender.com/"
            ctaLabel="Open Linux+ App"
            delay={0.08}
          />
          <CertCard
            variant="soon"
            badge="In progress"
            title="Security+ Prep"
            subtitle="CompTIA Security+ — deployment in progress"
            ctaLabel="Uploading Soon"
            disabled
            delay={0.16}
          />
        </div>
      </div>
    </section>
  );
}
