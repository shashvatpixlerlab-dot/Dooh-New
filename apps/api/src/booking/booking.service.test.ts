import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canTransition, BookingStatus } from "@dooh/shared";

describe("booking payment edge cases", () => {
  it("only AWAITING_PAYMENT can move to PENDING_APPROVAL", () => {
    assert.equal(
      canTransition(BookingStatus.AWAITING_PAYMENT, BookingStatus.PENDING_APPROVAL),
      true
    );
    assert.equal(
      canTransition(BookingStatus.EXPIRED, BookingStatus.PENDING_APPROVAL),
      false
    );
  });

  it("REJECTED and CANCELLED can be refunded", () => {
    assert.equal(
      canTransition(BookingStatus.REJECTED, BookingStatus.REFUNDED),
      true
    );
    assert.equal(
      canTransition(BookingStatus.CANCELLED, BookingStatus.REFUNDED),
      true
    );
  });
});
