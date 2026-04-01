/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";

export const createReview = async (payLoad: any) => {
  try {
    const response = await axiosActions.axiosPost("/reviews", {
      data: payLoad,
    });
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const updateReview = async (id: string, payLoad: any) => {
  try {
    const response = await axiosActions.axiosPatch(`/reviews/${id}`, {
      data: payLoad,
    });
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};
export const getEventReviews = async (eventId: string) => {
  try {
    const response = await axiosActions.axiosGet(`/reviews/${eventId}`);
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getMyReviews = async () => {
  try {
    const response = await axiosActions.axiosGet("/reviews/my-reviews");
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteReview = async (id: string) => {
  try {
    const response = await axiosActions.axiosDelete(`/reviews/review/${id}`);
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};