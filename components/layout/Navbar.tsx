"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image 
              src="/lukren-logo.png" 
              alt="Lukren" 
              width={160} 
              height={50} 
              className="h-10 w-auto object-contain" 
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {["Expertise", "Case Studies", "Insights", "Company"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              Start Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            <div className="px-6 h-20 flex items-center justify-between border-b border-slate-200">
              <a href="#" className="flex items-center">
                <Image 
                  src="/lukren-logo.png" 
                  alt="Lukren" 
                  width={160} 
                  height={50} 
                  className="h-10 w-auto object-contain" 
                />
              </a>
              <button 
                className="p-2 text-slate-900 bg-slate-100 rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col px-6 py-12 gap-8 overflow-y-auto">
              {["Expertise", "Case Studies", "Insights", "Company"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`} 
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold tracking-tighter text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ))}
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <a 
                  href="#contact" 
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-full text-center block shadow-lg shadow-blue-600/20"
                >
                  Start Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};