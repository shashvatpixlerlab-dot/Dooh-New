import { eachDayOfInterval, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { TIMEZONE } from "@dooh/shared";

export function todayInTz(date = new Date()): string {
  return format(toZonedTime(date, TIMEZONE), "yyyy-MM-dd");
}

export function parseDateOnly(dateStr: string): Date {
  return new Date(`${dateStr}T00:00:00.000Z`);
}

export function eachPlayDate(start: Date, end: Date): Date[] {
  return eachDayOfInterval({ start, end });
}

export function daysBetweenInclusive(start: Date, end: Date): number {
  return eachPlayDate(start, end).length;
}
