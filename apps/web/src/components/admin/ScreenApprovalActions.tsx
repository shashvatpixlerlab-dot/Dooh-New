"use client";

import { useRouter } from "next/navigation";
import {
  approveScreenAction,
  rejectScreenAction,
} from "@/app/admin/actions";
import { ApproveRejectActions } from "@/components/dashboard/RejectReasonDialog";

export function ScreenApprovalActions({
  screenId,
  stacked = false,
}: {
  screenId: string;
  stacked?: boolean;
}) {
  const router = useRouter();

  return (
    <ApproveRejectActions
      stacked={stacked}
      onApprove={async () => {
        await approveScreenAction(screenId);
        router.refresh();
      }}
      onReject={async (reason) => {
        await rejectScreenAction(screenId, reason);
        router.refresh();
      }}
    />
  );
}
