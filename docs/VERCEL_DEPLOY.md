# Vercel deployment

Deploy **two Vercel projects** from this monorepo:

| Project    | Root directory | Framework |
|------------|----------------|-----------|
| `dooh-api` | `apps/api`     | Other     |
| `dooh-web` | `apps/web`     | Next.js   |

## 1. Database (one-time, from your machine)

```bash
pnpm install
pnpm db:generate
pnpm --filter @dooh/db migrate:deploy
pnpm db:seed   # optional demo data
```

Use the Supabase **transaction pooler** URL as `DATABASE_URL` on the API project.

## 2. API project (`dooh-api`)

Root: `apps/api`. Build/install commands are in `apps/api/vercel.json`.

Required env vars: `DATABASE_URL`, `CORS_ORIGIN`, `JWT_*`, `CRON_SECRET`, `BUNNY_*`, `NODE_ENV=production`.

After deploy:

```bash
curl https://YOUR-API.vercel.app/api/marketplace/devices
```

## 3. Web project (`dooh-web`)

Root: `apps/web`. Build/install in `apps/web/vercel.json`.

In the Vercel dashboard (**Settings → General → Build & Development**):

| Setting | Value |
|---------|--------|
| Framework Preset | **Next.js** |
| Root Directory | `apps/web` |
| Output Directory | *(leave empty — do not set `public`)* |

If the build succeeds but deploy fails with `No Output Directory named "public"`, the project is misconfigured as a static site. Set Framework Preset to **Next.js** and clear Output Directory, then redeploy.

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
# Add CRON_SECRET to .env first (openssl rand -base64 32)
./scripts/vercel-deploy-api.sh
./scripts/vercel-deploy-web.sh https://YOUR-API.vercel.app
# Then set CORS_ORIGIN on API to your web URL and redeploy API
./scripts/vercel-verify.sh https://YOUR-API.vercel.app https://YOUR-WEB.vercel.app
```
