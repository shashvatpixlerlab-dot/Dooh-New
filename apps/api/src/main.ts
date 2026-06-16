import { createNestApp } from "./bootstrap";

async function bootstrap() {
  const app = await createNestApp();
  const port = process.env.PORT ?? process.env.API_PORT ?? 3001;
  await app.listen(port);
  console.log(`API listening on http://localhost:${port}`);
}

bootstrap();
