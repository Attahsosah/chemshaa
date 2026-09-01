"use client";

import { motion } from "framer-motion";
import LiveIndicator from "./LiveIndicator";


export default function LiveHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#050505] px-6 py-20 md:min-h-[calc(100vh-6rem)] md:px-10 lg:px-16">

      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 blur-[140px]"
      />

      {/* Decorative yellow shapes */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-[#FFD900]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-[#FFD900]/5 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mb-10 md:mb-14"
        >
          <LiveIndicator />
        </motion.div>

        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-5 flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-red-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 md:text-sm">
            Broadcasting Live
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          Live Now
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-6 text-base italic text-white/60 md:mt-8 md:text-xl"
        >
          Join the action!
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
          className="mt-10 md:mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 40px rgba(255,217,0,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative min-w-[220px] overflow-hidden rounded-full bg-[#FFD900] px-10 py-4 text-sm font-bold text-black md:min-w-[260px] md:px-12 md:py-5 md:text-base"
          >
            <span className="relative z-10">
              Tune In
            </span>

            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white/30"
            />
          </motion.button>
        </motion.div>

      </div>

      {/* Bottom information
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 flex justify-center md:bottom-8"
      >
        <div className="flex items-center gap-3 text-xs text-white/30">
          <span>CHEMSHAA LIVE</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>ON AIR</span>
        </div>
      </motion.div> */}

    </section>
  );
}