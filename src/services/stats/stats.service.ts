/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";

export const AdminStats = async () => {
  try {
    const response = await axiosActions.axiosGet("/stats/admin");
    return response;
  } catch (err: any) {
    console.error(
      "Failed to get admin stats",
      err.response?.data || err.message,
    );
    throw err;
  }
};

export const UserStats = async () => {
  try {
    const response = await axiosActions.axiosGet("/stats/user");
    return response;
  } catch (err: any) {
    console.error(
      "Failed to get user stats",
      err.response?.data || err.message,
    );
    throw err;
  }
};
