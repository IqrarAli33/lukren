"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Sections/Hero";
import { TrustTicker } from "@/components/ui/TrustTicker";
import { StatsSection } from "@/components/Sections/Stats";
import { ServicesGrid } from "@/components/Sections/ExpandedServices";
import { ProcessSection } from "@/components/Sections/Process";
import { CaseStudies } from "@/components/Sections/CaseStudies";
import { BlogSection } from "@/components/Sections/Blog";
import { FAQSection } from "@/components/Sections/FAQ";
import { CTABanner } from "@/components/Sections/CTABanner";
import { DiscoveryForm } from "@/components/Sections/DiscoveryForm";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 z-[1000] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <TrustTicker />
      <StatsSection />
      <ServicesGrid />
      <ProcessSection />
      <CaseStudies />
      <BlogSection />
      <FAQSection />
      <CTABanner />
      <DiscoveryForm />
      <Footer />
    </div>
  );
}