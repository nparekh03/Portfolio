"use client";

export function trackPageView(page: string) {
  if (typeof window === "undefined") return;
  
  localStorage.setItem(`${page}Viewed`, "true");
  
  // Track case study views
  if (page.startsWith("work/")) {
    const current = localStorage.getItem("caseStudiesViewed");
    const count = current ? parseInt(current) : 0;
    localStorage.setItem("caseStudiesViewed", (count + 1).toString());
  }
  
  // Track frameworks view
  if (page === "frameworks") {
    localStorage.setItem("frameworksViewed", "true");
  }
}

export function trackDeepDive() {
  if (typeof window === "undefined") return;
  localStorage.setItem("deepDive", "true");
}


