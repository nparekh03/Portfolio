"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Bot, Target, Zap, Brain, PlayCircle } from "lucide-react";
import Link from "next/link";
import WebAppEmbed from "@/components/WebAppEmbed";

export default function NetlyAIPage() {
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
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">NetlyAI</h1>
                <p className="text-muted-foreground text-lg">
                  AI Networking Agent
                </p>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              AI-Powered Networking
            </div>
            <div className="text-xl font-bold mb-8">
              10× Reduction in Cognitive Load
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
                Professional networking is essential but time-consuming and
                cognitively demanding:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Networking friction and cognitive overload</li>
                <li>Time-consuming outreach message drafting</li>
                <li>Difficulty tracking relationship history</li>
                <li>Lack of personalization in outreach</li>
              </ul>
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
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-secondary" />
              Solution
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  GPT-Powered Outreach Drafts
                </h3>
                <p className="text-muted-foreground mb-4">
                  AI generates personalized outreach messages based on context,
                  relationship history, and communication goals.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  Relationship Tracking
                </h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent system tracks interactions, conversation history,
                  and relationship context to inform future communications.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">
                  Agentic Workflow
                </h3>
                <p className="text-muted-foreground mb-4">
                  Automated workflow that suggests outreach timing, message
                  tone, and follow-up strategies based on relationship stage.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Approach */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-xl bg-muted/30 border border-border"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-accent" />
              Prompt Engineering Approach
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                NetlyAI uses carefully crafted prompts that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analyze relationship context and history</li>
                <li>Generate tone-appropriate messages</li>
                <li>Suggest optimal timing for outreach</li>
                <li>Personalize content based on recipient profile</li>
                <li>Maintain consistency across communications</li>
              </ul>
            </div>
          </motion.section>

          {/* Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">10×</div>
                <div className="text-muted-foreground">
                  Reduction in cognitive load for networking tasks
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <div className="text-muted-foreground">
                  Time saved on message drafting
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">3×</div>
                <div className="text-muted-foreground">
                  Increase in outreach frequency
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">
                  User satisfaction with AI-generated messages
                </div>
              </div>
            </div>
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
                <PlayCircle className="w-8 h-8 text-primary" />
                Try It Out
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Experience NetlyAI firsthand. Use the interactive app below to generate personalized 
                outreach messages, track relationships, and see how AI can amplify human connection 
                while reducing networking friction.
              </p>
              <p className="text-sm text-muted-foreground">
                Try drafting a networking message or explore the relationship tracking features.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-muted/30 border border-border">
              <WebAppEmbed 
                url="https://netly-ai-connect.lovable.app/" 
                title="NetlyAI Interactive App"
                initialHeight={900}
                enableHeightAdjustment={false}
              />
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
              "NetlyAI taught me that AI can amplify human connection rather
              than replace it. The key was designing prompts that preserve
              authenticity while reducing friction. Users appreciated the
              time savings, but what really resonated was how the tool helped
              them maintain relationships they might have otherwise let slip
              due to time constraints."
            </p>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

