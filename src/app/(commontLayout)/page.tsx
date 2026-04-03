import UpcomingEventsClient from "@/components/modules/home/client/upcomingEventsClient";
import CreateYourOwnEliteEventSection from "@/components/modules/home/createYourOwnEvent";
import FreePublicEventsSection from "@/components/modules/home/freePublicEvents";
import HeroSection from "@/components/modules/home/heroSection";
import WhyFestikoSection from "@/components/modules/home/whyFestikoSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyFestikoSection />
      <UpcomingEventsClient />
      <FreePublicEventsSection />
      <CreateYourOwnEliteEventSection />
    </div>
  );
};

export default HomePage;
