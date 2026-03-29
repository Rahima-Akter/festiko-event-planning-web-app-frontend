/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";
import { LoginPayLoad, RegisterPayLoad } from "@/types/auth/auth.types";

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

export const loginUser = async (payLoad: LoginPayLoad) => {
  try {
    const response = await axiosActions.axiosPost("/auth/login", {
      data: payLoad,
    });
    return response;
  } catch (err: any) {
    console.error("Failed to login user", err.response?.data || err.message);
    throw err;
  }
};
