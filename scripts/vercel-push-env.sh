#!/usr/bin/env bash
# Push env vars from .env to Vercel API + Web projects (no deploy).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# shellcheck source=vercel-env-lib.sh
source "$ROOT/scripts/vercel-env-lib.sh"

ENV_FILE="${ROOT}/.env"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: Missing $ENV_FILE" >&2
  exit 1
fi

vercel_require_auth

# shellcheck disable=SC1090
source <(grep -E '^(DATABASE_URL|VERCEL_DATABASE_URL|VERCEL_API_URL|VERCEL_WEB_URL|JWT_|CRON_SECRET|BUNNY_|HOLD_|DEVICE_|RAZORPAY_|TIMEZONE|ALLOW_ADMIN_SIGNUP)=' "$ENV_FILE" | sed 's/^/export /')

export NODE_ENV=production
export DATABASE_URL="${VERCEL_DATABASE_URL:-${DATABASE_URL:-}}"
export CRON_SECRET="${CRON_SECRET:-$(openssl rand -base64 32)}"
if [[ -n "${VERCEL_WEB_URL:-}" ]]; then
  export CORS_ORIGIN="$VERCEL_WEB_URL"
else
  echo "ERROR: Set VERCEL_WEB_URL in .env (comma-separated web URLs for CORS)" >&2
  exit 1
fi
export API_URL="${VERCEL_API_URL:-}"
if [[ -z "$API_URL" ]]; then
  echo "ERROR: Set VERCEL_API_URL in .env" >&2
  exit 1
fi

if [[ "$DATABASE_URL" != *":6543"* ]] || [[ "$DATABASE_URL" != *"pooler"* ]]; then
  echo "WARN: DATABASE_URL should use Supabase pooler port 6543 for Vercel" >&2
fi

echo "==> API project (dooh-api)"
cd "$ROOT/apps/api"
vercel link --yes --project dooh-api 2>/dev/null || vercel link --yes

vercel_push_env DATABASE_URL "$DATABASE_URL"
for key in NODE_ENV CORS_ORIGIN CRON_SECRET API_URL JWT_DEVICE_SECRET JWT_ADMIN_SECRET JWT_OWNER_SECRET JWT_ADVERTISER_SECRET \
  BUNNY_STORAGE_ZONE BUNNY_STORAGE_API_KEY BUNNY_STORAGE_HOSTNAME BUNNY_CDN_HOSTNAME BUNNY_API_KEY \
  HOLD_TTL_MINUTES DEVICE_LIVENESS_MINUTES TIMEZONE ALLOW_ADMIN_SIGNUP \
  RAZORPAY_KEY_ID RAZORPAY_KEY_SECRET RAZORPAY_WEBHOOK_SECRET; do
  vercel_push_env "$key" "${!key:-}"
done

echo "==> Web project (dooh-new-web)"
cd "$ROOT/apps/web"
vercel link --yes --project dooh-new-web 2>/dev/null || vercel link --yes

BUNNY_HOST="${NEXT_PUBLIC_BUNNY_CDN_HOSTNAME:-${BUNNY_CDN_HOSTNAME:-}}"
# shellcheck disable=SC1090
source <(grep -E '^(JWT_ADMIN_SECRET|JWT_OWNER_SECRET|JWT_ADVERTISER_SECRET|NEXT_PUBLIC_BUNNY_CDN_HOSTNAME|BUNNY_CDN_HOSTNAME)=' "$ENV_FILE" | sed 's/^/export /')

for key in NODE_ENV JWT_ADMIN_SECRET JWT_OWNER_SECRET JWT_ADVERTISER_SECRET; do
  vercel_push_env "$key" "${!key:-}"
done
vercel_push_env API_URL "$API_URL"
vercel_push_env NEXT_PUBLIC_API_URL "$API_URL"
if [[ -n "$BUNNY_HOST" ]]; then
  vercel_push_env NEXT_PUBLIC_BUNNY_CDN_HOSTNAME "$BUNNY_HOST"
fi

echo ""
echo "Done. Redeploy both projects:"
echo "  cd apps/api && vercel deploy --prod --yes"
echo "  cd apps/web && vercel deploy --prod --yes"
