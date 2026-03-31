import ManageParticipantsClient from "@/components/modules/profile/manageParticipants/client/manageParticipantsClient";

const ManageParticipantsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <ManageParticipantsClient eventId={id} />;
};

export default ManageParticipantsPage;
