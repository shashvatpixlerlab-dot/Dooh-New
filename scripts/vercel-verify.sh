#!/usr/bin/env bash
# Post-deploy verification for Vercel staging
set -euo pipefail

API_URL="${1:-}"
WEB_URL="${2:-}"

if [[ -z "$API_URL" ]]; then
  echo "Usage: $0 <API_URL> [WEB_URL]"
  exit 1
fi

API_URL="${API_URL%/}"
WEB_URL="${WEB_URL%/}"

echo "==> API marketplace devices"
DEVICES=$(curl -sf "$API_URL/api/marketplace/devices")
COUNT=$(echo "$DEVICES" | node -e "const d=JSON.parse(require('fs').readFileSync(0,'utf8')); console.log(d.length)")
echo "    $COUNT devices"

if [[ "$COUNT" -lt 1 ]]; then
  echo "WARN: no devices (seed DB or start Android player for heartbeats)"
fi

echo "==> API auth login (admin)"
ADMIN_EMAIL="${ADMIN_EMAIL:-admin@yopmail.com}"
ADMIN_PASSWORD="${ADMIN_PASSWORD:-Test@1233}"
LOGIN=$(curl -sf -X POST "$API_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$ADMIN_EMAIL\",\"password\":\"$ADMIN_PASSWORD\"}")
echo "$LOGIN" | node -e "const d=JSON.parse(require('fs').readFileSync(0,'utf8')); const r=d.role||d.user?.role; if(!r) process.exit(1); console.log('    role:', r)"

if [[ -n "$WEB_URL" ]]; then
  echo "==> Web homepage"
  STATUS=$(curl -sf -o /dev/null -w "%{http_code}" "$WEB_URL/")
  echo "    HTTP $STATUS"
  if [[ "$STATUS" != "200" ]]; then
    echo "FAIL: web returned $STATUS"
    exit 1
  fi
fi

echo ""
echo "PASS — API reachable. Open $WEB_URL in browser and check DevTools for CORS errors."
