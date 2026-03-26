"use client";
import { motion } from "framer-motion";
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
    accent: "cyan",
    gradient: "from-cyan-500/20 via-blue-500/10",
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
    accent: "purple",
    gradient: "from-purple-500/20 via-indigo-500/10",
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
    gradient: "from-emerald-500/20 via-teal-500/10",
  },
];

const accentMap: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
  purple: "text-purple-400 border-purple-500/30 bg-purple-500/5",
  emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
};

const tagMap: Record<string, string> = {
  cyan: "text-cyan-500",
  purple: "text-purple-400",
  emerald: "text-emerald-400",
};

export const CaseStudies = () => (
  <section className="py-24 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <h2 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            // Selected Work
          </h2>
          <h3 className="text-5xl font-bold text-white tracking-tighter">
            Proof, not promises.
          </h3>
        </div>
        <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
          Every case study is a production system — not a prototype or a redesign of a redesign.
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/20 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 cursor-pointer"
          >
            {/* Gradient accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10 p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${accentMap[project.accent]}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-600 font-mono">{project.client}</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-2xl">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-zinc-600 border border-white/5 px-2.5 py-1 rounded-lg bg-white/5"
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
                      <div className="text-xs text-zinc-600 line-through">{m.prev}</div>
                    )}
                    <div className="text-xs text-zinc-500 font-mono mt-0.5">{m.label}</div>
                  </div>
                ))}

                <div className="hidden md:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center ml-auto group-hover:border-white/30 group-hover:bg-white/5 transition-all mt-2">
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
