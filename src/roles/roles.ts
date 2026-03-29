export const UserRoles = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles];