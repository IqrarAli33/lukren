"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white">
            NEVA<span className="text-cyan-500">.</span>PROJECTS
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
              Pillars
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-all cursor-pointer"
            >
              Work With Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-[99] bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="text-lg text-gray-300 hover:text-white transition-colors font-medium"
            >
              Pillars
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-lg text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-5 py-3 rounded-full bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 transition-all"
            >
              Work With Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};