# ADR 008: Screen Owner Self-Serve Onboarding

**Status:** Proposed  
**Date:** 2026-06-10

## Context

V1 PRD (`docb/DOOH_Network_V1_PRD.md`) deferred venue/screen-owner login and listed self-serve venue onboarding as a non-goal. Product now requires:

- A unified signup form with roles: **Screen Owner** and **Admin**
- Role-based landing dashboards (`/owner`, `/admin`)
- Screen Owner ability to add, edit, and delete their own screens with a minimum of three asset images

The existing system uses `AdminUser` only, admin-created venues/devices, and a single `defaultImageUrl` per device.

## Decision

1. Introduce a `User` model with roles `ADMIN` and `SCREEN_OWNER`.
2. Screen Owner signup atomically creates a `Venue` with `ownerId` pointing to the user. Revenue defaults follow [ADR 001](001-revenue-model.md): `percentage` at `0.30`.
3. Screens store a gallery in a new `DeviceImage` table; minimum three images on create/update.
4. Owner-created screens are `ACTIVE` on the marketplace immediately (no moderation queue in V1.1 of this feature).
5. Admin self-signup is gated by `ALLOW_ADMIN_SIGNUP` environment variable (default `false`).
6. Existing admin dashboard, booking approval, and screen health flows remain unchanged for ops oversight.
7. UI for new flows uses shadcn/ui; admin pages keep existing styling until a later migration pass.

## Consequences

- PRD non-goal "self-serve venue onboarding" is superseded for Screen Owners.
- Revenue terms for owner-created venues use platform defaults until an admin overrides them in the admin panel.
- Admin retains ability to deactivate venues/devices and approve/reject booking creatives.
- `AdminUser` table is migrated to `User` and deprecated.
- Future work: venue earnings UI, withdrawal flows, screen moderation queue, credential regeneration.

## Alternatives considered

| Alternative | Why rejected |
|-------------|--------------|
| Admin assigns owner to existing venue after signup | Adds ops bottleneck; conflicts with self-serve goal |
| Separate signup URLs per role | Product requires one common form with role dropdown |
| Store multiple images as JSON on `Device` | Harder to query/order; normalized `DeviceImage` is cleaner |
| Require admin approval before marketplace listing | Deferred; can add `moderationStatus` later without schema break |

## Implementation reference

See [IMPLEMENTATION_SIGNUP_SCREEN_OWNER_SHADCN.md](../IMPLEMENTATION_SIGNUP_SCREEN_OWNER_SHADCN.md) for step-by-step build instructions.
