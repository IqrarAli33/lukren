"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 47, suffix: "+", label: "Projects Delivered", color: "text-blue-600" },
  { value: 99, suffix: "%", label: "Client Retention", color: "text-indigo-600" },
  { value: 12, suffix: "h", label: "Avg. Response Time", color: "text-sky-600" },
  { value: 5, suffix: "★", label: "Average Rating", color: "text-emerald-600" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export const StatsSection = () => (
  <section className="py-20 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center"
          >
            <div className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 ${stat.color}`}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-slate-600 text-sm font-mono uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
