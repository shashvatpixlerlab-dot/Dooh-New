"use client";

import { Button } from "@/components/ui/button";
import {
  scrollToLandingSection,
  type LandingSectionId,
} from "@/lib/scroll-to-section";

export function ScrollToSectionButton({
  section,
  children,
  className,
  size = "lg",
  variant,
}: {
  section: LandingSectionId;
  children: React.ReactNode;
  className?: string;
  size?: React.ComponentProps<typeof Button>["size"];
  variant?: React.ComponentProps<typeof Button>["variant"];
}) {
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      className={className}
      onClick={() => scrollToLandingSection(section)}
    >
      {children}
    </Button>
  );
}
