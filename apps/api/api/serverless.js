"use strict";

function pickDatabaseUrl() {
  return (
    process.env.DATABASE_URL ||
    process.env.VERCEL_DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.SUPABASE_DATABASE_URL ||
    ""
  );
}

function dbEnvKeyNames() {
  return Object.keys(process.env).filter((k) =>
    /DATABASE|POSTGRES|SUPABASE/i.test(k)
  );
}

// Must run before Nest/Prisma load so schema env("DATABASE_URL") resolves.
const resolved = pickDatabaseUrl();
if (resolved) {
  process.env.DATABASE_URL = resolved;
}

if (!process.env.DATABASE_URL) {
  module.exports = async function handler(_req, res) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        statusCode: 500,
        message:
          "DATABASE_URL is not set on this Vercel deployment. Add it to the dooh-api project for Production AND Preview, then redeploy.",
        vercelEnv: process.env.VERCEL_ENV ?? null,
        dbEnvKeysFound: dbEnvKeyNames(),
      })
    );
  };
} else {
  module.exports = async function handler(req, res) {
    try {
      const { getExpressApp } = require("../dist/serverless");
      const app = await getExpressApp();
      await new Promise((resolve, reject) => {
        app(req, res, (err) => (err ? reject(err) : resolve()));
      });
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
}
