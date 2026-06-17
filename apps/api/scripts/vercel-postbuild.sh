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

if [[ ! -f "$API/dist/serverless.js" ]]; then
  echo "ERROR: dist/serverless.js missing — run nest build first" >&2
  exit 1
fi

# Plain JS entrypoint — avoids Vercel TS compile issues; require() sits next to serverless.js
cat > "$API/dist/vercel.js" <<'EOF'
"use strict";
const { getExpressApp } = require("./serverless");

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

echo "Vercel postbuild: wrote dist/vercel.js and copied @dooh workspace packages"
