import { MAX_BOOKING_DAYS, TIMEZONE } from "@dooh/shared";
import type { MarketplaceDevice } from "./types";

export function deriveCity(locationLabel: string): string {
  const parts = locationLabel.split(",").map((s) => s.trim());
  return parts.length > 1 ? parts[parts.length - 1] : parts[0];
}

export function getCitiesFromDevices(devices: MarketplaceDevice[]): string[] {
  return [...new Set(devices.map((d) => deriveCity(d.locationLabel)))].sort();
}

export function countDays(start: string, end: string): number {
  const s = new Date(start);
  const e = new Date(end);
  if (e < s) return 0;
  return Math.floor((e.getTime() - s.getTime()) / 86400000) + 1;
}

export function calcPrice(
  slotDayPrice: number,
  start: string,
  end: string
): number {
  return slotDayPrice * countDays(start, end);
}

export function formatDateOnly(value: string | Date): string {
  if (typeof value === "string") return value.slice(0, 10);
  return value.toISOString().slice(0, 10);
}

/** Today as yyyy-MM-dd in the app timezone (matches API booking dates). */
export function todayInAppTz(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE }).format(date);
}

/** Approved booking is live when today falls within [dateStart, dateEnd] inclusive. */
export function isBookingLiveToday(
  dateStart: string | undefined,
  dateEnd: string | undefined,
  today = todayInAppTz()
): boolean {
  if (!dateStart || !dateEnd) return false;
  const start = formatDateOnly(dateStart);
  const end = formatDateOnly(dateEnd);
  return start <= today && today <= end;
}

/** Latest allowed end date (inclusive) for a booking starting on `start`. */
export function maxBookingEndDate(start: string): string {
  const s = parseDateOnly(start);
  s.setUTCDate(s.getUTCDate() + MAX_BOOKING_DAYS - 1);
  return s.toISOString().slice(0, 10);
}

function parseDateOnly(dateStr: string): Date {
  return new Date(`${dateStr}T00:00:00.000Z`);
}
