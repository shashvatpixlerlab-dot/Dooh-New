"use client";

import { cn } from "@/lib/utils";
import {
  scrollToLandingSection,
  type LandingSectionId,
} from "@/lib/scroll-to-section";

export function ScrollToSectionLink({
  section,
  className,
  children,
  onClick,
  ...props
}: {
  section: LandingSectionId;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={() => {
        scrollToLandingSection(section);
        onClick?.();
      }}
      className={cn(
        "cursor-pointer border-0 bg-transparent p-0 text-inherit",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
