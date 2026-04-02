import { Meta } from "../meta.types";
interface User {
  id: string;
  name: string;
  email: string;
  profile_image: string;
}

interface Event {
  title: string;
  capacity: number;
  fee: number;
  category: string;
}

export interface Participants {
  id: string;
  status: string;
  paymentStatus: string;
  paymentIntentId: string;
  userId: string;
  eventId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  event: Event;
}

export interface ParticipantsResponse {
  success: string;
  message: string;
  data: Participants[];
  meta: Meta;
}
