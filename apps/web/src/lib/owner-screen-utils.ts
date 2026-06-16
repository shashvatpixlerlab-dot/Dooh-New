import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "@/components/ui/badge";

export type DeviceApprovalStatus = "PENDING" | "APPROVED" | "REJECTED";

export function approvalLabel(status: DeviceApprovalStatus | string): string {
  switch (status) {
    case "APPROVED":
      return "Approved";
    case "REJECTED":
      return "Rejected";
    default:
      return "Pending";
  }
}

export function approvalBadgeVariant(
  status: DeviceApprovalStatus | string
): NonNullable<VariantProps<typeof badgeVariants>["variant"]> {
  switch (status) {
    case "APPROVED":
      return "success";
    case "REJECTED":
      return "destructive";
    default:
      return "warning";
  }
}
