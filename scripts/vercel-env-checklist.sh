#!/usr/bin/env bash
# Print env vars to copy into Vercel dashboard (reads local .env — never commit output).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="${ROOT}/.env"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: Missing $ENV_FILE" >&2
  exit 1
fi

# shellcheck disable=SC1090
source <(grep -E '^(DATABASE_URL|VERCEL_DATABASE_URL|VERCEL_API_URL|VERCEL_WEB_URL|JWT_|CRON_SECRET|BUNNY_|HOLD_|DEVICE_|RAZORPAY_|TIMEZONE|ALLOW_ADMIN_SIGNUP|NEXT_PUBLIC_BUNNY_CDN_HOSTNAME)=' "$ENV_FILE" | sed 's/^/export /')

DATABASE_URL="${VERCEL_DATABASE_URL:-${DATABASE_URL:-}}"
API_URL="${VERCEL_API_URL:-}"
WEB_CORS="${VERCEL_WEB_URL:-}"

if [[ -z "$API_URL" || -z "$WEB_CORS" ]]; then
  echo "ERROR: Set VERCEL_API_URL and VERCEL_WEB_URL in .env" >&2
  exit 1
fi

if [[ "$DATABASE_URL" != *":6543"* ]] || [[ "$DATABASE_URL" != *"pooler"* ]]; then
  echo "WARN: DATABASE_URL should use Supabase pooler (:6543) on Vercel API" >&2
fi

print_section() {
  echo ""
  echo "========== $1 =========="
  echo "Vercel → Project → Settings → Environment Variables"
  echo "Scope: Production + Preview"
  echo ""
}

print_var() {
  printf '%s\n' "$2" | awk -v k="$1" 'BEGIN{printf "%s = ", k} {print}'
}

print_section "dooh-api (Root Directory: apps/api)"
print_var "NODE_ENV" "production"
print_var "DATABASE_URL" "$DATABASE_URL"
print_var "CORS_ORIGIN" "$WEB_CORS"
print_var "CRON_SECRET" "${CRON_SECRET:-}"
print_var "API_URL" "$API_URL"
print_var "JWT_DEVICE_SECRET" "${JWT_DEVICE_SECRET:-}"
print_var "JWT_ADMIN_SECRET" "${JWT_ADMIN_SECRET:-}"
print_var "JWT_OWNER_SECRET" "${JWT_OWNER_SECRET:-}"
print_var "JWT_ADVERTISER_SECRET" "${JWT_ADVERTISER_SECRET:-}"
print_var "BUNNY_STORAGE_ZONE" "${BUNNY_STORAGE_ZONE:-}"
print_var "BUNNY_STORAGE_API_KEY" "${BUNNY_STORAGE_API_KEY:-}"
print_var "BUNNY_STORAGE_HOSTNAME" "${BUNNY_STORAGE_HOSTNAME:-storage.bunnycdn.com}"
print_var "BUNNY_CDN_HOSTNAME" "${BUNNY_CDN_HOSTNAME:-}"
print_var "BUNNY_API_KEY" "${BUNNY_API_KEY:-}"
print_var "HOLD_TTL_MINUTES" "${HOLD_TTL_MINUTES:-15}"
print_var "DEVICE_LIVENESS_MINUTES" "${DEVICE_LIVENESS_MINUTES:-10}"
print_var "TIMEZONE" "${TIMEZONE:-Asia/Kolkata}"
print_var "ALLOW_ADMIN_SIGNUP" "${ALLOW_ADMIN_SIGNUP:-false}"

print_section "dooh-new-web (Root Directory: apps/web)"
print_var "NODE_ENV" "production"
print_var "API_URL" "$API_URL"
print_var "NEXT_PUBLIC_API_URL" "$API_URL"
print_var "JWT_ADMIN_SECRET" "${JWT_ADMIN_SECRET:-}"
print_var "JWT_OWNER_SECRET" "${JWT_OWNER_SECRET:-}"
print_var "JWT_ADVERTISER_SECRET" "${JWT_ADVERTISER_SECRET:-}"
print_var "NEXT_PUBLIC_BUNNY_CDN_HOSTNAME" "${NEXT_PUBLIC_BUNNY_CDN_HOSTNAME:-${BUNNY_CDN_HOSTNAME:-}}"

echo ""
echo "Extracted files (gitignored):"
echo "  $ROOT/.env.vercel.api   → paste into dooh-api"
echo "  $ROOT/.env.vercel.web   → paste into dooh-new-web"
echo ""
echo "========== AFTER SAVING ENV VARS =========="
echo "1. Redeploy dooh-api (Deployments → latest → Redeploy)"
echo "2. Redeploy dooh-new-web"
echo "3. Verify:"
echo "   ./scripts/vercel-verify.sh $API_URL https://dooh-new-web.vercel.app"
echo ""
echo "Do NOT set DATABASE_URL on the web project."
