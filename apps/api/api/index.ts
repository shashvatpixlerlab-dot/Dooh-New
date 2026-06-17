import type { IncomingMessage, ServerResponse } from "http";
import type { Application } from "express";

type VercelRequest = IncomingMessage & {
  query: Record<string, string | string[]>;
  cookies: Record<string, string>;
  body: unknown;
};

type VercelResponse = ServerResponse & {
  send: (body: unknown) => void;
  json: (body: unknown) => void;
  status: (code: number) => VercelResponse;
};

type GetExpressApp = () => Promise<Application>;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    // dist/ is produced by `nest build` in vercel.json buildCommand
    const { getExpressApp } = require("../dist/serverless") as {
      getExpressApp: GetExpressApp;
    };
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
          message:
            err instanceof Error ? err.message : "Internal server error",
        })
      );
    }
  }
}
