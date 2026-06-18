#!/usr/bin/env bash
# Deploy NestJS API to Vercel (project root: apps/api)
# Requires: vercel login OR VERCEL_TOKEN in environment
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/apps/api"
# shellcheck source=vercel-env-lib.sh
source "$ROOT/scripts/vercel-env-lib.sh"

vercel_require_auth

ENV_FILE="${ROOT}/.env"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: Missing $ENV_FILE"
  exit 1
fi

# shellcheck disable=SC1090
source <(grep -E '^(DATABASE_URL|VERCEL_DATABASE_URL|VERCEL_WEB_URL|SUPABASE_|JWT_DEVICE_SECRET|CORS_ORIGIN|CRON_SECRET|BUNNY_|HOLD_|DEVICE_|RAZORPAY_|TIMEZONE|ALLOW_ADMIN_SIGNUP|NODE_ENV)=' "$ENV_FILE" | sed 's/^/export /')

export NODE_ENV=production
export DATABASE_URL="${VERCEL_DATABASE_URL:-${DATABASE_URL:-}}"
export CRON_SECRET="${CRON_SECRET:-$(openssl rand -base64 32)}"
export SUPABASE_URL="${SUPABASE_URL:-${NEXT_PUBLIC_SUPABASE_URL:-}}"
if [[ -n "${VERCEL_WEB_URL:-}" ]]; then
  export CORS_ORIGIN="$VERCEL_WEB_URL"
else
  export CORS_ORIGIN="${CORS_ORIGIN:-http://localhost:3000}"
fi
export API_URL="${VERCEL_API_URL:-${API_URL:-}}"

echo "==> Linking dooh-api (create if new)..."
vercel link --yes --project dooh-api 2>/dev/null || vercel link --yes

echo "==> Pushing env vars to Vercel (production + preview)..."
vercel_push_env DATABASE_URL "$DATABASE_URL"

for key in NODE_ENV CORS_ORIGIN CRON_SECRET API_URL SUPABASE_URL SUPABASE_SERVICE_ROLE_KEY SUPABASE_JWT_SECRET JWT_DEVICE_SECRET \
  BUNNY_STORAGE_ZONE BUNNY_STORAGE_API_KEY BUNNY_STORAGE_HOSTNAME BUNNY_CDN_HOSTNAME BUNNY_API_KEY \
  HOLD_TTL_MINUTES DEVICE_LIVENESS_MINUTES TIMEZONE ALLOW_ADMIN_SIGNUP \
  RAZORPAY_KEY_ID RAZORPAY_KEY_SECRET RAZORPAY_WEBHOOK_SECRET; do
  vercel_push_env "$key" "${!key:-}"
done

echo "==> Deploying API..."
vercel deploy --prod --yes

echo ""
echo "Done. Test with:"
echo "  curl https://\$(vercel inspect --prod 2>/dev/null | head -1)/api/health"
