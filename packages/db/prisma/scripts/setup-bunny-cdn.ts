/**
 * Creates a Bunny pull zone linked to your storage zone so CDN URLs work.
 * Requires BUNNY_API_KEY (account API key from bunny.net dashboard → Account → API).
 *
 * Run: pnpm --filter @dooh/db setup:bunny-cdn
 */
const BUNNY_API = "https://api.bunny.net";

const storageZoneName = (
  process.env.BUNNY_STORAGE_ZONE ?? "dooh-media"
).replace(/^["']|["']$/g, "");

const pullZoneName =
  process.env.BUNNY_PULL_ZONE_NAME?.replace(/^["']|["']$/g, "") ??
  storageZoneName;

const apiKey = process.env.BUNNY_API_KEY?.replace(/^["']|["']$/g, "");

type StorageZone = { Id: number; Name: string };
type PullZone = {
  Id: number;
  Name: string;
  Hostnames: { Value: string }[];
  StorageZoneId?: number;
  OriginType?: number;
};

async function bunnyFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BUNNY_API}${path}`, {
    ...init,
    headers: {
      AccessKey: apiKey!,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Bunny API ${path} failed (${res.status}): ${body.slice(0, 200)}`);
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

async function findStorageZone(): Promise<StorageZone> {
  const zones = await bunnyFetch<StorageZone[]>("/storagezone");
  const zone = zones.find(
    (z) => z.Name.toLowerCase() === storageZoneName.toLowerCase()
  );
  if (!zone) {
    throw new Error(
      `Storage zone "${storageZoneName}" not found. Check BUNNY_STORAGE_ZONE in .env`
    );
  }
  return zone;
}

async function findLinkedPullZone(storageZoneId: number): Promise<PullZone | null> {
  const zones = await bunnyFetch<PullZone[]>("/pullzone");
  return (
    zones.find(
      (z) => z.StorageZoneId === storageZoneId && z.OriginType === 2
    ) ?? null
  );
}

async function createPullZone(storageZoneId: number): Promise<PullZone> {
  await bunnyFetch("/pullzone", {
    method: "POST",
    body: JSON.stringify({
      Name: pullZoneName,
      OriginType: 2,
      StorageZoneId: storageZoneId,
    }),
  });

  const zones = await bunnyFetch<PullZone[]>("/pullzone");
  const created = zones.find((z) => z.Name === pullZoneName);
  if (!created) {
    throw new Error("Pull zone created but could not be found in list");
  }
  return created;
}

async function verifyCdn(hostname: string): Promise<boolean> {
  const res = await fetch(`https://${hostname}/`);
  const text = await res.text();
  return !text.includes("Domain suspended or not configured");
}

async function main() {
  if (!apiKey) {
    console.error(
      "Missing BUNNY_API_KEY. Add your Bunny account API key to .env (Dashboard → Account → API), then re-run."
    );
    console.error("\nManual setup:");
    console.error(`  1. Bunny dashboard → Storage → ${storageZoneName}`);
    console.error('  2. "Connected Pull Zones" → Add Pull Zone');
    console.error(`  3. Name it "${pullZoneName}" (hostname becomes ${pullZoneName}.b-cdn.net)`);
    console.error("  4. Set BUNNY_CDN_HOSTNAME to that hostname in .env");
    console.error("  5. Run: pnpm --filter @dooh/db normalize:bunny-urls");
    process.exit(1);
  }

  console.log(`Looking up storage zone "${storageZoneName}"…`);
  const storage = await findStorageZone();
  console.log(`Found storage zone id=${storage.Id}`);

  let pullZone = await findLinkedPullZone(storage.Id);
  if (pullZone) {
    console.log(`Pull zone already linked: ${pullZone.Name} (id=${pullZone.Id})`);
  } else {
    console.log(`Creating pull zone "${pullZoneName}" linked to storage…`);
    pullZone = await createPullZone(storage.Id);
    console.log(`Created pull zone id=${pullZone.Id}`);
  }

  const hostname =
    pullZone.Hostnames?.[0]?.Value ?? `${pullZone.Name}.b-cdn.net`;

  console.log(`\nCDN hostname: ${hostname}`);
  console.log(`Set in .env:\n  BUNNY_CDN_HOSTNAME="${hostname}"`);

  console.log("\nVerifying CDN (may take a few seconds)…");
  await new Promise((r) => setTimeout(r, 3000));

  const ok = await verifyCdn(hostname);
  if (ok) {
    console.log(`✓ CDN is active at https://${hostname}`);
    console.log("\nNext: pnpm --filter @dooh/db normalize:bunny-urls");
  } else {
    console.warn(
      `CDN hostname not ready yet. Wait 1–2 minutes, set BUNNY_CDN_HOSTNAME="${hostname}", restart API, then run normalize:bunny-urls`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
