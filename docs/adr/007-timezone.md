# ADR 007: Timezone for Scheduling (V1)

**Status:** Accepted  
**Date:** 2026-06-05

## Decision

- All `play_date` values and schedule queries use **`Asia/Kolkata`** (IST).
- `GET /api/device/schedule` defaults `date` to today in IST when omitted.
- Player uses server-returned `date` field, never device local clock, for schedule fetches.

## Consequences

- `slot_occupancy.play_date` is calendar date in IST.
- Booking date pickers on web use IST boundaries.
