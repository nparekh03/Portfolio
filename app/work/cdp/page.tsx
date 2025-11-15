"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import { ArrowLeft, TrendingUp, Users, Clock, Target } from "lucide-react";
import Link from "next/link";

const impactMetrics = [
  { value: 2.5, suffix: "×", label: "Faster Activation" },
  { value: 35, suffix: "%", label: "AUM Growth" },
  { value: 60, suffix: "%", label: "RM Productivity" },
  { value: 40, suffix: "%", label: "Drop-off Reduction" },
];

export default function CDPPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  CDP Financial Services
                </h1>
                <p className="text-muted-foreground text-lg">
                  Investment Platform
                </p>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Digitizing Investment Experiences
            </div>
            <div className="text-xl font-bold mb-8">
              2.5× Faster Onboarding | 35% AUM Growth
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Problem Statement
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                CDP Financial Services faced significant challenges in their
                investment platform onboarding process:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Manual onboarding processes creating friction</li>
                <li>Compliance-heavy workflows slowing down activation</li>
                <li>Fragmented advisory experiences across platforms</li>
                <li>High drop-off rates during the onboarding journey</li>
              </ul>
            </div>
          </motion.section>

          {/* Research & Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-xl bg-muted/30 border border-border"
          >
            <h2 className="text-3xl font-bold mb-6">Research & Insights</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Customer Journey Analysis</h3>
                <p className="text-muted-foreground">
                  Identified 12 distinct pain points across the onboarding
                  journey, with compliance verification being the primary
                  bottleneck.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Behavioral Metrics</h3>
                <p className="text-muted-foreground">
                  Analysis revealed that users who completed onboarding in under
                  15 minutes had 3× higher activation rates.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Advisory Feedback</h3>
                <p className="text-muted-foreground">
                  Relationship managers reported spending 40% of their time on
                  manual data entry and compliance checks.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Solution & Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Solution & Process</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  1. Workflow Redesign
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redesigned the entire onboarding workflow with a focus on
                  reducing steps and automating compliance checks.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  2. Digital Onboarding Platform
                </h3>
                <p className="text-muted-foreground mb-4">
                  Built a streamlined digital onboarding experience with
                  real-time validation and progress tracking.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  3. Recommendations Engine
                </h3>
                <p className="text-muted-foreground mb-4">
                  Integrated an AI-powered recommendations engine to personalize
                  investment suggestions based on user profiles.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  4. Dashboard & Analytics
                </h3>
                <p className="text-muted-foreground mb-4">
                  Created comprehensive dashboards for both end-users and
                  relationship managers to track progress and performance.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Impact Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Impact Metrics
            </h2>
            <StatsCounter stats={impactMetrics} />
          </motion.section>

          {/* Launch Strategy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-xl bg-muted/30 border border-border"
          >
            <h2 className="text-3xl font-bold mb-6">Launch Strategy</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phased Rollout</h3>
                  <p className="text-muted-foreground">
                    Launched with a pilot group of 50 relationship managers,
                    gradually expanding to full deployment over 3 months.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Training Program</h3>
                  <p className="text-muted-foreground">
                    Comprehensive training sessions and documentation to ensure
                    smooth adoption across all teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Weekly KRI Dashboard</h3>
                  <p className="text-muted-foreground">
                    Established weekly key result indicators (KRIs) to monitor
                    adoption, activation rates, and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-4">Reflection</h2>
            <p className="text-lg italic text-muted-foreground">
              "Building for trust in fintech means designing for both velocity
              and safety. Every automation must feel like expertise, not just
              efficiency. The key was understanding that our users needed to
              feel confident in the system's recommendations, which required
              transparent communication and gradual introduction of automated
              features."
            </p>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

