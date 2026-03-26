"use client";
import { motion } from "framer-motion";

export const BlogSection = () => {
  const posts = [
    { tag: "Intelligence", title: "Why your Enterprise needs custom LLMs", date: "Mar 2024" },
    { tag: "Security", title: "The 2024 Zero-Trust Checklist", date: "Feb 2024" },
    { tag: "Frontend", title: "Optimizing Core Web Vitals for SaaS", date: "Jan 2024" },
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-white text-4xl font-bold tracking-tight">Engineering Insights</h2>
            <p className="text-zinc-500 mt-2">Latest thoughts from our development team.</p>
          </div>
          <button className="text-cyan-400 font-bold hover:underline">View All Posts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-zinc-900 rounded-2xl mb-6 overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{post.tag}</span>
              <h4 className="text-xl font-bold text-white mt-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-zinc-500 text-sm mt-4">{post.date} — 5 min read</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};