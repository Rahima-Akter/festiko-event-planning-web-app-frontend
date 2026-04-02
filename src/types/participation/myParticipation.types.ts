import { Meta } from "../meta.types";

interface ParticipationEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  capacity: number;
  date: string;
  time: string;
  venue: string;
  isPublic: boolean;
  fee: number;
  category: string;
  organizerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyParticipation {
  id: string;
  status: string;
  paymentStatus: string;
  paymentIntentId: string;
  userId: string;
  eventId: string;
  createdAt: string;
  updatedAt: string;
  event: ParticipationEvent;
}

export interface MyParticipationResponse {
  success: boolean;
  message: string;
  data: MyParticipation[];
  meta: Meta;
}
