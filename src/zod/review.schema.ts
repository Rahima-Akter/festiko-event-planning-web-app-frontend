import z from "zod";

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

export type ReviewUpdateFormValues = z.infer<typeof reviewUpdateSchema>;
