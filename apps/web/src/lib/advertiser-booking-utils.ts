export type BookingStatusVariant = "success" | "warning" | "secondary" | "destructive";

const STATUS_META: Record<
  string,
  { label: string; variant: BookingStatusVariant }
> = {
  PENDING_APPROVAL: { label: "Pending approval", variant: "warning" },
  APPROVED: { label: "Approved", variant: "success" },
  REJECTED: { label: "Rejected", variant: "destructive" },
  REFUNDED: { label: "Refunded", variant: "secondary" },
  COMPLETED: { label: "Completed", variant: "success" },
  AWAITING_PAYMENT: { label: "Awaiting payment", variant: "warning" },
  HELD: { label: "Hold active", variant: "warning" },
  CANCELLED: { label: "Cancelled", variant: "destructive" },
  EXPIRED: { label: "Expired", variant: "destructive" },
  DRAFT: { label: "Draft", variant: "secondary" },
};

export function bookingStatusMeta(status: string) {
  return (
    STATUS_META[status] ?? {
      label: status.replace(/_/g, " "),
      variant: "secondary" as const,
    }
  );
}

export function formatBookingAmount(value: string | number) {
  const n = Number(value);
  return Number.isFinite(n) ? (Number.isInteger(n) ? n : n.toFixed(2)) : value;
}
