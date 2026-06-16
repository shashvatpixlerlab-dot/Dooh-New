import { z } from "zod";

export const userRoleSchema = z.enum(["ADMIN", "SCREEN_OWNER", "ADVERTISER"]);

export const signupRoleSchema = z.enum(["SCREEN_OWNER", "ADVERTISER"]);

export const signupSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .min(10, "Phone must be at least 10 digits")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Invalid phone number"),
  password: z.string().min(8).max(128),
  role: signupRoleSchema,
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UserRole = z.infer<typeof userRoleSchema>;
