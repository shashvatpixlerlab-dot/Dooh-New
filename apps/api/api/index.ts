import type { IncomingMessage, ServerResponse } from "http";
import type { Express } from "express";

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

type GetExpressApp = () => Promise<Express>;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  // dist/ is produced by `nest build` in vercel.json buildCommand
  const { getExpressApp } = require("../dist/serverless") as {
    getExpressApp: GetExpressApp;
  };
  const app = await getExpressApp();
  app(req, res);
}
