/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";
import {
  CreateEventPayLoad,
  UpdateEventInput,
} from "@/types/event/event.types";
import { se } from "date-fns/locale";

export const createEvent = async (payLoad: CreateEventPayLoad) => {
  try {
    const response = await axiosActions.axiosPost("/events", {
      data: payLoad,
    });
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getAllEvents = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}) => {
  try {
    const response = await axiosActions.axiosGet("/events", {
      params: {
        page: params?.page,
        limit: params?.limit,
        search: params?.search,
        category: params?.category,
      },
    });
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getMyCreatedEvents = async (params?: {
  page?: number;
  limit?: number;
  query?: string;
  search?: string;
  searchFields?: string[];
  enumFields?: string[];
  category?: string;
}) => {
  try {
    const response = await axiosActions.axiosGet("events/my-created-events", {
      params: {
        page: params?.page,
        limit: params?.limit,
        search: params?.search ?? params?.query,
        category: params?.category,
        searchFields: params?.searchFields,
        enumFields: params?.enumFields,
      },
    });
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getEventById = async (id: string) => {
  try {
    const response = await axiosActions.axiosGet(`/events/${id}`);
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const updateEvent = async (id: string, payLoad: UpdateEventInput) => {
  try {
    const response = await axiosActions.axiosPatch(`/events/${id}`, {
      data: payLoad as Record<string, unknown>,
    });
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteEvent = async (id: string) => {
  try {
    const response = await axiosActions.axiosDelete(`/events/${id}`);
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getEventsByUserId = async (id: string) => {
  try {
    const response = await axiosActions.axiosGet(`/events/user/${id}`);
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getEventsByCategory = async (category: string) => {
  try {
    const response = await axiosActions.axiosGet(
      `/events/category/${category}`,
    );
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getUpcomingEvents = async () => {
  try {
    const response = await axiosActions.axiosGet("/events/upcoming");
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};
