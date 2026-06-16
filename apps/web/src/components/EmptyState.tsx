import Link from "next/link";

export function EmptyState({
  icon = "○",
  title,
  message,
  actionHref,
  actionLabel,
}: {
  icon?: string;
  title: string;
  message: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden>
        {icon}
      </div>
      <h2>{title}</h2>
      <p className="muted">{message}</p>
      {actionHref && actionLabel && (
        <Link href={actionHref} className="btn">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
