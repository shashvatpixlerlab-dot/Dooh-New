"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { calcPrice, countDays, maxBookingEndDate } from "@/lib/marketplace-utils";
import { MAX_BOOKING_DAYS } from "@dooh/shared";
import type { AvailabilityResponse, MarketplaceDevice } from "@/lib/types";

export function AvailabilityChecker({ device }: { device: MarketplaceDevice }) {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [result, setResult] = useState<AvailabilityResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dateStart || !dateEnd) {
      setResult(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    api<AvailabilityResponse>(
      `/marketplace/devices/${device.id}/availability?dateStart=${encodeURIComponent(dateStart)}&dateEnd=${encodeURIComponent(dateEnd)}`
    )
      .then((data) => {
        if (!cancelled) setResult(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setResult(null);
          setError(err instanceof Error ? err.message : "Availability check failed");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [device.id, dateStart, dateEnd]);

  const days = dateStart && dateEnd ? countDays(dateStart, dateEnd) : 0;
  const total =
    days > 0 ? calcPrice(device.slotDayPrice, dateStart, dateEnd) : 0;
  const freeSlots = result?.slots.filter((s) => s.available).length ?? 0;

  return (
    <div className="availability-panel">
      <h3>Check availability</h3>
      <p className="muted small">
        Maximum booking length is {MAX_BOOKING_DAYS} days.
      </p>
      <div className="date-row">
        <div>
          <label htmlFor="avail-start">Start date</label>
          <input
            id="avail-start"
            type="date"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="avail-end">End date</label>
          <input
            id="avail-end"
            type="date"
            value={dateEnd}
            min={dateStart || undefined}
            max={dateStart ? maxBookingEndDate(dateStart) : undefined}
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </div>
      </div>
      {loading && <p className="muted small">Checking availability…</p>}
      {error && (
        <div className="availability-result unavailable">
          <span className="badge badge-offline">Unavailable</span>
          <p>{error}</p>
        </div>
      )}
      {result && !error && (
        <div
          className={`availability-result ${result.bookable ? "available" : "unavailable"}`}
        >
          {result.bookable ? (
            <>
              <span className="badge badge-online">Available</span>
              <p>
                {freeSlots} slot{freeSlots !== 1 ? "s" : ""} free across your
                dates. Slot position assigned at checkout.
              </p>
              {days > 0 && (
                <p className="price-estimate">
                  {days} day{days > 1 ? "s" : ""} × ₹{device.slotDayPrice} ={" "}
                  <strong>₹{total}</strong>
                </p>
              )}
            </>
          ) : (
            <>
              <span className="badge badge-offline">Unavailable</span>
              <p>No slots available for the selected dates.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
