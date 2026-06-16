import Image from "next/image";
import { notFound } from "next/navigation";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { BookingForm } from "@/components/BookingForm";
import { api } from "@/lib/api";
import { getAdvertiserCheckoutProfile } from "@/lib/advertiser-checkout";
import { resolveImageUrl } from "@/lib/image-url";
import type { MarketplaceDevice } from "@/lib/types";

export default async function DevicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let device: MarketplaceDevice | null = null;
  try {
    device = await api<MarketplaceDevice | null>(`/marketplace/devices/${id}`);
  } catch {
    notFound();
  }

  if (!device) {
    notFound();
  }

  const advertiser = await getAdvertiserCheckoutProfile();

  return (
    <div className="device-detail">
      <div className="device-detail-hero">
        <div className="device-detail-image">
          <Image
            src={resolveImageUrl(device.defaultImageUrl)}
            alt={`${device.venueName} default screen`}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div>
          <h1>{device.name}</h1>
          <p className="muted">{device.venueName}</p>
          <p className="muted">{device.locationLabel}</p>
          <div className="device-meta">
            <span
              className={`badge ${device.isOnline ? "badge-online" : "badge-offline"}`}
            >
              {device.isOnline ? "Online" : "Offline"}
            </span>
            <span className="meta-chip">{device.resolution}</span>
            <span className="meta-chip">{device.orientation}</span>
          </div>
          <p className="price">₹{device.slotDayPrice}/day per slot</p>
          <p className="muted small">
            Slot position (1–6) is assigned automatically at checkout. One slot per
            booking.
          </p>
        </div>
      </div>

      <div className="card" style={{ marginTop: "1.5rem" }}>
        <AvailabilityChecker device={device} />
      </div>

      {device.isOnline ? (
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <BookingForm device={device} advertiser={advertiser} />
        </div>
      ) : (
        <p className="offline-notice">
          This screen is offline and cannot be booked until it comes back online.
        </p>
      )}
    </div>
  );
}
