"use client";
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Legal Research Platform",
    client: "LexCore Inc.",
    category: "Enterprise AI",
    desc: "Built a custom RAG pipeline on 2M+ legal documents, reducing research time from 4 hours to 8 minutes. Deployed on AWS with sub-200ms query latency.",
    tags: ["LangChain", "Pinecone", "Next.js", "AWS Lambda"],
    metrics: [
      { label: "Query Time", value: "8 min", prev: "4 hrs" },
      { label: "Accuracy", value: "96.4%" },
    ],
    accent: "blue",
    gradient: "from-blue-600/10 via-indigo-600/5",
  },
  {
    title: "Zero-Trust Security Overhaul",
    client: "FinBridge Ltd.",
    category: "Cybersecurity",
    desc: "Complete security architecture redesign for a fintech handling $2B+ in transactions. Achieved SOC 2 Type II compliance in 14 weeks.",
    tags: ["Zero-Trust", "OAuth 2.0", "SOC 2", "Pen Testing"],
    metrics: [
      { label: "Vulnerabilities", value: "0 critical" },
      { label: "Compliance", value: "SOC 2 II" },
    ],
    accent: "indigo",
    gradient: "from-indigo-600/10 via-violet-600/5",
  },
  {
    title: "Global E-Commerce Platform",
    client: "Meridian Retail",
    category: "Web Architecture",
    desc: "Re-architected a legacy Magento store into a headless Next.js storefront. Core Web Vitals went from failing to 98/100 Lighthouse score.",
    tags: ["Next.js", "Shopify API", "Vercel Edge", "TypeScript"],
    metrics: [
      { label: "Lighthouse", value: "98 / 100" },
      { label: "Conversion", value: "+34%" },
    ],
    accent: "emerald",
    gradient: "from-emerald-600/10 via-teal-600/5",
  },
];

const accentMap: Record<string, string> = {
  blue: "text-blue-700 border-blue-200 bg-blue-50",
  indigo: "text-indigo-700 border-indigo-200 bg-indigo-50",
  emerald: "text-emerald-700 border-emerald-200 bg-emerald-50",
};

const tagMap: Record<string, string> = {
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  emerald: "text-emerald-600",
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const TILT_ANGLE = 4;
  const rotateX = useTransform(y, [-300, 300], [TILT_ANGLE, -TILT_ANGLE]);
  const rotateY = useTransform(x, [-300, 300], [-TILT_ANGLE, TILT_ANGLE]);

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(e.clientX - rect.left - centerX);
    y.set(e.clientY - rect.top - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1200px] w-full">
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative border border-slate-200 rounded-3xl overflow-hidden bg-white hover:border-blue-300 hover:shadow-xl shadow-sm transition-all duration-500 cursor-pointer"
      >
        {/* Gradient accent */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div 
          className="relative z-10 p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center"
          style={{ transform: "translateZ(20px)" }}
        >
          <div>
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${accentMap[project.accent]}`}>
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">{project.client}</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-2xl">{project.desc}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-slate-600 border border-slate-200 px-2.5 py-1 rounded-lg bg-slate-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="flex md:flex-col gap-4 shrink-0">
            {project.metrics.map((m, j) => (
              <div key={j} className="text-center md:text-right">
                <div className={`text-2xl font-black tracking-tight ${tagMap[project.accent]}`}>
                  {m.value}
                </div>
                {m.prev && (
                  <div className="text-xs text-slate-400 line-through">{m.prev}</div>
                )}
                <div className="text-xs text-slate-500 font-mono mt-0.5">{m.label}</div>
              </div>
            ))}

            <div className="hidden md:flex w-10 h-10 rounded-full border border-slate-200 items-center justify-center ml-auto group-hover:border-blue-300 group-hover:bg-blue-50 transition-all mt-2">
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const CaseStudies = () => (
  <section id="case-studies" className="py-24 px-6 border-t border-slate-200">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <h2 className="text-blue-600 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            // Selected Work
          </h2>
          <h3 className="text-5xl font-bold text-slate-900 tracking-tighter">
            Proof, not promises.
          </h3>
        </div>
        <p className="text-slate-600 max-w-xs text-sm leading-relaxed">
          Every case study is a production system — not a prototype or a redesign of a redesign.
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);
