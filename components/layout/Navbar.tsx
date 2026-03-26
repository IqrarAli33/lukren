"use client";
import React from "react";

export const Navbar = () => (
    <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter text-white">
                NEVA<span className="text-cyan-500">.</span>PROJECTS
            </div>
            <div className="hidden md:flex gap-8 items-center">
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Pillars</a>
                <a href="#contact" className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-all cursor-pointer">Work With Us</a>
            </div>
        </div>
    </nav>
);