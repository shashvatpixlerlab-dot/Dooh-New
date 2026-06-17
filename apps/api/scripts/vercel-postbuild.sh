#!/usr/bin/env bash
# Bundle workspace packages for Vercel serverless and write the API handler.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
API="$(cd "$(dirname "$0")/.." && pwd)"

install_workspace_pkg() {
  local pkg_dir="$1"
  local dest_name="$2"
  local dest="$API/node_modules/@dooh/$dest_name"
  rm -rf "$dest"
  mkdir -p "$dest"
  cp "$pkg_dir/package.json" "$dest/"
  cp -r "$pkg_dir/dist" "$dest/dist"
}

mkdir -p "$API/node_modules/@dooh"
install_workspace_pkg "$ROOT/packages/db" "db"
install_workspace_pkg "$ROOT/packages/shared" "shared"

if [[ ! -f "$API/dist/serverless.js" ]]; then
  echo "ERROR: dist/serverless.js missing — run nest build first" >&2
  exit 1
fi

echo "Vercel postbuild: installed @dooh workspace dist bundles"
