"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full bg-[#FFD900]"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10 lg:px-16">
        
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-black md:flex">
          <a href="#" className="transition-opacity hover:opacity-60">
            Home
          </a>

          <a href="#" className="transition-opacity hover:opacity-60">
            Shows
          </a>

          <a href="#" className="transition-opacity hover:opacity-60">
            Schedule
          </a>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-[25px] font-bold tracking-[-0.03em] text-black md:text-3xl">
            ChemShaa
          </h1>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          <button className="hidden rounded-full border border-black/30 px-5 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-[#FFD900] md:block">
            Sign In
          </button>

          <button
            aria-label="Open menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full  md:hidden"
            >
            <span className="h-1 w-1 rounded-full bg-black" />
            <span className="h-1 w-1 rounded-full bg-black" />
            <span className="h-1 w-1 rounded-full bg-black" />
            </button>
        </div>
      </div>
    </motion.header>
  );
}