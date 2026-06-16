import { z } from "zod";

export const deviceLoginRequestSchema = z.object({
  credential: z.string().min(1),
});

export const deviceLoginResponseSchema = z.object({
  device_token: z.string(),
  device_id: z.string().uuid(),
  config: z.object({
    loop_seconds: z.number(),
    slot_count: z.number(),
    heartbeat_seconds: z.number(),
  }),
});

export const schedulePositionSchema = z.object({
  slot_index: z.number().int().min(1).max(6),
  type: z.enum(["booked", "default"]),
  image_url: z.string().url(),
  booking_id: z.string().uuid().optional(),
});

export const deviceScheduleResponseSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  default_image_url: z.string().url(),
  positions: z.array(schedulePositionSchema).length(6),
});

export const deviceHeartbeatRequestSchema = z.object({
  device_id: z.string().uuid(),
  currently_showing_slot: z.number().int().min(1).max(6),
  currently_showing_image: z.string(),
  app_version: z.string(),
  timestamp: z.string().datetime(),
});

export type DeviceLoginRequest = z.infer<typeof deviceLoginRequestSchema>;
export type DeviceLoginResponse = z.infer<typeof deviceLoginResponseSchema>;
export type DeviceScheduleResponse = z.infer<typeof deviceScheduleResponseSchema>;
export type DeviceHeartbeatRequest = z.infer<typeof deviceHeartbeatRequestSchema>;

export const SCHEDULE_FIXTURE: DeviceScheduleResponse = {
  date: "2026-06-15",
  default_image_url: "https://cdn.example.com/venue-default.jpg",
  positions: [
    { slot_index: 1, type: "booked", image_url: "https://cdn.example.com/ad-aaa.jpg", booking_id: "00000000-0000-4000-8000-000000000001" },
    { slot_index: 2, type: "default", image_url: "https://cdn.example.com/venue-default.jpg" },
    { slot_index: 3, type: "booked", image_url: "https://cdn.example.com/ad-bbb.jpg", booking_id: "00000000-0000-4000-8000-000000000002" },
    { slot_index: 4, type: "default", image_url: "https://cdn.example.com/venue-default.jpg" },
    { slot_index: 5, type: "default", image_url: "https://cdn.example.com/venue-default.jpg" },
    { slot_index: 6, type: "default", image_url: "https://cdn.example.com/venue-default.jpg" },
  ],
};
