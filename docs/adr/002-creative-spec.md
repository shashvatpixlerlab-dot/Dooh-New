# ADR 002: Creative Image Specification (V1)

**Status:** Accepted  
**Date:** 2026-06-05

## Decision

| Field | Value |
|---|---|
| Format | JPG or PNG (sRGB) |
| Resolution | 1920 × 1080 |
| Aspect ratio | 16:9 landscape (strict — reject others) |
| Max file size | 5 MB |
| Display duration | 10 seconds (fixed slot length) |

## Validation

- Reject at upload (before payment) if aspect ratio deviates >2% from 16:9.
- Reject if file size > 5 MB or format not JPG/PNG.

## Rationale

Single standard box/TV setup for pilot; reduces support burden. Confirm against physical hardware in week 7 pilot.
