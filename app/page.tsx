"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";

const stats = [
  { value: 6, suffix: "+", label: "Products Shipped", icon: "🚀" },
  { value: 10000, suffix: "+", label: "Users Impacted", icon: "👥" },
  { value: 47, label: "Problems Solved", icon: "🧩" },
  { value: 94, suffix: "%", label: "Success Rate", icon: "🎯" },
];

const pillars = [
  {
    icon: "🎯",
    title: "Product Thinking",
    description: "Systems that scale",
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    description: "Complexity to clarity",
  },
  {
    icon: "💡",
    title: "User-Centric",
    description: "Empathy drives design",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <main id="main-content" className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        {/* Floating Particles */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
                }}
                animate={{
                  y: [null, Math.random() * 100 - 50],
                  x: [null, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Product Manager | AI · Fintech · SaaS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block">I architect products that</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                transform user insights into scalable solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            >
              AI & Fintech Product Manager | Empathy → Clarity → Impact
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/work"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                Explore My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Nirali_Parekh_Resume.pdf"
                aria-label="Download resume PDF"
                className="group px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PM Stats Dashboard */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PM Stats Dashboard
            </h2>
            <p className="text-muted-foreground text-lg">
              Metrics that matter in product management
            </p>
          </motion.div>
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* My Why Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Why</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three pillars that guide my approach to product management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-lg">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

