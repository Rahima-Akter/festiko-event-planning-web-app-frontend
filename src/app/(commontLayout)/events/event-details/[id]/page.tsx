import EvenDetailsClient from "@/components/modules/events/client/evenDetailsClient";
interface EventDetailsPageProps {
  params: { id: string };
}

const EventDetailsPage = async ({ params }: EventDetailsPageProps) => {
  const { id } = await params;
  return <EvenDetailsClient id={id} />;
};

export default EventDetailsPage;