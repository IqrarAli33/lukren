// components/ui/SpotlightCard.tsx
"use client";
import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export const SpotlightCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Spotlight springs
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Max tilt angle (degrees)
  const TILT_ANGLE = 5;
  const rotateX = useTransform(y, [-200, 200], [TILT_ANGLE, -TILT_ANGLE]);
  const rotateY = useTransform(x, [-200, 200], [-TILT_ANGLE, TILT_ANGLE]);

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Update spotlight
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);

    // Update tilt relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(mouseXPos - centerX);
    y.set(mouseYPos - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset tilt
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative group perspective-[1000px] h-full">
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 backdrop-blur-sm transition-all duration-300 hover:border-blue-200 shadow-sm hover:shadow-lg h-full ${className}`}
      >
        {/* Spring-driven spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.08), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* Subtle border glow on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.04), transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        <div 
          className="relative z-20 h-full w-full rounded-[22px] bg-slate-50 p-8"
          style={{ transform: "translateZ(10px)" }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};