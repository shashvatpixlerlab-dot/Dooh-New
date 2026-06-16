# ADR 006: Android TV Distribution (V1)

**Status:** Accepted  
**Date:** 2026-06-05

## Decision

- **V1: sideload APK** on standardized Android TV boxes at venue install.
- Package: `com.doohnetwork.player`
- Signing: release keystore stored securely (not in repo).
- Updates: manual APK push during pilot; Play Store deferred to post-V1.

## Rationale

Faster iteration for 2–3 pilot venues; kiosk/boot requirements easier without store review delays.
