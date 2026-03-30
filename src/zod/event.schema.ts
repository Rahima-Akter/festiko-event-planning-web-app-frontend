import { z } from "zod";

export const createEventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  description: z
    .string()
    .min(
      10,
      "Description is REQUIRED! and Description must be at least 10 characters",
    ),
  image: z.string().url("Image must be a valid URL"),
  capacity: z.number().min(10, "Capacity must be at least 10"),

  date: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
  time: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format"),
  category: z.enum(["PUBLIC", "PRIVATE", "FREE", "PAID"]),
  venue: z.string().min(3, "Venue is required"),
  isPublic: z.boolean({
    error: "Privacy level is required",
  }),
  fee: z
    .number({ error: "Fee must be a number" })
    .min(0, "Fee cannot be negative")
    .or(z.nan())
    .transform((val) => (isNaN(val) ? 0 : val)),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
