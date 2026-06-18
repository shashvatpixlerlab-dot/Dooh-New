"use client";

import { useEffect, useState } from "react";
import {
  LANDING_SECTION_IDS,
  type LandingSectionId,
} from "@/lib/scroll-to-section";

export function useLandingActiveSection() {
  const [activeSection, setActiveSection] = useState<LandingSectionId | null>(
    null
  );

  useEffect(() => {
    const sections = Array.from(LANDING_SECTION_IDS)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id;
        if (top && LANDING_SECTION_IDS.has(top)) {
          setActiveSection(top as LandingSectionId);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
