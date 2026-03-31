import { axiosActions } from "@/lib/axios/axiosHttp";

export const inviteUser = async (eventId: string, userId:string) => {
  try {
    const response = await axiosActions.axiosPost("participation/invite", {
      data: {eventId, userId},
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
