"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, Rocket, Brain } from "lucide-react";

const timeline = [
  {
    year: "2020",
    title: "Education",
    description: "Foundation in Finance & Technology",
    icon: GraduationCap,
  },
  {
    year: "2021-2022",
    title: "Finance",
    description: "Deep dive into financial systems",
    icon: Briefcase,
  },
  {
    year: "2022-2023",
    title: "Product Management",
    description: "Transition to product leadership",
    icon: Rocket,
  },
  {
    year: "2024+",
    title: "AI & Innovation",
    description: "Building AI-powered products",
    icon: Brain,
  },
];

const capabilities = [
  {
    title: "Full Lifecycle Management",
    description: "From discovery to launch and iteration",
  },
  {
    title: "Data-Driven Decision Making",
    description: "Metrics, analytics, and user research",
  },
  {
    title: "Problem Selection & Prioritization",
    description: "RICE, MoSCoW, and strategic frameworks",
  },
  {
    title: "Design & Documentation",
    description: "PRDs, wireframes, and user journeys",
  },
  {
    title: "Success Metrics & KRIs",
    description: "North star metrics and key results",
  },
  {
    title: "Continuous Reflection",
    description: "Learning loops and iteration",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From finance to product management, building products that solve
              real problems
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mb-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`flex items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center md:text-left`}>
                      <div className="inline-flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    
                    <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ARC Framework Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The ARC Framework
            </h2>
            <p className="text-muted-foreground text-lg">
              My product philosophy visualized
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                letter: "A",
                title: "Alignment",
                description: "Goal + North-Star Metrics",
                color: "from-primary to-primary/70",
              },
              {
                letter: "R",
                title: "Research",
                description: "Insights → Pain Points",
                color: "from-secondary to-secondary/70",
              },
              {
                letter: "C",
                title: "Creation",
                description: "Process → Prioritization → Design",
                color: "from-accent to-accent/70",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div
                  className={`text-6xl font-bold mb-4 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                >
                  {item.letter}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Capabilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PM Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Core skills that drive product success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              When I'm not building products...
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm exploring the intersection of AI and human-centered design,
              reading about product strategy, and thinking about how to make
              technology more accessible and meaningful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:niraliparekh03@gmail.com"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/niraliparekh0303"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

