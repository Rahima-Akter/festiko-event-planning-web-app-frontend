/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";
import { RegisterPayLoad } from "@/types/auth/register.types";

export const registerUser = async (payLoad: RegisterPayLoad) => {
  try {
    const response = await axiosActions.axiosPost("/auth/register", {
      data: payLoad,
    });
    return response;
  } catch (err: any) {
    console.error("Failed to register user", err.response?.data || err.message);
    throw err;
  }
};
