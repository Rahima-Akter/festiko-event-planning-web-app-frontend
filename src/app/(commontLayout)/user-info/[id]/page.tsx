import UserInfoClient from "@/components/modules/userInfo/client/userInfoClient";

const UserInfoPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <UserInfoClient params={{id}} />;
};

export default UserInfoPage;