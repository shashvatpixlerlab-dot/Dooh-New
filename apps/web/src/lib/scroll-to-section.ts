export const LANDING_SECTIONS = {
  features: "features",
  howItWorks: "how-it-works",
  screens: "screens",
} as const;

export type LandingSectionId =
  (typeof LANDING_SECTIONS)[keyof typeof LANDING_SECTIONS];

export const LANDING_SECTION_IDS = new Set<string>(Object.values(LANDING_SECTIONS));

export function scrollToLandingSection(id: LandingSectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function landingSectionHref(id: LandingSectionId) {
  return `/?section=${id}`;
}
