"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    desc: "We audit your current stack, define KPIs, and map out the technical architecture before writing a single line of code.",
    color: "text-cyan-400",
    glow: "from-cyan-500/10",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Architecture",
    desc: "System design, database schemas, API contracts, and UI/UX wireframes are locked in and signed off.",
    color: "text-purple-400",
    glow: "from-purple-500/10",
  },
  {
    number: "03",
    icon: Code2,
    title: "Engineering",
    desc: "Agile sprints with weekly demos. Every pull request is reviewed, tested, and benchmarked against performance targets.",
    color: "text-blue-400",
    glow: "from-blue-500/10",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    desc: "CI/CD pipelines, zero-downtime deployments, monitoring dashboards, and a dedicated 30-day post-launch support window.",
    color: "text-emerald-400",
    glow: "from-emerald-500/10",
  },
];

export const ProcessSection = () => (
  <section className="py-24 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
          // How We Work
        </h2>
        <h3 className="text-5xl font-bold text-white tracking-tighter">
          From brief to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            production.
          </span>
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gradient-to-r from-cyan-500/0 via-white/10 to-cyan-500/0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Step number bubble */}
                <div className={`relative w-20 h-20 mb-6 mx-auto md:mx-0`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.glow} to-transparent border border-white/10 group-hover:border-white/20 transition-all`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-mono text-zinc-600 font-bold">
                    {step.number}
                  </span>
                </div>

                <h4 className={`text-xl font-bold text-white mb-3 group-hover:${step.color} transition-colors`}>
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
