# DOOH Network V1 — Implementation Tracker

**Source:** [`docb/DOOH_Network_V1_PRD.md`](../docb/DOOH_Network_V1_PRD.md)  
**Audited:** 2026-06-15  
**Legend:** ✅ Done · 🟡 Partial · ❌ Not started · ⏭ Out of scope (V1)

---

## Executive summary

The **core V1 loop is largely built**: browse → availability → hold → pay (Razorpay) → admin approve → schedule → Android player loop + heartbeat. Data model, double-booking guard, booking state machine, and integration tests align well with the PRD.

**Gaps that block a clean pilot/launch** are mostly operational polish and UX wiring: admin refund/cancel UI, guest checkout not tied to advertiser accounts, content policy not surfaced in UI, no venue/device edit, and production config (Razorpay/Bunny/notifications).

**Intentional extensions beyond PRD:** owner self-serve portal + screen approval queue (ADR 008).

---

## PRD §14 — Acceptance criteria

| # | Criterion | Status | Evidence / gap |
|---|-----------|--------|----------------|
| AC-1 | Advertiser browses device, picks dates, sees availability, pays, uploads image | 🟡 | `BookingForm.tsx` validates + uploads before hold; guest checkout (no auth) |
| AC-2 | Two advertisers cannot book same device/slot/date | ✅ | `slot_occupancy` unique constraint + `week6-hardening.integration.test.ts` |
| AC-3 | Held slot auto-releases on expiry | ✅ | `hold-expiry.service.ts` (1-min cron) |
| AC-4 | Admin notified, reviews creative, approve/reject with reason | 🟡 | API + admin UI; email/WhatsApp config-gated (`notifications.service.ts`) |
| AC-5 | Approved ad plays on booked dates; reject frees slot + manual refund | 🟡 | Schedule + `releaseOccupancy` on reject; **no admin refund UI** |
| AC-6 | TV pairs once, bound to device record | ✅ | `POST /api/device/login` + `LoginActivity.kt` |
| AC-7 | Player: 6-position loop, local cache, survives wifi blip | ✅ | `PlayerActivity.kt`, `ImageCache.kt` (ImageView, not ExoPlayer) |
| AC-8 | Admin screen-health reflects online/offline + current slot (~1–2 min) | ✅ | `admin/health/page.tsx` + heartbeat |
| AC-9 | Razorpay webhook replay does not duplicate bookings/payments | ✅ | Unique `razorpay_payment_id` + integration test |

**Score: 6 ✅ · 3 🟡 · 0 ❌**

---

## 1. Data model (PRD §5)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| DM-1 | Venues, Devices, Advertisers, Bookings, Creatives, Payments | ✅ | `packages/db/prisma/schema.prisma` |
| DM-2 | SlotOccupancy with unique `(device_id, slot_index, play_date)` | ✅ | Migration + booking service |
| DM-3 | `venue_split_amount` frozen at booking time | ✅ | Computed at `PENDING_APPROVAL` |
| DM-4 | Flat revenue model split calculation | ✅ | ADR 001: flat → `0` until venue app |
| DM-5 | BookingEvent audit log for all transitions | ✅ | `booking_events` table |
| DM-6 | Per-device `default_image_url` required | ✅ | Set at device create |
| DM-7 | Device heartbeat fields (`last_seen_at`, `currently_showing_slot`) | ✅ | Updated in `device.service.ts` |
| DM-8 | Seed data for pilot venues | ✅ | `packages/db/prisma/seed.ts` (8 venues/devices) |

---

