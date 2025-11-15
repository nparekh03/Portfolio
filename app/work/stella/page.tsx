"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import { ArrowLeft, Zap, Target } from "lucide-react";
import Link from "next/link";

const impactMetrics = [
  { value: 70, suffix: "%", label: "Faster Quote Generation" },
  { value: 25, suffix: "+", label: "Merchants Onboarded" },
  { value: 120, label: "Hours/Month Saved" },
  { value: 45, suffix: "%", label: "Higher Order Accuracy" },
];

export default function StellaPage() {
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
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Stella Diam
                </h1>
                <p className="text-muted-foreground text-lg">
                  Merchant Management Platform
                </p>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              0→1 B2B E-commerce Automation
            </div>
            <div className="text-xl font-bold mb-8">
              Custom Orders Automated | 3× Fulfillment Speed
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
              <Target className="w-8 h-8 text-secondary" />
              Problem Statement
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                Stella Diam's merchant operations were struggling with manual
                processes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Manual status tracking across merchant operations</li>
                <li>Complex custom order management without automation</li>
                <li>Fragmented B2B workflows causing delays</li>
                <li>High error rates in order fulfillment</li>
              </ul>
            </div>
          </motion.section>

          {/* Research */}
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
                <h3 className="font-semibold mb-2">Merchant Interviews</h3>
                <p className="text-muted-foreground italic mb-2">
                  "We spend 3-4 hours daily just tracking order statuses across
                  different systems."
                </p>
                <p className="text-muted-foreground">
                  - Merchant Operations Manager
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Operational Pain Points</h3>
                <p className="text-muted-foreground">
                  Identified that 60% of merchant time was spent on manual data
                  entry and status updates, with custom orders taking 2-3 days
                  longer than standard orders.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Supply Chain Friction</h3>
                <p className="text-muted-foreground">
                  Analysis revealed communication gaps between merchants,
                  manufacturers, and fulfillment centers, causing delays and
                  errors.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  1. Merchant Dashboard
                </h3>
                <p className="text-muted-foreground mb-4">
                  Built a unified dashboard providing real-time visibility into
                  all orders, inventory, and fulfillment status across all
                  channels.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  2. SKU Management System
                </h3>
                <p className="text-muted-foreground mb-4">
                  Created an intelligent SKU management system that
                  automatically categorizes and tracks inventory across multiple
                  warehouses.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  3. Order Customization UX
                </h3>
                <p className="text-muted-foreground mb-4">
                  Designed an intuitive flow for custom order creation with
                  real-time pricing, availability checks, and automated
                  notifications.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  4. Workflow Automation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implemented automated workflows for order processing, status
                  updates, and fulfillment coordination, reducing manual
                  intervention by 80%.
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

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
          >
            <h2 className="text-3xl font-bold mb-4">Reflection</h2>
            <p className="text-lg italic text-muted-foreground">
              "0→1 taught me that constraints breed creativity. Building for
              manufacturers means respecting their domain expertise while
              elevating their tools. The biggest challenge wasn't the
              technology—it was understanding the nuanced workflows that had
              evolved over years of operation and finding ways to enhance them
              without disrupting what already worked."
            </p>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

