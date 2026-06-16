# ADR 004: Creative Approval SLA (V1)

**Status:** Accepted  
**Date:** 2026-06-05

## Decision

- Admin target: approve/reject within **24 hours** of payment.
- If `date_start` passes while status is `PENDING_APPROVAL`:
  - Schedule endpoint does **not** serve the creative until `APPROVED`.
  - Admin contacts advertiser to **extend dates** (manual booking edit) or **reject + refund**.
- No auto-approval in V1.

## Rationale

Humans in the loop per PRD; avoids playing unreviewed creatives.
