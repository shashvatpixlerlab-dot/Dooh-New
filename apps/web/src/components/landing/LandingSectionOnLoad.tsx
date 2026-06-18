"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  LANDING_SECTION_IDS,
  scrollToLandingSection,
  type LandingSectionId,
} from "@/lib/scroll-to-section";

export function LandingSectionOnLoad() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = searchParams.get("section");

  useEffect(() => {
    if (!section || !LANDING_SECTION_IDS.has(section)) return;

    scrollToLandingSection(section as LandingSectionId);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("section");
    const query = params.toString();
    router.replace(query ? `/?${query}` : "/", { scroll: false });
  }, [section, router, searchParams]);

  return null;
}
