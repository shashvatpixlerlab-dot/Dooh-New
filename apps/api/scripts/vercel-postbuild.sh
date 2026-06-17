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

# Plain JS handler for Vercel /api/serverless (modern functions config)
cat > "$API/api/serverless.js" <<'EOF'
"use strict";
const { getExpressApp } = require("../dist/serverless");

module.exports = async function handler(req, res) {
  try {
    const app = await getExpressApp();
    app(req, res);
  } catch (err) {
    console.error("API handler error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          statusCode: 500,
          message: err instanceof Error ? err.message : "Internal server error",
        })
      );
    }
  }
};
EOF

echo "Vercel postbuild: wrote api/serverless.js and installed @dooh workspace dist bundles"
