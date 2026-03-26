"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, ArrowRight, ArrowLeft } from 'lucide-react';

export const DiscoveryForm = () => {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        service: '',
        budget: '',
        description: '',
        name: '',
        email: ''
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Something went wrong.");
            setSubmitted(true);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative px-6 bg-black overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase block mb-4"
                    >
            // Project Inquiry
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to build the future?</h2>

                    {/* Progress Indicator */}
                    {!submitted && (
                        <div className="flex justify-center items-center gap-3 mt-10">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'w-12 bg-cyan-500' : 'w-6 bg-zinc-800'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-zinc-900/30 border border-white/10 p-8 md:p-14 rounded-[2.5rem] backdrop-blur-xl relative shadow-2xl">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.form
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                onSubmit={handleSubmit}
                            >
                                {/* STEP 1: SERVICE SELECTION */}
                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white">What should we focus on?</h3>
                                            <p className="text-zinc-500">Select the primary service your project requires.</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {['Web Architecture', 'AI Integration', 'Cybersecurity', 'Cloud Ops'].map((item) => (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    onClick={() => { setFormData({ ...formData, service: item }); nextStep(); }}
                                                    className={`p-6 text-left border rounded-2xl transition-all group relative overflow-hidden ${formData.service === item ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/5 bg-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <span className={`text-lg font-medium ${formData.service === item ? 'text-cyan-400' : 'text-zinc-300'}`}>
                                                        {item}
                                                    </span>
                                                    <ArrowRight className={`absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-transform ${formData.service === item ? 'text-cyan-400 translate-x-0' : 'text-zinc-600 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                                                        }`} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: PROJECT DETAILS */}
                                {step === 2 && (
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white">Project Scope</h3>
                                            <p className="text-zinc-500">Tell us about your budget and mission.</p>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-mono text-zinc-500 uppercase ml-1">Est. Budget</label>
                                                    <select
                                                        required
                                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-cyan-500/20 transition-all appearance-none"
                                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    >
                                                        <option value="">Select range</option>
                                                        <option value="10-25">$10k — $25k</option>
                                                        <option value="25-50">$25k — $50k</option>
                                                        <option value="50+">$50k+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono text-zinc-500 uppercase ml-1">Brief Description</label>
                                                <textarea
                                                    placeholder="What problem are we solving?"
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white h-32 outline-none focus:ring-2 ring-cyan-500/20 transition-all resize-none"
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                />
                                            </div>
                                            <div className="flex gap-4 pt-4">
                                                <button type="button" onClick={prevStep} className="flex-1 py-4 border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                                    <ArrowLeft className="w-4 h-4" /> Back
                                                </button>
                                                <button type="button" onClick={nextStep} className="flex-[2] py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all">
                                                    Next Step
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3: CONTACT INFO */}
                                {step === 3 && (
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white">Final Details</h3>
                                            <p className="text-zinc-500">Where should we send the proposal?</p>
                                        </div>
                                        <div className="space-y-4">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-cyan-500/20"
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Work Email"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 ring-cyan-500/20"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            {error && (
                                                <p className="text-red-400 text-sm font-mono">{error}</p>
                                            )}
                                            <div className="flex gap-4 pt-4">
                                                <button type="button" onClick={prevStep} className="flex-1 py-4 border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-all">
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isLoading}
                                                    className="flex-[2] py-4 bg-cyan-500 text-black font-extrabold rounded-xl shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                                >
                                                    {isLoading ? "Sending..." : (<>Secure Consultation <Send className="w-4 h-4" /></>)}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.form>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-500/30">
                                    <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Discovery Request Received</h3>
                                <p className="text-zinc-400 text-lg max-w-sm mx-auto">
                                    Our lead architect will review your brief and contact you within 12 business hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setStep(1); }}
                                    className="mt-10 text-cyan-500 font-mono text-sm hover:underline"
                                >
                                    &gt; Send another inquiry
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};