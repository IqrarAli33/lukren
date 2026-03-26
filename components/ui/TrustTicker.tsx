"use client";
import { motion } from "framer-motion";

const clients = [
  "TECH_CRUNCH", "SECURE_LTD", "AI_LABS", "BLOCK_CO",
  "GLOBAL_DEV", "NEXUS_IO", "CIPHER_NET", "DATA_FORGE",
];

export const TrustTicker = () => (
  <div className="py-12 border-y border-white/5 bg-black/50 overflow-hidden flex whitespace-nowrap">
    {/* Exactly 2 copies — animates from 0 to -50% for a seamless infinite loop */}
    <motion.div
      animate={{ x: "-50%" }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 items-center px-8 shrink-0"
    >
      {[...clients, ...clients].map((name, i) => (
        <span
          key={i}
          className="text-lg font-bold text-zinc-700 tracking-[0.2em] mx-4 hover:text-zinc-500 transition-colors cursor-default select-none"
        >
          {name}
        </span>
      ))}
    </motion.div>
  </div>
);