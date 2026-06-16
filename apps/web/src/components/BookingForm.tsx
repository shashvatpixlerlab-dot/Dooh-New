"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import type { AdvertiserCheckoutProfile } from "@/lib/advertiser-checkout";
import type { MarketplaceDevice } from "@/lib/types";
import {
  CREATIVE_ASPECT_RATIO,
  CREATIVE_HEIGHT,
  CREATIVE_MAX_BYTES,
  CREATIVE_WIDTH,
} from "@dooh/shared";

type BookingFormProps = {
  device: MarketplaceDevice;
  advertiser?: AdvertiserCheckoutProfile | null;
};

export function BookingForm({ device, advertiser }: BookingFormProps) {
  const router = useRouter();
  const isAuthenticated = Boolean(advertiser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const file = form.get("creative") as File;
    const dateStart = form.get("dateStart") as string;
    const dateEnd = form.get("dateEnd") as string;

    try {
      if (file.size > CREATIVE_MAX_BYTES) {
        throw new Error("Image must be under 5 MB");
      }
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        throw new Error("Image must be JPG or PNG");
      }

      const dims = await readImageDimensions(file);
      const ratio = dims.width / dims.height;
      if (Math.abs(ratio - CREATIVE_ASPECT_RATIO) > 0.02) {
        throw new Error(
          `Image must be 16:9 (${CREATIVE_WIDTH}×${CREATIVE_HEIGHT})`
        );
      }

      const presign = await api<{
        uploadUrl: string;
        cdnUrl: string;
        headers: Record<string, string>;
      }>("/creatives/presign", {
        method: "POST",
        body: JSON.stringify({ filename: file.name }),
      });

      const uploadRes = await fetch(presign.uploadUrl, {
        method: "PUT",
        headers: presign.headers,
        body: file,
      });
      if (!uploadRes.ok) {
        throw new Error("Creative upload failed");
      }

      const holdBody: Record<string, string> = {
        deviceId: device.id,
        dateStart,
        dateEnd,
      };

      if (isAuthenticated && advertiser) {
        holdBody.advertiserName = advertiser.name;
        holdBody.advertiserPhone = advertiser.phone;
      } else {
        holdBody.advertiserEmail = form.get("email") as string;
        holdBody.advertiserName = form.get("name") as string;
        holdBody.advertiserPhone = form.get("phone") as string;
      }

      const holdRes = await fetch("/api/bookings/hold", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(holdBody),
      });
      if (!holdRes.ok) {
        const err = await holdRes.json().catch(() => ({}));
        const msg = err.message;
        throw new Error(
          Array.isArray(msg) ? msg.join(", ") : (msg ?? "Hold failed")
        );
      }
      const hold = (await holdRes.json()) as {
        bookingId: string;
        slotIndex: number;
        priceTotal: number;
        razorpayOrderId: string;
        razorpayKeyId?: string;
      };

      await api(`/creatives/${hold.bookingId}/attach`, {
        method: "POST",
        body: JSON.stringify({
          imageUrl: presign.cdnUrl,
          width: dims.width,
          height: dims.height,
          fileSizeBytes: file.size,
          mimeType: file.type,
        }),
      });

      if (hold.razorpayKeyId && typeof window !== "undefined") {
        const Razorpay = (
          window as unknown as {
            Razorpay: new (o: unknown) => { open: () => void };
          }
        ).Razorpay;
        if (Razorpay) {
          const rzp = new Razorpay({
            key: hold.razorpayKeyId,
            amount: hold.priceTotal * 100,
            currency: "INR",
            order_id: hold.razorpayOrderId,
            handler: async () => {
              router.push(
                isAuthenticated
                  ? `/advertiser/bookings/${hold.bookingId}`
                  : `/bookings/${hold.bookingId}`
              );
            },
          });
          rzp.open();
          return;
        }
      }

      await api("/payments/simulate-capture", {
        method: "POST",
        body: JSON.stringify({ bookingId: hold.bookingId }),
      });

      router.push(
        isAuthenticated
          ? `/advertiser/bookings/${hold.bookingId}`
          : `/bookings/${hold.bookingId}`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Booking failed");
    } finally {
      setLoading(false);
    }
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (preview) URL.revokeObjectURL(preview);
    setPreview(file ? URL.createObjectURL(file) : null);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Book a slot</h2>

      {isAuthenticated && advertiser ? (
        <p className="muted small" style={{ marginBottom: "1rem" }}>
          Booking as <strong>{advertiser.name}</strong> ({advertiser.email}).
          This booking will appear in your{" "}
          <Link href="/advertiser">advertiser dashboard</Link>.
        </p>
      ) : (
        <p className="muted small" style={{ marginBottom: "1rem" }}>
          No account? You can checkout as a guest.{" "}
          <Link href="/signup">Create an account</Link> to track bookings, or{" "}
          <Link href="/login">log in</Link> if you already have one.
        </p>
      )}

      <label>Start date</label>
      <input type="date" name="dateStart" required />

      <label>End date</label>
      <input type="date" name="dateEnd" required />

      {!isAuthenticated && (
        <>
          <label>Your name</label>
          <input name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Phone</label>
          <input name="phone" required />
        </>
      )}

      <label>
        Creative ({CREATIVE_WIDTH}×{CREATIVE_HEIGHT} JPG/PNG, max 5 MB)
      </label>
      <input
        type="file"
        name="creative"
        accept="image/jpeg,image/png"
        required
        onChange={onFileChange}
      />
      <p className="muted small">
        By uploading, you agree to our{" "}
        <Link href="/content-policy" target="_blank">
          content policy
        </Link>
        . Ads must be legal, non-explicit, and not misleading.
      </p>
      {preview && (
        <div className="creative-preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="Creative preview" />
        </div>
      )}

      {error && <p className="form-error">{error}</p>}

      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Processing…" : "Upload & Pay"}
      </button>
    </form>
  );
}

function readImageDimensions(
  file: File
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = () => reject(new Error("Invalid image"));
    img.src = URL.createObjectURL(file);
  });
}
