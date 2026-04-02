import { Meta } from "../meta.types";

interface InvitationEvent {
  title: string;
  fee: number;
  date: string;
  venue: string;
  time: string;
  image: string;
  category: string;
  organizer: {
    name: string;
    profile_image: string;
  };
}

export interface Invitation {
  id: string;
  status: string;
  userId: string;
  eventId: string;
  createdAt: string;
  updatedAt: string;
  event: InvitationEvent;
}

export interface InvitationResponse {
  success: boolean;
  message: string;
  data: Invitation[];
  meta: Meta;
}
