import { LANDING_SECTIONS, type LandingSectionId } from "@/lib/scroll-to-section";

export const MARKETPLACE_NAV_LINKS: {
  section: LandingSectionId;
  label: string;
}[] = [
  { section: LANDING_SECTIONS.features, label: "Features" },
  { section: LANDING_SECTIONS.howItWorks, label: "How it works" },
  { section: LANDING_SECTIONS.screens, label: "Screens" },
];
