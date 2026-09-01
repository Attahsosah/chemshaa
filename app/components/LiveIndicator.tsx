"use client";

import { motion } from "framer-motion";

export default function LiveIndicator() {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center md:h-52 md:w-52">

      {/* Outer pulse */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.35, 0, 0.35],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full border border-red-500/60"
      />

      {/* Second pulse */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-5 rounded-full bg-red-500/10"
      />

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-28 w-28 rounded-full bg-red-600/30 blur-xl md:h-36 md:w-36"
      />

      {/* Main circle */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(255,0,0,0.5)",
            "0 0 60px rgba(255,0,0,0.9)",
            "0 0 20px rgba(255,0,0,0.5)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-16 w-16 rounded-full bg-red-600 md:h-20 md:w-20"
      />

    </div>
  );
}