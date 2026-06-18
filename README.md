# DOOH Network V1

Digital Out-of-Home advertising marketplace monorepo — browse screens, book slots, pay via Razorpay, admin-approve creatives, play ads on Android TV players.

## Monorepo layout

```
doohbg/
├── apps/
│   ├── web/              # Next.js 15 — marketplace, admin, owner, advertiser portals
│   ├── api/              # NestJS REST API, webhooks, cron (Vercel serverless)
│   └── player-android/   # Kotlin Android TV player
├── packages/
│   ├── db/               # Prisma schema, migrations, seed
│   ├── shared/           # Booking state machine, Zod schemas, constants
│   └── config/           # Shared TypeScript config
├── infra/docker-compose.yml   # Local Postgres (optional; Supabase also supported)
├── scripts/              # E2E smoke test, Vercel deploy helpers
└── docb/                 # Product requirements (PRD)
```

## Stack
       .....
| Package | Tech |
|---------|------|
| **apps/web** | Next.js 15, Tailwind, shadcn/ui |
| **apps/api** | NestJS 10, Prisma, Razorpay webhooks |
| **apps/player-android** | Kotlin, Android TV |
| **packages/db** | PostgreSQL (Supabase or Docker), Prisma |
| **packages/shared** | Zod, booking FSM |

## Quick start (local)

```bash
# 1. Install
corepack enable && corepack prepare pnpm@9.15.0 --activate
pnpm install

# 2. Configure env
cp .env.example .env
# Edit .env — set DATABASE_URL (Docker or Supabase), Supabase Auth keys, optional Bunny/Razorpay

# 3. Database — option A: Docker Postgres
docker compose -f infra/docker-compose.yml up -d

# 3. Database — option B: use Supabase URL in .env (skip Docker)

# 4. Migrate & seed
pnpm db:generate
pnpm db:migrate    # or: pnpm --filter @dooh/db migrate:deploy
pnpm db:seed

# 5. Run dev (API :3001 + web :3000)
pnpm dev
```

One-liner bootstrap (Docker only): `pnpm setup`

Without Razorpay keys, checkout uses mock payment (`simulate-capture`). Without Bunny keys, creatives upload to local disk.

### Local URLs

| Service | URL |
|---------|-----|
| Marketplace | http://localhost:3000 |
| API | http://localhost:3001 |
| Admin | http://localhost:3000/admin |
| Owner portal | http://localhost:3000/owner |
| Advertiser portal | http://localhost:3000/advertiser |

### Seed demo logins

After `pnpm db:seed`:

| Role | Email | Password |
|------|-------|----------|
| Admin | `admin@yopmail.com` | `Test@1233` |
| Screen owner | `owner@yopmail.com` | `Test@1233` |
| Advertiser | `advertiser@yopmail.com` | `Test@1233` |

Device pairing credentials (`DOOH-XXXX`) are printed in the seed output.

## Environment variables

See [`.env.example`](.env.example). Key groups:

- **Database** — `DATABASE_URL`
- **Auth (humans)** — `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_JWT_SECRET`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Auth (Android player)** — `JWT_DEVICE_SECRET`
- **API** — `CORS_ORIGIN`, `CRON_SECRET`, `API_URL`
- **Payments** — `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`
- **Creatives** — `BUNNY_STORAGE_ZONE`, `BUNNY_STORAGE_API_KEY`, `BUNNY_CDN_HOSTNAME`

Never commit `.env` to git.

## Scripts

```bash
pnpm dev          # API + web (turbo)
pnpm build        # Build all packages
pnpm test         # Run tests
pnpm db:studio    # Prisma Studio

./scripts/e2e-smoke.sh                          # Full booking flow (local API)
./scripts/vercel-verify.sh <API_URL> [WEB_URL]  # Post-deploy smoke test
```

## Android player

Open `apps/player-android` in Android Studio. Emulator uses `10.0.2.2:3001` for API. Pair with a `DOOH-XXXX` credential from `pnpm db:seed` output.

## Deployment (Vercel)

Deploy **two Vercel projects** from this repo:

| Project | Root directory | Config |
|---------|----------------|--------|
| `dooh-api` | `apps/api` | [`apps/api/vercel.json`](apps/api/vercel.json) |
| `dooh-web` | `apps/web` | [`apps/web/vercel.json`](apps/web/vercel.json) |

Full guide: [docs/VERCEL_DEPLOY.md](docs/VERCEL_DEPLOY.md)

Deploy API first, then web, then set `CORS_ORIGIN` on the API to the web URL. Use the Supabase **connection pooler** URL (port 6543) for `DATABASE_URL` on Vercel.

## Key invariants

1. **No double-booking** — `slot_occupancy` unique on `(device_id, slot_index, play_date)`
2. **Liveness** — 60s player heartbeat; production marketplace hides stale devices
3. **Hold TTL** — 15 minutes; expired holds release slots (cron)

## Docs

| Doc | Description |
|-----|-------------|
| [docb/DOOH_Network_V1_PRD.md](docb/DOOH_Network_V1_PRD.md) | V1 product spec |
| [docb/DOOH_Owner_Advertiser_PRD.md](docb/DOOH_Owner_Advertiser_PRD.md) | Owner & advertiser portals |
| [docs/V1_TASKS.md](docs/V1_TASKS.md) | Implementation tracker |
| [docs/VERCEL_DEPLOY.md](docs/VERCEL_DEPLOY.md) | Vercel deployment guide |
| [docs/SUPABASE_IMPLEMENTATION.md](docs/SUPABASE_IMPLEMENTATION.md) | Supabase setup notes |
| [docs/adr/](docs/adr/) | Architecture decision records |
