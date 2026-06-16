-- Device approval workflow for owner-submitted screens
CREATE TYPE "DeviceApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

ALTER TABLE "devices"
  ADD COLUMN "approval_status" "DeviceApprovalStatus" NOT NULL DEFAULT 'APPROVED',
  ADD COLUMN "rejection_reason" TEXT;
