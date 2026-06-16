import { CREATIVE_MAX_BYTES } from "@dooh/shared";

function validateImageFile(file: File) {
  if (file.size > CREATIVE_MAX_BYTES) {
    throw new Error("Each image must be under 5 MB");
  }
  if (!["image/jpeg", "image/png"].includes(file.type)) {
    throw new Error("Images must be JPG or PNG");
  }
}

/** Upload via API proxy → Bunny Storage (no browser CORS / no exposed AccessKey). */
export async function uploadOwnerImageToBunny(file: File): Promise<string> {
  validateImageFile(file);

  const form = new FormData();
  form.append("file", file);

  const res = await fetch("/api/owner/upload", {
    method: "POST",
    body: form,
  });
  const data = (await res.json().catch(() => ({}))) as {
    cdnUrl?: string;
    message?: string;
  };

  if (!res.ok) {
    throw new Error(data.message ?? "Image upload failed");
  }
  if (!data.cdnUrl) {
    throw new Error("Upload succeeded but no CDN URL was returned");
  }

  return data.cdnUrl;
}
