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
pnpm db:seed   # optional demo data
```

Use the Supabase **transaction pooler** URL as `DATABASE_URL` on the API project.

## 2. API project (`dooh-api`)

Root: `apps/api`. Build/install in `apps/api/vercel.json`.

Install uses `pnpm install --filter @dooh/api...` so the API build does **not** install Next.js/sharp from `apps/web` (that was causing Vercel install failures).

**Critical:** In Vercel → **dooh-api** → **Settings** → **General** → **Root Directory**, set **`apps/api`**.  
If this is blank, the handler path breaks (`Cannot find module '../dist/serverless'`) and builds use the wrong layout.

**Framework Preset:** **Other** (not Next.js). **Output Directory:** leave empty.

The API is a serverless NestJS app (`api/index.ts` → `dist/serverless.js`), not a static site — do not set Output Directory to `public`.

Required env vars: `DATABASE_URL`, `CORS_ORIGIN`, `JWT_*`, `CRON_SECRET`, `BUNNY_*`, `NODE_ENV=production`.

After deploy:

```bash
curl https://YOUR-API.vercel.app/api/marketplace/devices
```

## 3. Web project (`dooh-web`)

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

Required env vars: `API_URL`, `NEXT_PUBLIC_API_URL`, `JWT_ADMIN_SECRET`, `JWT_OWNER_SECRET`, `JWT_ADVERTISER_SECRET`, `NEXT_PUBLIC_BUNNY_CDN_HOSTNAME`.

JWT secrets must match the API project exactly.

## 4. CORS

Set `CORS_ORIGIN` on the API to your web URL (e.g. `https://dooh-web.vercel.app`) and redeploy the API.

## 5. Razorpay (optional)

Webhook URL: `https://YOUR-API.vercel.app/api/payments/webhook`  
Event: `payment.captured`

## 6. Automated deploy scripts

After `vercel login` (or with `VERCEL_TOKEN` set):

```bash
# Add VERCEL_DATABASE_URL (pooler) to .env first
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
