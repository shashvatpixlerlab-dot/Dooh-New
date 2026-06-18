import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import navbar from "@/components/landing/styles/navbar.module.css";
import { cn } from "@/lib/utils";

export function BrandLogo({
  href = "/",
  className,
  showWordmark = true,
  size = "default",
  markClassName,
  titleClassName,
  subtitleClassName,
}: {
  href?: string;
  className?: string;
  showWordmark?: boolean;
  size?: "default" | "sm";
  markClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  const markSize = size === "sm" ? 28 : 36;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className
      )}
    >
      <span
        className={cn(
          navbar.brandMarkWrap,
          markClassName,
          "relative flex items-center justify-center rounded-xl p-1"
        )}
      >
        <BrandMark size={markSize} />
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[15px] font-semibold tracking-tight text-foreground",
              titleClassName
            )}
          >
            DOOH
          </span>
          <span
            className={cn(
              "text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase",
              subtitleClassName
            )}
          >
            Network
          </span>
        </span>
      ) : null}
    </Link>
  );
}
