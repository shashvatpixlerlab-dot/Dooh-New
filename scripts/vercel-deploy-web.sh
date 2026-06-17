#!/usr/bin/env bash
# Deploy Next.js web to Vercel (project root: apps/web)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/apps/web"

if [[ -z "${VERCEL_TOKEN:-}" ]] && ! vercel whoami &>/dev/null; then
  echo "ERROR: Run 'vercel login' or set VERCEL_TOKEN"
  exit 1
fi

ENV_FILE="${ROOT}/.env"
API_URL="${1:-}"
if [[ -z "$API_URL" ]]; then
  # shellcheck disable=SC1090
  source <(grep -E '^(VERCEL_API_URL|API_URL)=' "$ENV_FILE" | sed 's/^/export /')
  API_URL="${VERCEL_API_URL:-${API_URL:-}}"
fi
if [[ -z "$API_URL" ]]; then
  echo "Usage: $0 <API_URL>"
  echo "  e.g. $0 https://dooh-api.vercel.app"
  exit 1
fi

# shellcheck disable=SC1090
source <(grep -E '^(JWT_ADMIN_SECRET|JWT_OWNER_SECRET|JWT_ADVERTISER_SECRET|NEXT_PUBLIC_BUNNY_CDN_HOSTNAME|BUNNY_CDN_HOSTNAME)=' "$ENV_FILE" | sed 's/^/export /')

export NODE_ENV=production
BUNNY_HOST="${NEXT_PUBLIC_BUNNY_CDN_HOSTNAME:-${BUNNY_CDN_HOSTNAME:-}}"

echo "==> Linking dooh-web..."
vercel link --yes --project dooh-web 2>/dev/null || vercel link --yes

echo "==> Pushing env vars..."
for key in NODE_ENV API_URL NEXT_PUBLIC_API_URL JWT_ADMIN_SECRET JWT_OWNER_SECRET JWT_ADVERTISER_SECRET; do
  case "$key" in
    API_URL|NEXT_PUBLIC_API_URL) val="$API_URL" ;;
    *) val="${!key:-}" ;;
  esac
  [[ -z "$val" ]] && continue
  vercel env rm "$key" production -y 2>/dev/null || true
  printf '%s' "$val" | vercel env add "$key" production
done
if [[ -n "$BUNNY_HOST" ]]; then
  vercel env rm NEXT_PUBLIC_BUNNY_CDN_HOSTNAME production -y 2>/dev/null || true
  printf '%s' "$BUNNY_HOST" | vercel env add NEXT_PUBLIC_BUNNY_CDN_HOSTNAME production
fi

echo "==> Deploying web..."
vercel deploy --prod --yes

echo ""
echo "After deploy, update API CORS_ORIGIN to your web URL and redeploy API:"
echo "  cd apps/api && vercel env add CORS_ORIGIN production"
echo "  vercel deploy --prod --yes"
