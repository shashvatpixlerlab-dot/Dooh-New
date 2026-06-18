import type { IncomingMessage, ServerResponse } from "http";
import { getExpressApp } from "../dist/serverless";

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

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  const app = await getExpressApp();
  app(req, res);
}
