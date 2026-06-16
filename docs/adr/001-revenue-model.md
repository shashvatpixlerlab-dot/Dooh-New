# ADR 001: Venue Revenue Model (V1)

**Status:** Accepted  
**Date:** 2026-06-05

## Context

Venues can use `percentage` or `flat` revenue models. V1 has no venue-facing UI but must freeze splits at booking time.

## Decision

- **Pilot venues default to `percentage` at 30%** (`revenue_model: percentage`, `revenue_value: 0.30`).
- Flat monthly rent venues are supported per-venue via admin; `venue_split_amount` for flat model = `0` until venue app (earnings tracked separately).
- `bookings.venue_split_amount` = `price_total × revenue_value` for percentage venues, computed once at `PENDING_APPROVAL`.

## Consequences

- Future venue earnings app sums `venue_split_amount` without recalculation.
- Admin must set revenue terms before devices go live.
