import { cookies } from "next/headers";
import {
  AdminBookingsTabs,
  ApprovedBookingsTable,
  PendingBookingsTable,
  RefundBookingsTable,
  type AdminBookingRow,
} from "@/components/admin/AdminBookingsTable";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { adminApi } from "@/lib/admin-api";
import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin-auth";

async function loadBookings(status: string): Promise<AdminBookingRow[]> {
  try {
    return await adminApi<AdminBookingRow[]>(`/admin/bookings?status=${status}`);
  } catch {
    return [];
  }
}

export default async function AdminBookingsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const activeTab =
    tab === "refunds" ? "refunds" : tab === "approved" ? "approved" : "pending";

  const cookieStore = await cookies();
  const session = await verifyAdminToken(cookieStore.get(ADMIN_COOKIE)?.value);
  const adminEmail = session?.email ?? "";

  const [pendingBookings, approvedBookings, rejectedBookings, cancelledBookings] =
    await Promise.all([
      loadBookings("PENDING_APPROVAL"),
      loadBookings("APPROVED"),
      loadBookings("REJECTED"),
      loadBookings("CANCELLED"),
    ]);

  const refundBookings = [...rejectedBookings, ...cancelledBookings].sort(
    (a, b) => b.id.localeCompare(a.id)
  );

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Booking queue"
        description={
          activeTab === "pending"
            ? "Review paid bookings and approve or reject creatives."
            : activeTab === "approved"
              ? "Cancel approved bookings that should no longer run. Refund in Razorpay after cancelling."
              : "Process refunds in Razorpay, then mark bookings as refunded here."
        }
      />

      <AdminBookingsTabs
        tab={activeTab}
        pendingCount={pendingBookings.length}
        approvedCount={approvedBookings.length}
        refundCount={refundBookings.length}
      />

      {activeTab === "pending" ? (
        <PendingBookingsTable bookings={pendingBookings} adminEmail={adminEmail} />
      ) : activeTab === "approved" ? (
        <ApprovedBookingsTable bookings={approvedBookings} adminEmail={adminEmail} />
      ) : (
        <RefundBookingsTable bookings={refundBookings} adminEmail={adminEmail} />
      )}
    </div>
  );
}
