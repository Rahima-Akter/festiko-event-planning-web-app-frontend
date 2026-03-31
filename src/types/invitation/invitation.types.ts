/*
{
    "success": true,
    "message": "Invitations fetched",
    "data": [
        {
            "id": "cmne93lmc00004sg55xbihqtq",
            "status": "PENDING",
            "userId": "cmn1l2yv600006gg566il3aqa",
            "eventId": "cmndi8yyf0000dog5z7ob1wwd",
            "createdAt": "2026-03-31T06:43:34.836Z",
            "updatedAt": "2026-03-31T06:43:34.836Z",
            "event": {
                "title": "testing update",
                "fee": 83,
                "date": "2026-06-13T00:00:00.000Z",
                "venue": "Qui quidem officia d",
                "time": "22:06",
                "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDfOWjqzP62bs6M7l9OKLeZmBwBcOh7GOyOM_RwS1yOn8NfNXWYR7Wwaq3hKuggloepbAB8A_0wXxbIwbXc36fwHYXVOvn5PhyoCxKQC22E2SuLVSKuUUG7NlGaB78AkWY2RpmWXDmc6vzbMm5SdbRWTrUwGZ5aG9OP0_i1F7vpKzKR1C6yv6kfugFCJfj-ma8AV6aG_DHCOTRJfPRx4u68yUQS9etAHOYEZ_s5Vj4MhqAy49dJ-Mb2QGIAt6AkXwiR1ZmotA9TS3Xr",
                "organizer": {
                    "name": "user1",
                    "profile_image": "https://lh3.googleusercontent.com/aida-public/AB6AXuB63KKp8QhMJCEtRvPhkBK08O50H55rdEo_in8kqqWa4F6o4flpu_c4RkZc9v7YLRbskH7z75-e_8qLc0blmC1c3XxCykoLU5zJQncRxFPndBwDMIwgb31oTPd0iwe80Vr090j9PIg5e8nIQhn9tECe-m4hivrx8k9ni2nOCZ-0fXBQ-BaL3UfxgXNJSfe8sAp8I2RIbzmvOrSgttw3yaTRjdXKr4IXKUVL2QapwA_tA7aaRWhBbAuSHiZt9dzx7YN70HiJfvrTeySg"
                }
            }
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 1,
        "totalPages": 1
    }
}
*/

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

interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface InvitationResponse {
  success: boolean;
  message: string;
  data: Invitation[];
  meta: Meta;
}
