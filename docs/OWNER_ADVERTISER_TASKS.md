# Screen Owner & Advertiser — Task Tracker

**PRD:** [`docb/DOOH_Owner_Advertiser_PRD.md`](../docb/DOOH_Owner_Advertiser_PRD.md)  
**Audited:** 2026-06-15  
**Legend:** ✅ Done · 🟡 Partial · ❌ Not started · 🔗 Partner dependency

**Out of scope:** Admin panel (partner-owned)

---

## Summary

| Area | Progress | Main gap |
|------|----------|----------|
| Screen Owner | ~85% | Venue edit, rejected-screen resubmit |
| Advertiser + Marketplace | ~90% | Re-upload after rejection, password reset |

---

## Screen Owner

### Auth (OW-A)

| ID | Task | Status | Files |
|----|------|--------|-------|
| OW-A1 | Signup role `SCREEN_OWNER` | ✅ | `SignupForm.tsx`, `auth.service.ts` |
| OW-A2 | Auto-create Venue on signup | ✅ | `auth.service.ts` |
| OW-A3 | Login + `owner_token` cookie | ✅ | `auth-cookies.ts` |
| OW-A4 | Middleware protect `/owner/*` | ✅ | `middleware.ts` |
| OW-A5 | Password reset | ❌ | — |

### Dashboard (OW-D)

| ID | Task | Status | Files |
|----|------|--------|-------|
| OW-D1 | Stats cards | ✅ | `app/owner/page.tsx` |
| OW-D2 | Recent screens + badges | ✅ | `app/owner/page.tsx` |
| OW-D3 | Add screen CTA | ✅ | `app/owner/page.tsx` |
| OW-D4 | Empty state polish | ❌ | — |

### Screen CRUD (OW-S)

| ID | Task | Status | Files |
|----|------|--------|-------|
| OW-S1 | List screens | ✅ | `screens/page.tsx`, `owner.controller.ts` |
| OW-S2 | Create screen form | ✅ | `ScreenForm.tsx` |
| OW-S3 | ≥3 images required | ✅ | `owner-device.ts`, `owner.service.ts` |
| OW-S4 | Bunny image upload | ✅ | `api/owner/upload/*` |
| OW-S5 | Show pairing credential | ✅ | `ScreenForm.tsx` |
| OW-S6 | Edit screen | ✅ | `screens/[id]/edit/page.tsx` |
| OW-S7 | Soft-delete (INACTIVE) | ✅ | `ScreenActions.tsx` |
| OW-S8 | Approval status display | ✅ | `OwnerScreensTable.tsx` |
| OW-S9 | Online/offline badges | ✅ | `owner/page.tsx`, `OwnerScreensTable.tsx` |
| OW-S10 | Edit venue profile | ❌ | — |
| OW-S11 | Multiple venues per owner | ❌ | — |
| OW-S12 | Dedicated health page | ❌ | — |
| OW-S13 | Credential regeneration | ❌ | — |

### Lifecycle (OW-L)

| ID | Task | Status | Notes |
|----|------|--------|-------|
| OW-L1 | Create as PENDING + INACTIVE | ✅ | `owner.service.ts` |
| OW-L2 | Marketplace lists only APPROVED | 🔗 | Partner admin approves |
| OW-L3 | Owner sees pending/rejected | ✅ | UI badges |
| OW-L4 | Edit & resubmit rejected screen | ❌ | Reset to PENDING on edit |
| OW-L5 | Immediate listing (ADR 008) | ❌ | Superseded by approval gate |

---

## Advertiser & Marketplace

### Auth (AD-A)

| ID | Task | Status | Files |
|----|------|--------|-------|
| AD-A1 | Signup role `ADVERTISER` | ✅ | `SignupForm.tsx` |
| AD-A2 | Create Advertiser + link User | ✅ | `auth.service.ts` |
| AD-A3 | Link guest Advertiser by email on signup | ✅ | `auth.service.ts` |
| AD-A4 | Login + `advertiser_token` | ✅ | `auth-cookies.ts` |
| AD-A5 | Password reset | ❌ | — |

### Marketplace browse (MK)

| ID | Task | Status | Files |
|----|------|--------|-------|
| MK-1 | Browse + city filter | ✅ | `(marketplace)/page.tsx` |
| MK-2 | Device cards | ✅ | `DeviceCard.tsx` |
| MK-3 | Device detail | ✅ | `devices/[id]/page.tsx` |
| MK-4 | Availability checker | ✅ | `AvailabilityChecker.tsx` |
| MK-5 | Liveness filter (prod) | ✅ | `marketplace.service.ts` |
| MK-6 | Only APPROVED screens | ✅ | `marketplace.service.ts` |

### Checkout (BK)

