import { cn } from "@/lib/utils";
import shared from "@/components/landing/styles/shared.module.css";

export function PremiumCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Tag className={cn(shared.premiumCard, "group", className)}>
      <div className={shared.premiumCardShine} aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}

export function PremiumCardIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        shared.premiumCardIcon,
        "mb-3 flex h-10 w-10 items-center justify-center sm:mb-4 sm:h-12 sm:w-12",
        className
      )}
    >
      {children}
    </span>
  );
}
