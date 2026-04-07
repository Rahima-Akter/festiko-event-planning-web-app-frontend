/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";
import {
  LoginPayLoad,
  RegisterPayLoad,
  UpdateProfilePayLoad,
} from "@/types/auth/auth.types";
import { se } from "date-fns/locale";

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

export const logoutUser = async () => {
  try {
    const response = await axiosActions.axiosPost("/auth/logout");
    return response;
  } catch (err: any) {
    console.error("Failed to logout user", err.response?.data || err.message);
    throw err;
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosActions.axiosGet("/auth/profile");
    return response;
  } catch (err: any) {
    console.error("Failed to get profile", err.response?.data || err.message);
    throw err;
  }
};

export const updateProfile = async (payLoad: UpdateProfilePayLoad) => {
  try {
    const response = await axiosActions.axiosPatch("/auth/profile", {
      data: payLoad,
    });
    return response;
  } catch (err: any) {
    console.error(
      "Failed to update profile",
      err.response?.data || err.message,
    );
    throw err;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axiosActions.axiosGet(`/auth/singleUser/${id}`);
    return response;
  } catch (err: any) {
    console.error(
      "Failed to get user by id",
      err.response?.data || err.message,
    );
    throw err;
  }
};

export const getAllUsers = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  searchFields?: string[];
  enumFields?: string[];
  role?: string;
}) => {
  try {
    const response = await axiosActions.axiosGet("/auth/users", {
      params: {
        page: params?.page,
        limit: params?.limit,
        search: params?.search,
        searchFields: params?.searchFields,
        enumFields: params?.enumFields,
        role: params?.role,
      },
    });
    return response;
  } catch (err: any) {
    console.error("Failed to get all users", err.response?.data || err.message);
    throw err;
  }
};

export const permanentlyDeleteUser = async (targetUserId: string) => {
  try {
    const response = await axiosActions.axiosDelete(`/auth/delete/account`, {
      data: { targetUserId },
    });
    return response;
  } catch (err: any) {
    console.error("Failed to delete user", err.response?.data || err.message);
    throw err;
  }
};

export const getAllSoftDeletedUsers = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  searchFields?: string[];
  enumFields?: string[];
  role?: string;
}) => {
  try {
    const response = await axiosActions.axiosGet("/auth/users/soft-deleted", {
      params: {
        page: params?.page,
        limit: params?.limit,
        search: params?.search,
        searchFields: params?.searchFields,
        enumFields: params?.enumFields,
        role: params?.role,
      },
    });
    return response;
  } catch (err: any) {
    console.error(
      "Failed to get all soft deleted users",
      err.response?.data || err.message,
    );
    throw err;
  }
};

export const softDeleteUser = async (targetUserId: string) => {
  try {
    const response = await axiosActions.axiosPatch(
      `/auth/soft-delete/account`,
      {
        data: { targetUserId },
      },
    );
    return response;
  } catch (err: any) {
    console.error(
      "Failed to soft delete user",
      err.response?.data || err.message,
    );
    throw err;
  }
};

export const reviveSoftDeletedUser = async (targetUserId: string) => {
  try {
    const response = await axiosActions.axiosPatch(`/auth/revive/account`, {
      data: { targetUserId },
    });
    return response;
  } catch (err: any) {
    console.error("Failed to revive user", err.response?.data || err.message);
    throw err;
  }
};