## 2. Booking lifecycle (PRD §6–7)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| BK-1 | Full state machine (DRAFT → … → REFUNDED) | ✅ | `packages/shared/src/booking.ts` |
| BK-2 | Auto slot assignment (1–6) | ✅ | `booking.service.ts` |
| BK-3 | 15-minute hold TTL | ✅ | `hold_expires_at` |
| BK-4 | Occupancy written on payment capture (`PENDING_APPROVAL`) | ✅ | `confirmPayment()` |
| BK-5 | Occupancy released on EXPIRED / REJECTED / CANCELLED / REFUNDED | ✅ | `releaseOccupancy` / `releaseFutureOccupancy` |
| BK-6 | Pricing = `slot_day_price × days` | ✅ | Hold creation |
| BK-7 | Razorpay order + checkout | ✅ | `payments.service.ts` |
| BK-8 | Webhook HMAC + idempotency | ✅ | `payments.controller.ts`, `rawBody: true` |
| BK-9 | Dev simulate-capture (no Razorpay keys) | ✅ | Non-production only |
| BK-10 | Hold expiry cron (every minute) | ✅ | `hold-expiry.service.ts` |
| BK-11 | Auto-complete APPROVED bookings past end date | ✅ | Hourly cron in same service |
| BK-12 | Concurrent hold race handling | ✅ | Integration test |
| BK-13 | Liveness gate before booking | ✅ | Prod blocks `lastSeenAt: null`; dev allows never-seen devices |
| BK-14 | Manual refund workflow (Razorpay dashboard → mark REFUNDED) | 🟡 | API `POST /admin/bookings/:id/refund` — **no web UI** |
| BK-15 | Cancel booking (admin) | 🟡 | API only — **no web UI** |
| BK-16 | Advertiser-initiated cancel | ❌ | Not in PRD UI; API exists |

---

## 3. Creative upload & moderation (PRD §8)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| CR-1 | JPG/PNG only | ✅ | Client + API validation |
| CR-2 | 16:9 aspect ratio, 1920×1080 spec | ✅ | ADR 002; ±2% tolerance |
| CR-3 | Max 5 MB | ✅ | `CREATIVE_MAX_BYTES` |
| CR-4 | Validate before payment | ✅ | `BookingForm.tsx` flow |
| CR-5 | Bunny CDN presign + upload | ✅ | `bunny.service.ts` |
| CR-6 | Local dev upload fallback | ✅ | `PUT /creatives/upload/:path` |
| CR-7 | Admin approve/reject with `rejection_reason` | ✅ | `admin/bookings` + `BookingActions.tsx` |
| CR-8 | Schedule plays only APPROVED creative on APPROVED booking | ✅ | `device.service.ts` `getSchedule` |
| CR-9 | Content policy linked in upload + reject UI | ✅ | `/content-policy` in `BookingForm` |
| CR-10 | Re-upload creative after rejection | ❌ | Not implemented |

---

## 4. Device API & player (PRD §9–10)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| DV-1 | `POST /api/device/login` (credential → token) | ✅ | Bcrypt credential hash |
| DV-2 | `GET /api/device/schedule?date=` (6 positions) | ✅ | Matches PRD JSON contract |
| DV-3 | `POST /api/device/heartbeat` (60s) | ✅ | Updates device record |
| DV-4 | Device token auth guard | ✅ | `device-auth.guard.ts` |
| DV-5 | Android: one-time login, token storage | ✅ | `TokenStore.kt` |
| DV-6 | Android: schedule pull (launch + ~3 min) | ✅ | `PlayerActivity.kt` |
| DV-7 | Android: local image cache | ✅ | `ImageCache.kt` |
| DV-8 | Android: 6×10s playback loop | ✅ | ImageView + Handler |
| DV-9 | Android: BOOT_COMPLETED auto-launch | ✅ | `BootReceiver.kt` |
| DV-10 | Android: kiosk / lock task | ✅ | `startLockTask()` |
| DV-11 | Android: watchdog recovery | ✅ | 45s `recreate()` |
| DV-12 | ExoPlayer integration | ⏭ | PRD mentions ExoPlayer; V1 uses static images — ImageView is correct |
| DV-13 | Credential rotation | ❌ | Not implemented |
| DV-14 | 48h soak test on real hardware | 🟡 | `PLAYER_SOAK_48H.md` exists; execution status unknown |

---

