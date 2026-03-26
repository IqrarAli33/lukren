"use client";
import { Code2, BrainCircuit, ShieldCheck, Cloud, Smartphone, Palette } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

const services = [
    { title: "Web Architecture", desc: "High-scale Next.js ecosystems built for speed.", icon: Code2, color: "text-cyan-400" },
    { title: "Enterprise AI", desc: "Custom LLM & RAG integration for data intelligence.", icon: BrainCircuit, color: "text-purple-400" },
    { title: "Cyber Defense", desc: "Zero-trust security audits and threat protection.", icon: ShieldCheck, color: "text-blue-400" },
    { title: "Cloud Ops", desc: "Serverless & Edge computing infrastructure.", icon: Cloud, color: "text-emerald-400" },
    { title: "Mobile Apps", desc: "Native cross-platform UX with React Native.", icon: Smartphone, color: "text-orange-400" },
    { title: "Design Systems", desc: "Scalable UI/UX frameworks for your brand.", icon: Palette, color: "text-pink-400" },
];

export const ServicesGrid = () => (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
            <h2 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">// Core Capabilities</h2>
            <h3 className="text-5xl font-bold text-white tracking-tighter">Engineered for Excellence.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
                <SpotlightCard key={i}>
                    <s.icon className={`w-10 h-10 ${s.color} mb-6`} />
                    <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">{s.desc}</p>
                </SpotlightCard>
            ))}
        </div>
    </section>
);