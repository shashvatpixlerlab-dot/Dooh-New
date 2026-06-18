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
source <(grep -E '^(DATABASE_URL|VERCEL_DATABASE_URL|VERCEL_API_URL|VERCEL_WEB_URL|SUPABASE_|NEXT_PUBLIC_SUPABASE_|JWT_DEVICE_SECRET|CRON_SECRET|BUNNY_|HOLD_|DEVICE_|RAZORPAY_|TIMEZONE|ALLOW_ADMIN_SIGNUP|NEXT_PUBLIC_BUNNY_CDN_HOSTNAME)=' "$ENV_FILE" | sed 's/^/export /')

export NODE_ENV=production
export DATABASE_URL="${VERCEL_DATABASE_URL:-${DATABASE_URL:-}}"
export CRON_SECRET="${CRON_SECRET:-$(openssl rand -base64 32)}"
export SUPABASE_URL="${SUPABASE_URL:-${NEXT_PUBLIC_SUPABASE_URL:-}}"
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
for key in NODE_ENV CORS_ORIGIN CRON_SECRET API_URL SUPABASE_URL SUPABASE_SERVICE_ROLE_KEY SUPABASE_JWT_SECRET JWT_DEVICE_SECRET \
  BUNNY_STORAGE_ZONE BUNNY_STORAGE_API_KEY BUNNY_STORAGE_HOSTNAME BUNNY_CDN_HOSTNAME BUNNY_API_KEY \
  HOLD_TTL_MINUTES DEVICE_LIVENESS_MINUTES TIMEZONE ALLOW_ADMIN_SIGNUP \
  RAZORPAY_KEY_ID RAZORPAY_KEY_SECRET RAZORPAY_WEBHOOK_SECRET; do
  vercel_push_env "$key" "${!key:-}"
done

echo "==> Web project (dooh-new-web)"
cd "$ROOT/apps/web"
vercel link --yes --project dooh-new-web 2>/dev/null || vercel link --yes

BUNNY_HOST="${NEXT_PUBLIC_BUNNY_CDN_HOSTNAME:-${BUNNY_CDN_HOSTNAME:-}}"

for key in NODE_ENV API_URL NEXT_PUBLIC_API_URL NEXT_PUBLIC_SUPABASE_URL NEXT_PUBLIC_SUPABASE_ANON_KEY; do
  vercel_push_env "$key" "${!key:-}"
done
if [[ -n "$BUNNY_HOST" ]]; then
  vercel_push_env NEXT_PUBLIC_BUNNY_CDN_HOSTNAME "$BUNNY_HOST"
fi

echo ""
echo "Done. Redeploy both projects:"
echo "  cd apps/api && vercel deploy --prod --yes"
echo "  cd apps/web && vercel deploy --prod --yes"