## 5. Admin panel (PRD §11)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| AD-1 | Admin login (role-gated) | ✅ | `/admin` + middleware |
| AD-2 | Create venue (contact, revenue, default image) | ✅ | `admin/venues` — hardcoded 30% in action |
| AD-3 | Create device (pricing, credential generation) | ✅ | Shows pairing credential |
| AD-4 | Edit venue / device | ✅ | `AdminVenuesWorkspace`, PATCH routes |
| AD-5 | Booking queue + approve/reject | ✅ | `admin/bookings` tabs |
| AD-6 | Mark booking REFUNDED | ✅ | `MarkRefundedButton` |
| AD-7 | Cancel booking | ✅ | `CancelBookingButton` + live campaigns tab |
| AD-8 | Screen health dashboard | ✅ | `admin/health` |
| AD-9 | Owner screen approval queue | ✅ | Beyond PRD (ADR 008) |
| AD-10 | Dashboard stats / snapshot | ✅ | `admin/page.tsx` |

---

## 6. Marketplace website (PRD §12)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| MK-1 | Browse devices by location | ✅ | City filter from `locationLabel` |
| MK-2 | Device detail (venue, price/day) | ✅ | `devices/[id]` |
| MK-3 | Availability checker by date range | ✅ | `AvailabilityChecker.tsx` |
| MK-4 | Book one slot (system assigns) | ✅ | Hold flow |
| MK-5 | Razorpay checkout | ✅ | Or simulate in dev |
| MK-6 | Booking status page for advertiser | ✅ | `bookings/[id]` — public by ID |
| MK-7 | Hide stale/offline devices in production | ✅ | `marketplace.service.ts` |
| MK-8 | Only APPROVED owner screens listed | ✅ | `approvalStatus: APPROVED` filter |
| MK-9 | Authenticated advertiser booking | ✅ | `BookingForm` + optional JWT on hold |
| MK-10 | Advertiser dashboard shows all their bookings | ✅ | Auth checkout + email link on signup |

---

## 7. Notifications (PRD scope table)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| NT-1 | Email admin on new paid booking | 🟡 | Resend — needs `RESEND_API_KEY` + `ADMIN_NOTIFY_EMAIL` |
| NT-2 | WhatsApp admin on new booking | 🟡 | Needs `WHATSAPP_*` env vars |
| NT-3 | Advertiser email on approve/reject | ❌ | Not in PRD V1 |

---

## 8. Auth & roles

| ID | Task | Status | Notes |
|----|------|--------|-------|
| AU-1 | User model: ADMIN, SCREEN_OWNER, ADVERTISER | ✅ | Beyond PRD single advertiser table |
| AU-2 | Signup + login (web + API) | ✅ | Role-based JWT |
| AU-3 | Owner portal (`/owner/screens`) | ✅ | Beyond PRD |
| AU-4 | Advertiser portal (`/advertiser`) | ✅ | Beyond PRD |
| AU-5 | Password reset | ❌ | Not implemented |
| AU-6 | Guest checkout ↔ advertiser account linking | ✅ | Signup merges by email; auth checkout |

---

## 9. Infrastructure & ops

| ID | Task | Status | Notes |
|----|------|--------|-------|
| IF-1 | Docker Compose (Postgres) | ✅ | `infra/docker-compose.yml` |
| IF-2 | `.env.example` documents all keys | ✅ | Razorpay, Bunny, Resend, WhatsApp |
| IF-3 | Production Razorpay + webhook URL configured | ❓ | Env-dependent |
| IF-4 | Production Bunny CDN live | ❓ | Env-dependent |
| IF-5 | CI / deployment pipeline | 🟡 | Verify separately |

---

## 10. Testing

| ID | Task | Status | Notes |
|----|------|--------|-------|
| TS-1 | Booking service unit tests | ✅ | `booking.service.test.ts` |
| TS-2 | Week-6 hardening integration tests | ✅ | Double-book, webhook replay, hold expiry, dark device |
| TS-3 | Player schedule fixture test | ✅ | `ScheduleFixtureTest.kt` |
| TS-4 | Full E2E (web → pay → play on device) | ❌ | Manual / pilot phase |

---

## 11. Open decisions (PRD §15) — ADR status

