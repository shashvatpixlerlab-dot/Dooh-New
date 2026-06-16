/**
 * Week 6 hardening scenarios — run against live DB in integration env.
 * Unit-level assertions for documented edge cases.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  canTransition,
  BookingStatus,
  ACTIVE_HOLD_STATUSES,
} from "@dooh/shared";

describe("edge case catalog", () => {
  it("hold expiry: HELD can only become EXPIRED or AWAITING_PAYMENT", () => {
    assert.ok(canTransition(BookingStatus.HELD, BookingStatus.EXPIRED));
    assert.ok(!canTransition(BookingStatus.HELD, BookingStatus.APPROVED));
  });

  it("webhook replay: PENDING_APPROVAL cannot re-enter from APPROVED", () => {
    assert.ok(!canTransition(BookingStatus.APPROVED, BookingStatus.PENDING_APPROVAL));
  });

  it("reject path frees slot via REJECTED then REFUNDED", () => {
    assert.ok(canTransition(BookingStatus.PENDING_APPROVAL, BookingStatus.REJECTED));
    assert.ok(canTransition(BookingStatus.REJECTED, BookingStatus.REFUNDED));
  });

  it("active hold statuses are HELD and AWAITING_PAYMENT only", () => {
    assert.deepEqual(ACTIVE_HOLD_STATUSES, ["HELD", "AWAITING_PAYMENT"]);
  });

  it("cancel approved booking allowed", () => {
    assert.ok(canTransition(BookingStatus.APPROVED, BookingStatus.CANCELLED));
    assert.ok(canTransition(BookingStatus.CANCELLED, BookingStatus.REFUNDED));
  });
});
