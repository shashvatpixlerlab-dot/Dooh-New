#!/usr/bin/env bash
# Shared helpers for pushing env vars to Vercel (production + preview).
set -euo pipefail

VERCEL_ENVS=(production preview)

vercel_require_auth() {
  if [[ -z "${VERCEL_TOKEN:-}" ]] && ! vercel whoami &>/dev/null; then
    echo "ERROR: Run 'vercel login' or set VERCEL_TOKEN" >&2
    exit 1
  fi
}

vercel_push_env() {
  local key="$1"
  local val="$2"
  [[ -z "$val" ]] && return 0
  for env in "${VERCEL_ENVS[@]}"; do
    vercel env rm "$key" "$env" -y 2>/dev/null || true
  done
  printf '%s' "$val" | vercel env add "$key" "${VERCEL_ENVS[@]}"
}
