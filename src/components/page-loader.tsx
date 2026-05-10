"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.02, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative h-14 w-14">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-1 rounded-full border-2 border-transparent border-t-emerald-400"
                animate={{ rotate: -360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
              Initializing secure session
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
