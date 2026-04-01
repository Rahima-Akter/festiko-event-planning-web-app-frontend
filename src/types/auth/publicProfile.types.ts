interface Reviews {
  rating: number;
  comment: string;
  user: {
    profile_image: string;
    name: string;
  };
}

interface PublicProfileEvents {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  createdAt: string;
  reviews: {
    rating: number;
  };
}

export interface PublicProfile {
  name: string;
  bio: string;
  createdAt: string;
  reviews: Reviews[];
  events: PublicProfileEvents[];
  eventCount: number;
  averageRating: number;
}
