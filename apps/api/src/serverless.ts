import { ExpressAdapter } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import express from "express";
import { AppModule } from "./app.module";
import { configureNestApp } from "./bootstrap";

let cached: express.Express | null = null;

export async function getExpressApp(): Promise<express.Express> {
  if (cached) return cached;

  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    rawBody: true,
  });
  configureNestApp(app);
  await app.init();
  cached = server;
  return cached;
}
