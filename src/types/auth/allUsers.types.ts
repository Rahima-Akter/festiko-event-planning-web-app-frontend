import { Meta } from "../meta.types";
import { User } from "./auth.types";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   profile_image: string;
//   bio: string;
//   createdAt: string;
// }

export interface AllUsersResponse {
  success: boolean;
  message: string;
  data: User[];
  meta: Meta;
}
