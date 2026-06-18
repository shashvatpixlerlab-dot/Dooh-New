import Image from "next/image";
import { notFound } from "next/navigation";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { BookingForm } from "@/components/BookingForm";
import { DeviceStatusBadge } from "@/components/marketplace/DeviceStatusBadge";
import { api } from "@/lib/api";
import { getAdvertiserCheckoutProfile } from "@/lib/advertiser-checkout";
import { resolveImageUrl } from "@/lib/image-url";
import type { MarketplaceDevice } from "@/lib/types";

function hasDeviceDetails(device: MarketplaceDevice) {
  return Boolean(
    device.name?.trim() &&
      device.venueName?.trim() &&
      device.locationLabel?.trim()
  );
}

export default async function DevicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let device: MarketplaceDevice | null = null;
  let loadError: string | null = null;

  try {
    device = await api<MarketplaceDevice | null>(`/marketplace/devices/${id}`);
  } catch (err) {
    loadError =
      err instanceof Error ? err.message : "Unable to load this screen right now.";
  }

  if (!device && !loadError) {
    notFound();
  }

  const advertiser = device ? await getAdvertiserCheckoutProfile() : null;

  if (loadError || !device) {
    return (
      <div className="device-detail">
        <div className="card">
          <h1>Screen unavailable</h1>
          <p className="muted">
            {loadError ?? "This screen could not be found or is no longer bookable."}
          </p>
        </div>
      </div>
    );
  }

  const detailsIncomplete = !hasDeviceDetails(device);

  return (
    <div className="device-detail">
      <div className="device-detail-hero">
        <div className="device-detail-image">
          <Image
            src={resolveImageUrl(device.defaultImageUrl)}
            alt={`${device.venueName || device.name} default screen`}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover"
            priority
          />
        </div>
        <div className="device-detail-content">
          <h1>{device.name}</h1>
          <p className="muted">{device.venueName}</p>
          <p className="muted">{device.locationLabel}</p>
          {detailsIncomplete ? (
            <p className="form-error" style={{ marginTop: "0.75rem" }}>
              Some screen details are missing. Refresh the page or pick another
              screen from the marketplace.
            </p>
          ) : null}
          <div className="device-meta">
            <DeviceStatusBadge
              isOnline={device.isOnline}
              isLive={device.isLive}
            />
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
          This screen is offline and cannot be booked until the device reconnects
          and starts reporting heartbeats again.
        </p>
      )}
    </div>
  );
}
