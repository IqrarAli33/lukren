"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    tag: "Intelligence",
    title: "Why your Enterprise needs custom LLMs",
    date: "Jan 2025",
    gradient: "from-blue-600/30 via-indigo-600/20 to-transparent",
    image: "/blog_ai.png",
    accent: "text-blue-600",
    icon: "🤖",
  },
  {
    tag: "Security",
    title: "The Zero-Trust Checklist for 2025",
    date: "Feb 2025",
    gradient: "from-indigo-600/30 via-violet-600/20 to-transparent",
    image: "/blog_security.png",
    accent: "text-indigo-600",
    icon: "🛡️",
  },
  {
    tag: "Frontend",
    title: "Optimizing Core Web Vitals for SaaS",
    date: "Mar 2025",
    gradient: "from-emerald-600/30 via-teal-600/20 to-transparent",
    image: "/blog_frontend.png",
    accent: "text-emerald-600",
    icon: "⚡",
  },
];

export const BlogSection = () => {
  return (
    <section id="insights" className="py-24 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-slate-900 text-4xl font-bold tracking-tight">Engineering Insights</h2>
            <p className="text-slate-600 mt-2">Latest thoughts from our development team.</p>
          </div>
          <button className="text-blue-600 font-bold hover:underline hidden sm:block">View All Posts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-white rounded-2xl mb-6 overflow-hidden border border-slate-200 shadow-sm relative flex items-center justify-center group-hover:border-blue-300 transition-all duration-500">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent flex flex-col justify-end p-4">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden w-full backdrop-blur-md">
                    <div className={`h-full w-2/3 bg-gradient-to-r ${post.gradient} opacity-80`} />
                  </div>
                </div>
              </div>

              <span className={`text-xs font-mono border px-2 py-0.5 rounded-full ${post.accent.replace('text-', 'border-').replace('600', '200')} bg-white uppercase tracking-widest ${post.accent}`}>{post.tag}</span>
              <h4 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm mt-3">{post.date} — 5 min read</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="text-blue-600 font-bold hover:underline">View All Posts</button>
        </div>
      </div>
    </section>
  );
};