/*
{
    "success": true,
    "message": "Participations fetched",
    "data": [
        {
            "id": "cmnea722f00014sg5dte0xxac",
            "status": "APPROVED",
            "paymentStatus": "PAID",
            "paymentIntentId": "pi_3TGwVBFozkZOHBJw0yozVXjo",
            "userId": "cmn1l2yv600006gg566il3aqa",
            "eventId": "cmndi8yyf0000dog5z7ob1wwd",
            "createdAt": "2026-03-31T07:14:15.735Z",
            "updatedAt": "2026-03-31T15:28:21.384Z",
            "event": {
                "id": "cmndi8yyf0000dog5z7ob1wwd",
                "title": "testing update",
                "description": "testing update",
                "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDfOWjqzP62bs6M7l9OKLeZmBwBcOh7GOyOM_RwS1yOn8NfNXWYR7Wwaq3hKuggloepbAB8A_0wXxbIwbXc36fwHYXVOvn5PhyoCxKQC22E2SuLVSKuUUG7NlGaB78AkWY2RpmWXDmc6vzbMm5SdbRWTrUwGZ5aG9OP0_i1F7vpKzKR1C6yv6kfugFCJfj-ma8AV6aG_DHCOTRJfPRx4u68yUQS9etAHOYEZ_s5Vj4MhqAy49dJ-Mb2QGIAt6AkXwiR1ZmotA9TS3Xr",
                "capacity": 21,
                "date": "2026-06-13T00:00:00.000Z",
                "time": "22:06",
                "venue": "Qui quidem officia d",
                "isPublic": false,
                "fee": 83,
                "category": "FREE",
                "organizerId": "cmn1l2yv600006gg566il3aqa",
                "createdAt": "2026-03-30T18:11:55.766Z",
                "updatedAt": "2026-03-30T19:17:33.249Z"
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

interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

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
