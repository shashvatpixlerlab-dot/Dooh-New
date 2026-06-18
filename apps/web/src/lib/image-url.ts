const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://localhost:3001";

const BUNNY_CDN_HOST =
  process.env.NEXT_PUBLIC_BUNNY_CDN_HOSTNAME?.replace(/^https?:\/\//, "").replace(/\/$/, "") ??
  "";

const CREATIVE_FILE_PREFIX = "/api/creatives/file/";

/** Resolve stored image URLs for display (CDN direct, or API proxy for legacy local URLs). */
export function resolveImageUrl(url: string): string {
  if (!url) return url;

  try {
    const parsed = new URL(url);

    if (parsed.pathname.startsWith(CREATIVE_FILE_PREFIX)) {
      if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
        return `${API_BASE}${parsed.pathname}`;
      }
      return url;
    }

    if (parsed.hostname.endsWith(".b-cdn.net")) {
      return url;
    }

    if (BUNNY_CDN_HOST && parsed.hostname === BUNNY_CDN_HOST) {
      return url;
    }
  } catch {
    return url;
  }

  return url;
}

/** Build canonical Bunny CDN URL for a storage path. */
export function bunnyCdnUrlForPath(path: string): string {
  if (!BUNNY_CDN_HOST) {
    throw new Error("NEXT_PUBLIC_BUNNY_CDN_HOSTNAME is not configured");
  }
  return `https://${BUNNY_CDN_HOST}/${path.replace(/^\//, "")}`;
}
