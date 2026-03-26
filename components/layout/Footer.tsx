"use client";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Services: ["Web Architecture", "Enterprise AI", "Cyber Defense", "Cloud Ops"],
  Company: ["About", "Blog", "Careers", "Contact"],
};

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@neva.projects", label: "Email" },
];

export const Footer = () => (
  <footer className="border-t border-white/5 bg-zinc-950/50 pt-16 pb-8 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold tracking-tighter text-white mb-4">
            NEVA<span className="text-cyan-500">.</span>PROJECTS
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            High-performance web architecture and specialized AI integration for industry leaders who demand excellence.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] mb-5">{category}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} NEVA.PROJECTS. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="#" className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
