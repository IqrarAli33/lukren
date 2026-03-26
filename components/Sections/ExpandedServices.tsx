"use client";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, ShieldCheck, Cloud, Smartphone, Palette, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard";

const services = [
  {
    title: "Web Architecture",
    desc: "High-scale Next.js ecosystems built for speed, SEO, and conversion.",
    icon: Code2,
    color: "text-blue-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]",
    tag: "Next.js · TypeScript · Edge",
  },
  {
    title: "Enterprise AI",
    desc: "Custom LLM & RAG pipelines that turn your data into a competitive advantage.",
    icon: BrainCircuit,
    color: "text-indigo-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.08)]",
    tag: "OpenAI · LangChain · Pinecone",
  },
  {
    title: "Cyber Defense",
    desc: "Zero-trust security audits and real-time threat monitoring for enterprise.",
    icon: ShieldCheck,
    color: "text-sky-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]",
    tag: "OWASP · Pen Testing · SOC 2",
  },
  {
    title: "Cloud Ops",
    desc: "Serverless & Edge computing infrastructure that scales without surprises.",
    icon: Cloud,
    color: "text-emerald-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(5,150,105,0.08)]",
    tag: "AWS · Vercel · Cloudflare",
  },
  {
    title: "Mobile Apps",
    desc: "Native cross-platform experiences with React Native that feel truly premium.",
    icon: Smartphone,
    color: "text-orange-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(234,88,12,0.08)]",
    tag: "React Native · Expo · iOS/Android",
  },
  {
    title: "Design Systems",
    desc: "Scalable UI/UX frameworks that make your entire product feel cohesive.",
    icon: Palette,
    color: "text-rose-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(225,29,72,0.08)]",
    tag: "Figma · Storybook · Tailwind",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const ServicesGrid = () => (
  <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-blue-600 font-mono text-sm tracking-[0.3em] uppercase mb-4">// Core Capabilities</h2>
      <h3 className="text-5xl font-bold text-slate-900 tracking-tighter">Engineered for Excellence.</h3>
      <p className="text-slate-600 mt-4 max-w-xl">
        Every service is delivered by specialists — not generalists. We go deep so you can move fast.
      </p>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((s, i) => (
        <motion.div key={i} variants={cardVariants} className={`group transition-all duration-300 ${s.glow}`}>
          <SpotlightCard className="h-full">
            <div className="flex items-start justify-between mb-6">
              <s.icon className={`w-10 h-10 ${s.color}`} />
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">{s.desc}</p>
            <span className="text-xs font-mono text-slate-500 tracking-wider">{s.tag}</span>
          </SpotlightCard>
        </motion.div>
      ))}
    </motion.div>
  </section>
);