| # | Decision | Status | ADR |
|---|----------|--------|-----|
| OD-1 | Revenue split model | ✅ Locked | [`docs/adr/001-revenue-model.md`](adr/001-revenue-model.md) — 30% default |
| OD-2 | Screen resolution / creative spec | ✅ Locked | [`docs/adr/002-creative-spec.md`](adr/002-creative-spec.md) — 1920×1080 16:9 |
| OD-3 | GST / Razorpay invoicing | 🟡 | [`docs/adr/003-gst-razorpay.md`](adr/003-gst-razorpay.md) — confirm before go-live |
| OD-4 | Approval SLA | 🟡 | [`docs/adr/004-approval-sla.md`](adr/004-approval-sla.md) — manual rule for V1 |
| OD-5 | Content policy wording | ✅ Written | [`docs/adr/005-content-policy.md`](adr/005-content-policy.md) — linked in `BookingForm` |
| OD-6 | App distribution (Play Store vs sideload) | 🟡 | [`docs/adr/006-tv-distribution.md`](adr/006-tv-distribution.md) |

---

## 12. Explicitly out of scope (PRD §13) — do not build

| Item | Status |
|------|--------|
| Multi-slot bookings | ⏭ Not built (correct) |
| Video creatives | ⏭ Not built 
| Full offline mode | ⏭ Not built (local cache only) |
| Per-play proof-of-play | ⏭ Not built |
| Position selection / CPM | ⏭ Not built |
| Venue earnings UI / withdrawals | ⏭ Not built |
| Automated refunds | ⏭ Manual (correct) |
| Venue mobile app | ⏭ Not built |

---

## Recommended next sprint (priority order)

### P0 — Unblock pilot ops

- [x] **AD-6/7** Admin UI: Mark Refunded + Cancel booking
- [ ] **NT-1/2** Wire production notification env vars; verify one real booking alert
- [ ] **IF-3/4** Production Razorpay webhook + Bunny CDN smoke test

### P1 — Advertiser experience

- [x] **MK-9** Authenticated advertiser checkout
- [x] **CR-9** Link content policy (ADR 005) in `BookingForm`

### P2 — Admin completeness

- [x] **AD-4** Edit venue/device (API + UI) — partner merge
- [x] **BK-13** In production, block booking on devices never heartbeated (`lastSeenAt: null`)

### P3 — Pilot validation (PRD week 6–8)

- [ ] **TS-4** Manual E2E: real TV box, 48h soak (`PLAYER_SOAK_48H.md`)
- [ ] **DV-14** Run unhappy-path checklist: reject+refund, expired hold, webhook replay, dark screen

### P4 — Nice to have

- [ ] **CR-10** Re-upload creative after rejection
- [ ] **DV-13** Credential rotation
- [ ] **AU-5** Password reset

---

## Deviations from PRD (intentional)

1. **Owner self-serve** — PRD says admin creates venues; repo has full owner portal + admin screen approval ([ADR 008](adr/008-screen-owner-self-serve.md)).
2. **Unified User auth** — PRD has standalone Advertiser entity; repo adds `User` + roles.
3. **Guest checkout** — Works without advertiser login; PRD implies advertiser flow.
4. **ImageView vs ExoPlayer** — Correct for image-only V1; ExoPlayer dep is unused.

---

## Key file map

| Area | Entry points |
|------|----------------|
| API bootstrap | `apps/api/src/app.module.ts`, `apps/api/src/main.ts` |
| Booking | `apps/api/src/booking/booking.service.ts`, `hold-expiry.service.ts` |
| Payments | `apps/api/src/payments/payments.service.ts` |
| Device | `apps/api/src/device/device.service.ts` |
| Marketplace | `apps/api/src/marketplace/marketplace.service.ts` |
| Admin | `apps/api/src/admin/admin.service.ts` |
| Shared FSM | `packages/shared/src/booking.ts` |
| Schema | `packages/db/prisma/schema.prisma` |
| Marketplace web | `apps/web/src/app/(marketplace)/` |
| Admin web | `apps/web/src/app/admin/` |
| Owner web | `apps/web/src/app/owner/` |
| Player | `apps/player-android/app/src/main/java/com/doohnetwork/player/` |

---

*Update this file as tasks complete. Target: all P0 + P1 done before soft launch.*
