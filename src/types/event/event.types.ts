import { Meta } from "../meta.types";

export type EventCategories = "PUBLIC" | "PRIVATE" | "FREE" | "PAID";

export type CreateEventPayLoad = {
  title: string;
  description: string;
  image: string;
  capacity: number;
  date: string;
  time: string;
  venue: string;
  isPublic: boolean;
  fee: number;
  category: EventCategories;
};

type Review = {
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    name: string;
    profile_image: string;
  };
};

export type Event = {
  id: string;
  capacity: number;
  category: EventCategories;
  createdAt: string;
  date: string;
  description: string;
  fee: number;
  image: string;
  isPublic: boolean;
  organizerId: string;
  time: string;
  title: string;
  updatedAt: string;
  venue: string;
  organizer: {
    id: string;
    name: string;
    profile_image: string;
    email: string;
    bio: string;
    createdAt: string;
  };
  reviews: Review[];
};

export type EventResponse = {
  success: boolean;
  message: string;
  data: Event[];
  meta: Meta;
};

export interface UpdateEventInput {
  title?: string;
  description?: string;
  image?: string;
  capacity?: number;
  date?: Date;
  time?: string;
  venue?: string;
  isPublic?: boolean;
  fee?: number;
  category?: EventCategories;
}
