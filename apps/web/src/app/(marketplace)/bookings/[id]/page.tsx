import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { api } from "@/lib/api";
import { getAdvertiserCheckoutProfile } from "@/lib/advertiser-checkout";
import { resolveImageUrl } from "@/lib/image-url";
import { formatDateOnly } from "@/lib/marketplace-utils";
import type { BookingDetail } from "@/lib/types";

const STATUS_LABELS: Record<string, { label: string; className: string }> = {
  PENDING_APPROVAL: { label: "Pending approval", className: "status-pending" },
  APPROVED: { label: "Approved — live on screen", className: "status-approved" },
  REJECTED: { label: "Rejected", className: "status-rejected" },
  REFUNDED: { label: "Refunded", className: "status-refunded" },
  COMPLETED: { label: "Completed", className: "status-completed" },
  AWAITING_PAYMENT: { label: "Awaiting payment", className: "status-pending" },
  HELD: { label: "Hold active", className: "status-pending" },
};

export default async function BookingStatusPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let booking: BookingDetail;
  try {
    booking = await api<BookingDetail>(`/bookings/${id}`);
  } catch {
    notFound();
  }

  const advertiser = await getAdvertiserCheckoutProfile();
  if (advertiser && booking.advertiser.email === advertiser.email) {
    redirect(`/advertiser/bookings/${id}`);
  }

  const showGuestSignupCta = !advertiser && booking.status !== "AWAITING_PAYMENT";

  const status = STATUS_LABELS[booking.status] ?? {
    label: booking.status,
    className: "",
  };

  return (
    <div className="booking-status">
      <Link href="/" className="back-link">
        ← Back to screens
      </Link>

      <div className="card">
        <h1>Booking confirmation</h1>
        <p className="booking-id">Ref: {booking.id}</p>

        <div className={`status-banner ${status.className}`}>
          {status.label}
        </div>

        <dl className="booking-details">
          <div>
            <dt>Screen</dt>
            <dd>{booking.device.name}</dd>
          </div>
          <div>
            <dt>Slot</dt>
            <dd>
              Position {booking.slotIndex}{" "}
              <span className="muted">(auto-assigned)</span>
            </dd>
          </div>
          <div>
            <dt>Dates</dt>
            <dd>
              {formatDateOnly(booking.dateStart)} →{" "}
              {formatDateOnly(booking.dateEnd)}
            </dd>
          </div>
          <div>
            <dt>Total paid</dt>
            <dd>₹{booking.priceTotal}</dd>
          </div>
          <div>
            <dt>Advertiser</dt>
            <dd>
              {booking.advertiser.name} ({booking.advertiser.email})
            </dd>
          </div>
        </dl>

        {booking.creative?.rejectionReason && (
          <div className="rejection-box">
            <strong>Rejection reason</strong>
            <p>{booking.creative.rejectionReason}</p>
          </div>
        )}

        {booking.status === "PENDING_APPROVAL" && (
          <p className="muted small">
            Your creative is queued for admin review. You will be notified once
            approved or rejected.
          </p>
        )}

        {showGuestSignupCta && (
          <div className="card" style={{ marginTop: "1rem", padding: "1rem" }}>
            <p style={{ margin: 0 }}>
              Track this booking and future campaigns —{" "}
              <Link
                href={`/signup?email=${encodeURIComponent(booking.advertiser.email)}`}
              >
                create an account
              </Link>{" "}
              with {booking.advertiser.email}, or{" "}
              <Link href="/login">log in</Link> if you already have one.
            </p>
          </div>
        )}

        {booking.creative?.imageUrl && (
          <div className="creative-preview" style={{ marginTop: "1rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={resolveImageUrl(booking.creative.imageUrl)} alt="Uploaded creative" />
          </div>
        )}
      </div>
    </div>
  );
}
