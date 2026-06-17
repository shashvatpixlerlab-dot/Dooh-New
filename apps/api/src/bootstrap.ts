import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { PrismaAwareExceptionFilter } from "./common/prisma-exception.filter";

export function configureNestApp(app: INestApplication): void {
  app.setGlobalPrefix("api");
  app.useGlobalFilters(new PrismaAwareExceptionFilter());
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()) ?? [
      "http://localhost:3000",
    ],
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );
}

export async function createNestApp(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  configureNestApp(app);
  await app.init();
  return app;
}
