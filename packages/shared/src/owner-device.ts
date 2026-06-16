import { z } from "zod";

export const deviceOrientationSchema = z.enum(["landscape", "portrait"]);

/** Matches NestJS IsUrl({ require_tld: false }) for local dev uploads. */
const imageUrlSchema = z
  .string()
  .min(1, "Image URL is required")
  .refine((value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }, "Invalid image URL");

export const createScreenSchema = z.object({
  name: z.string().trim().min(1, "Screen name is required").max(120),
  locationLabel: z.string().trim().min(1, "Location is required").max(200),
  resolution: z.string().regex(/^\d{3,5}x\d{3,5}$/, "Use format e.g. 1920x1080"),
  orientation: deviceOrientationSchema,
  slotDayPrice: z
    .number({ invalid_type_error: "Enter a valid price" })
    .min(0, "Price cannot be negative"),
  imageUrls: z.array(imageUrlSchema).min(3, "At least 3 images are required"),
});

export const updateScreenSchema = z.object({
  name: z.string().trim().min(1).max(120).optional(),
  locationLabel: z.string().trim().min(1).max(200).optional(),
  resolution: z
    .string()
    .regex(/^\d{3,5}x\d{3,5}$/, "Use format e.g. 1920x1080")
    .optional(),
  orientation: deviceOrientationSchema.optional(),
  slotDayPrice: z
    .number({ invalid_type_error: "Enter a valid price" })
    .min(0, "Price cannot be negative")
    .optional(),
  imageUrls: z.array(imageUrlSchema).min(3, "At least 3 images are required").optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
});

export type CreateScreenInput = z.infer<typeof createScreenSchema>;
export type UpdateScreenInput = z.infer<typeof updateScreenSchema>;
