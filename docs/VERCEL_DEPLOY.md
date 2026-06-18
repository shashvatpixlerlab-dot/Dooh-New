# Vercel deployment

Deploy **two Vercel projects** from this monorepo:

| Project    | Root directory | Framework |
|------------|----------------|-----------|
| `dooh-api` | `apps/api`     | Other     |
| `dooh-web` | `apps/web`     | Next.js   |

Project name on Vercel may be `dooh-new-web` instead of `dooh-web`.

## 1. Database (one-time, from your machine)

```bash
pnpm install
pnpm db:generate
pnpm --filter @dooh/db migrate:deploy
pnpm db:seed   # optional demo data (needs SUPABASE_SERVICE_ROLE_KEY in .env)
```

Use the Supabase **transaction pooler** URL as `DATABASE_URL` on the API project.

## 2. API project (`dooh-api`)

Root: `apps/api`. Build/install in `apps/api/vercel.json`.

Install uses `pnpm install --filter @dooh/api...` so the API build does **not** install Next.js/sharp from `apps/web` (that was causing Vercel install failures).

**Critical:** In Vercel → **dooh-api** → **Settings** → **General** → **Root Directory**, set **`apps/api`**.  
If this is blank, the handler path breaks and builds use the wrong layout.

**Framework Preset:** **Other** (not Next.js). **Output Directory:** leave empty.

The API is a serverless NestJS app (`api/serverless.js` → `dist/serverless.js`), not a static site — do not set Output Directory to `public`.

Required env vars:

| Variable | Notes |
|----------|--------|
| `DATABASE_URL` | Supabase pooler `:6543` |
| `SUPABASE_URL` | Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | API only — never on web |
| `SUPABASE_JWT_SECRET` | From Supabase dashboard |
| `JWT_DEVICE_SECRET` | Android TV player auth |
| `CORS_ORIGIN` | Web URL(s), comma-separated |
| `CRON_SECRET` | Cron route auth |
| `BUNNY_*` | Creative storage/CDN |
| `NODE_ENV` | `production` |

After deploy:

```bash
curl https://YOUR-API.vercel.app/api/health
curl https://YOUR-API.vercel.app/api/marketplace/devices
```

## 3. Web project (`dooh-web` / `dooh-new-web`)

Root: `apps/web`. Build/install in `apps/web/vercel.json`.

**Recommended:** In Vercel → **dooh-web** → **Settings** → **General** → **Root Directory**, set **`apps/web`**.

If Root Directory is blank (repo root), Vercel uses the repo-root `vercel.json` (forces `@vercel/next` on `apps/web`).  
Once Root Directory is `apps/web`, that root file is ignored and `apps/web/vercel.json` is used instead.

Then under **Build & Development Settings**, turn **off** any overrides that conflict:

| Setting | Value |
|---------|--------|
| Framework Preset | **Next.js** |
| Root Directory | `apps/web` |
| Build Command | *(override off — use `apps/web/vercel.json`)* or `cd ../.. && pnpm turbo build --filter=@dooh/web` |
| Output Directory | *(override off — leave empty; do not use `public`)* |
| Install Command | *(override off — use `apps/web/vercel.json`)* or `cd ../.. && pnpm install` |

If the build succeeds but deploy fails with `No Output Directory named "public"`:

1. Confirm **Root Directory** is `apps/web` (not blank).
2. Set **Framework Preset** to **Next.js**.
3. Disable the **Output Directory** override (empty field).
4. Redeploy (Deployments → … → Redeploy).

Required env vars:

| Variable | Notes |
|----------|--------|
| `API_URL` | API base URL |
| `NEXT_PUBLIC_API_URL` | Same as `API_URL` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `NEXT_PUBLIC_BUNNY_CDN_HOSTNAME` | e.g. `dooh.b-cdn.net` |
| `NODE_ENV` | `production` |

**Do not** set `DATABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, or `JWT_DEVICE_SECRET` on the web project.

## 4. Supabase Auth (required)

In Supabase → **Authentication** → **URL configuration**:

- **Site URL:** `https://dooh-new-web.vercel.app` (or your production web URL)
- **Redirect URLs:** production URL, preview URLs, `http://localhost:3000`

## 5. CORS

Set `CORS_ORIGIN` on the API to your web URL(s) (e.g. `https://dooh-new-web.vercel.app,https://dooh-new-web-git-main-pixler-lab.vercel.app`) and redeploy the API.

## 6. Razorpay (optional)

Webhook URL: `https://YOUR-API.vercel.app/api/payments/webhook`  
Event: `payment.captured`

## 7. Automated deploy scripts

After `vercel login` (or with `VERCEL_TOKEN` set):

```bash
# Add VERCEL_DATABASE_URL (pooler) and SUPABASE_* to .env first
./scripts/vercel-push-env.sh
cd apps/api && vercel deploy --prod --yes
cd ../web && vercel deploy --prod --yes
./scripts/vercel-verify.sh https://YOUR-API.vercel.app https://YOUR-WEB.vercel.app
```

Or use the all-in-one scripts:

```bash
./scripts/vercel-deploy-api.sh
./scripts/vercel-deploy-web.sh https://YOUR-API.vercel.app
```

### Manual dashboard setup (no CLI)

```bash
./scripts/vercel-env-checklist.sh
```

Copy each variable into **dooh-api** and **dooh-new-web** in the Vercel dashboard (Production + Preview), then redeploy both projects.

Production URLs for this deployment:

| Project | URL |
|---------|-----|
| API | `https://dooh-api-git-main-pixler-lab.vercel.app` |
| Web | `https://dooh-new-web.vercel.app` |

`DATABASE_URL` on the API must use the Supabase **transaction pooler** (port **6543**, host `*.pooler.supabase.com`). Direct `:5432` URLs fail on serverless.