| ID | Task | Status | Files |
|----|------|--------|-------|
| BK-1 | One slot auto-assign | ✅ | `booking.service.ts` |
| BK-2 | Price calculation | ✅ | `booking.service.ts` |
| BK-3 | Creative validation pre-payment | ✅ | `BookingForm.tsx` |
| BK-4 | Upload → hold → pay → attach | ✅ | `BookingForm.tsx` |
| BK-5 | Dev simulate-capture | ✅ | `payments.controller.ts` |
| BK-6 | Guest checkout | ✅ | `booking.controller.ts` |
| BK-7 | Authenticated checkout | ✅ | `BookingForm.tsx`, `optional-advertiser-auth.guard.ts` |
| BK-8 | Prefill when logged in | ✅ | Guest fields hidden; profile from `GET /advertiser/me` |
| BK-9 | Content policy link | ✅ | `/content-policy`, link in `BookingForm` |
| BK-10 | Booking status page | ✅ | `bookings/[id]/page.tsx` |
| BK-11 | Auth-scoped status page | ✅ | `/advertiser/bookings/[id]` + public redirect |
| BK-12 | Re-upload after rejection | ❌ | — |

### Advertiser dashboard (AD-D)

| ID | Task | Status | Files |
|----|------|--------|-------|
| AD-D1 | Stats cards | ✅ | `advertiser/page.tsx` |
| AD-D2 | Bookings table | ✅ | `advertiser/page.tsx` |
| AD-D3 | Link to booking detail | ✅ | `/advertiser/bookings/[id]` |
| AD-D4 | "Book a screen" CTA | ✅ | `advertiser/page.tsx` |
| AD-D5 | Show rejection reason | ✅ | List + detail via API |
| AD-D6 | Show slot index | ✅ | Table + detail |
| AD-D7 | Email on approve/reject | 🔗 | Partner notifications |

### Shared auth (AU)

| ID | Task | Status | Files |
|----|------|--------|-------|
| AU-1 | Unified signup (owner \| advertiser) | ✅ | `signup/page.tsx` |
| AU-2 | Login redirect to dashboard | ✅ | `LoginForm.tsx` |
| AU-3 | Role-exclusive cookies | ✅ | `auth-cookies.ts` |
| AU-4 | Block `/login` when logged in | ✅ | `middleware.ts` |
| AU-5 | Marketplace login/signup nav | ✅ | `MarketplaceAuthNav.tsx` |
| AU-6 | No admin on public signup | ✅ | `signup.dto.ts` |

---

## Acceptance criteria checklist

- [x] Owner signs up, adds screen (3+ images), gets credential
- [x] Owner sees PENDING → APPROVED flow (partner approves)
- [x] Owner sees online/offline per screen
- [x] Advertiser books while logged in (no guest form)
- [x] Guest checkout + same-email signup shows prior bookings
- [x] Dashboard lists all advertiser bookings
- [x] Content policy linked at upload
- [x] Booking status page auth-scoped

---

## Sprint backlog

### Sprint 1 — Advertiser identity ✅

- [x] **BK-7** Authenticated checkout in `BookingForm` + optional JWT on `POST /bookings/hold`
- [x] **BK-8** Prefill name/email/phone from session (logged-in advertisers skip guest fields)
- [x] **BK-9** Link content policy in upload UI (`/content-policy`)
- [x] Post-guest-checkout CTA: create account to track booking

### Sprint 2 — Advertiser dashboard ✅

- [x] **AD-D5** Rejection reason in table + detail
- [x] **BK-11** Auth-scoped booking detail (`/advertiser/bookings/[id]`)
- [x] **AD-D6** Show slot index in table
- [x] **GET /advertiser/bookings/:id** API
- [x] Demo advertiser in `seed.ts`
- [x] Integration test `advertiser-booking.integration.test.ts`

### Sprint 3 — Owner polish (next)

- [ ] **OW-L4** Rejected screen edit → reset `approvalStatus` to PENDING
- [ ] **OW-S10** Venue profile edit page + API
- [ ] **OW-D4** Empty states on owner dashboard/screens

### Sprint 4 — Nice to have

- [ ] **OW-A5 / AD-A5** Password reset
- [ ] **BK-12** Re-upload creative after rejection

---

## Partner dependencies

| Item | Blocks |
|------|--------|
| Screen approval (`PENDING` → `APPROVED`) | Owner screens on marketplace |
| Creative moderation | Advertiser booking status transitions |
| Razorpay + Bunny prod config | Real payments and image CDN |
| Refund marking | `REFUNDED` status display |

**Open question:** Who resets `approvalStatus` when owner edits a rejected screen?

---

## Key files

| Area | Path |
|------|------|
| Owner pages | `apps/web/src/app/owner/` |
| Advertiser pages | `apps/web/src/app/advertiser/` |
| Advertiser booking detail | `apps/web/src/app/advertiser/bookings/[id]/page.tsx` |
| Marketplace | `apps/web/src/app/(marketplace)/` |
| Checkout | `apps/web/src/components/BookingForm.tsx` |
| Owner API | `apps/api/src/owner/` |
| Advertiser API | `apps/api/src/advertiser/` |
| Auth | `apps/api/src/auth/` |
| Screen schemas | `packages/shared/src/owner-device.ts` |

---

## Local dev credentials (after `pnpm db:seed`)

| Role | Email | Password |
|------|-------|----------|
| Advertiser | `advertiser@yopmail.com` | `Test@1233` |
| Screen Owner | `owner@yopmail.com` | `Test@1233` |

---

*Update status as tasks complete.*
