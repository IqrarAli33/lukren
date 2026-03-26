"use client";
import Image from "next/image";
import { XIcon, Mail } from "lucide-react";
import React from "react";

// Inline SVGs for brand icons not included in lucide-react
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const footerLinks = {
  Services: [
    { name: "Web Architecture", href: "#expertise" },
    { name: "Enterprise AI", href: "#expertise" },
    { name: "Cyber Defense", href: "#expertise" },
    { name: "Cloud Ops", href: "#expertise" },
  ],
  Company: [
    { name: "About Us", href: "#company" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ],
};

const socials = [
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:hello@neva.projects", label: "Email" },
];

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="mb-6">
            <Image 
              src="/lukren-logo.png" 
              alt="Lukren" 
              width={200} 
              height={60} 
              className="h-14 w-auto object-contain" 
            />
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
            High-performance web architecture and specialized AI integration for industry leaders who demand excellence.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                {/* lucide icons accept className; inline SVGs have size baked in */}
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-5">{category}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs font-mono">
          © {new Date().getFullYear()} Lukren. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 text-xs hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 text-xs hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
