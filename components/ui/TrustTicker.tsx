"use client";
import { motion } from "framer-motion";

export const TrustTicker = () => (
    <div className="py-12 border-y border-white/5 bg-black/50 overflow-hidden flex whitespace-nowrap">
        <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center px-8"
        >
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                    {["TECH_CRUNCH", "SECURE_LTD", "AI_LABS", "BLOCK_CO", "GLOBAL_DEV"].map(name => (
                        <span key={name} className="text-xl font-bold text-zinc-800 tracking-tighter mx-4">{name}</span>
                    ))}
                </div>
            ))}
        </motion.div>
    </div>
);