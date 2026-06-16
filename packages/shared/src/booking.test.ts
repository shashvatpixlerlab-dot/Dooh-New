import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canTransition, BookingStatus } from "./booking";

describe("booking state machine", () => {
  it("allows HELD -> AWAITING_PAYMENT", () => {
    assert.equal(
      canTransition(BookingStatus.HELD, BookingStatus.AWAITING_PAYMENT),
      true
    );
  });

  it("blocks HELD -> APPROVED", () => {
    assert.equal(
      canTransition(BookingStatus.HELD, BookingStatus.APPROVED),
      false
    );
  });

  it("allows PENDING_APPROVAL -> REJECTED -> REFUNDED", () => {
    assert.equal(
      canTransition(BookingStatus.PENDING_APPROVAL, BookingStatus.REJECTED),
      true
    );
    assert.equal(
      canTransition(BookingStatus.REJECTED, BookingStatus.REFUNDED),
      true
    );
  });
});
