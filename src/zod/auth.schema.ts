import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name cannot exceed 100 characters"),

    email: z
      .string()
      .email("Invalid email address")
      .max(150, "Email cannot exceed 150 characters"),

    profile_image: z.string().url("Invalid profile image URL"),
    bio: z.string().max(500, "Bio cannot exceed 500 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        passwordRegex,
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number",
      ),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updateProfileSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name cannot exceed 100 characters")
      .optional(),

    profile_image: z.string().url("Invalid profile image URL").optional(),
    bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),

    currentPassword: z
      .string()
      .min(1, "Current password is required when changing password")
      .optional(),

    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters")
      .regex(
        passwordRegex,
        "New password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number",
      )
      .optional(),
  })
  .refine(
    (data) => {
      // If newPassword is provided, currentPassword must also be provided
      if (data.newPassword && !data.currentPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Current password is required when setting a new password",
      path: ["currentPassword"],
    },
  );


export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
export type UpdateProfileInputValues = z.infer<typeof updateProfileSchema>;