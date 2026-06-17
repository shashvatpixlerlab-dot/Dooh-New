#!/usr/bin/env bash
# Vercel serverless runs from apps/api only — pnpm workspace symlinks point outside
# /var/task and break at runtime. Copy real package trees into node_modules/@dooh.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
API="$(cd "$(dirname "$0")/.." && pwd)"

mkdir -p "$API/node_modules/@dooh"
rm -rf "$API/node_modules/@dooh/db" "$API/node_modules/@dooh/shared"
cp -a "$ROOT/packages/db" "$API/node_modules/@dooh/db"
cp -a "$ROOT/packages/shared" "$API/node_modules/@dooh/shared"

echo "Vercel postbuild: copied @dooh/db and @dooh/shared into apps/api/node_modules"
