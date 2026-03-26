"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Sections/Hero";
import { ServicesGrid } from "@/components/Sections/ExpandedServices";
import { TrustTicker } from "@/components/ui/TrustTicker";
import { BlogSection } from "@/components/Sections/Blog";
import { DiscoveryForm } from "@/components/Sections/DiscoveryForm";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-black min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[1000] origin-left" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <TrustTicker />
      <ServicesGrid />
      <BlogSection />
      <DiscoveryForm />
    </div>
  );
}