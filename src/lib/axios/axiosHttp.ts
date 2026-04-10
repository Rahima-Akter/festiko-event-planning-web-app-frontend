import { env } from "@/env";
import axios from "axios";

const apiUrl =
  env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/festiko/v1";

if (!apiUrl) {
  throw new Error("API URL is not defined");
}

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
};

interface AxiosParameterOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  data?: Record<string, unknown>;
}

const axiosGet = async (url: string, options?: AxiosParameterOptions) => {
  try {
    const response = await axiosInstance().get(url, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Faild to execute axios get request", error);
    throw error;
  }
};

const axiosPost = async (url: string, options?: AxiosParameterOptions) => {
  try {
    const response = await axiosInstance().post(url, options?.data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Faild to execute axios post request", error);
    throw error;
  }
};

const axiosPut = async (url: string, options?: AxiosParameterOptions) => {
  try {
    const response = await axiosInstance().put(url, options?.data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Faild to execute axios put request", error);
    throw error;
  }
};

const axiosPatch = async (url: string, options?: AxiosParameterOptions) => {
  try {
    const response = await axiosInstance().patch(url, options?.data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Faild to execute axios put request", error);
    throw error;
  }
};

const axiosDelete = async (url: string, options?: AxiosParameterOptions) => {
  try {
    const response = await axiosInstance().delete(url, {
      params: options?.params,
      headers: options?.headers,
      data: options?.data,
    });
    return response.data;
  } catch (error) {
    console.error("Faild to execute axios delete request", error);
    throw error;
  }
};

export const axiosActions = {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosPatch,
  axiosDelete,
};
