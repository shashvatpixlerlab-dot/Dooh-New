"use server";

import { revalidatePath } from "next/cache";
import { adminApi } from "@/lib/admin-api";

export async function createVenueAction(data: {
  name: string;
  contactEmail: string;
  contactPhone: string;
  revenueModel: "percentage" | "flat";
  revenueValue: number;
  defaultImageUrl: string;
}) {
  const venue = await adminApi<{ id: string }>("/admin/venues", {
    method: "POST",
    body: JSON.stringify(data),
  });
  revalidatePath("/admin/venues");
  return venue;
}

export async function createDeviceAction(data: {
  venueId: string;
  name: string;
  locationLabel: string;
  resolution: string;
  orientation: "landscape" | "portrait";
  slotDayPrice: number;
}) {
  const result = await adminApi<{ device: { id: string }; credential: string }>(
    "/admin/devices",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  revalidatePath("/admin/venues");
  return result;
}
  
export async function updateVenueAction(
  venueId: string,
  data: {
    name: string;
    contactEmail: string;
    contactPhone: string;
    revenueModel: "percentage" | "flat";
    revenueValue: number;
    defaultImageUrl: string;
    status: "ACTIVE" | "INACTIVE";
  }
) {
  await adminApi(`/admin/venues/${venueId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  revalidatePath("/admin/venues");
}

export async function updateDeviceAction(
  deviceId: string,
  data: {
    name: string;
    locationLabel: string;
    resolution: string;
    orientation: "landscape" | "portrait";
    defaultImageUrl: string;
    slotDayPrice: number;
    status: "ACTIVE" | "INACTIVE";
  }
) {
  await adminApi(`/admin/devices/${deviceId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  revalidatePath("/admin/venues");
}

export async function approveBookingAction(bookingId: string, adminEmail: string) {
  await adminApi(`/admin/bookings/${bookingId}/approve`, {
    method: "POST",
    body: JSON.stringify({ adminEmail }),
  });
  revalidatePath("/admin/bookings");
}

export async function approveScreenAction(screenId: string) {
  await adminApi(`/admin/screens/${screenId}/approve`, { method: "POST" });
  revalidatePath("/admin/screens");
  revalidatePath("/owner/screens");
}

export async function rejectScreenAction(screenId: string, rejectionReason: string) {
  await adminApi(`/admin/screens/${screenId}/reject`, {
    method: "POST",
    body: JSON.stringify({ rejectionReason }),
  });
  revalidatePath("/admin/screens");
  revalidatePath("/owner/screens");
}

export async function rejectBookingAction(
  bookingId: string,
  adminEmail: string,
  rejectionReason: string
) {
  await adminApi(`/admin/bookings/${bookingId}/reject`, {
    method: "POST",
    body: JSON.stringify({ adminEmail, rejectionReason }),
  });
  revalidatePath("/admin/bookings");
}

export async function markRefundedAction(bookingId: string, adminEmail: string) {
  await adminApi(`/admin/bookings/${bookingId}/refund`, {
    method: "POST",
    body: JSON.stringify({ adminEmail }),
  });
  revalidatePath("/admin/bookings");
}

export async function cancelBookingAction(bookingId: string, adminEmail: string) {
  await adminApi(`/admin/bookings/${bookingId}/cancel`, {
    method: "POST",
    body: JSON.stringify({ adminEmail }),
  });
  revalidatePath("/admin/bookings");
  revalidatePath("/admin");
}
