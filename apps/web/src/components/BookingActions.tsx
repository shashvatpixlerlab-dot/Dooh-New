"use client";

import { useRouter } from "next/navigation";
import {
  approveBookingAction,
  rejectBookingAction,
} from "@/app/admin/actions";
import { ApproveRejectActions } from "@/components/dashboard/RejectReasonDialog";

export function BookingActions({
  bookingId,
  adminEmail,
}: {
  bookingId: string;
  adminEmail: string;
}) {
  const router = useRouter();

  return (
    <ApproveRejectActions
      onApprove={async () => {
        await approveBookingAction(bookingId, adminEmail);
        router.refresh();
      }}
      onReject={async (reason) => {
        await rejectBookingAction(bookingId, adminEmail, reason);
        router.refresh();
      }}
    />
  );
}
