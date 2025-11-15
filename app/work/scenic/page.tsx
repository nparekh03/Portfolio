"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import { ArrowLeft, Map, Target, Search, Lightbulb, CheckCircle, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import StreamlitEmbed from "@/components/StreamlitEmbed";

const impactMetrics = [
  { value: 3, suffix: "×", label: "Higher Joy Ratings" },
  { value: 40, suffix: "%", label: "Discovery Behavior" },
  { value: 2, suffix: "×", label: "Time on Route" },
  { value: 85, suffix: "%", label: "Would Recommend" },
];

const sixQs = [
  {
    question: "Who are the users?",
    answer:
      "Travelers, road trippers, and commuters who value experiences over speed. People seeking scenic routes, accessibility-friendly paths, and memorable journeys.",
  },
  {
    question: "What problem does it solve?",
    answer:
      "Current navigation apps optimize only for speed, ignoring the emotional and experiential aspects of travel. Users want routes that match their mood and purpose.",
  },
  {
    question: "Why does it succeed?",
    answer:
      "Google Maps succeeds because it's comprehensive, accurate, and integrated. However, it lacks personalization for route preferences beyond 'fastest' or 'shortest'.",
  },
  {
    question: "Where does it fall short?",
    answer:
      "No scenic route options, limited accessibility information, and no way to discover interesting stops along the way. It treats navigation as purely transactional.",
  },
  {
    question: "What behavioral insights matter?",
    answer:
      "Users often take longer routes intentionally for views, stops, or experiences. Many plan routes around photo opportunities, viewpoints, and scenic beauty.",
  },
  {
    question: "What opportunities exist?",
    answer:
      "Scenic route scoring, accessibility filters, AI-powered route descriptions, and predefined scenic experiences could transform navigation from utility to delight.",
  },
];

const improvementSteps = [
  {
    step: 1,
    title: "Problem Selection",
    description: "Why scenic routes matter - emotional navigation needs",
  },
  {
    step: 2,
    title: "Research",
    description: "User frustration data and Google Maps review analysis",
  },
  {
    step: 3,
    title: "Prioritization",
    description: "RICE framework applied to feature development",
  },
  {
    step: 4,
    title: "Design",
    description: "Wireframes and UX flow for scenic route selection",
  },
  {
    step: 5,
    title: "Success Metrics",
    description: "Engagement KPIs and user satisfaction metrics",
  },
  {
    step: 6,
    title: "Journey Metrics",
    description: "Conversion funnels from route selection to completion",
  },
  {
    step: 7,
    title: "Reflection",
    description: "Personal insights and lessons learned",
  },
];

export default function ScenicPage() {
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

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
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Scenic Sync
                </h1>
                <p className="text-muted-foreground text-lg">
                  Google Maps Enhancement
                </p>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-accent mb-6">
              Navigation for Memories, Not Miles
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-accent" />
              Problem Statement
            </h2>
            <p className="text-lg italic text-muted-foreground">
              "My grandfather's last road trip to Acadia taught me that
              journeys are emotional, not transactional. Yet every nav app
              optimizes for speed, not experience."
            </p>
            <p className="text-lg mt-4">
              Current navigation apps focus solely on getting users from point A
              to B as quickly as possible, ignoring the emotional and
              experiential aspects of travel. Users want routes that match
              their mood, purpose, and desire for discovery.
            </p>
          </motion.section>

          {/* 6Qs Framework */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              Google Maps Analysis (6Qs Framework)
            </h2>
            <div className="space-y-4">
              {sixQs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedQ(expandedQ === index ? null : index)
                    }
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-lg">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>
                  {expandedQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-muted-foreground"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Improvement Framework */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-secondary" />
              Improvement Framework (7 Steps)
            </h2>
            <div className="space-y-4">
              {improvementSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Solution Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-xl bg-muted/30 border border-border"
          >
            <h2 className="text-3xl font-bold mb-6">Solution Architecture</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Scenic Route Scoring Algorithm</h3>
                <p className="text-muted-foreground">
                  Developed an algorithm that scores routes based on scenic
                  beauty, viewpoints, photo opportunities, and user preferences.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Accessibility Route Filters</h3>
                <p className="text-muted-foreground">
                  Integrated filters for wheelchair accessibility, EV charging
                  stations, and rest stops along scenic routes.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">AI-Powered Route Descriptions</h3>
                <p className="text-muted-foreground">
                  GPT integration to generate engaging route descriptions
                  highlighting scenic features, historical points, and
                  recommended stops.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Predefined Scenic Experiences</h3>
                <p className="text-muted-foreground">
                  Curated scenic route collections for popular destinations,
                  making it easy for users to discover beautiful journeys.
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

          {/* Try It Out */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <PlayCircle className="w-8 h-8 text-accent" />
                Try It Out
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Experience Scenic Sync firsthand. Use the interactive app below to explore scenic routes, 
                discover beautiful journeys, and see how navigation can be both functional and delightful.
              </p>
              <p className="text-sm text-muted-foreground">
                Enter your starting point and destination to find scenic routes that prioritize experience over speed.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-muted/30 border border-border">
              <StreamlitEmbed 
                url="https://scenic-sync.streamlit.app/" 
                title="Scenic Sync Interactive App"
              />
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20"
          >
            <h2 className="text-3xl font-bold mb-4">Reflection</h2>
            <p className="text-lg italic text-muted-foreground">
              "Building Scenic Sync reminded me that the best products don't
              just solve problems—they unlock experiences people didn't know
              they were missing. The challenge wasn't technical; it was
              understanding that navigation can be both functional and
              delightful. By focusing on the emotional journey rather than
              just the destination, we created something that transforms how
              people think about travel."
            </p>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

