// components/ui/SpotlightCard.tsx
"use client";
import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const SpotlightCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-1 backdrop-blur-sm transition-all duration-300 hover:border-white/15 ${className}`}
    >
      {/* Spring-driven spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.12), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Subtle border glow on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.06), transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full w-full rounded-[22px] bg-zinc-950/50 p-8">
        {children}
      </div>
    </div>
  );
};