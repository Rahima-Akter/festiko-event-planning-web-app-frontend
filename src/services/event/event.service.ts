/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";
import { CreateEventPayLoad, UpdateEventInput } from "@/types/event/event.types";

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

export const getAllEvents = async () => {
  try {
    const response = await axiosActions.axiosGet("/events");
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getMyCreatedEvents = async () => {
  try {
    const response = await axiosActions.axiosGet("events/my-created-events");
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
