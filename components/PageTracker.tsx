"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/tracking";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const page = pathname.replace("/", "") || "home";
      trackPageView(page);
    }
  }, [pathname]);

  return null;
}


