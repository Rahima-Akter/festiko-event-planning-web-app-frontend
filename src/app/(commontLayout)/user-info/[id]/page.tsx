import UserInfoClient from "@/components/modules/userInfo/client/userInfoClient";
import React from "react";

const UserInfoPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <UserInfoClient params={{id}} />;
};

export default UserInfoPage;
