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

export const updateProfileSchema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100)
      .optional(),
    profile_image: z.string().url("Invalid URL").optional(),
    bio: z.string().max(500).optional(),
    currentPassword: z.string().optional().or(z.literal("")),

    newPassword: z
      .string()
      .optional()
      .or(z.literal(""))
      .refine((val) => val === "" || passwordRegex.test(val!), {
        message:
          "New password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number",
      }),
  })
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword !== "") {
        return data.currentPassword && data.currentPassword !== "";
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
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
