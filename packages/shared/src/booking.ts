import { z } from "zod";

export const BookingStatus = {
  DRAFT: "DRAFT",
  HELD: "HELD",
  AWAITING_PAYMENT: "AWAITING_PAYMENT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  CANCELLED: "CANCELLED",
  EXPIRED: "EXPIRED",
  COMPLETED: "COMPLETED",
  REFUNDED: "REFUNDED",
} as const;

export type BookingStatusType =
  (typeof BookingStatus)[keyof typeof BookingStatus];

export const ACTIVE_HOLD_STATUSES: BookingStatusType[] = [
  BookingStatus.HELD,
  BookingStatus.AWAITING_PAYMENT,
];

export const TERMINAL_STATUSES: BookingStatusType[] = [
  BookingStatus.EXPIRED,
  BookingStatus.COMPLETED,
  BookingStatus.REFUNDED,
];

export const bookingStatusSchema = z.enum([
  "DRAFT",
  "HELD",
  "AWAITING_PAYMENT",
  "PENDING_APPROVAL",
  "APPROVED",
  "REJECTED",
  "CANCELLED",
  "EXPIRED",
  "COMPLETED",
  "REFUNDED",
]);

export const VALID_TRANSITIONS: Record<
  BookingStatusType,
  BookingStatusType[]
> = {
  DRAFT: ["HELD"],
  HELD: ["EXPIRED", "AWAITING_PAYMENT"],
  AWAITING_PAYMENT: ["EXPIRED", "PENDING_APPROVAL"],
  PENDING_APPROVAL: ["APPROVED", "REJECTED", "CANCELLED"],
  APPROVED: ["COMPLETED", "CANCELLED"],
  REJECTED: ["REFUNDED"],
  CANCELLED: ["REFUNDED"],
  EXPIRED: [],
  COMPLETED: [],
  REFUNDED: [],
};

export function canTransition(
  from: BookingStatusType,
  to: BookingStatusType
): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false;
}
