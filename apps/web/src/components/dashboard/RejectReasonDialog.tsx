"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function RejectReasonDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: (reason: string) => Promise<void>;
}) {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    if (reason.trim().length < 3) return;
    setLoading(true);
    try {
      await onConfirm(reason.trim());
      setReason("");
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <textarea
          placeholder="Explain why this is being rejected…"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={3}
          className="flex w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        />
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              void handleConfirm();
            }}
            disabled={loading || reason.trim().length < 3}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {loading ? "Rejecting…" : "Reject"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function ApproveRejectActions({
  onApprove,
  onReject,
  approveLabel = "Approve",
  rejectLabel = "Reject",
  stacked = false,
}: {
  onApprove: () => Promise<void>;
  onReject: (reason: string) => Promise<void>;
  approveLabel?: string;
  rejectLabel?: string;
  stacked?: boolean;
}) {
  const [rejectOpen, setRejectOpen] = useState(false);
  const [approving, setApproving] = useState(false);

  async function approve() {
    setApproving(true);
    try {
      await onApprove();
    } finally {
      setApproving(false);
    }
  }

  return (
    <>
      <div
        className={
          stacked
            ? "flex flex-col items-stretch gap-1.5"
            : "flex flex-wrap gap-2"
        }
      >
        <Button size="sm" onClick={() => void approve()} disabled={approving}>
          {approving ? "Approving…" : approveLabel}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={() => setRejectOpen(true)}
        >
          {rejectLabel}
        </Button>
      </div>
      <RejectReasonDialog
        open={rejectOpen}
        onOpenChange={setRejectOpen}
        title="Reject submission"
        description="Provide a clear reason. This will be visible to the submitter."
        onConfirm={onReject}
      />
    </>
  );
}
