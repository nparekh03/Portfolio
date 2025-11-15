"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} isInView={isInView} delay={index * 0.1} />
      ))}
    </div>
  );
}

function StatCard({
  stat,
  isInView,
  delay,
}: {
  stat: Stat;
  isInView: boolean;
  delay: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(stat.value);
      const unsubscribe = spring.on("change", (latest) => {
        setDisplayValue(Math.floor(latest));
      });
      return () => unsubscribe();
    }
  }, [isInView, stat.value, spring]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
    >
      {stat.icon && (
        <div className="text-3xl mb-2">{stat.icon}</div>
      )}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
        {displayValue.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}


