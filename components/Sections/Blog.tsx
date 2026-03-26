"use client";
import { motion } from "framer-motion";

const posts = [
  {
    tag: "Intelligence",
    title: "Why your Enterprise needs custom LLMs",
    date: "Jan 2025",
    gradient: "from-cyan-500/30 via-blue-600/20 to-transparent",
    accent: "text-cyan-500",
    icon: "🤖",
  },
  {
    tag: "Security",
    title: "The Zero-Trust Checklist for 2025",
    date: "Feb 2025",
    gradient: "from-purple-500/30 via-indigo-600/20 to-transparent",
    accent: "text-purple-400",
    icon: "🛡️",
  },
  {
    tag: "Frontend",
    title: "Optimizing Core Web Vitals for SaaS",
    date: "Mar 2025",
    gradient: "from-emerald-500/30 via-teal-600/20 to-transparent",
    accent: "text-emerald-400",
    icon: "⚡",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 border-t border-white/5 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-white text-4xl font-bold tracking-tight">Engineering Insights</h2>
            <p className="text-zinc-500 mt-2">Latest thoughts from our development team.</p>
          </div>
          <button className="text-cyan-400 font-bold hover:underline hidden sm:block">View All Posts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              {/* Card image area with gradient + icon placeholder */}
              <div className="aspect-video bg-zinc-900 rounded-2xl mb-6 overflow-hidden border border-white/5 relative flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <span className="text-5xl relative z-10 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                  {post.icon}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full w-2/3 bg-gradient-to-r ${post.gradient} opacity-60`} />
                  </div>
                </div>
              </div>

              <span className={`text-xs font-mono ${post.accent} uppercase tracking-widest`}>{post.tag}</span>
              <h4 className="text-xl font-bold text-white mt-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-zinc-500 text-sm mt-4">{post.date} — 5 min read</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="text-cyan-400 font-bold hover:underline">View All Posts</button>
        </div>
      </div>
    </section>
  );
};