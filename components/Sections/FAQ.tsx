"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What makes NEVA.PROJECTS different from a typical agency?",
    a: "We specialize exclusively in deep tech. Every engineer on our team has production experience in Next.js, LLM pipelines, or security audits — not generalists juggling WordPress sites. We also operate on fixed-scope contracts, so you always know exactly what you're paying for.",
  },
  {
    q: "What is your minimum project budget?",
    a: "Our engagements start at $10,000 USD. This ensures we can allocate the senior talent your project deserves without cutting corners on architecture or testing.",
  },
  {
    q: "How do you handle AI projects — do you use off-the-shelf solutions?",
    a: "Never. We build custom RAG pipelines, fine-tune open-source models on your proprietary data, and design agent architectures tailored to your use case. We avoid 'no-code AI wrappers' that look impressive in demos but break under production load.",
  },
  {
    q: "How long does a typical project take?",
    a: "Discovery and architecture takes 1–2 weeks. A standard web platform ships in 6–10 weeks. AI integration projects vary by data complexity — typically 8–16 weeks for a production-ready system.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Every project includes a 30-day post-launch support window at no extra charge. After that, we offer monthly retainer packages covering monitoring, updates, and feature development.",
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            // Common Questions
          </h2>
          <h3 className="text-5xl font-bold text-white tracking-tighter">
            Everything you need to know.
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                open === i ? "border-white/15 bg-zinc-900/60" : "border-white/5 bg-zinc-900/20"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left group"
              >
                <span className="text-white font-medium text-base pr-4 group-hover:text-cyan-400 transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <Plus className="w-5 h-5 text-zinc-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-7 pb-6 text-zinc-400 leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
