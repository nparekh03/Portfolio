"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, BookOpen, Target, TrendingUp, Lightbulb } from "lucide-react";

const frameworks = [
  {
    id: "arc",
    name: "ARC Framework",
    description: "Alignment, Research, Creation - The core product philosophy",
    when: "Use for structuring product thinking and decision-making",
    example: "Applied in CDP Financial Services to align goals with north-star metrics",
    icon: Target,
    color: "from-primary to-primary/70",
  },
  {
    id: "6qs",
    name: "6Qs Analysis",
    description: "Who, What, Why, Where, What (behavioral), What (opportunities)",
    when: "Use for comprehensive product analysis and competitive research",
    example: "Used in Scenic Sync to analyze Google Maps and identify opportunities",
    icon: BookOpen,
    color: "from-secondary to-secondary/70",
  },
  {
    id: "rice",
    name: "RICE / MoSCoW",
    description: "Prioritization frameworks for feature selection",
    when: "Use when deciding what to build next and managing backlog",
    example: "Applied RICE scoring in Stella Diam to prioritize automation features",
    icon: TrendingUp,
    color: "from-accent to-accent/70",
  },
  {
    id: "lifecycle",
    name: "Product Lifecycle",
    description: "Discover → Define → Design → Deliver → Iterate",
    when: "Use for structuring the product development process",
    example: "Framework guiding all case studies from discovery to launch",
    icon: Target,
    color: "from-primary to-secondary",
  },
  {
    id: "journey",
    name: "Journey Metrics",
    description: "Mapping user journeys and conversion funnels",
    when: "Use for understanding user flows and identifying drop-off points",
    example: "Used in CDP to identify onboarding friction points",
    icon: TrendingUp,
    color: "from-secondary to-accent",
  },
  {
    id: "northstar",
    name: "North Star Metrics",
    description: "Defining the single metric that matters most",
    when: "Use for aligning teams around a shared success definition",
    example: "AUM growth as north star for CDP Financial Services platform",
    icon: Lightbulb,
    color: "from-accent to-primary",
  },
  {
    id: "insights",
    name: "Insights → Ideas → Features",
    description: "Transforming research into actionable product features",
    when: "Use for translating user research into product roadmap",
    example: "Merchant interviews in Stella Diam led to automated workflow features",
    icon: Lightbulb,
    color: "from-primary to-accent",
  },
  {
    id: "reflection",
    name: "Reflection Loop",
    description: "Continuous learning and iteration based on outcomes",
    when: "Use after launches to capture learnings and improve processes",
    example: "Post-launch reflections in all case studies inform future work",
    icon: BookOpen,
    color: "from-secondary to-primary",
  },
];

export default function FrameworksPage() {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);

  const framework = selectedFramework
    ? frameworks.find((f) => f.id === selectedFramework)
    : null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frameworks & Thinking
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reusable mental models and frameworks that guide product decisions
            </p>
          </motion.div>

          {/* Framework Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {frameworks.map((fw, index) => {
              const Icon = fw.icon;
              return (
                <motion.div
                  key={fw.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => setSelectedFramework(fw.id)}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${fw.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{fw.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {fw.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Framework View */}
          {framework && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
              onClick={() => setSelectedFramework(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                className="max-w-2xl w-full p-8 rounded-xl bg-card border border-border shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedFramework(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${framework.color} flex items-center justify-center`}
                  >
                    {(() => {
                      const Icon = framework.icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{framework.name}</h2>
                    <p className="text-muted-foreground">
                      {framework.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      When to Use
                    </h3>
                    <p className="text-muted-foreground">{framework.when}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Real Example
                    </h3>
                    <p className="text-muted-foreground">{framework.example}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

