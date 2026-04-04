import z from "zod";

// Create Review validation schema
export const createReviewSchema = z.object({
  eventId: z.string("Invalid event ID"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z.string().min(10, "Comment must be at least 10 characters"),
});

export const reviewUpdateSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5")
    .optional(),
  comment: z
    .string()
    .min(5, "Comment must be at least 5 characters")
    .optional(),
});

// Type inference from schemas
export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type ReviewUpdateFormValues = z.infer<typeof reviewUpdateSchema>;
