#!/usr/bin/env bash
# Deploy Next.js web to Vercel (project root: apps/web)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/apps/web"
# shellcheck source=vercel-env-lib.sh
source "$ROOT/scripts/vercel-env-lib.sh"

vercel_require_auth

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
source <(grep -E '^(NEXT_PUBLIC_SUPABASE_URL|NEXT_PUBLIC_SUPABASE_ANON_KEY|SUPABASE_URL|NEXT_PUBLIC_BUNNY_CDN_HOSTNAME|BUNNY_CDN_HOSTNAME)=' "$ENV_FILE" | sed 's/^/export /')

export NODE_ENV=production
BUNNY_HOST="${NEXT_PUBLIC_BUNNY_CDN_HOSTNAME:-${BUNNY_CDN_HOSTNAME:-}}"
export NEXT_PUBLIC_SUPABASE_URL="${NEXT_PUBLIC_SUPABASE_URL:-${SUPABASE_URL:-}}"

echo "==> Linking dooh-new-web..."
vercel link --yes --project dooh-new-web 2>/dev/null || vercel link --yes

echo "==> Pushing env vars (production + preview)..."
for key in NODE_ENV API_URL NEXT_PUBLIC_API_URL NEXT_PUBLIC_SUPABASE_URL NEXT_PUBLIC_SUPABASE_ANON_KEY; do
  vercel_push_env "$key" "${!key:-}"
done
if [[ -n "$BUNNY_HOST" ]]; then
  vercel_push_env NEXT_PUBLIC_BUNNY_CDN_HOSTNAME "$BUNNY_HOST"
fi

echo "==> Deploying web..."
vercel deploy --prod --yes

echo ""
echo "Done. Ensure API CORS_ORIGIN includes your web URL, then verify:"
echo "  ./scripts/vercel-verify.sh $API_URL https://dooh-new-web.vercel.app"
