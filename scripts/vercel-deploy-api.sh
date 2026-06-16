#!/usr/bin/env bash
# Deploy NestJS API to Vercel (project root: apps/api)
# Requires: vercel login OR VERCEL_TOKEN in environment
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/apps/api"

if [[ -z "${VERCEL_TOKEN:-}" ]] && ! vercel whoami &>/dev/null; then
  echo "ERROR: Run 'vercel login' or set VERCEL_TOKEN"
  exit 1
fi

ENV_FILE="${ROOT}/.env"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: Missing $ENV_FILE"
  exit 1
fi

# shellcheck disable=SC1090
source <(grep -E '^(DATABASE_URL|JWT_|CORS_ORIGIN|CRON_SECRET|BUNNY_|HOLD_|DEVICE_|RAZORPAY_|NODE_ENV)=' "$ENV_FILE" | sed 's/^/export /')

export NODE_ENV="${NODE_ENV:-production}"
export CRON_SECRET="${CRON_SECRET:-$(openssl rand -base64 32)}"
export CORS_ORIGIN="${CORS_ORIGIN:-http://localhost:3000}"

echo "==> Linking dooh-api (create if new)..."
vercel link --yes --project dooh-api 2>/dev/null || vercel link --yes

echo "==> Pushing env vars to Vercel (production)..."
vercel env rm DATABASE_URL production -y 2>/dev/null || true
printf '%s' "$DATABASE_URL" | vercel env add DATABASE_URL production

for key in NODE_ENV CORS_ORIGIN CRON_SECRET JWT_DEVICE_SECRET JWT_ADMIN_SECRET JWT_OWNER_SECRET JWT_ADVERTISER_SECRET \
  BUNNY_STORAGE_ZONE BUNNY_STORAGE_API_KEY BUNNY_STORAGE_HOSTNAME BUNNY_CDN_HOSTNAME \
  HOLD_TTL_MINUTES DEVICE_LIVENESS_MINUTES RAZORPAY_KEY_ID RAZORPAY_KEY_SECRET RAZORPAY_WEBHOOK_SECRET; do
  val="${!key:-}"
  [[ -z "$val" ]] && continue
  vercel env rm "$key" production -y 2>/dev/null || true
  printf '%s' "$val" | vercel env add "$key" production
done

echo "==> Deploying API..."
vercel deploy --prod --yes

echo ""
echo "Done. Test with:"
echo "  curl https://\$(vercel inspect --prod 2>/dev/null | head -1)/api/marketplace/devices"
