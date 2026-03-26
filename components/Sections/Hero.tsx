"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 italic">
                    WE ENGINEER <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PREMIUM SYSTEMS</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
                    High-performance web architecture and specialized AI integration for industry leaders who demand excellence.
                </p>
                <button className="px-10 py-5 bg-cyan-500 text-black font-extrabold rounded-full flex items-center gap-2 mx-auto hover:bg-cyan-400 transition-all group">
                    Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </div>
    </section>
);