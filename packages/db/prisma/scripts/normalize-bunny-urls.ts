/**
 * Rewrites image URLs in the DB to working public URLs.
 * Uses Bunny CDN when the pull zone is active, otherwise API proxy URLs.
 *
 * Run: pnpm --filter @dooh/db normalize:bunny-urls
 */
import { PrismaClient } from "../../src/generated/client";

const prisma = new PrismaClient();

const CDN_HOST = (
  process.env.BUNNY_CDN_HOSTNAME ?? ""
).replace(/^https?:\/\//, "").replace(/\/$/, "");

const API_BASE = (
  process.env.API_URL ?? `http://localhost:${process.env.API_PORT ?? 3001}`
).replace(/\/$/, "");

async function isCdnAvailable(hostname: string): Promise<boolean> {
  try {
    const res = await fetch(`https://${hostname}/`);
    const text = await res.text();
    return (
      !text.includes("Domain suspended or not configured") &&
      !text.includes("unconfigured.css")
    );
  } catch {
    return false;
  }
}

function extractPath(imageUrl: string): string | null {
  try {
    const parsed = new URL(imageUrl);
    const prefix = "/api/creatives/file/";
    if (parsed.pathname.startsWith(prefix)) {
      return decodeURIComponent(parsed.pathname.slice(prefix.length));
    }
    if (
      parsed.hostname.endsWith(".b-cdn.net") ||
      (CDN_HOST && parsed.hostname === CDN_HOST)
    ) {
      return decodeURIComponent(parsed.pathname.replace(/^\//, ""));
    }
    return null;
  } catch {
    return null;
  }
}

function publicUrlForPath(path: string, useCdn: boolean): string {
  if (useCdn && CDN_HOST) {
    return `https://${CDN_HOST}/${path}`;
  }
  return `${API_BASE}/api/creatives/file/${path}`;
}

async function main() {
  const useCdn = CDN_HOST ? await isCdnAvailable(CDN_HOST) : false;
  if (!CDN_HOST) {
    console.warn("BUNNY_CDN_HOSTNAME not set — using API proxy URLs");
  } else if (!useCdn) {
    console.warn(
      `CDN "${CDN_HOST}" is not active — using API proxy URLs. Run: pnpm --filter @dooh/db setup:bunny-cdn`
    );
  } else {
    console.log(`CDN active at https://${CDN_HOST}`);
  }

  let updated = 0;

  const images = await prisma.deviceImage.findMany();
  for (const img of images) {
    const path = extractPath(img.imageUrl);
    if (!path) continue;
    const next = publicUrlForPath(path, useCdn);
    if (next !== img.imageUrl) {
      await prisma.deviceImage.update({
        where: { id: img.id },
        data: { imageUrl: next },
      });
      updated++;
    }
  }

  const devices = await prisma.device.findMany({
    select: { id: true, defaultImageUrl: true },
  });
  for (const device of devices) {
    const path = extractPath(device.defaultImageUrl);
    if (!path) continue;
    const next = publicUrlForPath(path, useCdn);
    if (next !== device.defaultImageUrl) {
      await prisma.device.update({
        where: { id: device.id },
        data: { defaultImageUrl: next },
      });
      updated++;
    }
  }

  const label = useCdn ? `https://${CDN_HOST}/...` : `${API_BASE}/api/creatives/file/...`;
  console.log(`Normalized ${updated} image URL(s) to ${label}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
