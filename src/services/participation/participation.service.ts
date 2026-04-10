/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosActions } from "@/lib/axios/axiosHttp";

export const joinEvent = async (eventId: string) => {
  try {
    const response = await axiosActions.axiosPost("/participation/join", {
      data: { eventId },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const confirmPayment = async (eventId: string) => {
  try {
    const response = await axiosActions.axiosPost(
      "/participation/confirm-payment",
      {
        data: {
          eventId,
        },
      },
    );
    return response.data;
  } catch (err: any) {
    console.log("Error in confirmPayment service:", {
      message: err?.message,
      status: err?.response?.status,
      data: err?.response?.data,
    });
    throw err;
  }
};

export const inviteUser = async (eventId: string, userId: string) => {
  try {
    const response = await axiosActions.axiosPost("participation/invite", {
      data: { eventId, userId },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const acceptRejectInvite = async (id: string, status: string) => {
  try {
    const response = await axiosActions.axiosPatch(
      `/participation/invitation/${id}`,
      {
        data: { status },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const approveRejectParticipation = async (
  id: string,
  status: string,
) => {
  try {
    const response = await axiosActions.axiosPatch(`/participation/${id}`, {
      data: { status },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getEventParticipants = async (
  eventId: string,
  params?: {
    page?: number;
    limit?: number;
    search?: string;
    searchFields?: string[];
    enumFields?: string[];
  },
) => {
  try {
    const response = await axiosActions.axiosGet(
      `/participation/participants/${eventId}`,
      {
        params: {
          page: params?.page,
          limit: params?.limit,
          search: params?.search,
          searchFields: params?.searchFields,
          enumFields: params?.enumFields,
        },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getMyParticipations = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  searchFields?: string[];
  enumFields?: string[];
}) => {
  try {
    const response = await axiosActions.axiosGet(
      "/participation/my-participations",
      {
        params: {
          page: params?.page,
          limit: params?.limit,
          search: params?.search,
          searchFields: params?.searchFields,
          enumFields: params?.enumFields,
        },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getMyInvitations = async (params?: {
  page?: number;
  limit?: number;
}) => {
  try {
    const response = await axiosActions.axiosGet(
      "/participation/my-invitations",
      {
        params: {
          page: params?.page,
          limit: params?.limit,
        },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
