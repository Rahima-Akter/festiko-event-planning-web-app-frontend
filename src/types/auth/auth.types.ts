export type RegisterPayLoad = {
  name: string;
  email: string;
  password: string;
};

export type LoginPayLoad = {
  email: string;
  password: string;
};

export type UpdateProfilePayLoad = {
  name?: string;
  profile_image?: string;
  bio?: string;
  currentPassword?: string;
  newPassword?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  profile_image: string;
  bio: string;
  createdAt: string;
};