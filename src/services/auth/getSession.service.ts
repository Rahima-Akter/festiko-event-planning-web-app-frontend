"use server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
export const getUserSession = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("festiko_token")?.value;
    if (!token) return null;
    const decoded = verify(token,  process.env.JWT_SECRET!) as {
      userId: string;
      email: string;
      role: string;
    };
    return decoded;
  } catch (err) {
    console.error("Failed to get session:", err);
    return null;
  }
};