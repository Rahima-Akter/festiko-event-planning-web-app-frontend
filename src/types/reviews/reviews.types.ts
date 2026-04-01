interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ReviewEvent {
  title: string;
  venue: string;
  date: string;
  category: string;
  fee: number;
  isPublic: boolean;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  eventId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
    email: string;
  };
  event: ReviewEvent;
}

export interface ReviewResponse {
  success: boolean;
  message: string;
  data: Review[];
  meta: Meta;
}

export interface CreateReviewPayload {
  rating: number;
  comment: string;
  eventId: string;
}