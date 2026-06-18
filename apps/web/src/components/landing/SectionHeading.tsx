import { cn } from "@/lib/utils";
import shared from "@/components/landing/styles/shared.module.css";

export function SectionBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(shared.sectionHeadingBadge, className)}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        shared.sectionHeading,
        align === "center" && cn(shared.sectionHeadingCenter, "mx-auto max-w-2xl"),
        align === "left" && cn(shared.sectionHeadingLeft, "max-w-2xl"),
        className
      )}
    >
      {eyebrow ? <SectionBadge>{eyebrow}</SectionBadge> : null}
      <h2 className={shared.sectionHeadingTitle}>{title}</h2>
      {description ? (
        <p className={shared.sectionHeadingDescription}>{description}</p>
      ) : null}
    </div>
  );
}
