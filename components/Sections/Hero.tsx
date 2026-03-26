"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CanvasBackground } from "../ui/CanvasBackground";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const pillars = ["Web Dev", "AI / ML", "Cybersecurity", "Cloud Ops"];

export const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
    <CanvasBackground />
    {/* Subtle grid background */}
    <div
      className="absolute inset-0 -z-20 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Background glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full -z-10" />
    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-slate-400/10 blur-[120px] rounded-full -z-10" />

    <div className="max-w-7xl mx-auto text-center w-full">
      <motion.div variants={containerVariants} initial="hidden" animate="show">

        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-mono tracking-widest uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Now accepting projects for Q3 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-none italic"
        >
          WE ENGINEER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            PREMIUM SYSTEMS
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed mb-8 font-light"
        >
          High-performance web architecture and specialized AI integration
          for industry leaders who demand excellence.
        </motion.p>

        {/* Pillar tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-10">
          {pillars.map((p) => (
            <span
              key={p}
              className="px-3 py-1 rounded-full border border-slate-200 text-slate-600 text-xs font-mono tracking-wider bg-white shadow-sm"
            >
              {p}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all group shadow-xl shadow-blue-600/20"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#expertise"
            className="px-10 py-5 border border-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all shadow-sm"
          >
            View Capabilities
          </a>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
    >
      <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.div>
  </section>
);
