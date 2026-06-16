# Supabase PostgreSQL Implementation Guide

This document describes how to run **DOOH Network V1** against **Supabase-managed PostgreSQL** without changing application code, Prisma models, migration SQL, or table schemas.

**Scope:** Supabase is used **only as a PostgreSQL host**. Custom JWT auth, Bunny CDN storage, Razorpay payments, NestJS API, Next.js web, and the Android player remain unchanged.

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Architecture](#2-architecture)
3. [What changes vs what stays the same](#3-what-changes-vs-what-stays-the-same)
4. [Database inventory](#4-database-inventory)
5. [Environment variables](#5-environment-variables)
6. [API and web surface](#6-api-and-web-surface)
7. [Supabase project setup](#7-supabase-project-setup)
8. [Connection strings](#8-connection-strings)
9. [Local development](#9-local-development)
10. [Apply schema to Supabase (first time)](#10-apply-schema-to-supabase-first-time)
11. [Per-environment checklists](#11-per-environment-checklists)
12. [Production deployment](#12-production-deployment)
13. [External services](#13-external-services)
14. [CI/CD](#14-cicd)
15. [Security and operations](#15-security-and-operations)
16. [Verification checklist](#16-verification-checklist)
17. [Troubleshooting](#17-troubleshooting)
18. [Future work (out of scope)](#18-future-work-out-of-scope)
19. [Reference links](#19-reference-links)

---

## 1. Executive summary

DOOH Network stores all application data in PostgreSQL via **Prisma** (`packages/db`). Today, local development uses Docker Postgres on port **5434** (`infra/docker-compose.yml`). Production can point the same Prisma client at **Supabase** by updating `DATABASE_URL` in environment configuration.

**In scope for this guide:**

- Creating Supabase project(s)
- Connection strings (direct vs pooler)
- Running existing Prisma migrations (`migrate deploy`)
- Seeding demo data
- Wiring env vars on API host, Vercel, and CI
- Smoke tests and rollback via Supabase backups

**Out of scope (requires code changes):**

- Supabase Auth (replace custom JWT)
- Supabase Storage (replace Bunny CDN)
- Supabase Realtime, Edge Functions
- Row Level Security (RLS) policies
- New Prisma models or migration files

**Principle:** Only `.env` values and hosting secrets change. `infra/docker-compose.yml` Postgres becomes optional for local dev.

---

## 2. Architecture

```mermaid
flowchart LR
  subgraph clients [Clients]
    Web[Next.js Web port 3000]
    Player[Android Player]
  end
  subgraph compute [Unchanged compute]
    API[NestJS API port 3001]
  end
  subgraph external [Unchanged external]
    Bunny[Bunny CDN]
    Razorpay[Razorpay]
    Resend[Resend / WhatsApp]
  end
  subgraph supabase [Supabase - new]
    PG[(PostgreSQL public schema)]
  end
  Web -->|NEXT_PUBLIC_API_URL| API
  Player -->|API_BASE_URL| API
  API -->|DATABASE_URL via Prisma| PG
  API --> Bunny
  API --> Razorpay
  API --> Resend
```

| Layer | Technology | Supabase role |
|-------|------------|---------------|
| Data access | Prisma + `packages/db/prisma/schema.prisma` | Hosts 10 tables in `public` |
| Auth | Custom JWT (`apps/api/src/auth/`) | **Not used** |
| Storage | Bunny CDN (`apps/api/src/creatives/bunny.service.ts`) | **Not used** |
| Payments | Razorpay (`apps/api/src/payments/`) | **Not used** |
| API | NestJS (`apps/api/src/main.ts`, prefix `/api`) | Connects via `DATABASE_URL` |
| Web | Next.js on Vercel (`apps/web/vercel.json`) | Proxies to API; no direct DB |
| Player | Kotlin Android TV (`apps/player-android/`) | Hits API only |
| Cron | `HoldExpiryService` (`apps/api/src/booking/hold-expiry.service.ts`) | Runs inside always-on NestJS process |

The web app does **not** connect to Postgres. Only the NestJS API uses `DATABASE_URL`.

---

## 3. What changes vs what stays the same

### Changes (configuration only)

| Item | Before | After |
|------|--------|-------|
| `DATABASE_URL` | `postgresql://dooh:dooh_dev@localhost:5434/dooh?schema=public` | Supabase direct connection string |
| Local Docker Postgres | Required for dev | Optional (hybrid model) |
| API host `DATABASE_URL` secret | Local or self-hosted PG | Supabase production project |

### Unchanged

- All files under `packages/db/prisma/migrations/`
- `packages/db/prisma/schema.prisma` models and enums
- NestJS controllers, services, guards
- Next.js pages, middleware, BFF routes
- Android player (except `API_BASE_URL` build config for prod)
- Bunny, Razorpay, notification integrations
- GitHub Actions CI Postgres service (see [CI/CD](#14-cicd))

---

## 4. Database inventory

### 4.1 Prisma models → Postgres tables

| Prisma model | Postgres table | Notes |
|--------------|----------------|-------|
| `User` | `users` | Roles: `ADMIN`, `SCREEN_OWNER`, `ADVERTISER` |
| `Venue` | `venues` | Optional `owner_id` for screen owners |
| `Device` | `devices` | `approval_status`: `PENDING`, `APPROVED`, `REJECTED` |
| `DeviceImage` | `device_images` | Cascade delete with device |
| `Advertiser` | `advertisers` | Linked to `users` via `user_id` |
| `Booking` | `bookings` | State machine statuses |
| `Creative` | `creatives` | One per booking |
| `Payment` | `payments` | Razorpay order/payment IDs |
| `SlotOccupancy` | `slot_occupancy` | **Unique** on `(device_id, slot_index, play_date)` |
| `BookingEvent` | `booking_events` | Audit trail |

Datasource config (unchanged):

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 4.2 Migrations (apply in order)

All migrations live in `packages/db/prisma/migrations/`:

| Migration folder | Purpose |
|------------------|---------|
| `20260605130000_init` | Core tables: venues, devices, advertisers, bookings, creatives, payments, slot_occupancy, booking_events |
| `20260610120000_add_users_venue_owner_device_images` | `users` table, `venue.owner_id`, `device_images` |
| `20260611140000_add_advertiser_role` | Advertiser user linkage |
| `20260611150000_device_approval_status` | `DeviceApprovalStatus` enum, `approval_status`, `rejection_reason` on devices |

### 4.3 Database commands

From monorepo root (`package.json`):

```bash
pnpm db:generate                              # Regenerate Prisma client
pnpm --filter @dooh/db migrate:deploy         # Apply migrations (staging/prod)
pnpm db:migrate                               # Dev: prisma migrate dev (creates new migrations)
pnpm db:seed                                  # Seed demo data
pnpm db:studio                                # Prisma Studio GUI
pnpm setup                                    # Docker + migrate:deploy + seed (local bootstrap)
```

`migrate:deploy` runs:

```bash
dotenv -e ../../.env -- prisma migrate deploy
```

### 4.4 Seed data

`packages/db/prisma/seed.ts` creates:

| Entity | Email | Password | Notes |
|--------|-------|----------|-------|
| Admin | `ADMIN_EMAIL` (default `admin@yopmail.com`) | `ADMIN_PASSWORD` (default `Test@1233`) | From `.env` |
| Screen owner | `owner@yopmail.com` | `Test@1233` | Hardcoded in seed |
| Demo owner venue | — | — | UUID `...0099`, linked to owner |
| Marketplace venues | — | — | 8 pilot venues with devices |
| Device credentials | — | — | Printed once for new devices (`DOOH-XXXX`) |

**Production:** Change `ADMIN_PASSWORD` before seeding, or skip seed entirely and create admin via controlled process.

---

## 5. Environment variables

Full template: `.env.example` at monorepo root.

### 5.1 Variable matrix

| Variable | API host | Vercel (web) | Local `.env` | CI | Seed only |
|----------|:--------:|:------------:|:------------:|:--:|:---------:|
| `DATABASE_URL` | ✓ | — | ✓ | ✓ | — |
| `API_PORT` | ✓ | — | ✓ | — | — |
| `API_URL` | ✓ | — | ✓ | — | — |
| `CORS_ORIGIN` | ✓ (prod) | — | optional | — | — |
| `JWT_DEVICE_SECRET` | ✓ | — | ✓ | ✓ | — |
| `JWT_ADMIN_SECRET` | ✓ | ✓ | ✓ | ✓ | — |
| `JWT_OWNER_SECRET` | ✓ | ✓ | ✓ | — | — |
| `JWT_ADVERTISER_SECRET` | ✓ | ✓ | ✓ | — | — |
| `ALLOW_ADMIN_SIGNUP` | ✓ | — | ✓ | — | — |
| `HOLD_TTL_MINUTES` | ✓ | — | ✓ | — | — |
| `DEVICE_LIVENESS_MINUTES` | ✓ | — | ✓ | — | — |
| `TIMEZONE` | ✓ | — | ✓ | — | — |
| `NEXT_PUBLIC_API_URL` | — | ✓ | ✓ | — | — |
| `NEXTAUTH_URL` | — | optional | ✓ | — | — |
| `NEXTAUTH_SECRET` | — | optional | ✓ | — | — |
| `ADMIN_EMAIL` | — | — | ✓ | — | ✓ |
| `ADMIN_PASSWORD` | — | — | ✓ | — | ✓ |
| `RAZORPAY_KEY_ID` | ✓ | — | ✓ | — | — |
| `RAZORPAY_KEY_SECRET` | ✓ | — | ✓ | — | — |
| `RAZORPAY_WEBHOOK_SECRET` | ✓ | — | ✓ | — | — |
| `BUNNY_STORAGE_ZONE` | ✓ | — | ✓ | — | — |
| `BUNNY_STORAGE_API_KEY` | ✓ | — | ✓ | — | — |
| `BUNNY_STORAGE_HOSTNAME` | ✓ | — | ✓ | — | — |
| `BUNNY_CDN_HOSTNAME` | ✓ | — | ✓ | — | — |
| `RESEND_API_KEY` | ✓ | — | ✓ | — | — |
| `ADMIN_NOTIFY_EMAIL` | ✓ | — | ✓ | — | — |
| `WHATSAPP_API_URL` | ✓ | — | ✓ | — | — |
| `WHATSAPP_API_TOKEN` | ✓ | — | ✓ | — | — |
| `ADMIN_NOTIFY_PHONE` | ✓ | — | ✓ | — | — |

### 5.2 Critical pairing rules

1. **`JWT_ADMIN_SECRET`** must be identical on API and Vercel. Web middleware verifies admin cookies locally (`apps/web/src/lib/middleware-auth.ts`). `next.config.ts` loads monorepo root `.env` for this.
2. **`JWT_OWNER_SECRET`** and **`JWT_ADVERTISER_SECRET`** must match between API and Vercel for owner/advertiser route protection.
3. **`NEXT_PUBLIC_API_URL`** on Vercel must point to the **public** API URL (e.g. `https://api.yourdomain.com`), not `localhost`.
4. **`CORS_ORIGIN`** on API must include the Vercel web origin(s), comma-separated (`apps/api/src/main.ts`).

### 5.3 Default local values

```bash
DATABASE_URL="postgresql://dooh:dooh_dev@localhost:5434/dooh?schema=public"
API_PORT=3001
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

Docker Postgres (`infra/docker-compose.yml`): user `dooh`, password `dooh_dev`, database `dooh`, host port **5434**.

---

## 6. API and web surface

Use these endpoints for deployment smoke tests. All NestJS routes are prefixed with `/api`.

### 6.1 NestJS API routes

| Controller | Base path | Key endpoints |
|------------|-----------|---------------|
| Auth | `/api/auth` | `POST signup`, `POST login` |
| Admin | `/api/admin` | `POST login`, `GET/POST venues`, `POST devices`, `GET screens`, `POST screens/:id/approve`, `POST screens/:id/reject`, `GET bookings`, booking actions, `GET screen-health`, `POST upload/presign` |
| Owner | `/api/owner` | `GET/POST screens`, `GET/PATCH/DELETE screens/:id`, `POST upload/presign` |
| Advertiser | `/api/advertiser` | `GET bookings` |
| Marketplace | `/api/marketplace` | `GET devices`, `GET devices/:id`, `GET devices/:id/availability` |
| Bookings | `/api/bookings` | `POST hold`, `GET :id` |
| Creatives | `/api/creatives` | `POST presign`, `PUT upload/:path`, `GET file/:path`, `POST :bookingId/attach` |
| Payments | `/api/payments` | `POST webhook`, `POST simulate-capture` (non-prod) |
| Device | `/api/device` | `POST login`, `GET schedule`, `POST heartbeat` |

### 6.2 Next.js BFF routes (proxy to API)

Located under `apps/web/src/app/api/`:

| Route | Purpose |
|-------|---------|
| `/api/auth/login` | Unified login → sets role cookie |
| `/api/auth/signup` | Advertiser/owner/admin signup |
| `/api/auth/logout` | Clears session cookies |
| `/api/admin/login` | Legacy admin login proxy |
| `/api/admin/logout` | Admin logout |
| `/api/admin/proxy/venues` | Admin venue list proxy |
| `/api/owner/screens` | Owner screens CRUD proxy |
| `/api/owner/screens/[id]` | Owner screen detail proxy |
| `/api/owner/upload/presign` | Owner image upload presign |

### 6.3 Background jobs (API host must stay running)

`HoldExpiryService` runs inside NestJS:

- **Every minute:** expire stale booking holds (`HOLD_TTL_MINUTES`, default 15)
- **Every hour:** mark past bookings as completed

Serverless-only API deployment will **not** run these crons. Use an always-on host (Railway, Render, Fly.io, VPS).

### 6.4 Android player

`apps/player-android/app/build.gradle.kts` sets:

```kotlin
buildConfigField("String", "API_BASE_URL", "\"http://10.0.2.2:3001/api\"")
```

For production, change `API_BASE_URL` to `https://<your-api-domain>/api` and rebuild the APK.

---

## 7. Supabase project setup

### Step 1: Create organization and project

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Create an organization (if needed).
3. **New project:**
   - **Name:** e.g. `dooh-network-prod`
   - **Database password:** generate a strong password; store in a password manager.
   - **Region:** choose closest to your API host (e.g. `South Asia (Mumbai)` for `Asia/Kolkata` app timezone).

### Step 2: Environment separation

Recommended: **one Supabase project per environment**

| Environment | Supabase project | Used by |
|-------------|------------------|---------|
| Development | `dooh-network-dev` | Optional local `.env` (Option B) |
| Staging | `dooh-network-staging` | Staging API + Vercel preview |
| Production | `dooh-network-prod` | Production API + Vercel |

Alternative: [Supabase branching](https://supabase.com/docs/guides/deployment/branching) for preview databases (paid feature).

### Step 3: Retrieve connection details

In Supabase Dashboard → **Project Settings** → **Database**:

- **Host** (direct): `db.<project-ref>.supabase.co`
- **Port:** `5432`
- **Database:** `postgres`
- **User:** `postgres`
- **Password:** (set at project creation)

Use **Connection string** → **URI** tab. Copy the Postgres URI.

### Step 4: SSL

Supabase requires SSL. Append to connection string if not present:

```
?schema=public&sslmode=require
```

### Step 5: IPv4 connectivity

Some hosts (certain PaaS regions, corporate networks) cannot reach Supabase over IPv6. If connections fail with timeout or `ENOTFOUND`:

- Enable **IPv4 add-on** in Supabase project settings, or
- Use the **Session pooler** host (see [Connection strings](#8-connection-strings))

Docs: [Supabase connecting to Postgres](https://supabase.com/docs/guides/database/connecting-to-postgres)

### Step 6: Do not enable RLS on app tables

Prisma connects as the `postgres` superuser role with full table access. **Do not** add Row Level Security policies to `users`, `devices`, `bookings`, etc. RLS would block Prisma queries unless the codebase is rewritten to use Supabase client with JWT claims.

### Step 7: Enable backups (production)

Dashboard → **Database** → **Backups** → enable **Point-in-Time Recovery (PITR)** for production.

---

## 8. Connection strings

Supabase offers multiple connection modes. This project uses a **single `DATABASE_URL`** in Prisma (no `directUrl` in schema) to avoid code changes.

### 8.1 Recommended: Direct connection (zero code change)

Use the **direct** connection for **both** migrations and NestJS runtime:

```
postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?schema=public&sslmode=require
```

| Aspect | Detail |
|--------|--------|
| Host | `db.<project-ref>.supabase.co` |
| Port | `5432` |
| Works for `migrate deploy` | Yes |
| Works for NestJS (long-running) | Yes |
| Code changes required | None |

NestJS is a persistent server, not serverless. Direct connections are appropriate for moderate traffic.

### 8.2 Transaction pooler (future optimization only)

```
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&schema=public
```

| Aspect | Detail |
|--------|--------|
| Port | `6543` (transaction mode) |
| Works for `migrate deploy` | **No** — use direct for migrations |
| Requires Prisma `directUrl` | Yes (schema change) |

**Do not use the transaction pooler** until you add `directUrl` to `schema.prisma`. Documented here for future scaling only.

### 8.3 Session pooler (port 5432 on pooler host)

Supabase also exposes a session-mode pooler on port 5432. It can work for migrations in some setups but direct connection is simpler and more reliable for Prisma `migrate deploy`.

### 8.4 Replace local Docker URL

**Before (local Docker):**

```bash
DATABASE_URL="postgresql://dooh:dooh_dev@localhost:5434/dooh?schema=public"
```

**After (Supabase):**

```bash
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.abcdefghijklmnop.supabase.co:5432/postgres?schema=public&sslmode=require"
```

Keep `?schema=public` — all Prisma models map to the `public` schema.

---

## 9. Local development

Two supported models. Pick one per developer or per task.

### Option A: Hybrid (recommended)

- **Daily dev:** Docker Postgres on port 5434 (unchanged).
- **Staging/prod:** Supabase.

```bash
# Start local Postgres only
docker compose -f infra/docker-compose.yml up -d

# Use default DATABASE_URL in .env (localhost:5434)
pnpm db:generate
pnpm --filter @dooh/db migrate:deploy
pnpm db:seed
pnpm dev
```

**Pros:** Fast, offline-capable, matches CI Postgres version (16).  
**Cons:** Schema must be migrated to both local and Supabase when new migrations are added.

### Option B: Supabase-only dev

- Point local `.env` `DATABASE_URL` at a **dev** Supabase project.
- Skip Docker Postgres.

```bash
# .env — Supabase dev project direct URL
DATABASE_URL="postgresql://postgres:...@db.<dev-ref>.supabase.co:5432/postgres?schema=public&sslmode=require"

pnpm install
pnpm db:generate
pnpm --filter @dooh/db migrate:deploy
pnpm db:seed
pnpm dev
```

**Pros:** Shared dev database for team; no Docker.  
**Cons:** Requires network; dev data lives in cloud.

### Full local bootstrap script

Root `package.json` `setup` script:

```bash
pnpm setup
# Equivalent to:
# docker compose -f infra/docker-compose.yml up -d
# pnpm db:generate
# pnpm --filter @dooh/db migrate:deploy
# pnpm db:seed
```

For Supabase dev (Option B), run migrate + seed manually after setting `DATABASE_URL`; skip Docker.

### Dev server ports

| Service | URL |
|---------|-----|
| Web | http://localhost:3000 |
| API | http://localhost:3001 |
| Postgres (Docker) | localhost:5434 |
| Prisma Studio | `pnpm db:studio` |

---

## 10. Apply schema to Supabase (first time)

Run these steps from the monorepo root after creating a Supabase project.

### Step 1: Configure environment

```bash
cp .env.example .env
```

Edit `.env` and set `DATABASE_URL` to the Supabase **direct** connection string (Section 8.1).

### Step 2: Install dependencies

```bash
pnpm install
```

This triggers `prisma generate` via `packages/db` postinstall hook.

### Step 3: Generate Prisma client

```bash
pnpm db:generate
```

### Step 4: Apply migrations

```bash
pnpm --filter @dooh/db migrate:deploy
```

Expected output: 4 migrations applied. Supabase Table Editor should show all 10 application tables.

**Never** edit SQL files in already-deployed migrations. Add new migrations via `pnpm db:migrate` in development only.

### Step 5: Seed (optional)

```bash
# Set strong password for non-local environments
export ADMIN_EMAIL="admin@yourcompany.com"
export ADMIN_PASSWORD="your-secure-password"

pnpm db:seed
```

Save printed device credentials (`DOOH-XXXX`) for Android player testing.

### Step 6: Verify schema

**Option 1:** Supabase Dashboard → **Table Editor** → confirm tables exist.

**Option 2:** Prisma Studio:

```bash
pnpm db:studio
```

**Option 3:** SQL check in Supabase SQL Editor:

```sql
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
ORDER BY table_name;
```

Expected tables: `advertisers`, `booking_events`, `bookings`, `creatives`, `device_images`, `devices`, `payments`, `slot_occupancy`, `users`, `venues`, `_prisma_migrations`.

### Rollback

- **Before go-live:** Delete Supabase project and recreate, or drop schema (destructive).
- **After go-live:** Use Supabase PITR restore to a point before the incident.
- **Never** modify `_prisma_migrations` or re-run changed migration files.

---

## 11. Per-environment checklists

### 11.1 Local (Docker — Option A)

- [ ] `docker compose -f infra/docker-compose.yml up -d`
- [ ] `.env` uses `localhost:5434` `DATABASE_URL`
- [ ] `pnpm db:generate && pnpm --filter @dooh/db migrate:deploy && pnpm db:seed`
- [ ] `pnpm dev` — web :3000, API :3001
- [ ] Login at `/login` with seed credentials

### 11.2 Local (Supabase dev — Option B)

- [ ] Supabase dev project created
- [ ] `.env` `DATABASE_URL` → Supabase direct URL
- [ ] Migrations deployed and seed run
- [ ] `pnpm dev`
- [ ] No Docker Postgres required

### 11.3 Staging

- [ ] Supabase staging project created
- [ ] `migrate:deploy` run against staging `DATABASE_URL`
- [ ] API deployed with staging env vars (see Section 12)
- [ ] Vercel preview/production branch with `NEXT_PUBLIC_API_URL` → staging API
- [ ] `CORS_ORIGIN` includes staging web URL
- [ ] Smoke tests (Section 16)

### 11.4 Production

- [ ] Supabase prod project with PITR enabled
- [ ] Strong unique secrets for all `JWT_*` values
- [ ] `ADMIN_PASSWORD` changed from seed default (or no seed in prod)
- [ ] `ALLOW_ADMIN_SIGNUP=false`
- [ ] `migrate:deploy` in deploy pipeline **before** API start
- [ ] Razorpay live keys + webhook URL registered
- [ ] Bunny CDN production zone configured
- [ ] Smoke tests on production URLs

---

## 12. Production deployment

Supabase hosts **only PostgreSQL**. You must deploy NestJS and Next.js separately.

```mermaid
flowchart TB
  subgraph vercel [Vercel]
    WebApp[Next.js @dooh/web]
  end
  subgraph apiHost [API host - Railway / Render / Fly / VPS]
    NestJS[NestJS @dooh/api]
    Cron[HoldExpiryService cron]
  end
  subgraph supa [Supabase]
    DB[(PostgreSQL)]
  end
  Users[Users] --> WebApp
  WebApp -->|HTTPS| NestJS
  NestJS --> DB
  Cron --> DB
  Player[Android TV] -->|HTTPS| NestJS
```

### 12.1 NestJS API host

**Requirements:**

- Node.js 20+
- Always-on process (not serverless-only)
- Outbound HTTPS to Supabase, Bunny, Razorpay, Resend

**Build and start:**

```bash
# From monorepo root on the host
pnpm install
pnpm db:generate
pnpm --filter @dooh/db migrate:deploy   # run before first start and on each release with new migrations
pnpm turbo build --filter=@dooh/api

# Start
cd apps/api && node dist/main.js
# Or: pnpm --filter @dooh/api start
```

**Required env vars on API host:**

```bash
DATABASE_URL=postgresql://postgres:...@db.<ref>.supabase.co:5432/postgres?schema=public&sslmode=require
API_PORT=3001
CORS_ORIGIN=https://your-web.vercel.app,https://yourdomain.com
JWT_DEVICE_SECRET=<min 32 chars>
JWT_ADMIN_SECRET=<min 32 chars>
JWT_OWNER_SECRET=<min 32 chars>
JWT_ADVERTISER_SECRET=<min 32 chars>
ALLOW_ADMIN_SIGNUP=false
HOLD_TTL_MINUTES=15
DEVICE_LIVENESS_MINUTES=10
TIMEZONE=Asia/Kolkata
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
BUNNY_STORAGE_ZONE=...
BUNNY_STORAGE_API_KEY=...
BUNNY_CDN_HOSTNAME=...
# Optional notifications
RESEND_API_KEY=...
ADMIN_NOTIFY_EMAIL=...
```

**Deploy pipeline order:**

1. Set `DATABASE_URL` to target Supabase project
2. `pnpm --filter @dooh/db migrate:deploy`
3. Build API
4. Start/restart API process
5. Verify `GET /api/marketplace/devices`

**Razorpay webhook URL:**

```
https://<api-domain>/api/payments/webhook
```

NestJS is created with `rawBody: true` (`apps/api/src/main.ts`) for signature verification.

### 12.2 Next.js on Vercel

Config: `apps/web/vercel.json`

```json
{
  "installCommand": "cd ../.. && pnpm install",
  "buildCommand": "cd ../.. && pnpm turbo build --filter=@dooh/web"
}
```

**Vercel environment variables:**

```bash
NEXT_PUBLIC_API_URL=https://<api-domain>
JWT_ADMIN_SECRET=<same as API>
JWT_OWNER_SECRET=<same as API>
JWT_ADVERTISER_SECRET=<same as API>
```

Do **not** set `DATABASE_URL` on Vercel.

`next.config.ts` loads monorepo root `.env` during build for JWT secrets when building locally; on Vercel, set secrets in the project dashboard.

### 12.3 Android player

1. Update `API_BASE_URL` in `apps/player-android/app/build.gradle.kts` for release builds.
2. Rebuild APK/AAB.
3. Pair devices using credentials from admin venue creation or seed output.
4. Device endpoints: `POST /api/device/login`, `GET /api/device/schedule`, `POST /api/device/heartbeat`.

---

## 13. External services

These are **unchanged** by Supabase adoption. Configure on the API host.

### 13.1 Bunny CDN (image storage)

Used by `apps/api/src/creatives/bunny.service.ts` for creative and screen image uploads.

| Variable | Purpose |
|----------|---------|
| `BUNNY_STORAGE_ZONE` | Storage zone name |
| `BUNNY_STORAGE_API_KEY` | Storage API key |
| `BUNNY_STORAGE_HOSTNAME` | Default `storage.bunnycdn.com` |
| `BUNNY_CDN_HOSTNAME` | Public CDN hostname for image URLs |

**Setup steps:**

1. Create Bunny.net account and storage zone.
2. Link a pull zone (CDN) to the storage zone.
3. Add env vars to API host.
4. Test: owner `POST /api/owner/upload/presign` → upload to returned URL.

Add your CDN hostname to `apps/web/next.config.ts` `images.remotePatterns` if using Next.js Image optimization.

### 13.2 Razorpay (payments)

Used by `apps/api/src/payments/payments.service.ts`.

| Variable | Purpose |
|----------|---------|
| `RAZORPAY_KEY_ID` | Checkout key (returned to client on hold) |
| `RAZORPAY_KEY_SECRET` | Server-side API calls |
| `RAZORPAY_WEBHOOK_SECRET` | Webhook signature verification |

**Setup steps:**

1. Create Razorpay account (test mode for staging).
2. Dashboard → API Keys → copy Key ID and Secret.
3. Dashboard → Webhooks → add endpoint `https://<api>/api/payments/webhook`, events: `payment.captured`, `payment.failed`.
4. Copy webhook secret to `RAZORPAY_WEBHOOK_SECRET`.

`POST /api/payments/simulate-capture` is disabled in production (`NODE_ENV === 'production'`).

### 13.3 Notifications (optional)

`apps/api/src/notifications/notifications.service.ts`:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Email via Resend |
| `ADMIN_NOTIFY_EMAIL` | Recipient for admin alerts |
| `WHATSAPP_API_URL` | WhatsApp provider endpoint |
| `WHATSAPP_API_TOKEN` | Provider auth token |
| `ADMIN_NOTIFY_PHONE` | WhatsApp recipient |

If unset, notification calls no-op gracefully.

---

## 14. CI/CD

Current workflow: `.github/workflows/ci.yml`

CI uses a **GitHub Actions Postgres 16 service** — no Supabase required for PR checks:

```yaml
env:
  DATABASE_URL: postgresql://dooh:dooh_dev@localhost:5432/dooh?schema=public
```

Pipeline steps:

1. `pnpm install`
2. `pnpm db:generate`
3. `pnpm --filter @dooh/db exec prisma migrate deploy`
4. `pnpm build`
5. `pnpm test`

**No workflow changes needed** for Supabase adoption.

### Optional: integration tests against Supabase branch

1. Create a Supabase branch or ephemeral dev project.
2. Add GitHub secret `SUPABASE_DATABASE_URL`.
3. Add a separate workflow job that sets `DATABASE_URL` from the secret and runs integration tests.

### Production/staging deploy pipelines

Add before API start:

```bash
pnpm --filter @dooh/db migrate:deploy
```

Fail the deploy if migrations fail.

---

## 15. Security and operations

### Secrets management

- Never commit `.env` to git.
- Store `DATABASE_URL` and JWT secrets in host secret managers (Vercel, Railway, etc.).
- Rotate Supabase database password periodically; update `DATABASE_URL` on API host.

### Supabase dashboard access

- Limit team members to required roles.
- Enable MFA on Supabase accounts.
- Use separate projects for prod vs dev.

### Connection limits

Supabase free tier has connection limits. NestJS + Prisma with a single instance typically uses a small pool. If you scale to multiple API replicas, monitor connections in Supabase Dashboard → **Database** → **Roles** / connection stats.

### Backups

- Enable PITR on production.
- Test restore procedure in staging before relying on it.

### Production seed caution

- Do not run `pnpm db:seed` on production with default passwords.
- If seed is needed once, set strong `ADMIN_PASSWORD` and remove seed step from deploy pipeline afterward.

### Audit

- `booking_events` table records booking state transitions.
- Supabase logs SQL and auth events in Dashboard → **Logs**.

---

## 16. Verification checklist

Run after pointing any environment at Supabase.

### Database

- [ ] `pnpm --filter @dooh/db migrate:deploy` exits 0
- [ ] 10 application tables visible in Supabase Table Editor
- [ ] `_prisma_migrations` has 4 rows

### API health

```bash
curl -s "https://<api>/api/marketplace/devices" | head -c 500
```

- [ ] Returns JSON array (may be empty before seed)

### Authentication

| Role | URL | Credentials |
|------|-----|-------------|
| Admin | `/login` → `/admin` | `admin@yopmail.com` / seed password |
| Owner | `/login` → `/owner` | `owner@yopmail.com` / `Test@1233` |
| Advertiser | `/signup` → `/advertiser` | New signup |

- [ ] Each role lands on correct dashboard
- [ ] Wrong role cannot access other dashboards (middleware redirect)

### Owner approval workflow

- [ ] Owner creates screen at `/owner/screens/new`
- [ ] Supabase `devices.approval_status` = `PENDING`
- [ ] Admin sees screen at `/admin/screens`
- [ ] Admin approve → `APPROVED`, device can appear on marketplace when `ACTIVE`

### Marketplace

- [ ] `/` lists approved, active, online devices (per `DEVICE_LIVENESS_MINUTES`)
- [ ] Device detail and availability load

### Booking flow (Razorpay configured)

- [ ] Hold creates booking in `HELD` status
- [ ] Payment webhook updates `payments` and booking status
- [ ] Hold expiry cron releases slot after `HOLD_TTL_MINUTES`

### Device player

- [ ] `POST /api/device/login` with seed credential returns token
- [ ] `POST /api/device/heartbeat` updates `devices.last_seen_at`
- [ ] `GET /api/device/schedule` returns playlist JSON

### Uploads (Bunny configured)

- [ ] Admin or owner presign returns upload URL
- [ ] Image accessible via CDN hostname

### CORS

- [ ] Web app API calls succeed from production domain (no browser CORS errors)

---

## 17. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `P1001: Can't reach database server` | Wrong host, firewall, IPv6 | Use direct URL; enable Supabase IPv4 add-on |
| `SSL connection required` | Missing SSL param | Add `&sslmode=require` to `DATABASE_URL` |
| Migration fails on pooler URL | Transaction pooler incompatible with `migrate deploy` | Use direct `db.<ref>.supabase.co:5432` |
| `P3009 migrate found failed migrations` | Partial failed migration | Fix DB state; see Prisma docs; restore from backup if needed |
| Prisma type errors for new fields | Stale client | `pnpm db:generate && pnpm --filter @dooh/db build` |
| Admin routes 401 on Vercel | `JWT_ADMIN_SECRET` mismatch | Match API and Vercel secrets exactly |
| API calls blocked by CORS | Missing origin | Set `CORS_ORIGIN` on API to web URL |
| Marketplace empty in prod | Liveness filter | Devices need recent `last_seen_at`; only `APPROVED` + `ACTIVE` shown |
| Holds never expire | API not running | `HoldExpiryService` needs always-on NestJS |
| Razorpay webhook 400 | Wrong secret or body | Verify `RAZORPAY_WEBHOOK_SECRET`; API uses raw body |
| Seed fails on unique constraint | Re-run seed | Seed uses `upsert`; check for manual data conflicts |
| Connection pool exhausted | Too many API replicas | Reduce instances or add pooler + `directUrl` (future) |

### Useful commands

```bash
# Test DB connectivity
pnpm --filter @dooh/db exec prisma db execute --stdin <<< "SELECT 1"

# Migration status
pnpm --filter @dooh/db exec prisma migrate status

# Open GUI
pnpm db:studio
```

---

## 18. Future work (out of scope)

The following would **require codebase changes** and are intentionally excluded:

| Feature | Impact |
|---------|--------|
| Supabase Auth | Replace `auth.service.ts`, guards, cookies, middleware |
| Supabase Storage | Replace `bunny.service.ts`, presign flows |
| Supabase Realtime | New subscription layer for live screen health |
| Edge Functions | Rewrite API endpoints |
| RLS policies | Prisma queries would need service-role vs anon split |
| Prisma `directUrl` + pooler | One-line schema change + two connection env vars |

This guide keeps the **connection swap** path minimal: change `DATABASE_URL`, run migrations, deploy.

---

## 19. Reference links

- [Supabase: Connecting to Postgres](https://supabase.com/docs/guides/database/connecting-to-postgres)
- [Supabase: Database backups](https://supabase.com/docs/guides/platform/backups)
- [Prisma: Deploy migrations](https://www.prisma.io/docs/orm/prisma-migrate/workflows/deploy-production-changes)
- [Prisma + Supabase guide](https://supabase.com/docs/guides/integrations/prisma)
- Project PRD: `docb/DOOH_Network_V1_PRD.md`
- Local Docker: `infra/docker-compose.yml`
- Env template: `.env.example`

---

*Last updated: June 2026 — DOOH Network V1 monorepo.*
