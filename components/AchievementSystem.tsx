"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X } from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: () => boolean;
}

const achievements: Achievement[] = [
  {
    id: "problem-hunter",
    name: "Problem Hunter",
    description: "Viewed 3+ case studies",
    icon: "🎯",
    condition: () => {
      const viewed = localStorage.getItem("caseStudiesViewed");
      return viewed ? parseInt(viewed) >= 3 : false;
    },
  },
  {
    id: "framework-explorer",
    name: "Framework Explorer",
    description: "Checked frameworks section",
    icon: "🧩",
    condition: () => {
      return localStorage.getItem("frameworksViewed") === "true";
    },
  },
  {
    id: "deep-diver",
    name: "Deep Diver",
    description: "Spent 5+ min on one project",
    icon: "💡",
    condition: () => {
      return localStorage.getItem("deepDive") === "true";
    },
  },
  {
    id: "pm-enthusiast",
    name: "PM Enthusiast",
    description: "Completed all sections",
    icon: "🏆",
    condition: () => {
      const sections = [
        "homeViewed",
        "aboutViewed",
        "workViewed",
        "frameworksViewed",
        "contactViewed",
      ];
      return sections.every((s) => localStorage.getItem(s) === "true");
    },
  },
];

export default function AchievementSystem() {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    const checkAchievements = () => {
      achievements.forEach((achievement) => {
        const unlocked = localStorage.getItem(`achievement_${achievement.id}`);
        if (!unlocked && achievement.condition()) {
          localStorage.setItem(`achievement_${achievement.id}`, "true");
          setUnlockedAchievements((prev) => [...prev, achievement.id]);
          setCurrentAchievement(achievement);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 5000);
        }
      });
    };

    checkAchievements();
    const interval = setInterval(checkAchievements, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {showToast && currentAchievement && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 left-1/2 z-50 p-4 rounded-xl bg-card border border-border shadow-2xl max-w-sm"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl">{currentAchievement.icon}</div>
            <div className="flex-1">
              <div className="font-bold text-lg">{currentAchievement.name}</div>
              <div className="text-sm text-muted-foreground">
                {currentAchievement.description}
              </div>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


