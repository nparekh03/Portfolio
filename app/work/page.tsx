"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Zap, Map, Bot } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const caseStudies = [
  {
    id: "cdp",
    title: "CDP Financial Services",
    subtitle: "Investment Platform",
    description: "Digitizing Investment Experiences",
    heroStat: "2.5× Faster Onboarding | 35% AUM Growth",
    icon: TrendingUp,
    color: "from-primary to-primary/70",
    tags: ["Fintech", "B2B", "Platform"],
  },
  {
    id: "stella",
    title: "Stella Diam",
    subtitle: "Merchant Management Platform",
    description: "0→1 B2B E-commerce Automation",
    heroStat: "Custom Orders Automated | 3× Fulfillment Speed",
    icon: Zap,
    color: "from-secondary to-secondary/70",
    tags: ["B2B", "E-commerce", "Automation"],
  },
];

const sideProjects = [
  {
    id: "scenic",
    title: "Scenic Sync",
    subtitle: "Google Maps Enhancement",
    description: "Navigation for Memories, Not Miles",
    heroStat: "3× Higher Joy Ratings | 40% Discovery Behavior",
    icon: Map,
    color: "from-accent to-accent/70",
    tags: ["AI", "Navigation", "UX"],
  },
  {
    id: "netlyai",
    title: "NetlyAI",
    subtitle: "AI Networking Agent",
    description: "AI-Powered Networking",
    heroStat: "10× Reduction in Cognitive Load | 80% Time Saved",
    icon: Bot,
    color: "from-primary to-secondary",
    tags: ["AI", "Productivity", "GPT"],
  },
];

export default function WorkPage() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Scroll to top when navigating back to work page
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [pathname]);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Case studies, side projects, and product deep dives
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={`${project.id}-${pathname}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Link
                      href={`/work/${project.id}`}
                      className="block group"
                    >
                      <div className="h-full p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105">
                        <div
                          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-lg mb-4">{project.description}</p>
                        <div className="text-sm font-semibold text-primary mb-4">
                          {project.heroStat}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                          View Case Study
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Side Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Side Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sideProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={`${project.id}-${pathname}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Link
                      href={`/work/${project.id}`}
                      className="block group"
                    >
                      <div className="h-full p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105">
                        <div
                          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-lg mb-4">{project.description}</p>
                        {project.heroStat && (
                          <div className="text-sm font-semibold text-primary mb-4">
                            {project.heroStat}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                          View Project
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

