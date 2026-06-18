import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="brand-screen" x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--tracle-primary-light)" />
          <stop offset="1" stopColor="var(--tracle-primary)" />
        </linearGradient>
        <linearGradient id="brand-signal" x1="22" y1="10" x2="32" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--tracle-primary-light)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--tracle-primary)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="22" height="16" rx="4" fill="url(#brand-screen)" />
      <rect x="4" y="6" width="22" height="16" rx="4" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
      <path
        d="M10 24 L14 20 L18 23 L22 17"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 12 C29 14 30.5 17 30.5 20 C30.5 23 29 26 26 28"
        stroke="url(#brand-signal)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M29 10 C33.5 13 35.5 17.5 35.5 22 C35.5 26.5 33.5 31 29 34"
        stroke="url(#brand-signal)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="15" cy="28" r="2.5" fill="var(--tracle-primary)" />
      <rect x="13" y="28" width="4" height="2" rx="1" fill="var(--tracle-primary-dark)" />
    </svg>
  );
}
