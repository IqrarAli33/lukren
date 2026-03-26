"use client";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export const CTABanner = () => (
  <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full -z-10" />

    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border border-white/10 rounded-[2.5rem] p-10 md:p-16 bg-zinc-900/30 backdrop-blur-sm text-center relative overflow-hidden"
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-[2.5rem]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-[2.5rem]" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-6 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5">
            <CalendarDays className="w-3.5 h-3.5" />
            Limited slots — Q3 2026
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Ready to build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              extraordinary?
            </span>
          </h2>

          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We take on a limited number of projects each quarter to ensure every client gets our full attention. Spots fill fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-5 bg-cyan-500 text-black font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all group shadow-[0_0_50px_rgba(34,211,238,0.3)]"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@neva.projects"
              className="px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
