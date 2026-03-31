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

export const exceptRejectInvite = async (id: string, status: string) => {
  try {
    const response = await axiosActions.axiosPatch(
      `/participation/invitation/${id}`,
      {
        data: { id, status },
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

export const getEventParticipants = async (eventId: string) => {
  try {
    const response = await axiosActions.axiosGet(
      `/participation/participants/${eventId}`,
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getMyParticipations = async () => {
  try {
    const response = await axiosActions.axiosGet(
      "/participation/my-participations",
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
